<script>
  import { tick } from "svelte";
  import { S, api, cfg, save, setScore, setField, addTeamToWeek, removeTeamFromWeek, createTeam, findTeamByName, setSignupOpen, processSignup, mergeTeams } from "../lib/store.svelte.js";
  import { weekResults, parseScore, fmt, penalty, matchTeams, norm, signupLive, signupCloses } from "../lib/calc.js";
  import { go } from "../lib/router.svelte.js";
  import RoundsEditor from "./RoundsEditor.svelte";
  import Marking from "./Marking.svelte";

  let { id } = $props();
  let week = $derived(S.weeks[id]);
  let cats = $derived(week?.categories || []);
  let c = $derived(cfg());

  // Preferences kept per browser
  const pref = (k, d) => { try { return localStorage.getItem("pq-" + k) ?? d; } catch { return d; } };
  const setPref = (k, v) => { try { localStorage.setItem("pq-" + k, v); } catch {} };
  let mode = $state(pref("mode", "grid"));        // "grid" = the full table, "mark" = search a team, it disappears when done
  $effect(() => setPref("mode", mode));
  let dir = $state(pref("dir", "down"));          // Enter moves down a column or right along a row
  let only = $state("all");                         // show all columns or a single one (phones)
  let showAdjust = $state(false);
  let showCats = $state(false);
  $effect(() => setPref("dir", dir));
  $effect(() => { if (week && Object.values(week.teams || {}).some(e => e.adjust)) showAdjust = true; });

  // Columns in the grid: members, every category, optional manual adjustment
  let allCols = $derived([
    { key: "members", label: "Members", kind: "members" },
    ...cats.map(k => ({ key: k.id, label: k.name, sub: k.round !== k.name ? k.round : "", kind: "score", max: k.max })),
    ...(showAdjust ? [{ key: "adjust", label: "Extra −", kind: "adjust" }] : [])
  ]);
  let cols = $derived(only === "all" ? allCols : allCols.filter(x => x.key === only));

  let rows = $derived(Object.keys(week?.teams || {})
    .map(tid => ({ tid, name: S.teams[tid]?.name || "(deleted team)", e: week.teams[tid] }))
    .sort((a, b) => a.name.localeCompare(b.name, "nb")));
  let results = $derived(week ? Object.fromEntries(weekResults(week, S.teams, c).map(r => [r.teamId, r])) : {});
  let filled = $derived(Object.fromEntries(cats.map(k => [k.id, rows.filter(r => r.e.s?.[k.id] != null).length])));

  // ---------- cell editing ----------
  let drafts = $state({});
  let bad = $state({});
  const ck = (tid, col) => tid + "|" + col;
  function stored(r, col) {
    if (col.kind === "members") return r.e.members ?? null;
    if (col.kind === "adjust") return r.e.adjust ?? null;
    return r.e.s?.[col.key] ?? null;
  }
  const shown = (r, col) => drafts[ck(r.tid, col.key)] ?? fmt(stored(r, col));

  function commit(r, col) {
    const k = ck(r.tid, col.key);
    if (!(k in drafts)) return true;
    let v = parseScore(drafts[k]);
    if (v === undefined || (col.kind === "members" && v != null && (v < 0 || !Number.isInteger(v)))) { bad[k] = true; return false; }
    delete bad[k];
    delete drafts[k];
    if (v === stored(r, col)) return true;
    if (col.kind === "score") setScore(id, r.tid, col.key, v).catch(() => {});
    else setField(id, r.tid, col.key, v).catch(() => {});
    return true;
  }

  let lastCol = $state(1);
  function focusCell(ri, ci) {
    const el = document.querySelector(`[data-cell="${ri}-${ci}"]`);
    if (el) { el.focus(); el.select(); }
  }
  function onKey(ev, ri, ci) {
    const r = rows[ri], col = cols[ci];
    const k = ev.key;
    const move = (dr, dc) => {
      ev.preventDefault();
      if (!commit(r, col)) return;
      let nr = ri + dr, nc = ci + dc;
      if (nr >= rows.length) { nr = 0; nc = ci + 1; }
      if (nr < 0) { nr = rows.length - 1; nc = ci - 1; }
      if (nc >= cols.length) { nc = 0; nr = Math.min(ri + 1, rows.length - 1); if (dr) nr = 0; }
      if (nc < 0) { nc = cols.length - 1; }
      focusCell(nr, nc);
    };
    if (k === "Enter") return dir === "down" ? move(ev.shiftKey ? -1 : 1, 0) : move(0, ev.shiftKey ? -1 : 1);
    if (k === "ArrowDown") return move(1, 0);
    if (k === "ArrowUp") return move(-1, 0);
    const el = ev.currentTarget, all = el.selectionStart === 0 && el.selectionEnd === el.value.length;
    if (k === "ArrowRight" && (all || el.selectionStart === el.value.length)) return move(0, 1);
    if (k === "ArrowLeft" && (all || el.selectionEnd === 0)) return move(0, -1);
    if (k === "Escape") { delete drafts[ck(r.tid, col.key)]; delete bad[ck(r.tid, col.key)]; el.blur(); }
  }

  // ---------- jump to team ( / or Ctrl+K ) ----------
  let jumpQ = $state("");
  let jumpEl = $state();
  let jumpHits = $derived.by(() => {
    const k = norm(jumpQ);
    if (!k) return [];
    const starts = rows.filter(r => norm(r.name).startsWith(k));
    const inc = rows.filter(r => !starts.includes(r) && norm(r.name).includes(k));
    return [...starts, ...inc].slice(0, 6);
  });
  function onGlobalKey(ev) {
    const t = ev.target;
    const typing = t.tagName === "INPUT" && !t.dataset.cell || t.tagName === "TEXTAREA" || t.tagName === "SELECT";
    if ((ev.key === "/" && !typing) || ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === "k")) {
      ev.preventDefault();
      jumpEl?.focus(); jumpEl?.select();
    }
  }
  function jumpTo(r) {
    const ri = rows.indexOf(r);
    jumpQ = "";
    focusCell(ri, Math.min(lastCol, cols.length - 1));
  }
  function jumpKey(ev) {
    if (ev.key === "Enter" && jumpHits[0]) { ev.preventDefault(); jumpTo(jumpHits[0]); }
    if (ev.key === "Escape") { jumpQ = ""; jumpEl.blur(); }
  }

  // ---------- add teams ----------
  let addQ = $state("");
  let addSel = $state(-1);
  let addEl = $state();
  let addMsg = $state("");
  let inWeek = $derived(new Set(Object.keys(week?.teams || {})));
  let addHits = $derived(matchTeams(addQ, S.teams, inWeek));
  $effect(() => { addSel = addHits[0]?.score === 100 ? 0 : -1; });

  async function addName(name) {
    name = name.trim();
    if (!name) return;
    let tid = findTeamByName(name);
    if (tid && inWeek.has(tid)) { addMsg = `${S.teams[tid].name} is already in this week.`; return; }
    if (!tid) tid = await createTeam(name);
    await addTeamToWeek(id, tid);
    addMsg = `Added ${S.teams[tid]?.name || name}.`;
  }
  async function addKey(ev) {
    if (ev.key === "ArrowDown") { ev.preventDefault(); addSel = Math.min(addSel + 1, addHits.length - 1); }
    else if (ev.key === "ArrowUp") { ev.preventDefault(); addSel = Math.max(addSel - 1, -1); }
    else if (ev.key === "Enter") {
      ev.preventDefault();
      const hit = addHits[addSel];
      const q = addQ; addQ = "";
      if (hit) { await addTeamToWeek(id, hit.id); addMsg = `Added ${hit.name}.`; }
      else await addName(q);
    } else if (ev.key === "Escape") addQ = "";
  }
  async function addPaste(ev) {
    const text = ev.clipboardData?.getData("text") || "";
    if (!text.includes("\n")) return;
    ev.preventDefault();
    const names = text.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
    for (const n of names) await addName(n);
    addMsg = `Added ${names.length} teams from the pasted list.`;
  }
  async function remove(r) {
    const has = Object.keys(r.e.s || {}).length;
    if (has && !confirm(`Remove ${r.name} and its scores from this week?`)) return;
    await removeTeamFromWeek(id, r.tid);
  }

  // ---------- QR sign-up ----------
  // Re-check every minute, so the panel shows "closed" once the automatic closing time passes
  let now = $state(Date.now());
  $effect(() => { const t = setInterval(() => (now = Date.now()), 60e3); return () => clearInterval(t); });
  let expired = $derived(!!week?.date && now >= signupCloses(week.date));
  let live = $derived(signupLive(week, now));
  let closesText = $derived(week?.date ? new Date(signupCloses(week.date)).toLocaleString("en-GB", { weekday: "short", hour: "2-digit", minute: "2-digit" }) : "");
  let signupLog = $state([]);
  const handling = new Set();
  $effect(() => {
    if (!S.admin || !api || !S.hasPinReady) return; // wait for the PIN markers, so PIN teams are always checked
    const weekId = id;
    return api.listenSignups(weekId, async list => {
      const items = Object.entries(list).sort((a, b) => String(a[1].created).localeCompare(String(b[1].created)));
      for (const [sid, s] of items) {
        if (handling.has(sid)) continue;
        handling.add(sid);
        try {
          const r = await processSignup(weekId, sid, s);
          if (r?.held) signupLog = [{ ...r, similar: [], at: new Date() }, ...signupLog].slice(0, 30);
          else if (r) {
            const similar = r.isNew ? matchTeams(r.name, S.teams, new Set([r.tid])).filter(h => h.score < 100).slice(0, 2) : [];
            signupLog = [{ ...r, similar, at: new Date() }, ...signupLog].slice(0, 30);
          }
        } catch (e) { handling.delete(sid); }
      }
    }, () => {});
  });
  // A sign-up for a team with a PIN that skipped the PIN check: the quizmaster decides
  async function acceptHeld(entry) {
    try {
      const r = await processSignup(id, entry.sid, entry.signup, { force: true });
      Object.assign(entry, r, { held: false, accepted: true }); signupLog = [...signupLog];
    } catch (e) { alert(e.message); }
  }
  async function rejectHeld(entry) {
    try { await api.deleteSignup(entry.sid); entry.held = false; entry.rejected = true; signupLog = [...signupLog]; }
    catch (e) { alert(e.message); }
  }
  async function mergeSignup(entry, into) {
    if (!confirm(`Use the existing team “${S.teams[into].name}” instead of the new “${entry.name}”?`)) return;
    try { await mergeTeams(entry.tid, into); entry.similar = []; entry.merged = S.teams[into].name; signupLog = [...signupLog]; }
    catch (e) { alert(e.message); }
  }

  // ---------- week details ----------
  async function setMeta(field, v) { await save(() => api.updateWeek(id, { [field]: v })); }
  async function useProjector() { await setMeta("projector", true); go("week/" + id + "/projector"); }
  async function del() {
    if (!confirm(`Delete the quiz night ${week.date} with all its scores? This cannot be undone.`)) return;
    await save(() => api.deleteWeek(id));
    go("");
  }
