// Reine hjelpefunksjonar for køyreplan, poeng og avsløring.
export const num = v => { const n = parseFloat(String(v ?? "").replace(",", ".")); return isNaN(n) ? 0 : n; };
export const fmt = n => (Math.round((Number(n) || 0) * 100) / 100).toLocaleString("nb-NO");
export const nyId = (p = "") => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

export const TOM_QUIZ = { tittel: "Julequiz", undertittel: "Etnequizen", premietekst: "", pausetekst: "Pause", kategoriar: [], plan: [] };

export function katInfo(quiz){
  const k = new Map(); let n = 0;
  (quiz?.kategoriar || []).forEach(c => k.set(c.id, { ...c, nr: c.utanNummer ? null : ++n }));
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
  return (quiz?.kategoriar || []).reduce((s, c) => s + num(p[c.id]) * (lag.joker === c.id ? 2 : 1), 0);
}

// Lag med likt tal poeng får same plass
export function rangering(lagListe, quiz){
  const l = (lagListe || []).filter(x => (x.namn || "").trim()).map(x => ({ ...x, sum: sumLag(x, quiz) }));
  l.sort((a, b) => b.sum - a.sum || (a.bord - b.bord));
  l.forEach(t => { t.rank = l.filter(x => x.sum > t.sum).length + 1; });
  return l;
}

// Berre nokre kategoriar tel (til dømes rundar der fasiten er vist): ein kopi av quizen med berre dei
export const medKat = (quiz, ids) => ids ? { ...quiz, kategoriar: (quiz?.kategoriar || []).filter(c => ids.includes(c.id)) } : quiz;

// Avsløringa byggjer seg opp: fem om gongen til det står 15 att, så éin og éin.
// Frå plass 10 tek kvar plass to klikk: først «Plass 7 …» (s: spenning), så namnet.
// v = kor mange plassar som er viste nedanfrå.
export function avsloringSteg(n){
  const s = [{ v: 0, s: false }]; let v = 0;
  while (v < n) {
    const att = n - v;
    if (att > 15) { v += Math.min(5, att - 15); s.push({ v, s: false }); }
    else if (att > 10) { v += 1; s.push({ v, s: false }); }
    else { s.push({ v, s: true }); v += 1; s.push({ v, s: false }); }
  }
  return s;
}
// Kor grandiost ein plass blir vist: vinnar, pall (2–3), gull (4–10), topp (11–15) eller vanleg
export const niva = rank => rank <= 1 ? "vinnar" : rank <= 3 ? "pall" : rank <= 10 ? "gull" : rank <= 15 ? "topp" : "";

export function kortTittel(it, kats){
  const k = kats.get(it.kat);
  switch (it.type) {
    case "tittel": return "Tittel: " + (it.tittel || "");
    case "pause": return "Pause" + (it.tittel ? ": " + it.tittel : "");
    case "poengtavle": return "Poengtavle";
    case "kategori": return k ? (k.nr ? `Kategori ${k.nr} · ${k.namn}` : k.namn) : "Kategori (vel)";
    case "fasit": return "Fasit · " + (Array.isArray(it.kat) ? it.kat : [it.kat]).map(id => { const c = kats.get(id); return c ? (c.nr || c.namn) : "?"; }).join(" og ");
    case "sporsmal": return (it.qNr ? `${k?.nr ?? ""}.${it.qNr} ` : "") + (it.tekst || "(tomt spørsmål)");
    default: return it.type;
  }
}

// Spørsmåla i ein kategori slik dei blir retta og vist i resultatet: fasitlista om ho finst,
// elles dei nummererte spørsmåla, elles fasiten frå unummererte spørsmål, elles seks tomme.
export function spmListe(quiz, plan, katId){
  const k = (quiz?.kategoriar || []).find(c => c.id === katId);
  if (k?.fasitliste?.length) return k.fasitliste.map(s => ({ tekst: "", svar: s }));
  const l = plan.filter(it => it.type === "sporsmal" && it.kat === katId && it.nummerert !== false);
  if (l.length) return l.map(it => ({ tekst: it.tekst || "", svar: it.svar || "" }));
  const f = fasitFor(quiz, plan, katId);
  if (f.length) return f.map(s => ({ tekst: "", svar: s }));
  return Array.from({ length: 6 }, () => ({ tekst: "", svar: "" }));
}

// Berre vanlege nettlenkjer; manglar https:// blir det lagt til
export function lenkje(u){
  u = String(u || "").trim(); if (!u) return "";
  if (!/^https?:\/\//i.test(u)) u = "https://" + u;
  try { const x = new URL(u); return x.protocol === "https:" || x.protocol === "http:" ? x.href : ""; } catch (_) { return ""; }
}
