<script>
  // Køyr quizen: køyreplan, fasitliste (eiga liste, aldri i «Neste»), førehandsvising, mobilane og avsløringa.
  import { live } from "../lib/data.svelte.js";
  import { setState, setNo, melding } from "./red.svelte.js";
  import { katInfo, nummerer, kortTittel, rangering, avsloringSteg, fasitFor, niva } from "../lib/quiz.js";
  import { publiser, stillingNo } from "./resultat.js";
  import Stage from "../lib/Stage.svelte";
  import Slide from "../lib/Slide.svelte";

  const plan = $derived(nummerer(live.quiz));
  const kats = $derived(katInfo(live.quiz));
  const st = $derived(live.state);
  const no = $derived(live.no);
  // Berre quizen på storskjermen kan styre skjermen
  const kanStyre = $derived(!!live.quizId && live.quizId === live.aktivId);
  const steg = $derived(Math.min(st.steg || 0, Math.max(plan.length - 1, 0)));
  const it = $derived(plan[steg]);
  const antalLag = $derived(rangering(live.lag, live.quiz).length);
  const stegListe = $derived(avsloringSteg(antalLag));
  const vist = $derived(no.vist || []);

  // Køyreplanen utan fasit: «Neste» og klikkaren går aldri inn på ein fasit
  const iPlan = i => plan[i] && !plan[i].skjult && plan[i].type !== "fasit";
  const nesteI = (fra, d) => { let i = fra + d; while (i >= 0 && i < plan.length && !iPlan(i)) i += d; return i >= 0 && i < plan.length ? i : -1; };
  const neste = $derived(plan[nesteI(steg, 1)]);

  function gaaTil(i){
    if (!kanStyre) return;
    i = Math.max(0, Math.min(i, plan.length - 1));
    setState({ steg: i, modus: "plan" });
    if (plan[i]?.type === "poengtavle") taStilling();
  }
  function fram(){
    if (!kanStyre) return;
    if (st.modus === "avsloring") return avsFram();
    if (st.modus !== "plan") { setState({ modus: "plan" }); return; }
    const n = nesteI(steg, 1); if (n >= 0) gaaTil(n);
  }
  function tilbake(){
    if (!kanStyre) return;
    if (st.modus === "avsloring") return avsTilbake();
    if (st.modus !== "plan") { setState({ modus: "plan" }); return; }
    const n = nesteI(steg, -1); if (n >= 0) gaaTil(n);
  }
  function veksle(m){
    if (!kanStyre) return;
    const paa = st.modus !== m;
    setState({ modus: paa ? m : "plan" });
    if (paa && m === "poengtavle") taStilling();
  }

  // ---- Mobilane ----
  const oppdater = async (opt) => { if (!no.ope) return; try { await publiser(opt); } catch (e) { melding("Mobilane vart ikkje oppdaterte: " + (e.message || e), true); } };
  async function underveis(v){
    await setNo({ underveis: v, ope: v || !!no.endeleg });
    if (v) { const n = await publiser(); melding(`Mobilane viser no rundane med vist fasit (${n} bord)`); }
    else melding("Mobilane viser ikkje resultat før du opnar heile resultatet");
  }
  async function opneHeile(){
    try { await setNo({ endeleg: true, ope: true, avsloring: false }); const n = await publiser(); melding(`Heile resultatet er ope for ${n} bord.`); }
    catch (e) { melding("Resultatet vart ikkje sendt: " + (e.message || e), true); }
  }
  const skjul = () => setNo({ ope: false, endeleg: false });

  // Poengtavla undervegs: plassane blir lagra, og mobilane viser «Plass 4 etter runde 5» til neste gong
  async function taStilling(){
    if (st.modus === "avsloring") return;
    // Ingen rundar med vist fasit: alle står på 0 og ville fått 1. plass. Då blir det ingen plass på mobilane.
    if (!vist.length) { if (live.no.stilling) { await setNo({ stilling: null }); oppdater(); } return; }
    const c = (live.quiz?.kategoriar || []).filter(k => vist.includes(k.id)).map(k => kats.get(k.id)?.nr || k.namn);
    const etter = c.length ? "etter runde " + (c.length > 1 ? c.slice(0, -1).join(", ") + " og " + c[c.length - 1] : c[0]) : "";
    await setNo({ stilling: { plass: stillingNo(), etter, t: Date.now() } });
    oppdater();
  }

  // ---- Fasit: eiga liste, førehandsvising først, hald inne for å vise ----
  const fasitar = $derived(plan.map((p, i) => ({ p, i })).filter(x => x.p.type === "fasit"));
  const katarI = p => (Array.isArray(p.kat) ? p.kat : [p.kat]).filter(Boolean);
  const namngitte = $derived(live.lag.filter(l => (l.namn || "").trim()));
  const retta = id => namngitte.filter(l => l.rett?.[id]).length;
  const ikkjeRetta = p => katarI(p).reduce((s, id) => s + (namngitte.length - retta(id)), 0);
  const erVist = p => katarI(p).every(id => vist.includes(id));
  let forhand = $state(null);   // fasit som berre er i førehandsvisinga di
  let forhandKat = $state(null); // berre éi runde av ein fasit med fleire (null = alle)
  const velFasit = i => { forhandKat = null; forhand = forhand === i ? null : i; };
  const visFasitI = $derived(forhand ?? (st.modus === "fasit" ? st.fasit : null));
  const visKat = $derived(forhand !== null ? forhandKat : (st.modus === "fasit" ? (st.fasitKat ?? null) : null));
  const katarVist = p => visKat ? katarI(p).filter(id => visKat.includes(id)) : katarI(p);

  async function visFasit(i){
    if (!kanStyre) return;
    const p = plan[i]; if (!p) return;
    const val = forhandKat && forhandKat.length ? forhandKat : null;
    await setState({ modus: "fasit", fasit: i, fasitKat: val });
    const ny = [...new Set([...vist, ...(val || katarI(p))])];
    await setNo({ vist: ny });
    forhand = null; forhandKat = null;
    oppdater();
    melding(`Fasit vist: ${val ? val.map(id => kats.get(id)?.namn ?? id).join(" og ") : kortTittel(p, kats)}`);
  }
  // Hald inne i eitt sekund: eit uheldig klikk eller presentasjonsklikkaren kan ikkje vise fasiten
  let held = $state(null), heldT;
  // Ekstra sikring: fasiten blir berre vist om knappen framleis er halden når sekundet er ute
  function haldStart(i, e){
    if (!kanStyre || (e && (e.button !== 0 || !e.isPrimary))) return;
    held = i; clearTimeout(heldT);
    heldT = setTimeout(() => { if (held !== i) return; held = null; visFasit(i); }, 1000);
  }
  function haldSlepp(){ clearTimeout(heldT); held = null; }

  // ---- Sluttavsløringa: byggjer seg opp frå plass 15 ----
  const rangert = $derived(rangering(live.lag, live.quiz));
  const stegNo = $derived(stegListe.findIndex(s => s.v === (st.avslort || 0) && s.s === !!st.spenning));
  async function startAvsloring(){
    if (!kanStyre || !confirm("Starte sluttavsløringa? Mobilane skjuler plassane til dei er viste på skjermen.")) return;
    await setState({ modus: "avsloring", avslort: 0, sist: 0, spenning: false });
    await setNo({ avsloring: true, avslort: {}, endeleg: false });
    oppdater();
  }
  async function avsFram(){
    const i = stegNo < 0 ? 0 : stegNo, nx = stegListe[i + 1]; if (!nx) return;
    const forr = st.avslort || 0;
    await setState({ avslort: nx.v, spenning: nx.s, sist: nx.s ? forr : (stegListe.slice(0, i + 1).reverse().find(s => !s.s)?.v ?? 0) });
    if (nx.v > forr) {
      // Nye plassar er viste: mobilane til desse laga får plassen sin
      const nye = rangert.slice(rangert.length - nx.v, rangert.length - forr);
      await setNo({ avslort: { ...(no.avslort || {}), ...Object.fromEntries(nye.map(t => [t.id, t.rank])) } });
      oppdater({ berre: nye.map(t => t.id) });
    }
  }
  function avsTilbake(){
    const i = stegNo; if (i <= 0) return;
    const fx = stegListe[i - 1];
    setState({ avslort: fx.v, spenning: fx.s, sist: stegListe.slice(0, i - 1).reverse().find(s => !s.s)?.v ?? 0 });
  }
  async function avsluttAvsloring(){ await setState({ modus: "plan", spenning: false }); await setNo({ avsloring: false }); }
  const nesteAvs = $derived.by(() => {
    const nx = stegListe[(stegNo < 0 ? 0 : stegNo) + 1]; if (!nx) return "Ferdig";
    const t = rangert[rangert.length - nx.v - (nx.s ? 1 : 0)] || rangert[rangert.length - nx.v];
    if (nx.s) return `Spenning: plass ${rangert[rangert.length - nx.v - 1]?.rank}`;
    return nx.v - (st.avslort || 0) > 1 ? `Plassar ${rangert[rangert.length - nx.v]?.rank}–${rangert[rangert.length - (st.avslort || 0) - 1]?.rank}` : `Plass ${t?.rank}: ${t?.namn}`;
  });

  function tast(e){
    const t = e.target; if (t && (t.closest("input, textarea, select, [contenteditable]"))) return;
    if (ovar) return;
    if (["ArrowRight", "PageDown", " "].includes(e.key)) { e.preventDefault(); fram(); }
    else if (["ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); tilbake(); }
    else if (["b", "B", "."].includes(e.key)) { e.preventDefault(); veksle("pause"); }
  }
  const opneSkjerm = () => window.open("skjerm.html", "etneskjerm", "popup,width=1280,height=720");

  // ---- Øving: avsløringa med oppdikta lag, berre i dette vindauget ----
  let ovar = $state(false), ovLag = $state([]), ovI = $state(0);
  const OV_NAMN = ["Skinnbamsen", "Quizling", "Samba på ski", "Lyskestrekk", "Visvikta", "B-gjengen", "Dei langbeinte", "Quiz my ass", "Hotellkrossen", "Innbyttarbenken", "Best før", "Erik og Quiz", "Popkorn 2010", "Tropp 4", "Etnes englar", "Hoe Hoe Hoeheim", "Bassens englar", "To be announced", "Ribberibellane", "Familien Kaos", "The Undertakers", "Quizmas", "Merry Quiztmus", "Kåre & Petrusa", "Og fasiten seie", "Me prøve igjen"];
  function ov(){
    const k = live.quiz?.kategoriar?.[0]?.id || "k";
    ovLag = OV_NAMN.map((namn, i) => ({ id: "o" + i, bord: i + 1, namn, poeng: { [k]: 60 - i * 2 + (i % 3) * 0.5 } }));
    ovI = 0; ovar = true;
  }
  const ovSteg = $derived(avsloringSteg(ovLag.length));
  const ovS = $derived(ovSteg[ovI] || { v: 0, s: false });
  const ovSist = $derived(ovS.s ? ovS.v : (ovSteg.slice(0, ovI).reverse().find(s => !s.s)?.v ?? 0));
  function ovTast(e){
    if (!ovar) return;
    if (["ArrowRight", "PageDown", " "].includes(e.key)) { e.preventDefault(); ovI = Math.min(ovI + 1, ovSteg.length - 1); }
    else if (["ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); ovI = Math.max(0, ovI - 1); }
    else if (e.key === "Escape") ovar = false;
  }

  let liste = $state();
  $effect(() => { const el = liste?.querySelector(`[data-i="${steg}"]`); el?.scrollIntoView({ block: "nearest" }); });
  const modusNamn = { plan: "Køyreplan", pause: "Pause", poengtavle: "Poengtavle", avsloring: "Avsløring", fasit: "Fasit" };
</script>

<svelte:window onkeydown={e => { ovTast(e); tast(e); }} />

<div class="koyr">
  <aside class="plan kort" aria-label="Køyreplan">
    <h3>Køyreplan</h3>
    <ol bind:this={liste}>
      {#each plan as p, i}
        {#if p.type !== "fasit"}
          <li><button type="button" data-i={i} class="pkt {p.type}" class:ark={p.skjult} disabled={p.skjult || !kanStyre} title={p.skjult ? "Berre på arket, ikkje på skjermen" : ""} aria-current={i === steg && st.modus === "plan"} onclick={() => gaaTil(i)}>
            <span class="nr">{i + 1}</span><span class="t">{kortTittel(p, kats)}</span>{#if p.skjult}<span class="arkmerke">ark</span>{/if}
          </button></li>
        {/if}
      {/each}
    </ol>
  </aside>

  <section class="midt">
    <div class="kontroll">
      <button class="btn" type="button" onclick={tilbake} disabled={!kanStyre}>← Førre</button>
      <button class="btn raud stor" type="button" onclick={fram} disabled={!kanStyre}>{st.modus === "avsloring" ? "Neste →" : st.modus !== "plan" ? "Tilbake til planen →" : "Neste →"}</button>
      <span class="skilje"></span>
      <button class="btn" type="button" aria-pressed={st.modus === "pause"} onclick={() => veksle("pause")} disabled={!kanStyre}>Pause</button>
      <button class="btn" type="button" aria-pressed={st.modus === "poengtavle"} onclick={() => veksle("poengtavle")} disabled={!kanStyre}>Poengtavle</button>
      {#if st.modus === "avsloring"}
        <button class="btn" type="button" onclick={avsluttAvsloring}>Avslutt avsløring</button>
      {:else}
        <button class="btn gull" type="button" onclick={startAvsloring} disabled={!antalLag || !kanStyre}>Start sluttavsløring</button>
      {/if}
      <span class="skilje"></span>
      <button class="btn primary" type="button" onclick={opneSkjerm}>Opne storskjermen</button>
      <button class="btn" type="button" onclick={ov}>Øv på avsløringa</button>
    </div>

    <div class="kontroll mobilrad">
      <span class="dempa">Mobilane (QR-koden på bordet):</span>
      <label class="sjekk"><input type="checkbox" checked={!!no.underveis} onchange={e => underveis(e.target.checked)}> Vis resultat under quizen</label>
      {#if no.endeleg}
        <span class="pille ok">Heile resultatet er ope</span>
        <button class="btn liten" type="button" onclick={opneHeile}>Oppdater</button>
        <button class="btn liten" type="button" onclick={skjul}>Skjul</button>
      {:else}
        <button class="btn liten" type="button" onclick={opneHeile} disabled={!antalLag}>Opne heile resultatet</button>
        {#if no.ope}<button class="btn liten" type="button" onclick={() => oppdater().then(() => melding("Mobilane er oppdaterte"))}>Oppdater mobilane</button>{/if}
      {/if}
    </div>

    <div class="status">
      <span class="pille">På skjermen: {modusNamn[st.modus] || st.modus}</span>
      {#if st.modus === "avsloring"}<span class="dempa">{Math.min(st.avslort || 0, antalLag)} av {antalLag} plassar viste · neste: {nesteAvs}</span>
      {:else}<span class="dempa">Piltastar eller presentasjonsklikkar: neste og førre. B: pause. Fasiten blir aldri vist med «Neste».</span>{/if}
    </div>

    <div class="forhand" class:fasitforhand={forhand !== null} aria-label="Førehandsvising av storskjermen">
      {#if forhand !== null}<span class="forhandmerke">Berre førehandsvising – ikkje på storskjermen</span>{/if}
      <Stage><Slide quiz={live.quiz} steg={steg} modus={forhand !== null ? "fasit" : st.modus} lag={live.lag} avslort={st.avslort} sist={st.sist} spenning={!!st.spenning} fasit={forhand ?? st.fasit ?? null} fasitKat={visKat} telKat={vist} /></Stage>
    </div>
  </section>

  <aside class="info">
    <section class="kort fasitliste" aria-label="Fasit">
      <h3>Fasit</h3>
      <p class="dempa liten">Klikk for å sjå fasiten berre her. Hald inne knappen for å vise han på storskjermen{no.underveis ? " og mobilane" : ""}.</p>
      {#each fasitar as f (f.i)}
        {@const mangel = ikkjeRetta(f.p)}
        <div class="fblokk" class:valt={forhand === f.i} class:paa={st.modus === "fasit" && st.fasit === f.i}>
          <button type="button" class="ftittel" onclick={() => velFasit(f.i)}>
            <span>{kortTittel(f.p, kats)}</span>{#if erVist(f.p)}<span class="vistmerke">vist</span>{/if}
          </button>
          <div class="fstatus">{#each katarI(f.p) as id}<span class:ok={retta(id) >= namngitte.length && namngitte.length}>{kats.get(id)?.namn ?? id}: {retta(id)}/{namngitte.length} retta{vist.includes(id) ? " · vist" : ""}</span>{/each}</div>
          {#if forhand === f.i}
            {#if katarI(f.p).length > 1}
              <!-- Vel om heile fasiten skal visast, eller berre éi runde -->
              <div class="fval" role="group" aria-label="Kva rundar som skal visast">
                <button type="button" class="btn liten" aria-pressed={!forhandKat} onclick={() => forhandKat = null}>Begge</button>
                {#each katarI(f.p) as id}<button type="button" class="btn liten" aria-pressed={forhandKat?.length === 1 && forhandKat[0] === id} onclick={() => forhandKat = [id]}>Berre {kats.get(id)?.namn ?? id}</button>{/each}
              </div>
            {/if}
            {@const valde = forhandKat || katarI(f.p)}
            {@const mangelVal = valde.reduce((s, id) => s + (namngitte.length - retta(id)), 0)}
            <button type="button" class="btn hald" class:held={held === f.i} disabled={!kanStyre}
              onpointerdown={e => haldStart(f.i, e)} onpointerup={haldSlepp} onpointerleave={haldSlepp} onpointercancel={haldSlepp} oncontextmenu={e => e.preventDefault()}>
              <i></i><span>{mangelVal ? `${mangelVal} ikkje retta – hald for å vise likevel` : forhandKat ? `Hald for å vise ${kats.get(forhandKat[0])?.namn ?? ""}` : "Hald for å vise på storskjermen"}</span>
            </button>
          {/if}
        </div>
      {:else}
        <p class="dempa liten">Ingen fasit i køyreplanen. Legg til «+ Fasit» under Spørsmål.</p>
      {/each}
    </section>
    <section class="kort hemmeleg">
      <h3>Berre for deg</h3>
      {#if visFasitI !== null && plan[visFasitI]}
        {#each katarVist(plan[visFasitI]) as id}
          <div class="felt"><span class="lbl">{kats.get(id)?.namn ?? id}</span><ol class="mini">{#each fasitFor(live.quiz, plan, id) as s}<li>{s}</li>{/each}</ol></div>
        {/each}
      {:else if it?.type === "sporsmal"}
        <div class="felt"><span class="lbl">Fasit</span><p class="fasitsvar">{it.svar || "Ingen fasit lagt inn"}</p></div>
      {:else}
        <p class="dempa">Ingen fasit på dette punktet.</p>
      {/if}
      {#if it?.notat && visFasitI === null}<div class="felt"><span class="lbl">Manus og notat</span><p class="notat">{it.notat}</p></div>{/if}
    </section>
    <section class="kort">
      <h3>Neste</h3>
      <p class="dempa" style="margin:4px 0 0">{neste ? kortTittel(neste, kats) : "Slutten av køyreplanen"}</p>
    </section>
  </aside>
</div>

{#if ovar}
  <div class="ovlag" role="dialog" aria-modal="true" aria-label="Øv på avsløringa">
    <div class="ovtopp">
      <strong>Øving: sluttavsløringa med oppdikta lag</strong>
      <span class="dempa">Steg {ovI + 1} av {ovSteg.length} · piltastar eller knappane · ingenting blir lagra eller vist på storskjermen</span>
      <span style="flex:1"></span>
      <button class="btn" type="button" onclick={() => ovI = Math.max(0, ovI - 1)}>← Førre</button>
      <button class="btn raud" type="button" onclick={() => ovI = Math.min(ovI + 1, ovSteg.length - 1)}>Neste →</button>
      <button class="btn" type="button" onclick={() => ovar = false}>Lukk</button>
    </div>
    <div class="ovscene"><Stage><Slide quiz={live.quiz} modus="avsloring" lag={ovLag} avslort={ovS.v} sist={ovSist} spenning={ovS.s} /></Stage></div>
  </div>
{/if}

<style>
  .koyr{display:grid;grid-template-columns:300px minmax(0,1fr) 320px;gap:18px;align-items:start}
  .plan{position:sticky;top:12px;max-height:calc(100vh - 40px);display:flex;flex-direction:column;gap:8px;padding:14px}
  .plan ol{list-style:none;margin:0;padding:0;overflow:auto;display:flex;flex-direction:column;gap:2px}
  .pkt{display:grid;grid-template-columns:30px minmax(0,1fr);gap:6px;width:100%;text-align:left;border:0;background:transparent;border-radius:8px;padding:6px 8px;cursor:pointer;font-size:14px}
  .pkt .t{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .pkt .nr{color:var(--p-dempa);font:500 12px "IBM Plex Mono",monospace;padding-top:2px}
  .pkt.kategori{font-weight:700;margin-top:6px}
  .pkt.poengtavle,.pkt.pause,.pkt.tittel{color:#7A5410;font-weight:600}
  .pkt:hover{background:var(--p-flate-2)}
  .pkt[aria-current="true"]{background:var(--p-gran);color:#F7F1E3}
  .pkt[aria-current="true"] .nr{color:#E8B84A}
  .pkt.ark{opacity:.55;cursor:default;font-style:italic;grid-template-columns:30px minmax(0,1fr) auto}
  .pkt.ark:hover{background:transparent}
  .arkmerke{font:700 10px var(--f-tekst);letter-spacing:.06em;text-transform:uppercase;background:var(--p-linje);border-radius:5px;padding:1px 5px;font-style:normal;align-self:center}
  .mobilrad{gap:10px}
  .sjekk{display:flex;align-items:center;gap:6px;font-weight:600;font-size:14px;cursor:pointer}
  .midt{display:flex;flex-direction:column;gap:12px;min-width:0}
  .kontroll{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
  .kontroll .stor{min-height:50px;padding:10px 26px;font-size:16px}
  .skilje{width:1px;height:28px;background:var(--p-linje)}
  .status{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
  .pille{background:var(--p-gran);color:#F7F1E3;border-radius:999px;padding:4px 12px;font-weight:700;font-size:13px}
  .pille.ok{background:#2E7D5B}
  .forhand{position:relative;aspect-ratio:16/9;width:100%;border-radius:12px;overflow:hidden;background:#000;box-shadow:0 8px 24px rgba(0,0,0,.18)}
  .fasitforhand{outline:4px dashed #E8B84A;outline-offset:3px}
  .forhandmerke{position:absolute;z-index:10;left:50%;top:10px;transform:translateX(-50%);background:#E8B84A;color:#0F2E24;font:700 13px var(--f-tekst);padding:4px 12px;border-radius:999px;white-space:nowrap}
  .info{display:flex;flex-direction:column;gap:12px;position:sticky;top:12px;max-height:calc(100vh - 40px);overflow:auto}
  .fasitliste{display:flex;flex-direction:column;gap:8px}
  .liten{font-size:13px;margin:0}
  .fblokk{border:1px solid var(--p-linje);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;gap:6px}
  .fblokk.valt{border-color:#E8B84A;background:#FFFBF0}
  .fblokk.paa{border-color:var(--p-gran);box-shadow:0 0 0 2px var(--p-gran)}
  .ftittel{display:flex;justify-content:space-between;gap:8px;border:0;background:transparent;font:700 14px var(--f-tekst);text-align:left;cursor:pointer;padding:0;color:inherit}
  .vistmerke{font:700 10px var(--f-tekst);text-transform:uppercase;letter-spacing:.06em;background:#2E7D5B;color:#fff;border-radius:5px;padding:2px 6px;align-self:center}
  .fstatus{display:flex;flex-direction:column;font-size:12px;color:#8E1F26}
  .fstatus .ok{color:#2E7D5B}
  .fval{display:flex;flex-wrap:wrap;gap:6px}
  .fval .btn[aria-pressed="true"]{background:var(--p-gran);color:#F7F1E3;border-color:var(--p-gran)}
  .hald{position:relative;overflow:hidden;touch-action:none;user-select:none;background:#C8323A;color:#fff;border-color:#C8323A;font-weight:700}
  .hald i{position:absolute;inset:0;width:0;background:rgba(0,0,0,.25)}
  .hald.held i{width:100%;transition:width 1s linear}
  .hald span{position:relative}
  .hemmeleg{border:2px solid var(--p-gull);background:#FFFBF0;display:flex;flex-direction:column;gap:10px}
  .fasitsvar{margin:0;font-size:20px;font-weight:700}
  .notat{margin:0;white-space:pre-line;font-size:14px}
  .mini{margin:0;padding-left:22px;font-size:14px}
  .ovlag{position:fixed;inset:0;z-index:60;background:#0A1F18;display:flex;flex-direction:column;gap:10px;padding:12px 16px}
  .ovtopp{display:flex;flex-wrap:wrap;align-items:center;gap:10px;color:#F7F1E3}
  .ovtopp .dempa{color:#B9CBBF}
  .ovscene{flex:1;position:relative;min-height:0}
  @media (max-width:1200px){.koyr{grid-template-columns:240px minmax(0,1fr)}.info{grid-column:1 / -1;position:static;max-height:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}}
  @media (max-width:760px){.koyr{grid-template-columns:minmax(0,1fr)}.plan{position:static;max-height:300px;order:2}.skilje{display:none}}
</style>
