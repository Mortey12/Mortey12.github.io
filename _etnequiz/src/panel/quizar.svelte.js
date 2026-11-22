// Fleire quizar: lage ny, kopiere, gjere aktiv (storskjermen), slette, og flytte over den gamle quizen.
import { db } from "../lib/firebase.js";
import { doc, getDoc, getDocs, collection, writeBatch, setDoc } from "firebase/firestore";
import { live, TOM_STATE, quizDoc, lagDoc, kodeDoc, rettDoc, offentlegDoc, aktivDoc, stateDoc } from "../lib/data.svelte.js";
import { TOM_QUIZ } from "../lib/quiz.js";

const rein = v => JSON.parse(JSON.stringify(v ?? null));

// Lesbar id frå namnet, med litt tilfeldig på slutten så to quizar med same namn ikkje kolliderer
export function quizId(namn){
  const s = String(namn || "quiz").toLowerCase().replace(/æ/g, "ae").replace(/ø/g, "o").replace(/å/g, "a")
    .normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "quiz";
  return s + "-" + Math.random().toString(36).slice(2, 6);
}

// Éin gong: flyttar den gamle quizen (etne/quiz, etneLag, etneKode, etne/rett) over til ei eiga mappe.
// Det gamle blir ikkje rørt, så den gamle sida verkar som før.
export async function flyttOver(){
  const gq = await getDoc(doc(db, "etne", "quiz"));
  const quiz = gq.exists() ? gq.data() : { ...TOM_QUIZ };
  const id = quizId(quiz.tittel);
  const [lag, kodar, rett, no] = await Promise.all([
    getDocs(collection(db, "etneLag")), getDocs(collection(db, "etneKode")),
    getDoc(doc(db, "etne", "rett")), getDoc(doc(db, "etneLive", "no"))
  ]);
  const b = writeBatch(db);
  b.set(quizDoc(id), { ...rein(quiz), endra: Date.now() });
  lag.docs.forEach(d => b.set(lagDoc(d.id, id), d.data()));
  kodar.docs.forEach(d => b.set(kodeDoc(d.id, id), d.data()));
  if (rett.exists()) b.set(rettDoc(id), rett.data());
  const n = no.exists() ? no.data() : {};
  b.set(offentlegDoc(id), { tittel: n.tittel || quiz.tittel || "", barmeny: n.barmeny || "", lagnamn: n.lagnamn || {}, ope: false, vist: [] });
  b.set(aktivDoc(), { quiz: id });
  b.set(doc(db, "etneLive", "no"), { aktivQuiz: id }, { merge: true });
  await b.commit();
  return id;
}

// Ny quiz: tom, eller med spørsmåla frå den opne quizen. medLag: lagnamn og bordnummer blir med,
// men ikkje poeng, retting, joker eller QR-kodar (nye kort per quiz).
export async function nyQuiz({ kopi = false, medLag = false, namn = "" } = {}){
  const no = rein(live.quiz || TOM_QUIZ);
  const felles = { undertittel: no.undertittel, wifi: no.wifi, wifiPassord: no.wifiPassord, barmeny: no.barmeny };
  const quiz = kopi ? { ...no, tittel: namn || (no.tittel || "Quiz") + " (kopi)" } : { ...TOM_QUIZ, ...felles, tittel: namn || "Ny quiz" };
  delete quiz.arkivId;
  const id = quizId(quiz.tittel);
  const b = writeBatch(db);
  b.set(quizDoc(id), { ...rein(quiz), endra: Date.now() });
  const lag = medLag ? live.lag.filter(l => (l.namn || "").trim()) : [];
  for (const l of lag) b.set(lagDoc(l.id, id), { bord: l.bord ?? Number(l.id), namn: l.namn.trim(), joker: "", poeng: {} });
  b.set(offentlegDoc(id), { tittel: quiz.tittel || "", barmeny: quiz.barmeny || "", lagnamn: Object.fromEntries(lag.map(l => [l.id, l.namn.trim()])), ope: false, vist: [] });
  await b.commit();
  return id;
}

// Gjer ein quiz aktiv: storskjermen byter til han og startar frå byrjinga.
// Gamle bordkort utan quiz i QR-koden følgjer òg den aktive quizen.
export async function gjerAktiv(id){
  const b = writeBatch(db);
  b.set(aktivDoc(), { quiz: id });
  b.set(stateDoc(), { ...TOM_STATE, fasit: null });
  b.set(doc(db, "etneLive", "no"), { aktivQuiz: id }, { merge: true });
  await b.commit();
}

// Slettar ein quiz med alt under. Den aktive kan ikkje slettast.
export async function slettQuiz(id){
  if (id === live.aktivId) throw new Error("Quizen på storskjermen kan ikkje slettast. Gjer ein annan aktiv først.");
  const under = await Promise.all(["lag", "kode", "meta", "offentleg", "resultat"].map(s => getDocs(collection(db, "etneQuiz", id, s))));
  let b = writeBatch(db), n = 0;
  for (const s of under) for (const d of s.docs) { b.delete(d.ref); if (++n % 400 === 0) { await b.commit(); b = writeBatch(db); } }
  b.delete(quizDoc(id));
  await b.commit();
}

export const finstGamal = async () => (await getDoc(doc(db, "etne", "quiz"))).exists();
export const tomAktiv = () => setDoc(aktivDoc(), { quiz: "" }, { merge: true });
