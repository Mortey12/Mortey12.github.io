<script>
  import { S, api, cfg, save, importOld, importedSummary, removeImported } from "../lib/store.svelte.js";
  import importData from "../lib/import-haust2026.json";
  import { isDemo } from "../lib/backend.js";
  import { DEFAULT_TEMPLATE } from "../lib/calc.js";
  import RoundsEditor from "./RoundsEditor.svelte";

  let c = $derived(cfg());
  let email = $state("");
  let role = $state("scorer");
  const roleOf = e => (S.access[e]?.role === "scorer" ? "scorer" : "admin");
  // Score keepers may add and remove score keepers only
  const canRemove = e => S.fullAdmin || roleOf(e) === "scorer";
  let msg = $state("");
  let busy = $state(false);

  const setNum = (k, v) => { const n = Number(String(v).replace(",", ".")); if (Number.isFinite(n) && n >= 0) save(() => api.setConfig({ [k]: n })); };
  async function addAccess(e) {
    e.preventDefault();
    const v = email.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(v)) return;
    await save(() => api.addAccess(v, S.fullAdmin ? role : "scorer")); email = "";
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
  <p class="muted">Admins and score keepers only.</p>
{:else}
  <h1>{S.fullAdmin ? "Admin" : "Access"}</h1>

  <div class="grid2">
    {#if S.fullAdmin}
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

    {/if}

    {#if S.fullAdmin}
    <section class="panel wide2">
      <h2>New quiz nights</h2>
      <RoundsEditor categories={c.template?.length ? c.template : DEFAULT_TEMPLATE} onsave={list => save(() => api.setConfig({ template: list }))}
        intro="The normal setup every new quiz night starts with. One score per round; themes give the headings and lines on the printed answer sheet. A single night can still be changed on its score entry page (Edit rounds) without changing this." />
      {#if c.template?.length}<p class="small"><button class="ghost small" onclick={() => confirm("Go back to the built-in setup (Round 1, Round 2, Picture quiz with the usual themes)?") && save(() => api.setConfig({ template: [] }))}>Reset to the built-in setup</button></p>{/if}
    </section>
    {/if}

    <section class="panel">
      <h2>Who can enter scores</h2>
      {#if isDemo}<p class="small muted">Demo mode: access isn't checked.</p>{/if}
      <p class="small muted"><strong>quiz@samfunnetibergen.no</strong> and every <strong>[role].quiz@samfunnetibergen.no</strong> account is always an admin; those don't need to be listed here.</p>
      <p class="small muted"><strong>Score keepers</strong> enter scores, create quiz nights, add teams, run QR sign-up and can add other score keepers. <strong>Admins</strong> can also change the scoring rules, give admin access, delete nights or teams, merge teams and remove PINs.</p>
      <ul class="access">
        {#each Object.keys(S.access).sort() as e}
          <li class="row">
            <span>{e}</span>
            <span class="tag small" class:adm={roleOf(e) === "admin"}>{roleOf(e) === "admin" ? "Admin" : "Score keeper"}</span>
            <span class="spacer"></span>
            {#if canRemove(e)}<button class="small ghost danger" onclick={() => removeAccess(e)}>Remove</button>{/if}
          </li>
        {/each}
      </ul>
      <form class="row" onsubmit={addAccess}>
        <input type="email" placeholder="Google account email" bind:value={email} />
        {#if S.fullAdmin}
          <select bind:value={role} aria-label="Role"><option value="scorer">Score keeper</option><option value="admin">Admin</option></select>
        {/if}
        <button>{S.fullAdmin ? "Give access" : "Add score keeper"}</button>
      </form>
      <p class="small muted">They sign in with “Quizmaster sign-in” using that Google account. Everyone else can only view.{S.fullAdmin ? " To change someone's role, remove them and add them again." : ""}</p>
    </section>

    {#if S.fullAdmin}
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
    {/if}

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
  .form { display: grid; grid-template-columns: minmax(0, 1fr); gap: 10px; }
  .form input { width: 5em; }
  /* Let long labels wrap and the select shrink, so nothing runs past the panel on phones */
  .form label { display: flex; flex-wrap: wrap; row-gap: 4px; }
  .form select { flex: 1 1 14em; max-width: 100%; }
  .wide2 { grid-column: 1 / -1; }
  .tag { padding: 0 8px; border-radius: 99px; background: var(--accent-soft); }
  .tag.adm { background: color-mix(in srgb, var(--gold) 30%, transparent); }
  .access { list-style: none; padding: 0; margin: 0 0 10px; display: grid; gap: 4px; }
</style>
