<script>
  // Edits rounds (scored once each) and the themes inside them (headings and line counts on the
  // answer sheet, question groups on the projector). Used for one night and for the default setup.
  import { S } from "../lib/store.svelte.js";
  import { parseScore } from "../lib/calc.js";

  // categories: the rounds; onsave(list) stores a new list; hasScores(id) warns before removing
  let { categories, onsave, hasScores = () => false, intro = "" } = $props();
  let knownNames = $derived([...new Set(Object.values(S.weeks).flatMap(w => (w.categories || []).map(c => c.name)))].sort());

  const rid = p => p + Math.random().toString(36).slice(2, 8);
  const copy = () => JSON.parse(JSON.stringify(categories || []));
  const write = list => onsave(list);

  function setRound(i, field, value) {
    const list = copy(), c = list[i];
    if (field === "max") { const v = parseScore(value); if (v == null || v === undefined) delete c.max; else c.max = v; }
    else if (field === "name") {
      const name = value.trim(); if (!name) return;
      if (!c.round || c.round === c.name) c.round = name; // a round named after itself follows the rename
      c.name = name;
    }
    write(list);
  }
  function moveRound(i, d) { const list = copy(), j = i + d; if (j < 0 || j >= list.length) return; [list[i], list[j]] = [list[j], list[i]]; write(list); }
  function removeRound(i) {
    const c = categories[i];
    if (hasScores(c.id) && !confirm(`“${c.name}” has scores this night. Remove it? (Its scores stop counting.)`)) return;
    write(copy().filter((_, k) => k !== i));
  }
  function addRound() { const name = "Round " + (categories.length + 1); write([...copy(), { id: rid("k"), name, round: name, themes: [] }]); }

  function setTheme(i, j, field, value) {
    const list = copy(), t = list[i].themes[j];
    if (field === "lines") t.lines = Math.max(1, Math.min(30, Math.round(Number(value)) || 1));
    else if (field === "thread") { if (value) t.thread = true; else delete t.thread; }
    else { const v = value.trim(); if (!v) return; t.name = v; }
    write(list);
  }
  function moveTheme(i, j, d) { const list = copy(), th = list[i].themes, k = j + d; if (k < 0 || k >= th.length) return; [th[j], th[k]] = [th[k], th[j]]; write(list); }
  function removeTheme(i, j) { const list = copy(); list[i].themes.splice(j, 1); write(list); }
  function addTheme(i) { const list = copy(); (list[i].themes ||= []).push({ id: rid("t"), name: "New theme", lines: 8 }); write(list); }
</script>

<div class="rounds">
  {#if intro}<p class="small muted">{intro}</p>{/if}
  <datalist id="pq-catnames">{#each knownNames as n}<option value={n}></option>{/each}</datalist>
  {#each categories as c, i (c.id)}
    <div class="round">
      <div class="row rhead">
        <input class="rname" list="pq-catnames" value={c.name} onchange={e => setRound(i, "name", e.target.value)} aria-label="Round name" />
        <label class="small">Max <input class="max" inputmode="decimal" value={c.max ?? ""} onchange={e => setRound(i, "max", e.target.value)} aria-label="Max points" /></label>
        <span class="spacer"></span>
        <button class="ghost small" title="Move up" onclick={() => moveRound(i, -1)} disabled={i === 0}>↑</button>
        <button class="ghost small" title="Move down" onclick={() => moveRound(i, 1)} disabled={i === categories.length - 1}>↓</button>
        <button class="ghost small danger" title="Remove round" onclick={() => removeRound(i)}>×</button>
      </div>
      {#if c.themes?.length}
        <table class="themes">
          <thead><tr><th>Theme</th><th class="num">Lines</th><th>Rød tråd</th><th></th></tr></thead>
          <tbody>
            {#each c.themes as t, j (t.id)}
              <tr>
                <td><input value={t.name} onchange={e => setTheme(i, j, "name", e.target.value)} aria-label="Theme name" /></td>
                <td class="num"><input class="lines" type="number" min="1" max="30" value={t.lines} onchange={e => setTheme(i, j, "lines", e.target.value)} aria-label="Lines" /></td>
                <td><input type="checkbox" checked={!!t.thread} onchange={e => setTheme(i, j, "thread", e.target.checked)} aria-label="Rød tråd line under each item" /></td>
                <td class="row acts">
                  <button class="ghost small" title="Move up" onclick={() => moveTheme(i, j, -1)} disabled={j === 0}>↑</button>
                  <button class="ghost small" title="Move down" onclick={() => moveTheme(i, j, 1)} disabled={j === c.themes.length - 1}>↓</button>
                  <button class="ghost small danger" title="Remove theme" onclick={() => removeTheme(i, j)}>×</button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      {:else}
        <p class="small muted none">No themes: the answer sheet gets one numbered list for this round.</p>
      {/if}
      <button class="small" onclick={() => addTheme(i)}>+ Add theme</button>
    </div>
  {/each}
  <button onclick={addRound}>+ Add round</button>
</div>

<style>
  .rounds { display: grid; gap: 12px; }
  .rounds p { margin: 0; }
  .round { border: 2px solid var(--line); border-radius: 12px; padding: 10px 12px; display: grid; gap: 8px; justify-items: start; }
  .rhead { width: 100%; }
  .rname { font-weight: 700; flex: 1 1 12em; }
  .max { width: 4.5em; text-align: right; }
  .themes { width: 100%; }
  .themes td { padding: 3px 4px; }
  .themes input:not([type="checkbox"]) { width: 100%; min-width: 8em; }
  .themes input.lines { width: 4.5em; min-width: 0; }
  .acts { flex-wrap: nowrap; gap: 0; }
  .none { font-style: italic; }
</style>
