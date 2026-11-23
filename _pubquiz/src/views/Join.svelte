<script>
  import { S, api, cfg, openWeek, findTeamByName } from "../lib/store.svelte.js";
  import { matchTeams } from "../lib/calc.js";

  const get = (k, d) => { try { return localStorage.getItem("pq-" + k) ?? d; } catch { return d; } };
  const put = (k, v) => { try { localStorage.setItem("pq-" + k, v); } catch {} };

  let week = $derived(openWeek());
  let c = $derived(cfg());
  let name = $state(get("myteam", ""));
  let members = $state(Number(get("mymembers", 4)) || 4);
  let busy = $state(false);
  let err = $state("");
  let done = $state(null);

  let existing = $derived(name.trim() ? findTeamByName(name) : null);
  let tonight = $derived(existing && week?.teams?.[existing]);
  // Suggest registered names while typing, so returning teams keep the same spelling
  let hints = $derived(!existing && name.trim().length >= 2 ? matchTeams(name, S.teams).slice(0, 4) : []);

  async function submit(e) {
    e.preventDefault();
    const n = name.trim();
    if (!n) return;
    busy = true; err = "";
    try {
      members = Math.max(1, Math.min(30, Math.round(Number(members)) || 1));
      await api.addSignup(week.id, n.slice(0, 60), members);
      put("myteam", n); put("mymembers", members);
      done = { name: S.teams[existing]?.name || n, tid: existing };
    } catch (e2) {
      err = e2?.code === "permission-denied" ? "Sign-up is closed. Ask the quizmaster." : "Couldn't send. Check your connection and try again.";
    } finally { busy = false; }
  }
</script>

<div class="join">
  {#if !week}
    <h1>Team sign-up</h1>
    <p class="muted">Sign-up isn't open right now. Ask the quizmaster, or try again in a minute.</p>
  {:else if done}
    <div class="panel done">
      <div class="big">🎉</div>
      <h1>You're in!</h1>
      <p><strong>{done.name}</strong> · {members} {members === 1 ? "player" : "players"}</p>
      <p class="muted small">Write the same team name on your answer sheets. Good luck!</p>
      {#if done.tid}<p><a href={"#/team/" + done.tid}>See your team's stats →</a></p>{/if}
      <button onclick={() => (done = null)}>Change or sign up another team</button>
    </div>
  {:else}
    <h1>Sign up your team</h1>
    <p class="muted small">Quiz night {new Date(week.date + "T12:00").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}</p>
    <form class="panel" onsubmit={submit}>
      <label class="field" for="tn">Team name</label>
      <input id="tn" bind:value={name} maxlength="60" autocomplete="off" autocapitalize="words" placeholder="e.g. Quizzly Bears" required />
      {#if hints.length}
        <div class="hints small">
          <span class="muted">Played before? Tap your team:</span>
          {#each hints as h}<button type="button" class="chip" onclick={() => (name = h.name)}>{h.name}</button>{/each}
        </div>
      {/if}
      {#if existing}
        <p class="small ok">✓ Welcome back, {S.teams[existing].name}! Your results this season are kept.</p>
      {/if}
      {#if tonight}
        <p class="small muted">This team is already signed up tonight. Sending again only updates the number of players.</p>
      {/if}

      <label class="field" for="mem">Number of players</label>
      <div class="stepper">
        <button type="button" aria-label="Fewer players" onclick={() => (members = Math.max(1, members - 1))}>−</button>
        <input id="mem" type="number" inputmode="numeric" min="1" max="30" bind:value={members} />
        <button type="button" aria-label="More players" onclick={() => (members = Math.min(30, members + 1))}>+</button>
      </div>
      {#if members > c.penaltyFrom}
        <p class="small warn">Teams with more than {c.penaltyFrom} players lose {c.penaltyPer} points per extra player ({(members - c.penaltyFrom) * c.penaltyPer} points for you).</p>
      {/if}

      {#if err}<p class="err small">{err}</p>{/if}
      <button class="primary go" disabled={busy || !name.trim()}>{busy ? "Sending…" : tonight ? "Update" : "Sign up"}</button>
    </form>
  {/if}
</div>

<style>
  .join { max-width: 440px; margin: 0 auto; }
  form { display: grid; gap: 8px; }
  .field { font-weight: 600; margin-top: 6px; }
  input { font-size: 18px; padding: 10px 12px; }
  .hints { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
  .chip { padding: 4px 10px; border-radius: 99px; font-size: .9rem; }
  .stepper { display: grid; grid-template-columns: 56px 1fr 56px; gap: 8px; }
  .stepper button { justify-content: center; font-size: 1.4rem; }
  .stepper input { text-align: center; }
  .warn { color: var(--bad); margin: 0; }
  .go { justify-content: center; padding: 12px; font-size: 1.05rem; margin-top: 8px; }
  .done { text-align: center; display: grid; gap: 4px; justify-items: center; }
  .big { font-size: 2.5rem; }
</style>
