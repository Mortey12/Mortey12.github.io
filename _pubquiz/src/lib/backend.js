import { signupLive } from "./calc.js";

// Data backends. The app talks only to this interface, so it can run against
// Firestore (live) or an in-browser demo store (?demo in the URL).
//
// Firestore layout (same project as Etnequizen, separate pub* collections):
//   pubLag/{teamId}      { name, aliases: [], created }
//   pubVeke/{weekId}     { date: "YYYY-MM-DD", title, categories: [{id, name, round, max?}],
//                          teams: { [teamId]: { members?, adjust?, s: { [catId]: number } } } }
//   pubConfig/settings   { penaltyFrom, penaltyPer, seasonMode, bestN }
//   pubTilgang/{email}   { added, role? }  role "scorer" = score keeper; no role = full admin
//                        (quiz@ and any <role>.quiz@samfunnetibergen.no account are always full admin)
//   pubPin/{teamId}      { hash, weekId }  optional team PIN, SHA-256 (admins only can read);
//                        can only be set while that week's sign-up is open and the team is on its list
//   pubHarPin/{teamId}   { created }  public marker: this team has a PIN
//   pubSignup/{id}       { weekId, name, members, created, teamId?, pinHash? }

export const DELETE = Symbol("delete");

// Accounts that may always edit, without being on the access list. Keep in sync with
// pubQuizKonto() in quizpremiar/firestore.rules.
export const QUIZ_ACCOUNT = /^([a-z0-9._-]+\.)?quiz@samfunnetibergen\.no$/;

const COLS = { teams: "pubLag", weeks: "pubVeke", pins: "pubPin", hasPin: "pubHarPin" };

export const isDemo = new URLSearchParams(location.search).has("demo");

export async function createBackend() {
  return isDemo ? demoBackend() : firestoreBackend();
}

