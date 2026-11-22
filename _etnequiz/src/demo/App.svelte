<script>
  // Førehandsvising av rettinga: ingen innlogging, eksempeldata i minnet, ingenting blir lagra i Firebase.
  import { live } from "../lib/data.svelte.js";
  import Rett from "../panel/Rett.svelte";

  const runder = [
    ["r1", "Allmennkunnskap", ["Oslo", "1814", "Sju", "Merkur", "Ibsen", "Rom"]],
    ["r2", "Geografi", ["Nilen", "Canberra", "Galdhøpiggen", "Stillehavet", "Etne", "Island"]],
    ["r3", "Musikk", ["a-ha", "ABBA", "Grieg", "Queen", "Kygo", "Beatles"]],
    ["r4", "Sport", ["Bjørndalen", "Haaland", "1994", "Wimbledon", "Lillehammer", "Ski"]],
    ["r5", "Rebus", ["Juletre", "Snømann", "Pepperkake", "Nisse", "Reinsdyr", "Grøt"]]
  ];
  const namn = ["Hølen IL", "Bromance Memorosa", "De siste dagers hellige", "Skinnbamsen", "Oppstandelse",
    "Team Hjortepølsa", "Nederlaget", "De Uvitende Optimistene", "Lisa gikk til skolen", "Kåre & Petrusa"];

  // Seks lag er alt retta i første runde, så statistikken har noko å vise
  const merke = ["full", "annet", "halv", ""];
  const lag = namn.map((n, i) => {
    const l = { id: String(i + 1), bord: i + 1, namn: n, joker: i % 4 === 1 ? "r2" : "", poeng: {}, rett: {} };
    if (i < 6) {
      const marks = Array.from({ length: 6 }, (_, q) => ({ m: merke[(i * 3 + q * 5 + (q === 4 ? 2 : 0)) % (q < 2 ? 2 : 4)], c: "" }));
      const vals = marks.map(m => m.m === "full" ? 1 : m.m === "annet" ? 0.75 : m.m === "halv" ? 0.5 : 0);
      l.poeng.r1 = vals.reduce((a, b) => a + b, 0);
      l.rett.r1 = { marks, vals, by: ["fredrik@demo", "morten@demo"][i % 2], at: 1 };
    }
    return l;
  });

  live.quiz = {
    tittel: "Førehandsvising", undertittel: "Etnequizen", kategoriar: runder.map(([id, n]) => ({ id, namn: n, maks: 6 })),
    plan: runder.flatMap(([id, , svar]) => [{ type: "kategori", kat: id }, ...svar.map((s, j) => ({ type: "sporsmal", kat: id, tekst: `Spørsmål ${j + 1}`, svar: s }))])
  };
  live.lag = lag;
  live.klar = true;
</script>

<header class="band">
  <div class="inner topp">
    <div class="merke">
      <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.6 6.6L21.5 9l-5.3 4.5L18 20.5 12 16.8 6 20.5l1.8-7L2.5 9l6.9-.4z" fill="#E8B84A"/></svg>
      <div><span class="namn">Etnequizen</span><span class="under">Førehandsvising av rettinga</span></div>
    </div>
    <nav class="meny" aria-label="Meny">
      <a href="./">Quizmaster-panelet</a>
      <a href="skjerm.html">Storskjermen</a>
      <a href="demo.html" aria-current="page">Prøv rettinga</a>
    </nav>
  </div>
</header>

<main class="inner" style="padding-block:16px 48px">
  <p class="info">Dette er ei førehandsvising med 10 eksempellag og fem rundar. Ingenting blir lagra, og alt forsvinn når du lastar sida på nytt. Første runde er alt retta for seks lag, så du ser statistikken.</p>
  <Rett demo />
</main>

<style>
  .band{background:var(--p-gran);color:#F7F1E3;background-image:radial-gradient(rgba(247,241,227,.12) 1.5px,transparent 2px);background-size:46px 46px}
  .topp{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;padding-block:14px}
  .merke{display:flex;align-items:center;gap:12px}
  .merke .namn{display:block;font-family:var(--f-tittel);font-weight:700;font-size:24px;line-height:1.1}
  .merke .under{display:block;font-size:14px;color:#B9CBBF}
  .meny{display:flex;flex-wrap:wrap;gap:4px}
  .meny a{color:#F7F1E3;text-decoration:none;font-weight:700;font-size:15px;padding:10px 14px;border-radius:999px;min-height:44px;display:inline-flex;align-items:center}
  .meny a:hover{background:rgba(247,241,227,.12)}
  .meny a[aria-current="page"]{background:var(--p-gull);color:var(--p-gran)}
  .info{margin:0 0 14px;background:#FFF4D6;border:1px solid var(--p-gull);border-radius:10px;padding:10px 14px;font-size:14px;max-width:900px}
</style>
