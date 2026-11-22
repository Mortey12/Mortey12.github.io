<script>
  // Bordkort til utskrift: eitt kort per bord med QR-kode til mobilsida. Kvar kode er hemmeleg for bordet.
  import QRCode from "qrcode";
  import { live } from "../lib/data.svelte.js";
  import { db, feiltekst, hentBilete } from "../lib/firebase.js";
  import { doc, writeBatch } from "firebase/firestore";
  import { melding } from "./red.svelte.js";
  import { lenkje } from "../lib/quiz.js";
  let { lag, lukk } = $props();

  const TEIKN = "abcdefghjkmnpqrstuvwxyz23456789";
  const nyKode = () => Array.from(crypto.getRandomValues(new Uint8Array(8)), x => TEIKN[x % TEIKN.length]).join("");
  const url = (bord, kode) => new URL(`mobil.html?b=${encodeURIComponent(bord)}&k=${kode}`, location.href).href;

  let svg = $state({}), arbeider = $state(false), armert = $state(false), kodeFeil = $state("");
  // Kvart bord får berre eitt forsøk av seg sjølv. Går det gale, viser vi feilen i staden for å prøve om og om igjen.
  const forsokt = new Set();

  async function lagKodar(alle = false){
    const nye = {};
    for (const t of lag) if (alle || !live.kodar[t.id]) nye[t.id] = nyKode();
    if (!Object.keys(nye).length) return;
    arbeider = true;
    const b = writeBatch(db);
    for (const [id, kode] of Object.entries(nye)) b.set(doc(db, "etneKode", id), { kode });
    try {
      await b.commit();
      live.kodar = { ...live.kodar, ...nye }; kodeFeil = "";
      if (alle) melding("Nye kodar er laga. Skriv ut korta på nytt; dei gamle viser ikkje resultatet lenger.");
    } catch (e) { kodeFeil = feiltekst(e); melding("Kodane vart ikkje lagra: " + kodeFeil, true); }
    arbeider = false;
  }
  $effect(() => {
    const mangel = lag.filter(t => !live.kodar[t.id] && !forsokt.has(t.id));
    if (!mangel.length || arbeider) return;
    mangel.forEach(t => forsokt.add(t.id));
    lagKodar();
  });
  const provIgjen = () => { forsokt.clear(); kodeFeil = ""; lagKodar(); };

  $effect(() => {
    for (const t of lag) {
      const k = live.kodar[t.id]; if (!k) continue;
      const u = url(t.id, k);
      if (svg[t.id]?.u === u) continue;
      QRCode.toString(u, { type: "svg", margin: 0, errorCorrectionLevel: "M", color: { dark: "#0F2E24", light: "#FFFFFF" } })
        .then(s => { svg[t.id] = { u, s }; });
    }
  });
  const skrivUt = () => window.print();
  // Ekstra QR-kode til barmenyen, same på alle korta
  let barSvg = $state("");
  $effect(() => {
    const u = lenkje(live.quiz?.barmeny); if (!u) { barSvg = ""; return; }
    QRCode.toString(u, { type: "svg", margin: 0, errorCorrectionLevel: "M", color: { dark: "#0F2E24", light: "#FFFFFF" } }).then(s => barSvg = s);
  });
  const q = $derived(live.quiz || {});

  // Rebusen kan stå på same arket som bordkortet: kortet øvst, rebusen nedst, eitt A4 per bord
  const kategoriar = $derived(q.kategoriar || []);
  // Første gongen blir ein kategori med «rebus» i namnet vald av seg sjølv. Vel du «Ingen», blir det ståande.
  const lagra = (() => { try { return localStorage.getItem("etne-rebuskat"); } catch (_) { return null; } })();
  let rebusKat = $state(lagra || "");
  if (lagra === null) { const r = (live.quiz?.kategoriar || []).find(k => /rebus/i.test(k.namn || "")); if (r) rebusKat = r.id; }
  $effect(() => { try { localStorage.setItem("etne-rebuskat", rebusKat); } catch (_) {} });
  const rebusK = $derived(kategoriar.find(k => k.id === rebusKat));
  const rebus = $derived(rebusK ? (q.plan || []).filter(it => it.type === "sporsmal" && it.kat === rebusKat) : []);
  let bilete = $state({});
  $effect(() => { for (const it of rebus) if (it.bilete && !(it.bilete in bilete)) { bilete[it.bilete] = null; hentBilete(it.bilete).then(d => bilete[it.bilete] = d); } });
  // Rebusar utan spørsmål i køyreplanen (berre på papir) får seks tomme svarliner
  const rebusRuter = $derived(rebus.length ? rebus : Array.from({ length: 6 }, () => ({})));
  const kolonnar = $derived(rebusRuter.length <= 6 ? 3 : 4);
