<script>
  // Teiknar det som skal vere på storskjermen: eitt punkt i køyreplanen, pause, poengtavle eller avsløring.
  import { katInfo, nummerer, rangering, fasitFor, fmt, medKat, niva } from "./quiz.js";
  import { hentBilete } from "./firebase.js";
  // fasit: punktet i køyreplanen som er vist som fasit (modus «fasit»). telKat: berre desse rundane tel på poengtavla.
  // spenning: avsløringa viser «Plass 7 …» før namnet.
  // fasitKat: vis berre desse rundane av fasiten (t.d. berre runde 2 av «Fasit · 2 og 3»)
  let { quiz, steg = 0, modus = "plan", lag = [], avslort = 0, sist = 0, spenning = false, fasit = null, fasitKat = null, telKat = null } = $props();

  const plan = $derived(nummerer(quiz));
  const kats = $derived(katInfo(quiz));
  const it = $derived(modus === "fasit" ? plan[fasit] : plan[steg]);
  const visTavle = $derived(modus === "poengtavle" || modus === "avsloring" || (modus === "plan" && it?.type === "poengtavle"));
  const avsl = $derived(modus === "avsloring");
  // Poengtavla undervegs tel berre rundane med vist fasit; sluttavsløringa tel alt
  const delvis = $derived(!avsl && Array.isArray(telKat));
  const rangert = $derived(visTavle ? rangering(lag, avsl ? quiz : medKat(quiz, telKat)) : []);
  const etterTekst = $derived.by(() => {
    if (!delvis) return "";
    const c = (quiz?.kategoriar || []).filter(k => telKat.includes(k.id)).map(k => kats.get(k.id)?.nr || k.namn);
    return c.length ? "Etter runde " + (c.length > 1 ? c.slice(0, -1).join(", ") + " og " + c[c.length - 1] : c[0]) : "";
  });

  let bilete = $state(null);
  $effect(() => { const id = it?.bilete; bilete = null; if (id) hentBilete(id).then(d => { if (it?.bilete === id) bilete = d; }); });

  const k = $derived(it?.kat && !Array.isArray(it.kat) ? kats.get(it.kat) : null);
  const tekstKlasse = $derived(((it?.tekst || "").length > 210) ? "svaert" : ((it?.tekst || "").length > 130 ? "lang" : ""));
  const kategoriInfo = $derived.by(() => {
    if (it?.type !== "kategori") return "";
    const n = plan.filter(x => x.type === "sporsmal" && x.kat === it.kat && x.nummerert !== false).length;
    return [n ? `${n} spørsmål` : "", k?.maks ? `opptil ${fmt(k.maks)} poeng` : ""].filter(Boolean).join(" · ");
  });
  const fasitIds = $derived.by(() => {
    if (it?.type !== "fasit") return [];
    const rek = (quiz?.kategoriar || []).map(c => c.id), pos = id => { const i = rek.indexOf(id); return i < 0 ? 999 : i; };
    const alle = [...(Array.isArray(it.kat) ? it.kat : [it.kat])].filter(Boolean);
    const val = Array.isArray(fasitKat) && fasitKat.length ? alle.filter(id => fasitKat.includes(id)) : alle;
    return val.sort((a, b) => pos(a) - pos(b));
  });
  // Same tekststorleik i alle kolonnane på ein fasit
  const fasitTittel = $derived.by(() => {
    const c = fasitIds.map(id => kats.get(id)).filter(Boolean);
    if (c.length > 1 && c.every(x => x.nr)) return "Kategori " + c.map(x => x.nr).sort((a, b) => a - b).join(" og ");
    return c.map(x => x.namn).join(" og ") || "Fasit";
  });
  // Reknar ut om svara får plass i stor skrift: tel kor mange linjer den lengste kolonnen treng
  const fasitTett = $derived.by(() => {
    const perLinje = [0, 70, 34, 21][Math.min(fasitIds.length, 3)] || 21;
    return fasitIds.some(id => fasitFor(quiz, plan, id).reduce((n, s) => n + Math.max(1, Math.ceil((s || "").length / perLinje)), 0) > 11);
  });

  // tavle og avsløring
  const n = $derived(rangert.length);
  const cols = $derived(n <= 12 ? 2 : n <= 30 ? 3 : n <= 40 ? 4 : 5);
  const rows = $derived(Math.max(1, Math.ceil(n / cols)));
  const vist = $derived(avsl ? Math.min(avslort, n) : n);
  const overskrift = $derived.by(() => {
    if (!avsl) return delvis ? "Stillinga" : "Poengtavle";
    if (vist === 0 && !spenning) return "Sluttresultat";
    if (vist >= n) return "Vinnaren!";
    if (spenning) return `Plass ${rangert[n - vist - 1].rank}`;
    const a = rangert[n - vist].rank, b = rangert[n - Math.max(sist, 0) - 1]?.rank;
    return vist - sist > 1 && b !== a ? `Plass ${a} til ${b}` : `Plass ${a}`;
  });
  // Frå plass 15 får kvar plass eit eige kort over tavla. spenning: plassen og poenga, men ikkje namnet enno.
  const kort = $derived.by(() => {
    if (!avsl || !n) return null;
    if (spenning) { const t = rangert[n - vist - 1]; return t ? { t, skjul: true, niva: niva(t.rank) } : null; }
    if (vist - sist !== 1 || vist > n) return null;
    const t = rangert[n - vist];
    return t && t.rank <= 15 ? { t, skjul: false, niva: niva(t.rank) } : null;
  });
  const vinnarar = $derived(rangert.filter(t => t.rank === 1));
  // Konfetti: faste tilfeldige posisjonar så han ikkje hoppar når skjermen teiknar på nytt
  const konfetti = Array.from({ length: 70 }, (_, i) => ({ x: (i * 37) % 100, d: (i * 53) % 30 / 10, s: 4 + (i * 13) % 5, f: ["#E8B84A", "#C8323A", "#F7F1E3", "#2E7D5B", "#F4D27A"][i % 5], r: (i * 47) % 360 }));
