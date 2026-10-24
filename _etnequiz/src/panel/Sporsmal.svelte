<script>
  // Spørsmål: rediger køyreplanen. Kvart punkt kan vere tittel, kategori, spørsmål, fasit, pause eller poengtavle.
  import { red, endra, melding } from "./red.svelte.js";
  import { db, feiltekst, hentBilete, leggIBileteCache } from "../lib/firebase.js";
  import { doc, setDoc } from "firebase/firestore";
  import { katInfo, nummerer, kortTittel, nyId } from "../lib/quiz.js";

  const plan = $derived(red.quiz.plan);
  const kats = $derived(katInfo(red.quiz));
  const nummerert = $derived(nummerer(red.quiz));
  let open = $state(null), armert = $state(null);
  const TYPAR = [["sporsmal", "Spørsmål"], ["kategori", "Kategori"], ["fasit", "Fasit"], ["pause", "Pause"], ["poengtavle", "Poengtavle"], ["tittel", "Tittel"], ["hurtigresultat", "Hurtigvinnar"]];
  const erH = id => !!kats.get(id)?.hurtig;
  const hurtigKat = $derived(red.quiz.kategoriar.filter(k => k.hurtig));
  // Hurtigspørsmål får svarform, alternativ og tid første gongen dei blir knytte til ei hurtigrunde
  function gjerHurtig(it){
    if (!erH(it.kat)) return;
    if (!it.id) it.id = nyId("q");
    if (!it.form) it.form = "alternativ";
    if (!Array.isArray(it.alternativ)) it.alternativ = ["", "", "", ""];
    if (it.rett == null) it.rett = 0;
    if (!it.tid) it.tid = 20;
    delete it.skjult;
  }

  function sistKat(i){ for (let j = i; j >= 0; j--) { const p = plan[j]; if (p && (p.type === "kategori" || p.type === "sporsmal") && typeof p.kat === "string") return p.kat; } return red.quiz.kategoriar[0]?.id || ""; }
  function nytt(type, etter){
    const k = sistKat(etter);
    const it = type === "sporsmal" ? { type, kat: k, tekst: "", svar: "" }
      : type === "hurtigresultat" ? { type, kat: (erH(k) ? k : hurtigKat[0]?.id) || "" }
      : type === "kategori" ? { type, kat: k }
      : type === "fasit" ? { type, kat: k ? [k] : [] }
      : type === "tittel" ? { type, tittel: red.quiz.tittel || "" }
      : type === "pause" ? { type, tittel: "Pause" } : { type };
    if (type === "sporsmal") gjerHurtig(it);
    plan.splice(etter + 1, 0, it); open = etter + 1; endra();
  }
  function flytt(i, d){ const j = i + d; if (j < 0 || j >= plan.length) return; [plan[i], plan[j]] = [plan[j], plan[i]]; if (open === i) open = j; endra(); }
  function dupliser(i){ const c = structuredClone($state.snapshot(plan[i])); if (c.id) c.id = nyId("q"); plan.splice(i + 1, 0, c); open = i + 1; endra(); }
  function slett(i){
    if (armert !== i) { armert = i; setTimeout(() => { if (armert === i) armert = null; }, 3000); return; }
    armert = null; plan.splice(i, 1); open = null; endra();
  }
  function veksleFasit(it, id){
    const l = Array.isArray(it.kat) ? it.kat : (it.kat ? [it.kat] : []);
    it.kat = l.includes(id) ? l.filter(x => x !== id) : red.quiz.kategoriar.map(c => c.id).filter(x => x === id || l.includes(x));
    endra();
  }

  // Bilete blir gjort mindre i nettlesaren og lagra som eige dokument
  async function lastOpp(it, fil){
    if (!fil) return;
    melding("Lastar opp bilete …");
    try {
      const url = await skaler(fil);
      const id = nyId("b");
      await setDoc(doc(db, "etneBilete", id), { data: url });
      leggIBileteCache(id, url); it.bilete = id; endra();
    } catch (e) { melding("Biletet vart ikkje lagra: " + feiltekst(e), true); }
  }
  function skaler(fil){
    return new Promise((ok, feil) => {
      const img = new Image(); const r = new FileReader();
      r.onload = () => { img.src = r.result; }; r.onerror = feil;
      img.onload = () => {
        const s = Math.min(1, 1400 / Math.max(img.width, img.height));
        const c = document.createElement("canvas"); c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
        const x = c.getContext("2d"); x.fillStyle = "#fff"; x.fillRect(0, 0, c.width, c.height); x.drawImage(img, 0, 0, c.width, c.height);
        let q = 0.85, url = c.toDataURL("image/jpeg", q);
        while (url.length > 900000 && q > 0.4) { q -= 0.1; url = c.toDataURL("image/jpeg", q); }
        url.length > 1000000 ? feil(new Error("Biletet er for stort")) : ok(url);
      };
      img.onerror = () => feil(new Error("Kunne ikkje lese biletet"));
      r.readAsDataURL(fil);
    });
  }
  const tal = $derived(plan.filter(p => p.type === "sporsmal").length);
