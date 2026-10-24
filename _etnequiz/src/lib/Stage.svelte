<script>
  // Skalerer ei 1600 × 900-scene inn i boksen ho står i, med snø, lysslynge og grankvist.
  let { children } = $props();
  let boks = $state(), w = $state(1600), h = $state(900);
  const s = $derived(Math.min(w / 1600, h / 900) || 0.01);
  const farger = ["#C8323A", "#E8B84A", "#F7F1E3", "#3FA06E"];
  const bulbs = Array.from({ length: 20 }, (_, i) => ({ x: i * 80 + 40, c: farger[i % 4], d: ((i * 0.37) % 3.2).toFixed(2) }));
  const wire = "M0 18" + Array.from({ length: 21 }, (_, i) => ` Q ${i * 80 - 40} 46 ${i * 80} 18`).join("");
</script>

<div class="stage-boks" bind:this={boks} bind:clientWidth={w} bind:clientHeight={h}>
  <div class="stage" style="transform: translate({(w - 1600 * s) / 2}px, {(h - 900 * s) / 2}px) scale({s})">
    <div class="snow"></div><div class="snow s2"></div>
    <svg class="lights" viewBox="0 0 1600 74" aria-hidden="true">
      <path d={wire} fill="none" stroke="#2C3B31" stroke-width="3" />
      {#each bulbs as b}
        <g class="bulb" style="animation-delay:{b.d}s">
          <rect x={b.x - 4} y="33" width="8" height="8" rx="2" fill="#3B4A3F" />
          <ellipse cx={b.x} cy="51" rx="9" ry="13" fill={b.c} />
          <ellipse cx={b.x - 3} cy="46" rx="2.5" ry="4" fill="#fff" opacity=".55" />
        </g>
      {/each}
    </svg>
    <svg class="kvist" style="right:-20px;bottom:-24px" width="260" height="200" viewBox="0 0 260 200" aria-hidden="true">
      <g fill="#24533F"><path d="M260 200 C200 150 150 130 60 120 C130 110 190 120 260 160Z"/><path d="M260 200 C220 120 200 80 150 20 C210 60 240 110 260 150Z"/></g>
      <g fill="#C8323A"><circle cx="150" cy="140" r="14"/><circle cx="174" cy="150" r="14"/><circle cx="160" cy="164" r="14"/></g>
      <g fill="#fff" opacity=".35"><circle cx="146" cy="135" r="4"/><circle cx="170" cy="145" r="4"/><circle cx="156" cy="159" r="4"/></g>
    </svg>
    {@render children?.()}
  </div>
</div>

<style>
  .stage-boks{position:relative;width:100%;height:100%;overflow:hidden}
</style>
