// Lagar det kvart bord ser på mobilen. Mobilen får berre det som er lov å sjå no:
// - undervegs: rundane der fasiten er vist på storskjermen, og plassen frå sist poengtavla vart vist
// - under sluttavsløringa: plassen berre når storskjermen har vist han
// - når resultatet er opna til slutt: alt
// Dokumenta inneheld ikkje meir enn dette, så ingen kan sjå noko før det er vist.
import { db } from "../lib/firebase.js";
import { writeBatch } from "firebase/firestore";
import { live, resultatDoc } from "../lib/data.svelte.js";
import { nummerer, rangering, sumLag, num, spmListe, medKat } from "../lib/quiz.js";

// Plassane slik dei står på poengtavla no (berre rundane med vist fasit)
export function stillingNo(){
  const vist = live.no.vist || [];
  return Object.fromEntries(rangering(live.lag, medKat(live.quiz, vist)).map(t => [t.id, t.rank]));
}

// berre: skriv berre desse borda (t.d. dei som nett vart viste i avsløringa)
export async function publiser({ berre = null } = {}){
  const quiz = live.quiz, no = live.no;
  if (!quiz) return 0;
  const plan = nummerer(quiz), alleKat = quiz.kategoriar || [];
  const endeleg = !!no.endeleg;
  const vist = endeleg ? alleKat.map(k => k.id) : (no.vist || []);
  const kats = alleKat.filter(k => vist.includes(k.id));
  const spm = Object.fromEntries(kats.map(k => [k.id, spmListe(quiz, plan, k.id)]));
  const rang = rangering(live.lag, quiz);
  const avslort = no.avslort || {};

  const b = writeBatch(db); let n = 0;
  for (const lag of live.lag) {
    if (berre && !berre.includes(lag.id)) continue;
    const kode = live.kodar[lag.id];
    if (!kode || !(lag.namn || "").trim()) continue;
    // Plass: til slutt den endelege; under avsløringa berre når han er vist; elles frå sist viste poengtavle
    let plass = null, plassTekst = "";
    const r = rang.find(x => x.id === lag.id);
    if (endeleg) plass = r ? r.rank : null;
    else if (no.avsloring) { if (avslort[lag.id]) plass = avslort[lag.id]; else plassTekst = "Følg med på storskjermen – avsløringa er i gang!"; }
    else if (no.stilling?.plass?.[lag.id]) { plass = no.stilling.plass[lag.id]; plassTekst = no.stilling.etter || ""; }
    const delSum = sumLag(lag, { ...quiz, kategoriar: kats });
    b.set(resultatDoc(lag.id + "_" + kode), {
      bord: lag.id, namn: lag.namn, tittel: quiz.tittel || "", endeleg, plass, plassTekst,
      av: rang.length, sum: endeleg ? sumLag(lag, quiz) : delSum,
      joker: alleKat.find(k => k.id === lag.joker)?.namn || "",
      kat: kats.map(k => {
        const j = lag.joker === k.id ? 2 : 1, rett = lag.rett?.[k.id];
        const p = lag.poeng?.[k.id];
        return {
          namn: k.namn, joker: j === 2, maks: num(k.maks) * j,
          p: p === undefined || p === "" ? null : num(p) * j,
          // m: "full" | "annet" | "halv" | "kvart" | "eigen" | "delar" | "feil"/"" | null (ikkje retta per spørsmål)
          // d: namna på delane laget hadde rett (rundar med delar, t.d. «Artist, Låt»)
          spm: spm[k.id].map((s, i) => {
            const mk = rett?.marks?.[i];
            if (!rett) return { svar: s.svar, m: null, p: null };
            if (mk?.m === "delar" && k.delar?.length) {
              // d[j]: true/1 = heile delen, 0,5 = halv
              const v = j => mk.d?.[j] === true ? 1 : num(mk.d?.[j]);
              const har = k.delar.map((x, j) => ({ x, v: v(j) })).filter(o => o.v > 0);
              const alt = har.length === k.delar.length && har.every(o => o.v === 1);
              return { svar: s.svar, m: alt ? "full" : har.length ? "delar" : "feil", p: rett.vals?.[i] ?? 0, d: har.map(o => o.x.namn + (o.v < 1 ? " (½)" : "")) };
            }
            return { svar: s.svar, m: mk?.m ?? "", p: rett.vals?.[i] ?? 0 };
          }),
          // Bonus for runda (t.d. raud tråd) som laget fekk
          bonus: (k.bonus || []).filter((_, j) => rett?.bonus?.[j]).map(b => ({ namn: b.namn, p: num(b.p) * j }))
        };
      }),
      t: Date.now()
    });
    n++;
  }
  if (n) await b.commit();
  return n;
}
