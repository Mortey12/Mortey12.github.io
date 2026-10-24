// Lokal kopi av quizen som blir redigert i panelet, med forseinka lagring.
import { db, feiltekst } from "../lib/firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { live } from "../lib/data.svelte.js";

export const red = $state({ quiz: null, ventar: false, melding: "", feil: false });

let timer;
export function endra(){
  red.ventar = true; red.melding = "Endra …"; red.feil = false;
  clearTimeout(timer); timer = setTimeout(lagre, 800);
}
export async function lagre(){
  clearTimeout(timer);
  if (!red.quiz) return;
  red.melding = "Lagrar …";
  try { await setDoc(doc(db, "etne", "quiz"), $state.snapshot(red.quiz)); red.melding = "Lagra"; red.feil = false; }
  catch (e) { red.melding = "Ikkje lagra: " + feiltekst(e); red.feil = true; }
  red.ventar = false;
}
export function melding(tekst, feil = false){ red.melding = tekst; red.feil = feil; }

// Kva som er på storskjermen
export async function setState(patch){
  Object.assign(live.state, patch);
  try { await setDoc(doc(db, "etne", "state"), patch, { merge: true }); }
  catch (e) { melding("Skjermen vart ikkje oppdatert: " + feiltekst(e), true); }
}
