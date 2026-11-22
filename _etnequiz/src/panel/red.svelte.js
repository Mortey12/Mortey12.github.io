// Lokal kopi av quizen som blir redigert i panelet, med forseinka lagring.
import { feiltekst } from "../lib/firebase.js";
import { setDoc } from "firebase/firestore";
import { live, quizDoc, stateDoc, offentlegDoc } from "../lib/data.svelte.js";

// quizId: kva quiz kopien høyrer til, så ei lagring aldri hamnar i ein annan quiz enn den som vart endra
export const red = $state({ quiz: null, quizId: "", ventar: false, melding: "", feil: false });

let timer;
export function endra(){
  red.ventar = true; red.melding = "Endra …"; red.feil = false;
  clearTimeout(timer); timer = setTimeout(lagre, 800);
}
export async function lagre(){
  clearTimeout(timer);
  if (!red.quiz || !red.quizId) { red.ventar = false; return; }
  red.melding = "Lagrar …";
  // Firestore godtek ikkje undefined. Avkryssingar og «Fjern biletet» set felt til undefined,
  // så JSON-runden fjernar dei felta før lagring (quizen er rein JSON elles).
  const data = JSON.parse(JSON.stringify($state.snapshot(red.quiz)));
  try { await setDoc(quizDoc(red.quizId), { ...data, endra: Date.now() }); red.melding = "Lagra"; red.feil = false; }
  catch (e) { red.melding = "Ikkje lagra: " + feiltekst(e); red.feil = true; }
  red.ventar = false;
}
export function melding(tekst, feil = false){ red.melding = tekst; red.feil = feil; }

// Kva som er på storskjermen (felles for alle quizar)
export async function setState(patch){
  for (const [k, v] of Object.entries(patch)) live.state[k] = v && typeof v === "object" && !Array.isArray(v) ? { ...(live.state[k] || {}), ...v } : v;
  try { await setDoc(stateDoc(), patch, { merge: true }); }
  catch (e) { melding("Skjermen vart ikkje oppdatert: " + feiltekst(e), true); }
}

// Kva mobilane ser for denne quizen: tittel, barmeny, lagnamn, om resultat er ope, kva fasit som er vist
export async function setNo(patch, q = live.quizId){
  if (!q) return;
  if (q === live.quizId) live.no = { ...live.no, ...patch };
  try { await setDoc(offentlegDoc(q), patch, { merge: true }); }
  catch (e) { melding("Mobilane vart ikkje oppdaterte: " + feiltekst(e), true); }
}
