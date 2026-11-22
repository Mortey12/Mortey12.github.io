<script>
  // Quizmasterpanelet: innlogging, faner og synkronisering av quizen som blir redigert.
  import { onAuthStateChanged } from "firebase/auth";
  import { auth, loggInn, loggUt, harTilgang, feiltekst } from "../lib/firebase.js";
  import { live, startLive, stoppLive, opneQuiz } from "../lib/data.svelte.js";
  import { red, lagre, setNo, melding } from "./red.svelte.js";
  import { nyQuiz, slettQuiz, gjerAktiv, flyttOver, finstGamal } from "./quizar.svelte.js";
  import { lenkje } from "../lib/quiz.js";
  import Koyr from "./Koyr.svelte";
  import Poeng from "./Poeng.svelte";
  import Rett from "./Rett.svelte";
  import Sporsmal from "./Sporsmal.svelte";
  import Oppsett from "./Oppsett.svelte";

  let status = $state("lastar"), epost = $state(""), loginFeil = $state("");
  const FANER = [["koyr", "Køyr quizen"], ["rett", "Retting"], ["poeng", "Lag og poeng"], ["sporsmal", "Spørsmål"], ["oppsett", "Oppsett"]];
  let fane = $state((() => { try { return localStorage.getItem("etne-fane") || "koyr"; } catch (_) { return "koyr"; } })());
  $effect(() => { try { localStorage.setItem("etne-fane", fane); } catch (_) {} });

  onAuthStateChanged(auth, async u => {
    stoppLive();
    if (!u) { status = "ute"; return; }
    epost = (u.email || "").toLowerCase();
    if (!(await harTilgang(u))) { status = "nekta"; return; }
    // Kvart vindauge hugsar sin eigen quiz; første gong blir det quizen på storskjermen
    status = "inne"; startLive({ kodar: true, vel: () => { try { return localStorage.getItem("etne-quiz") || ""; } catch (_) { return ""; } } });
  });
  $effect(() => { const id = live.quizId; if (id) try { localStorage.setItem("etne-quiz", id); } catch (_) {} });
  // Den lagra quizen finst ikkje lenger (sletta): gå til quizen på storskjermen
  $effect(() => { if (live.klar && live.quizId && !live.quiz && live.aktivId && live.aktivId !== live.quizId) opneQuiz(live.aktivId, { kodar: true }); });

  // Hald den lokale kopien i takt med databasen når ingen endring ventar på lagring
  $effect(() => {
    const q = live.quiz;
    if (q && !red.ventar) { red.quiz = structuredClone($state.snapshot(q)); red.quizId = live.quizId; }
    else if (!q && !red.ventar) { red.quiz = null; red.quizId = ""; }
  });

  // Det mobilane får sjå: tittel, barmeny og lagnamna (dei står på storskjermen uansett)
  $effect(() => {
    if (status !== "inne" || !live.klar || !live.quiz) return;
    const vil = { tittel: live.quiz.tittel || "", barmeny: lenkje(live.quiz.barmeny), lagnamn: Object.fromEntries(live.lag.filter(l => (l.namn || "").trim()).map(l => [l.id, l.namn.trim()])) };
    const no = { tittel: live.no.tittel || "", barmeny: live.no.barmeny || "", lagnamn: live.no.lagnamn || {} };
    if (JSON.stringify(vil) !== JSON.stringify(no)) setNo(vil);
  });

  const logg = () => { loginFeil = ""; loggInn().catch(e => loginFeil = "Klarte ikkje logge inn: " + feiltekst(e)); };

  // Fleire quizar. Menyen vel kva quiz DETTE vindauget arbeider med; storskjermen viser den aktive.
  // Fredrik kan rette éin quiz medan du førebur ein annan, utan at nokon skriv over den andre.
  let byter = $state(false);
  const erAktiv = $derived(!!live.quizId && live.quizId === live.aktivId);
  const namnPaa = id => live.quizar.find(a => a.id === id)?.namn || "quizen";
  async function vel(id){
    // Same quiz som alt er open: ingenting å byte (elles ventar panelet på ei endring som aldri kjem)
    if (id === live.quizId) return;
    if (red.ventar) await lagre();
    red.quiz = null; red.quizId = "";
    opneQuiz(id, { kodar: true });
  }
  async function velQuiz(e){
    const v = e.target.value, sel = e.target;
    sel.value = live.quizId;
    if (v === live.quizId) return;
    if (!v.startsWith("+") && !v.startsWith("-")) { await vel(v); return; }
    const namn = live.quiz?.tittel || "denne quizen";
    let nytt = "";
    if (v.startsWith("+")) {
      nytt = prompt(v === "+kopi" ? `Namn på kopien av «${namn}» (spørsmåla blir med, lag og poeng ikkje):`
        : v === "+kopilag" ? `Namn på kopien av «${namn}» (spørsmåla og laga blir med, poeng og retting ikkje):`
        : "Namn på den nye quizen:", v.startsWith("+kopi") ? namn + " (kopi)" : "Påskequiz " + new Date().getFullYear());
      if (nytt === null) return;
    } else if (!confirm(`Slette «${namnPaa(v.slice(1))}» for godt, med lag, poeng og resultat? Det kan ikkje angrast.`)) return;
    byter = true;
    try {
      if (v.startsWith("-")) { await slettQuiz(v.slice(1)); melding("Sletta"); }
      else { if (red.ventar) await lagre(); const id = await nyQuiz({ kopi: v.startsWith("+kopi"), medLag: v === "+kopilag", namn: nytt.trim() }); await vel(id); melding("Ny quiz laga. Han er ikkje på storskjermen før du trykkjer «Gjer aktiv»."); }
    } catch (err) { melding("Feila: " + feiltekst(err), true); }
    byter = false;
  }
  async function aktiver(){
    const namn = live.quiz?.tittel || "denne quizen";
    if (!confirm(`Setje «${namn}» på storskjermen? «${namnPaa(live.aktivId)}» forsvinn frå storskjermen, og skjermen startar på byrjinga av køyreplanen.`)) return;
    byter = true;
    try { if (red.ventar) await lagre(); await gjerAktiv(live.quizId); melding(`«${namn}» er på storskjermen no`); } catch (err) { melding("Feila: " + feiltekst(err), true); }
    byter = false;
  }
  // Første gong: flytt den gamle quizen over til ei eiga mappe (det gamle blir ikkje rørt)
  let gamal = $state(false);
  $effect(() => { if (status === "inne" && live.aktivKlar && !live.quizar.length) finstGamal().then(f => gamal = f).catch(() => {}); });
  async function flytt(){
    byter = true;
    try { const id = await flyttOver(); await vel(id); melding("Quizen er flytta over. Den gamle sida er ikkje rørt."); } catch (err) { melding("Flyttinga feila: " + feiltekst(err), true); }
    byter = false;
  }
  async function forsteQuiz(){
    byter = true;
    try { const id = await nyQuiz({ namn: "Ny quiz" }); await gjerAktiv(id); await vel(id); } catch (err) { melding("Feila: " + feiltekst(err), true); }
    byter = false;
  }
