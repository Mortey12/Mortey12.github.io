// Felles sanntidsdata frå Firestore for panelet og storskjermen (berre quizmasterane).
// Kvar quiz har si eiga mappe: etneQuiz/<id> (spørsmåla) med lag, kode, meta/rett, offentleg/no og resultat under.
// Felles for alle quizar: etne/state (kva storskjermen viser) og etne/aktiv (kva quiz som er på storskjermen).
import { db } from "./firebase.js";
import { doc, collection, onSnapshot } from "firebase/firestore";
import { TOM_QUIZ } from "./quiz.js";

export const TOM_STATE = { steg: 0, modus: "plan", avslort: 0, sist: 0 };
export const live = $state({
  quiz: null, state: { ...TOM_STATE }, lag: [], klar: false, feil: "",
  // no: det mobilane får sjå for denne quizen (offentleg/no). kodar: QR-kodane til borda. rett: poeng per spørsmål.
  // rettEkstra: eigne faste summar per runde i Retting (t.d. 1,5 eller 2)
  no: {}, kodar: {}, rett: {}, rettEkstra: {},
  // quizId: quizen dette vindauget arbeider med. aktivId: quizen på storskjermen. quizar: alle quizane (id og namn).
  quizId: "", aktivId: "", aktivKlar: false, quizar: []
});

// Stiar til den quizen som er open i dette vindauget
const Q = "etneQuiz";
export const quizDoc = (id = live.quizId) => doc(db, Q, id);
export const lagDoc = (id, q = live.quizId) => doc(db, Q, q, "lag", String(id));
export const lagSamling = (q = live.quizId) => collection(db, Q, q, "lag");
export const kodeDoc = (id, q = live.quizId) => doc(db, Q, q, "kode", String(id));
export const rettDoc = (q = live.quizId) => doc(db, Q, q, "meta", "rett");
export const offentlegDoc = (q = live.quizId) => doc(db, Q, q, "offentleg", "no");
export const resultatDoc = (id, q = live.quizId) => doc(db, Q, q, "resultat", id);
export const stateDoc = () => doc(db, "etne", "state");
export const aktivDoc = () => doc(db, "etne", "aktiv");

const feil = e => live.feil = e.message;
let felles = [], perQuiz = [];

// Felles: storskjermen, kva quiz som er aktiv og lista over quizar
export function startLive({ kodar = false, folgAktiv = false, vel } = {}){
  stoppLive();
  felles.push(onSnapshot(stateDoc(), s => { live.state = { ...TOM_STATE, ...(s.exists() ? s.data() : {}) }; }, feil));
  felles.push(onSnapshot(aktivDoc(), s => {
    live.aktivId = s.exists() ? (s.data().quiz || "") : ""; live.aktivKlar = true;
    if (folgAktiv) opneQuiz(live.aktivId, { kodar });
    else if (!live.quizId) opneQuiz((vel && vel()) || live.aktivId, { kodar });
  }, feil));
  felles.push(onSnapshot(collection(db, Q), s => {
    live.quizar = s.docs.map(d => ({ id: d.id, namn: d.data().tittel || "Utan namn", endra: d.data().endra || 0 }))
      .sort((a, b) => b.endra - a.endra);
  }, feil));
}

// Opnar ein quiz i dette vindauget: spørsmål, lag, kodar, poenginnstillingar og det mobilane ser
export function opneQuiz(id, { kodar = false } = {}){
  if (id === live.quizId && perQuiz.length) return;
  perQuiz.forEach(u => u()); perQuiz = [];
  live.quizId = id || ""; live.quiz = null; live.lag = []; live.kodar = {}; live.rett = {}; live.rettEkstra = {}; live.no = {}; live.klar = false;
  if (!id) { live.klar = true; return; }
  perQuiz.push(onSnapshot(quizDoc(id), s => { live.quiz = s.exists() ? { ...TOM_QUIZ, ...s.data() } : null; live.klar = true; }, feil));
  perQuiz.push(onSnapshot(lagSamling(id), s => { live.lag = s.docs.map(d => ({ id: d.id, ...d.data() })); }, feil));
  perQuiz.push(onSnapshot(offentlegDoc(id), s => { live.no = s.exists() ? s.data() : {}; }, feil));
  perQuiz.push(onSnapshot(rettDoc(id), s => { live.rett = s.exists() ? (s.data().cfg || {}) : {}; live.rettEkstra = s.exists() ? (s.data().ekstra || {}) : {}; }, feil));
  if (kodar) perQuiz.push(onSnapshot(collection(db, Q, id, "kode"), s => { live.kodar = Object.fromEntries(s.docs.map(d => [d.id, d.data().kode])); }, feil));
}

export function stoppLive(){ [...felles, ...perQuiz].forEach(u => u()); felles = []; perQuiz = []; live.quizId = ""; }
