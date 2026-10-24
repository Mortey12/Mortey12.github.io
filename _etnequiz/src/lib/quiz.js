// Reine hjelpefunksjonar for køyreplan, poeng og avsløring.
export const num = v => { const n = parseFloat(String(v ?? "").replace(",", ".")); return isNaN(n) ? 0 : n; };
export const fmt = n => (Math.round((Number(n) || 0) * 10) / 10).toLocaleString("nb-NO");
export const nyId = (p = "") => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

export const TOM_QUIZ = { tittel: "Julequiz", undertittel: "Etnequizen", premietekst: "", pausetekst: "Pause", kategoriar: [], plan: [] };

export function katInfo(quiz){
  const k = new Map(); let n = 0, h = 0;
  (quiz?.kategoriar || []).forEach(c => k.set(c.id, { ...c, nr: c.utanNummer || c.hurtig ? null : ++n, hnr: c.hurtig ? ++h : null }));
  return k;
}

// Spørsmåla får nummer innan kategorien sin, og kvar kategori får tal på spørsmål
export function nummerer(quiz){
  const plan = quiz?.plan || [];
  const tot = {}, tel = {};
  plan.forEach(it => { if (it.type === "sporsmal" && it.nummerert !== false) tot[it.kat] = (tot[it.kat] || 0) + 1; });
  return plan.map(it => {
    if (it.type !== "sporsmal" || it.nummerert === false) return { ...it };
    tel[it.kat] = (tel[it.kat] || 0) + 1;
    return { ...it, qNr: tel[it.kat], qTot: tot[it.kat] };
  });
}

export function fasitFor(quiz, plan, katId){
  const k = (quiz?.kategoriar || []).find(c => c.id === katId);
  if (k && k.fasitliste && k.fasitliste.length) return k.fasitliste;
  const alle = plan.filter(x => x.type === "sporsmal" && x.kat === katId);
  const nummererte = alle.filter(x => x.nummerert !== false);
  if (nummererte.length) return nummererte.map(x => x.svar || "");
  // Berre unummererte spørsmål, som rebusen: eitt svar med fleire delar blir delt på « · »
  const svar = alle.map(x => x.svar || "").filter(Boolean);
  return svar.length === 1 ? svar[0].split(/\s+·\s+/) : svar;
}

export function sumLag(lag, quiz){
  const p = lag.poeng || {};
  // Hurtigrundane har eiga stilling og tel ikkje med i hovudpoenga
  return (quiz?.kategoriar || []).filter(c => !c.hurtig).reduce((s, c) => s + num(p[c.id]) * (lag.joker === c.id ? 2 : 1), 0);
}

// Lag med likt tal poeng får same plass
export function rangering(lagListe, quiz){
  const l = (lagListe || []).filter(x => (x.namn || "").trim()).map(x => ({ ...x, sum: sumLag(x, quiz) }));
  l.sort((a, b) => b.sum - a.sum || (a.bord - b.bord));
  l.forEach(t => { t.rank = l.filter(x => x.sum > t.sum).length + 1; });
  return l;
}

// Fem om gongen til det står ti att, så éin og éin
export function avsloringSteg(n){
  const s = [0]; let v = 0;
  while (v < n) { const att = n - v; v += att > 10 ? Math.min(5, att - 10) : 1; s.push(v); }
  return s;
}

export function kortTittel(it, kats){
  const k = kats.get(it.kat);
  switch (it.type) {
    case "tittel": return "Tittel: " + (it.tittel || "");
    case "pause": return "Pause" + (it.tittel ? ": " + it.tittel : "");
    case "poengtavle": return "Poengtavle";
    case "kategori": return k ? (k.nr ? `Kategori ${k.nr} · ${k.namn}` : k.namn) : "Kategori (vel)";
    case "hurtigresultat": return "Vinnar av " + (k?.namn || "hurtigrunda");
    case "fasit": return "Fasit · " + (Array.isArray(it.kat) ? it.kat : [it.kat]).map(id => { const c = kats.get(id); return c ? (c.nr || c.namn) : "?"; }).join(" og ");
    case "sporsmal": return (k?.hurtig ? `⚡${k.hnr}.${it.qNr ?? ""} ` : it.qNr ? `${k?.nr ?? ""}.${it.qNr} ` : "") + (it.tekst || "(tomt spørsmål)");
    default: return it.type;
  }
}