</script>

<svelte:window onbeforeunload={e => { if (red.ventar) { lagre(); e.preventDefault(); } }} />

<header class="band">
  <div class="inner topp">
    <div class="merke">
      <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.6 6.6L21.5 9l-5.3 4.5L18 20.5 12 16.8 6 20.5l1.8-7L2.5 9l6.9-.4z" fill="#E8B84A"/></svg>
      <div><span class="namn">Etnequizen</span>
        {#if status === "inne" && live.quizar.length}
          <div class="quizrad">
            <select class="quizval" aria-label="Vel quiz" value={live.quizId} onchange={velQuiz} disabled={byter}>
              {#each live.quizar as a (a.id)}<option value={a.id}>{a.namn}{a.id === live.aktivId ? "  ★ på storskjermen" : ""}</option>{/each}
              <option disabled>──────────</option>
              <option value="+ny">+ Ny tom quiz</option>
              {#if live.quiz}<option value="+kopi">+ Kopi av denne (utan lag)</option><option value="+kopilag">+ Kopi med lag (utan poeng)</option>{/if}
              {#if live.quizar.some(a => a.id !== live.aktivId)}
                <optgroup label="Slett ein quiz">
                  {#each live.quizar.filter(a => a.id !== live.aktivId) as a (a.id)}<option value={"-" + a.id}>Slett «{a.namn}»</option>{/each}
                </optgroup>
              {/if}
            </select>
            {#if erAktiv}<span class="paaskjerm">★ På storskjermen</span>
            {:else if live.quiz}<button class="btn liten lys" type="button" onclick={aktiver} disabled={byter}>Gjer aktiv på storskjermen</button>{/if}
          </div>
        {:else}<span class="under">{live.quiz?.tittel || "Quizmaster"}</span>{/if}
      </div>
    </div>
    {#if status === "inne"}
      <div class="rad">
        <span class="lagring" class:feil={red.feil} aria-live="polite">{red.melding}</span>
        <span class="bruker">{epost}</span>
        <button class="btn liten lys" type="button" onclick={loggUt}>Logg ut</button>
      </div>
    {/if}
  </div>
  {#if status === "inne"}
    <nav class="inner faner" aria-label="Delar av panelet">
      {#each FANER as [id, namn]}<button type="button" aria-pressed={fane === id} onclick={() => fane = id}>{namn}</button>{/each}
    </nav>
  {/if}
</header>

<main class="inner" style="padding-block:20px 48px">
  {#if status === "lastar"}
    <p class="dempa">Lastar …</p>
  {:else if status === "ute"}
    <section class="kort login">
      <h2>Logg inn</h2>
      <p>Panelet er berre for quizmasteren. Logg inn med Google-kontoen som har tilgang.</p>
      <button class="btn primary" type="button" onclick={logg}>Logg inn med Google</button>
      <a class="btn" href="demo.html">Prøv rettinga utan innlogging</a>
      {#if loginFeil}<p class="feiltekst">{loginFeil}</p>{/if}
    </section>
  {:else if status === "nekta"}
    <section class="kort login">
      <h2>Ingen tilgang enno</h2>
      <p>Du er logga inn som <strong>{epost}</strong>. Legg til e-postadressa som eit dokument i samlinga <code>etneTilgang</code> i Firebase, så kjem du inn.</p>
      <button class="btn" type="button" onclick={loggUt}>Logg ut</button>
    </section>
  {:else if live.aktivKlar && !live.quizar.length}
    <section class="kort login">
      <h2>Fleire quizar</h2>
      {#if gamal}
        <p>Kvar quiz har no si eiga mappe, så gamle quizar kan lagrast med lag, poeng og resultat. Flytt over quizen du har, så er han den første. Den gamle sida (mstene.no/etnequiz) blir ikkje rørt.</p>
        <button class="btn primary" type="button" onclick={flytt} disabled={byter}>Flytt over quizen</button>
      {:else}
        <p>Det finst ingen quiz enno.</p>
        <button class="btn primary" type="button" onclick={forsteQuiz} disabled={byter}>Lag den første quizen</button>
      {/if}
      <p class="dempa">Krev dei nye Firestore-reglane (quizpremiar/firestore.rules).</p>
    </section>
  {:else if !live.klar || !red.quiz}
    <p class="dempa">Hentar quizen …</p>
  {:else if fane === "koyr" && !erAktiv}
    <p class="ikkjeaktiv">Du arbeider med «{live.quiz?.tittel}», men storskjermen viser «{namnPaa(live.aktivId)}». Trykk «Gjer aktiv på storskjermen» øvst for å køyre denne quizen.</p>
    <Koyr />
  {:else if fane === "koyr"}<Koyr />
  {:else if fane === "rett"}<Rett />
  {:else if fane === "poeng"}<Poeng />
  {:else if fane === "sporsmal"}<Sporsmal />
  {:else}<Oppsett />{/if}
  {#if live.feil}<p class="feiltekst">Problem med databasen: {live.feil}</p>{/if}
</main>

<style>
  .band{background:var(--p-gran);color:#F7F1E3;background-image:radial-gradient(rgba(247,241,227,.12) 1.5px,transparent 2px);background-size:46px 46px}
  .topp{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;padding-block:16px 12px}
  .merke{display:flex;align-items:center;gap:12px}
  .merke .namn{display:block;font-family:var(--f-tittel);font-weight:700;font-size:26px;line-height:1.1}
  .merke .under{display:block;font-size:14px;color:#B9CBBF}
  .quizrad{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:2px}
  .paaskjerm{font:700 12px var(--f-tekst);color:#E8B84A;letter-spacing:.02em}
  .ikkjeaktiv{background:#FFF4D6;border:1px solid #E8B84A;border-radius:10px;padding:8px 12px;margin:0 0 14px;font-size:14px}
  .quizval{display:block;max-width:min(60vw,320px);font:500 14px var(--f-tekst);color:#F7F1E3;background:rgba(247,241,227,.08);border:1px solid rgba(247,241,227,.35);border-radius:8px;padding:4px 8px;min-height:32px;cursor:pointer}
  .quizval option,.quizval optgroup{color:#0F2E24;background:#fff}
  .lagring{font:500 12px "IBM Plex Mono",monospace;color:#B9CBBF;min-height:18px}
  .lagring.feil{color:#FFB4B4}
  .bruker{font-size:13px;color:#B9CBBF}
  .lys{background:transparent;border-color:#F7F1E3;color:#F7F1E3}
  .faner{display:flex;gap:4px;flex-wrap:wrap;padding-bottom:0}
  .faner button{border:0;background:transparent;color:#F7F1E3;font:700 15px var(--f-tekst);padding:10px 16px;border-radius:12px 12px 0 0;cursor:pointer;min-height:44px}
  .faner button[aria-pressed="true"]{background:var(--p-bg);color:var(--p-blekk)}
  .login{max-width:520px;margin:40px auto;display:flex;flex-direction:column;gap:12px}
  .login p{margin:0}
</style>
