<script>
  // Storskjermen i hurtigrundane: spørsmålet med nedteljing, fasit og dei raskaste, og vinnaren av runda.
  import { live, namnFor } from "./data.svelte.js";
  import { klokke, slutt } from "./klokke.svelte.js";
  import { BOKSTAV, ms, rett, sek, hurtigStilling } from "./hurtig.js";
  import { fmt } from "./quiz.js";
  let { it, k, plan } = $props();

  const opning = $derived(it.type === "sporsmal" ? live.state.opningar?.[it.id] : null);
  const erLive = $derived(!!opning && live.no.id === opning);
  const fristen = $derived(erLive ? slutt(live.no, ms) : 0);
  const att = $derived(erLive && live.no.open ? Math.max(0, Math.ceil((fristen - klokke.no) / 1000)) : 0);
  const open = $derived(erLive && live.no.open && att > 0);
  const fasit = $derived(!!opning && !!live.state.fasitar?.[it.id]);
  const svarDenne = $derived(opning ? live.svar.filter(s => s.live === opning) : []);
  const retta = $derived(fasit ? rett(it, svarDenne) : []);
  const raskaste = $derived(retta.filter(s => s.status === "rett").slice(0, 5));
  const lagTal = $derived(live.mobilar.length);
  const tid = $derived(it.tid || 20);
  const R = 46, OMKR = 2 * Math.PI * R;

  // Vinnaren av runda
  const stilling = $derived(it.type === "hurtigresultat" ? hurtigStilling(plan, it.kat, live.state.opningar, live.svar, namnFor) : []);
  const vinnarar = $derived(stilling.filter(t => t.rank === 1));
  const talSp = $derived(plan.filter(x => x.type === "sporsmal" && x.kat === it.kat).length);
</script>

{#if it.type === "sporsmal"}
  <div class="slide">
    <div class="top">
      <div style="display:flex;align-items:center;gap:16px">
        <span class="pill gull">⚡ {k?.namn || "Hurtigrunde"}</span>
        {#if it.qNr}<span class="meta">Spørsmål {it.qNr} av {it.qTot}</span>{/if}
      </div>
      <div class="h-status">
        {#if opning}<span class="meta"><b class="h-tal">{svarDenne.length}</b> av {lagTal} har svart</span>{/if}
        {#if !fasit}<svg class="h-ring" class:tom={!open} width="110" height="110" viewBox="0 0 110 110" aria-label="{att} sekund att">
          <circle cx="55" cy="55" r={R} fill="none" stroke="#24533F" stroke-width="10" />
          <circle cx="55" cy="55" r={R} fill="none" stroke="#E8B84A" stroke-width="10" stroke-linecap="round"
            stroke-dasharray={OMKR} stroke-dashoffset={OMKR * (1 - (open ? att / tid : opning ? 0 : 1))} transform="rotate(-90 55 55)" />
          <text x="55" y="68" text-anchor="middle">{open ? att : opning ? "Stopp" : tid}</text>
        </svg>{/if}
      </div>
    </div>

    <p class="h-q" class:lang={(it.tekst || "").length > 120}>{it.tekst}</p>

    {#if it.form === "alternativ"}
      <div class="h-alt">
        {#each (it.alternativ || []).slice(0, 4) as a, i}
          <div class="h-a" class:rett={fasit && String(it.rett) === String(i)} class:av={fasit && String(it.rett) !== String(i)}><b>{BOKSTAV[i]}</b><span>{a}</span></div>
        {/each}
      </div>
    {:else if fasit}
      <div class="h-fasit"><span>Fasit</span><b>{it.svar}</b></div>
    {:else}
      <div class="h-hint">{open ? "Skriv svaret på mobilen. Små skrivefeil går fint." : "Svaret skriv de på mobilen når klokka startar."}</div>
    {/if}

    <div class="h-botn">
      {#if fasit}
        {#if raskaste.length}
          <span class="h-lbl">Raskast</span>
          {#each raskaste as s, i}<span class="h-rask"><b>{i + 1}.</b> {namnFor(s.bord)} <em>{i === 0 ? "" : "+" + sek(s.diff) + " s"}</em></span>{/each}
        {:else}<span class="h-lbl">Ingen rette svar denne gongen</span>{/if}
      {:else if open}
        <span class="h-lbl">Første svar tel. Raskaste rette svar får mest.</span>
      {:else if opning}
        <span class="h-lbl">Tida er ute</span>
      {:else}
        <span class="h-lbl">Ta fram mobilen. Klokka startar når spørsmålet er lese opp.</span>
      {/if}
    </div>
  </div>
{:else}
  <div class="slide s-mid h-vinn">
    <span class="over">{k?.namn || "Hurtigrunda"} · ferdig</span>
    {#if vinnarar.length}
      <span class="h-lbl2">{vinnarar.length > 1 ? "Delt førsteplass" : "Raskast i hurtigrunda"}</span>
      <h1 class="stor">{vinnarar.map(t => t.namn).join(" og ")}</h1>
      <span class="under">{fmt(vinnarar[0].p)} poeng{k?.premie ? " · vinn " + k.premie : ""}</span>
      <div class="h-neste">
        {#each stilling.filter(t => t.rank > 1).slice(0, 4) as t}<span><b>{t.rank}.</b> {t.namn} <em>{fmt(t.p)} poeng</em></span>{/each}
      </div>
    {:else}
      <h1 class="stor">Ingen svar enno</h1>
      <span class="under">{talSp} spørsmål i runda</span>
    {/if}
  </div>
{/if}
