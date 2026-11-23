<script>
  // Printable answer sheets for one quiz night, built from the night's own rounds and themes, so
  // they follow along when those change. One round = one double-sided A4; the picture round gets
  // the picture sheet. Sponsors are kept once (pubConfig/sponsors) and printed on every page.
  import { S, api, save } from "../lib/store.svelte.js";
  import { roundsOf, sectionsOf } from "../lib/calc.js";
  import { shrinkImage } from "../lib/images.js";

  let { id } = $props();
  let week = $derived(S.weeks[id]);
  let cats = $derived(week?.categories || []);
  // Pages per round; each round's sections are its themes (or the round itself if it has none)
  let rounds = $derived(roundsOf(cats).map(r => ({ ...r, secs: sectionsOf(r.cats) })));

  let pics = $state({});
  $effect(() => {
    if (!S.admin) return;
    return api.listenPictures(id, v => (pics = v || {}), () => {});
  });
  let questions = $state({});
  $effect(() => {
    if (!S.admin) return;
    return api.listenQuestions(id, v => (questions = v || {}), () => {});
  });

  const isPicture = r => /picture|bilde/i.test(r.name) || r.cats.every(c => /picture|bilde/i.test(c.name));
  let answerRounds = $derived(rounds.filter(r => !isPicture(r)));
  let pictureRound = $derived(rounds.find(isPicture) || null);
  let answerSecs = $derived(answerRounds.flatMap(r => r.secs));

  // Lines and "Rød tråd" per section: from the theme, or (older nights without themes) saved on the night
  const opt = sec => {
    const saved = week?.sheet?.[sec.id] || {};
    const typed = questions?.cats?.[sec.id]?.length || 0;
    return { lines: saved.lines ?? sec.lines ?? (typed || 8), thread: saved.thread ?? sec.thread ?? false };
  };
  function setOpt(sec, patch) {
    if (sec.plain) return save(() => api.updateWeek(id, { [`sheet.${sec.id}`]: { ...opt(sec), ...patch } }));
    // A theme: change it on the night's rounds
    const list = JSON.parse(JSON.stringify(cats));
    const t = list.find(c => c.id === sec.catId)?.themes?.find(x => x.id === sec.id);
    if (!t) return;
    if ("lines" in patch) t.lines = patch.lines;
    if ("thread" in patch) { if (patch.thread) t.thread = true; else delete t.thread; }
    return save(() => api.updateWeek(id, { categories: list }));
  }
  // Sections numbered across the night ("Kategori 3"); default names like "Category 1" add nothing
  const secTitle = (sec, r) => {
    if (r.secs.length === 1 && sec.name === r.name) return "";
    const plainName = /^(category|kategori)\s*\d+$/i.test(sec.name.trim());
    return `Kategori ${answerSecs.indexOf(sec) + 1}` + (plainName ? "" : `: ${sec.name}`);
  };

  let showAnswers = $state(true);
  let showPicture = $state(true);
  // One round = one double-sided A4: sections split over front and back; a round that fits on one
  // side gets a blank back, so duplex printing never puts two rounds on one sheet.
  let duplex = $state(true);
  let pictures = $derived(pictureRound ? pictureRound.secs.flatMap(sec => questions?.cats?.[sec.id] || []).map(q => (q.pic ? pics[q.pic] || "" : q.img || "")) : []);
  let pictureCount = $derived(Math.max(pictureRound ? pictureRound.secs.reduce((n, sec) => n + (opt(sec).lines || 0), 0) : 0, pictures.length) || 10);
  let pages = $derived.by(() => {
    const out = [];
    if (showAnswers) for (const r of answerRounds) {
      if (!duplex) { out.push({ kind: "answer", r, secs: r.secs }); continue; }
      const half = Math.ceil(r.secs.length / 2);
      out.push({ kind: "answer", r, secs: r.secs.slice(0, half) });
      out.push(r.secs.length > 1 ? { kind: "answer", r, secs: r.secs.slice(half), back: true } : { kind: "blank", r });
    }
    if (showPicture && pictureRound) {
      // Front: the first half of the pictures, back: the rest (like the old sheet: 1–5 and 6–10)
      if (duplex) {
        const half = Math.ceil(pictureCount / 2);
        out.push({ kind: "picture", from: 0, to: half, big: true });
        out.push({ kind: "picture", from: half, to: pictureCount, big: true, back: true });
      } else out.push({ kind: "picture", from: 0, to: pictureCount });
    }
    return out;
  });
  let dateText = $derived(week ? new Date(week.date + "T12:00").toLocaleDateString("nb-NO", { day: "numeric", month: "long", year: "numeric" }) : "");

  // ---------- sponsors ----------
  let sponsors = $derived(S.sponsors || []);
  let newName = $state("");
  let busy = $state(false);
  let msg = $state("");
  // Save a plain copy: the list comes from reactive state, which the database layer can't clone
  const saveSponsors = list => save(() => api.setSponsors($state.snapshot(list)));
  async function addSponsor(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    busy = true; msg = "";
    try {
      const logo = await shrinkImage(file, { max: 600, maxH: 240, photo: false }); // logos stay small
      const list = [...sponsors, { name: newName.trim() || file.name.replace(/\.[^.]+$/, ""), logo }];
      if (JSON.stringify(list).length > 900000) { msg = "Too many or too large logos. Remove one first."; return; }
      await saveSponsors(list);
      newName = "";
    } catch { msg = "Couldn't read that picture. Try a PNG or JPG."; }
    finally { busy = false; }
  }
  const removeSponsor = i => saveSponsors(sponsors.filter((_, j) => j !== i));
  const moveSponsor = (i, d) => { const l = [...sponsors], j = i + d; if (j < 0 || j >= l.length) return; [l[i], l[j]] = [l[j], l[i]]; saveSponsors(l); };
