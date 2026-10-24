// Felles sanntidsdata frå Firestore: quizen, kva som er på skjermen, og laga.
import { db } from "./firebase.js";
import { doc, collection, onSnapshot } from "firebase/firestore";
import { TOM_QUIZ } from "./quiz.js";

export const live = $state({ quiz: null, state: { steg: 0, modus: "plan", avslort: 0, sist: 0 }, lag: [], klar: false, feil: "" });

let unsubs = [];
export function startLive(){
  stoppLive();
  unsubs.push(onSnapshot(doc(db, "etne", "quiz"), s => { live.quiz = s.exists() ? { ...TOM_QUIZ, ...s.data() } : { ...TOM_QUIZ }; live.klar = true; }, e => live.feil = e.message));
  unsubs.push(onSnapshot(doc(db, "etne", "state"), s => { live.state = { steg: 0, modus: "plan", avslort: 0, sist: 0, ...(s.exists() ? s.data() : {}) }; }, e => live.feil = e.message));
  unsubs.push(onSnapshot(collection(db, "etneLag"), s => { live.lag = s.docs.map(d => ({ id: d.id, ...d.data() })); }, e => live.feil = e.message));
}
export function stoppLive(){ unsubs.forEach(u => u()); unsubs = []; }
