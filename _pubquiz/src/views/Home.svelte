<script>
  import { S, cfg, createWeek, lastWeek } from "../lib/store.svelte.js";
  import { weeksSorted, weekResults, seasonOf, periods, seasonTable, matchTeams, fmt } from "../lib/calc.js";
  import { go } from "../lib/router.svelte.js";

  const today = new Date().toISOString().slice(0, 10);
  let date = $state(today);
  let copyTeams = $state(true);
  let busy = $state(false);
  let q = $state("");

  let weeks = $derived(weeksSorted(S.weeks).reverse().map(w => {
    const rows = weekResults(w, S.teams, cfg());
    return { ...w, n: rows.length, winners: rows.filter(r => r.place === 1).map(r => r.name), listed: Object.keys(w.teams || {}).length };
  }));
  let period = $derived(periods(S.weeks)[0]);
  let table = $derived(period ? seasonTable(S.weeks, S.teams, cfg(), period.test).rows.slice(0, 5) : []);
  let found = $derived(matchTeams(q, S.teams));

  async function create(e) {
    e.preventDefault();
    if (Object.values(S.weeks).some(w => w.date === date) && !confirm(`There is already a week on ${date}. Create another?`)) return;
    busy = true;
    try { const id = await createWeek(date, { copyTeams }); go(`week/${id}/enter`); }
    finally { busy = false; }
  }
</script>

<div class="grid2 top">
  <div>
    <h1>Weekly results</h1>
    <p class="muted">Every quiz night, newest first.</p>
  </div>
  <div class="panel find">
    <label for="find" class="small muted">Find your team</label>
    <input id="find" placeholder="Team name" bind:value={q} autocomplete="off" />
    {#if q}
      <ul class="hits">
        {#each found as t}<li><a href={"#/team/" + t.id}>{t.name}</a></li>{:else}<li class="muted small">No team found</li>{/each}
      </ul>
    {/if}
  </div>
</div>

{#if S.admin}
  <form class="panel row new" onsubmit={create}>
    <strong>New quiz night</strong>
    <input type="date" bind:value={date} required />
    {#if lastWeek()}
      <label class="small"><input type="checkbox" bind:checked={copyTeams} /> List last week's teams</label>
    {/if}
    <span class="spacer"></span>
    <button class="primary" disabled={busy}>Create and enter scores</button>
  </form>
{/if}

<div class="grid2">
  <section>
    <h2>Quiz nights</h2>
    {#if !weeks.length}
      <p class="muted">No quiz nights yet.{S.admin ? " Create one above, or import the old spreadsheet under Admin." : ""}</p>
    {/if}
    <ul class="weeks">
      {#each weeks as w (w.id)}
        <li class="panel">
          <a class="date" href={"#/week/" + w.id}>{new Date(w.date + "T12:00").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" })}</a>
          <span class="muted small">{seasonOf(w.date)}{w.title ? " · " + w.title : ""}</span>
          <div class="small">
            {#if w.n}{w.n} teams · Winner: <strong>{w.winners.join(" & ")}</strong>{:else}<span class="muted">No scores yet ({w.listed} teams listed)</span>{/if}
          </div>
          {#if S.admin}<a class="small enter" href={"#/week/" + w.id + "/enter"}>Enter scores →</a>{/if}
        </li>
      {/each}
    </ul>
  </section>
  <section>
    {#if period}
      <h2>{period.label} — top 5</h2>
      <table class="panel-table">
        <tbody>
          {#each table as r}
            <tr><td class="place" class:p1={r.place === 1}>{r.place}</td><td><a href={"#/team/" + r.teamId}>{r.name}</a></td><td class="num">{fmt(r.score)} pts</td></tr>
          {/each}
        </tbody>
      </table>
      <p><a href="#/season">Full season table →</a></p>
    {/if}
  </section>
</div>

<style>
  .top { align-items: end; }
  .find { display: grid; gap: 6px; position: relative; }
  .hits { list-style: none; margin: 0; padding: 0; display: grid; gap: 4px; }
  .new { margin: 16px 0 0; }
  .weeks { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
  .weeks li { display: grid; gap: 2px; position: relative; }
  .date { font-weight: 700; font-size: 1.05rem; }
  .enter { position: absolute; right: 14px; top: 14px; }
</style>