</script>

<svelte:window onkeydown={e => { if (e.key === "Escape") lukk(); }} />

<div class="bk-lag" role="dialog" aria-modal="true" aria-label="Bordkort">
  <div class="bk-verkty">
    <h2>Bordkort ({lag.length})</h2>
    <label class="rad"><span class="dempa">Rebus på arket:</span>
      <select class="inp" style="width:auto" bind:value={rebusKat}><option value="">Ingen</option>{#each kategoriar as k}<option value={k.id}>{k.namn}</option>{/each}</select>
    </label>
    <span class="dempa">{rebusK ? "Eitt A4 per bord: kortet øvst, rebusen nedst." : "To kort per A4-ark. Klipp på midten, eller legg dei flate på borda."}</span>
    <span style="flex:1"></span>
    <button class="btn" type="button" onclick={() => armert ? (armert = false, lagKodar(true)) : (armert = true, setTimeout(() => armert = false, 3000))}>{armert ? "Trykk igjen: gamle kort sluttar å verke" : "Lag nye kodar"}</button>
    <button class="btn primary" type="button" onclick={skrivUt}>Skriv ut</button>
    <button class="btn" type="button" onclick={lukk}>Lukk</button>
  </div>
  {#if kodeFeil}<p class="bk-tips feil">QR-kodane vart ikkje lagra: {kodeFeil}. Sjekk at Firestore-reglane for etneKode er publiserte. <button class="btn liten" type="button" onclick={provIgjen} disabled={arbeider}>Prøv igjen</button></p>{/if}
  {#if !q.wifi}<p class="bk-tips">Tips: skriv inn Wi-Fi-namn og passord under «Oppsett», så kjem dei på korta.</p>{/if}

  <div class="bk-ark">
    {#each lag as t (t.id)}
      <div class="bk-side" class:medrebus={!!rebusK}>
      <article class="bk-kort">
        <header><span class="m">★ {q.undertittel || "Etnequizen"}</span><span>{q.tittel || ""}</span></header>
        <div class="bk-midt">
          <div class="bk-venstre">
            <div class="bk-bord"><span>Bord</span><b>{t.bord ?? t.id}</b></div>
            <p class="stor">Skann for lagsida dykkar</p>
            <p>Barmenyen no, og plassen, poenga og kva de hadde rett på etter quizen. Skriv «Bord {t.bord ?? t.id}» og jokeren på svararket.</p>
          </div>
          <div class="bk-qr">{#if svg[t.id]}{@html svg[t.id].s}{:else}<span class="dempa">{kodeFeil ? "Ingen kode" : "Lagar kode …"}</span>{/if}</div>
        </div>
        {#if barSvg || q.wifi}
          <div class="bk-botn">
            {#if barSvg}<div class="bar"><div class="barqr">{@html barSvg}</div><p><b>Barmenyen</b><br>Skann for å sjå kva baren har</p></div>{/if}
            {#if q.wifi}<p class="wifi">Wi-Fi: <b>{q.wifi}</b>{#if q.wifiPassord}<br>Passord: <b>{q.wifiPassord}</b>{/if}</p>{/if}
          </div>
        {/if}
      </article>
      {#if rebusK}
        <section class="bk-rebus">
          <header><span class="rt">{rebusK.namn}</span><span>Bord {t.bord ?? t.id} · Lag: ______________________</span></header>
          <ol class="ruter" style="grid-template-columns:repeat({kolonnar},1fr)" class:mange={kolonnar > 3}>
            {#each rebusRuter as it, i}
              <li>
                <span class="rn">{i + 1}</span>
                <div class="rinn">
                  {#if it.bilete && bilete[it.bilete]}<img src={bilete[it.bilete]} alt="Rebus {i + 1}">
                  {:else if it.tekst}<p>{it.tekst}</p>{/if}
                </div>
                <span class="linje"></span>
              </li>
            {/each}
          </ol>
        </section>
      {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .bk-lag{position:fixed;inset:0;z-index:50;background:#E9E4D8;overflow:auto;padding:16px max(16px,env(safe-area-inset-left,0px)) 40px}
  .bk-verkty{display:flex;flex-wrap:wrap;align-items:center;gap:10px;max-width:900px;margin:0 auto 12px;position:sticky;top:0;background:#E9E4D8;padding:8px 0;z-index:2}
  .bk-tips.feil{background:#FDECEC;color:#8E1F26;display:flex;flex-wrap:wrap;align-items:center;gap:8px}
  .bk-tips{max-width:900px;margin:0 auto 12px;font-size:14px;background:#FFF4D6;border-radius:8px;padding:8px 12px}
  .bk-ark{display:flex;flex-direction:column;align-items:center;gap:16px}
  .bk-kort{width:min(190mm,100%);height:128mm;background:#fff;color:#0F2E24;border-radius:6px;box-shadow:0 4px 14px rgba(0,0,0,.12);padding:9mm 11mm;box-sizing:border-box;display:flex;flex-direction:column;gap:5mm;border-top:5mm solid #C8323A;font-family:var(--f-tekst)}
  header{display:flex;justify-content:space-between;font-weight:700;font-size:12pt}
  header .m{color:#9A6B0E;letter-spacing:.12em;text-transform:uppercase}
  .bk-midt{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:8mm}
  .bk-venstre{display:flex;flex-direction:column;gap:2mm;min-width:0}
  .bk-venstre p{margin:0;font-size:10.5pt;line-height:1.35}
  .bk-venstre .stor{font-size:14pt;font-weight:700;margin-top:2mm}
  .bk-bord{display:flex;flex-direction:column;line-height:.9}
  .bk-bord span{font-size:18pt;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#C8323A}
  .bk-bord b{font-family:var(--f-tittel);font-size:96pt;font-weight:700}
  .bk-qr{width:56mm;height:56mm;display:grid;place-items:center}
  .bk-qr :global(svg){width:100%;height:100%}
  .bk-botn{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:6mm;border-top:1px solid #E3DCCB;padding-top:3mm}
  .bar{display:flex;align-items:center;gap:4mm}
  .barqr{width:20mm;height:20mm;flex:none}
  .barqr :global(svg){width:100%;height:100%}
  .bar p{margin:0;font-size:10pt;line-height:1.3}
  .wifi{margin:0;font-size:10pt;line-height:1.4;background:#F5F1E8;border-radius:4px;padding:1.5mm 3mm}
  .bk-side{display:flex;flex-direction:column;align-items:center;gap:6px;width:100%}
  .bk-rebus{width:min(190mm,100%);background:#fff;color:#0F2E24;border-radius:6px;box-shadow:0 4px 14px rgba(0,0,0,.12);padding:7mm 9mm;box-sizing:border-box;font-family:var(--f-tekst);display:flex;flex-direction:column;gap:4mm}
  .bk-rebus header{font-size:11pt;font-weight:600}
  .bk-rebus .rt{font-family:var(--f-tittel);font-size:18pt;font-weight:700;color:#C8323A}
  .bk-rebus header{align-items:baseline}
  .ruter{list-style:none;margin:0;padding:0;display:grid;gap:4mm}
  .ruter li{border:1px solid #E3DCCB;border-radius:4px;padding:2mm 3mm 3mm;display:flex;flex-direction:column;gap:2mm;min-height:52mm;position:relative}
  .ruter.mange li{min-height:40mm}
  .rn{font-weight:700;font-size:12pt;color:#9A6B0E}
  .rinn{flex:1;display:grid;place-items:center;min-height:0}
  .rinn img{max-width:100%;max-height:34mm;object-fit:contain}
  .ruter.mange .rinn img{max-height:24mm}
  .rinn p{margin:0;font-size:11pt;text-align:center;line-height:1.3}
  .linje{border-bottom:1px solid #0F2E24;height:7mm}
  @media (max-width:600px){.bk-kort{height:auto}.bk-midt{grid-template-columns:1fr}.bk-bord b{font-size:72pt}.bk-qr{width:50mm;height:50mm}.bk-botn{flex-wrap:wrap}}
  @media print{
    :global(header.band), :global(main > :not(.bk-lag)){display:none!important}
    :global(main){padding:0!important;max-width:none!important}
    .bk-lag{position:static;background:#fff;padding:0;overflow:visible}
    .bk-verkty,.bk-tips{display:none}
    .bk-ark{display:block}
    .bk-kort{width:190mm;height:136mm;margin:0 auto 6mm;box-shadow:none;border:1px dashed #bbb;border-top:5mm solid #C8323A;break-inside:avoid;page-break-inside:avoid}
    .bk-side{display:block}
    .bk-side:not(.medrebus):nth-child(2n){break-after:page;page-break-after:always}
    .bk-side.medrebus{break-after:page;page-break-after:always}
    .bk-rebus{width:190mm;margin:0 auto;box-shadow:none;border:1px solid #ddd;break-inside:avoid;page-break-inside:avoid}
    @page{size:A4 portrait;margin:8mm}
  }
</style>
