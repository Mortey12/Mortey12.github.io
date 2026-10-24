<script>
  // Quizmasterpanelet: innlogging, faner og synkronisering av quizen som blir redigert.
  import { onAuthStateChanged } from "firebase/auth";
  import { auth, loggInn, loggUt, harTilgang, feiltekst } from "../lib/firebase.js";
  import { live, startLive, stoppLive } from "../lib/data.svelte.js";
  import { red, lagre } from "./red.svelte.js";
  import Koyr from "./Koyr.svelte";
  import Poeng from "./Poeng.svelte";
  import Sporsmal from "./Sporsmal.svelte";
  import Oppsett from "./Oppsett.svelte";

  let status = $state("lastar"), epost = $state(""), loginFeil = $state("");
  const FANER = [["koyr", "Køyr quizen"], ["poeng", "Lag og poeng"], ["sporsmal", "Spørsmål"], ["oppsett", "Oppsett"]];
  let fane = $state((() => { try { return localStorage.getItem("etne-fane") || "koyr"; } catch (_) { return "koyr"; } })());
  $effect(() => { try { localStorage.setItem("etne-fane", fane); } catch (_) {} });

  onAuthStateChanged(auth, async u => {
    stoppLive();
    if (!u) { status = "ute"; return; }
    epost = (u.email || "").toLowerCase();
    if (!(await harTilgang(u))) { status = "nekta"; return; }
    status = "inne"; startLive();
  });

  // Hald den lokale kopien i takt med databasen når ingen endring ventar på lagring
  $effect(() => {
    const q = live.quiz;
    if (q && !red.ventar) red.quiz = structuredClone($state.snapshot(q));
  });

  const logg = () => { loginFeil = ""; loggInn().catch(e => loginFeil = "Klarte ikkje logge inn: " + feiltekst(e)); };
</script>

<svelte:window onbeforeunload={e => { if (red.ventar) { lagre(); e.preventDefault(); } }} />

<header class="band">
  <div class="inner topp">
    <div class="merke">
      <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.6 6.6L21.5 9l-5.3 4.5L18 20.5 12 16.8 6 20.5l1.8-7L2.5 9l6.9-.4z" fill="#E8B84A"/></svg>
      <div><span class="namn">Etnequizen</span><span class="under">{live.quiz?.tittel || "Quizmaster"}</span></div>
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
      {#if loginFeil}<p class="feiltekst">{loginFeil}</p>{/if}
    </section>
  {:else if status === "nekta"}
    <section class="kort login">
      <h2>Ingen tilgang enno</h2>
      <p>Du er logga inn som <strong>{epost}</strong>. Legg til e-postadressa som eit dokument i samlinga <code>etneTilgang</code> i Firebase, så kjem du inn.</p>
      <button class="btn" type="button" onclick={loggUt}>Logg ut</button>
    </section>
  {:else if !live.klar || !red.quiz}
    <p class="dempa">Hentar quizen …</p>
  {:else if fane === "koyr"}<Koyr />
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
