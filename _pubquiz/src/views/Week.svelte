<script>
  import { S, cfg } from "../lib/store.svelte.js";
  import { weekResults, fmt, seasonOf } from "../lib/calc.js";

  let { id } = $props();
  let week = $derived(S.weeks[id]);
  let c = $derived(cfg());
  let cats = $derived(week?.categories || []);
  let rows = $derived(week ? weekResults(week, S.teams, c) : []);
  let best = $derived(Object.fromEntries(cats.map(k => [k.id, Math.max(...rows.map(r => r.s[k.id] ?? -Infinity))])));
  let people = $derived(rows.reduce((t, r) => t + (r.members || 0), 0));
  let avg = $derived(rows.length ? rows.reduce((t, r) => t + r.total, 0) / rows.length : 0);
  let hasPenalty = $derived(rows.some(r => r.penalty));
  let incomplete = $derived(rows.filter(r => !r.complete).length);
</script>

{#if !week}
  <p class="muted">This quiz night doesn't exist. <a href="#/">Back</a></p>
{:else}
  <div class="row head">
    <div>
      <h1>{new Date(week.date + "T12:00").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</h1>
      <div class="muted small">{seasonOf(week.date)}{week.title ? " · " + week.title : ""}</div>
    </div>
    <span class="spacer"></span>
    {#if S.admin}<a class="btn primary" href={"#/week/" + id + "/enter"}>Enter scores</a>{/if}
  </div>

  {#if rows.length}
    <p class="small muted">
      {rows.length} teams{people ? ` · ${people} players · ${fmt(Math.round((rows.reduce((t, r) => t + r.total, 0) / people) * 100) / 100)} points per player` : ""} · average {fmt(Math.round(avg * 100) / 100)} per team
      {#if incomplete} · <span class="err">{incomplete} teams missing some scores</span>{/if}
    </p>
    <div class="scroll panel flush">
      <table>
        <thead>
          <tr>
            <th>#</th><th>Team</th>
            {#each cats as k}<th class="num" title={k.round}>{k.name}</th>{/each}
            {#if hasPenalty}<th class="num">Penalty</th>{/if}
            <th class="num">Total</th>
            <th class="num" title={c.seasonMode === "raw" ? "Season points = total score" : "Season points = teams beaten + 1"}>Season pts</th>
          </tr>
        </thead>
        <tbody>
          {#each rows as r (r.teamId)}
            <tr>
              <td class="place" class:p1={r.place === 1}>{r.place}</td>
              <td><a href={"#/team/" + r.teamId}>{r.name}</a>{#if r.members}<span class="muted small"> · {r.members}</span>{/if}</td>
              {#each cats as k}<td class="num" class:top={r.s[k.id] != null && r.s[k.id] === best[k.id]}>{fmt(r.s[k.id]) || "–"}</td>{/each}
              {#if hasPenalty}<td class="num pen">{r.penalty ? "−" + fmt(r.penalty) : ""}</td>{/if}
              <td class="num"><strong>{fmt(r.total)}</strong></td>
              <td class="num muted">{fmt(r.points)}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <p class="small muted">Bold = best in that category tonight. The number after a team name is how many players it had{hasPenalty ? `; teams over ${c.penaltyFrom} players lose ${c.penaltyPer} points per extra player` : ""}.</p>
  {:else}
    <p class="muted">No scores yet.</p>
  {/if}
{/if}

<style>
  .head { align-items: end; margin-bottom: 8px; }
  .flush { padding: 0; }
  td.top { font-weight: 700; color: var(--good); }
  .pen { color: var(--bad); }
</style>
