<script>
  // Mobilen til eit lag: koplast til bordet med QR-koden, vel joker, svarar i hurtigrundane og får resultatet til slutt.
  import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
  import { doc, getDoc, setDoc, updateDoc, onSnapshot, serverTimestamp } from "firebase/firestore";
  import { auth, db } from "../lib/firebase.js";
  import { klokke, slutt } from "../lib/klokke.svelte.js";
  import { BOKSTAV, ms, sek } from "../lib/hurtig.js";
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
  let uid = "";
  let me = $state(null), no = $state({}), mittSvar = $state(null), res = $state(null);
  let namn = $state(""), joker = $state(""), sender = $state(false), friTekst = $state(""), valt = $state(null);

  onAuthStateChanged(auth, u => {
    if (!bord) return;
    if (!u) { signInAnonymously(auth).catch(e => { status = "feil"; feil = "Klarte ikkje kople til. Er du på nettet?"; }); return; }
    uid = u.uid; start();
  });

  let unNo, unMe, unSvar, unRes;
  async function start(){
    unNo?.(); unNo = onSnapshot(doc(db, "etneLive", "no"), s => { no = s.exists() ? s.data() : {}; }, () => {});
    try {
      const d = await getDoc(doc(db, "etneMobil", bord));
      if (d.exists() && d.data().uid === uid) inne(); else status = "bli";
    } catch (e) { status = e.code === "permission-denied" ? "opptatt" : "feil"; if (status === "feil") feil = "Fekk ikkje kontakt med quizen."; }
  }
  function inne(){
    status = "inne";
    unMe?.(); unMe = onSnapshot(doc(db, "etneMobil", bord), s => {
      if (!s.exists()) { status = "frigjort"; me = null; return; }
      me = s.data(); if (!namnFokus) namn = me.namn || "";
    }, () => {});
  }

  async function bliMed(e){
    e.preventDefault(); if (!namn.trim()) return; sender = true; feil = "";
    try {
      await setDoc(doc(db, "etneMobil", bord), { uid, kode, namn: namn.trim().slice(0, 40), joker: no.jokerLaast ? "" : joker, t: serverTimestamp() });
      inne();
    } catch (err) {
      try { const d = await getDoc(doc(db, "etneMobil", bord)); status = d.exists() ? "opptatt" : "feilKode"; }
      catch (_) { status = "opptatt"; }
    }
    sender = false;
  }

  // Svaret til dette bordet på spørsmålet som er ope no
  let sistId = "";
  $effect(() => {
    const id = no.id;
    if (id === sistId) return; sistId = id || "";
    unSvar?.(); mittSvar = null; valt = null; friTekst = "";
    if (!id || status !== "inne") return;
    if (no.open) navigator.vibrate?.([120, 60, 120]);
    unSvar = onSnapshot(doc(db, "etneSvar", id + "_" + bord), s => { mittSvar = s.exists() ? s.data() : null; }, () => {});
  });
  $effect(() => {
    unRes?.(); res = null;
    if (no.resultat && status === "inne") unRes = onSnapshot(doc(db, "etneResultat", bord), s => { res = s.exists() ? s.data() : null; }, () => {});
  });

  const fristen = $derived(no.id ? slutt(no, ms) : 0);
  const att = $derived(no.id && no.open ? Math.max(0, Math.ceil((fristen - klokke.no) / 1000)) : 0);
  const open = $derived(!!no.id && no.open && att > 0);

  async function svar(v){
    if (sender || mittSvar || !open) return;
    sender = true; valt = v; feil = "";
    try { await setDoc(doc(db, "etneSvar", no.id + "_" + bord), { live: no.id, bord, uid, svar: String(v).slice(0, 80), t: serverTimestamp() }); }
    catch (_) { feil = open ? "Svaret kom ikkje fram. Prøv igjen." : "Tida var ute før svaret kom fram."; valt = null; }
    sender = false;
  }

  let namnFokus = false, namnTimer;
  function endraNamn(){ clearTimeout(namnTimer); namnTimer = setTimeout(() => { if (namn.trim()) updateDoc(doc(db, "etneMobil", bord), { namn: namn.trim().slice(0, 40) }).catch(() => {}); }, 700); }
  const veljJoker = id => { if (!no.jokerLaast) updateDoc(doc(db, "etneMobil", bord), { joker: me?.joker === id ? "" : id }).catch(() => { feil = "Jokeren er låst no."; }); };
  const jokerNamn = $derived((no.kategoriar || []).find(k => k.id === me?.joker)?.namn || "");
  const visSvar = s => no.form === "alternativ" ? `${BOKSTAV[s] ?? ""}: ${(no.alternativ || [])[s] ?? ""}` : s;
  const brukt = $derived(mittSvar && no.opna ? sek(ms(mittSvar.t) - ms(no.opna)) : "");
  const beste = $derived(res ? [...(res.kat || [])].sort((a, b) => (b.maks ? b.p / b.maks : 0) - (a.maks ? a.p / a.maks : 0))[0] : null);
