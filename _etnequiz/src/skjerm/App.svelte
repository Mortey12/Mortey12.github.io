<script>
  // Storskjermen: følgjer det quizmasteren vel i panelet. Same konto som panelet.
  import { onAuthStateChanged } from "firebase/auth";
  import { auth, loggInn, harTilgang } from "../lib/firebase.js";
  import { live, startLive } from "../lib/data.svelte.js";
  import Stage from "../lib/Stage.svelte";
  import Slide from "../lib/Slide.svelte";

  let status = $state("lastar"), epost = $state("");
  onAuthStateChanged(auth, async u => {
    if (!u) { status = "ute"; return; }
    epost = u.email;
    if (!(await harTilgang(u))) { status = "nekta"; return; }
    status = "inne"; startLive();
  });

  let stille = $state(false), t;
  const vak = () => { stille = false; clearTimeout(t); t = setTimeout(() => stille = true, 2500); };
  const fs = () => document.fullscreenElement ? document.exitFullscreen().catch(() => {}) : document.documentElement.requestFullscreen().catch(() => {});
  vak();
</script>

<svelte:window onmousemove={vak} onkeydown={e => { if (e.key === "f" || e.key === "F") fs(); }} />

<div class="skjerm" class:stille>
  {#if status === "inne" && live.quiz}
    <Stage><Slide quiz={live.quiz} steg={live.state.steg} modus={live.state.modus} lag={live.lag} avslort={live.state.avslort} sist={live.state.sist} /></Stage>
    <div class="hint">Trykk F for fullskjerm <button type="button" onclick={fs}>Fullskjerm</button></div>
  {:else}
    <div class="melding">
      {#if status === "ute"}<p>Logg inn med same kontoen som i quizmasterpanelet.</p><button type="button" onclick={() => loggInn().catch(() => {})}>Logg inn med Google</button>
      {:else if status === "nekta"}<p>{epost} har ikkje tilgang til Etnequizen.</p>
      {:else}<p>Lastar …</p>{/if}
    </div>
  {/if}
</div>

<style>
  :global(html), :global(body){margin:0;height:100%;background:#000;overflow:hidden}
  .skjerm{position:fixed;inset:0}
  .stille{cursor:none}
  .hint{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:rgba(15,46,36,.92);color:#F7F1E3;font:600 16px/1.4 "Figtree",sans-serif;padding:10px 18px;border-radius:999px;border:1px solid #24533F;transition:opacity .4s;z-index:10}
  .hint button,.melding button{font:inherit;margin-left:10px;background:#E8B84A;color:#0F2E24;border:0;border-radius:999px;padding:6px 14px;cursor:pointer}
  .stille .hint{opacity:0;pointer-events:none}
  .melding{position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:#F7F1E3;font:600 22px/1.5 "Figtree",sans-serif;text-align:center;padding:24px;background:#0F2E24}
  .melding p{margin:0}
</style>
