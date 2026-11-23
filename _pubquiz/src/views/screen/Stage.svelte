<script>
  // Scales a 1600 × 900 slide to fit whatever box it sits in (projector, laptop window, small preview)
  let { children } = $props();
  let w = $state(1600), h = $state(900);
  const s = $derived(Math.min(w / 1600, h / 900) || 0.01);
</script>

<div class="box" bind:clientWidth={w} bind:clientHeight={h}>
  <div class="stage" style="transform: translate({(w - 1600 * s) / 2}px, {(h - 900 * s) / 2}px) scale({s})">
    {@render children?.()}
  </div>
</div>

<style>
  .box { position: relative; width: 100%; height: 100%; overflow: hidden; background: #cfe2d6; }
  .stage {
    position: absolute; left: 0; top: 0; width: 1600px; height: 900px; transform-origin: 0 0; overflow: hidden;
    background: #cfe2d6; /* the quiz mint, as on the old banner */
    color: #241d1b; font-family: "DM Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  }
</style>