</script>

<div class="slide-host">
{#if modus === "pause"}
  <div class="slide s-mid s-tittel"><span class="over">{quiz.undertittel || "Etnequizen"}</span><h1 class="stor">{quiz.pausetekst || "Pause"}</h1><span class="under">{quiz.tittel}</span></div>
{:else if visTavle}
  {#if !n}
    <div class="slide s-mid"><h1 class="stor" style="font-size:120px">Poengtavle</h1><span class="under">Ingen lag med poeng enno</span></div>
  {:else if delvis && !telKat.length}
    <div class="slide s-mid"><h1 class="stor" style="font-size:120px">Stillinga</h1><span class="under">Kjem når fasiten for første runde er vist</span></div>
  {:else}
    <div class="slide" style="gap:20px">
      <div class="top"><h1 class="stor" style="font-size:60px">{overskrift}</h1><span class="meta">{etterTekst ? etterTekst + " · " : ""}{avsl && vist < n ? `${n - vist} plassar att` : `${n} lag`}{quiz.premietekst ? " · " + quiz.premietekst : ""}</span></div>
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
    {#if kort && kort.niva === "vinnar" && !kort.skjul}
      <div class="vinnar stor-vinnar">
        <div class="konfetti loop" aria-hidden="true">{#each konfetti as c}<i style="left:{c.x}%;animation-delay:{c.d}s;width:{c.s * 3}px;height:{c.s * 5}px;background:{c.f};transform:rotate({c.r}deg)"></i>{/each}</div>
        <span class="o">{vinnarar.length > 1 ? "Delt vinnar av" : "Vinnar av"} {quiz.tittel || "quizen"}</span>
        <span class="lag">{vinnarar.map(t => t.namn).join(" og ")}</span>
        <span class="p">{fmt(rangert[0].sum)} poeng</span>
      </div>
    {:else if kort}
      {#key kort.t.id + kort.skjul}
        <div class="spot {kort.niva}" class:spenning={kort.skjul}>
          {#if kort.niva === "pall" && !kort.skjul}<div class="konfetti" aria-hidden="true">{#each konfetti.slice(0, 40) as c}<i style="left:{c.x}%;animation-delay:{c.d / 3}s;width:{c.s * 3}px;height:{c.s * 5}px;background:{c.f};transform:rotate({c.r}deg)"></i>{/each}</div>{/if}
          <div class="spot-kort">
            <span class="spot-plass">{kort.t.rank === 2 ? "🥈 " : kort.t.rank === 3 ? "🥉 " : ""}Plass {kort.t.rank}</span>
            {#if kort.skjul}<span class="spot-namn dots-venting"><i></i><i></i><i></i></span>
            {:else}<span class="spot-namn">{kort.t.namn}</span>{/if}
            <span class="spot-poeng">{fmt(kort.t.sum)} poeng</span>
          </div>
        </div>
      {/key}
    {:else if avsl && vist >= n}
      <div class="vinnar"><span class="o">{vinnarar.length > 1 ? "Delt vinnar av" : "Vinnar av"} {quiz.tittel || "quizen"}</span><span class="lag">{vinnarar.map(t => t.namn).join(" og ")}</span><span class="p">{fmt(rangert[0].sum)} poeng</span></div>
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
    {#if kategoriInfo}<span class="under" style="white-space:pre-line">{kategoriInfo}</span>{/if}
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
      <div style="display:flex;align-items:center;gap:16px"><span class="pill gull">Fasit</span><span class="katnamn">{fasitTittel}</span></div>
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
