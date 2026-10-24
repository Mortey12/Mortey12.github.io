// Lagar oppsummeringa kvar mobil får etter quizen: plass, poeng per kategori, hurtigrundane og fasiten.
import { db } from "../lib/firebase.js";
import { doc, writeBatch } from "firebase/firestore";
import { live, namnFor } from "../lib/data.svelte.js";
import { katInfo, nummerer, rangering, sumLag, num, fasitFor } from "../lib/quiz.js";
import { rundeSvar, hurtigStilling } from "../lib/hurtig.js";

export async function sendResultat(){
  const quiz = live.quiz, plan = nummerer(quiz), kats = katInfo(quiz);
  const vanlege = quiz.kategoriar.filter(k => !k.hurtig), hurtige = quiz.kategoriar.filter(k => k.hurtig);
  const rang = rangering(live.lag, quiz);
  const fasit = vanlege.map(k => ({ namn: k.namn, svar: fasitFor(quiz, plan, k.id) })).filter(f => f.svar.length);
  const runder = hurtige.map(k => ({
    k, stilling: hurtigStilling(plan, k.id, live.state.opningar, live.svar, namnFor),
    sp: rundeSvar(plan, k.id, live.state.opningar, live.svar)
  }));

  // Eitt resultat per bord som har bordkort. Dokument-id-en inneheld den hemmelege koden,
  // så berre dei som har skanna QR-koden på bordet, kan opne det.
  const b = writeBatch(db); let n = 0;
  const bordListe = [...new Set([...live.lag.map(x => x.id), ...live.mobilar.map(m => m.id)])].filter(id => live.kodar[id]);
  for (const bord of bordListe) {
    const lag = live.lag.find(x => String(x.bord) === bord || x.id === bord) || { poeng: {}, joker: "" };
    if (!(lag.namn || "").trim() && !live.mobilar.some(m => m.id === bord)) continue;
    const r = rang.find(x => x.id === lag.id);
    b.set(doc(db, "etneResultat", bord + "_" + live.kodar[bord]), {
      bord, namn: namnFor(bord), plass: r ? r.rank : null, av: rang.length, sum: sumLag(lag, quiz),
      joker: kats.get(lag.joker)?.namn || "",
      kat: vanlege.map(k => ({ namn: k.namn, p: num(lag.poeng?.[k.id]) * (lag.joker === k.id ? 2 : 1), maks: num(k.maks) * (lag.joker === k.id ? 2 : 1), joker: lag.joker === k.id })),
      hurtig: runder.map(({ k, stilling, sp }) => {
        const t = stilling.find(x => String(x.bord) === bord);
        return {
          namn: k.namn, plass: t ? t.rank : null, av: stilling.length, p: t ? t.p : 0,
          svar: sp.map(({ q, liste }) => { const s = liste.find(x => String(x.bord) === bord); return { q: (q.tekst || "").slice(0, 90), status: s ? s.status : "ikkje", p: s ? s.poeng : 0 }; })
        };
      }),
      fasit
    });
    n++;
  }
  if (n) await b.commit();
  return n;
}
