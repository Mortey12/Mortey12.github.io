<script>
  import { S, cfg } from "../lib/store.svelte.js";
  import { periods, seasonTable, categoryStats, weekResults, weeksSorted, fmt } from "../lib/calc.js";
  import PeriodPicker from "./PeriodPicker.svelte";
  import Strengths from "./Strengths.svelte";
  import TeamPin from "./TeamPin.svelte";

  let { id } = $props();
  let team = $derived(S.teams[id]);
  let c = $derived(cfg());
  let list = $derived(periods(S.weeks));
  let pid = $state("");
  let period = $derived(list.find(p => p.id === pid) || list[0]);
  let test = $derived(period ? period.test : () => true);

  let table = $derived(seasonTable(S.weeks, S.teams, c, test));
  let me = $derived(table.rows.find(r => r.teamId === id));
  let history = $derived(weeksSorted(S.weeks).filter(w => test(w.date) && w.teams?.[id]).reverse().map(w => {
    const rows = weekResults(w, S.teams, c);
    return { w, r: rows.find(x => x.teamId === id), n: rows.length };
  }).filter(x => x.r));
  let strengths = $derived(categoryStats(S.weeks, S.teams, c, test)
    .map(cat => ({ ...cat.teams.find(t => t.teamId === id), name: cat.name, field: cat.teams.length }))
    .filter(x => x.n)
    .sort((a, b) => b.index - a.index));
</script>

{#if !team}
  <p class="muted">Team not found. <a href="#/teams">All teams</a></p>
{:else}
  <div class="row head">
    <div>
      <h1>{team.name}</h1>
      {#if team.aliases?.length}<div class="small muted">Also seen as: {team.aliases.join(", ")}</div>{/if}
    </div>
    <span class="spacer"></span>
    <PeriodPicker {list} bind:value={pid} />
  </div>

  {#if !me}
    <p class="muted">No results in this period.</p>
  {:else}
    <div class="stats">
      <div class="panel"><div class="big">{me.place}<span class="small muted"> / {table.rows.length}</span></div><div class="small muted">Season place</div></div>
      <div class="panel"><div class="big">{fmt(me.score)}</div><div class="small muted">Season points</div></div>
      <div class="panel"><div class="big">{me.played}</div><div class="small muted">Nights played</div></div>
      <div class="panel"><div class="big">{me.wins}</div><div class="small muted">Wins</div></div>
      <div class="panel"><div class="big">{fmt(Math.round(me.avgPlace * 10) / 10)}</div><div class="small muted">Average place</div></div>
    </div>

    <div class="grid2">
      <section>
        <h2>Strongest categories</h2>
        <Strengths items={strengths} />
      </section>
      <section>
        <h2>Quiz nights</h2>
        <div class="panel flush">
          <table>
            <thead><tr><th>Date</th><th class="num">Place</th><th class="num">Score</th><th class="num">Season pts</th></tr></thead>
            <tbody>
              {#each history as h}
                <tr>
                  <td><a href={"#/week/" + h.w.id}>{h.w.date}</a></td>
                  <td class="num" class:p1={h.r.place === 1}>{h.r.place}<span class="muted small"> / {h.n}</span></td>
                  <td class="num">{fmt(h.r.total)}</td>
                  <td class="num muted">{fmt(h.r.points)}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  {/if}
  <TeamPin {id} />
{/if}

<style>
  .head { align-items: end; margin-bottom: 12px; }
  .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin-bottom: 8px; }
  .big { font-size: 1.6rem; font-weight: 800; font-variant-numeric: tabular-nums; }
  .flush { padding: 0; }
</style>
