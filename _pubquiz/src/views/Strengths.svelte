<script>
  import { fmt } from "../lib/calc.js";
  // items: [{ name, index, avg, n, topPct }]; index 100 = field average
  let { items, label = "name" } = $props();
  const scale = 60; // ±60 % around the average fills the bar
  const w = i => Math.min(50, (Math.abs(i - 100) / scale) * 50);
</script>

{#if !items.length}
  <p class="muted small">Not enough data yet.</p>
{:else}
  <ul class="bars">
    {#each items as it}
      <li>
        <span class="lab">{#if it.href}<a href={it.href}>{it[label]}</a>{:else}{it[label]}{/if}</span>
        <span class="track" title={`${it.index} (100 = average). Beat ${it.topPct}% of the field on average.`}>
          <span class="mid"></span>
          <span class="bar" class:neg={it.index < 100} style:width={w(it.index) + "%"} style:left={it.index < 100 ? 50 - w(it.index) + "%" : "50%"}></span>
        </span>
        <span class="num val">{it.index}</span>
        <span class="num small muted meta">avg {fmt(Math.round(it.avg * 10) / 10)} · {it.n}×</span>
      </li>
    {/each}
  </ul>
  <p class="small muted">Index: score in that category compared with the average team the same night (100 = average, 130 = 30% above).</p>
{/if}

<style>
  .bars { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
  li { display: grid; grid-template-columns: minmax(90px, 1.2fr) 2fr 2.5em minmax(70px, auto); gap: 8px; align-items: center; }
  .lab { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .track { position: relative; height: 12px; background: var(--line); border-radius: 6px; overflow: hidden; }
  .mid { position: absolute; left: 50%; top: 0; bottom: 0; width: 1px; background: var(--muted); }
  .bar { position: absolute; top: 0; bottom: 0; background: var(--good); }
  .bar.neg { background: var(--bad); opacity: .75; }
  .val { font-weight: 700; }
  @media (max-width: 480px) { .meta { display: none; } li { grid-template-columns: minmax(80px, 1fr) 1.5fr 2.5em; } }
</style>
