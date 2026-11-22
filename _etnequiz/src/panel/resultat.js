// Lagar oppsummeringa kvart bord får på mobilen etter quizen: plass, poeng per kategori
// og kvart spørsmål med fasit og om laget hadde rett (frå «Retting»).
import { db } from "../lib/firebase.js";
import { doc, writeBatch } from "firebase/firestore";
import { live } from "../lib/data.svelte.js";
import { nummerer, rangering, sumLag, num, spmListe } from "../lib/quiz.js";

export async function sendResultat(){
  const quiz = live.quiz, plan = nummerer(quiz), kats = quiz.kategoriar || [];
  const rang = rangering(live.lag, quiz);
  const spm = Object.fromEntries(kats.map(k => [k.id, spmListe(quiz, plan, k.id)]));

  // Eitt resultat per bord som har lagnamn og QR-kode. Dokument-id-en inneheld den hemmelege koden,
  // så berre dei som har skanna QR-koden på bordet, kan opne det.
  const b = writeBatch(db); let n = 0;
  for (const lag of live.lag) {
    const kode = live.kodar[lag.id];
    if (!kode || !(lag.namn || "").trim()) continue;
    const r = rang.find(x => x.id === lag.id);
    b.set(doc(db, "etneResultat", lag.id + "_" + kode), {
      bord: lag.id, namn: lag.namn, tittel: quiz.tittel || "", plass: r ? r.rank : null, av: rang.length, sum: sumLag(lag, quiz),
      joker: kats.find(k => k.id === lag.joker)?.namn || "",
      kat: kats.map(k => {
        const j = lag.joker === k.id ? 2 : 1, rett = lag.rett?.[k.id];
        const p = lag.poeng?.[k.id];
        return {
          namn: k.namn, joker: j === 2, maks: num(k.maks) * j,
          p: p === undefined || p === "" ? null : num(p) * j,
          // m: "full" | "annet" | "halv" | "eigen" | "" (feil) | null (ikkje retta per spørsmål)
          spm: spm[k.id].map((s, i) => ({ svar: s.svar, m: rett ? (rett.marks?.[i]?.m ?? "") : null, p: rett ? (rett.vals?.[i] ?? 0) : null }))
        };
      })
    });
    n++;
  }
  if (n) await b.commit();
  return n;
}
