<script>
  // One projector slide, drawn on the 1600 × 900 stage
  import QRCode from "qrcode";
  import { S, cfg } from "../../lib/store.svelte.js";
  import { weekResults, seasonTable, seasonOf, fmt } from "../../lib/calc.js";
  import { parseKey } from "../../lib/screen.js";

  let { week, questions, k, shown = 0, canSeeQuestions = true } = $props();

  let p = $derived(parseKey(k, week, questions));
  let results = $derived(week ? weekResults(week, S.teams, cfg()).slice().sort((a, b) => a.place - b.place || a.name.localeCompare(b.name, "nb")) : []);
  let signedUp = $derived(Object.keys(week?.teams || {}).length);
  let dateText = $derived(week ? new Date(week.date + "T12:00").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }) : "");

  const joinUrl = location.origin + location.pathname + location.search.replace(/[?&]role=scorer/, "") + "#/join";
  let qr = $state("");
  QRCode.toString(joinUrl, { type: "svg", margin: 1, errorCorrectionLevel: "M", color: { dark: "#111111", light: "#ffffff" } }).then(s => (qr = s));

  // Reveal from last place up: the last `shown` rows of the results
  let revealed = $derived(shown > 0 ? results.slice(Math.max(0, results.length - shown)) : []);
  let latest = $derived(revealed[0] || null);
  let allShown = $derived(results.length > 0 && shown >= results.length);
  const medal = place => (place === 1 ? "gold" : place === 2 ? "silver" : place === 3 ? "bronze" : "");

  let season = $derived(week ? seasonOf(week.date) : "");
  let table = $derived(week ? seasonTable(S.weeks, S.teams, cfg(), d => seasonOf(d) === season).rows.slice(0, 10) : []);

  // Long questions get smaller text so they always fit
  const qSize = t => { const n = (t || "").length; return n < 60 ? 76 : n < 120 ? 62 : n < 200 ? 50 : 40; };
</script>

