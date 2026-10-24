<script>
  // Styring av eitt hurtigspørsmål: opne for svar, nedteljing, retting og fasit.
  import { live, namnFor } from "../lib/data.svelte.js";
  import { klokke, slutt } from "../lib/klokke.svelte.js";
  import { BOKSTAV, ms, rett, sek, hurtigStilling, godkjende } from "../lib/hurtig.js";
  import { fmt, nummerer } from "../lib/quiz.js";
  import { db, feiltekst } from "../lib/firebase.js";
  import { doc, updateDoc, writeBatch, serverTimestamp, deleteField } from "firebase/firestore";
  import { setState, setNo, melding } from "./red.svelte.js";
  let { it, k } = $props();

  const opning = $derived(live.state.opningar?.[it.id]);
  const erLive = $derived(!!opning && live.no.id === opning);
  const fristen = $derived(erLive ? slutt(live.no, ms) : 0);
  const att = $derived(erLive && live.no.open ? Math.max(0, Math.ceil((fristen - klokke.no) / 1000)) : 0);
  const open = $derived(erLive && live.no.open && att > 0);
  const fasit = $derived(!!live.state.fasitar?.[it.id]);
  const retta = $derived(opning ? rett(it, live.svar.filter(s => s.live === opning)) : []);
  const sjekk = $derived(retta.filter(s => s.status === "sjekk").length);
  const tid = $derived(Math.max(5, Math.round(Number(it.tid) || 20)));
  const fasitTekst = $derived(it.form === "alternativ" ? `${BOKSTAV[it.rett] ?? "?"}: ${(it.alternativ || [])[it.rett] ?? ""}` : godkjende(it).join(" · "));
  let armert = $state(false), stengTimer;

  async function opne(){
    if (!it.id) { melding("Spørsmålet manglar id. Opne det under «Spørsmål» ein gong, så blir det fiksa.", true); return; }
    const id = it.id + "-" + Date.now().toString(36);
    await setNo({
      id, q: it.id, open: true, opna: serverTimestamp(), tid, form: it.form || "fritt", tekst: it.tekst || "",
      alternativ: it.form === "alternativ" ? (it.alternativ || []).slice(0, 4) : [],
      kat: k?.namn || "Hurtigrunde", nr: it.qNr || null, tot: it.qTot || null, fasitVist: false, vent: false
    });
    await setState({ opningar: { [it.id]: id }, fasitar: { [it.id]: false } });
    clearTimeout(stengTimer);
    stengTimer = setTimeout(() => { if (live.no.id === id && live.no.open) setNo({ open: false }); }, tid * 1000 + 2500);
    armert = false;
  }
  const steng = () => setNo({ open: false });

  // Skriv poeng og vurdering til kvart svar, og stillinga i runda til kvar mobil
  async function lagreRetting(){
    const plan = nummerer(live.quiz).filter(x => x.kat === it.kat);
    const stilling = hurtigStilling(plan, it.kat, live.state.opningar, live.svar, namnFor);
    const b = writeBatch(db);
    for (const s of retta) b.update(doc(db, "etneSvar", s.id), { status: s.status, poeng: s.poeng });
    for (const m of live.mobilar) {
      const t = stilling.find(x => String(x.bord) === m.id);
      b.update(doc(db, "etneMobil", m.id), { hurtigNo: { kat: it.kat, namn: k?.namn || "Hurtigrunde", plass: t ? t.rank : null, p: t ? t.p : 0, av: stilling.length } });
    }
    try { await b.commit(); } catch (e) { melding("Rettinga vart ikkje lagra: " + feiltekst(e), true); }
  }
  async function visFasit(){
    if (live.no.open) await steng();
    await setState({ fasitar: { [it.id]: true } });
    await lagreRetting();
    if (erLive) await setNo({ fasitVist: true });
  }
  async function overstyr(s, verdi){
    try { await updateDoc(doc(db, "etneSvar", s.id), { manuell: s.manuell === verdi ? deleteField() : verdi }); }
    catch (e) { melding("Ikkje lagra: " + feiltekst(e), true); return; }
    if (fasit) setTimeout(lagreRetting, 300);
  }
  const visSvar = s => it.form === "alternativ" ? `${BOKSTAV[s.svar] ?? "?"}: ${(it.alternativ || [])[s.svar] ?? ""}` : s.svar;
  const fraStart = s => erLive && live.no.opna ? "+" + sek(s.tid - ms(live.no.opna)) : "+" + sek(s.tid - (retta[0]?.tid || s.tid));
</script>

