import { createBackend, DELETE } from "./backend.js";
import { DEFAULT_CONFIG, DEFAULT_CATEGORIES, weeksSorted, norm, signupLive } from "./calc.js";

export const S = $state({
  ready: false, error: "", teams: {}, weeks: {}, configRaw: {}, access: {},
  user: null, saving: 0, saveError: "",
  role: null,        // "admin" | "scorer" | null
  admin: false,      // may enter scores (admin or score keeper)
  fullAdmin: false,  // may change settings, access, delete, handle PINs
  hasPinReady: false,
  hasPin: {},        // public: teamId -> marker, for teams that set a PIN
  pins: {}, pinsReady: false // admins only: teamId -> { hash }
});
export const cfg = () => ({ ...DEFAULT_CONFIG, ...S.configRaw });

export let api = null;

export async function start() {
  api = await createBackend();
  const fail = e => (S.error = e?.code === "permission-denied"
    ? "No read access. Have the Firestore rules for pub* been published?" : (e?.message || String(e)));
  let got = 0;
  const done = () => { if (++got >= 3) S.ready = true; };
  api.listenTeams(v => { S.teams = v; done(); }, fail);
  api.listenWeeks(v => { S.weeks = v; done(); }, fail);
  api.listenConfig(v => { S.configRaw = v; done(); }, fail);
  api.listenHasPin(v => { S.hasPin = v; S.hasPinReady = true; }, () => { S.hasPinReady = true; });
  let stopAccess = null, stopPins = null;
  api.onUser((user, role) => {
    S.user = user; S.role = role; S.admin = !!role; S.fullAdmin = role === "admin";
    const admin = S.admin;
    stopAccess?.(); stopAccess = null;
    stopPins?.(); stopPins = null; S.pins = {}; S.pinsReady = false;
    if (admin) {
      stopAccess = api.listenAccess(v => (S.access = v), () => {});
      if (S.fullAdmin) stopPins = api.listenPins(v => { S.pins = v; S.pinsReady = true; }, () => { S.pinsReady = true; });
    }
  });
}

// Wrap writes so the UI can show "Saving…" / errors
export async function save(fn) {
  S.saving++; S.saveError = "";
  try { return await fn(); }
  catch (e) { S.saveError = e?.code === "permission-denied" ? "Not allowed to save (are you signed in with access?)" : (e?.message || String(e)); throw e; }
  finally { S.saving--; }
}

export function findTeamByName(name) {
  const k = norm(name);
  return Object.entries(S.teams).find(([, t]) => [t.name, ...(t.aliases || [])].some(x => norm(x) === k))?.[0];
}

export async function createTeam(name) {
  const id = api.newId();
  await save(() => api.setTeam(id, { name: name.trim(), aliases: [], created: new Date().toISOString() }));
  return id;
}

export function lastWeek() {
  return weeksSorted(S.weeks).at(-1);
}

export async function createWeek(date, { copyTeams }) {
  const prev = lastWeek();
  const categories = prev?.categories?.length && !prev.imported ? prev.categories.map(c => ({ ...c })) : DEFAULT_CATEGORIES.map(c => ({ ...c }));
  const teams = {};
  if (copyTeams && prev) for (const id of Object.keys(prev.teams || {})) if (S.teams[id]) teams[id] = { s: {} };
  return save(() => api.createWeek({ date, title: "", categories, teams, created: new Date().toISOString() }));
}

export const setScore = (weekId, teamId, catId, v) =>
  save(() => api.updateWeek(weekId, { [`teams.${teamId}.s.${catId}`]: v == null ? DELETE : v }));
export const setField = (weekId, teamId, field, v) =>
  save(() => api.updateWeek(weekId, { [`teams.${teamId}.${field}`]: v == null || v === 0 ? DELETE : v }));
export const addTeamToWeek = (weekId, teamId) => save(() => api.updateWeek(weekId, { [`teams.${teamId}`]: { s: {} } }));
export const removeTeamFromWeek = (weekId, teamId) => save(() => api.updateWeek(weekId, { [`teams.${teamId}`]: DELETE }));

// ---------- Team PIN ----------
// Only the hash is stored. The team id is part of it, so the same PIN gives different hashes per team.
export async function pinHash(teamId, pin) {
  const bytes = new TextEncoder().encode(`pubquiz:${teamId}:${String(pin).trim()}`);
  const buf = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}
export const validPin = pin => /^\d{4,8}$/.test(String(pin).trim());
export const removePin = teamId => save(() => api.batch([
  { op: "delete", col: "pins", id: teamId }, { op: "delete", col: "hasPin", id: teamId }
]));
const pinOps = teamId => S.hasPin[teamId]
  ? [{ op: "delete", col: "pins", id: teamId }, { op: "delete", col: "hasPin", id: teamId }] : [];
export async function deleteTeam(teamId) {
  await save(() => api.batch([...pinOps(teamId), { op: "delete", col: "teams", id: teamId }]));
}

// ---------- QR sign-up ----------
export const openWeek = () => weeksSorted(S.weeks).reverse().find(w => signupLive(w));

export async function setSignupOpen(weekId, open) {
  // Only one quiz night can be open at a time, so the same QR code always means tonight
  const ops = [];
  for (const [id, w] of Object.entries(S.weeks)) {
    if (id === weekId) ops.push({ op: "update", col: "weeks", id, data: { signupOpen: open } });
    else if (open && w.signupOpen) ops.push({ op: "update", col: "weeks", id, data: { signupOpen: false } });
  }
  await save(() => api.batch(ops));
}

