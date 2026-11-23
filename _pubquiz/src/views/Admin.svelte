<script>
  import { S, api, cfg, save, importOld, importedSummary, removeImported } from "../lib/store.svelte.js";
  import importData from "../lib/import-haust2026.json";
  import { isDemo } from "../lib/backend.js";

  let c = $derived(cfg());
  let email = $state("");
  let msg = $state("");
  let busy = $state(false);

  const setNum = (k, v) => { const n = Number(String(v).replace(",", ".")); if (Number.isFinite(n) && n >= 0) save(() => api.setConfig({ [k]: n })); };
  async function addAccess(e) {
    e.preventDefault();
    const v = email.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(v)) return;
    await save(() => api.addAccess(v)); email = "";
  }
  async function removeAccess(e) {
    if (e === S.user?.email?.toLowerCase() && !confirm("Remove your own access?")) return;
    await save(() => api.removeAccess(e));
  }
  let imported = $derived(importedSummary());
  const dayMonth = d => new Date(d + "T12:00").toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  async function doRemove() {
    const { weeks, teams } = imported;
    if (!confirm(`Delete ${weeks.length} imported quiz nights and ${teams.length} imported teams that have no other results? Nights and teams added in the app are kept. This cannot be undone (but you can import again).`)) return;
    busy = true; msg = "";
    try { const r = await removeImported(); msg = `Removed ${r.weeks} quiz nights and ${r.teams} teams.`; }
    catch (e) { msg = e.message; }
    finally { busy = false; }
  }
  async function doImport() {
    busy = true; msg = "";
    try {
      const r = await importOld(importData);
      msg = `Imported ${r.weeks} quiz nights and ${r.teams} new teams${r.skipped ? ` (${r.skipped} skipped: a night with that date already exists)` : ""}. Check Teams for names that should be merged.`;
    } catch (e) { msg = e.message; }
    finally { busy = false; }
  }
</script>

{#if !S.admin}
  <p class="muted">Admins only.</p>
{:else}
  <h1>Admin</h1>

  <div class="grid2">
    <section class="panel">
      <h2>Scoring</h2>
      <div class="form">
        <label>Penalty starts above <input type="number" min="0" value={c.penaltyFrom} onchange={e => setNum("penaltyFrom", e.target.value)} /> players</label>
        <label>Penalty per extra player <input type="number" min="0" step="0.5" value={c.penaltyPer} onchange={e => setNum("penaltyPer", e.target.value)} /> points</label>
        <label>Season points
          <select value={c.seasonMode} onchange={e => save(() => api.setConfig({ seasonMode: e.target.value }))}>
            <option value="field">Share of the field: winner 100, middle ~50</option>
            <option value="placement">By placing: teams beaten + 1</option>
            <option value="raw">Raw total score</option>
          </select>
        </label>
        <label>Count each team's best <input type="number" min="0" value={c.bestN} onchange={e => setNum("bestN", e.target.value)} /> nights (0 = all)</label>
        <label>Must play at least <input type="number" min="0" value={c.minNights} onchange={e => setNum("minNights", e.target.value)} /> nights to win the season (0 = no minimum)</label>
      </div>
      <p class="small muted">Changes apply to every week, past ones too, since totals are computed from the raw scores. Set these before the semester starts, so the rules don't change mid-season. With about 20 nights in spring: best 13, at least 8. Autumn has about 16: best 11, at least 6.</p>
    </section>

    <section class="panel">
      <h2>Who can enter scores</h2>
      {#if isDemo}<p class="small muted">Demo mode: access isn't checked.</p>{/if}
      <p class="small muted"><strong>quiz@samfunnetibergen.no</strong> and every <strong>[role].quiz@samfunnetibergen.no</strong> account can always edit; those don't need to be listed here.</p>
      <ul class="access">
        {#each Object.keys(S.access).sort() as e}
          <li class="row"><span>{e}</span><span class="spacer"></span><button class="small ghost danger" onclick={() => removeAccess(e)}>Remove</button></li>
        {/each}
      </ul>
      <form class="row" onsubmit={addAccess}>
        <input type="email" placeholder="Google account email" bind:value={email} />
        <button>Give access</button>
      </form>
      <p class="small muted">They sign in with “Quizmaster sign-in” using that Google account. Everyone else can only view.</p>
    </section>

    <section class="panel">
      <h2>Import the old spreadsheet</h2>
      <p class="small">Adds the quiz nights of {importData.map(w => dayMonth(w.dato)).reverse().join(", ")} 2026 from “SCOREBOARD FOR QUIZ” (Round 1, Round 2, Picture quiz and penalties). Dates that already exist are skipped. 3 Nov isn't included: that sheet has no scores.</p>
      <div class="row">
        <button onclick={doImport} disabled={busy}>{busy ? "Working…" : `Import ${importData.length} quiz nights`}</button>
        {#if imported.weeks.length || imported.teams.length}
          <button class="danger" onclick={doRemove} disabled={busy}>Remove imported data ({imported.weeks.length} nights, {imported.teams.length} teams)</button>
        {/if}
      </div>
      {#if msg}<p class="small">{msg}</p>{/if}
    </section>

    {#if isDemo}
      <section class="panel">
        <h2>Demo</h2>
        <p class="small muted">Demo data is stored only in this browser.</p>
        <button class="danger" onclick={() => confirm("Wipe all demo data?") && api.resetDemo()}>Reset demo data</button>
      </section>
    {/if}
  </div>
{/if}

<style>
  .form { display: grid; gap: 10px; }
  .form input { width: 5em; }
  .access { list-style: none; padding: 0; margin: 0 0 10px; display: grid; gap: 4px; }
</style>
