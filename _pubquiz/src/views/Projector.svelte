<script>
  // Optional projector: run the screen (remote control + preview) and type in the night's questions.
  import { S, api, cfg, save } from "../lib/store.svelte.js";
  import { weekResults } from "../lib/calc.js";
  import { slidePlan, step } from "../lib/screen.js";
  import Stage from "./screen/Stage.svelte";
  import Slide from "./screen/Slide.svelte";

  let { id } = $props();
  let week = $derived(S.weeks[id]);
  let cats = $derived(week?.categories || []);

  // ---------- questions (live from the database, edited in a local copy) ----------
  let questions = $state({});
  let draft = $state({});        // catId -> [{ q, a, img }]
  let dirty = false;
  let loaded = $state(false);    // never save before the stored questions have arrived (it would overwrite them)
  $effect(() => {
    if (!S.admin) return;
    loaded = false;
    return api.listenQuestions(id, v => {
      questions = v || {};
      // Copy from the plain data (structuredClone can't copy Svelte's reactive proxies)
      if (!dirty) draft = JSON.parse(JSON.stringify((v && v.cats) || {}));
      loaded = true;
    }, () => {});
  });
  let timer;
  function changed() {
    if (!loaded) return;
    dirty = true;
    clearTimeout(timer);
    timer = setTimeout(async () => {
      const clean = Object.fromEntries(Object.entries(draft).map(([k, list]) => [k, list.map(x => ({ q: x.q || "", a: x.a || "", ...(x.img ? { img: x.img } : {}) }))]));
      try { await save(() => api.setQuestions(id, { cats: clean })); } finally { dirty = false; }
    }, 600);
  }
  // Read back through draft so we push into the reactive array, not the plain one just assigned
  const list = cid => { if (!draft[cid]) draft[cid] = []; return draft[cid]; };
  function addQ(cid) { list(cid).push({ q: "", a: "" }); changed(); }
  function delQ(cid, i) { draft[cid].splice(i, 1); changed(); }
  function moveQ(cid, i, d) { const l = draft[cid], j = i + d; if (j < 0 || j >= l.length) return; [l[i], l[j]] = [l[j], l[i]]; changed(); }
  let paste = $state({});
  function addPasted(cid) {
    const lines = (paste[cid] || "").split(/\r?\n/).map(s => s.trim()).filter(Boolean);
    for (const line of lines) {
      const [q, ...rest] = line.split("|");
      list(cid).push({ q: q.trim(), a: rest.join("|").trim() });
    }
    paste[cid] = ""; changed();
  }
  let openCat = $state("");

  // ---------- running the screen ----------
  let live = $derived(S.screen || {});
  let mine = $derived(live.weekId === id);
  let plan = $derived(slidePlan(week, questions));
  let teamCount = $derived(week ? weekResults(week, S.teams, cfg()).length : 0);
  let current = $derived(plan.find(p => p.k === live.k));
  const set = state => save(() => api.setScreen({ ...state, weekId: id }));
  const goTo = k => set({ k, shown: 0 });
  const move = dir => set(step(mine ? live : { k: "welcome" }, dir, plan, teamCount));
  function key(e) {
    const t = e.target;
    if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT") return;
    if (["ArrowRight", "PageDown"].includes(e.key)) { e.preventDefault(); move(1); }
    if (["ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); move(-1); }
  }
  const groups = ["Start", "Questions", "Answers", "End"];
  const screenUrl = location.origin + location.pathname + location.search + "#/screen";
</script>

<svelte:window onkeydown={key} />

{#if !S.admin}
  <p>Sign in as a score keeper or admin to use the projector.</p>
{:else if !week}
  <p class="muted">This quiz night doesn't exist. <a href="#/">Back</a></p>
{:else}
  <div class="row head">
    <h1>Projector</h1>
    <span class="muted">{week.date}</span>
    <span class="spacer"></span>
    <a class="btn" href={"#/week/" + id + "/enter"}>← Score entry</a>
  </div>

  <section class="panel run">
    <div class="ctl">
      <p class="small muted">On the computer connected to the projector, open <a href={screenUrl} target="_blank" rel="noopener">{screenUrl.replace(/^https?:\/\//, "")}</a>, sign in as a score keeper (so questions can be shown) and press <b>F</b> for full screen. Then control it from here, from your phone, or with the arrow keys or a clicker on that computer.</p>
      {#if !mine}
        <button class="primary big" onclick={() => set({ k: "welcome", shown: 0 })}>Show this night on the screen</button>
        {#if live.weekId}<p class="small muted">The screen is showing another night right now.</p>{/if}
      {:else}
        <div class="now">Showing: <strong>{current?.label || (live.k === "break" ? "Break" : live.k === "blank" ? "Blank screen" : "—")}</strong>
          {#if live.k === "reveal"}<span class="muted"> · {live.shown || 0} of {teamCount} teams revealed</span>{/if}</div>
        <div class="row nav">
          <button class="big" onclick={() => move(-1)}>← Back</button>
          <button class="big primary" onclick={() => move(1)}>{live.k === "reveal" && (live.shown || 0) < teamCount ? "Reveal next →" : "Next →"}</button>
        </div>
        <div class="row quick">
          <button onclick={() => goTo("welcome")}>Welcome</button>
          <button onclick={() => goTo("break")}>Break</button>
          <button onclick={() => goTo("reveal")}>Results</button>
          <button onclick={() => goTo("season")}>Season table</button>
          <button onclick={() => goTo("blank")}>Blank</button>
        </div>
        <label class="small">Jump to
          <select value={live.k} onchange={e => goTo(e.target.value)}>
            {#each groups as g}
              <optgroup label={g}>{#each plan.filter(p => p.group === g) as p}<option value={p.k}>{p.label}</option>{/each}</optgroup>
            {/each}
            <option value="break">Break</option><option value="blank">Blank screen</option>
          </select>
        </label>
      {/if}
    </div>
    <div class="preview">
      <Stage><Slide {week} {questions} k={mine ? live.k : "welcome"} shown={mine ? live.shown || 0 : 0} /></Stage>
      <div class="small muted">Preview{mine ? "" : " (not on the screen yet)"}</div>
    </div>
  </section>

  <section class="panel">
    <h2>Questions</h2>
    <p class="small muted">Only score keepers and admins can see these. Leave a category empty if you don't want its questions on the screen; its title and answers slides are skipped too. Changes save by themselves.</p>
    {#if !loaded}<p class="muted">Loading questions…</p>{/if}
    {#each loaded ? cats : [] as c (c.id)}
      {@const n = (draft[c.id] || []).length}
      <details class="cat" open={openCat === c.id} ontoggle={e => { if (e.target.open) openCat = c.id; }}>
        <summary><strong>{c.name}</strong> <span class="muted small">{n} {n === 1 ? "question" : "questions"}</span></summary>
        {#each draft[c.id] || [] as item, i}
          <div class="q">
            <span class="num">{i + 1}</span>
            <textarea rows="2" placeholder="Question" bind:value={item.q} oninput={changed}></textarea>
            <input placeholder="Answer" bind:value={item.a} oninput={changed} />
            <input class="img" placeholder="Picture link (optional)" bind:value={item.img} oninput={changed} />
            <span class="acts">
              <button class="ghost small" title="Move up" onclick={() => moveQ(c.id, i, -1)}>↑</button>
              <button class="ghost small" title="Move down" onclick={() => moveQ(c.id, i, 1)}>↓</button>
              <button class="ghost small danger" title="Delete" onclick={() => delQ(c.id, i)}>×</button>
            </span>
          </div>
        {/each}
        <div class="row add">
          <button class="small" onclick={() => addQ(c.id)}>+ Add question</button>
        </div>
        <div class="paste">
          <textarea rows="3" placeholder={"Or paste many, one per line:\nWhat is the capital of Norway? | Oslo"} bind:value={paste[c.id]}></textarea>
          <button class="small" disabled={!(paste[c.id] || "").trim()} onclick={() => addPasted(c.id)}>Add pasted questions</button>
        </div>
      </details>
    {/each}
  </section>
{/if}

<style>
  .head { align-items: baseline; margin-bottom: 10px; }
  .run { display: grid; grid-template-columns: minmax(280px, 1fr) minmax(300px, 1.2fr); gap: 20px; align-items: start; margin-bottom: 14px; }
  .ctl { display: grid; gap: 10px; }
  .ctl p { margin: 0; }
  .now { font-size: 1.05rem; }
  .big { padding: 12px 18px; font-size: 1.05rem; justify-content: center; }
  .nav .big { flex: 1; }
  .quick { flex-wrap: wrap; gap: 6px; }
  .preview { display: grid; gap: 4px; }
  .preview :global(.box) { aspect-ratio: 16 / 9; height: auto; border-radius: 8px; }
  .cat { border-top: 1px solid var(--line); padding: 8px 0; }
  .cat summary { cursor: pointer; padding: 4px 0; }
  .q { display: grid; grid-template-columns: 2em 2fr 1fr auto; gap: 6px; align-items: start; margin: 6px 0; }
  .q .num { padding-top: 8px; color: var(--muted); text-align: right; }
  .q .img { grid-column: 2 / 4; font-size: .85rem; }
  .q .acts { display: flex; gap: 2px; grid-row: 1; grid-column: 4; }
  .paste { display: grid; gap: 6px; margin-top: 8px; max-width: 640px; }
  textarea { font: inherit; resize: vertical; }
  @media (max-width: 760px) {
    .run { grid-template-columns: 1fr; }
    .q { grid-template-columns: 1.6em 1fr auto; }
    .q input:not(.img) { grid-column: 2 / 3; }
    .q .img { grid-column: 2 / 3; }
  }
</style>
