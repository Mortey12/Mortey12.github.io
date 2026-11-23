<script>
  import { S, api, save, mergeTeams, createTeam, findTeamByName } from "../lib/store.svelte.js";
  import { norm, matchTeams } from "../lib/calc.js";

  let q = $state("");
  let newName = $state("");
  let msg = $state("");
  let mergeFrom = $state(null);
  let mergeQ = $state("");

  let usage = $derived.by(() => {
    const u = {};
    for (const w of Object.values(S.weeks)) for (const tid of Object.keys(w.teams || {})) {
      const x = (u[tid] ||= { n: 0, last: "" });
      if (Object.keys(w.teams[tid].s || {}).length) x.n++;
      if (w.date > x.last) x.last = w.date;
    }
    return u;
  });
  let list = $derived(Object.entries(S.teams)
    .map(([id, t]) => ({ id, ...t, n: usage[id]?.n || 0, last: usage[id]?.last || "" }))
    .filter(t => !q || [t.name, ...(t.aliases || [])].some(x => norm(x).includes(norm(q))))
    .sort((a, b) => a.name.localeCompare(b.name, "nb")));
  // Pairs of teams whose names look alike, as merge candidates
  let mergeHits = $derived(mergeFrom ? matchTeams(mergeQ || S.teams[mergeFrom]?.name, S.teams, new Set([mergeFrom])) : []);

  async function rename(t, v) {
    v = v.trim();
    if (!v || v === t.name) return;
    const other = findTeamByName(v);
    if (other && other !== t.id) { msg = `“${v}” is already used by another team. Merge them instead.`; return; }
    const aliases = [...new Set([...(t.aliases || []), t.name])].filter(x => norm(x) !== norm(v));
    await save(() => api.updateTeam(t.id, { name: v, aliases }));
    msg = `Renamed to ${v}. The old name is kept as an alias.`;
  }
  async function add(e) {
    e.preventDefault();
    const v = newName.trim();
    if (!v) return;
    if (findTeamByName(v)) { msg = `${v} already exists.`; return; }
    await createTeam(v); newName = ""; msg = `Added ${v}.`;
  }
  async function doMerge(into) {
    const a = S.teams[mergeFrom], b = S.teams[into];
    if (!confirm(`Merge “${a.name}” into “${b.name}”? All of ${a.name}'s results move to ${b.name}, and “${a.name}” becomes an alias.`)) return;
    try { await mergeTeams(mergeFrom, into); msg = `Merged ${a.name} into ${b.name}.`; mergeFrom = null; mergeQ = ""; }
    catch (e) { msg = e.message; }
  }
  async function del(t) {
    if (!confirm(`Delete ${t.name} from the register?`)) return;
    await save(() => api.deleteTeam(t.id));
  }
</script>

<div class="row head">
  <div>
    <h1>Teams</h1>
    <p class="small muted">{Object.keys(S.teams).length} teams in the register. Names carry over from week to week.</p>
  </div>
  <span class="spacer"></span>
  <input placeholder="Search" bind:value={q} aria-label="Search teams" />
</div>

{#if S.admin}
  <form class="row add" onsubmit={add}>
    <input placeholder="New team name" bind:value={newName} />
    <button>Add team</button>
    <span class="small muted">Same team under two names? Use “Merge” on the misspelt one.</span>
  </form>
{/if}
{#if msg}<p class="small ok">{msg}</p>{/if}

{#if mergeFrom}
  <div class="panel merge">
    <strong>Merge “{S.teams[mergeFrom]?.name}” into…</strong>
    <input placeholder="Search for the team to keep" bind:value={mergeQ} />
    <div class="row">
      {#each mergeHits as h}<button onclick={() => doMerge(h.id)}>{h.name}</button>{:else}<span class="muted small">No similar names; search above.</span>{/each}
      <button class="ghost" onclick={() => { mergeFrom = null; mergeQ = ""; }}>Cancel</button>
    </div>
  </div>
{/if}

<div class="panel flush scroll">
  <table>
    <thead><tr><th>Team</th><th class="num">Nights</th><th>Last played</th>{#if S.admin}<th></th>{/if}</tr></thead>
    <tbody>
      {#each list as t (t.id)}
        <tr>
          <td>
            {#if S.admin}
              <input class="name" value={t.name} onchange={e => rename(t, e.target.value)} aria-label="Team name" />
              <a class="small" href={"#/team/" + t.id}>stats</a>
            {:else}
              <a href={"#/team/" + t.id}>{t.name}</a>
            {/if}
            {#if t.aliases?.length}<div class="small muted">aka {t.aliases.join(", ")}</div>{/if}
          </td>
          <td class="num">{t.n}</td>
          <td class="small">{t.last}</td>
          {#if S.admin}
            <td class="row acts">
              <button class="small" onclick={() => { mergeFrom = t.id; mergeQ = ""; scrollTo({ top: 0, behavior: "smooth" }); }}>Merge…</button>
              {#if !usage[t.id]}<button class="small danger" onclick={() => del(t)}>Delete</button>{/if}
            </td>
          {/if}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .head { align-items: end; margin-bottom: 10px; }
  .head p { margin: 0; }
  .add { margin-bottom: 10px; }
  .merge { display: grid; gap: 8px; margin-bottom: 12px; }
  .flush { padding: 0; }
  .name { width: min(320px, 60vw); }
  .acts { justify-content: flex-end; flex-wrap: nowrap; }
</style>
