<script>
  import { S, api, save } from "../lib/store.svelte.js";
  import { parseScore } from "../lib/calc.js";

  let { weekId, categories } = $props();
  let rounds = $derived([...new Set(categories.map(c => c.round))]);
  // Category names used in earlier weeks, so the same name is reused and stats line up
  let knownNames = $derived([...new Set(Object.values(S.weeks).flatMap(w => (w.categories || []).map(c => c.name)))].sort());

  const write = list => save(() => api.updateWeek(weekId, { categories: list }));
  function patch(i, field, value) {
    const list = categories.map(c => ({ ...c }));
    if (field === "max") { const v = parseScore(value); if (v == null || v === undefined) delete list[i].max; else list[i].max = v; }
    else list[i][field] = value.trim() || list[i][field];
    write(list);
  }
  function move(i, d) {
    const list = categories.map(c => ({ ...c }));
    const j = i + d;
    if (j < 0 || j >= list.length) return;
    [list[i], list[j]] = [list[j], list[i]];
    write(list);
  }
  function removeCat(i) {
    const c = categories[i];
    const used = Object.values(S.weeks[weekId]?.teams || {}).some(e => e.s?.[c.id] != null);
    if (used && !confirm(`“${c.name}” has scores this week. Remove the category? (Its scores stop counting.)`)) return;
    write(categories.filter((_, k) => k !== i).map(x => ({ ...x })));
  }
  function addCat() {
    const id = "k" + Math.random().toString(36).slice(2, 8);
    write([...categories.map(c => ({ ...c })), { id, name: "New category", round: rounds.at(-1) || "Round 1" }]);
  }
</script>

<div class="panel cats">
  <p class="small muted">Categories carry over to the next quiz night. Keep a name the same from week to week so the category stats line up.
    Several categories with the same round are summed into a round total. Max is optional (only used to flag typos).</p>
  <datalist id="pq-rounds">{#each rounds as r}<option value={r}></option>{/each}</datalist>
  <datalist id="pq-catnames">{#each knownNames as n}<option value={n}></option>{/each}</datalist>
  <table>
    <thead><tr><th>Category</th><th>Round</th><th class="num">Max</th><th></th></tr></thead>
    <tbody>
      {#each categories as c, i (c.id)}
        <tr>
          <td><input list="pq-catnames" value={c.name} onchange={e => patch(i, "name", e.target.value)} aria-label="Category name" /></td>
          <td><input list="pq-rounds" value={c.round} onchange={e => patch(i, "round", e.target.value)} aria-label="Round" /></td>
          <td class="num"><input class="max" inputmode="decimal" value={c.max ?? ""} onchange={e => patch(i, "max", e.target.value)} aria-label="Max points" /></td>
          <td class="row">
            <button class="ghost" title="Move up" onclick={() => move(i, -1)} disabled={i === 0}>↑</button>
            <button class="ghost" title="Move down" onclick={() => move(i, 1)} disabled={i === categories.length - 1}>↓</button>
            <button class="ghost danger" title="Remove" onclick={() => removeCat(i)}>×</button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <button class="small" onclick={addCat}>+ Add category</button>
</div>

<style>
  .cats { margin-bottom: 12px; }
  .cats input { width: 100%; min-width: 120px; }
  .cats input.max { width: 4.5em; min-width: 0; text-align: right; }
  .cats td { padding: 4px; }
</style>
