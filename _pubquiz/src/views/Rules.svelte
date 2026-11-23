<script>
  import { cfg } from "../lib/store.svelte.js";
  import { seasonPoints, fmt } from "../lib/calc.js";

  let c = $derived(cfg());
  let best = $derived(Number(c.bestN) || 0);
  let min = $derived(Number(c.minNights) || 0);
  // Example: what each place is worth on a 30-team night
  const N = 30;
  let example = $derived([1, 2, 3, 10, 15, 20, 30].map(place => ({ place, pts: seasonPoints({ place, total: 0 }, N, c) })));
</script>

<div class="rules">
  <h1>Rules</h1>
  <p class="muted">How quiz nights and the season table work.</p>

  <section class="panel">
    <h2>Quiz night</h2>
    <ul>
      <li>Every night has <strong>Round 1</strong> (two categories), <strong>Round 2</strong> and the <strong>Picture quiz</strong>. Your score for the night is the total of all of them.</li>
      <li>Teams can have any number of players, but teams with more than <strong>{c.penaltyFrom}</strong> players lose <strong>{fmt(c.penaltyPer)} points per extra player</strong>. For example, {c.penaltyFrom + 2} players means −{fmt(2 * c.penaltyPer)}.</li>
      <li>Teams with the same total share the place (1, 2, 2, 4…).</li>
      <li>Use the same team name every week, so your results build up. Sign up with the QR code on the table; it suggests your name if you've played before.</li>
    </ul>
  </section>

  <section class="panel">
    <h2>Season points</h2>
    {#if c.seasonMode === "raw"}
      <p>Your season points for a night are your total score that night.</p>
    {:else if c.seasonMode === "placement"}
      <p>Each night you get one point for every team you beat, plus one. The winner of a 30-team night gets 30.</p>
    {:else}
      <p>Each night you get points for how much of the field you finished ahead of:</p>
      <p class="formula">100 × (teams that night − your place + 1) ÷ teams that night</p>
      <p>The winner always gets 100, whether 20 or 40 teams play. That way a busy night is worth the same as a quiet one.</p>
    {/if}
    {#if c.seasonMode !== "raw"}
      <table class="ex">
        <caption class="small muted">Example: a night with {N} teams</caption>
        <thead><tr><th>Place</th>{#each example as e}<th class="num">{e.place}</th>{/each}</tr></thead>
        <tbody><tr><td>Points</td>{#each example as e}<td class="num">{fmt(e.pts)}</td>{/each}</tr></tbody>
      </table>
    {/if}
  </section>

  <section class="panel">
    <h2>The season table</h2>
    <ul>
      <li>There are two seasons a year: <strong>Spring</strong> (January–June) and <strong>Autumn</strong> (August–December). There's also a table for the whole year.</li>
      {#if best}
        <li>Only your <strong>best {best} nights</strong> count. If you miss a few nights (exams, illness, travel), you can still win; if you play more, your weakest nights are dropped.</li>
      {:else}
        <li>Every night you play counts.</li>
      {/if}
      {#if min}
        <li>To <strong>win the season</strong> (or a season prize), a team must play <strong>at least {min} nights</strong>. Teams with fewer are still shown in the table, but can't win.</li>
      {/if}
      <li>Ties in the table are decided by: 1) most wins, 2) most top-3 finishes, 3) best average place.</li>
    </ul>
  </section>

  <section class="panel">
    <h2>Team PIN (optional)</h2>
    <p>On a quiz night, right after signing up with the QR code, you can set a PIN for your team. After that, signing up under your team name needs the PIN, so nobody else can sign up as you. Forgot it? Ask the quizmaster.</p>
  </section>

  <p class="small muted">The quizmaster has the final say on answers and scores. Spotted a mistake in your score? Tell the quizmaster on the night.</p>
</div>

<style>
  .rules { max-width: 720px; }
  section { margin-bottom: 12px; }
  section h2 { margin-top: 0; }
  ul { margin: 0; padding-left: 1.2em; display: grid; gap: 6px; }
  .formula { font-family: var(--mono); background: var(--accent-soft); padding: 6px 10px; border-radius: 6px; display: inline-block; }
  .ex { width: auto; margin-top: 6px; }
  .ex caption { text-align: left; caption-side: top; padding-bottom: 4px; }
</style>
