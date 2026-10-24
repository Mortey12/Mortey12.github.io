<script>
  // Oppsett: namn på quizen, kategoriar, import og eksport, og nullstilling.
  import { red, endra, lagre, melding, setState, setNo } from "./red.svelte.js";
  import { live } from "../lib/data.svelte.js";
  import { db, feiltekst, hentBilete } from "../lib/firebase.js";
  import { doc, setDoc, writeBatch, deleteDoc } from "firebase/firestore";
  import { nyId, num } from "../lib/quiz.js";

  const q = $derived(red.quiz);
  let armert = $state(""), impMelding = $state("");
  const arm = (k, fn) => { if (armert !== k) { armert = k; setTimeout(() => { if (armert === k) armert = ""; }, 3000); return; } armert = ""; fn(); };
  const iBruk = id => q.plan.some(p => p.kat === id || (Array.isArray(p.kat) && p.kat.includes(id)));

  function nyKat(){ q.kategoriar.push({ id: nyId("k"), namn: "Ny kategori", maks: 6 }); endra(); }
  function flyttKat(i, d){ const j = i + d; if (j < 0 || j >= q.kategoriar.length) return; [q.kategoriar[i], q.kategoriar[j]] = [q.kategoriar[j], q.kategoriar[i]]; endra(); }
  function slettKat(i){ const k = q.kategoriar[i]; if (iBruk(k.id)) { melding(`«${k.namn}» er i bruk i køyreplanen. Fjern eller flytt spørsmåla først.`, true); return; } arm("kat" + k.id, () => { q.kategoriar.splice(i, 1); endra(); }); }

  async function importer(fil){
    if (!fil) return; impMelding = "Les fila …";
    try {
      const data = JSON.parse(await fil.text());
      if (!Array.isArray(data.plan)) throw new Error("Fila manglar køyreplan (plan)");
      const plan = structuredClone(data.plan); let n = 0;
      for (const it of plan) {
        if (typeof it.bilete === "string" && it.bilete.startsWith("data:")) { const id = nyId("b"); await setDoc(doc(db, "etneBilete", id), { data: it.bilete }); it.bilete = id; n++; }
        if (it.nr === null) { it.nummerert = false; } delete it.nr;
      }
      red.quiz = { tittel: data.tittel || "Julequiz", undertittel: data.undertittel || "Etnequizen", premietekst: data.premietekst || "", pausetekst: data.pausetekst || "Pause", wifi: data.wifi || q.wifi || "", wifiPassord: data.wifiPassord || q.wifiPassord || "", kategoriar: data.kategoriar || [], plan };
      await lagre(); await setState({ steg: 0, modus: "plan", avslort: 0, sist: 0 });
      impMelding = `Importerte ${plan.length} punkt og ${n} bilete.`;
    } catch (e) { impMelding = "Importen feila: " + feiltekst(e); }
  }
  async function eksporter(){
    const snap = structuredClone($state.snapshot(q));
    for (const it of snap.plan) if (it.bilete) it.bilete = await hentBilete(it.bilete) || undefined;
    const blob = new Blob([JSON.stringify({ ...snap, lag: live.lag }, null, 1)], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `etnequiz-${new Date().toISOString().slice(0, 10)}.json`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 3000);
  }
  async function nullstillPoeng(){
    const b = writeBatch(db); live.lag.forEach(t => b.update(doc(db, "etneLag", t.id), { poeng: {}, joker: "" }));
    try { await b.commit(); melding("Poenga er nullstilte"); } catch (e) { melding("Feila: " + feiltekst(e), true); }
  }
  async function nullstillHurtig(){
    try {
      const b = writeBatch(db); live.svar.forEach(x => b.delete(doc(db, "etneSvar", x.id))); await b.commit();
      await setDoc(doc(db, "etne", "state"), { opningar: {}, fasitar: {} }, { merge: true });
      live.state.opningar = {}; live.state.fasitar = {};
      await setNo({ id: null, open: false, vent: false, fasitVist: false, resultat: false });
      melding("Hurtigrundane er nullstilte");
    } catch (e) { melding("Feila: " + feiltekst(e), true); }
  }
  async function frigjerAlle(){
    const b = writeBatch(db); live.mobilar.forEach(m => b.delete(doc(db, "etneMobil", m.id)));
    try { await b.commit(); await setNo({ jokerLaast: false, resultat: false }); melding("Alle mobilar er frigjorde"); } catch (e) { melding("Feila: " + feiltekst(e), true); }
  }
  async function slettLag(){
    const b = writeBatch(db); live.lag.forEach(t => b.delete(doc(db, "etneLag", t.id)));
    try { await b.commit(); melding("Alle lag er sletta"); } catch (e) { melding("Feila: " + feiltekst(e), true); }
  }
</script>