</script>

{#if !S.admin}
  <p>Sign in as a score keeper or admin to print sheets.</p>
{:else if !week}
  <p class="muted">This quiz night doesn't exist. <a href="#/">Back</a></p>
{:else}
  <div class="noprint">
    <div class="row head">
      <h1>Print sheets</h1>
      <span class="muted">{week.date}</span>
      <span class="spacer"></span>
      <a class="btn" href={"#/week/" + id + "/enter"}>← Score entry</a>
      <button class="primary" onclick={() => print()}>Print</button>
    </div>

    <div class="grid2 setup">
      <section class="panel">
        <h2>What to print</h2>
        <label><input type="checkbox" bind:checked={showAnswers} /> Answer sheets ({answerRounds.length} {answerRounds.length === 1 ? "round" : "rounds"})</label><br />
        {#if pictureRound}<label><input type="checkbox" bind:checked={showPicture} /> Picture quiz sheet</label><br />{/if}
        <label><input type="checkbox" bind:checked={duplex} /> Double-sided: one sheet per round (front and back)</label>
        <table class="opts">
          <thead><tr><th>Theme</th><th class="num">Lines</th><th>Rød tråd lines</th></tr></thead>
          <tbody>
            {#each rounds as r}
              {#each r.secs as sec}
                <tr>
                  <td>{sec.name} <span class="muted small">{r.name}</span></td>
                  <td class="num"><input type="number" min="1" max="30" value={opt(sec).lines} onchange={e => setOpt(sec, { lines: Math.max(1, Math.min(30, Number(e.target.value) || 1)) })} aria-label={isPicture(r) ? "Pictures" : "Lines"} /></td>
                  <td>{#if !isPicture(r)}<input type="checkbox" checked={opt(sec).thread} onchange={e => setOpt(sec, { thread: e.target.checked })} aria-label="Rød tråd line" />{/if}</td>
                </tr>
              {/each}
            {/each}
          </tbody>
        </table>
        <p class="small muted">Built from tonight's rounds and themes: change them with “Edit rounds” on the score entry page, or the normal setup under Admin. For the picture quiz, Lines is the number of pictures.{pictureRound ? " Pictures come from the picture links on the Projector page." : ""}</p>
      </section>

      <section class="panel">
        <h2>Sponsors</h2>
        <p class="small muted">Printed at the bottom of every page. Kept for every night until you change them.</p>
        <ul class="sponsors">
          {#each sponsors as s, i}
            <li class="row">
              <img src={s.logo} alt="" />
              <span>{s.name}</span>
              <span class="spacer"></span>
              <button class="ghost small" title="Move left" onclick={() => moveSponsor(i, -1)}>↑</button>
              <button class="ghost small" title="Move right" onclick={() => moveSponsor(i, 1)}>↓</button>
              <button class="ghost small danger" onclick={() => removeSponsor(i)}>Remove</button>
            </li>
          {:else}
            <li class="muted small">No sponsors yet.</li>
          {/each}
        </ul>
        <div class="row">
          <input placeholder="Sponsor name" bind:value={newName} />
          <label class="btn small upload">{busy ? "Adding…" : "+ Add logo"}<input type="file" accept="image/*" onchange={addSponsor} disabled={busy} /></label>
        </div>
        {#if msg}<p class="small err">{msg}</p>{/if}
      </section>
    </div>
    <p class="small muted">Preview below. In the print dialog choose A4 and turn off “Headers and footers”.</p>
  </div>

  <div class="sheets">
    {#each pages as pg}
      {#if pg.kind === "answer"}
        <section class="sheet" class:back={pg.back}>
          <div class="top"><span class="team">Lagnavn / Team name:</span><span class="brand">Quiz på Kvarteret · {dateText}</span></div>
          <h2 class="round">{pg.r.name}{#if pg.back}<span class="side"> · side 2</span>{/if}</h2>
          {#each pg.secs as sec}
            {@const t = secTitle(sec, pg.r)}
            {#if t}<h3 class="cat">{t}</h3>{/if}
            <!-- With "Rød tråd", each item gets its own common-thread line, as on the old sheet -->
            <ol class="lines">
              {#each Array(opt(sec).lines) as _, i}
                <li><span class="n">{i + 1}.</span></li>
                {#if opt(sec).thread}<li class="thread">Rød tråd / Common thread:</li>{/if}
              {/each}
            </ol>
          {/each}
          {@render footer()}
        </section>
      {:else if pg.kind === "blank"}
        <section class="sheet blank">
          <div class="side-note">{pg.r.name} · back</div>
          {@render footer()}
        </section>
      {:else}
        <section class="sheet picture" class:big={pg.big}>
          <div class="top"><span class="team">Lagnavn / Team name:</span>{#if !pg.back}<span class="points">Points ► <span class="oval"></span></span>{/if}</div>
          <h2 class="round">Bildequiz / Picture quiz{#if pg.back}<span class="side"> · side 2</span>{/if}</h2>
          <div class="pics">
            {#each Array(pg.to - pg.from) as _, k}
              {@const i = pg.from + k}
              <div class="pic">
                <!-- The whole picture is shown (no cropping), so details aren't cut off -->
                <div class="box">{#if pictures[i]}<img src={pictures[i]} alt="" />{:else}<span class="q">?</span>{/if}<span class="no">{i + 1}</span></div>
                <div class="ans"></div>
              </div>
            {/each}
          </div>
          {@render footer()}
        </section>
      {/if}
    {/each}
  </div>
{/if}

{#snippet footer()}
  {#if sponsors.length}
    <div class="foot">
      <div class="thanks">Takk til våre snille sponsorer! · Thank you to our kind sponsors!</div>
      <div class="logos">{#each sponsors as s}<img src={s.logo} alt={s.name} />{/each}</div>
    </div>
  {/if}
{/snippet}

<style>
  .head { align-items: baseline; margin-bottom: 12px; }
  .setup { margin-bottom: 10px; }
  .opts { margin: 10px 0; }
  .opts input[type="number"] { width: 4.5em; }
  .sponsors { list-style: none; padding: 0; margin: 0 0 10px; display: grid; gap: 6px; }
  .sponsors img { height: 32px; max-width: 110px; object-fit: contain; background: #fff; border-radius: 4px; }
  .upload { position: relative; overflow: hidden; }
  .upload input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }

  /* A4 sheets: previewed on screen, printed one per page */
  .sheets { display: grid; gap: 24px; justify-content: center; margin-top: 12px; }
  .sheet {
    width: 210mm; min-height: 297mm; padding: 14mm 16mm; background: #fff; color: #111;
    box-shadow: 4px 4px 0 var(--shadow); border: 2px solid var(--edge); border-radius: 4px;
    display: flex; flex-direction: column; font-family: var(--head);
  }
  .top { display: flex; justify-content: space-between; align-items: flex-end; gap: 12mm; border-bottom: 2px solid #111; padding-bottom: 2mm; margin-bottom: 6mm; }
  .team { font-weight: 700; font-size: 13pt; flex: 1; }
  .brand { font: 500 8.5pt var(--mono); text-transform: uppercase; letter-spacing: .06em; color: #555; white-space: nowrap; }
  .round { font: 900 20pt/1 var(--head); text-transform: uppercase; margin: 0 0 4mm; letter-spacing: .01em; }
  .cat { font: 700 13pt/1.2 var(--head); margin: 4mm 0 1mm; }
  .lines { list-style: none; margin: 0; padding: 0; }
  .lines li { height: 8mm; border-bottom: 1px solid #888; display: flex; align-items: flex-end; padding-bottom: 1mm; }
  .lines .n { font-weight: 700; width: 9mm; font-size: 11pt; }
  .lines li.thread { height: 9mm; border-bottom: 1.5px solid #111; font-weight: 700; font-style: italic; font-size: 10.5pt; margin-bottom: 3mm; }

  .points { font-weight: 800; font-size: 13pt; display: inline-flex; align-items: center; gap: 3mm; }
  .oval { display: inline-block; width: 34mm; height: 13mm; border: 2px solid #111; border-radius: 50%; }
  .pics { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm 8mm; }
  .pic .box { position: relative; height: 29mm; border: 2px solid #111; border-radius: 3mm; display: flex; align-items: center; justify-content: center; overflow: hidden; }
  .pic .box { background: #f6f6f4; }
  .pic .box img { width: 100%; height: 100%; object-fit: contain; }
  /* Double-sided: five per side in bigger boxes */
  .big .pic .box { height: 54mm; }
  .big .pics { gap: 5mm 8mm; }
  .pic .q { font-size: 22pt; color: #bbb; font-weight: 700; }
  .pic .no { position: absolute; left: 0; top: 0; background: #111; color: #fff; font-weight: 800; font-size: 11pt; padding: .5mm 2.5mm; border-bottom-right-radius: 2mm; }
  .pic .ans { height: 8mm; border-bottom: 1px solid #888; }

  .side { font-weight: 600; font-size: 12pt; text-transform: none; color: #555; }
  .side-note { font: 500 8.5pt var(--mono); text-transform: uppercase; letter-spacing: .06em; color: #aaa; text-align: center; }
  .foot { margin-top: auto; padding-top: 6mm; text-align: center; }
  .thanks { font-weight: 700; font-size: 10.5pt; margin-bottom: 3mm; }
  .logos { display: flex; justify-content: center; align-items: center; gap: 8mm; flex-wrap: wrap; }
  .logos img { max-height: 16mm; max-width: 42mm; object-fit: contain; }

  @media print {
    @page { size: A4; margin: 0; }
    :global(header), .noprint { display: none !important; }
    :global(body) { background: #fff !important; }
    :global(main.wrap) { padding: 0 !important; max-width: none !important; }
    .sheets { display: block; margin: 0; }
    .sheet { box-shadow: none; border: 0; border-radius: 0; width: 210mm; min-height: 296mm; break-after: page; }
    .sheet:last-child { break-after: auto; }
  }
  @media (max-width: 860px) { .sheet { transform-origin: top left; zoom: .5; } }
</style>