</script>

<section class="stack">
  <div class="rad">
    <h2>Spørsmål og køyreplan</h2>
    <span class="dempa">{plan.length} punkt · {tal} spørsmål · blir lagra av seg sjølv</span>
  </div>
  {#if !red.quiz.kategoriar.length}<p class="kort dempa">Lag kategoriane under «Oppsett» først, så kan du knyte spørsmåla til dei.</p>{/if}

  <ol class="liste">
    {#each plan as it, i}
      <li class="pkt {it.type}" class:open={open === i}>
        <div class="hode">
          <button class="tittel" type="button" aria-expanded={open === i} onclick={() => open = open === i ? null : i}>
            <span class="nr">{i + 1}</span><span class="type">{TYPAR.find(t => t[0] === it.type)?.[1]}</span><span class="t">{kortTittel(nummerert[i], kats)}</span>
            {#if it.type === "sporsmal" && !erH(it.kat) && !it.svar && it.nummerert !== false}<span class="mangel">Manglar fasit</span>{/if}
            {#if it.skjult}<span class="arkm">Berre på ark</span>{/if}
            {#if it.type === "sporsmal" && erH(it.kat)}<span class="hm">⚡ {it.form === "alternativ" ? "A–D" : "Fritt"}</span>{/if}
            {#if it.bilete}<span class="ikon" title="Har bilete">▣</span>{/if}
          </button>
          <div class="verkty">
            <button class="ibtn" type="button" aria-label="Flytt opp" disabled={i === 0} onclick={() => flytt(i, -1)}>↑</button>
            <button class="ibtn" type="button" aria-label="Flytt ned" disabled={i === plan.length - 1} onclick={() => flytt(i, 1)}>↓</button>
            <button class="ibtn" type="button" aria-label="Dupliser" onclick={() => dupliser(i)}>⧉</button>
            <button class="ibtn fare" type="button" aria-label="Slett" onclick={() => slett(i)}>{armert === i ? "Sikker?" : "✕"}</button>
          </div>
        </div>

        {#if open === i}
          <div class="kropp">
            {#if it.type === "sporsmal"}
              <div class="grid2">
                <div class="felt"><label for="k{i}">Kategori</label><select id="k{i}" bind:value={it.kat} onchange={() => { gjerHurtig(it); endra(); }}>{#each red.quiz.kategoriar as k}<option value={k.id}>{k.hurtig ? "⚡ " : ""}{k.namn}</option>{/each}</select></div>
                {#if !erH(it.kat)}
                  <div class="sjekkar">
                    <label class="sjekk"><input type="checkbox" checked={it.nummerert !== false} onchange={e => { it.nummerert = e.target.checked ? undefined : false; endra(); }}> Nummerert spørsmål (kjem med i fasiten)</label>
                    <label class="sjekk"><input type="checkbox" checked={!!it.skjult} onchange={e => { it.skjult = e.target.checked || undefined; endra(); }}> Berre på arket, ikkje på skjermen</label>
                  </div>
                {/if}
              </div>
              {#if it.skjult}<p class="dempa" style="margin:0">Spørsmålet blir hoppa over når du køyrer quizen, men svaret kjem med i fasiten og laga får poeng for det i kategorien.</p>{/if}
              <div class="felt"><label for="q{i}">Spørsmål</label><textarea id="q{i}" rows="3" bind:value={it.tekst} oninput={endra}></textarea></div>
              {#if erH(it.kat)}
                <div class="hurtigfelt">
                  <div class="grid2">
                    <div class="felt"><label for="f{i}">Svarform på mobilen</label><select id="f{i}" bind:value={it.form} onchange={endra}><option value="alternativ">Alternativ A–D (trykk)</option><option value="fritt">Fritt svar (skriv)</option></select></div>
                    <div class="felt"><label for="ti{i}">Tid til å svare (sekund)</label><input id="ti{i}" type="number" min="5" max="120" value={it.tid ?? 20} oninput={e => { it.tid = Math.max(5, Math.round(Number(e.target.value) || 20)); endra(); }}></div>
                  </div>
                  {#if it.form === "alternativ"}
                    <fieldset class="alt"><legend class="lbl">Alternativa · vel det rette</legend>
                      {#each ["A", "B", "C", "D"] as b, j}
                        <label class="altrad"><input type="radio" name="rett{i}" checked={Number(it.rett) === j} onchange={() => { it.rett = j; it.svar = it.alternativ[j] || ""; endra(); }}><b>{b}</b><input class="inp" aria-label="Alternativ {b}" value={it.alternativ?.[j] ?? ""} oninput={e => { it.alternativ[j] = e.target.value; if (Number(it.rett) === j) it.svar = e.target.value; endra(); }}></label>
                      {/each}
                    </fieldset>
                  {:else}
                    <div class="grid2">
                      <div class="felt"><label for="s{i}">Fasit</label><input id="s{i}" bind:value={it.svar} oninput={endra}></div>
                      <div class="felt"><label for="g{i}">Godkjenn òg (skil med komma)</label><input id="g{i}" bind:value={it.godta} oninput={endra} placeholder="EUR, euroen"></div>
                    </div>
                    <p class="dempa" style="margin:0">Små skrivefeil blir godkjende av seg sjølv. Svar som er nesten rette, blir merka SJEKK, så avgjer du.</p>
                  {/if}
                </div>
                <div class="felt"><label for="n{i}">Manus eller notat (berre for deg)</label><input id="n{i}" bind:value={it.notat} oninput={endra}></div>
              {:else}
              <div class="grid2">
                <div class="felt"><label for="s{i}">Fasit</label><input id="s{i}" bind:value={it.svar} oninput={endra}></div>
                <div class="felt"><label for="n{i}">Manus eller notat (berre for deg)</label><input id="n{i}" bind:value={it.notat} oninput={endra}></div>
              </div>
              {/if}
              <div class="felt"><span class="lbl">Bilete</span>
                <div class="rad">
                  {#if it.bilete}{#await hentBilete(it.bilete) then src}{#if src}<img class="tommel" {src} alt="">{/if}{/await}<button class="btn liten fare" type="button" onclick={() => { it.bilete = undefined; endra(); }}>Fjern biletet</button>{/if}
                  <label class="btn liten">{it.bilete ? "Byt bilete" : "Last opp bilete"}<input class="sr" type="file" accept="image/*" onchange={e => lastOpp(it, e.target.files[0])}></label>
                </div>
              </div>
            {:else if it.type === "hurtigresultat"}
              {#if hurtigKat.length}
                <div class="felt"><label for="h{i}">Hurtigrunde</label><select id="h{i}" bind:value={it.kat} onchange={endra}>{#each hurtigKat as k}<option value={k.id}>{k.namn}</option>{/each}</select></div>
                <p class="dempa" style="margin:0">Viser vinnaren og dei neste i runda, med premien frå «Oppsett».</p>
              {:else}<p class="dempa" style="margin:0">Lag ei hurtigrunde under «Oppsett» først.</p>{/if}
            {:else if it.type === "kategori"}
              <div class="felt"><label for="k{i}">Kategori</label><select id="k{i}" bind:value={it.kat} onchange={endra}>{#each red.quiz.kategoriar as k}<option value={k.id}>{k.namn}</option>{/each}</select></div>
            {:else if it.type === "fasit"}
              <div class="felt"><span class="lbl">Fasit for</span>
                <div class="rad">{#each red.quiz.kategoriar as k}<label class="sjekk"><input type="checkbox" checked={(Array.isArray(it.kat) ? it.kat : [it.kat]).includes(k.id)} onchange={() => veksleFasit(it, k.id)}> {k.namn}</label>{/each}</div>
              </div>
            {:else if it.type === "tittel" || it.type === "pause"}
              <div class="grid2">
                <div class="felt"><label for="t{i}">Overskrift</label><input id="t{i}" bind:value={it.tittel} oninput={endra}></div>
                {#if it.type === "tittel"}<div class="felt"><label for="u{i}">Linje over</label><input id="u{i}" bind:value={it.undertittel} oninput={endra} placeholder={red.quiz.undertittel}></div>{/if}
              </div>
              <div class="felt"><label for="x{i}">Tekst under</label><textarea id="x{i}" rows="2" bind:value={it.tekst} oninput={endra}></textarea></div>
            {:else}
              <p class="dempa" style="margin:0">Viser poengtavla med alle laga som har namn.</p>
            {/if}
          </div>
        {/if}

        <div class="legg">
          <span class="dempa">Legg til under:</span>
          {#each TYPAR as [t, n]}<button class="lenke" type="button" onclick={() => nytt(t, i)}>+ {n}</button>{/each}
        </div>
      </li>
    {/each}
  </ol>
  {#if !plan.length}
    <div class="kort rad"><span class="dempa">Køyreplanen er tom.</span>{#each TYPAR as [t, n]}<button class="btn liten" type="button" onclick={() => nytt(t, -1)}>+ {n}</button>{/each}</div>
  {/if}
</section>

<style>
  .stack{display:flex;flex-direction:column;gap:12px;max-width:1000px}
  .liste{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
  .pkt{background:var(--p-flate);border:1px solid var(--p-linje);border-radius:12px;overflow:hidden}
  .pkt.kategori{border-left:6px solid var(--p-raud);margin-top:10px}
  .pkt.fasit,.pkt.poengtavle,.pkt.pause,.pkt.tittel{border-left:6px solid var(--p-gull)}
  .pkt.open{box-shadow:0 0 0 2px var(--p-gran)}
  .hode{display:flex;align-items:center;gap:8px;padding:4px 8px 4px 4px}
  .tittel{flex:1;min-width:0;display:flex;align-items:center;gap:10px;border:0;background:transparent;text-align:left;padding:8px;cursor:pointer;font-size:15px}
  .tittel .nr{font:500 12px "IBM Plex Mono",monospace;color:var(--p-dempa);width:24px}
  .tittel .type{font:700 11px var(--f-tekst);letter-spacing:.06em;text-transform:uppercase;color:var(--p-dempa);width:80px;flex:none}
  .tittel .t{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .mangel{font-size:12px;font-weight:700;color:#9A5209;background:#FBEAD0;border-radius:6px;padding:1px 6px;flex:none}
  .ikon{color:var(--p-dempa);flex:none}
  .arkm,.hm{font-size:12px;font-weight:700;border-radius:6px;padding:1px 6px;flex:none}
  .arkm{background:var(--p-linje);color:var(--p-blekk)}
  .hm{background:#FFF4D6;color:#7A5410}
  .pkt.ark-item{opacity:.7}
  .sjekkar{display:flex;flex-direction:column;gap:2px;padding-top:14px}
  .sjekkar .sjekk{padding-top:0}
  .hurtigfelt{display:flex;flex-direction:column;gap:12px;background:#FFFBF0;border:1.5px solid var(--p-gull);border-radius:12px;padding:12px}
  .alt{border:0;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
  .lbl{font:700 12px var(--f-tekst);letter-spacing:.06em;text-transform:uppercase;color:var(--p-dempa);margin-bottom:4px}
  .altrad{display:grid;grid-template-columns:auto 24px minmax(0,1fr);gap:8px;align-items:center}
  .altrad input[type=radio]{width:20px;height:20px;accent-color:var(--p-gran)}
  .verkty{display:flex;gap:4px;flex:none}
  .fare{color:var(--p-feil)}
  .kropp{padding:4px 16px 14px;display:flex;flex-direction:column;gap:12px;border-top:1px solid var(--p-linje);background:var(--p-flate-2)}
  .sjekk{display:flex;align-items:center;gap:8px;font-size:14px;padding-top:20px}
  .rad .sjekk{padding-top:0;margin-right:10px}
  .tommel{height:64px;border-radius:8px;border:1px solid var(--p-linje)}
  .legg{display:flex;flex-wrap:wrap;gap:4px 10px;align-items:center;padding:0 12px 6px 46px;font-size:13px;opacity:0;max-height:0;transition:opacity .15s}
  .pkt:hover .legg,.pkt:focus-within .legg,.pkt.open .legg{opacity:1;max-height:none}
  .lenke{border:0;background:none;color:var(--p-gran);font-weight:700;cursor:pointer;padding:4px 2px;text-decoration:underline;text-underline-offset:3px}
  @media (hover:none){.legg{opacity:1;max-height:none}}
</style>
