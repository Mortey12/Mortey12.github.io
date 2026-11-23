<script>
  import { S, api, save, pinHash, validPin, removePin } from "../lib/store.svelte.js";

  let { id } = $props();
  const put = (k, v) => { try { localStorage.setItem("pq-" + k, v); } catch {} };

  let has = $derived(!!S.hasPin[id]);
  let open = $state(false);
  let pin = $state("");
  let pin2 = $state("");
  let busy = $state(false);
  let msg = $state("");
  let err = $state("");

  async function setPin(e) {
    e.preventDefault();
    err = ""; msg = "";
    if (!validPin(pin)) { err = "Use 4 to 8 digits."; return; }
    if (pin.trim() !== pin2.trim()) { err = "The two PINs don't match."; return; }
    busy = true;
    try {
      await api.setPin(id, await pinHash(id, pin));
      put("pin-" + id, pin.trim()); // so this phone fills it in at sign-up
      msg = "PIN set. You'll be asked for it when you sign up by QR code. It's saved on this phone.";
      pin = pin2 = ""; open = false;
    } catch (e2) {
      err = e2?.code === "permission-denied"
        ? "Couldn't set the PIN. Someone may have set one just now; ask the quizmaster."
        : "Couldn't save. Check your connection and try again.";
    } finally { busy = false; }
  }

  async function reset() {
    if (!confirm(`Remove the PIN for ${S.teams[id]?.name}? The team can then set a new one.`)) return;
    await removePin(id);
    msg = "PIN removed.";
  }
</script>

<section class="panel pin">
  {#if has}
    <div class="row">
      <span>🔒 <strong>This team has a PIN.</strong> <span class="muted small">It's asked for when signing up by QR code. Forgot it? Ask the quizmaster.</span></span>
      <span class="spacer"></span>
      {#if S.admin}<button class="small danger" onclick={reset}>Remove PIN</button>{/if}
    </div>
  {:else if !open}
    <div class="row">
      <span class="muted small">🔓 No PIN. Want to stop others from signing up under your team name?</span>
      <span class="spacer"></span>
      <button class="small" onclick={() => { open = true; msg = ""; }}>Set a PIN</button>
    </div>
  {:else}
    <form onsubmit={setPin}>
      <strong>Set a PIN for {S.teams[id]?.name}</strong>
      <p class="small muted">Optional. Only do this if you're on this team. Share it with your teammates, since you'll need it every time you sign up by QR code. If you forget it, the quizmaster can remove it.</p>
      <div class="row">
        <input type="password" inputmode="numeric" autocomplete="new-password" maxlength="8" placeholder="PIN (4–8 digits)" bind:value={pin} aria-label="PIN" />
        <input type="password" inputmode="numeric" autocomplete="new-password" maxlength="8" placeholder="Repeat PIN" bind:value={pin2} aria-label="Repeat PIN" />
        <button class="primary" disabled={busy}>{busy ? "Saving…" : "Set PIN"}</button>
        <button type="button" class="ghost" onclick={() => { open = false; err = ""; }}>Cancel</button>
      </div>
    </form>
  {/if}
  {#if err}<p class="err small">{err}</p>{/if}
  {#if msg}<p class="ok small">{msg}</p>{/if}
</section>

<style>
  .pin { margin-top: 16px; }
  form { display: grid; gap: 6px; }
  form p { margin: 0; }
  input { width: 10em; }
  .err, .ok { margin: 6px 0 0; }
</style>
