// Pure scoring logic: week results, season table and category strengths.

// seasonMode: "field" = share of the field (winner 100), "placement" = teams beaten + 1, "raw" = total score
export const DEFAULT_CONFIG = { penaltyFrom: 6, penaltyPer: 5, seasonMode: "field", bestN: 13, minNights: 8 };

// Plain-language description of how a night turns into season points
export function pointsRule(cfg) {
  if (cfg.seasonMode === "raw") return "a team's season points for a night are its total score that night";
  if (cfg.seasonMode === "placement") return "a team gets one point per team it beats, plus one (the winner of a 30-team night gets 30)";
  return "a team gets 100 × (teams that night − its place + 1) ÷ teams that night: the winner always gets 100, the middle of the table about 50";
}

export const DEFAULT_CATEGORIES = [
  { id: "c1", name: "Category 1", round: "Round 1" },
  { id: "c2", name: "Category 2", round: "Round 1" },
  { id: "c3", name: "Round 2", round: "Round 2" },
  { id: "c4", name: "Picture quiz", round: "Picture quiz" }
];

// "Hansa-Lovers", "HANSA LOVERS" and "hansalovers" become the same key
export const norm = s => (s || "").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "")
  .replace(/ø/g, "o").replace(/æ/g, "ae").replace(/[^a-z0-9]/g, "");

export function parseScore(str) {
  const t = String(str ?? "").trim().replace(",", ".").replace("½", ".5");
  if (t === "") return null;
  const n = Number(t.startsWith(".") ? "0" + t : t);
  return Number.isFinite(n) ? n : undefined; // undefined = invalid
}
export const fmt = n => (n == null ? "" : Number.isInteger(n) ? String(n) : String(Math.round(n * 100) / 100));

export function penalty(entry, cfg) {
  const extra = Math.max(0, (entry?.members || 0) - (cfg.penaltyFrom ?? 6));
  return extra * (cfg.penaltyPer ?? 5) + (entry?.adjust || 0);
}

export function seasonOf(date) {
  const [y, m] = date.split("-").map(Number);
  return m <= 6 ? `Spring ${y}` : `Autumn ${y}`;
}

const sortDate = (a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0);
export const weeksSorted = weeks => Object.entries(weeks).map(([id, w]) => ({ id, ...w })).sort(sortDate);

// Competition ranking (1, 2, 2, 4): ties share the better placing
function rank(rows, key) {
  rows.sort((a, b) => key(b) - key(a));
  rows.forEach((r, i) => (r.place = i > 0 && key(rows[i - 1]) === key(r) ? rows[i - 1].place : i + 1));
  return rows;
}

// One row per team that has at least one score entered
export function weekResults(week, teams, cfg) {
  const cats = week.categories || [];
  const rounds = roundsOf(cats);
  const rows = [];
  for (const [teamId, e] of Object.entries(week.teams || {})) {
    const s = e.s || {};
    const entered = cats.filter(c => s[c.id] != null).length;
    if (!entered) continue;
    const raw = cats.reduce((t, c) => t + (s[c.id] || 0), 0);
    const pen = penalty(e, cfg);
    rows.push({
      teamId, name: teams[teamId]?.name || "(deleted team)", members: e.members, s,
      roundSums: Object.fromEntries(rounds.map(r => [r.name, r.cats.reduce((t, c) => t + (s[c.id] || 0), 0)])),
      raw, penalty: pen, total: raw - pen, complete: entered === cats.length
    });
  }
  rank(rows, r => r.total);
  const n = rows.length;
  rows.forEach(r => (r.points = seasonPoints(r, n, cfg)));
  return rows;
}

export function seasonPoints(row, n, cfg) {
  if (cfg.seasonMode === "raw") return row.total;
  if (cfg.seasonMode === "placement") return n - row.place + 1;
  return Math.round((1000 * (n - row.place + 1)) / n) / 10; // share of the field, one decimal
}

export function roundsOf(cats) {
  const out = [];
  for (const c of cats) {
    let r = out.find(x => x.name === c.round);
    if (!r) out.push((r = { name: c.round, cats: [] }));
    r.cats.push(c);
  }
  return out;
}

// Periods to choose from: each semester and each year that has weeks
export function periods(weeks) {
  const set = new Map();
  for (const w of weeksSorted(weeks)) {
    const s = seasonOf(w.date), y = w.date.slice(0, 4);
    // Year first, so after reversing the latest semester comes first (the default)
    if (!set.has(y)) set.set(y, { id: y, label: `Whole year ${y}`, test: d => d.startsWith(y) });
    if (!set.has(s)) set.set(s, { id: s, label: s, test: d => seasonOf(d) === s });
  }
  const out = [...set.values()].reverse();
  if (out.length) out.push({ id: "*", label: "All time", test: () => true });
  // Months, newest first. In a month every night counts (see periodCfg)
  const months = new Map();
  for (const w of weeksSorted(weeks)) {
    const m = w.date.slice(0, 7);
    if (!months.has(m)) months.set(m, {
      id: m, month: true, test: d => d.startsWith(m),
      label: new Date(m + "-15T12:00").toLocaleDateString("en-GB", { month: "long", year: "numeric" })
    });
  }
  return out.concat([...months.values()].reverse());
}

