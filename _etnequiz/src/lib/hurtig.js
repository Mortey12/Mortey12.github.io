// Hurtigrundane: retting av svar, poeng etter avstand til raskaste og stilling.
import { num } from "./quiz.js";

// Firestore-tidsstempel, tal eller Date til millisekund
export const ms = t => !t ? 0 : typeof t === "number" ? t : t.toMillis ? t.toMillis() : t.seconds != null ? t.seconds * 1000 + Math.round((t.nanoseconds || 0) / 1e6) : +new Date(t) || 0;

export const BOKSTAV = ["A", "B", "C", "D"];
export const erHurtig = (kats, id) => !!kats.get(id)?.hurtig;

// Gjer svaret samanliknbart: små bokstavar, utan teikn, aksentar og mellomrom
export function norm(s){
  return String(s ?? "").toLowerCase()
    .replace(/æ/g, "ae").replace(/ø/g, "o").replace(/ß/g, "ss")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/&/g, "og")
    .replace(/[^a-z0-9]+/g, " ").trim()
    .replace(/^(the|a|an|en|ei|eit|et|der|die|das|le|la|el) /, "")
    .replace(/ /g, "");
}

// Avstand mellom to ord der byte av to naboteikn tel som éin feil (vanleg ved dysleksi)
export function avstand(a, b){
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  const d = Array.from({ length: m + 1 }, (_, i) => { const r = new Array(n + 1).fill(0); r[0] = i; return r; });
  for (let j = 0; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) {
    const c = a[i - 1] === b[j - 1] ? 0 : 1;
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + c);
    if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
  }
  return d[m][n];
}

// Kor mange feil eit svar av denne lengda kan ha og framleis vere rett
const toleranse = len => len <= 3 ? 0 : len <= 6 ? 1 : len <= 10 ? 2 : 3;

export function godkjende(q){
  return [q.svar, ...String(q.godta || "").split(/[,;\n]/)].map(s => (s || "").trim()).filter(Boolean);
}

// Gir "rett", "feil" eller "sjekk" (grensetilfelle quizmasteren bør sjå på)
export function vurder(q, svar){
  if (svar == null || svar === "") return "feil";
  if (q.form === "alternativ") return String(svar) === String(q.rett) ? "rett" : "feil";
  const s = norm(svar); if (!s) return "feil";
  let best = "feil";
  for (const fasit of godkjende(q)) {
    const f = norm(fasit); if (!f) continue;
    if (/^\d+$/.test(f)) { if (s === f) return "rett"; if (s.includes(f)) best = "sjekk"; continue; }
    const d = avstand(s, f), tol = toleranse(f.length);
    if (d <= tol) return "rett";
    if ((s.length * 2 >= f.length && d <= tol + (f.length <= 3 ? 1 : 2)) || (f.length >= 4 && (s.includes(f) || (s.length >= 4 && f.includes(s))))) best = "sjekk";
  }
  return best;
}

// Avstand til raskaste: 10 poeng innanfor 2 sekund av det raskaste rette svaret,
// så 0,5 mindre for kvart påbyrja 2 sekund, aldri under 5. Feil svar gir 0.
export const POENG = { topp: 10, botn: 5, steg: 0.5, sekund: 2 };
export function poengForTid(diffMs){
  return Math.max(POENG.botn, POENG.topp - POENG.steg * Math.floor(Math.max(0, diffMs) / (POENG.sekund * 1000)));
}

// Rettar alle svara på eitt spørsmål. Manuell vurdering går føre den automatiske.
export function rett(q, svarListe){
  const l = svarListe.map(s => ({ ...s, tid: ms(s.t), auto: vurder(q, s.svar) }))
    .map(s => ({ ...s, status: s.manuell || s.auto }))
    .sort((a, b) => a.tid - b.tid);
  const rette = l.filter(s => s.status === "rett");
  const t0 = rette.length ? rette[0].tid : 0;
  for (const s of l) { s.diff = s.status === "rett" ? s.tid - t0 : null; s.poeng = s.status === "rett" ? poengForTid(s.tid - t0) : 0; }
  return l;
}

// Alle opningar av hurtigspørsmål i ein kategori, med retta svar
export function rundeSvar(plan, katId, opningar, alleSvar){
  return plan.filter(x => x.type === "sporsmal" && x.kat === katId && x.id && opningar?.[x.id])
    .map(q => ({ q, liste: rett(q, alleSvar.filter(s => s.live === opningar[q.id])) }));
}

// Stilling i ei hurtigrunde: sum poeng per bord, likt tal gir same plass
export function hurtigStilling(plan, katId, opningar, alleSvar, namnFor){
  const sum = new Map();
  for (const { liste } of rundeSvar(plan, katId, opningar, alleSvar))
    for (const s of liste) sum.set(s.bord, (sum.get(s.bord) || 0) + s.poeng);
  const l = [...sum].map(([bord, p]) => ({ bord, namn: namnFor(bord), p }));
  l.sort((a, b) => b.p - a.p || num(a.bord) - num(b.bord));
  l.forEach(t => { t.rank = l.filter(x => x.p > t.p).length + 1; });
  return l;
}

export const sek = d => (Math.round(d / 100) / 10).toLocaleString("nb-NO", { minimumFractionDigits: 1 });