{#if p.type === "welcome"}
  <div class="welcome">
    <div class="wl">
      <div class="kicker">Tonight</div>
      <h1 class="huge brandname">Quiz på<br />Kvarteret</h1>
      <div class="date">{dateText}</div>
      <div class="count">{signedUp} {signedUp === 1 ? "team" : "teams"} signed up</div>
    </div>
    <div class="wr">
      <div class="qr">{@html qr}</div>
      <div class="scan">Scan to sign up your team</div>
    </div>
  </div>

{:else if p.type === "title" && p.cat}
  <div class="center">
    <div class="kicker">{p.cat.round !== p.cat.name ? p.cat.round : "Next up"}</div>
    <h1 class="huge">{p.cat.name}</h1>
    {#if p.total}<div class="sub">{p.total} questions</div>{/if}
  </div>

{:else if p.type === "answers" && p.cat}
  <div class="center">
    <div class="kicker">Answers</div>
    <h1 class="huge">{p.cat.name}</h1>
    <div class="sub">Swap sheets with the team next to you</div>
  </div>

{:else if (p.type === "q" || p.type === "a") && p.cat}
  <div class="question">
    <div class="qhead"><span>{p.cat.name}</span><span class="qnum">Question {p.i + 1}<span class="of"> / {p.total}</span></span></div>
    {#if !canSeeQuestions}
      <div class="qbody"><p class="qtext" style:font-size="44px">Sign in as a score keeper on this screen to show the questions.</p></div>
    {:else if p.item}
      <div class="qbody" class:withimg={p.item.img}>
        <p class="qtext" style:font-size={(p.type === "a" ? Math.min(qSize(p.item.q), 52) : qSize(p.item.q)) + "px"}>{p.item.q}</p>
        {#if p.item.img}<img src={p.item.img} alt="" />{/if}
        {#if p.type === "a"}<p class="answer">{p.item.a || "—"}</p>{/if}
      </div>
    {/if}
  </div>

{:else if p.type === "break"}
  <div class="center">
    <h1 class="huge">Break</h1>
    <div class="sub">Back in a few minutes</div>
  </div>

{:else if p.type === "reveal"}
  {#if !results.length}
    <div class="center"><h1 class="huge">Results</h1><div class="sub">No scores yet</div></div>
  {:else if !latest}
    <div class="center">
      <div class="kicker">{dateText}</div>
      <h1 class="huge">Tonight's results</h1>
      <div class="sub">{results.length} teams</div>
    </div>
  {:else if allShown}
    <div class="final">
      <div class="kicker">Tonight's winners</div>
      <div class="podium">
        {#each results.filter(r => r.place <= 3) as r}
          <div class="pod {medal(r.place)}"><div class="pl">{r.place}</div><div class="nm">{r.name}</div><div class="pts">{fmt(r.total)} points</div></div>
        {/each}
      </div>
      <div class="rest">
        {#each results.filter(r => r.place > 3).slice(0, 24) as r}<span><b>{r.place}.</b> {r.name} <i>{fmt(r.total)}</i></span>{/each}
      </div>
    </div>
  {:else}
    <div class="reveal">
      <div class="card {medal(latest.place)}">
        <div class="pl">{latest.place}.</div>
        <div class="nm">{latest.name}</div>
        <div class="pts">{fmt(latest.total)}<small> points</small></div>
      </div>
      <!-- Up to 40 earlier teams fit; with many teams use four smaller columns -->
      <div class="list" class:many={revealed.length > 25}>
        {#each revealed.slice(1, 41) as r}<span class={medal(r.place)}><b>{r.place}.</b> {r.name} <i>{fmt(r.total)}</i></span>{/each}
      </div>
    </div>
  {/if}

{:else if p.type === "season"}
  <div class="season">
    <div class="kicker">Season table</div>
    <h1 class="mid">{season}</h1>
    <ol>
      {#each table as r}
        <li class={medal(r.place)}><b>{r.place}</b><span class="nm">{r.name}</span><span class="pts">{fmt(r.score)}</span><span class="n">{r.played} {r.played === 1 ? "night" : "nights"}</span></li>
      {/each}
    </ol>
  </div>

{:else}
  <div class="blank"></div>
{/if}

<style>
  .kicker { font-size: 34px; letter-spacing: .18em; text-transform: uppercase; color: #1d6b45; font-weight: 700; }
  .huge { font-size: 140px; line-height: .95; margin: 18px 0; font-weight: 900; letter-spacing: .005em; text-transform: uppercase; }
  .mid { font-size: 80px; margin: 6px 0 24px; font-weight: 900; }
  .sub { font-size: 44px; color: #3d3633; }
  .center { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 0 100px; }

  .welcome { position: absolute; inset: 0; display: grid; grid-template-columns: 1fr 560px; align-items: center; padding: 0 110px; gap: 60px; }
  .welcome .huge { font-size: 132px; }
  .date { font-size: 52px; color: #3d3633; }
  .count { margin-top: 40px; font-size: 40px; display: inline-block; background: #241d1b; color: #cfe2d6; padding: 10px 26px; border-radius: 99px; }
  .wr { text-align: center; }
  .qr { background: #fff; padding: 26px; border-radius: 26px; }
  .qr :global(svg) { display: block; width: 100%; height: auto; }
  .scan { font-size: 36px; margin-top: 22px; }

  .question { position: absolute; inset: 0; padding: 70px 110px; display: flex; flex-direction: column; }
  .qhead { display: flex; justify-content: space-between; font-size: 36px; color: #1d6b45; font-weight: 700; letter-spacing: .04em; }
  .qnum { color: #241d1b; }
  .of { color: #6b625e; }
  .qbody { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; gap: 30px; }
  .qtext { margin: 0; line-height: 1.2; font-weight: 700; max-width: 1350px; }
  .qbody img { max-height: 470px; max-width: 1200px; border-radius: 14px; object-fit: contain; }
  .answer { margin: 0; font-size: 92px; font-weight: 900; color: #1d6b45; line-height: 1.1; }

  .reveal { position: absolute; inset: 0; padding: 60px 90px; display: flex; flex-direction: column; gap: 40px; }
  .card { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 40px; background: #faf7f2; border: 4px solid #241d1b; box-shadow: 10px 10px 0 #241d1b; border-radius: 28px; padding: 40px 56px; animation: pop .5s ease-out; }
  .card .pl { font-size: 130px; font-weight: 900; }
  .card .nm { font-size: 96px; font-weight: 900; line-height: 1.05; }
  .card .pts { font-size: 70px; font-weight: 800; color: #1d6b45; white-space: nowrap; }
  .card .pts small { font-size: 34px; color: #3d3633; }
  .card.gold { background: linear-gradient(135deg, #c79a1e, #f2d37a); color: #1a1405; }
  .card.gold .pts, .card.gold .pts small { color: #1a1405; }
  .card.silver { background: linear-gradient(135deg, #6d737c, #c9ced6); color: #15171a; }
  .card.silver .pts, .card.silver .pts small { color: #15171a; }
  .card.bronze { background: linear-gradient(135deg, #6b3d1c, #c58552); color: #1c0f06; }
  .card.bronze .pts, .card.bronze .pts small { color: #1c0f06; }
  .list { columns: 3; column-gap: 50px; font-size: 30px; }
  .list.many { columns: 4; column-gap: 36px; font-size: 24px; }
  .list.many span { padding: 2px 0; }
  .list span, .rest span { display: block; break-inside: avoid; padding: 4px 0; color: #241d1b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .list i, .rest i { color: #1d6b45; font-style: normal; margin-left: 6px; }
  @keyframes pop { from { transform: scale(.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }

  .final { position: absolute; inset: 0; padding: 50px 90px; display: flex; flex-direction: column; align-items: center; gap: 30px; }
  .podium { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; width: 100%; }
  .pod { border-radius: 24px; padding: 30px; text-align: center; background: #faf7f2; border: 4px solid #241d1b; box-shadow: 8px 8px 0 #241d1b; }
  .pod .pl { font-size: 90px; font-weight: 900; }
  .pod .nm { font-size: 52px; font-weight: 900; line-height: 1.1; }
  .pod .pts { font-size: 34px; margin-top: 10px; }
  .pod.gold { background: linear-gradient(135deg, #c79a1e, #f2d37a); color: #1a1405; }
  .pod.silver { background: linear-gradient(135deg, #6d737c, #c9ced6); color: #15171a; }
  .pod.bronze { background: linear-gradient(135deg, #6b3d1c, #c58552); color: #1c0f06; }
  .rest { columns: 4; column-gap: 40px; font-size: 26px; width: 100%; }

  .season { position: absolute; inset: 0; padding: 44px 120px; }
  .season .mid { font-size: 64px; margin: 2px 0 18px; }
  .season ol { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
  .season li { display: grid; grid-template-columns: 80px 1fr 200px 200px; align-items: center; font-size: 34px; padding: 5px 24px; border-radius: 12px; background: #faf7f2; }
  .season li b { font-weight: 900; }
  .season .nm { font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .season .pts { text-align: right; font-weight: 800; color: #1d6b45; }
  .season .n { text-align: right; font-size: 28px; color: #5f5754; }
  .season li.gold { background: rgb(232 184 74 / .28); }
  .season li.silver { background: rgb(201 206 214 / .2); }
  .season li.bronze { background: rgb(197 133 82 / .22); }
  .blank { position: absolute; inset: 0; background: #000; }
</style>
