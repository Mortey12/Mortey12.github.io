<script>
  // Lag og poeng: éi rad per bord. Poeng frå svararka per kategori, joker gir dobbel poeng.
  import { live } from "../lib/data.svelte.js";
  import { db, feiltekst } from "../lib/firebase.js";
  import { doc, setDoc, updateDoc, deleteDoc, writeBatch } from "firebase/firestore";
  import { num, fmt, rangering, sumLag } from "../lib/quiz.js";
  import { melding } from "./red.svelte.js";
  import Bordkort from "./Bordkort.svelte";

  const kat = $derived((live.quiz?.kategoriar || []).filter(k => !k.hurtig));
  const mobil = $derived(new Map(live.mobilar.map(m => [m.id, m])));
  let visKort = $state(false), frigjer = $state(null);
  async function frigjerBord(id){
    if (frigjer !== id) { frigjer = id; setTimeout(() => { if (frigjer === id) frigjer = null; }, 3000); return; }
    frigjer = null;
    try { await deleteDoc(doc(db, "etneMobil", id)); melding(`Bord ${id} er frigjort. Ein ny mobil kan skanne koden.`); } catch (e) { melding("Ikkje frigjort: " + feiltekst(e), true); }
  }
  const lag = $derived([...live.lag].sort((a, b) => (a.bord || 0) - (b.bord || 0)));
  const plassar = $derived(new Map(rangering(live.lag, live.quiz).map(t => [t.id, t.rank])));
  let tilN = $state(40), vent = $state({}), timers = {};

  const vis = (id, felt, verdi) => (id + "|" + felt) in vent ? vent[id + "|" + felt] : (typeof verdi === "number" ? String(verdi).replace(".", ",") : (verdi ?? ""));
  function skriv(id, felt, verdi, straks = false){
    const k = id + "|" + felt; vent[k] = verdi; clearTimeout(timers[k]); melding("Endra …");
    const go = async () => {
      delete timers[k];
      const v = felt.startsWith("poeng.") ? (String(verdi).trim() === "" ? "" : num(verdi)) : verdi;
      try { await updateDoc(doc(db, "etneLag", id), { [felt]: v }); melding("Lagra"); } catch (e) { melding("Ikkje lagra: " + feiltekst(e), true); }
      if (vent[k] === verdi) delete vent[k];
    };
    if (straks) go(); else timers[k] = setTimeout(go, 500);
  }
  async function leggTil(){
    const nr = lag.reduce((m, t) => Math.max(m, t.bord || 0), 0) + 1;
    try { await setDoc(doc(db, "etneLag", String(nr)), { bord: nr, namn: "", joker: "", poeng: {} }); } catch (e) { melding("Ikkje lagt til: " + feiltekst(e), true); }
  }
  async function lagTil(){
    const fins = new Set(lag.map(t => t.bord)); const b = writeBatch(db); let n = 0;
    for (let i = 1; i <= Math.min(Math.max(1, num(tilN)), 120); i++) if (!fins.has(i)) { b.set(doc(db, "etneLag", String(i)), { bord: i, namn: "", joker: "", poeng: {} }); n++; }
    try { if (n) await b.commit(); melding(n ? `La til ${n} bord` : "Alle bord finst alt"); } catch (e) { melding("Ikkje lagt til: " + feiltekst(e), true); }
  }
  let armert = $state(null);
  async function slett(id){
    if (armert !== id) { armert = id; setTimeout(() => { if (armert === id) armert = null; }, 3000); return; }
    armert = null; try { await deleteDoc(doc(db, "etneLag", id)); } catch (e) { melding("Ikkje sletta: " + feiltekst(e), true); }
  }
  const overMaks = (k, v) => k.maks && num(v) > num(k.maks);
</script>

