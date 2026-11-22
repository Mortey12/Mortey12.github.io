<script>
  // Bordkort til utskrift: eitt kort per bord med QR-kode til mobilsida. Kvar kode er hemmeleg for bordet.
  import QRCode from "qrcode";
  import { live } from "../lib/data.svelte.js";
  import { db, feiltekst } from "../lib/firebase.js";
  import { doc, writeBatch } from "firebase/firestore";
  import { melding } from "./red.svelte.js";
  import { lenkje } from "../lib/quiz.js";
  let { lag, lukk } = $props();

  const TEIKN = "abcdefghjkmnpqrstuvwxyz23456789";
  const nyKode = () => Array.from(crypto.getRandomValues(new Uint8Array(8)), x => TEIKN[x % TEIKN.length]).join("");
  const url = (bord, kode) => new URL(`mobil.html?b=${encodeURIComponent(bord)}&k=${kode}`, location.href).href;

  let svg = $state({}), arbeider = $state(false), armert = $state(false);

  async function lagKodar(alle = false){
    arbeider = true;
    const b = writeBatch(db); let n = 0;
    for (const t of lag) if (alle || !live.kodar[t.id]) { b.set(doc(db, "etneKode", t.id), { kode: nyKode() }); n++; }
    try { if (n) await b.commit(); if (alle) melding("Nye kodar er laga. Skriv ut korta på nytt; dei gamle viser ikkje resultatet lenger."); }
    catch (e) { melding("Kodane vart ikkje lagra: " + feiltekst(e), true); }
    arbeider = false;
  }
  $effect(() => { if (lag.some(t => !live.kodar[t.id]) && !arbeider) lagKodar(); });

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
</script>

<svelte:window onkeydown={e => { if (e.key === "Escape") lukk(); }} />

<div class="bk-lag" role="dialog" aria-modal="true" aria-label="Bordkort">
  <div class="bk-verkty">
    <h2>Bordkort ({lag.length})</h2>
    <span class="dempa">To kort per A4-ark. Klipp på midten og brett, eller legg dei flate på borda.</span>
    <span style="flex:1"></span>
    <button class="btn" type="button" onclick={() => armert ? (armert = false, lagKodar(true)) : (armert = true, setTimeout(() => armert = false, 3000))}>{armert ? "Trykk igjen: gamle kort sluttar å verke" : "Lag nye kodar"}</button>
    <button class="btn primary" type="button" onclick={skrivUt}>Skriv ut</button>
    <button class="btn" type="button" onclick={lukk}>Lukk</button>
  </div>
  {#if !q.wifi}<p class="bk-tips">Tips: skriv inn Wi-Fi-namn og passord under «Oppsett», så kjem dei på korta.</p>{/if}

  <div class="bk-ark">
    {#each lag as t (t.id)}
      <article class="bk-kort">
        <header><span class="m">★ {q.undertittel || "Etnequizen"}</span><span>{q.tittel || ""}</span></header>
        <div class="bk-midt">
          <div class="bk-venstre">
            <div class="bk-bord"><span>Bord</span><b>{t.bord ?? t.id}</b></div>
            <p class="stor">Skann for lagsida dykkar</p>
            <p>Barmenyen no, og plassen, poenga og kva de hadde rett på etter quizen. Skriv «Bord {t.bord ?? t.id}» og jokeren på svararket.</p>
          </div>
          <div class="bk-qr">{#if svg[t.id]}{@html svg[t.id].s}{:else}<span class="dempa">Lagar kode …</span>{/if}</div>
        </div>
        {#if barSvg || q.wifi}
          <div class="bk-botn">
            {#if barSvg}<div class="bar"><div class="barqr">{@html barSvg}</div><p><b>Barmenyen</b><br>Skann for å sjå kva baren har</p></div>{/if}
            {#if q.wifi}<p class="wifi">Wi-Fi: <b>{q.wifi}</b>{#if q.wifiPassord}<br>Passord: <b>{q.wifiPassord}</b>{/if}</p>{/if}
          </div>
        {/if}
      </article>
    {/each}
  </div>
</div>

<style>
  .bk-lag{position:fixed;inset:0;z-index:50;background:#E9E4D8;overflow:auto;padding:16px max(16px,env(safe-area-inset-left,0px)) 40px}
  .bk-verkty{display:flex;flex-wrap:wrap;align-items:center;gap:10px;max-width:900px;margin:0 auto 12px;position:sticky;top:0;background:#E9E4D8;padding:8px 0;z-index:2}
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
  @media (max-width:600px){.bk-kort{height:auto}.bk-midt{grid-template-columns:1fr}.bk-bord b{font-size:72pt}.bk-qr{width:50mm;height:50mm}.bk-botn{flex-wrap:wrap}}
  @media print{
    :global(header.band), :global(main > :not(.bk-lag)){display:none!important}
    :global(main){padding:0!important;max-width:none!important}
    .bk-lag{position:static;background:#fff;padding:0;overflow:visible}
    .bk-verkty,.bk-tips{display:none}
    .bk-ark{display:block}
    .bk-kort{width:190mm;height:136mm;margin:0 auto 6mm;box-shadow:none;border:1px dashed #bbb;border-top:5mm solid #C8323A;break-inside:avoid;page-break-inside:avoid}
    .bk-kort:nth-child(2n){break-after:page;page-break-after:always}
    @page{size:A4 portrait;margin:8mm}
  }
</style>