</script>

<svelte:window onkeydown={onGlobalKey} />

{#if !S.admin}
  <p>You need to sign in with an account that has edit access. <a href={"#/week/" + id}>See the results instead →</a></p>
{:else if !week}
  <p class="muted">This quiz night doesn't exist (anymore). <a href="#/">Back</a></p>
{:else}
  <div class="head row">
    <div>
      <h1>Enter scores</h1>
      <div class="row small">
        <input type="date" value={week.date} onchange={e => e.target.value && setMeta("date", e.target.value)} aria-label="Date" />
        <input placeholder="Title (optional)" value={week.title || ""} onchange={e => setMeta("title", e.target.value.trim())} aria-label="Title" />
      </div>
    </div>
    <span class="spacer"></span>
    <button onclick={() => (showCats = !showCats)}>{showCats ? "Hide rounds" : "Edit rounds"}</button>
    <a class="btn" href={"#/week/" + id + "/print"}>Print sheets</a>
    <!-- Projector is chosen per night: off until someone wants it for this quiz -->
    {#if week.projector}<a class="btn" href={"#/week/" + id + "/projector"}>Projector</a>
    {:else}<button class="ghost" title="Use a projector screen for this quiz night: questions, answers and a results reveal" onclick={useProjector}>+ Projector</button>{/if}
    <a class="btn primary" href={"#/week/" + id}>See results</a>
  </div>

  <div class="modes row">
    <button class:primary={mode === "mark"} onclick={() => (mode = "mark")}>Marking: one team at a time</button>
    <button class:primary={mode === "grid"} onclick={() => (mode = "grid")}>Full table</button>
  </div>

  {#if mode === "grid"}
  <div class="tools row">
    <div class="jump">
      <input bind:this={jumpEl} bind:value={jumpQ} onkeydown={jumpKey} placeholder="Jump to team…  ( / )" aria-label="Jump to team" autocomplete="off" />
      {#if jumpHits.length}
        <ul class="pop">{#each jumpHits as r}<li><button onmousedown={e => { e.preventDefault(); jumpTo(r); }}>{r.name}</button></li>{/each}</ul>
      {/if}
    </div>
    <label class="small">Show
      <select bind:value={only}>
        <option value="all">All columns</option>
        {#each allCols as col}<option value={col.key}>{col.label}</option>{/each}
      </select>
    </label>
    <label class="small">Enter moves
      <select bind:value={dir}><option value="down">down (one category at a time)</option><option value="right">right (one team at a time)</option></select>
    </label>
    <label class="small"><input type="checkbox" bind:checked={showAdjust} /> Extra deductions</label>
  </div>
  {/if}

  <div class="signup panel" class:open={live}>
    <div class="row">
      <strong>QR sign-up</strong>
      <span class="small">{live ? `Open: teams can sign up now (closes by itself ${closesText})` : expired ? "Closed (it closes by itself the morning after the quiz)" : "Closed"}</span>
      <span class="spacer"></span>
      <a class="btn small" href="#/qr" target="_blank" rel="noopener">Show QR code</a>
      {#if live || week.signupOpen}
        <button class="small" onclick={() => setSignupOpen(id, false)}>Close sign-up</button>
      {:else if !expired}
        <button class="small primary" onclick={() => setSignupOpen(id, true)}>Open sign-up</button>
      {/if}
    </div>
    {#if signupLog.length}
      <ul class="log small">
        {#each signupLog as l (l.sid)}
          <li>
            <strong>{S.teams[l.tid]?.name || l.merged || l.name}</strong> · {l.members || "?"} players
            {#if l.held}
              <span class="err">🔒 this team has a PIN, but the sign-up didn't include it</span>
              <button class="small" onclick={() => acceptHeld(l)}>Add anyway</button>
              <button class="small ghost danger" onclick={() => rejectHeld(l)}>Reject</button>
            {:else if l.rejected}
              <span class="muted">rejected</span>
            {:else}
              <span class="muted">{l.merged ? `→ merged into ${l.merged}` : l.accepted ? "added by you" : l.isNew ? "new team" : l.already ? "updated" : "returning team"}</span>
            {/if}
            {#each (S.fullAdmin ? l.similar : []) as h}<button class="small chip" onclick={() => mergeSignup(l, h.id)}>Same as {h.name}?</button>{/each}
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  {#if showCats}
    <section class="panel roundsed">
      <RoundsEditor categories={cats} onsave={list => save(() => api.updateWeek(id, { categories: list }))}
        hasScores={cid => rows.some(r => r.e.s?.[cid] != null)}
        intro="Each round is scored once. Themes are the headings and lines on the printed answer sheet and the question groups on the projector. Changes here only affect this night; the normal setup for new nights is under Admin → New quiz nights." />
    </section>
  {/if}

  {#if mode === "mark"}
    <Marking weekId={id} {rows} {cats} />
  {:else}
  <div class="scroll panel gridwrap">
    <table class="grid">
      <thead>
        <tr>
          <th class="team">Team <span class="muted">({rows.length})</span></th>
          {#each cols as col}
            <th class="num">
              <div>{col.label}</div>
              <div class="sub">{col.kind === "score" ? `${filled[col.key] ?? 0}/${rows.length}` : col.kind === "members" ? `>${c.penaltyFrom} = −${c.penaltyPer} each` : "points"}{col.sub ? " · " + col.sub : ""}</div>
            </th>
          {/each}
          <th class="num">Total</th>
          <th class="num">#</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {#each rows as r, ri (r.tid)}
          {@const res = results[r.tid]}
          <tr>
            <td class="team"><a href={"#/team/" + r.tid} tabindex="-1">{r.name}</a></td>
            {#each cols as col, ci}
              {@const k = ck(r.tid, col.key)}
              <td class="cell">
                <input
                  data-cell={`${ri}-${ci}`}
                  class:bad={bad[k]}
                  class:over={col.max && stored(r, col) > col.max}
                  inputmode={col.kind === "members" ? "numeric" : "decimal"}
                  enterkeyhint="next"
                  autocomplete="off"
                  value={shown(r, col)}
                  oninput={e => (drafts[k] = e.target.value)}
                  onfocus={e => { lastCol = ci; e.target.select(); }}
                  onblur={() => commit(r, col)}
                  onkeydown={e => onKey(e, ri, ci)}
                  aria-label={`${r.name} – ${col.label}`}
                />
              </td>
            {/each}
            <td class="num total">{res ? fmt(res.total) : ""}{#if res && penalty(r.e, c)}<span class="pen" title="Penalty"> (−{fmt(penalty(r.e, c))})</span>{/if}</td>
            <td class="num muted">{res ? res.place : ""}</td>
            <td><button class="ghost x" tabindex="-1" title="Remove from this week" onclick={() => remove(r)}>×</button></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  {/if}

  <div class="add">
    <input bind:this={addEl} bind:value={addQ} onkeydown={addKey} onpaste={addPaste}
      placeholder="Add team — type a name and press Enter (or paste a list)" aria-label="Add team" autocomplete="off" />
    {#if addQ.trim()}
      <ul class="pop up">
        {#each addHits as h, i}
          <li><button class:sel={i === addSel} onmousedown={async e => { e.preventDefault(); addQ = ""; await addTeamToWeek(id, h.id); addMsg = `Added ${h.name}.`; addEl.focus(); }}>{h.name} <span class="muted small">{h.score === 100 ? "registered team" : "similar name"}</span></button></li>
        {/each}
        <li><button class:sel={addSel === -1} onmousedown={async e => { e.preventDefault(); const q = addQ; addQ = ""; await addName(q); addEl.focus(); }}>
          {findTeamByName(addQ) ? "Add" : "Create new team"} “{addQ.trim()}”</button></li>
      </ul>
    {/if}
    <div class="small muted">{addMsg || "↑/↓ choose a suggestion. Teams without any scores are left out of the results."}</div>
  </div>

  <details class="help small muted">
    <summary>Keyboard</summary>
    <p><kbd>Enter</kbd> save and go to the next team (or next column, see “Enter moves”), <kbd>Shift</kbd>+<kbd>Enter</kbd> back.
      Arrow keys move between cells. <kbd>/</kbd> or <kbd>Ctrl</kbd>+<kbd>K</kbd> jumps to a team in the current column. <kbd>Esc</kbd> undoes a cell you're typing in.
      Decimals with comma or dot (7,5). Clear a cell to remove the score.</p>
  </details>

  {#if S.fullAdmin}<p class="small"><button class="danger small" onclick={del}>Delete this quiz night</button></p>{/if}
{/if}

<style>
  .head { align-items: end; margin-bottom: 12px; }
  .tools { margin: 0 0 10px; }
  .modes { margin: 0 0 10px; }
  .roundsed { margin-bottom: 12px; max-width: 760px; }
  .jump { position: relative; }
  .jump input { width: 230px; }
  .pop { position: absolute; z-index: 10; list-style: none; margin: 4px 0 0; padding: 4px; background: var(--panel); border: 2px solid var(--edge); border-radius: 10px; min-width: 100%; box-shadow: 4px 4px 0 var(--shadow); }
  .pop.up { bottom: 100%; margin-bottom: 4px; }
  .pop button { width: 100%; justify-content: flex-start; border: 0; text-align: left; }
  .pop button.sel { background: var(--accent-soft); }
  .gridwrap { padding: 0; }
  .grid th, .grid td { padding: 3px 6px; }
  .grid th { vertical-align: bottom; position: sticky; top: 0; background: var(--panel); }
  .grid .sub { font-weight: 400; text-transform: none; letter-spacing: 0; }
  .team { position: sticky; left: 0; background: var(--panel); z-index: 1; min-width: 150px; max-width: 240px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  tbody tr:nth-child(even) .team { background: var(--row-alt); }
  .team a { color: var(--ink); }
  .grid { width: auto; }
  .gridwrap { width: fit-content; max-width: 100%; }
  .cell { text-align: right; }
  .grid th.num { min-width: 5.5em; }
  .cell input { width: 4.6em; text-align: right; padding: 5px 7px; font-variant-numeric: tabular-nums; }
  .cell input.bad { border-color: var(--bad); background: color-mix(in srgb, var(--bad) 12%, var(--input)); }
  .cell input.over { border-color: var(--gold); }
  .total { font-weight: 700; }
  .pen { font-weight: 400; color: var(--bad); font-size: .85em; }
  .x { padding: 2px 8px; color: var(--muted); }
  .add { position: relative; margin-top: 10px; max-width: 520px; display: grid; gap: 4px; }
  .help { margin-top: 18px; }
  .signup { margin-bottom: 10px; padding: 8px 12px; }
  .signup.open { border-color: var(--good); }
  .log { list-style: none; margin: 8px 0 0; padding: 0; display: grid; gap: 4px; max-height: 160px; overflow-y: auto; }
  .chip { padding: 1px 8px; border-radius: 99px; margin-left: 4px; }
  @media (max-width: 600px) {
    .cell input { width: 4em; font-size: 16px; padding: 7px 6px; }
    .team { min-width: 110px; max-width: 140px; }
    .jump input { width: 100%; }
    .jump { flex: 1 1 100%; }
  }
</style>
