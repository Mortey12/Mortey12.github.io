// Felles sanntidsdata frå Firestore for panelet og storskjermen (berre quizmasteren).
import { db } from "./firebase.js";
import { doc, collection, onSnapshot } from "firebase/firestore";
import { TOM_QUIZ } from "./quiz.js";

export const TOM_STATE = { steg: 0, modus: "plan", avslort: 0, sist: 0 };
export const live = $state({
  quiz: null, state: { ...TOM_STATE }, lag: [], klar: false, feil: "",
  // etneLive/no: det mobilane ser (resultatet), og QR-kodane til borda
  no: {}, kodar: {}
});

let unsubs = [];
const feil = e => live.feil = e.message;
export function startLive({ kodar = false } = {}){
  stoppLive();
  unsubs.push(onSnapshot(doc(db, "etne", "quiz"), s => { live.quiz = s.exists() ? { ...TOM_QUIZ, ...s.data() } : { ...TOM_QUIZ }; live.klar = true; }, feil));
  unsubs.push(onSnapshot(doc(db, "etne", "state"), s => { live.state = { ...TOM_STATE, ...(s.exists() ? s.data() : {}) }; }, feil));
  unsubs.push(onSnapshot(collection(db, "etneLag"), s => { live.lag = s.docs.map(d => ({ id: d.id, ...d.data() })); }, feil));
  unsubs.push(onSnapshot(doc(db, "etneLive", "no"), s => { live.no = s.exists() ? s.data() : {}; }, feil));
  if (kodar) unsubs.push(onSnapshot(collection(db, "etneKode"), s => { live.kodar = Object.fromEntries(s.docs.map(d => [d.id, d.data().kode])); }, feil));
}
export function stoppLive(){ unsubs.forEach(u => u()); unsubs = []; }