<section class="stack">
  <div class="rad topp">
    <h2>Lag og poeng</h2>
    <span class="dempa">{plassar.size} lag med namn · {lag.length} bord</span>
    <span style="flex:1"></span>
    <button class="btn" type="button" onclick={leggTil}>+ Legg til bord</button>
    <label class="rad"><span class="dempa">Lag bord 1 til</span><input class="inp" style="width:80px" type="number" min="1" max="120" bind:value={tilN}></label>
    <button class="btn primary" type="button" onclick={lagTil}>Lag bord</button>
    <button class="btn gull" type="button" onclick={() => visKort = true} disabled={!lag.length}>Bordkort med QR</button>
  </div>
  <p class="dempa" style="margin:0">Skriv poenga frå svararka etter kvar fasit. Kategorien med joker tel dobbelt. Lag utan namn kjem ikkje med på poengtavla. Lagnamn og joker frå mobilane kjem inn av seg sjølv. «Frigjer» slepp ein ny mobil til på bordet.</p>

  {#if !lag.length}
    <div class="kort dempa">Ingen bord enno. Bruk «Lag bord» for å lage alle på ein gong.</div>
  {:else}
    <div class="tabell kort">
      <table>
        <thead><tr>
          <th>Bord</th><th>Lagnamn</th><th>Mobil</th><th>Joker</th>
          {#each kat as k}<th class="tal" title={k.namn}>{k.namn}{#if k.maks}<span class="maks"> / {fmt(k.maks)}</span>{/if}</th>{/each}
          <th class="tal">Sum</th><th>Plass</th><th></th>
        </tr></thead>
        <tbody>
          {#each lag as t (t.id)}
            <tr>
              <td class="bord">{t.bord}</td>
              <td><input class="inp" aria-label="Lagnamn bord {t.bord}" value={vis(t.id, "namn", t.namn)} oninput={e => skriv(t.id, "namn", e.target.value)} placeholder="Lagnamn"></td>
              <td class="mob">{#if mobil.get(t.id)}<span class="pa" title={mobil.get(t.id).namn || ""}>● Kopla</span> <button class="lenke" type="button" onclick={() => frigjerBord(t.id)}>{frigjer === t.id ? "Sikker?" : "Frigjer"}</button>{:else}<span class="dempa">Ingen</span>{/if}</td>
              <td><select class="inp" aria-label="Joker bord {t.bord}" value={t.joker || ""} onchange={e => skriv(t.id, "joker", e.target.value, true)}><option value="">Ingen</option>{#each kat as k}<option value={k.id}>{k.namn}</option>{/each}</select></td>
              {#each kat as k}
                {@const v = vis(t.id, "poeng." + k.id, t.poeng?.[k.id])}
                <td class="tal"><input class="inp p" class:j={t.joker === k.id} class:over={overMaks(k, v)} inputmode="decimal" aria-label="{k.namn}, bord {t.bord}" value={v} oninput={e => skriv(t.id, "poeng." + k.id, e.target.value)}></td>
              {/each}
              <td class="tal sum">{fmt(sumLag({ ...t, poeng: { ...t.poeng, ...Object.fromEntries(kat.map(k => [k.id, vis(t.id, "poeng." + k.id, t.poeng?.[k.id])])) } }, live.quiz))}</td>
              <td class="plass">{plassar.get(t.id) ? plassar.get(t.id) + "." : ""}</td>
              <td><button class="ibtn" type="button" aria-label="Slett bord {t.bord}" onclick={() => slett(t.id)}>{armert === t.id ? "Sikker?" : "✕"}</button></td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</section>

{#if visKort}<Bordkort lag={lag} lukk={() => visKort = false} />{/if}

<style>
  .stack{display:flex;flex-direction:column;gap:12px}
  .topp{gap:12px}
  .tabell{overflow-x:auto;padding:6px 10px}
  table{border-collapse:collapse;width:100%;min-width:760px;font-size:14px}
  th{font:700 12px var(--f-tekst);letter-spacing:.04em;text-transform:uppercase;color:var(--p-dempa);text-align:left;padding:8px 6px;border-bottom:2px solid var(--p-blekk);white-space:nowrap;position:sticky;top:0;background:var(--p-flate)}
  th .maks{font-weight:500;letter-spacing:0;text-transform:none}
  td{padding:3px 6px;border-bottom:1px solid var(--p-linje)}
  td.bord{font:700 15px "IBM Plex Mono",monospace;width:48px}
  td.tal,th.tal{text-align:right}
  .inp{padding:6px 9px}
  .p{width:66px;text-align:right;font-variant-numeric:tabular-nums}
  .p.j{background:#FFF4D6;border-color:var(--p-gull)}
  .p.over{border-color:var(--p-feil);background:#FDECEC}
  .sum{font-weight:700;font-size:16px;font-variant-numeric:tabular-nums;white-space:nowrap}
  .plass{font-weight:700;white-space:nowrap}
  .mob{white-space:nowrap;font-size:13px}
  .pa{color:var(--p-ok);font-weight:700}
  .lenke{border:0;background:none;color:var(--p-gran);font-weight:700;cursor:pointer;padding:2px;text-decoration:underline;font-size:13px}
</style>
