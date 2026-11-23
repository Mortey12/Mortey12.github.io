<script>
  import { S, cfg } from "../lib/store.svelte.js";
  import { periods, categoryStats } from "../lib/calc.js";
  import PeriodPicker from "./PeriodPicker.svelte";
  import Strengths from "./Strengths.svelte";

  let list = $derived(periods(S.weeks));
  let pid = $state("");
  let period = $derived(list.find(p => p.id === pid) || list[0]);
  let minN = $state(2);
  let cats = $derived(period ? categoryStats(S.weeks, S.teams, cfg(), period.test)
    .map(cat => {
      const nights = Math.max(...cat.teams.map(t => t.n));
      const need = Math.min(minN, nights);
      return { ...cat, nights, need, top: cat.teams.filter(t => t.n >= need).slice(0, 8).map(t => ({ ...t, href: "#/team/" + t.teamId })) };
    })
    .sort((a, b) => b.nights - a.nights || a.name.localeCompare(b.name)) : []);
</script>

<div class="row head">
  <div>
    <h1>Best teams per category</h1>
    <p class="small muted">Categories with the same name are tracked across weeks.</p>
  </div>
  <span class="spacer"></span>
  <label class="small">Played at least <input type="number" min="1" max="20" bind:value={minN} style="width:4em" /> times</label>
  <PeriodPicker {list} bind:value={pid} />
</div>

{#if !cats.length}<p class="muted">No category scores yet.</p>{/if}
<div class="grid2">
  {#each cats as cat (cat.key)}
    <section class="panel">
      <h3>{cat.name} <span class="muted small">· {cat.nights} {cat.nights === 1 ? "night" : "nights"}</span></h3>
      <Strengths items={cat.top} />
    </section>
  {/each}
</div>

<style>
  .head { align-items: end; margin-bottom: 12px; }
  .head p { margin: 0; }
  section :global(p.small) { display: none; }
</style>
