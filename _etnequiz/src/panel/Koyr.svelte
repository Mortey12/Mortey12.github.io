<script>
  // Køyr quizen: køyreplan, førehandsvising av storskjermen, fasit berre for quizmasteren og knappar.
  import { live } from "../lib/data.svelte.js";
  import { setState, setNo, melding } from "./red.svelte.js";
  import { katInfo, nummerer, kortTittel, rangering, avsloringSteg, fasitFor } from "../lib/quiz.js";
  import { sendResultat } from "./resultat.js";
  import HurtigStyring from "./HurtigStyring.svelte";
  import Stage from "../lib/Stage.svelte";
  import Slide from "../lib/Slide.svelte";

  const plan = $derived(nummerer(live.quiz));
  const kats = $derived(katInfo(live.quiz));
  const st = $derived(live.state);
  const steg = $derived(Math.min(st.steg || 0, Math.max(plan.length - 1, 0)));
  const it = $derived(plan[steg]);
  const neste = $derived(plan.slice(steg + 1).find(p => !p.skjult));
  const antalLag = $derived(rangering(live.lag, live.quiz).length);
  const stegListe = $derived(avsloringSteg(antalLag));

  const hurtigQ = p => p?.type === "sporsmal" && !!kats.get(p.kat)?.hurtig;
  function gaaTil(i){
    i = Math.max(0, Math.min(i, plan.length - 1));
    setState({ steg: i, modus: "plan" });
    const p = plan[i];
    // Mobilane: vent på neste hurtigspørsmål, eller kvil
    if (hurtigQ(p)) { if (live.no.id !== live.state.opningar?.[p.id] || !live.no.id) setNo({ id: null, open: false, vent: true, kat: kats.get(p.kat)?.namn || "", nr: p.qNr || null, tot: p.qTot || null }); }
    else if (live.no.id || live.no.vent) setNo({ id: null, open: false, vent: false });
    // Jokeren blir låst når det første vanlege spørsmålet kjem på skjermen
    if (p?.type === "sporsmal" && !hurtigQ(p) && !live.no.jokerLaast) setNo({ jokerLaast: true });
  }
  // Spørsmål som berre står på arket, blir hoppa over
  const synleg = i => plan[i] && !plan[i].skjult;
  const nesteSynleg = (fra, d) => { let i = fra + d; while (i >= 0 && i < plan.length && !synleg(i)) i += d; return i >= 0 && i < plan.length ? i : -1; };
  function fram(){
    if (st.modus === "avsloring") { const nx = stegListe.find(v => v > (st.avslort || 0)); if (nx !== undefined) setState({ sist: st.avslort || 0, avslort: nx }); return; }
    if (st.modus !== "plan") { setState({ modus: "plan" }); return; }
    const n = nesteSynleg(steg, 1); if (n >= 0) gaaTil(n);
  }
  function tilbake(){
    if (st.modus === "avsloring") {
      const tidl = stegListe.filter(v => v < (st.avslort || 0));
      const ny = tidl.length ? tidl[tidl.length - 1] : 0, forr = stegListe.filter(v => v < ny);
      setState({ avslort: ny, sist: forr.length ? forr[forr.length - 1] : 0 }); return;
    }
    if (st.modus !== "plan") { setState({ modus: "plan" }); return; }
    const n = nesteSynleg(steg, -1); if (n >= 0) gaaTil(n);
  }
  const veksle = m => setState({ modus: st.modus === m ? "plan" : m });
  const startAvsloring = () => setState({ modus: "avsloring", avslort: 0, sist: 0 });

  function tast(e){
    const t = e.target; if (t && (t.closest("input, textarea, select, [contenteditable]"))) return;
    if (["ArrowRight", "PageDown", " "].includes(e.key)) { e.preventDefault(); fram(); }
    else if (["ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); tilbake(); }
    else if (["b", "B", "."].includes(e.key)) { e.preventDefault(); veksle("pause"); }
  }
  async function sendRes(){
    try { const n = await sendResultat(); await setNo({ resultat: true, resultatT: Date.now() }); melding(`Resultatet er sendt til ${n} mobilar`); }
    catch (e) { melding("Resultatet vart ikkje sendt: " + (e.message || e), true); }
  }
  const opneSkjerm = () => window.open("skjerm.html", "etneskjerm", "popup,width=1280,height=720");

  let liste = $state();
  $effect(() => { const el = liste?.querySelector(`[data-i="${steg}"]`); el?.scrollIntoView({ block: "nearest" }); });
  const modusNamn = { plan: "Køyreplan", pause: "Pause", poengtavle: "Poengtavle", avsloring: "Avsløring" };
</script>

<svelte:window onkeydown={tast} />

<div class="koyr">
  <aside class="plan kort" aria-label="Køyreplan">
    <h3>Køyreplan</h3>
    <ol bind:this={liste}>
      {#each plan as p, i}
        <li><button type="button" data-i={i} class="pkt {p.type}" class:ark={p.skjult} class:hurtig={hurtigQ(p)} disabled={p.skjult} title={p.skjult ? "Berre på arket, ikkje på skjermen" : ""} aria-current={i === steg && st.modus === "plan"} onclick={() => gaaTil(i)}>
          <span class="nr">{i + 1}</span><span class="t">{kortTittel(p, kats)}</span>{#if p.skjult}<span class="arkmerke">ark</span>{/if}
        </button></li>
      {/each}
    </ol>
  </aside>

  <section class="midt">
    <div class="kontroll">
      <button class="btn" type="button" onclick={tilbake}>← Førre</button>
      <button class="btn raud stor" type="button" onclick={fram}>{st.modus === "avsloring" ? "Neste plassar →" : st.modus !== "plan" ? "Tilbake til planen →" : "Neste →"}</button>
      <span class="skilje"></span>
      <button class="btn" type="button" aria-pressed={st.modus === "pause"} onclick={() => veksle("pause")}>Pause</button>
      <button class="btn" type="button" aria-pressed={st.modus === "poengtavle"} onclick={() => veksle("poengtavle")}>Poengtavle</button>
      {#if st.modus === "avsloring"}
        <button class="btn" type="button" onclick={() => setState({ modus: "plan" })}>Avslutt avsløring</button>
      {:else}
        <button class="btn gull" type="button" onclick={startAvsloring} disabled={!antalLag}>Start avsløring</button>
      {/if}
      <span class="skilje"></span>
      <button class="btn primary" type="button" onclick={opneSkjerm}>Opne storskjermen</button>
    </div>
    <div class="kontroll mobilrad">
      <span class="dempa">Mobilane: {live.mobilar.length} kopla til</span>
      <button class="btn liten" type="button" aria-pressed={!!live.no.jokerLaast} onclick={() => setNo({ jokerLaast: !live.no.jokerLaast })}>{live.no.jokerLaast ? "Jokerane er låste" : "Jokerane er opne"}</button>
      <button class="btn liten" type="button" aria-pressed={!!live.no.resultat} onclick={sendRes}>{live.no.resultat ? "Resultatet er sendt (oppdater)" : "Send resultatet til mobilane"}</button>
      {#if live.no.resultat}<button class="btn liten" type="button" onclick={() => setNo({ resultat: false })}>Skjul resultatet</button>{/if}
    </div>

    <div class="status">
      <span class="pille">På skjermen: {modusNamn[st.modus] || st.modus}</span>
      {#if st.modus === "avsloring"}<span class="dempa">{Math.min(st.avslort || 0, antalLag)} av {antalLag} plassar viste</span>{/if}
      <span class="dempa">Piltastar eller presentasjonsklikkar: neste og førre. B: pause.</span>
    </div>

    {#if it && (hurtigQ(it))}<HurtigStyring {it} k={kats.get(it.kat)} />{/if}

    <div class="forhand" aria-label="Førehandsvising av storskjermen">
      <Stage><Slide quiz={live.quiz} steg={steg} modus={st.modus} lag={live.lag} avslort={st.avslort} sist={st.sist} /></Stage>
    </div>
  </section>

  <aside class="info">
    <section class="kort hemmeleg">
      <h3>Berre for deg</h3>
      {#if hurtigQ(it)}
        <p class="dempa">Fasit og svar står i hurtigboksen.</p>
      {:else if it?.type === "sporsmal"}
        <div class="felt"><span class="lbl">Fasit</span><p class="fasitsvar">{it.svar || "Ingen fasit lagt inn"}</p></div>
      {:else if it?.type === "fasit"}
        {#each (Array.isArray(it.kat) ? it.kat : [it.kat]) as id}
          <div class="felt"><span class="lbl">{kats.get(id)?.namn ?? id}</span><ol class="mini">{#each fasitFor(live.quiz, plan, id) as s}<li>{s}</li>{/each}</ol></div>
        {/each}
      {:else}
        <p class="dempa">Ingen fasit på dette punktet.</p>
      {/if}
      {#if it?.notat}<div class="felt"><span class="lbl">Manus og notat</span><p class="notat">{it.notat}</p></div>{/if}
    </section>
    <section class="kort">
      <h3>Neste</h3>
      <p class="dempa" style="margin:4px 0 0">{neste ? kortTittel(neste, kats) : "Slutten av køyreplanen"}</p>
    </section>
  </aside>
</div>

<style>
  .koyr{display:grid;grid-template-columns:300px minmax(0,1fr) 300px;gap:18px;align-items:start}
  .plan{position:sticky;top:12px;max-height:calc(100vh - 40px);display:flex;flex-direction:column;gap:8px;padding:14px}
  .plan ol{list-style:none;margin:0;padding:0;overflow:auto;display:flex;flex-direction:column;gap:2px}
  .pkt{display:grid;grid-template-columns:30px minmax(0,1fr);gap:6px;width:100%;text-align:left;border:0;background:transparent;border-radius:8px;padding:6px 8px;cursor:pointer;font-size:14px}
  .pkt .t{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .pkt .nr{color:var(--p-dempa);font:500 12px "IBM Plex Mono",monospace;padding-top:2px}
  .pkt.kategori{font-weight:700;margin-top:6px}
  .pkt.fasit,.pkt.poengtavle,.pkt.pause,.pkt.tittel{color:#7A5410;font-weight:600}
  .pkt:hover{background:var(--p-flate-2)}
  .pkt[aria-current="true"]{background:var(--p-gran);color:#F7F1E3}
  .pkt[aria-current="true"] .nr{color:#E8B84A}
  .pkt.ark{opacity:.55;cursor:default;font-style:italic;grid-template-columns:30px minmax(0,1fr) auto}
  .pkt.ark:hover{background:transparent}
  .arkmerke{font:700 10px var(--f-tekst);letter-spacing:.06em;text-transform:uppercase;background:var(--p-linje);border-radius:5px;padding:1px 5px;font-style:normal;align-self:center}
  .pkt.hurtig .t::before{content:"";}
  .mobilrad{gap:8px}
  .midt{display:flex;flex-direction:column;gap:12px;min-width:0}
  .kontroll{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
  .kontroll .stor{min-height:50px;padding:10px 26px;font-size:16px}
  .skilje{width:1px;height:28px;background:var(--p-linje)}
  .status{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
  .pille{background:var(--p-gran);color:#F7F1E3;border-radius:999px;padding:4px 12px;font-weight:700;font-size:13px}
  .forhand{aspect-ratio:16/9;width:100%;border-radius:12px;overflow:hidden;background:#000;box-shadow:0 8px 24px rgba(0,0,0,.18)}
  .info{display:flex;flex-direction:column;gap:12px;position:sticky;top:12px}
  .hemmeleg{border:2px solid var(--p-gull);background:#FFFBF0;display:flex;flex-direction:column;gap:10px}
  .fasitsvar{margin:0;font-size:20px;font-weight:700}
  .notat{margin:0;white-space:pre-line;font-size:14px}
  .mini{margin:0;padding-left:22px;font-size:14px}
  @media (max-width:1200px){.koyr{grid-template-columns:240px minmax(0,1fr)}.info{grid-column:1 / -1;position:static;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}}
  @media (max-width:760px){.koyr{grid-template-columns:minmax(0,1fr)}.plan{position:static;max-height:300px;order:2}.skilje{display:none}}
</style>