// ---------------- Firestore ----------------
async function firestoreBackend() {
  const { initializeApp } = await import("firebase/app");
  const { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } = await import("firebase/auth");
  const fs = await import("firebase/firestore");
  const { getFirestore, collection, doc, onSnapshot, addDoc, setDoc, updateDoc, deleteDoc, getDoc, deleteField, writeBatch } = fs;

  const app = initializeApp({
    apiKey: "AIzaSyB9pQJFv0_uhsWlEfMyibc608uxxDAtpkI",
    authDomain: "quiz-samarbeid.firebaseapp.com",
    projectId: "quiz-samarbeid",
    storageBucket: "quiz-samarbeid.firebasestorage.app",
    messagingSenderId: "968266660672",
    appId: "1:968266660672:web:e86724467bb2b398edd8a5"
  }, "pubquiz");
  const auth = getAuth(app);
  const db = getFirestore(app);

  const conv = patch => {
    const out = {};
    for (const [k, v] of Object.entries(patch)) out[k] = v === DELETE ? deleteField() : v;
    return out;
  };
  const listen = (name, cb, err) => onSnapshot(collection(db, name), snap => {
    const o = {};
    snap.forEach(d => (o[d.id] = d.data()));
    cb(o);
  }, err);

  return {
    kind: "firestore",
    onUser(cb) {
      return onAuthStateChanged(auth, async user => {
        let role = null; // "admin", "scorer" or null (view only); same logic as firestore.rules
        if (user?.email && user.emailVerified) {
          if (QUIZ_ACCOUNT.test(user.email.toLowerCase())) role = "admin";
          else try {
            const d = await getDoc(doc(db, "pubTilgang", user.email.toLowerCase()));
            role = !d.exists() ? null : d.data().role === "scorer" ? "scorer" : "admin";
          } catch { role = null; }
        }
        cb(user ? { email: user.email, name: user.displayName } : null, role);
      });
    },
    async login() {
      try { await signInWithPopup(auth, new GoogleAuthProvider()); }
      catch (e) { if (e.code === "auth/popup-blocked") await signInWithRedirect(auth, new GoogleAuthProvider()); else throw e; }
    },
    logout: () => signOut(auth),
    listenTeams: (cb, err) => listen("pubLag", cb, err),
    listenWeeks: (cb, err) => listen("pubVeke", cb, err),
    listenConfig: (cb, err) => onSnapshot(doc(db, "pubConfig", "settings"), d => cb(d.exists() ? d.data() : {}), err),
    listenAccess: (cb, err) => listen("pubTilgang", cb, err),
    newId: () => doc(collection(db, "pubLag")).id,
    setTeam: (id, data) => setDoc(doc(db, "pubLag", id), data),
    updateTeam: (id, patch) => updateDoc(doc(db, "pubLag", id), conv(patch)),
    deleteTeam: id => deleteDoc(doc(db, "pubLag", id)),
    async createWeek(data) { return (await addDoc(collection(db, "pubVeke"), data)).id; },
    setWeek: (id, data) => setDoc(doc(db, "pubVeke", id), data),
    updateWeek: (id, patch) => updateDoc(doc(db, "pubVeke", id), conv(patch)),
    deleteWeek: id => deleteDoc(doc(db, "pubVeke", id)),
    setConfig: patch => setDoc(doc(db, "pubConfig", "settings"), patch, { merge: true }),
    addAccess: (email, role) => setDoc(doc(db, "pubTilgang", email.toLowerCase()), { added: new Date().toISOString(), ...(role === "scorer" ? { role } : {}) }),
    removeAccess: email => deleteDoc(doc(db, "pubTilgang", email)),
    // Team sign-up from the QR code (anyone can create, only admins read/delete)
    addSignup: (weekId, name, members, extra = {}) => addDoc(collection(db, "pubSignup"), { weekId, name, members, ...extra, created: fs.serverTimestamp() }),
    listenSignups: (weekId, cb, err) => onSnapshot(fs.query(collection(db, "pubSignup"), fs.where("weekId", "==", weekId)), snap => {
      const o = {};
      snap.forEach(d => (o[d.id] = d.data()));
      cb(o);
    }, err),
    deleteSignup: id => deleteDoc(doc(db, "pubSignup", id)),
    // Optional team PIN: anyone may set one on a team that has none; only admins read or remove it
    listenHasPin: (cb, err) => listen("pubHarPin", cb, err),
    listenPins: (cb, err) => listen("pubPin", cb, err),
    async setPin(teamId, hash, weekId) {
      const b = writeBatch(db);
      b.set(doc(db, "pubPin", teamId), { hash, weekId });
      b.set(doc(db, "pubHarPin", teamId), { created: fs.serverTimestamp() });
      await b.commit();
    },
    // Several writes as one atomic batch: [{op:"set"|"update"|"delete", col:"teams"|"weeks", id, data}]
    async batch(ops) {
      const b = writeBatch(db);
      for (const o of ops) {
        const ref = doc(db, COLS[o.col], o.id);
        if (o.op === "set") b.set(ref, o.data);
        else if (o.op === "update") b.update(ref, conv(o.data));
        else b.delete(ref);
      }
      await b.commit();
    }
  };
}

