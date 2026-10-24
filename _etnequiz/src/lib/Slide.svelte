<script>
  // Teiknar det som skal vere på storskjermen: eitt punkt i køyreplanen, pause, poengtavle eller avsløring.
  import { katInfo, nummerer, rangering, fasitFor, fmt } from "./quiz.js";
  import { hentBilete } from "./firebase.js";
  let { quiz, steg = 0, modus = "plan", lag = [], avslort = 0, sist = 0 } = $props();

  const plan = $derived(nummerer(quiz));
  const kats = $derived(katInfo(quiz));
  const it = $derived(plan[steg]);
  const visTavle = $derived(modus === "poengtavle" || modus === "avsloring" || (modus === "plan" && it?.type === "poengtavle"));
  const avsl = $derived(modus === "avsloring");
  const rangert = $derived(visTavle ? rangering(lag, quiz) : []);

  let bilete = $state(null);
  $effect(() => { const id = it?.bilete; bilete = null; if (id) hentBilete(id).then(d => { if (it?.bilete === id) bilete = d; }); });

  const k = $derived(it?.kat && !Array.isArray(it.kat) ? kats.get(it.kat) : null);
  const tekstKlasse = $derived(((it?.tekst || "").length > 210) ? "svaert" : ((it?.tekst || "").length > 130 ? "lang" : ""));
  const kategoriInfo = $derived.by(() => {
    if (it?.type !== "kategori") return "";
    const n = plan.filter(x => x.type === "sporsmal" && x.kat === it.kat && x.nummerert !== false).length;
    return [n ? `${n} spørsmål` : "", k?.maks ? `opptil ${fmt(k.maks)} poeng` : ""].filter(Boolean).join(" · ");
  });
  const fasitIds = $derived(it?.type === "fasit" ? (Array.isArray(it.kat) ? it.kat : [it.kat]) : []);
  // Same tekststorleik i alle kolonnane på ein fasit
  const fasitTett = $derived(fasitIds.some(id => { const l = fasitFor(quiz, plan, id); return l.length > 7 || l.some(s => (s || "").length > 40); }));

  // tavle og avsløring
  const n = $derived(rangert.length);
  const cols = $derived(n <= 12 ? 2 : n <= 30 ? 3 : n <= 40 ? 4 : 5);
  const rows = $derived(Math.max(1, Math.ceil(n / cols)));
  const vist = $derived(avsl ? Math.min(avslort, n) : n);
  const overskrift = $derived.by(() => {
    if (!avsl) return "Poengtavle";
    if (vist === 0) return "Sluttresultat";
    if (vist >= n) return "Vinnaren!";
    const a = rangert[n - vist].rank, b = rangert[n - Math.max(sist, 0) - 1]?.rank;
    return vist - sist > 1 && b !== a ? `Plass ${a} til ${b}` : `Plass ${a}`;
  });
</script>

