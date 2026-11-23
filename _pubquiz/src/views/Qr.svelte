<script>
  import QRCode from "qrcode";
  import { openWeek } from "../lib/store.svelte.js";

  // Same link every week: it always shows whichever quiz night has sign-up open
  const url = location.origin + location.pathname + location.search + "#/join";
  let svg = $state("");
  QRCode.toString(url, { type: "svg", margin: 1, errorCorrectionLevel: "M" }).then(s => (svg = s));
  let week = $derived(openWeek());
</script>

<div class="qr">
  <h1>Sign up your team</h1>
  <p>Scan with your phone camera</p>
  <div class="code">{@html svg}</div>
  <p class="url">{url.replace(/^https?:\/\//, "")}</p>
  <p class="noprint small muted">
    This code never changes, so you can print it once and reuse it.
    {#if week}Sign-up is <strong class="ok">open</strong> for {week.date}.{:else}Sign-up is <strong class="err">closed</strong>. Open it from the score entry page.{/if}
    <button onclick={() => print()}>Print</button>
  </p>
</div>

<style>
  .qr { text-align: center; max-width: 560px; margin: 0 auto; }
  h1 { font-size: 2rem; }
  .code { background: #fff; padding: 16px; border-radius: 12px; display: inline-block; width: min(420px, 90vw); }
  .code :global(svg) { display: block; width: 100%; height: auto; }
  .url { font-family: ui-monospace, monospace; word-break: break-all; }
  @media print {
    :global(header) { display: none !important; }
    .noprint { display: none; }
    h1 { font-size: 2.6rem; }
  }
</style>
