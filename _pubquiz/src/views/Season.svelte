<script>
  import { S, cfg } from "../lib/store.svelte.js";
  import { periods, seasonTable, fmt, weeksSorted, pointsRule, periodCfg } from "../lib/calc.js";
  import PeriodPicker from "./PeriodPicker.svelte";

  let c = $derived(periodCfg(cfg(), period));
  let list = $derived(periods(S.weeks));
  let { initial = "" } = $props();
  let pid = $state("");
  // #/season/2026-11 opens that period (used by the home page's month box)
  $effect.pre(() => { pid = initial; });
  let period = $derived(list.find(p => p.id === pid) || list[0]);
  let t = $derived(period ? seasonTable(S.weeks, S.teams, c, period.test) : { rows: [], weekCount: 0 });
  let weeks = $derived(period ? weeksSorted(S.weeks).filter(w => period.test(w.date)) : []);
  let showWeeks = $state(false);
  let min = $derived(Number(c.minNights) || 0);
  // Mark teams below the minimum only once someone has reached it, so early in the season nobody is greyed out
  let markUnq = $derived(min > 0 && t.anyQualified);
</script>

<div class="row head">
  <div>
    <h1>{period?.month ? "Month table" : "Season table"}</h1>
    <p class="muted small">
      Each quiz night {pointsRule(c)}.{#if period?.month}{" "}Every night this month counts.{/if}{#if Number(c.bestN)}{" "}Only each team's best {c.bestN} nights count.{/if}{#if min}{" "}To win the season a team must play at least {min} nights.{/if}{" "}
      <a href="#/rules">All rules →</a>
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
          {@const unq = markUnq && !r.qualified}
          <tr class:unq>
            <td class="place" class:p1={r.place === 1 && !unq}>{r.place}</td>
            <td><a href={"#/team/" + r.teamId}>{r.name}</a>{#if unq}<span class="small need" title="Nights needed to be eligible to win the season"> {min - r.played} more {min - r.played === 1 ? "night" : "nights"} to qualify</span>{/if}</td>
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
  {#if showWeeks && Number(c.bestN)}<p class="small muted">Crossed-out nights are not among the team's best {c.bestN} and don't count.</p>{/if}
  {#if markUnq}<p class="small muted">Greyed-out teams have played fewer than {min} nights and can't win the season yet.</p>{/if}
{/if}

<style>
  .head { align-items: end; margin-bottom: 8px; }
  .head p { margin: 0; max-width: 60ch; }
  .flush { padding: 0; }
  .dim { opacity: .4; text-decoration: line-through; }
  .unq td { opacity: .55; }
  .need { white-space: nowrap; margin-left: .5em; }
</style>