// Settings for a period's table: a month counts every night, with no minimum
export const periodCfg = (cfg, period) => (period?.month ? { ...cfg, bestN: 0, minNights: 0 } : cfg);

export function seasonTable(weeks, teams, cfg, test) {
  const list = weeksSorted(weeks).filter(w => test(w.date));
  const by = {};
  for (const w of list) {
    for (const r of weekResults(w, teams, cfg)) {
      const t = (by[r.teamId] ||= { teamId: r.teamId, name: r.name, results: [] });
      t.results.push({ weekId: w.id, date: w.date, place: r.place, points: r.points, total: r.total });
    }
  }
  const bestN = Number(cfg.bestN) || 0;
  const rows = Object.values(by).map(t => {
    const pts = t.results.map(x => x.points).sort((a, b) => b - a);
    const counted = bestN ? pts.slice(0, bestN) : pts;
    const places = t.results.map(x => x.place);
    return {
      ...t, name: teams[t.teamId]?.name || t.name,
      score: Math.round(counted.reduce((a, b) => a + b, 0) * 10) / 10, played: t.results.length,
      wins: places.filter(p => p === 1).length, podiums: places.filter(p => p <= 3).length,
      avgPlace: places.reduce((a, b) => a + b, 0) / places.length, best: Math.min(...places),
      qualified: t.results.length >= (Number(cfg.minNights) || 0)
    };
  });
  rows.sort((a, b) => b.score - a.score || b.wins - a.wins || a.avgPlace - b.avgPlace);
  rows.forEach((r, i) => {
    const p = rows[i - 1];
    r.place = p && p.score === r.score && p.wins === r.wins && p.avgPlace === r.avgPlace ? p.place : i + 1;
  });
  return { rows, weekCount: list.length, anyQualified: rows.some(r => r.qualified) };
}

// Category strengths. A team's index in a category = its score / the field average
// for that category that week (x100), averaged over the weeks it played.
// Categories are matched by name across weeks; a round with several categories
// also gets a combined entry under the round's name, so it lines up with weeks
// where that round was entered as a single score.
export function categoryStats(weeks, teams, cfg, test) {
  const stats = {}; // key -> { name, teams: { teamId: { n, idx, sum, ranks } } }
  for (const w of weeksSorted(weeks).filter(w => test(w.date))) {
    const rows = weekResults(w, teams, cfg);
    if (!rows.length) continue;
    const keys = [];
    for (const c of w.categories || []) keys.push({ name: c.name, get: r => r.s[c.id] });
    for (const r of roundsOf(w.categories || [])) {
      if (r.cats.length > 1 && !r.cats.some(c => norm(c.name) === norm(r.name))) keys.push({ name: r.name, get: row => r.cats.some(c => row.s[c.id] != null) ? row.roundSums[r.name] : null });
    }
    for (const k of keys) {
      const vals = rows.map(r => ({ id: r.teamId, v: k.get(r) })).filter(x => x.v != null);
      if (vals.length < 2) continue;
      const avg = vals.reduce((t, x) => t + x.v, 0) / vals.length;
      const sorted = [...vals].sort((a, b) => b.v - a.v);
      const key = norm(k.name);
      const cat = (stats[key] ||= { key, name: k.name, teams: {} });
      for (const x of vals) {
        const t = (cat.teams[x.id] ||= { n: 0, idxSum: 0, sum: 0, pctSum: 0 });
        const better = sorted.filter(y => y.v > x.v).length;
        t.n++; t.sum += x.v; t.idxSum += avg > 0 ? (x.v / avg) * 100 : 100;
        t.pctSum += vals.length > 1 ? 1 - better / (vals.length - 1) : 1; // 1 = best that night
      }
    }
  }
  return Object.values(stats).map(c => ({
    ...c,
    teams: Object.entries(c.teams).map(([teamId, t]) => ({
      teamId, name: teams[teamId]?.name || "?", n: t.n, avg: t.sum / t.n,
      index: Math.round(t.idxSum / t.n), topPct: Math.round((t.pctSum / t.n) * 100)
    })).sort((a, b) => b.index - a.index)
  }));
}

// Find matching teams in the register for a typed name (exact key, alias, or substring)
export function matchTeams(q, teams, exclude = new Set()) {
  const k = norm(q);
  if (!k) return [];
  const out = [];
  for (const [id, t] of Object.entries(teams)) {
    if (exclude.has(id)) continue;
    const keys = [t.name, ...(t.aliases || [])].map(norm);
    let score = 0;
    if (keys.includes(k)) score = 100;
    else if (keys.some(x => x.startsWith(k))) score = 60;
    else if (keys.some(x => x.includes(k))) score = 40;
    else if (k.length >= 4 && keys.some(x => similar(x, k))) score = 20;
    if (score) out.push({ id, name: t.name, score });
  }
  return out.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name)).slice(0, 8);
}

// Cheap fuzzy match: edit distance at most ~25 % of the length
function similar(a, b) {
  if (Math.abs(a.length - b.length) > 3) return false;
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length] <= Math.max(1, Math.floor(Math.max(a.length, b.length) / 4));
}