// ---------------- Demo (localStorage) ----------------
function demoBackend() {
  const KEY = "pubquiz-demo";
  let st;
  try { st = JSON.parse(localStorage.getItem(KEY)); } catch { st = null; }
  st ||= { teams: {}, weeks: {}, config: {}, access: { "demo@example.com": {} } };
  st.signups ||= {}; st.pins ||= {}; st.hasPin ||= {};
  const subs = { teams: [], weeks: [], config: [], access: [], signups: [], pins: [], hasPin: [] };
  // Keep several demo tabs in sync (e.g. a "phone" tab signing up and a "laptop" tab entering scores)
  addEventListener("storage", e => {
    if (e.key !== KEY || !e.newValue) return;
    try { st = JSON.parse(e.newValue); st.signups ||= {}; st.pins ||= {}; st.hasPin ||= {}; } catch { return; }
    for (const k of Object.keys(subs)) subs[k].forEach(cb => cb(structuredClone(st[k])));
  });
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch {} };
  const emit = k => { save(); const v = structuredClone(st[k]); subs[k].forEach(cb => cb(v)); };
  const sub = k => cb => { subs[k].push(cb); queueMicrotask(() => cb(structuredClone(st[k]))); return () => (subs[k] = subs[k].filter(x => x !== cb)); };
  const applyPatch = (obj, patch) => {
    for (const [path, v] of Object.entries(patch)) {
      const parts = path.split(".");
      let o = obj;
      for (const p of parts.slice(0, -1)) o = o[p] ??= {};
      if (v === DELETE) delete o[parts.at(-1)]; else o[parts.at(-1)] = structuredClone(v);
    }
  };
  const rid = () => Math.random().toString(36).slice(2, 12);
  const col = c => c;
  const api = {
    kind: "demo",
    // ?demo&role=scorer tries the app as a score keeper
    onUser(cb) { queueMicrotask(() => cb({ email: "demo@example.com", name: "Demo" }, /role=scorer/.test(location.search) ? "scorer" : "admin")); return () => {}; },
    async login() {}, async logout() {},
    listenTeams: sub("teams"), listenWeeks: sub("weeks"), listenConfig: sub("config"), listenAccess: sub("access"),
    newId: rid,
    async setTeam(id, d) { st.teams[id] = structuredClone(d); emit("teams"); },
    async updateTeam(id, p) { applyPatch(st.teams[id], p); emit("teams"); },
    async deleteTeam(id) { delete st.teams[id]; emit("teams"); },
    async createWeek(d) { const id = rid(); st.weeks[id] = structuredClone(d); emit("weeks"); return id; },
    async setWeek(id, d) { st.weeks[id] = structuredClone(d); emit("weeks"); },
    async updateWeek(id, p) { applyPatch(st.weeks[id], p); emit("weeks"); },
    async deleteWeek(id) { delete st.weeks[id]; emit("weeks"); },
    async setConfig(p) { Object.assign(st.config, p); emit("config"); },
    async addAccess(e, role) { st.access[e.toLowerCase()] = role === "scorer" ? { role } : {}; emit("access"); },
    async removeAccess(e) { delete st.access[e]; emit("access"); },
    async addSignup(weekId, name, members, extra = {}) {
      const denied = () => Object.assign(new Error("denied"), { code: "permission-denied" });
      if (!signupLive(st.weeks[weekId])) throw denied();
      if (extra.teamId && st.pins[extra.teamId] && st.pins[extra.teamId].hash !== extra.pinHash) throw denied(); // same check as the rules
      st.signups[rid()] = { weekId, name, members, ...extra, created: new Date().toISOString() }; emit("signups");
    },
    listenHasPin: sub("hasPin"), listenPins: sub("pins"),
    async setPin(teamId, hash, weekId) {
      const w = st.weeks[weekId]; // same checks as the rules
      if (!st.teams[teamId] || st.pins[teamId] || !signupLive(w) || !w.teams?.[teamId]) throw Object.assign(new Error("denied"), { code: "permission-denied" });
      st.pins[teamId] = { hash, weekId }; st.hasPin[teamId] = { created: new Date().toISOString() };
      emit("pins"); emit("hasPin");
    },
    listenSignups(weekId, cb) {
      const f = v => cb(Object.fromEntries(Object.entries(v).filter(([, s]) => s.weekId === weekId)));
      return sub("signups")(f);
    },
    async deleteSignup(id) { delete st.signups[id]; emit("signups"); },
    async batch(ops) {
      for (const o of ops) {
        const c = st[col(o.col)];
        if (o.op === "set") c[o.id] = structuredClone(o.data);
        else if (o.op === "update") applyPatch(c[o.id], o.data);
        else delete c[o.id];
      }
      emit("teams"); emit("weeks"); emit("pins"); emit("hasPin");
    },
    resetDemo() { localStorage.removeItem(KEY); location.reload(); }
  };
  return api;
}