</script>

<main class="m">
  <header class="topp">
    <span class="merke">★ {no.tittel || "Etnequizen"}</span>
    {#if bord}<span class="bord">Bord {bord}</span>{/if}
  </header>

  {#if status === "utanKode"}
    <section class="midt"><h1>Skann QR-koden på bordet</h1><p class="dempa">Bruk kameraet på mobilen. Koden står på bordkortet.</p></section>
  {:else if status === "lastar"}
    <section class="midt"><p class="dempa">Koplar til …</p></section>
  {:else if status === "feil"}
    <section class="midt"><h1>Noko gjekk gale</h1><p class="dempa">{feil}</p><button class="knapp" type="button" onclick={() => location.reload()}>Prøv igjen</button></section>
  {:else if status === "opptatt"}
    <section class="midt"><h1>Bordet har alt ein mobil</h1><p class="dempa">Det er éin mobil per lag. Må de byte, spør quizmasteren om å frigjere bord {bord}, og skann koden på nytt.</p></section>
  {:else if status === "feilKode"}
    <section class="midt"><h1>Koden passar ikkje</h1><p class="dempa">Skann QR-koden på bordkortet på nytt. Hjelper ikkje det, spør quizmasteren.</p></section>
  {:else if status === "frigjort"}
    <section class="midt"><h1>Bordet er frigjort</h1><p class="dempa">Quizmasteren har sleppt ein ny mobil til. Skal denne mobilen vere med, skann koden på bordet på nytt.</p><button class="knapp" type="button" onclick={() => { status = "lastar"; start(); }}>Kople til på nytt</button></section>
  {:else if status === "bli"}
    <form class="stack" onsubmit={bliMed}>
      <h1>Bli med i quizen</h1>
      <label class="felt"><span>Lagnamn</span><input bind:value={namn} maxlength="40" autocomplete="off" required placeholder="Namnet blir vist på skjermen"></label>
      {#if (no.kategoriar || []).length && !no.jokerLaast}
        <fieldset class="felt"><legend>Vel jokeren dykkar</legend>
          <p class="dempa liten">Den kategorien gir dobbel poeng. De kan endre fram til quizen startar.</p>
          <div class="kat">{#each no.kategoriar as k}<button type="button" class="val" aria-pressed={joker === k.id} onclick={() => joker = joker === k.id ? "" : k.id}>{k.namn}</button>{/each}</div>
        </fieldset>
      {/if}
      <button class="knapp gull" type="submit" disabled={sender || !namn.trim()}>{sender ? "Koplar til …" : "Bli med"}</button>
      <p class="dempa liten">Denne mobilen blir mobilen til laget heile kvelden. Må de byte, spør quizmasteren.</p>
    </form>
  {:else if no.resultat && res}
    <section class="stack">
      <h1>Takk for i kveld!</h1>
      <div class="plass"><b>{res.plass ? res.plass + "." : "–"}</b><div><span class="lag">{res.namn}</span><span class="dempa">{res.plass ? `plass av ${res.av}` : "ikkje med på tavla"} · {fmt(res.sum)} poeng</span></div></div>
      {#each res.hurtig || [] as h}{#if h.plass}<p class="pille">⚡ {h.namn}: {h.plass}. plass av {h.av} · {fmt(h.p)} poeng</p>{/if}{/each}
      <h2>Poeng per kategori</h2>
      <ul class="stolpar">
        {#each res.kat || [] as k}
          <li><span class="kn">{k.namn}{k.joker ? " ★" : ""}</span><span class="st"><i style="width:{k.maks ? Math.min(100, k.p / k.maks * 100) : 0}%" class:j={k.joker}></i></span><b>{fmt(k.p)}</b></li>
        {/each}
      </ul>
      {#if beste && beste.p}<p class="dempa">Best i {beste.namn}{beste.joker ? ", med joker" : ""}: {fmt(beste.p)} poeng</p>{/if}
      {#each res.hurtig || [] as h}
        {#if h.svar?.length}
          <h2>⚡ {h.namn}</h2>
          <ul class="hsvar">{#each h.svar as s}<li class={s.status}><span class="ikon">{s.status === "rett" ? "✓" : s.status === "ikkje" ? "–" : "✗"}</span><span>{s.q}</span><b>{fmt(s.p)}</b></li>{/each}</ul>
        {/if}
      {/each}
      {#if res.fasit?.length}
        <details class="fasit"><summary>Sjå heile fasiten</summary>
          {#each res.fasit as f}<h3>{f.namn}</h3><ol>{#each f.svar as s}<li>{s}</li>{/each}</ol>{/each}
        </details>
      {/if}
    </section>
  {:else if no.id}
    <section class="stack q">
      <div class="qtopp"><span class="pille">⚡ {no.kat}{no.nr ? ` · ${no.nr} av ${no.tot}` : ""}</span>{#if open}<span class="klokke" class:lite={att <= 5}>{att} s</span>{/if}</div>
      {#if no.tekst}<p class="qtekst">{no.tekst}</p>{/if}
      {#if mittSvar}
        <div class="sendt">
          <span class="dempa">Svaret dykkar{brukt ? ` · ${brukt} s` : ""}</span>
          <b>{visSvar(mittSvar.svar)}</b>
          {#if no.fasitVist && mittSvar.status}
            {#if mittSvar.status === "rett"}<p class="dom rett">✓ Rett! {fmt(mittSvar.poeng)} poeng</p>
            {:else if mittSvar.status === "feil"}<p class="dom feil">✗ Ikkje rett denne gongen</p>
            {:else}<p class="dom">Quizmasteren ser på svaret</p>{/if}
          {:else}<p class="dempa">Sjå på skjermen. Fasiten kjem straks.</p>{/if}
        </div>
      {:else if open}
        {#if no.form === "alternativ"}
          <p class="dempa liten">Første trykk tel.</p>
          <div class="alt">{#each (no.alternativ || []) as a, i}<button type="button" class="a" class:valt={valt === i} disabled={sender} onclick={() => svar(i)}><b>{BOKSTAV[i]}</b><span>{a}</span></button>{/each}</div>
        {:else}
          <form class="stack" onsubmit={e => { e.preventDefault(); if (friTekst.trim()) svar(friTekst.trim()); }}>
            <input class="fritt" bind:value={friTekst} maxlength="80" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Skriv svaret" aria-label="Svaret dykkar">
            <button class="knapp gull" type="submit" disabled={sender || !friTekst.trim()}>{sender ? "Sender …" : "Send svaret"}</button>
            <p class="dempa liten">Små skrivefeil går fint. Svaret kan ikkje endrast etter at det er sendt.</p>
          </form>
        {/if}
      {:else}
        <div class="sendt"><b>Tida er ute</b><p class="dempa">De rakk ikkje å svare på dette spørsmålet.</p></div>
      {/if}
      {#if feil}<p class="feilmld">{feil}</p>{/if}
    </section>
  {:else if no.vent}
    <section class="midt"><span class="pille">⚡ {no.kat}</span><h1>{no.nr ? `Spørsmål ${no.nr} av ${no.tot}` : "Hurtigrunde"}</h1><p class="dempa">Sjå på skjermen og hald mobilen klar. Svaralternativa kjem her når klokka startar.</p></section>
  {:else}
    <section class="stack">
      <h1 class="kvil">Legg vekk mobilen</h1>
      <p class="dempa">Han trengst berre i hurtigrundane. Då vaknar han av seg sjølv.</p>
      <label class="felt"><span>Lagnamn</span><input bind:value={namn} maxlength="40" onfocus={() => namnFokus = true} onblur={() => namnFokus = false} oninput={endraNamn}></label>
      {#if (no.kategoriar || []).length}
        {#if no.jokerLaast}
          <p class="pille">Joker: {jokerNamn || "ingen vald"} · låst</p>
        {:else}
          <fieldset class="felt"><legend>Jokeren dykkar</legend>
            <p class="dempa liten">Dobbel poeng i éin kategori. De kan endre fram til quizen startar.</p>
            <div class="kat">{#each no.kategoriar as k}<button type="button" class="val" aria-pressed={me?.joker === k.id} onclick={() => veljJoker(k.id)}>{k.namn}</button>{/each}</div>
          </fieldset>
        {/if}
      {/if}
      {#if me?.hurtigNo?.plass}<p class="pille">⚡ {me.hurtigNo.namn}: {me.hurtigNo.plass}. plass · {fmt(me.hurtigNo.p)} poeng</p>{/if}
      {#if feil}<p class="feilmld">{feil}</p>{/if}
    </section>
  {/if}

  {#if status === "inne" && no.id && me?.hurtigNo?.plass && me.hurtigNo.namn === no.kat}
    <footer class="botn">⚡ {me.hurtigNo.namn}: {me.hurtigNo.plass}. plass · {fmt(me.hurtigNo.p)} poeng</footer>
  {/if}
</main>

<style>
  .m{max-width:520px;margin:0 auto;min-height:100dvh;display:flex;flex-direction:column;gap:18px;
    padding:max(14px,env(safe-area-inset-top,0px)) max(16px,env(safe-area-inset-right,0px)) max(24px,env(safe-area-inset-bottom,0px)) max(16px,env(safe-area-inset-left,0px))}
  .topp{display:flex;justify-content:space-between;align-items:center;font-weight:700}
  .merke{color:var(--gull);letter-spacing:.06em;font-size:15px}
  .bord{background:var(--gran-3);border-radius:999px;padding:3px 12px;font-size:14px}
  h1{font-family:var(--f-tittel);font-size:34px;line-height:1.1;margin:0;text-wrap:balance}
  h1.kvil{font-size:30px}
  h2{font-family:var(--f-tittel);font-size:21px;margin:8px 0 0}
  h3{font-size:16px;margin:12px 0 4px}
  .midt{flex:1;display:flex;flex-direction:column;justify-content:center;gap:14px;text-align:center;align-items:center;padding-bottom:12vh}
  .stack{display:flex;flex-direction:column;gap:14px}
  .dempa{color:var(--dempa);margin:0}
  .liten{font-size:14px}
  .felt{display:flex;flex-direction:column;gap:6px;border:0;padding:0;margin:0}
  .felt > span,.felt legend{font-weight:700;font-size:14px;letter-spacing:.04em;text-transform:uppercase;color:var(--dempa);padding:0}
  input{background:var(--gran-2);border:2px solid var(--gran-3);border-radius:14px;padding:13px 14px;font-size:18px;width:100%}
  input:focus{border-color:var(--gull);outline:none}
  .kat{display:flex;flex-wrap:wrap;gap:8px}
  .val{border:2px solid var(--gran-3);background:transparent;border-radius:999px;padding:10px 16px;min-height:46px;cursor:pointer;font-weight:600}
  .val[aria-pressed="true"]{background:var(--gull);border-color:var(--gull);color:var(--gran)}
  .knapp{border:0;border-radius:16px;min-height:56px;padding:12px 20px;font-weight:700;font-size:18px;background:var(--gran-3);cursor:pointer;width:100%}
  .knapp.gull{background:var(--gull);color:var(--gran)}
  .knapp:disabled{opacity:.5}
  .pille{display:inline-block;align-self:flex-start;margin:0;background:var(--gran-2);border:1px solid var(--gran-3);border-radius:999px;padding:6px 14px;font-weight:700;font-size:15px}
  .midt .pille{align-self:center}
  .qtopp{display:flex;justify-content:space-between;align-items:center;gap:10px}
  .klokke{font:700 28px var(--f-tekst);font-variant-numeric:tabular-nums;color:var(--gull)}
  .klokke.lite{color:var(--feil)}
  .qtekst{margin:0;font-family:var(--f-tittel);font-size:20px;line-height:1.3}
  .alt{display:grid;grid-template-columns:1fr;gap:10px}
  .a{display:flex;align-items:center;gap:14px;text-align:left;border:2px solid var(--gran-3);background:var(--gran-2);border-radius:18px;min-height:74px;padding:10px 16px;font-size:20px;font-weight:600;cursor:pointer}
  .a b{display:grid;place-items:center;width:46px;height:46px;border-radius:50%;background:var(--gull);color:var(--gran);flex:none;font-size:22px}
  .a:active,.a.valt{background:var(--gull);color:var(--gran);border-color:var(--gull)}
  .a.valt b{background:var(--gran);color:var(--gull)}
  .fritt{font-size:22px;min-height:62px}
  .sendt{display:flex;flex-direction:column;gap:6px;background:var(--gran-2);border:2px solid var(--gran-3);border-radius:18px;padding:18px}
  .sendt b{font-size:24px}
  .dom{margin:4px 0 0;font-size:24px;font-weight:700}
  .dom.rett{color:var(--ok)}.dom.feil{color:var(--feil)}
  .feilmld{margin:0;color:var(--feil);font-weight:600}
  .botn{margin-top:auto;text-align:center;color:var(--dempa);font-size:15px}
  .plass{display:flex;align-items:center;gap:16px;background:var(--gran-2);border:2px solid var(--gull);border-radius:20px;padding:16px}
  .plass > b{font-family:var(--f-tittel);font-size:64px;line-height:1;color:var(--gull)}
  .plass .lag{display:block;font-weight:700;font-size:22px}
  .stolpar,.hsvar{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}
  .stolpar li{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,6fr) 40px;gap:10px;align-items:center;font-size:15px}
  .kn{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .st{height:10px;border-radius:5px;background:var(--gran-3);overflow:hidden}
  .st i{display:block;height:100%;background:#7FB3A8;border-radius:5px}.st i.j{background:var(--gull)}
  .stolpar b{text-align:right}
  .hsvar li{display:grid;grid-template-columns:24px minmax(0,1fr) 36px;gap:8px;font-size:15px}
  .hsvar .ikon{font-weight:700}.hsvar .rett .ikon{color:var(--ok)}.hsvar .feil .ikon,.hsvar .sjekk .ikon{color:var(--feil)}
  .hsvar b{text-align:right}
  .fasit{background:var(--gran-2);border-radius:14px;padding:12px 14px}
  .fasit summary{font-weight:700;cursor:pointer}
  .fasit ol{margin:0;padding-left:22px;font-size:15px}
</style>