<section class="kort hs">
  <div class="rad topp">
    <span class="pille">⚡ {k?.namn}{it.qNr ? ` · spørsmål ${it.qNr} av ${it.qTot}` : ""}</span>
    <span class="dempa">{it.form === "alternativ" ? "Alternativ A–D" : "Fritt svar"} · {tid} s</span>
    <span style="flex:1"></span>
    {#if opning}<span class="tal"><b>{retta.length}</b> av {live.mobilar.length} har svart</span>{/if}
  </div>

  <p class="fasit"><span class="lbl">Fasit, berre her</span> {fasitTekst || "Ingen fasit lagt inn"}</p>

  <div class="rad">
    {#if open}
      <span class="klokke" aria-live="off">{att}</span>
      <button class="btn raud" type="button" onclick={steng}>Steng no</button>
    {:else if !opning}
      <button class="btn gull stor" type="button" onclick={opne}>Opne for svar · {tid} s</button>
      <span class="dempa">Les spørsmålet høgt først. Klokka startar når du trykkjer.</span>
    {:else}
      {#if !fasit}<button class="btn primary stor" type="button" onclick={visFasit}>Vis fasit og dei raskaste</button>
      {:else}<span class="ok">Fasiten er vist på skjermen og mobilane</span>{/if}
      <button class="btn liten" type="button" onclick={() => armert ? opne() : (armert = true, setTimeout(() => armert = false, 3000))}>{armert ? "Trykk igjen: svara til no blir forkasta" : "Ta spørsmålet på nytt"}</button>
    {/if}
  </div>

  {#if opning && retta.length}
    {#if sjekk}<p class="varsel">{sjekk} svar er merka SJEKK. Trykk ✓ eller ✗ for å avgjere.</p>{/if}
    <div class="tabell">
      <table>
        <thead><tr><th>Tid</th><th>Lag</th><th>Svar</th><th>Vurdering</th><th class="r">Poeng</th></tr></thead>
        <tbody>
          {#each retta as s (s.id)}
            <tr class={s.status}>
              <td class="mono">{fraStart(s)} s</td>
              <td>{namnFor(s.bord)}</td>
              <td class="svar">{visSvar(s)}</td>
              <td><div class="vurd">
                <span class="chip {s.status}">{s.status === "rett" ? "Rett" : s.status === "feil" ? "Feil" : "SJEKK"}{s.manuell ? " (manuelt)" : ""}</span>
                <button class="ibtn" type="button" aria-label="Godkjenn" aria-pressed={s.manuell === "rett"} onclick={() => overstyr(s, "rett")}>✓</button>
                <button class="ibtn" type="button" aria-label="Avvis" aria-pressed={s.manuell === "feil"} onclick={() => overstyr(s, "feil")}>✗</button>
              </div></td>
              <td class="r"><b>{fmt(s.poeng)}</b>{#if s.diff}<span class="dempa"> +{sek(s.diff)} s</span>{/if}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</section>

<style>
  .hs{border:2px solid var(--p-gull);background:#FFFBF0;display:flex;flex-direction:column;gap:10px}
  .topp{gap:12px}
  .pille{background:var(--p-gran);color:#F7F1E3;border-radius:999px;padding:4px 12px;font-weight:700;font-size:13px}
  .tal{font-size:15px}.tal b{font-size:22px}
  .fasit{margin:0;font-size:17px;font-weight:700}
  .lbl{font:700 11px var(--f-tekst);letter-spacing:.06em;text-transform:uppercase;color:var(--p-dempa);margin-right:6px}
  .stor{min-height:48px;font-size:16px;padding:10px 22px}
  .klokke{font:700 34px "IBM Plex Mono",monospace;min-width:70px;color:var(--p-raud)}
  .ok{color:var(--p-ok);font-weight:700}
  .varsel{margin:0;background:#FBEAD0;color:#7A4108;border-radius:8px;padding:6px 10px;font-weight:600;font-size:14px}
  .tabell{overflow:auto;max-height:420px}
  table{border-collapse:collapse;width:100%;font-size:14px}
  th{text-align:left;font:700 11px var(--f-tekst);letter-spacing:.05em;text-transform:uppercase;color:var(--p-dempa);padding:6px;border-bottom:2px solid var(--p-blekk);position:sticky;top:0;background:#FFFBF0}
  td{padding:4px 6px;border-bottom:1px solid var(--p-linje);vertical-align:middle}
  .r{text-align:right;white-space:nowrap}
  .mono{font-family:"IBM Plex Mono",monospace;white-space:nowrap}
  .svar{max-width:260px;overflow-wrap:anywhere}
  tr.sjekk{background:#FFF3DC}
  .vurd{display:flex;gap:4px;align-items:center}
  .chip{font-size:12px;font-weight:700;border-radius:6px;padding:2px 7px;min-width:52px;text-align:center}
  .chip.rett{background:#DDF1E4;color:#1D5E37}.chip.feil{background:#F7DEDE;color:#8E1F26}.chip.sjekk{background:#FBEAD0;color:#7A4108}
  .ibtn[aria-pressed="true"]{background:var(--p-gran);color:#fff;border-color:var(--p-gran)}
</style>
