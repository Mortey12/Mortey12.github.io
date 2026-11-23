<script>
  import { S, api } from "./lib/store.svelte.js";
  import { route } from "./lib/router.svelte.js";
  import { isDemo } from "./lib/backend.js";
  import Home from "./views/Home.svelte";
  import Week from "./views/Week.svelte";
  import Entry from "./views/Entry.svelte";
  import Season from "./views/Season.svelte";
  import Teams from "./views/Teams.svelte";
  import Team from "./views/Team.svelte";
  import Categories from "./views/Categories.svelte";
  import Admin from "./views/Admin.svelte";
  import Join from "./views/Join.svelte";
  import Qr from "./views/Qr.svelte";
  import Rules from "./views/Rules.svelte";

  let p = $derived(route.parts);
  let entry = $derived(p[0] === "week" && p[2] === "enter");
  const nav = [["", "Weeks"], ["season", "Season"], ["teams", "Teams"], ["categories", "Categories"], ["rules", "Rules"]];
  let loginErr = $state("");
  async function login() { loginErr = ""; try { await api.login(); } catch (e) { loginErr = e.message; } }
</script>

<header class:wide={entry}>
  <div class="wrap bar" class:wide={entry}>
    <a class="brand" href="#/">Pub Quiz</a>
    <nav>
      {#each nav as [path, label]}
        <a href={"#/" + path} class:on={(p[0] || "") === path || (path === "" && p[0] === "week") || (path === "teams" && p[0] === "team")}>{label}</a>
      {/each}
      {#if S.admin}<a href="#/admin" class:on={p[0] === "admin"}>{S.fullAdmin ? "Admin" : "Access"}</a>{/if}
    </nav>
    <span class="spacer"></span>
    {#if S.saving}<span class="small muted">Saving…</span>{:else if S.saveError}<span class="small err" title={S.saveError}>Not saved</span>{/if}
    {#if isDemo}<span class="tag">Demo data</span>{/if}
    {#if S.user}
      <span class="small muted who" title={S.user.email}>{S.fullAdmin ? "Admin" : S.admin ? "Score keeper" : "No edit access"}</span>
      {#if !isDemo}<button class="ghost small" onclick={() => api.logout()}>Sign out</button>{/if}
    {:else if S.ready || S.error}
      <button class="ghost small" onclick={login}>Quizmaster sign-in</button>
    {/if}
  </div>
</header>

<main class="wrap" class:wide={entry}>
  {#if loginErr}<p class="err">{loginErr}</p>{/if}
  {#if S.saveError}<p class="err small">{S.saveError}</p>{/if}
  {#if S.error}
    <p class="err">{S.error}</p>
  {:else if !S.ready}
    <p class="muted">Loading…</p>
  {:else if p[0] === "week" && p[1] && entry}
    <Entry id={p[1]} />
  {:else if p[0] === "week" && p[1]}
    <Week id={p[1]} />
  {:else if p[0] === "season"}
    <Season initial={p[1] || ""} />
  {:else if p[0] === "teams"}
    <Teams />
  {:else if p[0] === "team" && p[1]}
    <Team id={p[1]} />
  {:else if p[0] === "categories"}
    <Categories />
  {:else if p[0] === "join"}
    <Join />
  {:else if p[0] === "qr"}
    <Qr />
  {:else if p[0] === "rules"}
    <Rules />
  {:else if p[0] === "admin"}
    <Admin />
  {:else}
    <Home />
  {/if}
</main>

<style>
  header { background: var(--panel); border-bottom: 1px solid var(--line); margin-bottom: 20px; position: sticky; top: 0; z-index: 20; }
  .bar { display: flex; align-items: center; gap: 14px; padding-top: 10px; padding-bottom: 10px; flex-wrap: wrap; row-gap: 6px; }
  .brand { font-weight: 800; color: var(--ink); letter-spacing: -.02em; font-size: 1.1rem; }
  nav { display: flex; gap: 4px; flex-wrap: wrap; }
  nav a { color: var(--muted); padding: 4px 8px; border-radius: 6px; }
  nav a.on { color: var(--ink); background: var(--accent-soft); }
  nav a:hover { text-decoration: none; color: var(--ink); }
  main.wide, .bar.wide { max-width: none; }
  @media (max-width: 560px) { .who { display: none; } }
</style>
