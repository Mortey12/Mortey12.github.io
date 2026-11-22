<script>
  // Rask retting: vel runde og lag, kryss av full / annet / halv per spørsmål, lagre.
  // Summen går inn i same felt som tabellen i «Lag og poeng» (etneLag.poeng.<kategori>), så poengtavla og
  // resten av quizen verkar som før. Avkryssinga per spørsmål ligg i etneLag.rett.<kategori> og gir statistikken.
  // Poeng per spørsmål ligg i etne/rett (delt mellom dei som rettar).
  import { onMount } from "svelte";
  import { live, lagDoc, rettDoc } from "../lib/data.svelte.js";
  import { db, auth, feiltekst } from "../lib/firebase.js";
  import { doc, updateDoc, setDoc, onSnapshot } from "firebase/firestore";
  import { num, nummerer, rangering, sumLag, spmListe } from "../lib/quiz.js";
  import { melding } from "./red.svelte.js";
  import { publiser } from "./resultat.js";

  // demo: førehandsvising utan innlogging. Alt blir halde i minnet, ingenting går til Firebase.
  let { demo = false } = $props();

  const f2 = n => (Math.round((Number(n) || 0) * 100) / 100).toLocaleString("nb-NO");
  const norm = s => String(s || "").toLowerCase().replace(/æ/g, "ae").replace(/ø/g, "o").replace(/å/g, "a").normalize("NFD").replace(/[̀-ͯ]/g, "");
  const meg = () => demo ? "deg@demo" : (auth.currentUser?.email || "").toLowerCase();
  const kortNamn = e => (e || "").split("@")[0];

  const kat = $derived(live.quiz?.kategoriar || []);
  const plan = $derived(nummerer(live.quiz));
  let katId = $state(""), lagId = $state(""), sok = $state(""), treff = $state(0), aktiv = $state(0);
  let marks = $state([]), visPoeng = $state(false), visListe = $state(false), toast = $state(""), cfgDoc = $state({});
  let sokEl = $state();

  $effect(() => { if (kat.length && !kat.some(k => k.id === katId)) katId = kat[0].id; });
  const k = $derived(kat.find(x => x.id === katId));

  // Spørsmåla i kategorien (med fasit). Utan spørsmål i planen får ein seks tomme rader.
  const spmFor = kid => spmListe(live.quiz, plan, kid);
  function cfgFor(kobj, n){
    const lagra = cfgDoc[kobj?.id] || [];
    const std = kobj?.maks ? num(kobj.maks) / n : 1;
    return Array.from({ length: n }, (_, i) => lagra[i] ? { full: num(lagra[i].full), annet: num(lagra[i].annet) } : { full: std, annet: std * 0.75 });
  }
  const spm = $derived(spmFor(katId));
  const cfg = $derived(cfgFor(k, spm.length));
  const lagMedNamn = $derived(live.lag.filter(l => (l.namn || "").trim()));
  const lag = $derived(live.lag.find(l => l.id === lagId));

  // Poeng per spørsmål for den opne quizen (data-laget følgjer quizen som er vald i vindauget)
  $effect(() => { if (!demo) cfgDoc = live.rett || {}; });

  const tom = n => Array.from({ length: n }, () => ({ m: "", c: "" }));
  function verdi(i, m = marks[i], c = cfg[i]){
    if (!m || !c) return 0;
    return m.m === "full" ? c.full : m.m === "annet" ? c.annet : m.m === "halv" ? c.full / 2 : m.m === "eigen" ? num(m.c) : 0;
  }
  const sum = $derived(marks.reduce((s, _, i) => s + verdi(i), 0));
  const maks = $derived(cfg.reduce((s, c) => s + c.full, 0));

  // Lag som passar søket, best treff først. Retta lag går nedst.
  const forslag = $derived.by(() => {
    const q = norm(sok.trim()), ut = [];
    for (const l of lagMedNamn) {
      const n = norm(l.namn), ferdig = !!l.rett?.[katId]; let s = 0;
      if (!q) s = 1;
      else {
        const i = n.indexOf(q);
        if (i === 0) s = 120; else if (i > 0) s = (n[i - 1] === " " ? 100 : 80) - i;
        else if (q.split(/\s+/).length > 1 && q.split(/\s+/).every(t => n.includes(t))) s = 60;
        else { let p = 0, hol = 0, sist = -1; for (let j = 0; j < n.length && p < q.length; j++) if (n[j] === q[p]) { if (sist >= 0) hol += j - sist - 1; sist = j; p++; } if (p === q.length) s = Math.max(5, 40 - hol); }
      }
      if (s > 0) ut.push({ l, s, ferdig });
    }
    return ut.sort((a, b) => (a.ferdig - b.ferdig) || (b.s - a.s) || (a.l.bord - b.l.bord)).slice(0, sok.trim() ? 8 : 16);
  });

  function velgLag(id){
    lagId = id; sok = ""; aktiv = 0;
    const l = live.lag.find(x => x.id === id), lagra = l?.rett?.[katId]?.marks;
    marks = Array.from({ length: spm.length }, (_, i) => lagra?.[i] ? { m: lagra[i].m || "", c: lagra[i].c || "" } : { m: "", c: "" });
    sokEl?.blur();
  }
  function nyttLag(fokus = true){ lagId = ""; marks = []; aktiv = 0; sok = ""; treff = 0; if (fokus) sokEl?.focus(); }
  function velgRunde(id){ katId = id; if (lagId) { const x = lagId; queueMicrotask(() => velgLag(x)); } }
  function sett(i, m){ marks[i].m = marks[i].m === m ? "" : m; marks[i].c = ""; aktiv = Math.min(marks.length - 1, i + (marks[i].m ? 1 : 0)); }
  function eigen(i, v){ marks[i].c = v; marks[i].m = v.trim() ? "eigen" : ""; aktiv = i; }

  let lagrar = $state(false);
  async function lagre(){
    if (!lag) return;
    if (lagrar) { vis("Ventar på førre lagring – trykk Enter igjen om eit augeblikk"); return; }
    lagrar = true;
    const vals = marks.map((_, i) => verdi(i));
    const rett = { marks: $state.snapshot(marks), vals, by: meg(), at: Date.now() };
    if (demo) {
      lag.poeng = { ...(lag.poeng || {}), [katId]: vals.reduce((a, b) => a + b, 0) };
      lag.rett = { ...(lag.rett || {}), [katId]: rett };
      vis(`Lagra · ${lag.namn} · ${k.namn} · ${f2(sum)}`);
      nyttLag(); lagrar = false; return;
    }
    // Hugs laget og summen før lagringa: går ein vidare til neste lag medan lagringa
    // ventar, skal ikkje det nye laget bli nullstilt når denne lagringa blir ferdig.
    const lagra = lag, kn = k.namn, s = sum;
    try {
      await updateDoc(lagDoc(lagra.id), {
        ["poeng." + katId]: vals.reduce((a, b) => a + b, 0),
        ["rett." + katId]: rett
      });
      melding(`Lagra ${lagra.namn} · ${kn} · ${f2(s)}`);
      vis(`Lagra · ${lagra.namn} · ${kn} · ${f2(s)}`);
      if (lagId === lagra.id) nyttLag();
      // Er fasiten for runda alt vist, får mobilen til laget rettinga med ein gong
      if (live.no.ope && (live.no.endeleg || (live.no.vist || []).includes(katId))) setTimeout(() => publiser({ berre: [lagra.id] }).catch(() => {}), 600);
    } catch (e) { melding("Ikkje lagra: " + feiltekst(e), true); }
    lagrar = false;
  }

  // Jokeren står på svararket: trykk for å setje han på denne runda, trykk igjen for å ta han bort
  async function jokar(){
    if (!lag) return;
    const ny = lag.joker === katId ? "" : katId;
    if (demo) { lag.joker = ny; return; }
    try { await updateDoc(lagDoc(lag.id), { joker: ny }); } catch (e) { melding("Ikkje lagra: " + feiltekst(e), true); }
  }

  async function skrivCfg(i, felt, v){
    const arr = cfg.map(c => ({ ...c })); arr[i][felt] = num(v);
    if (demo) { cfgDoc = { ...cfgDoc, [katId]: arr }; return; }
    try { await setDoc(rettDoc(), { cfg: { [katId]: arr } }, { merge: true }); } catch (e) { melding("Ikkje lagra: " + feiltekst(e), true); }
  }

  let toastT;
  function vis(t){ toast = t; clearTimeout(toastT); toastT = setTimeout(() => toast = "", 2600); }

  // Gje beskjed når den andre som rettar har lagra eit lag
  const sett_ = new Map(); let klarTil = false;
  $effect(() => {
    if (!live.lag.length) return;
    for (const l of live.lag) for (const [kid, r] of Object.entries(l.rett || {})) {
      const nok = l.id + "|" + kid;
      if (klarTil && sett_.get(nok) !== r.at && r.by && r.by !== meg()) vis(`${kortNamn(r.by)} retta ${l.namn || "bord " + l.bord} · ${kat.find(x => x.id === kid)?.namn || ""} · ${f2(r.vals?.reduce((a, b) => a + b, 0))}`);
      sett_.set(nok, r.at);
    }
    klarTil = true;
  });

  // ---- statistikk ----
  const stat = $derived.by(() => {
    const e = live.lag.map(l => l.rett?.[katId]).filter(r => r?.vals);
    return { n: e.length, rader: spm.map((_, i) => {
      let f = 0, a = 0, h = 0, s = 0;
      e.forEach(r => { const m = r.marks?.[i]?.m; s += r.vals[i] || 0; if (m === "full") f++; else if (m === "annet" || m === "eigen") a++; else if (m === "halv") h++; });
      const n = e.length || 1; return { f: f / n * 100, a: a / n * 100, h: h / n * 100, pst: cfg[i].full ? Math.round(s / n / cfg[i].full * 100) : 0 };
    }) };
  });
  const vanskeleg = $derived.by(() => {
    const ut = [];
    for (const kk of kat) {
      const sp = spmFor(kk.id), c = cfgFor(kk, sp.length), e = live.lag.map(l => l.rett?.[kk.id]).filter(r => r?.vals);
      if (e.length < 3) continue;
      sp.forEach((_, i) => { if (!c[i].full) return; const s = e.reduce((t, r) => t + (r.vals[i] || 0), 0); ut.push({ namn: `${kk.namn} · spm ${i + 1}`, p: s / e.length / c[i].full, n: e.length }); });
    }
    return ut.sort((a, b) => a.p - b.p).slice(0, 5);
  });

  // ---- resultatliste ----
  const rang = $derived(rangering(live.lag, live.quiz));
  function csv(){
    const q = v => '"' + String(v ?? "").replace(/"/g, '""') + '"', t = v => String(v).replace(".", ",");
    const rader = [["Plassering", "Lagnamn", "Total score", ...kat.map(x => x.namn)].map(q).join(";")];
    rang.forEach(r => rader.push([r.rank, q(r.namn), t(r.sum), ...kat.map(x => { const p = r.poeng?.[x.id]; return p === undefined || p === "" ? "" : t(num(p) * (r.joker === x.id ? 2 : 1)); })].map((v, i) => i === 1 ? v : q(v)).join(";")));
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob(["﻿" + rader.join("\r\n")], { type: "text/csv;charset=utf-8" }));
    a.download = "etnequiz-resultat.csv"; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  function tast(e){
    if (visListe) { if (e.key === "Escape") visListe = false; return; }
    const felt = e.target.tagName === "INPUT" || e.target.tagName === "SELECT" || e.target.tagName === "TEXTAREA";
    if (e.key === "Escape") { nyttLag(); return; }
    if (felt || e.ctrlKey || e.metaKey || e.altKey) { if (e.key === "Enter" && e.ctrlKey) lagre(); return; }
    if (!lag) { if (e.key.length === 1 && /\S/.test(e.key)) sokEl?.focus(); return; }
    const kart = { 1: "full", 2: "annet", 3: "halv" };
    if (kart[e.key]) { e.preventDefault(); marks[aktiv].m = kart[e.key]; marks[aktiv].c = ""; aktiv = Math.min(marks.length - 1, aktiv + 1); }
    else if (e.key === "0") { e.preventDefault(); marks[aktiv].m = ""; marks[aktiv].c = ""; aktiv = Math.min(marks.length - 1, aktiv + 1); }
    else if (e.key === "ArrowDown") { e.preventDefault(); aktiv = Math.min(marks.length - 1, aktiv + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); aktiv = Math.max(0, aktiv - 1); }
    else if (e.key === "Enter" && e.target.tagName !== "BUTTON") { e.preventDefault(); lagre(); }
  }
  function sokTast(e){
    if (e.key === "ArrowDown") { e.preventDefault(); treff = Math.min(forslag.length - 1, treff + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); treff = Math.max(0, treff - 1); }
    else if (e.key === "Enter") { e.preventDefault(); const f = forslag[treff] || forslag[0]; if (f) velgLag(f.l.id); }
  }
  const delvis = (l, kid) => l.poeng?.[kid] !== undefined && l.poeng?.[kid] !== "" && !l.rett?.[kid];
</script>

<svelte:window onkeydown={tast} />

<section class="rett">
  <div class="venstre">
    <div class="kort">
      <h3>Runde</h3>
      <div class="rad runder" role="group" aria-label="Vel runde">
        {#each kat as r}
          {@const ant = live.lag.filter(l => l.rett?.[r.id]).length}
          <button class="btn" type="button" aria-pressed={r.id === katId} onclick={() => velgRunde(r.id)}>{r.namn}{#if ant}<span class="ant">{ant}</span>{/if}</button>
        {/each}
        {#if !kat.length}<span class="dempa">Ingen kategoriar enno. Lag dei under «Oppsett».</span>{/if}
      </div>
    </div>

    <div class="kort">
      <h3>Lag</h3>
      {#if lag}
        <div class="rad valt">
          <strong>{lag.namn}</strong><span class="dempa">bord {lag.bord}{#if lag.rett?.[katId]} · retta frå før av {kortNamn(lag.rett[katId].by)}, du endrar{:else if delvis(lag, katId)} · har {f2(lag.poeng[katId])} p frå før (skrive inn for hand){/if}</span>
          <button class="jokerknapp" type="button" aria-pressed={lag.joker === katId} onclick={jokar} title="Jokeren står på svararket">{lag.joker === katId ? "★ Joker her (dobbel)" : lag.joker ? "Joker i " + (kat.find(x => x.id === lag.joker)?.namn || "anna runde") : "Joker her?"}</button>
          <span style="flex:1"></span><button class="lenke" type="button" onclick={() => nyttLag()}>Bytt lag</button>
        </div>
      {:else}
        <input class="inp sok" bind:this={sokEl} bind:value={sok} oninput={() => treff = 0} onkeydown={sokTast} placeholder="Skriv lagnamn …" aria-label="Søk etter lag" autocomplete="off" spellcheck="false">
        <div class="rad forslag">
          {#each forslag as f, i (f.l.id)}
            <button class="chip" class:topp={sok.trim() && i === treff} class:ferdig={f.ferdig} type="button" onclick={() => velgLag(f.l.id)}>{f.l.namn}{#if f.ferdig}<small>{kortNamn(f.l.rett[katId].by)}</small>{/if}</button>
          {:else}
            <span class="dempa">{lagMedNamn.length ? "Ingen lag passar." : "Ingen lag med namn enno. Lag bord og gje dei namn under «Lag og poeng»."}</span>
          {/each}
        </div>
      {/if}
    </div>

    <div class="kort">
      <div class="rad" style="justify-content:space-between">
        <h3>Spørsmål{k ? " · " + k.namn : ""}</h3>
        <button class="btn liten" type="button" aria-pressed={visPoeng} onclick={() => visPoeng = !visPoeng}>Sett poeng</button>
      </div>
      {#if visPoeng}
        <div class="cfgboks">
          <p class="dempa" style="margin:0 0 8px">Poeng per spørsmål i denne runda. Det gjeld for begge som rettar. Halv er alltid halvparten av full.</p>
          <div class="cfg">
            <span></span><b>Full</b><b>Annet</b>
            {#each spm as _, i}
              <span>Spm {i + 1}</span>
              <input class="inp" inputmode="decimal" aria-label="Full poeng spørsmål {i + 1}" value={f2(cfg[i].full)} onchange={e => skrivCfg(i, "full", e.target.value)}>
              <input class="inp" inputmode="decimal" aria-label="Annet-poeng spørsmål {i + 1}" value={f2(cfg[i].annet)} onchange={e => skrivCfg(i, "annet", e.target.value)}>
            {/each}
          </div>
        </div>
      {/if}
      {#if lag}
        <div class="spm">
          {#each spm as s, i}
            <div class="q" class:aktiv={i === aktiv}>
              <div class="lbl"><b>Spm {i + 1}</b>{#if s.svar}<span class="svar">{s.svar}</span>{/if}</div>
              <button type="button" class="o full" aria-pressed={marks[i]?.m === "full"} onclick={() => sett(i, "full")}><small>Full</small><b>{f2(cfg[i].full)}</b></button>
              <button type="button" class="o annet" aria-pressed={marks[i]?.m === "annet"} onclick={() => sett(i, "annet")}><small>Annet</small><b>{f2(cfg[i].annet)}</b></button>
              <button type="button" class="o halv" aria-pressed={marks[i]?.m === "halv"} onclick={() => sett(i, "halv")}><small>Halv</small><b>{f2(cfg[i].full / 2)}</b></button>
              <input class="inp eigen" class:paa={marks[i]?.m === "eigen"} inputmode="decimal" placeholder="Anna" aria-label="Eigen poengsum spørsmål {i + 1}" value={marks[i]?.m === "eigen" ? marks[i].c : ""} oninput={e => eigen(i, e.target.value)} onkeydown={e => { if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); aktiv = Math.min(marks.length - 1, i + 1); } }}>
            </div>
          {/each}
        </div>
        <p class="dempa tastar"><kbd>1</kbd> full · <kbd>2</kbd> annet · <kbd>3</kbd> halv · <kbd>0</kbd> feil · går vidare av seg sjølv · <kbd>Enter</kbd> lagre · <kbd>Esc</kbd> nytt lag</p>
      {:else}
        <p class="dempa" style="margin:6px 0 0">Vel eit lag for å rette.</p>
      {/if}
    </div>
  </div>

  <div class="hogre">
    <div class="kort">
      <div class="rad" style="justify-content:space-between"><h3>Resultat</h3><button class="btn primary liten" type="button" onclick={() => visListe = true}>Resultatliste</button></div>
      <ol class="topp5">
        {#each rang.slice(0, 5) as r}<li><span>{r.rank}.</span><span class="n">{r.namn}</span><b>{f2(r.sum)}</b></li>{:else}<li class="dempa">Ingen poeng enno.</li>{/each}
      </ol>
    </div>
    <div class="kort">
      <h3>Statistikk · {k?.namn || ""} · {stat.n} lag</h3>
      {#if stat.n}
        <div class="stat">
          {#each stat.rader as r, i}
            <span>Spm {i + 1}</span>
            <span class="stolpe" title="{f2(r.f)} % full, {f2(r.a)} % annet, {f2(r.h)} % halv"><i class="f" style="width:{r.f}%"></i><i class="a" style="width:{r.a}%"></i><i class="h" style="width:{r.h}%"></i></span>
            <b>{r.pst} %</b>
          {/each}
        </div>
        <p class="dempa lg"><span><i class="f"></i>Full</span><span><i class="a"></i>Annet</span><span><i class="h"></i>Halv</span><span>Tom = feil</span></p>
      {:else}
        <p class="dempa" style="margin:6px 0 0">Ingen retta lag i denne runda enno.</p>
      {/if}
      <h3 style="margin-top:14px">Vanskelegaste spørsmål</h3>
      <ul class="hard">
        {#each vanskeleg as v}<li><span>{v.namn}</span><span class="dempa">{Math.round(v.p * 100)} % · {v.n} lag</span></li>{:else}<li class="dempa">Treng minst 3 retta lag i ei runde.</li>{/each}
      </ul>
    </div>
  </div>
</section>

<div class="bar">
  <div class="inner rad" style="flex-wrap:nowrap">
    <div class="sumboks">
      <div class="sumtal">{f2(sum)} <small>/ {f2(maks)}{#if lag?.joker === katId} · joker ×2 = {f2(sum * 2)}{/if}</small></div>
      <div class="dempa nm">{lag ? lag.namn + " · " + (k?.namn || "") : "Vel lag"}</div>
    </div>
    <button class="btn primary lagre" type="button" disabled={!lag || lagrar} onclick={lagre}>Lagre</button>
  </div>
</div>

{#if toast}<div class="toast" role="status">{toast}</div>{/if}

{#if visListe}
  <div class="dekk" role="dialog" aria-modal="true" aria-label="Resultatliste">
    <div class="inner">
      <div class="rad" style="justify-content:space-between;margin:12px 0">
        <h2>Resultatliste</h2>
        <div class="rad"><button class="btn" type="button" onclick={csv}>Last ned CSV</button><button class="btn primary" type="button" onclick={() => visListe = false}>Lukk</button></div>
      </div>
      <div class="kort tabell">
        <table>
          <thead><tr><th>Plass</th><th>Lag</th><th class="t">Sum</th>{#each kat as x}<th class="t">{x.namn}</th>{/each}</tr></thead>
          <tbody>
            {#each rang as r}
              <tr><td>{r.rank}.</td><td class="nm2">{r.namn}</td><td class="t sm">{f2(r.sum)}</td>
                {#each kat as x}
                  {@const p = r.poeng?.[x.id]}
                  <td class="t" class:j={r.joker === x.id}>{p === undefined || p === "" ? "–" : f2(num(p) * (r.joker === x.id ? 2 : 1))}{#if r.joker === x.id}<span class="jm"> ★</span>{/if}</td>
                {/each}
              </tr>
            {:else}<tr><td colspan={3 + kat.length} class="dempa">Ingen lag med namn enno.</td></tr>{/each}
          </tbody>
        </table>
      </div>
      <p class="dempa">★ = joker (dobbel poeng). Same tal som på poengtavla. CSV-fila passar i Excel.</p>
    </div>
  </div>
{/if}

<style>
  .rett{display:grid;grid-template-columns:minmax(0,640px) minmax(0,1fr);gap:16px;align-items:start;padding-bottom:84px}
  @media (max-width:980px){.rett{grid-template-columns:minmax(0,1fr)}}
  .venstre,.hogre{display:flex;flex-direction:column;gap:12px;min-width:0}
  .runder .btn{min-height:46px;position:relative}
  .ant{margin-left:8px;font:600 12px "IBM Plex Mono",monospace;opacity:.7}
  .sok{font-size:18px;padding:12px 14px;min-height:52px}
  .forslag{margin-top:10px;gap:6px}
  .chip{border:1.5px solid var(--p-linje);background:var(--p-flate);border-radius:999px;min-height:44px;padding:0 16px;cursor:pointer;text-align:left}
  .chip small{margin-left:8px;color:var(--p-dempa);font-size:12px}
  .chip.ferdig{color:var(--p-dempa)}.chip.ferdig::before{content:"✓ ";color:var(--p-ok)}
  .chip.topp{border-color:var(--p-gran);box-shadow:inset 0 0 0 1.5px var(--p-gran)}
  .chip.topp::after{content:"Enter";margin-left:8px;font:700 11px var(--f-tekst);color:var(--p-gran)}
  .valt{gap:10px}.valt strong{font-size:19px}
  .jokerknapp{border:1.5px solid var(--p-linje);background:var(--p-flate);border-radius:999px;min-height:38px;padding:0 14px;font-weight:700;font-size:13px;cursor:pointer}
  .jokerknapp[aria-pressed="true"]{background:#FFF4D6;border-color:var(--p-gull);color:#7A5410}
  .lenke{border:0;background:none;color:var(--p-gran);font-weight:700;text-decoration:underline;cursor:pointer;min-height:40px;padding:0 6px}
  .cfgboks{margin:10px 0;padding:10px;border:1.5px dashed var(--p-linje);border-radius:10px}
  .cfg{display:grid;grid-template-columns:56px 1fr 1fr;gap:6px 8px;align-items:center;font-size:14px}
  .cfg b{font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--p-dempa)}
  .spm{display:flex;flex-direction:column;gap:4px;margin-top:8px}
  .q{display:grid;grid-template-columns:minmax(0,1fr) repeat(3,74px) 78px;gap:6px;align-items:center;padding:6px;border:2px solid transparent;border-radius:12px}
  .q.aktiv{background:var(--p-flate-2);border-color:var(--p-linje)}
  .lbl{display:flex;flex-direction:column;min-width:0}.lbl b{font-size:15px}
  .svar{font-size:12px;color:var(--p-dempa);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  @media (max-width:560px){.q{grid-template-columns:repeat(3,1fr) 78px}.lbl{grid-column:1/-1;flex-direction:row;gap:10px;align-items:baseline}}
  .o{height:54px;border-radius:12px;border:2px solid var(--p-linje);background:var(--p-flate);cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1;padding:0}
  .o small{font-size:11px;text-transform:uppercase;letter-spacing:.04em;color:var(--p-dempa)}
  .o b{font-size:17px;font-variant-numeric:tabular-nums}
  .o[aria-pressed="true"] small{color:inherit}
  .o.full[aria-pressed="true"]{background:#DCF3E3;border-color:var(--p-ok);color:var(--p-ok)}
  .o.annet[aria-pressed="true"]{background:#FDECC8;border-color:#A15C00;color:#A15C00}
  .o.halv[aria-pressed="true"]{background:#E6E0FB;border-color:#5B3FD1;color:#5B3FD1}
  .eigen{height:54px;text-align:center;font-variant-numeric:tabular-nums}
  .eigen.paa{border-color:var(--p-gran);background:var(--p-flate-2)}
  .tastar{margin:10px 0 0;font-size:13px}
  kbd{font:inherit;font-size:12px;border:1px solid var(--p-linje);border-bottom-width:2px;border-radius:4px;padding:0 5px;background:var(--p-flate-2)}
  .topp5{list-style:none;margin:8px 0 0;padding:0;display:flex;flex-direction:column;gap:4px}
  .topp5 li{display:grid;grid-template-columns:30px minmax(0,1fr) auto;gap:8px}
  .topp5 .n{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .stat{display:grid;grid-template-columns:48px minmax(0,1fr) 46px;gap:6px 10px;align-items:center;margin-top:8px;font-size:14px;font-variant-numeric:tabular-nums}
  .stat b{text-align:right}
  .stolpe{display:flex;height:14px;border-radius:4px;overflow:hidden;background:var(--p-flate-2);border:1px solid var(--p-linje)}
  .stolpe i,.lg i{display:block;height:100%}
  .stolpe .f,.lg .f{background:var(--p-ok)}.stolpe .a,.lg .a{background:#C98A1B}.stolpe .h,.lg .h{background:#7A5FE0}
  .lg{display:flex;flex-wrap:wrap;gap:12px;font-size:12px;margin:8px 0 0}.lg i{display:inline-block;width:10px;height:10px;border-radius:2px;margin-right:4px}
  .hard{list-style:none;margin:6px 0 0;padding:0;display:grid;gap:4px;font-size:14px}
  .hard li{display:flex;justify-content:space-between;gap:8px}
  .bar{position:fixed;left:0;right:0;bottom:0;z-index:5;background:var(--p-flate);border-top:1px solid var(--p-linje);padding-block:10px calc(10px + env(safe-area-inset-bottom,0px))}
  .sumboks{flex:1;min-width:0}.sumtal{font-size:28px;font-weight:700;line-height:1;font-variant-numeric:tabular-nums}.sumtal small{font-size:14px;font-weight:500;color:var(--p-dempa)}
  .nm{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .lagre{height:56px;padding:0 36px;font-size:18px}
  .toast{position:fixed;left:50%;bottom:calc(88px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:var(--p-blekk);color:#fff;border-radius:10px;padding:10px 16px;font-weight:700;z-index:30;max-width:calc(100% - 32px)}
  .dekk{position:fixed;inset:0;z-index:40;background:var(--p-bg);overflow:auto}
  .tabell{overflow-x:auto;padding:6px 10px}
  table{border-collapse:collapse;width:100%;font-size:14px;font-variant-numeric:tabular-nums}
  th{font:700 12px var(--f-tekst);letter-spacing:.04em;text-transform:uppercase;color:var(--p-dempa);text-align:left;padding:8px 6px;border-bottom:2px solid var(--p-blekk);white-space:nowrap}
  td{padding:7px 6px;border-bottom:1px solid var(--p-linje)}
  th.t,td.t{text-align:right}.sm{font-weight:700}.nm2{font-weight:600}
  td.j{background:#FFF4D6}.jm{color:#A15C00}
</style>
