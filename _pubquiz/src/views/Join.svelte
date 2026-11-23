<script>
  import { S, api, cfg, openWeek, findTeamByName, pinHash } from "../lib/store.svelte.js";
  import { matchTeams } from "../lib/calc.js";
  import TeamPin from "./TeamPin.svelte";

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
  // After signing up: the team's id (a new team gets one once the quizmaster's screen adds it)
  let doneTid = $derived(done ? done.tid || findTeamByName(done.name) : null);
  let tonight = $derived(existing && week?.teams?.[existing]);
  // Only teams that set a PIN on their team page are asked for it
  let needsPin = $derived(!!(existing && S.hasPin[existing]));
  let pin = $state("");
  let pinFor = "";
  $effect(() => {
    // Fill in a PIN saved on this phone when the team name matches
    if (needsPin && pinFor !== existing) { pinFor = existing; pin = get("pin-" + existing, ""); }
  });
  // Suggest registered names while typing, so returning teams keep the same spelling
  let hints = $derived(!existing && name.trim().length >= 2 ? matchTeams(name, S.teams).slice(0, 4) : []);

  async function submit(e) {
    e.preventDefault();
    const n = name.trim();
    if (!n) return;
    busy = true; err = "";
    try {
      members = Math.max(1, Math.min(30, Math.round(Number(members)) || 1));
      const extra = existing ? { teamId: existing } : {};
      if (needsPin) extra.pinHash = await pinHash(existing, pin);
      await api.addSignup(week.id, n.slice(0, 60), members, extra);
      put("myteam", n); put("mymembers", members);
      if (needsPin) put("pin-" + existing, pin.trim());
      done = { name: S.teams[existing]?.name || n, tid: existing };
    } catch (e2) {
      err = e2?.code !== "permission-denied" ? "Couldn't send. Check your connection and try again."
        : needsPin && week ? "Wrong PIN. Try again, or ask the quizmaster if you've forgotten it."
        : "Sign-up is closed. Ask the quizmaster.";
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
      {#if doneTid}<p><a href={"#/team/" + doneTid}>See your team's stats →</a></p>{/if}
      {#if doneTid && week?.teams?.[doneTid]}
        <div class="pinbox"><TeamPin id={doneTid} /></div>
      {:else if !doneTid || !S.hasPin[doneTid]}
        <p class="small muted">Want a team PIN, so nobody else can sign up as you? The option appears here in a moment, once you're on tonight's list.</p>
      {/if}
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

      {#if needsPin}
        <label class="field" for="pin">🔒 Team PIN</label>
        <input id="pin" type="password" inputmode="numeric" autocomplete="off" maxlength="8" bind:value={pin} required placeholder="The PIN your team set" />
        <p class="small muted">Forgot it? Ask the quizmaster.</p>
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
      <button class="primary go" disabled={busy || !name.trim() || (needsPin && !pin.trim())}>{busy ? "Sending…" : tonight ? "Update" : "Sign up"}</button>
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
  .pinbox { width: 100%; text-align: left; }
</style>
