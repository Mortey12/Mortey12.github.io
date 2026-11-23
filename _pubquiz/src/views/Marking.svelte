<script>
  import { tick } from "svelte";
  import { setScore } from "../lib/store.svelte.js";
  import { parseScore, fmt, norm, roundsOf } from "../lib/calc.js";

  // Marking mode: search a team, type its scores for this pass, and it drops off the list.
  let { weekId, rows, cats } = $props();

  // Passes: the first round on its own, then the other rounds together (or any single round)
  let rounds = $derived(roundsOf(cats));
  let passes = $derived([
    ...(rounds.length > 1 ? [
      { key: "first", label: rounds[0].name, cats: rounds[0].cats },
      { key: "rest", label: rounds.slice(1).map(r => r.name).join(" + "), cats: rounds.slice(1).flatMap(r => r.cats) }
    ] : []),
    ...(rounds.length > 2 ? rounds.slice(1).map(r => ({ key: "r:" + r.name, label: r.name + " only", cats: r.cats })) : []),
    ...(rounds.length === 1 ? [{ key: "first", label: rounds[0].name, cats: rounds[0].cats }] : [])
  ]);
  let passKey = $state("first");
  let pass = $derived(passes.find(p => p.key === passKey) || passes[0]);
  let pcats = $derived(pass?.cats || []);

  const isDone = r => pcats.length > 0 && pcats.every(k => r.e.s?.[k.id] != null);
  let left = $derived(rows.filter(r => !isDone(r)));
  let finished = $derived(rows.filter(isDone));

  let q = $state("");
  let searchEl = $state();
  const matches = (list, k) => {
    if (!k) return list;
    const starts = list.filter(r => norm(r.name).startsWith(k));
    return [...starts, ...list.filter(r => !starts.includes(r) && norm(r.name).includes(k))];
  };
  let hits = $derived(matches(left, norm(q)));
  let doneHits = $derived(q.trim() ? matches(finished, norm(q)).slice(0, 3) : []);

  // The team being marked
  let sel = $state(null);       // tid
  let vals = $state({});        // catId -> typed text
  let bad = $state({});
  let flash = $state("");
  let selRow = $derived(rows.find(r => r.tid === sel));

  async function pick(r) {
    sel = r.tid;
    vals = Object.fromEntries(pcats.map(k => [k.id, fmt(r.e.s?.[k.id])]));
    bad = {}; q = "";
    await tick();
    const el = document.querySelector('[data-mark="0"]');
    el?.focus(); el?.select();
  }
  async function cancel() {
    sel = null; bad = {};
    await tick(); searchEl?.focus();
  }
  async function saveTeam() {
    const r = selRow;
    if (!r) return;
    const parsed = {};
    let ok = true;
    for (const k of pcats) {
      const v = parseScore(vals[k.id]);
      if (v === undefined) { bad[k.id] = true; ok = false; } else parsed[k.id] = v;
    }
    if (!ok) return;
    for (const k of pcats) if (parsed[k.id] !== (r.e.s?.[k.id] ?? null)) setScore(weekId, r.tid, k.id, parsed[k.id]).catch(() => {});
    const complete = pcats.every(k => parsed[k.id] != null);
    flash = complete
      ? `✓ ${r.name}: ${pcats.map(k => fmt(parsed[k.id])).join(" + ")}`
      : `${r.name} saved, but not every score is filled in, so it stays on the list.`;
    await cancel();
  }
  function fieldKey(ev, i) {
    if (ev.key === "Escape") { ev.preventDefault(); cancel(); return; }
    if (ev.key !== "Enter") return;
    ev.preventDefault();
    const k = pcats[i];
    if (parseScore(vals[k.id]) === undefined) { bad[k.id] = true; return; }
    delete bad[k.id];
    if (ev.shiftKey && i > 0) { document.querySelector(`[data-mark="${i - 1}"]`)?.focus(); return; }
    if (i < pcats.length - 1) { const el = document.querySelector(`[data-mark="${i + 1}"]`); el?.focus(); el?.select(); }
    else saveTeam();
  }
  function searchKey(ev) {
    if (ev.key === "Enter") { ev.preventDefault(); const h = hits[0] || doneHits[0]; if (h) pick(h); }
    if (ev.key === "Escape") q = "";
  }
  $effect(() => { passKey; sel = null; flash = ""; });
  $effect(() => { searchEl?.focus(); });
</script>

