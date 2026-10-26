/* Skiftliste prototype: data and rules.
   Everything here is made up. No real names, no real shift data.
   Pure functions, no DOM, so it can be tested in Node as well. */
(function (root) {
  'use strict';

  const TODAY = '2026-10-26';
  const MONTHS = ['jan', 'feb', 'mars', 'april', 'mai', 'juni', 'juli', 'aug', 'sep', 'okt', 'nov', 'des'];
  const MONTH_FULL = ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'];
  const WD_SHORT = ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'];
  const WD_FULL = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];

  /* ---------------- dates ---------------- */
  const t = (iso) => Date.parse(iso + 'T12:00:00Z');
  const isoOf = (ms) => new Date(ms).toISOString().slice(0, 10);
  const addDays = (iso, n) => isoOf(t(iso) + n * 864e5);
  const wd = (iso) => new Date(t(iso)).getUTCDay();
  const range = (from, to) => { const out = []; for (let d = from; d <= to; d = addDays(d, 1)) out.push(d); return out; };
  const dayShort = (iso) => WD_SHORT[wd(iso)] + ' ' + Number(iso.slice(8)) + '. ' + MONTHS[Number(iso.slice(5, 7)) - 1];
  const dayLong = (iso) => WD_FULL[wd(iso)] + ' ' + Number(iso.slice(8)) + '. ' + MONTHS[Number(iso.slice(5, 7)) - 1];
  const fmt = (iso) => Number(iso.slice(8)) + '. ' + MONTHS[Number(iso.slice(5, 7)) - 1] + ' ' + iso.slice(0, 4);
  const fmtShort = (iso) => Number(iso.slice(8)) + '. ' + MONTHS[Number(iso.slice(5, 7)) - 1];
  const monthLabel = (iso) => MONTH_FULL[Number(iso.slice(5, 7)) - 1] + (iso.slice(0, 4) === '2026' ? '' : ' ' + iso.slice(0, 4));
  function isoWeek(iso) {
    const d = new Date(t(iso));
    const day = (d.getUTCDay() + 6) % 7;
    d.setUTCDate(d.getUTCDate() - day + 3);
    const firstThu = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
    return 1 + Math.round(((d - firstThu) / 864e5 - 3 + ((firstThu.getUTCDay() + 6) % 7)) / 7);
  }
  const mondayOf = (iso) => addDays(iso, -((wd(iso) + 6) % 7));
  const ageOn = (birth, on) => { let a = Number(on.slice(0, 4)) - Number(birth.slice(0, 4)); if (on.slice(5) < birth.slice(5)) a -= 1; return a; };
  const expiry = (iso) => (Number(iso.slice(0, 4)) + 2) + iso.slice(4);
  const startOf = (time) => { const m = time.match(/(\d\d):(\d\d)/); return m ? m[1] + ':' + m[2] : '99:99'; };

  /* ---------------- seeded random ---------------- */
  function rng(seed) {
    let s = seed >>> 0;
    return () => { s = (s + 0x6D2B79F5) >>> 0; let x = Math.imul(s ^ (s >>> 15), 1 | s); x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x; return ((x ^ (x >>> 14)) >>> 0) / 4294967296; };
  }

  /* ---------------- static setup ---------------- */
  // Names checked against the real Samfunnettjeneste sheet and the H26 shift list: no first or last name appears in either.
  const FIRST = 'Rino Vetle Synnøve Eilif Halvard Idun Jostein Kjellaug Leiv Njål Oddny Pål Randi Tormod Unni Alvhild Dagrun Gro Haldor Ingvild Jorunn Ketil Nanna Oddvar Ragna Solrun Tellef Ulrikke Vilja Arnhild Brynjar Dagfinn Edel Geir Joar Mona Nils Petra Rune Ulla Vår Yngve Åsmund Aud Bodil Hallvard Inga Jon Oline Sølve Una Viljar Amund Benedikte Dina Eskil Fride Gudrun Hogne Kolbjørn Herdis Torgunn Mathea Oskar Ragnar Vilde Åsne Agnar Birgit Eira Frode Grete Kjersti Leon Njord Rakel Teodor Ulf Wenche Bror Dorte Erlend Fanny Gisle Isa Knut Lavrans Merete Tea Viktor'.split(' ');
  const LAST = 'Aasheim Bakketun Skeie Eide Fjellstad Gjerde Haugen Hovland Ims Jordal Kvamme Lid Moldestad Nesheim Opheim Rasdal Skogstad Ullaland Vangsnes Vikøren Aarvik Dyrøy Eikås Flatebø Grov Hellesøy Instefjord Kalvatn Langeland Nordbø Oen Rong Solheim Tysnes Ulvestad Vassbotn Øvrebø Årdal Brekke Fosse Hagen Lunde Sæle Vold Holm Rød Fjell Strand Kristiansen Haugland Rønning Bjørkås Djupvik Espeland Fanebust Gilje Hatlevik Isdal Kårstad Liland Midtbø Nygård Orvik Pettersen Rykkje Sandvik Tangen Utne Valvatne Ådland'.split(' ');

  const SUBS = ['Stjerne', 'Kjøkken', 'Grøndahls', 'Halvtimen'];
  const SAMF_GROUPS = [
    { name: 'Upop', n: 10 }, { name: 'Kultur', n: 9 }, { name: 'Fest', n: 12 }, { name: 'PR', n: 9 },
    { name: 'Debatt', n: 5 }, { name: 'Quiz', n: 4 }, { name: 'Aktuelt', n: 4 }, { name: 'Finans', n: 3 },
    { name: 'BLAK', n: 5, borg: true }, { name: 'Sirenene', n: 5, borg: true }, { name: 'MAR', n: 4, borg: true }
  ];
  // Skjenke make-up per subgroup: [level, contract, count]
  const SKJENKE = {
    Stjerne: [['skiftleder', 'uke', 11], ['skiftleder', 'pensjonist', 1], ['skjenker', 'uke', 17], ['skjenker', 'pensjonist', 1], ['opplaering', 'uke', 3], ['sl-opplaering', 'uke', 1]],
    'Kjøkken': [['kokk', 'uke', 12], ['kokk', 'pensjonist', 1], ['opplaering', 'uke', 2]],
    'Grøndahls': [['skiftleder', 'uke', 6], ['skjenker', 'uke', 8], ['skjenker', 'pensjonist', 1], ['opplaering', 'uke', 2]],
    Halvtimen: [['skiftleder', 'uke', 3], ['skjenker', 'uke', 6], ['opplaering', 'uke', 1]]
  };

  const ROLES = {
    skiftleder: { name: 'Skiftleder', only: 'skiftleder' },
    skjenker: { name: 'Skjenker', bar: true, crew: true },
    bartender: { name: 'Bartender', bar: true, crew: true },
    kokk: { name: 'Kokk', only: 'kokk', crew: true },
    opplaering: { name: 'Opplæring', only: 'opplaering' },
    garderobe: { name: 'Garderobe' },
    bar: { name: 'Bar', bar: true },
    billett: { name: 'Billett' },
    opprigg: { name: 'Opprigg' },
    nedrigg: { name: 'Nedrigg' },
    villavakt: { name: 'Villavakt' },
    headset: { name: 'Headset-vakt' },
    ha: { name: 'Hovedansvarlig', only: 'arrangor' }
  };

  const INFO = {
    'skiftleder': 'Du leder skiftet, tar imot de som har samfunnettjeneste eller opplæring, og viser dem hva de skal gjøre.',
    'skjenker|dag': 'Bemanne kassen, servere kaffe, kaker og mat, og rydde og vaske underveis.',
    'skjenker|kveld': 'Bemanne kassen, servere mat og drikke, og rydde og vaske underveis.',
    'skjenker|pub': 'Selge øl, andre drikkevarer og snacks, samle glass, hente is, telle varer og ta oppvasken.',
    'bartender': 'Lage og servere cocktails, ta bestillinger og holde orden i baren. Før åpning fyller dere opp varer og kutter sitrus.',
    'kokk': 'Lage maten som serveres i Stjernesalen.',
    'opplaering': 'Du er med i tillegg til det vanlige skiftet og lærer rutinene. Etter 3 skift er du utlært.',
    'villavakt': 'Passe på at Villaens regler følges og være kontaktpunkt for vektere. Dere er alltid to, og dere blir til siste gjest har gått.',
    'bar': 'Åpne og stenge baren, bemanne kassen, selge drikke og snacks og holde det ryddig.',
    'billett': 'Skanne billetter og medlemsbevis i døra og ha ansvar for innslippet.',
    'opprigg': 'Sette opp stoler, bord og scene. Noen fra arrangøren viser hvordan rommet skal se ut.',
    'nedrigg': 'Rydde rommet etter arrangementet så det er klart til neste dag.',
    'garderobe': 'Ta imot og levere ut jakker og vesker.',
    'headset': 'Dele ut og samle inn headset, og passe på at alle leverer dem tilbake.',
    'ha': 'Overordnet ansvar for arrangementet og kontaktpunkt for alle frivillige som jobber der.'
  };

  const MEET = {
    'Stjernesalen': 'Bruk døren i bakgården og ring driftsleder (nummeret står på skiltet). Møt skiftleder i Stjernesalen 30 minutter før.',
    'kjokken': 'Møt på kjøkkenet 15 minutter før skiftet.',
    'Grøndahls': 'Hverdager: vanlig inngang. Lørdag: døren i bakgården. Møt skiftleder i resepsjonen 30 minutter før åpning.',
    'Halvtimen': 'Møt i Halvtimen i 3. etasje 30 minutter før åpning.',
    'Villaen': 'Møt arrangøren i Akvariet når festen starter.',
    'Tivoli': 'Møt hovedansvarlig i Tivoli når skiftet starter.'
  };

  const COURSES = {
    brann: { name: 'Brannkurs', dates: [
      { id: 'f1', date: '2026-11-04', label: 'onsdag 4. nov kl. 18:00', spots: 6 },
      { id: 'f2', date: '2026-11-18', label: 'onsdag 18. nov kl. 18:00', spots: 14 },
      { id: 'f3', date: '2026-12-02', label: 'onsdag 2. des kl. 18:00', spots: 16 }] },
    bar: { name: 'Barkurs', dates: [
      { id: 'b1', date: '2026-11-11', label: 'onsdag 11. nov kl. 17:00', spots: 3 },
      { id: 'b2', date: '2026-11-25', label: 'onsdag 25. nov kl. 17:00', spots: 12 }] }
  };

  const UNAVAIL = [
    { group: 'BLAK', from: '2026-11-13', to: '2026-11-15', text: 'BLAK har øvingshelg' },
    { group: 'Sirenene', from: '2026-12-04', to: '2026-12-05', text: 'Sirenene har konsert' }
  ];

  const LEADERS = [
    { id: 'skjenkeleder', label: 'Skjenkeleder', scope: 'all', samf: true, alloc: true, text: 'Full tilgang: alle steder, fordeling, redigering og hva som er åpent for samfunnettjeneste.' },
    { id: 'Stjerne', label: 'Stjerne', scope: 'Stjerne', alloc: true, text: 'Leder og personalansvarlig i Stjerne: Stjerne-skift, fordeling og redigering for Stjerne. Ser hele Stjernesalen, også kjøkkenet.' },
    { id: 'Kjøkken', label: 'Kjøkken', scope: 'Kjøkken', alloc: true, text: 'Leder og personalansvarlig på kjøkkenet: kjøkkenskift, fordeling og redigering. Ser hele Stjernesalen.' },
    { id: 'Grøndahls', label: 'Grøndahls', scope: 'Grøndahls', alloc: true, text: 'Leder og personalansvarlig i Grøndahls.' },
    { id: 'Halvtimen', label: 'Halvtimen', scope: 'Halvtimen', alloc: true, text: 'Leder og personalansvarlig i Halvtimen.' },
    { id: 'hs-full', label: 'HS: leder og driftsansvarlig', scope: 'all', samf: true, alloc: true, text: 'Full tilgang, som skjenkeleder.' },
    { id: 'hs', label: 'HS: øvrige', scope: 'samf', samf: true, alloc: false, text: 'Samfunnettjeneste: arrangementer, hvilke plasser som er åpne for samfunnettjeneste, merknader og framdrift per gruppe. Tid og bemanning på Skjenke-skift endres av Skjenke.' }
  ];

  const LEVEL_TEXT = { skiftleder: 'Skiftleder', skjenker: 'Skjenker', kokk: 'Kokk', opplaering: 'Opplæring', 'sl-opplaering': 'Skiftlederopplæring' };

  /* ---------------- templates ---------------- */
  // Times and crew from the H26 shift list. Crew = skiftleder + people; opplæring comes on top.
  function templatesFor(iso) {
    const w = wd(iso); const out = [];
    if (w >= 1 && w <= 5) {
      out.push({ sub: 'Stjerne', venue: 'Stjernesalen', tpl: 'dag', title: 'Dagskift', time: '11:30–17:00', slots: [['skiftleder', 1], ['skjenker', 1], ['opplaering', 1]] });
      out.push({ sub: 'Kjøkken', venue: 'Stjernesalen', tpl: 'kjokken', title: 'Kjøkken', time: '14:00–20:00', slots: [['kokk', 2], ['opplaering', 1]] });
      out.push({ sub: 'Stjerne', venue: 'Stjernesalen', tpl: 'kveld', title: w === 2 ? 'Quizskift' : 'Kveldsskift', time: w === 2 ? '16:30–23:00' : '16:30–22:00', slots: [['skiftleder', 1], ['skjenker', w === 2 ? 2 : 1], ['opplaering', 1]] });
    }
    if (w >= 1 && w <= 6) {
      const late = w >= 5;
      const slots = [['skiftleder', 1], ['skjenker', 1], ['opplaering', 1]];
      if (w === 6) slots.push(['garderobe', 1]);
      out.push({ sub: 'Grøndahls', venue: 'Grøndahls', tpl: 'pub', title: 'Pub', time: late ? '20:30–03:30' : '19:30–01:30', slots: slots });
    }
    if (w === 5 || w === 6) out.push({ sub: 'Halvtimen', venue: 'Halvtimen', tpl: 'apning', title: 'Åpningsskift', time: '20:30–03:30', slots: [['skiftleder', 1], ['bartender', 2], ['opplaering', 1]] });
    return out;
  }

  const ARRANGEMENTS = [
    { date: '2026-10-30', title: 'Fredagsfest', venue: 'Villaen', time: 'Fra 22:00 til siste gjest', organizer: 'Fest', slots: [['villavakt', 2]] },
    { date: '2026-11-05', title: 'Ølsmaking', venue: 'Tivoli', time: '15:00–22:00', organizer: 'Hovedstyret', slots: [['ha', 1], ['opprigg', 2], ['billett', 2], ['bar', 2], ['nedrigg', 2]] },
    { date: '2026-11-12', title: 'Medlemsmøte', venue: 'Tivoli', time: '17:00–21:30', organizer: 'Hovedstyret', slots: [['opprigg', 2], ['billett', 2], ['nedrigg', 2]] },
    { date: '2026-11-13', title: 'Fredagsfest', venue: 'Villaen', time: 'Fra 22:00 til siste gjest', organizer: 'Fest', slots: [['villavakt', 2]] },
    { date: '2026-11-20', title: 'Silent disko', venue: 'Tivoli', time: '20:00–03:00', organizer: 'Hovedstyret', slots: [['bar', 3], ['headset', 2]] },
    { date: '2026-11-26', title: 'Konsert', venue: 'Tivoli', time: '18:00–00:30', organizer: 'Kultur', samf: false, slots: [['ha', 1], ['bar', 2], ['billett', 2]] },
    { date: '2026-11-27', title: 'Fredagsfest', venue: 'Villaen', time: 'Fra 22:00 til siste gjest', organizer: 'Fest', slots: [['villavakt', 2]] },
    { date: '2026-12-04', title: 'Julebord', venue: 'Villaen', time: 'Fra 19:00 til siste gjest', organizer: 'Fest', slots: [['bar', 3], ['garderobe', 2], ['villavakt', 2]] },
    { date: '2026-12-10', title: 'Juleverksted', venue: 'Tivoli', time: '16:00–21:00', organizer: 'Upop', slots: [['opprigg', 2], ['billett', 1], ['nedrigg', 2]] }
  ];

  const FIRST_DAY = '2026-10-27';
  const LAST_DAY = '2026-12-18';
  const DEC_FROM = '2026-12-01';

  /* ---------------- world ---------------- */
  function buildWorld(seed) {
    const r = rng(seed || 2026);
    const pick = (arr) => arr[Math.floor(r() * arr.length)];
    const used = new Set();
    const fullName = () => { for (;;) { const n = pick(FIRST) + ' ' + pick(LAST); if (!used.has(n)) { used.add(n); return n; } } };
    const dateBetween = (a, b) => isoOf(t(a) + Math.floor(r() * ((t(b) - t(a)) / 864e5)) * 864e5);
    const people = [];
    let idn = 0;
    const mk = (o) => { idn += 1; const p = Object.assign({ id: 'p' + idn, name: fullName() }, o); p.first = p.name.split(' ')[0]; people.push(p); return p; };

    SUBS.forEach((sub) => {
      SKJENKE[sub].forEach(([level, contract, n]) => {
        for (let i = 0; i < n; i += 1) {
          const minAge = sub === 'Halvtimen' ? 20 : 19;
          const age = minAge + Math.floor(r() * (27 - minAge));
          const birth = (2026 - age - (r() < 0.5 ? 1 : 0)) + '-' + String(1 + Math.floor(r() * 12)).padStart(2, '0') + '-' + String(1 + Math.floor(r() * 28)).padStart(2, '0');
          const courses = {};
          if (r() < 0.95) courses.brann = level === 'opplaering' ? dateBetween('2026-08-20', '2026-10-20') : dateBetween('2024-09-01', '2026-09-30');
          mk({ group: 'Skjenke', sub: sub, level: level, contract: contract, chef: sub === 'Kjøkken', birth: birth, courses: courses, training: level === 'opplaering' || level === 'sl-opplaering' ? Math.floor(r() * 3) : 0, done: 0 });
        }
      });
    });
    SAMF_GROUPS.forEach((g) => {
      for (let i = 0; i < g.n; i += 1) {
        const age = 18 + Math.floor(r() * 10);
        const birth = (2026 - age - (r() < 0.5 ? 1 : 0)) + '-' + String(1 + Math.floor(r() * 12)).padStart(2, '0') + '-' + String(1 + Math.floor(r() * 28)).padStart(2, '0');
        const courses = {};
        if (r() < 0.6) courses.brann = dateBetween('2024-08-01', '2026-10-01');
        if (r() < 0.45) courses.bar = dateBetween('2024-08-01', '2026-10-01');
        mk({ group: g.name, borg: !!g.borg, birth: birth, courses: courses, done: r() < 0.35 ? 1 : 0 });
      }
    });

    // Weekday answers for every Skjenke member (about 1 in 10 has not answered).
    const rules = {}; const wishes = {};
    people.filter((p) => p.group === 'Skjenke').forEach((p) => {
      if (r() < 0.1) return;
      const days = p.sub === 'Halvtimen' ? [5, 6] : (p.sub === 'Grøndahls' ? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4, 5]);
      const rr = {};
      days.forEach((d) => { const x = r(); rr[d] = x < 0.35 ? 'vil' : (x < 0.7 ? 'kan' : (x < 0.85 ? 'nei' : undefined)); if (!rr[d]) delete rr[d]; });
      rules[p.id] = rr;
    });

    // Shifts from the templates, plus arrangements.
    const shifts = [];
    range(FIRST_DAY, LAST_DAY).forEach((iso) => {
      templatesFor(iso).forEach((tp) => {
        shifts.push({
          id: tp.venue.slice(0, 3).toLowerCase() + '-' + tp.tpl + '-' + iso, date: iso, venue: tp.venue, sub: tp.sub, kind: 'drift', tpl: tp.tpl,
          title: tp.title, time: tp.time, note: '', closed: false, organizer: '',
          slots: tp.slots.map(([role, count], i) => ({ key: 's' + i, role: role, count: count, people: [], swaps: [] }))
        });
      });
    });
    ARRANGEMENTS.forEach((a, i) => {
      shifts.push({ id: 'arr-' + i, date: a.date, venue: a.venue, sub: null, kind: 'arrangement', tpl: null, title: a.title, time: a.time, note: '', closed: false, organizer: a.organizer, samf: a.samf, slots: a.slots.map(([role, count], j) => ({ key: 's' + j, role: role, count: count, people: [], swaps: [] })) });
    });
    shifts.sort((x, y) => (x.date + startOf(x.time) < y.date + startOf(y.time) ? -1 : 1));

    // A few concrete details from the real list, with invented people.
    const find = (id) => shifts.find((s) => s.id === id);
    const quiz = find('stj-kveld-2026-10-27'); if (quiz) quiz.note = 'Reservert bord 29 og 30 fra 18 (kun quizmeny)';
    const res = find('stj-dag-2026-11-05'); if (res) res.note = 'Reservert bord 22 fra 16';
    const hlvClosed = find('hal-apning-2026-10-31'); if (hlvClosed) hlvClosed.closed = true;
    const hlvClosed2 = find('hal-apning-2026-11-21'); if (hlvClosed2) hlvClosed2.closed = true;

    const state = {
      version: 1, shifts: shifts, rules: rules, wishes: wishes, enrolled: {},
      periods: { Stjerne: 'open', 'Kjøkken': 'open', 'Grøndahls': 'open', Halvtimen: 'open' }
    };
    const world = { people: people, state: state };

    // October and November were "fordelt" 15–20 of the month before: run the same suggestion, then leave a few gaps.
    SUBS.forEach((sub) => suggest(world, sub, FIRST_DAY, '2026-11-30'));
    shifts.forEach((sh) => {
      if (sh.date >= DEC_FROM) return;
      sh.slots.forEach((sl) => { if (sl.people.length && ROLES[sl.role].crew && r() < 0.12) sl.people.pop(); });
    });
    // Samfunnettjeneste people who already signed up for some open places.
    const samf = people.filter((p) => p.group !== 'Skjenke');
    shifts.filter((sh) => sh.date < DEC_FROM).forEach((sh) => {
      sh.slots.forEach((sl) => {
        if (!slotOpen(sh, sl) || sl.people.length >= sl.count || r() > 0.35) return;
        const cand = samf.filter((p) => !check(world, p, sh, sl).block);
        if (cand.length) { const p = cand[Math.floor(r() * cand.length)]; if (placementsOf(world, p).samf < 2) sl.people.push(p.id); }
      });
    });
    // One swap request on a Saturday pub.
    const sat = find('grø-pub-2026-10-31');
    if (sat) { const sl = sat.slots.find((x) => x.role === 'skjenker' && x.people.length); if (sl) sl.swaps.push(sl.people[0]); }
    return world;
  }

  /* ---------------- helpers on a world ---------------- */
  const personOf = (world, id) => world.people.find((p) => p.id === id);
  const isSk = (p) => p.group === 'Skjenke';
  const subOf = (sh) => (sh.kind === 'drift' ? sh.sub : null);
  const slotOpen = (sh, sl) => (sl.open !== undefined ? sl.open : (sh.samf !== false && !ROLES[sl.role].only));
  const isInternal = (p, sh) => (sh.kind === 'drift' ? isSk(p) : p.group === sh.organizer);
  const levelText = (p) => {
    if (!isSk(p)) return p.group;
    const base = LEVEL_TEXT[p.level] || p.level;
    return (p.level === 'opplaering' || p.level === 'sl-opplaering') ? base + ' ' + p.training + '/3' : base;
  };
  const isTrainee = (p) => p.level === 'opplaering' || p.level === 'sl-opplaering';
  const isPublished = (world, sh) => sh.kind !== 'drift' || sh.date < DEC_FROM || world.state.periods[sh.sub] === 'published';

  function placementsOf(world, p) {
    let all = 0; let samf = 0;
    world.state.shifts.forEach((sh) => sh.slots.forEach((sl) => { if (sl.people.indexOf(p.id) >= 0) { all += 1; if (countsSamf(p, sh, sl)) samf += 1; } }));
    return { all: all, samf: samf };
  }
  function countsSamf(p, sh, sl) { return !ROLES[sl.role].only && slotOpen(sh, sl) && !isSk(p) && p.group !== sh.organizer; }

  function hasCourse(p, kind, on) { const d = (p.courses || {})[kind]; return !!d && expiry(d) > (on || TODAY); }
  function courseState(p, kind) {
    const d = (p.courses || {})[kind];
    if (!d) return { has: false, ever: false, expired: false, soon: false, expires: '' };
    const exp = expiry(d); const days = (t(exp) - t(TODAY)) / 864e5;
    return { has: exp > TODAY, ever: true, expired: exp <= TODAY, soon: exp > TODAY && days <= 60, expires: exp };
  }
  function enrolledIn(world, p, kind, enr) {
    const id = ((enr || world.state.enrolled)[p.id] || {})[kind];
    return id ? COURSES[kind].dates.find((d) => d.id === id) : null;
  }
  const nextCourse = (kind, before) => COURSES[kind].dates.find((d) => d.date > TODAY && (!before || d.date < before)) || null;
  const courseKinds = (sl, p) => { const k = ['brann']; if (ROLES[sl.role].bar && !isSk(p)) k.push('bar'); return k; };

  function check(world, p, sh, sl, src, enr) {
    const r = ROLES[sl.role]; let hard = ''; const warn = []; const missing = [];
    const own = (s) => src && src.fromShift === sh.id && src.fromSlot === s.key;
    const onShift = sh.slots.some((s) => s.people.indexOf(p.id) >= 0 && !own(s));
    const occupied = sl.people.filter((x) => !(own(sl) && x === src.pid)).length;
    const age = ageOn(p.birth, sh.date);
    if (r.only === 'skiftleder' && (!isSk(p) || p.level !== 'skiftleder')) hard = 'Kun for skiftledere';
    else if (r.only === 'skiftleder' && p.sub !== subOf(sh)) hard = 'Kun skiftledere i ' + subOf(sh);
    else if (r.only === 'kokk' && !p.chef) hard = 'Kun for kokker';
    else if (r.only === 'opplaering' && !isTrainee(p)) hard = 'Kun for de som er i opplæring';
    else if (r.only === 'opplaering' && p.sub !== subOf(sh)) hard = 'Opplæring skjer i egen gruppe';
    else if (r.only === 'arrangor' && p.group !== sh.organizer) hard = 'Settes av ' + sh.organizer;
    else if (!r.only && !slotOpen(sh, sl) && !isInternal(p, sh)) hard = sh.kind === 'drift' ? 'Kun for Skjenke' : 'Kun for ' + sh.organizer;
    else if (r.crew && sh.kind === 'drift' && p.level === 'opplaering' && p.sub === subOf(sh)) hard = 'I opplæring: ta opplæringsplassen';
    else if (sh.venue === 'Halvtimen' && age < 20) hard = 'Halvtimen krever 20 år';
    else if (sh.closed) hard = 'Skiftet er stengt';
    else if (onShift) hard = 'Er allerede på skiftet';
    else if (occupied >= sl.count) hard = 'Fullt';
    let courseBlock = '';
    courseKinds(sl, p).forEach((kind) => {
      if (hasCourse(p, kind, sh.date)) return;
      const lower = COURSES[kind].name.toLowerCase();
      const e = enrolledIn(world, p, kind, enr);
      if (e && e.date < sh.date) { warn.push({ t: 'Påmeldt ' + lower + ' ' + fmtShort(e.date), course: true }); return; }
      missing.push(kind);
      if (!courseBlock) courseBlock = nextCourse(kind, sh.date) ? (courseState(p, kind).ever ? 'Må fornye ' + lower + ' først' : 'Må melde seg på ' + lower + ' først') : 'Ingen ' + lower + ' før skiftet';
    });
    UNAVAIL.forEach((u) => { if (u.group === p.group && sh.date >= u.from && sh.date <= u.to) warn.push({ t: u.text }); });
    if (isSk(p) && sh.kind === 'drift' && !own(sl)) {
      const wk = isoWeek(sh.date);
      const other = world.state.shifts.some((x) => x.id !== sh.id && isoWeek(x.date) === wk && x.slots.some((s) => s.people.indexOf(p.id) >= 0));
      if (other) warn.push({ t: 'Har allerede et skift uke ' + wk });
    }
    if (r.only === 'opplaering' && !sh.slots.some((s) => s.role !== 'opplaering' && s.people.length)) warn.push({ t: 'Ingen utlært på skiftet ennå' });
    return { block: hard || courseBlock, hard: !!hard, missing: missing, warn: warn };
  }

  /* ---------------- availability and the suggestion ---------------- */
  function avail(world, pid, sh) {
    const w = (world.state.wishes[pid] || {})[sh.id];
    if (w) return w;
    return (world.state.rules[pid] || {})[wd(sh.date)] || '';
  }

  // Fill one subgroup between two dates: skiftleder first, then crew, then opplæring on top.
  // "vil" before "kan", whoever has fewest shifts first, max 1 a week (pensjonist 1 a month).
  function suggest(world, sub, from, to) {
    const members = world.people.filter((p) => isSk(p) && p.sub === sub);
    const shifts = world.state.shifts.filter((sh) => sh.kind === 'drift' && sh.sub === sub && sh.date >= from && sh.date <= to && !sh.closed);
    shifts.forEach((sh) => sh.slots.forEach((sl) => { sl.people = []; sl.swaps = []; }));
    const weekCount = {}; const monthCount = {}; const dayUsed = {};
    world.state.shifts.forEach((sh) => {
      if (shifts.indexOf(sh) >= 0) return;
      sh.slots.forEach((sl) => sl.people.forEach((pid) => {
        const k = pid + '|' + isoWeek(sh.date); weekCount[k] = (weekCount[k] || 0) + 1;
        const m = pid + '|' + sh.date.slice(0, 7); monthCount[m] = (monthCount[m] || 0) + 1;
        dayUsed[pid + '|' + sh.date] = true;
      }));
    });
    const wk = (p, sh) => weekCount[p.id + '|' + isoWeek(sh.date)] || 0;
    const mo = (p, sh) => monthCount[p.id + '|' + sh.date.slice(0, 7)] || 0;
    const ok = (p, sh) => {
      const a = avail(world, p.id, sh);
      if (a !== 'vil' && a !== 'kan') return null;
      if (dayUsed[p.id + '|' + sh.date]) return null;
      if (p.contract === 'pensjonist' ? mo(p, sh) >= 1 : wk(p, sh) >= 1) return null;
      if (sh.venue === 'Halvtimen' && ageOn(p.birth, sh.date) < 20) return null;
      return a;
    };
    const take = (p, sh) => {
      const k = p.id + '|' + isoWeek(sh.date); weekCount[k] = (weekCount[k] || 0) + 1;
      const m = p.id + '|' + sh.date.slice(0, 7); monthCount[m] = (monthCount[m] || 0) + 1;
      dayUsed[p.id + '|' + sh.date] = true;
    };
    const fill = (pool, slotOf) => {
      const open = shifts.filter((sh) => { const sl = slotOf(sh); return sl && sl.people.length < sl.count; });
      open.sort((a, b) => pool.filter((p) => ok(p, a)).length - pool.filter((p) => ok(p, b)).length);
      open.forEach((sh) => {
        const sl = slotOf(sh);
        if (!sl || sl.people.length >= sl.count) return;
        const cands = pool.map((p) => ({ p: p, a: ok(p, sh) })).filter((x) => x.a);
        if (!cands.length) return;
        cands.sort((x, y) => (wk(x.p, sh) - wk(y.p, sh)) || ((x.a === 'vil' ? 0 : 1) - (y.a === 'vil' ? 0 : 1)) || ((x.p.level === 'skiftleder' ? 1 : 0) - (y.p.level === 'skiftleder' ? 1 : 0)) || (mo(x.p, sh) - mo(y.p, sh)) || (x.p.name < y.p.name ? -1 : 1));
        sl.people.push(cands[0].p.id);
        take(cands[0].p, sh);
      });
    };
    const trained = members.filter((p) => p.level !== 'opplaering');
    fill(trained.filter((p) => p.level === 'skiftleder'), (sh) => sh.slots.find((s) => s.role === 'skiftleder'));
    for (let i = 0; i < 2; i += 1) fill(trained, (sh) => sh.slots.find((s) => ROLES[s.role].crew));
    fill(members.filter(isTrainee), (sh) => (sh.slots.some((s) => s.role !== 'opplaering' && s.people.length) ? sh.slots.find((s) => s.role === 'opplaering') : null));
    return shifts.length;
  }

  function fordelingWarnings(world, sub, from, to) {
    const members = world.people.filter((p) => isSk(p) && p.sub === sub);
    const shifts = world.state.shifts.filter((sh) => sh.kind === 'drift' && sh.sub === sub && sh.date >= from && sh.date <= to && !sh.closed);
    const out = [];
    let noSl = 0; let noCrew = 0;
    shifts.forEach((sh) => sh.slots.forEach((sl) => {
      if (sl.role === 'skiftleder' && sl.people.length < sl.count) noSl += 1;
      if (ROLES[sl.role].crew && sl.people.length < sl.count) noCrew += sl.count - sl.people.length;
    }));
    if (noSl) out.push(noSl + ' skift mangler skiftleder.');
    if (noCrew) out.push(noCrew === 1 ? '1 plass står åpen. Etter publisering blir den et ledig skift i appen.' : noCrew + ' plasser står åpne. Etter publisering blir de ledige skift i appen.');
    const weeks = Array.from(new Set(shifts.map((sh) => isoWeek(sh.date))));
    const idle = [];
    members.forEach((p) => {
      if (!Object.keys(world.state.rules[p.id] || {}).length && !Object.keys(world.state.wishes[p.id] || {}).length) return;
      const has = (pred) => world.state.shifts.some((sh) => pred(sh) && sh.slots.some((sl) => sl.people.indexOf(p.id) >= 0));
      if (p.contract === 'pensjonist') { if (!has((sh) => sh.date >= from && sh.date <= to)) out.push(p.name + ' (pensjonist) har ingen skift denne perioden.'); return; }
      const could = weeks.filter((w) => !has((sh) => isoWeek(sh.date) === w) && shifts.some((sh) => isoWeek(sh.date) === w && ['vil', 'kan'].indexOf(avail(world, p.id, sh)) >= 0));
      if (could.length) idle.push(p.first + ' (uke ' + could.join(', ') + ')');
    });
    if (idle.length) out.push(idle.length + ' kunne jobbe en uke de ikke fikk skift: ' + idle.join(', ') + '. Dra dem inn på et skift hvis det trengs flere.');
    const silent = members.filter((p) => !Object.keys(world.state.rules[p.id] || {}).length && !Object.keys(world.state.wishes[p.id] || {}).length);
    if (silent.length) out.push('Har ikke svart: ' + silent.map((p) => p.name).join(', ') + '.');
    return out;
  }

  const api = {
    TODAY, MONTHS, MONTH_FULL, WD_SHORT, WD_FULL, SUBS, SAMF_GROUPS, ROLES, INFO, MEET, COURSES, UNAVAIL, LEADERS, LEVEL_TEXT,
    FIRST_DAY, LAST_DAY, DEC_FROM,
    addDays, wd, range, dayShort, dayLong, fmt, fmtShort, monthLabel, isoWeek, mondayOf, ageOn, expiry, startOf,
    buildWorld, personOf, isSk, subOf, slotOpen, isInternal, levelText, isTrainee, isPublished, placementsOf, countsSamf,
    hasCourse, courseState, enrolledIn, nextCourse, courseKinds, check, avail, suggest, fordelingWarnings
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.SL = api;
})(typeof window !== 'undefined' ? window : globalThis);