<div class="slide-host">
{#if modus === "pause"}
  <div class="slide s-mid s-tittel"><span class="over">{quiz.undertittel || "Etnequizen"}</span><h1 class="stor">{quiz.pausetekst || "Pause"}</h1><span class="under">{quiz.tittel}</span></div>
{:else if visTavle}
  {#if !n}
    <div class="slide s-mid"><h1 class="stor" style="font-size:120px">Poengtavle</h1><span class="under">Ingen lag med poeng enno</span></div>
  {:else}
    <div class="slide" style="gap:20px">
      <div class="top"><h1 class="stor" style="font-size:60px">{overskrift}</h1><span class="meta">{avsl && vist < n ? `${n - vist} plassar att` : `${n} lag`}{quiz.premietekst ? " · " + quiz.premietekst : ""}</span></div>
      <div class="t-grid" class:tett={cols >= 4} style="grid-template-columns:repeat({cols},minmax(0,1fr));grid-template-rows:repeat({rows},minmax(0,1fr))">
        {#each rangert as t, i (t.id)}
          {@const fraBotn = n - i}
          {#if fraBotn <= vist}
            <div class="t-rad" class:ny={avsl && fraBotn > sist} class:topp={t.rank <= 3}><span class="r">{t.rank}.</span><span class="n">{t.namn}</span><span class="p">{fmt(t.sum)}</span></div>
          {:else}
            <div class="t-rad skjult"><span class="r">{i + 1}.</span><span class="n">{i < 3 ? "Topp 3" : i < 10 ? "Topp 10" : "?"}</span><span class="p"></span></div>
          {/if}
        {/each}
      </div>
    </div>
    {#if avsl && vist >= n}
      <div class="vinnar"><span class="o">{rangert.filter(t => t.rank === 1).length > 1 ? "Delt vinnar av" : "Vinnar av"} {quiz.tittel || "quizen"}</span><span class="lag">{rangert.filter(t => t.rank === 1).map(t => t.namn).join(" og ")}</span><span class="p">{fmt(rangert[0].sum)} poeng</span></div>
    {/if}
  {/if}
{:else if !it}
  <div class="slide s-mid s-tittel"><h1 class="stor">{quiz.tittel || "Etnequizen"}</h1><span class="under">Køyreplanen er tom</span></div>
{:else if it.type === "tittel" || it.type === "pause"}
  <div class="slide s-mid s-tittel"><span class="over">{it.undertittel || quiz.undertittel || "Etnequizen"}</span><h1 class="stor">{it.tittel || (it.type === "pause" ? "Pause" : quiz.tittel)}</h1>{#if it.tekst}<span class="under" style="white-space:pre-line">{it.tekst}</span>{/if}</div>
{:else if it.type === "kategori"}
  <div class="slide s-mid s-kat">
    {#if k?.nr}<span class="pill">Kategori {k.nr}</span>{:else}<span class="pill gull">Ekstra</span>{/if}
    <h1 class="stor">{k?.namn ?? "?"}</h1>
    {#if kategoriInfo}<span class="under">{kategoriInfo}</span>{/if}
  </div>
{:else if it.type === "sporsmal"}
  <div class="slide">
    <div class="top">
      <div style="display:flex;align-items:center;gap:16px">
        {#if k?.nr}<span class="pill">Kategori {k.nr}</span><span class="katnamn">{k.namn}</span>{:else if k}<span class="pill gull">{k.namn}</span>{/if}
      </div>
      {#if it.qNr}<div class="meta">Spørsmål {it.qNr} av {it.qTot}<span class="dots">{#each Array(it.qTot) as _, i}<i class:on={i < it.qNr}></i>{/each}</span></div>{/if}
    </div>
    <div class="q-body" class:med-bilete={!!it.bilete}>
      {#if it.qNr}<div class="q-num">{it.qNr}</div>{:else}<div></div>{/if}
      <p class="q-tekst {tekstKlasse}">{it.tekst}</p>
      {#if it.bilete}{#if bilete}<img class="q-bilete" src={bilete} alt="" />{:else}<div class="q-bilete tom"></div>{/if}{/if}
    </div>
    <div class="foot"><span class="merke"><svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.6 6.6L21.5 9l-5.3 4.5L18 20.5 12 16.8 6 20.5l1.8-7L2.5 9l6.9-.4z" fill="#E8B84A"/></svg>{quiz.undertittel || "Etnequizen"} · {quiz.tittel}</span><span>{quiz.premietekst || ""}</span></div>
  </div>
{:else if it.type === "fasit"}
  <div class="slide">
    <div class="top">
      <div style="display:flex;align-items:center;gap:16px"><span class="pill gull">Fasit</span><span class="katnamn">{fasitIds.map(id => { const c = kats.get(id); return c ? (c.nr ? (fasitIds.length > 1 ? c.nr : c.namn) : c.namn) : id; }).join(" og ").replace(/^(\d)/, "Kategori $1")}</span></div>
      <span class="meta">Byt ark med nabobordet og rett</span>
    </div>
    <div class="f-grid" style="grid-template-columns:repeat({Math.min(fasitIds.length, 3)},minmax(0,1fr))">
      {#each fasitIds as id}
        {@const liste = fasitFor(quiz, plan, id)}
        <section class="f-kort" class:tett={fasitTett}>
          <h2>{kats.get(id)?.namn ?? id}</h2>
          <ol>{#each liste as s, i}<li><b>{i + 1}</b><span>{s}</span></li>{/each}</ol>
        </section>
      {/each}
    </div>
  </div>
{/if}
</div>

<style>
  .slide-host{position:absolute;inset:0}
</style>