<section class="stack">
  <div class="kort stack">
    <h2>Quizen</h2>
    <div class="grid2">
      <div class="felt"><label for="tt">Tittel</label><input id="tt" bind:value={q.tittel} oninput={endra} placeholder="Julequiz 2026"></div>
      <div class="felt"><label for="ut">Linje over tittelen</label><input id="ut" bind:value={q.undertittel} oninput={endra} placeholder="Etnequizen"></div>
      <div class="felt"><label for="pt">Premietekst nedst på skjermen</label><input id="pt" bind:value={q.premietekst} oninput={endra} placeholder="1. premie: gåvekort frå Fugl Fønix"></div>
      <div class="felt"><label for="pa">Tekst på pauseskjermen</label><input id="pa" bind:value={q.pausetekst} oninput={endra} placeholder="Pause"></div>
      <div class="felt"><label for="wf">Wi-Fi-namn (står på bordkorta)</label><input id="wf" bind:value={q.wifi} oninput={endra} placeholder="Etne-gjest"></div>
      <div class="felt"><label for="wp">Wi-Fi-passord</label><input id="wp" bind:value={q.wifiPassord} oninput={endra}></div>
    </div>
  </div>

  <div class="kort stack">
    <div class="rad"><h2>Kategoriar</h2><span style="flex:1"></span><button class="btn" type="button" onclick={nyKat}>+ Ny kategori</button></div>
    <p class="dempa" style="margin:0">Rekkjefølgja her gir nummera på skjermen. Ekstrakategoriar, som rebus, kan stå utan nummer. Fasitliste brukar du når fasiten ikkje kjem frå spørsmåla, til dømes i musikkrunden eller eit rebusark som berre finst på papir: éi linje per svar. Ei hurtigrunde blir svart på mobilen, har eiga stilling og eigen premie, og tel ikkje med i hovudpoenga.</p>
    {#each q.kategoriar as k, i (k.id)}
      <div class="katrad">
        <div class="felt"><label for="kn{i}">Namn</label><input id="kn{i}" bind:value={k.namn} oninput={endra}></div>
        <div class="felt smal"><label for="km{i}">Maks poeng</label><input id="km{i}" inputmode="decimal" value={k.maks ?? ""} oninput={e => { k.maks = num(e.target.value); endra(); }}></div>
        <div class="sjekkar">
          <label class="sjekk"><input type="checkbox" checked={!!k.utanNummer} disabled={!!k.hurtig} onchange={e => { k.utanNummer = e.target.checked || undefined; endra(); }}> Utan nummer</label>
          <label class="sjekk"><input type="checkbox" checked={!!k.hurtig} onchange={e => { k.hurtig = e.target.checked || undefined; endra(); }}> ⚡ Hurtigrunde</label>
        </div>
        {#if k.hurtig}
        <div class="felt brei"><label for="kp{i}">Premie for hurtigrunda</label><input id="kp{i}" bind:value={k.premie} oninput={endra} placeholder="Gåvekort frå …"></div>
        {:else}
        <div class="felt brei"><label for="kf{i}">Fasitliste (valfri)</label><textarea id="kf{i}" rows="2" value={(k.fasitliste || []).join("\n")} oninput={e => { const l = e.target.value.split("\n").map(s => s.trim()).filter(Boolean); k.fasitliste = l.length ? l : undefined; endra(); }}></textarea></div>
        {/if}
        <div class="verkty">
          <button class="ibtn" type="button" aria-label="Flytt opp" disabled={i === 0} onclick={() => flyttKat(i, -1)}>↑</button>
          <button class="ibtn" type="button" aria-label="Flytt ned" disabled={i === q.kategoriar.length - 1} onclick={() => flyttKat(i, 1)}>↓</button>
          <button class="ibtn fare" type="button" aria-label="Slett kategorien" onclick={() => slettKat(i)}>{armert === "kat" + k.id ? "Sikker?" : "✕"}</button>
        </div>
      </div>
    {/each}
  </div>

  <div class="kort stack">
    <h2>Import og eksport</h2>
    <p class="dempa" style="margin:0">Importer ein heil quiz frå fil, til dømes ein som er laga frå PowerPoint. Importen erstattar køyreplanen og kategoriane, men ikkje laga.</p>
    <div class="rad">
      <label class="btn primary">Importer frå fil<input class="sr" type="file" accept="application/json,.json" onchange={e => { importer(e.target.files[0]); e.target.value = ""; }}></label>
      <button class="btn" type="button" onclick={eksporter}>Last ned kopi</button>
      <span class="dempa">{impMelding}</span>
    </div>
  </div>

  <div class="kort stack">
    <h2>Nullstilling</h2>
    <div class="rad">
      <button class="btn" type="button" onclick={() => setState({ steg: 0, modus: "plan", avslort: 0, sist: 0 })}>Storskjermen til start</button>
      <button class="btn fare" type="button" onclick={() => arm("poeng", nullstillPoeng)}>{armert === "poeng" ? "Trykk igjen for å nullstille" : "Nullstill poeng og joker"}</button>
      <button class="btn fare" type="button" onclick={() => arm("hurtig", nullstillHurtig)}>{armert === "hurtig" ? "Trykk igjen: alle mobilsvar blir sletta" : "Nullstill hurtigrundane"}</button>
      <button class="btn fare" type="button" onclick={() => arm("mob", frigjerAlle)}>{armert === "mob" ? "Trykk igjen for å frigjere" : "Frigjer alle mobilar"}</button>
      <button class="btn fare" type="button" onclick={() => arm("lag", slettLag)}>{armert === "lag" ? "Trykk igjen for å slette" : "Slett alle lag"}</button>
    </div>
  </div>
</section>

<style>
  .stack{display:flex;flex-direction:column;gap:12px}
  section.stack{max-width:1000px}
  .katrad{display:grid;grid-template-columns:minmax(0,1.2fr) 100px auto minmax(0,1.6fr) auto;gap:10px;align-items:end;padding:10px 0;border-top:1px solid var(--p-linje)}
  .sjekk{display:flex;align-items:center;gap:6px;font-size:14px;white-space:nowrap}
  .sjekkar{display:flex;flex-direction:column;gap:2px;padding-bottom:4px}
  .verkty{display:flex;gap:4px;padding-bottom:4px}
  .fare{color:var(--p-feil)}
  @media (max-width:820px){.katrad{grid-template-columns:minmax(0,1fr) 100px}.brei{grid-column:1 / -1}}
</style>