// Turn a sign-up into a team in the week. Idempotent: a new team's id comes from the
// sign-up id, so two admin tabs handling the same sign-up produce the same result.
// A sign-up that names a team with a PIN but didn't come through the PIN check (no teamId)
// is held for the quizmaster instead (returned with held: true and left in place); pass
// force to add it anyway. With a teamId, the Firestore rules already checked the PIN.
export async function processSignup(weekId, sid, s, { force = false } = {}) {
  const name = String(s.name || "").trim().slice(0, 60);
  const members = Math.max(0, Math.min(30, Math.round(Number(s.members) || 0)));
  if (!name) { await api.deleteSignup(sid); return null; }
  let tid = (s.teamId && S.teams[s.teamId]) ? s.teamId : findTeamByName(name);
  if (tid && S.hasPin[tid] && s.teamId !== tid && !force) return { sid, tid, name, members, held: true, signup: s };
  const isNew = !tid;
  const ops = [];
  if (isNew) {
    tid = "su" + sid;
    ops.push({ op: "set", col: "teams", id: tid, data: { name, aliases: [], created: new Date().toISOString(), viaSignup: true } });
  }
  const already = !!S.weeks[weekId]?.teams?.[tid];
  ops.push({ op: "update", col: "weeks", id: weekId, data: already
    ? { [`teams.${tid}.members`]: members || DELETE }
    : { [`teams.${tid}`]: members ? { s: {}, members } : { s: {} } } });
  await save(() => api.batch(ops));
  await api.deleteSignup(sid);
  return { sid, tid, name, members, isNew, already };
}

// Merge team `from` into team `into`: moves its weeks and keeps the old name as an alias
export async function mergeTeams(from, into) {
  const a = S.teams[from], b = S.teams[into];
  const ops = [];
  for (const [wid, w] of Object.entries(S.weeks)) {
    const e = w.teams?.[from];
    if (!e) continue;
    const t = w.teams[into];
    let merged = e;
    if (t) {
      // Both listed that night: fine as long as only one of them has scores
      if (Object.keys(e.s || {}).length && Object.keys(t.s || {}).length)
        throw new Error(`Both teams have scores on ${w.date}; remove one of them from that week first.`);
      merged = { ...t, ...e, s: { ...(t.s || {}), ...(e.s || {}) } };
      if (e.members == null && t.members != null) merged.members = t.members;
    }
    ops.push({ op: "update", col: "weeks", id: wid, data: { [`teams.${into}`]: merged, [`teams.${from}`]: DELETE } });
  }
  const aliases = [...new Set([...(b.aliases || []), a.name, ...(a.aliases || [])])].filter(x => norm(x) !== norm(b.name));
  ops.push({ op: "update", col: "teams", id: into, data: { aliases } });
  ops.push(...pinOps(from)); // the merged-away team's PIN goes; the kept team keeps its own
  ops.push({ op: "delete", col: "teams", id: from });
  await save(() => api.batch(ops));
}

// Undo the spreadsheet import: deletes imported nights, then imported teams that have no
// results left in other nights. Nights and teams added in the app are kept.
export function importedSummary() {
  const weeks = Object.entries(S.weeks).filter(([, w]) => w.imported).map(([id]) => id);
  const left = new Set(Object.entries(S.weeks).filter(([, w]) => !w.imported).flatMap(([, w]) => Object.keys(w.teams || {})));
  const teams = Object.entries(S.teams).filter(([id, t]) => t.imported && !left.has(id)).map(([id]) => id);
  return { weeks, teams };
}
export async function removeImported() {
  const { weeks, teams } = importedSummary();
  const ops = [
    ...weeks.map(id => ({ op: "delete", col: "weeks", id })),
    ...teams.flatMap(id => [...pinOps(id), { op: "delete", col: "teams", id }])
  ];
  // Firestore allows 500 writes per batch
  for (let i = 0; i < ops.length; i += 450) await save(() => api.batch(ops.slice(i, i + 450)));
  return { weeks: weeks.length, teams: teams.length };
}

// Import weeks from the old spreadsheet (see import-haust2026.json)
export async function importOld(data) {
  const ops = [];
  const newTeams = {};
  const idFor = name => {
    const existing = findTeamByName(name) || Object.entries(newTeams).find(([, t]) => norm(t.name) === norm(name))?.[0];
    if (existing) return existing;
    const id = api.newId();
    newTeams[id] = { name: name.trim(), aliases: [], created: new Date().toISOString(), imported: true };
    return id;
  };
  const cats = [
    { id: "r1", name: "Round 1", round: "Round 1" },
    { id: "r2", name: "Round 2", round: "Round 2" },
    { id: "pic", name: "Picture quiz", round: "Picture quiz" }
  ];
  let skipped = 0;
  for (const w of data) {
    if (Object.values(S.weeks).some(x => x.date === w.dato)) { skipped++; continue; }
    const teams = {};
    for (const r of w.rader) {
      const id = idFor(r.namn);
      const e = { s: { r1: r.p.r1, r2: r.p.r2, pic: r.p.pic } };
      if (r.antall) e.members = r.antall;
      if (r.trekk) e.adjust = r.trekk;
      teams[id] = e;
    }
    ops.push({ op: "set", col: "weeks", id: api.newId(), data: { date: w.dato, title: "Imported from spreadsheet", imported: true, categories: cats, teams, created: new Date().toISOString() } });
  }
  for (const [id, t] of Object.entries(newTeams)) ops.unshift({ op: "set", col: "teams", id, data: t });
  if (ops.length) await save(() => api.batch(ops));
  return { weeks: data.length - skipped, skipped, teams: Object.keys(newTeams).length };
}
