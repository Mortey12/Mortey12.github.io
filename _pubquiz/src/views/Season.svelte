<script>
  import { S, cfg } from "../lib/store.svelte.js";
  import { periods, seasonTable, fmt, weeksSorted } from "../lib/calc.js";
  import PeriodPicker from "./PeriodPicker.svelte";

  let c = $derived(cfg());
  let list = $derived(periods(S.weeks));
  let pid = $state("");
  let period = $derived(list.find(p => p.id === pid) || list[0]);
  let t = $derived(period ? seasonTable(S.weeks, S.teams, c, period.test) : { rows: [], weekCount: 0 });
  let weeks = $derived(period ? weeksSorted(S.weeks).filter(w => period.test(w.date)) : []);
  let showWeeks = $state(false);
</script>

<div class="row head">
  <div>
    <h1>Season table</h1>
    <p class="muted small">
      {#if c.seasonMode === "raw"}Each quiz night's total score{:else}Each quiz night a team gets one point per team it beats, plus one (winner of a 30-team night gets 30){/if}{#if Number(c.bestN)}, and only its best {c.bestN} nights count{/if}.
      Ties: more wins, then better average placing.
    </p>
  </div>
  <span class="spacer"></span>
  <PeriodPicker {list} bind:value={pid} />
</div>

{#if !t.rows.length}
  <p class="muted">No results in this period yet.</p>
{:else}
  <p class="small muted">{t.weekCount} quiz nights · {t.rows.length} teams · <label><input type="checkbox" bind:checked={showWeeks} /> show each night</label></p>
  <div class="scroll panel flush">
    <table>
      <thead>
        <tr>
          <th>#</th><th>Team</th><th class="num">Points</th><th class="num">Nights</th><th class="num">Wins</th><th class="num">Top 3</th><th class="num">Avg place</th><th class="num">Best</th>
          {#if showWeeks}{#each weeks as w}<th class="num"><a href={"#/week/" + w.id}>{w.date.slice(8)}.{w.date.slice(5, 7)}</a></th>{/each}{/if}
        </tr>
      </thead>
      <tbody>
        {#each t.rows as r (r.teamId)}
          {@const counted = new Set([...r.results].sort((a, b) => b.points - a.points).slice(0, Number(c.bestN) || 999).map(x => x.weekId))}
          <tr>
            <td class="place" class:p1={r.place === 1}>{r.place}</td>
            <td><a href={"#/team/" + r.teamId}>{r.name}</a></td>
            <td class="num"><strong>{fmt(r.score)}</strong></td>
            <td class="num">{r.played}</td>
            <td class="num">{r.wins || ""}</td>
            <td class="num">{r.podiums || ""}</td>
            <td class="num">{fmt(Math.round(r.avgPlace * 10) / 10)}</td>
            <td class="num">{r.best}</td>
            {#if showWeeks}
              {#each weeks as w}
                {@const x = r.results.find(y => y.weekId === w.id)}
                <td class="num" class:dim={x && !counted.has(w.id)} title={x ? `Place ${x.place}` : "Did not play"}>{x ? fmt(x.points) : ""}</td>
              {/each}
            {/if}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  {#if showWeeks && Number(c.bestN)}<p class="small muted">Greyed-out nights are not among the team's best {c.bestN} and don't count.</p>{/if}
{/if}

<style>
  .head { align-items: end; margin-bottom: 8px; }
  .head p { margin: 0; max-width: 60ch; }
  .flush { padding: 0; }
  .dim { opacity: .4; text-decoration: line-through; }
</style>
