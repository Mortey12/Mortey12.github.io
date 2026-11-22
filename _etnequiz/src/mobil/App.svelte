<script>
  // Lagsida for eit bord: QR-koden på bordkortet opnar ho. Under quizen viser ho laget og barmenyen,
  // etter quizen plassen, poeng per kategori og kvart spørsmål med fasit og om laget hadde rett.
  import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
  import { doc, onSnapshot } from "firebase/firestore";
  import { auth, db } from "../lib/firebase.js";
  import { fmt } from "../lib/quiz.js";

  // Bord og kode frå QR-koden, eller frå sist gong
  const LS = "etne-mobil";
  let bord = "", kode = "";
  {
    const p = new URLSearchParams(location.search);
    if (p.get("b") && p.get("k")) { bord = p.get("b"); kode = p.get("k"); try { localStorage.setItem(LS, JSON.stringify({ bord, kode })); } catch (_) {} }
    else { try { const l = JSON.parse(localStorage.getItem(LS) || "null"); if (l) { bord = l.bord; kode = l.kode; } } catch (_) {} }
  }

  let status = $state(bord ? "lastar" : "utanKode"), feil = $state("");
  let no = $state({}), res = $state(null), resKlar = $state(false), opne = $state({});

  // Tek for lang tid utan svar frå databasen, seier vi frå i staden for å vente i det uendelege
  const vakt = setTimeout(() => { if (status === "lastar") { status = "feil"; feil = "Fekk ikkje kontakt med quizen. Sjekk at du er på nettet, og prøv igjen."; } }, 12000);

  onAuthStateChanged(auth, u => {
    if (!bord) return;
    if (!u) { signInAnonymously(auth).catch(e => { status = "feil"; feil = "Klarte ikkje kople til (" + (e.code || e.message) + ")."; }); return; }
    onSnapshot(doc(db, "etneLive", "no"), s => { no = s.exists() ? s.data() : {}; status = "inne"; clearTimeout(vakt); },
      e => { status = "feil"; feil = "Fekk ikkje lese quizen (" + (e.code || e.message) + ")."; clearTimeout(vakt); });
  });

  let unRes;
  $effect(() => {
    unRes?.(); res = null; resKlar = false;
    if (status !== "inne" || !no.resultat) return;
    unRes = onSnapshot(doc(db, "etneResultat", bord + "_" + kode), s => { res = s.exists() ? s.data() : null; resKlar = true; }, () => { res = null; resKlar = true; });
  });

  const IKON = { full: "✓", annet: "≈", halv: "½", eigen: "•", "": "✗" };
  const TEKST = { full: "Rett", annet: "Delvis rett", halv: "Halvt rett", eigen: "Delpoeng", "": "Feil" };
  const tittel = $derived(res?.tittel || no.tittel || "Etnequizen");
  const lagnamn = $derived(res?.namn || no.lagnamn?.[bord] || "");
  const barmeny = $derived(/^https?:\/\//i.test(no.barmeny || "") ? no.barmeny : "");
</script>

<main class="m">
  <header class="topp">
    <span class="merke">★ {tittel}</span>
    {#if bord}<span class="bord">Bord {bord}</span>{/if}
  </header>

  {#if status === "utanKode"}
    <section class="midt"><h1>Skann QR-koden på bordet</h1><p class="dempa">Bruk kameraet på mobilen. Koden står på bordkortet.</p></section>
  {:else if status === "lastar"}
    <section class="midt"><p class="dempa">Koplar til …</p></section>
  {:else if status === "feil"}
    <section class="midt"><h1>Noko gjekk gale</h1><p class="dempa">{feil}</p><button class="knapp" type="button" onclick={() => location.reload()}>Prøv igjen</button></section>
  {:else if !no.resultat}
    <section class="heim">
      <div class="lagkort">
        <span class="dempa">Bord {bord}</span>
        <h1>{lagnamn || "Velkommen!"}</h1>
        {#if !lagnamn}<p class="dempa">Lagnamnet dykkar kjem her når quizmasteren har skrive det inn.</p>{/if}
      </div>
      {#if barmeny}<a class="knapp gull" href={barmeny} target="_blank" rel="noopener">Sjå barmenyen</a>{/if}
      <div class="info">
        <h2>Resultatet kjem her</h2>
        <p class="dempa">Når quizen er ferdig, ser de plassen dykkar, poenga og kva de hadde rett på, rett på denne sida. Ha ho open, eller skann koden på bordet att.</p>
      </div>
      <p class="dempa liten tips">Tips: legg sida til på heimeskjermen, så finn de ho att med eitt trykk.</p>
    </section>
  {:else if !resKlar}
    <section class="midt"><p class="dempa">Hentar resultatet …</p></section>
  {:else if !res}
    <section class="midt"><h1>Fann ikkje resultatet</h1><p class="dempa">Det finst ikkje noko resultat for bord {bord} med denne koden. Kanskje bordet ikkje hadde lagnamn, eller kortet er gammalt. Spør quizmasteren.</p></section>
  {:else}
    <section class="stack">
      <h1>Takk for i kveld!</h1>
      <div class="plass"><b>{res.plass ? res.plass + "." : "–"}</b><div><span class="lag">{res.namn}</span><span class="dempa">{res.plass ? `plass av ${res.av}` : "ikkje med på tavla"} · {fmt(res.sum)} poeng</span></div></div>
      {#if res.joker}<p class="pille">★ Joker: {res.joker} (dobbel poeng)</p>{/if}

      <h2>Svara dykkar</h2>
      <p class="dempa liten">Trykk på ein kategori for å sjå fasiten og kva de hadde rett på.</p>
      <ul class="kat">
        {#each res.kat || [] as k, i}
          <li>
            <button class="krad" type="button" aria-expanded={!!opne[i]} onclick={() => opne[i] = !opne[i]}>
              <span class="kn">{k.namn}{k.joker ? " ★" : ""}</span>
              <span class="st"><i style="width:{k.maks && k.p != null ? Math.min(100, k.p / k.maks * 100) : 0}%" class:j={k.joker}></i></span>
              <b>{k.p == null ? "–" : fmt(k.p)}</b>
            </button>
            {#if opne[i]}
              <ol class="spm">
                {#each k.spm || [] as s, n}
                  <li class={s.m == null ? "" : s.m === "" ? "feil" : s.m === "full" ? "rett" : "delvis"}>
                    <span class="nr">{n + 1}</span>
                    <span class="sv">{s.svar || "–"}</span>
                    {#if s.m != null}<span class="dom" title={TEKST[s.m] || ""}>{IKON[s.m] ?? ""}{#if s.m && s.m !== "full"} <small>{fmt(s.p * (k.joker ? 2 : 1))}</small>{/if}</span>{/if}
                  </li>
                {/each}
              </ol>
              {#if (k.spm || []).every(s => s.m == null)}<p class="dempa liten">Denne runda vart retta for hand, så de ser fasiten, men ikkje kvart svar.</p>{/if}
            {/if}
          </li>
        {/each}
      </ul>
      <p class="dempa liten">✓ rett · ≈ delvis rett · ½ halvt rett · ✗ feil</p>
      {#if barmeny}<a class="knapp" href={barmeny} target="_blank" rel="noopener">Barmenyen</a>{/if}
    </section>
  {/if}
</main>

<style>
  .m{max-width:520px;margin:0 auto;min-height:100dvh;display:flex;flex-direction:column;gap:18px;
    padding:max(14px,env(safe-area-inset-top,0px)) max(16px,env(safe-area-inset-right,0px)) max(24px,env(safe-area-inset-bottom,0px)) max(16px,env(safe-area-inset-left,0px))}
  .topp{display:flex;justify-content:space-between;align-items:center;font-weight:700;gap:10px}
  .merke{color:var(--gull);letter-spacing:.06em;font-size:15px}
  .bord{background:var(--gran-3);border-radius:999px;padding:3px 12px;font-size:14px;white-space:nowrap}
  h1{font-family:var(--f-tittel);font-size:32px;line-height:1.1;margin:0;text-wrap:balance}
  h2{font-family:var(--f-tittel);font-size:21px;margin:8px 0 0}
  .midt{flex:1;display:flex;flex-direction:column;justify-content:center;gap:14px;text-align:center;align-items:center;padding-bottom:12vh}
  .stack{display:flex;flex-direction:column;gap:12px}
  .dempa{color:var(--dempa);margin:0}
  .liten{font-size:14px}
  .heim{display:flex;flex-direction:column;gap:14px;flex:1}
  .lagkort{background:var(--gran-2);border:2px solid var(--gull);border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:6px}
  .lagkort h1{font-size:34px}
  .info{background:var(--gran-2);border:1px solid var(--gran-3);border-radius:16px;padding:14px 16px;display:flex;flex-direction:column;gap:6px}
  .info h2{margin:0;font-size:19px}
  .tips{margin-top:auto;text-align:center}
  a.knapp{display:flex;align-items:center;justify-content:center;text-decoration:none;color:inherit}
  .knapp.gull{background:var(--gull);color:var(--gran)}
  .knapp{border:0;border-radius:16px;min-height:56px;padding:12px 20px;font-weight:700;font-size:18px;background:var(--gran-3);cursor:pointer;width:100%}
  .pille{display:inline-block;align-self:flex-start;margin:0;background:var(--gran-2);border:1px solid var(--gull);border-radius:999px;padding:6px 14px;font-weight:700;font-size:15px}
  .plass{display:flex;align-items:center;gap:16px;background:var(--gran-2);border:2px solid var(--gull);border-radius:20px;padding:16px}
  .plass > b{font-family:var(--f-tittel);font-size:64px;line-height:1;color:var(--gull)}
  .plass .lag{display:block;font-weight:700;font-size:22px}
  .kat{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
  .krad{width:100%;display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr) 44px;gap:10px;align-items:center;font-size:16px;text-align:left;
    background:var(--gran-2);border:1px solid var(--gran-3);border-radius:14px;padding:12px 14px;min-height:52px;cursor:pointer}
  .krad[aria-expanded="true"]{border-color:var(--gull)}
  .kn{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600}
  .st{height:10px;border-radius:5px;background:var(--gran-3);overflow:hidden}
  .st i{display:block;height:100%;background:#7FB3A8;border-radius:5px}.st i.j{background:var(--gull)}
  .krad b{text-align:right;font-variant-numeric:tabular-nums}
  .spm{list-style:none;margin:6px 0 4px;padding:0 4px;display:flex;flex-direction:column;gap:4px}
  .spm li{display:grid;grid-template-columns:24px minmax(0,1fr) auto;gap:10px;align-items:baseline;font-size:16px;padding:6px 8px;border-radius:10px}
  .spm .nr{color:var(--dempa);font-variant-numeric:tabular-nums}
  .spm .sv{overflow-wrap:anywhere}
  .spm .dom{font-weight:700;white-space:nowrap}
  .spm .dom small{font-weight:500;color:var(--dempa)}
  .spm .rett{background:rgba(127,209,165,.12)}.spm .rett .dom{color:var(--ok)}
  .spm .delvis{background:rgba(232,184,74,.12)}.spm .delvis .dom{color:var(--gull)}
  .spm .feil .dom{color:var(--feil)}
</style>
