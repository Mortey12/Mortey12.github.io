<script>
  // The projector page (#/screen). It shows whatever the live screen state says, so it can be
  // driven from the Projector page on a phone or laptop, or with the keys on this computer.
  import { S, api, cfg, save } from "../../lib/store.svelte.js";
  import { weekResults } from "../../lib/calc.js";
  import { slidePlan, step } from "../../lib/screen.js";
  import Stage from "./Stage.svelte";
  import Slide from "./Slide.svelte";

  let live = $derived(S.screen || {});
  let week = $derived(live.weekId ? S.weeks[live.weekId] : null);
  let pics = $state({});
  $effect(() => {
    pics = {};
    if (!S.admin || !live.weekId) return;
    return api.listenPictures(live.weekId, v => (pics = v || {}), () => {});
  });
  let questions = $state({});
  $effect(() => {
    questions = {};
    if (!S.admin || !live.weekId) return;
    return api.listenQuestions(live.weekId, v => (questions = v || {}), () => {});
  });

  const go = dir => {
    if (!S.admin || !week) return;
    const plan = slidePlan(week, questions);
    const n = weekResults(week, S.teams, cfg()).length;
    save(() => api.setScreen({ ...step(live, dir, plan, n), weekId: live.weekId }));
  };
  let idle = $state(false), t;
  const wake = () => { idle = false; clearTimeout(t); t = setTimeout(() => (idle = true), 2500); };
  const fullscreen = () => document.fullscreenElement ? document.exitFullscreen().catch(() => {}) : document.documentElement.requestFullscreen().catch(() => {});
  function key(e) {
    if (e.key === "f" || e.key === "F") return fullscreen();
    // Arrow keys, space and presentation clickers (PageDown / PageUp)
    if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) { e.preventDefault(); go(1); }
    if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); go(-1); }
  }
  wake();
</script>

<svelte:window onmousemove={wake} onkeydown={key} />

<div class="screen" class:idle>
  {#if week}
    <Stage><Slide {week} {questions} {pics} k={live.k} shown={live.shown || 0} canSeeQuestions={S.admin} /></Stage>
  {:else}
    <div class="msg">
      <h1>Quiz på Kvarteret: screen</h1>
      <p>Nothing to show yet. On the score entry page, open <b>Projector</b> and press <b>Show this night</b>.</p>
    </div>
  {/if}
  <div class="hint">
    <button onclick={fullscreen}>Full screen (F)</button>
    {#if S.admin}<span>← → or a clicker changes slide</span>
    {:else if S.user}<span>{S.user.email} can't show questions</span>
    {:else}<button onclick={() => api.login().catch(() => {})}>Sign in to show questions</button>{/if}
  </div>
</div>

<style>
  :global(body:has(.screen)) { margin: 0; background: #000; overflow: hidden; }
  .screen { position: fixed; inset: 0; background: #000; }
  .screen.idle { cursor: none; }
  .msg { color: #eee; text-align: center; padding-top: 30vh; font-family: system-ui, sans-serif; }
  .hint { position: fixed; right: 16px; bottom: 14px; display: flex; gap: 10px; align-items: center; font: 14px "DM Sans", system-ui, sans-serif; color: #241d1b; transition: opacity .4s; }
  .hint button { background: #faf7f2; color: #241d1b; border: 2px solid #241d1b; border-radius: 999px; padding: 5px 14px; cursor: pointer; font: inherit; font-weight: 600; }
  .idle .hint { opacity: 0; }
</style>