<section class="panel marking">
  <div class="row top">
    <label>Marking
      <select bind:value={passKey}>{#each passes as p}<option value={p.key}>{p.label}</option>{/each}</select>
    </label>
    <span class="spacer"></span>
    <span class="count"><strong>{left.length}</strong> of {rows.length} left</span>
  </div>
  <div class="bar"><div style:width={rows.length ? (100 * finished.length / rows.length) + "%" : "0"}></div></div>

  {#if selRow}
    <form class="card" onsubmit={e => { e.preventDefault(); saveTeam(); }}>
      <div class="row"><strong class="tname">{selRow.name}</strong><span class="spacer"></span><button type="button" class="ghost small" onclick={cancel}>Cancel (Esc)</button></div>
      <div class="fields">
        {#each pcats as k, i (k.id)}
          <label class:bad={bad[k.id]}>
            <span class="small">{k.name}{k.max ? ` (max ${k.max})` : ""}</span>
            <input data-mark={i} inputmode="decimal" enterkeyhint={i < pcats.length - 1 ? "next" : "done"} autocomplete="off"
              bind:value={vals[k.id]} onkeydown={e => fieldKey(e, i)} onfocus={e => e.target.select()}
              class:over={k.max && parseScore(vals[k.id]) > k.max} />
          </label>
        {/each}
        <button class="primary">Save</button>
      </div>
      <p class="small muted">Enter goes to the next box and saves after the last one. Shift+Enter goes back.</p>
    </form>
  {:else}
    <input class="search" bind:this={searchEl} bind:value={q} onkeydown={searchKey} autocomplete="off"
      placeholder="Type the team name on the sheet, then Enter" aria-label="Find team" />
    {#if flash}<p class="small flash">{flash}</p>{/if}
    {#if left.length === 0 && rows.length}
      <p class="ok">🎉 All {rows.length} teams are marked for {pass.label}.</p>
    {/if}
    <ul class="list">
      {#each hits as r, i (r.tid)}
        <li><button class:first={i === 0 && q.trim()} onclick={() => pick(r)}>{r.name}
          {#if pcats.some(k => r.e.s?.[k.id] != null)}<span class="muted small"> · partly done</span>{/if}</button></li>
      {/each}
      {#each doneHits as r (r.tid)}
        <li><button class="done" onclick={() => pick(r)}>✓ {r.name} <span class="small">already marked: edit</span></button></li>
      {/each}
    </ul>
    {#if q.trim() && !hits.length && !doneHits.length}<p class="small muted">No team on tonight's list matches. Add it below the table first.</p>{/if}
  {/if}

  {#if finished.length}
    <details class="fin">
      <summary class="small muted">Marked ({finished.length}): tap one to fix it</summary>
      <div class="chips">
        {#each finished as r (r.tid)}
          <button class="small chip" onclick={() => pick(r)}>{r.name} <span class="muted">{pcats.map(k => fmt(r.e.s?.[k.id])).join("+")}</span></button>
        {/each}
      </div>
    </details>
  {/if}
</section>

<style>
  .marking { display: grid; gap: 10px; max-width: 640px; margin-bottom: 12px; }
  .top label { font-weight: 600; display: flex; gap: 8px; align-items: center; }
  .count { font-size: 1.05rem; }
  .bar { height: 6px; background: var(--line); border-radius: 99px; overflow: hidden; }
  .bar div { height: 100%; background: var(--good); transition: width .3s; }
  .search { font-size: 18px; padding: 10px 12px; width: 100%; }
  .list { list-style: none; margin: 0; padding: 0; display: grid; gap: 4px; max-height: 50vh; overflow-y: auto; }
  .list button { width: 100%; justify-content: flex-start; text-align: left; padding: 8px 12px; }
  .list button.first { border-color: var(--accent); background: var(--accent-soft); }
  .list button.done { color: var(--muted); }
  .card { display: grid; gap: 8px; border: 2px solid var(--accent); border-radius: 10px; padding: 10px 12px; }
  .tname { font-size: 1.2rem; }
  .fields { display: flex; flex-wrap: wrap; gap: 10px; align-items: end; }
  .fields label { display: grid; gap: 2px; }
  .fields input { width: 6em; font-size: 20px; padding: 8px 10px; text-align: right; font-variant-numeric: tabular-nums; }
  .fields label.bad input { border-color: var(--bad); }
  .fields input.over { border-color: var(--gold); }
  .card p { margin: 0; }
  .flash { margin: 0; color: var(--good); }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
  .chip { border-radius: 99px; padding: 2px 10px; }
</style>
