/* Skiftliste prototype: screens (Alpine.js) and drag and drop (SortableJS).
   State is kept in this browser only (localStorage). "Tilbakestill" starts over. */
(function () {
  'use strict';
  const SL = window.SL;
  const KEY = 'skiftliste-proto-v1';
  const SEED = 2026;
  const DEFAULT_FB = 'Dra en frivillig fra lista til en ledig plass, eller trykk på en person og så på en grønn plass.';
  const WISH = {
    vil: { label: 'Vil', cls: 'bg-[#E6F1E9] text-[#1F4029] border-[#2F5E3D]' },
    kan: { label: 'Kan', cls: 'bg-[#EEF2F7] text-[#1F2937] border-[#64748B]' },
    nei: { label: 'Nei', cls: 'bg-[#F3EFE7] text-[#4B5563] border-[#CFC6B8] line-through' },
    '': { label: 'Ikke satt', cls: 'bg-white text-[#4B5563] border-[#D9C7AE]' }
  };
  const RULE_LABEL = { '': 'Ikke satt', vil: 'Vil gjerne', kan: 'Kan hvis nødvendig', nei: 'Kan aldri' };

  function load() {
    try { const raw = localStorage.getItem(KEY); if (!raw) return null; const s = JSON.parse(raw); return s && s.version === 1 && Array.isArray(s.shifts) ? s : null; } catch (e) { return null; }
  }
  function store(obj) { try { localStorage.setItem(KEY, JSON.stringify(obj)); } catch (e) { /* private window: keep going in memory */ } }
  function forget() { try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } }

  document.addEventListener('alpine:init', () => {
    window.Alpine.data('skiftliste', () => {
      const fresh = SL.buildWorld(SEED);
      const saved = load();
      const people = fresh.people;
      const st = saved ? { version: 1, shifts: saved.shifts, rules: saved.rules || {}, wishes: saved.wishes || {}, enrolled: saved.enrolled || {}, periods: saved.periods || fresh.state.periods } : fresh.state;
      const ui = (saved && saved.ui) || {};
      const quick = buildQuick(people, fresh.state);
      return {
        SL: SL, people: people, st: st, quick: quick, WISH: WISH, RULE_LABEL: RULE_LABEL,
        view: 'app',
        // app (volunteer) side
        me: ui.me && people.some((p) => p.id === ui.me) ? ui.me : quick[0].id,
        phoneTab: '', detail: null, showMore: false, wishMore: false, coursePick: '', toast: '', _toastTimer: null,
        // leader side
        leader: ui.leader || 'skjenkeleder', boardTab: 'plan', week: SL.mondayOf(SL.TODAY), filter: 'alle', poolFilter: 'alle', query: '',
        selected: null, drag: null, feedback: DEFAULT_FB, edit: null, allocSub: 'Stjerne', openCell: '', showAllIdle: false,

        init() {
          this.$watch('me', () => { this.phoneTab = ''; this.detail = null; this.showMore = false; this.wishMore = false; this.coursePick = ''; this.persist(); });
        },
        get w() { return { people: this.people, state: this.st }; },
        persist() {
          store({ version: 1, shifts: this.st.shifts, rules: this.st.rules, wishes: this.st.wishes, enrolled: this.st.enrolled, periods: this.st.periods, ui: { me: this.me, leader: this.leader } });
        },
        reset() {
          forget();
          const f = SL.buildWorld(SEED);
          this.st.shifts = f.state.shifts; this.st.rules = f.state.rules; this.st.wishes = f.state.wishes; this.st.enrolled = f.state.enrolled; this.st.periods = f.state.periods;
          this.me = this.quick[0].id; this.leader = 'skjenkeleder'; this.week = SL.mondayOf(SL.TODAY); this.filter = 'alle'; this.poolFilter = 'alle'; this.query = '';
          this.selected = null; this.edit = null; this.detail = null; this.phoneTab = ''; this.boardTab = 'plan'; this.allocSub = 'Stjerne'; this.openCell = '';
          this.feedback = 'Prototypen er tilbakestilt. Alt er som da du åpnet den første gang.';
          this.showToast('Prototypen er tilbakestilt.');
        },

        /* ---------- shared helpers ---------- */
        person(id) { return SL.personOf(this.w, id); },
        first(p) { return p ? p.first : ''; },
        initials(p) { return p.name.split(' ').map((x) => x[0]).join(''); },
        roleName(sl) { return SL.ROLES[sl.role].name; },
        findSlot(shId, slKey) { const sh = this.st.shifts.find((x) => x.id === shId); return { sh: sh, sl: sh ? sh.slots.find((x) => x.key === slKey) : null }; },
        dayLong(iso) { return SL.dayLong(iso); },
        dayShort(iso) { return SL.dayShort(iso); },
        groupText(p) { return SL.isSk(p) ? 'Skjenke · ' + p.sub : p.group; },
        showToast(msg) { this.toast = msg; clearTimeout(this._toastTimer); this._toastTimer = setTimeout(() => { this.toast = ''; }, 3500); },
        info(sh, sl) {
          if (sl.role === 'skjenker') return SL.INFO['skjenker|' + (sh.tpl === 'dag' ? 'dag' : (sh.tpl === 'kveld' ? 'kveld' : 'pub'))];
          return SL.INFO[sl.role] || '';
        },
        meet(sh) { return sh.tpl === 'kjokken' ? SL.MEET.kjokken : (SL.MEET[sh.venue] || ''); },

        /* ================= the app (volunteer) ================= */
        get meP() { return this.person(this.me); },
        get sk() { return SL.isSk(this.meP); },
        personaGroups() {
          const out = SL.SUBS.map((s) => ({ label: 'Skjenke · ' + s, people: this.people.filter((p) => SL.isSk(p) && p.sub === s) }));
          SL.SAMF_GROUPS.forEach((g) => out.push({ label: g.name + (g.borg ? ' (BORG)' : ''), people: this.people.filter((p) => p.group === g.name) }));
          return out;
        },
        personaLabel(p) { return p.name + ' · ' + (SL.isSk(p) ? SL.levelText(p) + (p.contract === 'pensjonist' ? ', pensjonist' : '') : p.group); },
        phoneTabs() {
          const n = this.mine().length;
          if (this.sk) return [['onsker', 'Ønsker'], ['egne', this.meP.sub], ['andre', 'Andre'], ['mine', 'Mine (' + n + ')']];
          return [['ledige', 'Ledige skift'], ['mine', 'Mine skift (' + n + ')']];
        },
        get tab() { const ids = this.phoneTabs().map((t) => t[0]); return ids.indexOf(this.phoneTab) >= 0 ? this.phoneTab : ids[0]; },
        pickTab(id) { this.phoneTab = id; this.showMore = false; this.detail = null; },

        quota(p) {
          const pens = p.contract === 'pensjonist';
          const wk = SL.isoWeek(SL.TODAY);
          let n = 0;
          this.st.shifts.forEach((sh) => {
            if (!SL.isPublished(this.w, sh)) return;
            const inPeriod = pens ? sh.date.slice(0, 7) === '2026-11' : SL.isoWeek(sh.date) === wk;
            if (inPeriod && sh.slots.some((sl) => sl.people.indexOf(p.id) >= 0)) n += 1;
          });
          return { n: n, label: pens ? 'November' : 'Denne uka (uke ' + wk + ')', text: pens ? 'Pensjonistavtale: 1 skift i måneden' : 'Kontrakt: 1 skift i uka' };
        },
        card() {
          const me = this.meP;
          if (this.sk) {
            const q = this.quota(me);
            let note = SL.levelText(me) + '. ' + q.text + '.';
            if (me.level === 'opplaering') note = 'Opplæring: ' + me.training + ' av 3 skift. Etter 3 skift er du utlært. ' + q.text + '.';
            if (me.level === 'sl-opplaering') note = 'Skiftlederopplæring: ' + me.training + ' av 3 skift sammen med en skiftleder. ' + q.text + '.';
            return { kicker: 'Skjenke · ' + me.sub, title: q.label + ': ' + q.n + ' av 1 skift', pct: Math.min(100, q.n * 100), note: note };
          }
          const pl = SL.placementsOf(this.w, me);
          const total = me.done + pl.samf;
          return {
            kicker: 'Samfunnettjeneste høst 2026', title: total + (total === 1 ? ' skift' : ' skift') + ' tatt', pct: Math.min(100, total * 100),
            note: total >= 1 ? me.done + ' gjennomført, ' + pl.samf + ' planlagt. Takk! Alle tar 1–2 skift i semesteret.' : 'Alle frivillige tar 1–2 skift i semesteret. Du kan melde deg på for hele semesteret.'
          };
        },
        courseRows() {
          const me = this.meP;
          const kinds = this.sk ? ['brann'] : ['brann', 'bar'];
          return kinds.map((kind) => {
            const c = SL.COURSES[kind];
            const cs = SL.courseState(me, kind);
            const e = SL.enrolledIn(this.w, me, kind);
            const n = SL.nextCourse(kind);
            const nextTxt = n ? ' Neste kurs ' + n.label + '.' : ' Ingen kurs satt opp ennå.';
            let status; let ok = false; let action = n ? 'pick' : '';
            if (cs.has && !cs.soon) { status = 'Gyldig til ' + SL.fmt(cs.expires); ok = true; action = ''; }
            else if (e) { status = (cs.soon ? 'Går ut ' + SL.fmt(cs.expires) + '. ' : '') + 'Påmeldt ' + e.label; ok = true; action = 'leave'; }
            else if (cs.soon) status = 'Går ut ' + SL.fmt(cs.expires) + '.' + nextTxt;
            else if (cs.expired) status = 'Gikk ut ' + SL.fmt(cs.expires) + '.' + nextTxt;
            else status = 'Ikke tatt.' + nextTxt;
            const spots = (d) => d.spots - Object.keys(this.st.enrolled).filter((pid) => (this.st.enrolled[pid] || {})[kind] === d.id).length;
            return {
              kind: kind, name: c.name, status: status, ok: ok, action: action,
              options: c.dates.filter((d) => d.date > SL.TODAY).map((d) => ({ id: d.id, label: d.label.charAt(0).toUpperCase() + d.label.slice(1), spots: spots(d) }))
            };
          });
        },
        enroll(kind, id, silent) {
          const me = this.meP;
          if (!this.st.enrolled[me.id]) this.st.enrolled[me.id] = {};
          if (id) this.st.enrolled[me.id][kind] = id; else delete this.st.enrolled[me.id][kind];
          this.coursePick = '';
          this.persist();
          if (silent) return;
          const c = SL.COURSES[kind]; const d = id ? c.dates.find((x) => x.id === id) : null;
          this.showToast(d ? 'Du er påmeldt ' + c.name.toLowerCase() + ' ' + d.label + '.' : 'Du er meldt av ' + c.name.toLowerCase() + '.');
        },

        mine() {
          const me = this.meP; const out = [];
          this.st.shifts.forEach((sh) => {
            if (!SL.isPublished(this.w, sh)) return;
            sh.slots.forEach((sl) => {
              if (sl.people.indexOf(me.id) < 0) return;
              let tag = '';
              if (SL.countsSamf(me, sh, sl)) tag = 'Teller som samfunnettjeneste';
              else if (sl.role === 'opplaering') tag = 'Opplæringsskift';
              else if (sh.date >= SL.DEC_FROM && sh.kind === 'drift') tag = 'Fra desember-fordelingen';
              out.push({ sh: sh, sl: sl, tag: tag, swapping: sl.swaps.indexOf(me.id) >= 0 });
            });
          });
          return out;
        },
        swap(sh, sl, on) {
          const me = this.meP;
          const i = sl.swaps.indexOf(me.id);
          if (on && i < 0) sl.swaps.push(me.id);
          if (!on && i >= 0) sl.swaps.splice(i, 1);
          this.persist();
          this.showToast(on ? 'Lederen er varslet om at du ønsker bytte.' : 'Byttet er avlyst. Du står fortsatt på skiftet.');
          this.feedback = on ? me.first + ' ønsker bytte: ' + this.roleName(sl).toLowerCase() + ', ' + SL.dayLong(sh.date).toLowerCase() + '. Dra en annen inn og ta ' + me.first + ' av.' : me.first + ' angret byttet.';
        },

        visibleSlot(me, sh, sl) {
          const r = SL.ROLES[sl.role];
          if (sl.people.length >= sl.count) return false;
          if (r.only === 'skiftleder' && !(SL.isSk(me) && me.level === 'skiftleder' && me.sub === sh.sub)) return false;
          if (r.only === 'kokk' && !me.chef) return false;
          if (r.only === 'opplaering' && !(SL.isTrainee(me) && me.sub === sh.sub)) return false;
          if (r.only === 'arrangor' && me.group !== sh.organizer) return false;
          if (!r.only && !SL.slotOpen(sh, sl) && !SL.isInternal(me, sh)) return false;
          if (r.crew && sh.kind === 'drift' && me.level === 'opplaering' && me.sub === sh.sub) return false;
          return true;
        },
        ledige() {
          const me = this.meP; const sk = this.sk; const tab = this.tab;
          const list = [];
          this.st.shifts.forEach((sh) => {
            if (sh.date <= SL.TODAY || sh.closed || !SL.isPublished(this.w, sh)) return;
            const own = sh.kind === 'drift' && sh.sub === me.sub;
            if (sk && tab === 'egne' && !own) return;
            if (sk && tab === 'andre' && own) return;
            if (sh.slots.some((s) => s.people.indexOf(me.id) >= 0)) return;
            const slots = sh.slots.filter((sl) => this.visibleSlot(me, sh, sl)).map((sl) => {
              const c = SL.check(this.w, me, sh, sl);
              const free = sl.count - sl.people.length;
              let status = 'Du kan ta denne'; let tone = 'ok';
              if (c.block && c.hard) { status = c.block; tone = 'off'; }
              else if (c.block) {
                const k = c.missing[0]; const lower = SL.COURSES[k].name.toLowerCase(); const n = SL.nextCourse(k, sh.date);
                if (n) { status = (SL.courseState(me, k).ever ? 'Forny ' : 'Meld deg på ') + lower + ' først · kurs ' + SL.fmtShort(n.date); tone = 'warn'; }
                else { status = 'Ingen ' + lower + ' før skiftet'; tone = 'off'; }
              } else if (sl.role === 'opplaering') { status = 'Opplæringsskift ' + (me.training + 1) + ' av 3'; tone = 'info'; }
              else if (c.warn.length) { status = c.warn[0].t; tone = c.warn[0].course ? 'ok' : 'warn'; }
              return { sl: sl, free: free, status: status, tone: tone };
            });
            if (slots.length) list.push({ sh: sh, slots: slots });
          });
          const cutoff = SL.addDays(SL.TODAY, 14);
          const shown = this.showMore ? list : list.filter((x) => x.sh.date <= cutoff);
          const months = [];
          shown.forEach((x) => {
            const key = x.sh.date.slice(0, 7);
            let m = months.find((y) => y.key === key);
            if (!m) { m = { key: key, label: SL.monthLabel(x.sh.date), shifts: [] }; months.push(m); }
            m.shifts.push(x);
          });
          return { months: months, total: list.length, hidden: list.length - shown.length };
        },
        openDetail(sh, sl) { this.detail = { shId: sh.id, slKey: sl.key }; },
        detailData() {
          if (!this.detail) return null;
          const me = this.meP;
          const t = this.findSlot(this.detail.shId, this.detail.slKey);
          const sh = t.sh; const sl = t.sl; const r = SL.ROLES[sl.role];
          const c = SL.check(this.w, me, sh, sl);
          const reqs = [];
          const req = (text, kind, extra) => reqs.push(Object.assign({ text: text, kind: kind }, extra || {}));
          if (r.only === 'skiftleder') req(me.level === 'skiftleder' ? 'Skiftleder i ' + me.sub : 'Kun for skiftledere', me.level === 'skiftleder' ? 'ok' : 'block');
          if (r.only === 'kokk') req('Kokk på kjøkkenet', me.chef ? 'ok' : 'block');
          if (sh.venue === 'Halvtimen') { const age = SL.ageOn(me.birth, sh.date); req(age >= 20 ? '20 år eller eldre' : 'Halvtimen krever 20 år. Du er ' + age + '.', age >= 20 ? 'ok' : 'block'); }
          if (sl.role === 'opplaering') req((me.level === 'sl-opplaering' ? 'Skiftlederopplæring ' : 'Opplæringsskift ') + (me.training + 1) + ' av 3. Du er med i tillegg til det vanlige skiftet.', 'ok');
          SL.courseKinds(sl, me).forEach((kind) => {
            const name = SL.COURSES[kind].name; const lower = name.toLowerCase();
            const cs = SL.courseState(me, kind);
            if (SL.hasCourse(me, kind, sh.date)) { req(name + ', gyldig til ' + SL.fmt(cs.expires), 'ok'); return; }
            const e = SL.enrolledIn(this.w, me, kind);
            const n = SL.nextCourse(kind, sh.date);
            const why = cs.ever ? name + (cs.expired ? ' gikk ut ' + SL.fmt(cs.expires) + '.' : ' går ut ' + SL.fmt(cs.expires) + ', før skiftet.') : name + ' mangler.';
            if (e && e.date < sh.date) req('Påmeldt ' + lower + ' ' + e.label, 'ok', { leave: kind });
            else if (n) req(why + ' Du må være påmeldt et kurs før skiftet. Neste: ' + n.label + '.', 'warn');
            else req(why + ' Det er ikke noe kurs før skiftet.', 'block');
          });
          c.warn.filter((x) => !x.course).forEach((x) => req(x.t, 'warn'));
          if (c.block === 'Fullt') req('Plassen ble nettopp tatt', 'block');
          const canCombo = !!c.block && !c.hard && c.missing.length > 0 && c.missing.every((k) => SL.nextCourse(k, sh.date));
          const enrolls = canCombo ? c.missing.map((k) => [k, SL.nextCourse(k, sh.date).id]) : [];
          const who = [];
          sh.slots.forEach((s) => s.people.forEach((pid) => who.push(this.person(pid).first + ' (' + this.roleName(s).toLowerCase() + ')')));
          return {
            sh: sh, sl: sl, role: r.name, info: this.info(sh, sl), meet: this.meet(sh), reqs: reqs,
            who: who.length ? who.join(', ') : 'Ingen ennå. Du blir den første.',
            canClaim: !c.block, blocked: !!c.block && !canCombo, block: c.block,
            canCombo: canCombo, enrolls: enrolls,
            comboLabel: canCombo ? 'Meld meg på ' + c.missing.map((k) => SL.COURSES[k].name.toLowerCase() + ' ' + SL.fmtShort(SL.nextCourse(k, sh.date).date)).join(' og ') + ', og ta skiftet' : ''
          };
        },
        claim(enrolls) {
          const me = this.meP;
          const t = this.findSlot(this.detail.shId, this.detail.slKey);
          const enr = JSON.parse(JSON.stringify(this.st.enrolled));
          (enrolls || []).forEach((x) => { enr[me.id] = enr[me.id] || {}; enr[me.id][x[0]] = x[1]; });
          const c = SL.check(this.w, me, t.sh, t.sl, null, enr);
          if (c.block) { this.showToast('Du kan ikke ta denne plassen: ' + c.block.toLowerCase() + '.'); return; }
          (enrolls || []).forEach((x) => this.enroll(x[0], x[1], true));
          t.sl.people.push(me.id);
          this.persist();
          this.detail = null; this.phoneTab = 'mine';
          const names = (enrolls || []).map((x) => SL.COURSES[x[0]].name.toLowerCase()).join(' og ');
          this.showToast(names ? 'Du er påmeldt ' + names + ' og satt opp på skiftet.' : 'Du er satt opp. Skiftet ligger under Mine.');
          this.feedback = me.first + ' tok ' + this.roleName(t.sl).toLowerCase() + ', ' + SL.dayLong(t.sh.date).toLowerCase() + ', i appen.';
        },

        /* wishes */
        ruleDays() { const s = this.meP.sub; return s === 'Halvtimen' ? [5, 6] : (s === 'Grøndahls' ? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4, 5]); },
        rule(d) { return (this.st.rules[this.me] || {})[d] || ''; },
        setRule(d, v) {
          if (!this.st.rules[this.me]) this.st.rules[this.me] = {};
          if (v) this.st.rules[this.me][d] = v; else delete this.st.rules[this.me][d];
          this.persist();
          if (v === 'nei') this.showToast('Alle ' + SL.WD_FULL[d].toLowerCase() + 'er er krysset ut. Du kan fortsatt åpne enkeltdager.');
        },
        wishDays() {
          const me = this.meP;
          const days = [];
          this.st.shifts.filter((sh) => sh.kind === 'drift' && sh.sub === me.sub && sh.date >= SL.DEC_FROM).forEach((sh) => {
            let d = days.find((x) => x.date === sh.date);
            if (!d) { d = { date: sh.date, shifts: [] }; days.push(d); }
            const exp = (this.st.wishes[me.id] || {})[sh.id];
            const v = exp || this.rule(SL.wd(sh.date));
            d.shifts.push({ sh: sh, v: v, fromRule: !exp });
          });
          days.forEach((d) => { d.allNo = d.shifts.every((x) => x.v === 'nei'); });
          const counts = { vil: 0, kan: 0, nei: 0 };
          days.forEach((d) => d.shifts.forEach((x) => { if (counts[x.v] !== undefined) counts[x.v] += 1; }));
          return { days: this.wishMore ? days : days.slice(0, 6), more: !this.wishMore && days.length > 6, counts: counts };
        },
        cycleWish(sh) {
          if (this.st.periods[this.meP.sub] === 'published') return;
          if (!this.st.wishes[this.me]) this.st.wishes[this.me] = {};
          const order = [undefined, 'vil', 'kan', 'nei'];
          const cur = this.st.wishes[this.me][sh.id];
          const next = order[(order.indexOf(cur) + 1) % order.length];
          if (next) this.st.wishes[this.me][sh.id] = next; else delete this.st.wishes[this.me][sh.id];
          this.persist();
        },
        periodStatus(sub) {
          const p = this.st.periods[sub];
          if (p === 'published') return { label: 'Fordelt', note: 'Planen er publisert. Skiftene dine ligger under Mine.', done: true };
          if (p === 'suggested') return { label: 'Fordeles nå', note: 'Lederen holder på med fordelingen. Du kan fortsatt justere ønskene til den er publisert.', done: false };
          return { label: 'Åpen for ønsker', note: 'Lederen fordeler desember mellom 15. og 20. november. Trykk på et skift for å bytte mellom vil, kan og nei.', done: false };
        },

        /* ================= the leader side (Personal) ================= */
        get L() { return SL.LEADERS.find((l) => l.id === this.leader) || SL.LEADERS[0]; },
        switchLeader(id) {
          this.leader = id;
          const L = this.L;
          this.filter = L.scope === 'all' ? 'alle' : L.scope;
          this.poolFilter = L.scope === 'all' ? 'alle' : (L.scope === 'samf' ? 'samf' : L.scope);
          this.edit = null; this.selected = null; this.openCell = '';
          if (L.scope !== 'all' && L.scope !== 'samf') this.allocSub = L.scope;
          if (!L.alloc && this.boardTab === 'alloc') this.boardTab = 'plan';
          this.feedback = 'Du er logget inn som ' + L.label + '.';
          this.persist();
        },
        inScope(sh) {
          const L = this.L;
          if (L.scope === 'all') return true;
          if (L.scope === 'samf') return sh.kind === 'arrangement' || sh.slots.some((sl) => SL.slotOpen(sh, sl));
          if (sh.kind !== 'drift') return false;
          if (sh.venue === 'Stjernesalen' && (L.scope === 'Stjerne' || L.scope === 'Kjøkken')) return true;
          return sh.sub === L.scope;
        },
        canEdit(sh) { const L = this.L; if (L.scope === 'all') return true; if (L.scope === 'samf') return sh.kind === 'arrangement'; return sh.sub === L.scope; },
        canAssign(sh, sl) { const L = this.L; if (L.scope === 'all') return true; if (L.scope === 'samf') return SL.slotOpen(sh, sl); return sh.sub === L.scope; },
        filters() {
          const all = [['alle', 'Alle'], ['Stjerne', 'Stjernesalen'], ['Grøndahls', 'Grøndahls'], ['Halvtimen', 'Halvtimen'], ['arr', 'Arrangementer'], ['samf', 'Åpne for samf.']];
          const L = this.L;
          if (L.scope === 'all') return all;
          if (L.scope === 'samf') return [['alle', 'Alle'], ['arr', 'Arrangementer'], ['samf', 'Åpne for samf.']];
          return [[L.scope, L.scope === 'Kjøkken' || L.scope === 'Stjerne' ? 'Stjernesalen' : L.scope]];
        },
        get ef() { const f = this.filters(); return f.some((x) => x[0] === this.filter) ? this.filter : f[0][0]; },
        weeks() {
          const out = []; let m = SL.mondayOf(SL.FIRST_DAY);
          while (m <= SL.LAST_DAY) { out.push(m); m = SL.addDays(m, 7); }
          return out;
        },
        weekLabel(m) { return 'Uke ' + SL.isoWeek(m) + ' · ' + SL.fmtShort(m) + '–' + SL.fmtShort(SL.addDays(m, 6)); },
        stepWeek(d) { const ws = this.weeks(); const i = ws.indexOf(this.week) + d; if (i >= 0 && i < ws.length) { this.week = ws[i]; this.edit = null; } },
        boardShifts() {
          const from = this.week; const to = SL.addDays(this.week, 6); const ef = this.ef;
          return this.st.shifts.filter((sh) => {
            if (sh.date < from || sh.date > to || !this.inScope(sh)) return false;
            if (ef === 'alle') return true;
            if (ef === 'arr') return sh.kind === 'arrangement';
            if (ef === 'samf') return sh.slots.some((sl) => SL.slotOpen(sh, sl) && !SL.ROLES[sl.role].only);
            if (ef === 'Stjerne' || ef === 'Kjøkken') return sh.venue === 'Stjernesalen' && sh.kind === 'drift';
            return sh.sub === ef;
          });
        },
        boardDays() {
          const vOrder = ['Stjernesalen', 'Grøndahls', 'Halvtimen'];
          const days = [];
          this.boardShifts().forEach((sh) => {
            let d = days.find((x) => x.date === sh.date);
            if (!d) { d = { date: sh.date, venues: [] }; days.push(d); }
            const key = sh.kind === 'drift' ? sh.venue : sh.id;
            let v = d.venues.find((x) => x.key === key);
            if (!v) {
              const internal = sh.kind !== 'drift' && !sh.slots.some((sl) => SL.slotOpen(sh, sl));
              v = { key: key, venue: sh.venue, drift: sh.kind === 'drift', rank: sh.kind === 'drift' ? vOrder.indexOf(sh.venue) : 9, tag: sh.kind === 'drift' ? 'Skjenke' : 'Arrangement · ' + sh.organizer + (internal ? ' · internt' : ''), unpublished: !SL.isPublished(this.w, sh), shifts: [] };
              d.venues.push(v);
            }
            v.shifts.push(sh);
          });
          days.forEach((d) => d.venues.sort((a, b) => a.rank - b.rank));
          return days;
        },
        weekStats() {
          let open = 0; let swaps = 0;
          this.boardShifts().forEach((sh) => { if (sh.closed) return; sh.slots.forEach((sl) => { if (sl.role !== 'opplaering') open += Math.max(0, sl.count - sl.people.length); swaps += sl.swaps.length; }); });
          return { open: open === 1 ? '1 ledig plass' : open + ' ledige plasser', swaps: swaps === 1 ? '1 ønsker bytte' : swaps + ' ønsker bytte', hasSwaps: swaps > 0 };
        },
        slotTag(sh, sl) {
          const r = SL.ROLES[sl.role];
          if (!r.only && !SL.slotOpen(sh, sl)) return { text: sh.kind === 'drift' ? 'Kun Skjenke' : 'Kun ' + sh.organizer, cls: 'bg-[#EFE8F8] text-[#4C1D95]' };
          if (r.only === 'skiftleder') return { text: 'Kun skiftledere', cls: 'bg-[#FCE8E8] text-[#8A1C1C]' };
          if (r.only === 'kokk') return { text: 'Kun kokker', cls: 'bg-[#E8EEF9] text-[#1E3A8A]' };
          if (r.only === 'opplaering') return { text: 'I tillegg', cls: 'bg-[#E8EEF9] text-[#1E3A8A]' };
          if (r.only === 'arrangor') return { text: 'Arrangør', cls: 'bg-[#EFE8F8] text-[#4C1D95]' };
          return { text: 'Åpen for samf.', cls: 'bg-[#E6F1E9] text-[#1F4029]' };
        },
        get active() { return this.drag || this.selected; },
        sameSrc(a, b) { return !!a && !!b && a.pid === b.pid && a.fromShift === b.fromShift && a.fromSlot === b.fromSlot; },
        placed(sh, sl, pid) {
          const p = this.person(pid);
          const src = { pid: pid, fromShift: sh.id, fromSlot: sl.key };
          const c = SL.check(this.w, p, sh, sl, src);
          const warn = c.warn.map((x) => x.t);
          c.missing.forEach((k) => warn.unshift('Mangler ' + SL.COURSES[k].name.toLowerCase()));
          return {
            p: p, group: SL.isSk(p) ? p.sub : p.group, warn: warn.join(' · '), swap: sl.swaps.indexOf(pid) >= 0,
            note: SL.isTrainee(p) ? SL.levelText(p) : (SL.isSk(p) && p.sub !== sh.sub && sh.kind === 'drift' ? 'Fra ' + p.sub : ''),
            sel: this.sameSrc(this.selected, src), can: this.canAssign(sh, sl)
          };
        },
        empties(sh, sl) {
          const n = Math.max(0, sl.count - sl.people.length);
          const a = this.active; const ap = a ? this.person(a.pid) : null;
          let label = 'Ledig'; let tone = 'idle';
          if (sh.closed) { label = 'Stengt'; tone = 'off'; }
          else if (ap && !this.canAssign(sh, sl)) { label = 'Ikke din gruppe'; tone = 'off'; }
          else if (ap) {
            const c = SL.check(this.w, ap, sh, sl, a);
            if (c.block) { label = c.block; tone = 'off'; }
            else { label = 'Sett opp ' + ap.first + ' her' + (c.warn.length ? ' · ' + c.warn.map((x) => x.t).join(', ') : ''); tone = 'go'; }
          }
          const out = []; for (let i = 0; i < n; i += 1) out.push({ i: i, label: label, tone: tone });
          return out;
        },
        pool() {
          const q = this.query.trim().toLowerCase(); const pf = this.poolFilter;
          return this.people.filter((p) => {
            if (pf === 'samf' ? SL.isSk(p) : (pf !== 'alle' && !(SL.isSk(p) && p.sub === pf))) return false;
            if (!q) return true;
            return (p.name + ' ' + p.group + ' ' + (p.sub || '')).toLowerCase().indexOf(q) >= 0;
          });
        },
        poolFilters() { return [['alle', 'Alle'], ['Stjerne', 'Stjerne'], ['Kjøkken', 'Kjøkken'], ['Grøndahls', 'Grøndahls'], ['Halvtimen', 'Halvtimen'], ['samf', 'Samf.']]; },
        badges(p) {
          const out = [];
          if (SL.isSk(p)) {
            out.push({ text: SL.levelText(p), cls: SL.isTrainee(p) ? 'bg-[#E8EEF9] text-[#1E3A8A]' : 'bg-[#FCE8E8] text-[#8A1C1C]' });
            if (p.contract === 'pensjonist') out.push({ text: 'Pensjonist', cls: 'bg-[#EFE8F8] text-[#4C1D95]' });
          }
          if (SL.ageOn(p.birth, SL.TODAY) >= 20) out.push({ text: '20+', cls: 'bg-[#EEF2F7] text-[#1F2937]' });
          (SL.isSk(p) ? ['brann'] : ['brann', 'bar']).forEach((kind) => {
            const name = SL.COURSES[kind].name; const cs = SL.courseState(p, kind); const e = SL.enrolledIn(this.w, p, kind);
            if (cs.has && !cs.soon) out.push({ text: name, cls: 'bg-[#E6F1E9] text-[#1F4029]' });
            else if (e) out.push({ text: name + ' ' + SL.fmtShort(e.date), cls: 'bg-[#EEF2F7] text-[#1F2937]' });
            else if (cs.soon) out.push({ text: name + ' går ut ' + SL.fmtShort(cs.expires), cls: 'bg-[#FDEBD8] text-[#9A3412]' });
            else if (cs.expired) out.push({ text: name + ' utgått', cls: 'bg-[#FDEBD8] text-[#9A3412]' });
            else out.push({ text: 'Uten ' + name.toLowerCase(), cls: 'bg-[#FDEBD8] text-[#9A3412]' });
          });
          return out;
        },
        countText(p) {
          if (SL.isSk(p)) { const q = this.quota(p); return (p.contract === 'pensjonist' ? 'November' : 'Uke ' + SL.isoWeek(SL.TODAY)) + ': ' + q.n + ' av 1'; }
          const pl = SL.placementsOf(this.w, p);
          return 'Samf.: ' + p.done + ' gjennomført, ' + pl.samf + ' planlagt';
        },

        // moving people
        commit(a, shId, slKey) {
          this.selected = null; this.drag = null;
          if (!a) return;
          if (a.fromShift === shId && a.fromSlot === slKey) return;
          const p = this.person(a.pid);
          const t = this.findSlot(shId, slKey);
          if (!t.sl) return;
          if (!this.canAssign(t.sh, t.sl)) { this.feedback = 'Rollen din kan ikke fylle denne plassen.'; return; }
          const c = SL.check(this.w, p, t.sh, t.sl, a);
          if (c.block) { this.feedback = p.first + ' kan ikke ta plassen: ' + c.block.toLowerCase() + '.'; return; }
          if (a.fromShift) {
            const s = this.findSlot(a.fromShift, a.fromSlot).sl;
            if (s) { s.people = s.people.filter((x) => x !== p.id); s.swaps = s.swaps.filter((x) => x !== p.id); }
          }
          t.sl.people.push(p.id);
          this.persist();
          this.feedback = p.first + ' er satt opp som ' + this.roleName(t.sl).toLowerCase() + ', ' + SL.dayLong(t.sh.date).toLowerCase() + ' (' + t.sh.title.toLowerCase() + ').' + (c.warn.length ? ' Merk: ' + c.warn.map((x) => x.t).join('. ') + '.' : '');
        },
        unassign(a) {
          this.selected = null; this.drag = null;
          if (!a || !a.fromShift) return;
          const t = this.findSlot(a.fromShift, a.fromSlot);
          if (!t.sl || !this.canAssign(t.sh, t.sl)) return;
          t.sl.people = t.sl.people.filter((x) => x !== a.pid);
          t.sl.swaps = t.sl.swaps.filter((x) => x !== a.pid);
          this.persist();
          this.feedback = this.person(a.pid).first + ' er tatt av ' + this.roleName(t.sl).toLowerCase() + ', ' + SL.dayLong(t.sh.date).toLowerCase() + '. Plassen er ledig igjen.';
        },
        select(a) {
          if (this.sameSrc(this.selected, a)) { this.selected = null; this.feedback = DEFAULT_FB; return; }
          this.selected = a; this.edit = null;
          this.feedback = 'Valgt: ' + this.person(a.pid).name + '. Trykk på en grønn ledig plass' + (a.fromShift ? ', eller på lista for å ta personen av skiftet.' : '.');
        },
        place(shId, slKey) {
          if (!this.selected) { this.feedback = 'Velg en frivillig i lista først, eller dra noen hit.'; return; }
          this.commit(this.selected, shId, slKey);
        },
        cancelSelect() { this.selected = null; this.feedback = DEFAULT_FB; },
        poolClick() { if (this.selected && this.selected.fromShift) this.unassign(this.selected); },
        srcOf(el) { return { pid: el.dataset.pid, fromShift: el.dataset.fromShift || null, fromSlot: el.dataset.fromSlot || null }; },
        canDrop(a, toEl) {
          if (!a) return false;
          if (toEl.dataset.pool) return !!a.fromShift;
          const t = this.findSlot(toEl.dataset.shift, toEl.dataset.slot);
          if (!t.sl || !this.canAssign(t.sh, t.sl)) return false;
          return !SL.check(this.w, this.person(a.pid), t.sh, t.sl, a).block;
        },
        mountList(el) {
          if (!window.Sortable || el._sortable) return;
          const self = this; let next = null;
          el._sortable = window.Sortable.create(el, {
            group: { name: 'skift', pull: true, put: true },
            sort: false, draggable: '.js-drag', animation: 120,
            delay: 160, delayOnTouchOnly: true, fallbackTolerance: 4,
            ghostClass: 'drag-ghost', chosenClass: 'drag-chosen',
            onStart(evt) { next = evt.item.nextSibling; self.drag = self.srcOf(evt.item); self.selected = null; },
            onMove(evt) { if (evt.to === evt.from) return true; return self.canDrop(self.drag, evt.to); },
            onEnd(evt) {
              const a = self.drag;
              if (evt.item.parentNode !== evt.from || evt.item.nextSibling !== next) evt.from.insertBefore(evt.item, next);
              if (evt.to === evt.from) { self.drag = null; return; }
              if (evt.to.dataset.pool) self.unassign(a);
              else self.commit(a, evt.to.dataset.shift, evt.to.dataset.slot);
            }
          });
        },

        // editing a shift
        openEdit(sh) {
          const m = sh.time.match(/(\d\d:\d\d)(?:\D+(\d\d:\d\d))?/) || [];
          const crew = {}; const open = {};
          sh.slots.forEach((sl) => { crew[sl.key] = sl.count; open[sl.key] = SL.slotOpen(sh, sl); });
          this.selected = null;
          this.edit = { shId: sh.id, start: m[1] || '', end: m[2] || '', fromOnly: /^Fra/.test(sh.time), note: sh.note || '', closed: !!sh.closed, crew: crew, open: open, scope: 'one' };
        },
        get editShift() { return this.edit ? this.st.shifts.find((x) => x.id === this.edit.shId) : null; },
        sameSeries(a, b) { return !!a.tpl && a.venue === b.venue && a.tpl === b.tpl && SL.wd(a.date) === SL.wd(b.date); },
        seriesCount() { const b = this.editShift; return b ? this.st.shifts.filter((x) => this.sameSeries(x, b)).length : 0; },
        bump(key, d) { this.edit.crew[key] = Math.max(0, Math.min(6, (this.edit.crew[key] || 0) + d)); },
        saveEdit() {
          const e = this.edit; const L = this.L; const base = this.editShift;
          const canE = this.canEdit(base);
          const series = e.scope === 'series' && !!base.tpl;
          const targets = series ? this.st.shifts.filter((x) => this.sameSeries(x, base) && x.date >= base.date) : [base];
          const time = e.end ? e.start + '–' + e.end : (e.fromOnly ? base.time : 'Fra ' + e.start);
          const byRole = {}; base.slots.forEach((sl) => { byRole[sl.role] = e.crew[sl.key]; });
          let clamped = false;
          targets.forEach((sh) => {
            if (canE) {
              sh.time = time; sh.closed = e.closed;
              sh.slots.forEach((sl) => { const want = byRole[sl.role]; if (want === undefined) return; if (want < sl.people.length) clamped = true; sl.count = Math.max(want, sl.people.length); });
            }
            if (L.samf) sh.slots.forEach((sl) => { const o = base.slots.find((b) => b.role === sl.role); if (o && e.open[o.key] !== undefined && !SL.ROLES[sl.role].only) sl.open = e.open[o.key]; });
          });
          if (canE || L.samf) base.note = e.note.trim();
          this.persist();
          const wdName = SL.WD_FULL[SL.wd(base.date)].toLowerCase();
          this.feedback = (series ? 'Endret alle ' + wdName + 'er på ' + base.venue + ' fra ' + SL.fmtShort(base.date) + ' (' + targets.length + ' skift). Malen for kommende måneder er også endret.' : 'Endret ' + base.title.toLowerCase() + ', ' + SL.dayLong(base.date).toLowerCase() + '.') + (clamped ? ' Noen plasser ble ikke fjernet fordi folk allerede står der.' : '');
          this.edit = null;
        },

        /* ---------- Fordeling ---------- */
        allocSubs() { const L = this.L; if (L.scope === 'all') return SL.SUBS.slice(); if (L.scope === 'samf') return []; return [L.scope]; },
        get aSub() { const s = this.allocSubs(); return s.indexOf(this.allocSub) >= 0 ? this.allocSub : s[0]; },
        allocDays() {
          const sub = this.aSub; const days = [];
          this.st.shifts.filter((sh) => sh.kind === 'drift' && sh.sub === sub && sh.date >= SL.DEC_FROM).forEach((sh) => {
            let d = days.find((x) => x.date === sh.date);
            if (!d) { d = { date: sh.date, shifts: [] }; days.push(d); }
            d.shifts.push(sh);
          });
          return days;
        },
        allocMembers() { return this.people.filter((p) => SL.isSk(p) && p.sub === this.aSub); },
        answered(pid) { return Object.keys(this.st.rules[pid] || {}).length > 0 || Object.keys(this.st.wishes[pid] || {}).length > 0; },
        allocHead() {
          const sub = this.aSub; const members = this.allocMembers();
          const ans = members.filter((p) => this.answered(p.id)).length;
          const wk = SL.range('2026-12-07', '2026-12-13');
          let need = 0; let needSl = 0;
          this.st.shifts.forEach((sh) => { if (sh.kind !== 'drift' || sh.sub !== sub || wk.indexOf(sh.date) < 0 || sh.closed) return; sh.slots.forEach((sl) => { if (sl.role === 'skiftleder') needSl += sl.count; if (sl.role !== 'opplaering') need += sl.count; }); });
          const regulars = members.filter((p) => p.level !== 'opplaering' && p.contract !== 'pensjonist');
          const sls = regulars.filter((p) => p.level === 'skiftleder').length;
          const short = regulars.length < need || sls < needSl;
          return {
            answered: ans + ' av ' + members.length + ' har svart',
            cap: 'Med ett skift i uka per person trenger ' + sub + ' ' + need + ' personer en vanlig uke' + (needSl ? ', ' + needSl + ' av dem skiftledere' : '') + '. Dere har ' + regulars.length + ' faste' + (needSl ? ', ' + sls + ' av dem skiftledere' : '') + ', i tillegg til pensjonister og folk i opplæring.' + (short ? ' Det holder ikke til alle skiftene.' : ''),
            short: short, status: this.st.periods[sub]
          };
        },
        suggestDec() {
          const sub = this.aSub;
          SL.suggest(this.w, sub, SL.DEC_FROM, SL.LAST_DAY);
          this.st.periods[sub] = 'suggested';
          this.persist();
          this.feedback = 'Forslag for ' + sub + ' i desember er laget. Juster og publiser når du er fornøyd.';
        },
        publishDec() {
          const sub = this.aSub;
          this.st.periods[sub] = 'published';
          this.persist();
          this.showToast(sub + ' desember er publisert. Alle ser skiftene sine under Mine.');
        },
        reopenDec() { this.st.periods[this.aSub] = 'suggested'; this.persist(); },
        allocWarnings() { return this.st.periods[this.aSub] === 'open' ? [] : SL.fordelingWarnings(this.w, this.aSub, SL.DEC_FROM, SL.LAST_DAY); },
        wishWord(pid, sh) { const v = SL.avail(this.w, pid, sh); return { vil: 'vil', kan: 'kan', nei: 'kan ikke', '': 'ikke svart' }[v]; },
        cellPeople(sh) {
          const out = [];
          sh.slots.forEach((sl) => sl.people.forEach((pid) => out.push({ sl: sl, p: this.person(pid), suffix: sl.role === 'skiftleder' ? ' (SL)' : (sl.role === 'opplaering' ? ' (opplæring)' : ''), wish: this.wishWord(pid, sh) })));
          return out;
        },
        cellGaps(sh) {
          if (sh.closed) return 'Stengt';
          const g = [];
          sh.slots.forEach((sl) => { const miss = sl.count - sl.people.length; if (miss > 0 && sl.role === 'skiftleder') g.push('Mangler skiftleder'); else if (miss > 0 && SL.ROLES[sl.role].crew) g.push('Mangler ' + miss + ' ' + this.roleName(sl).toLowerCase()); });
          return g.join(' · ');
        },
        targetSlot(p, sh) {
          if (p.level === 'opplaering' || (p.level === 'sl-opplaering' && sh.slots.some((s) => s.role === 'opplaering' && s.people.length < s.count) && !sh.slots.some((s) => SL.ROLES[s.role].crew && s.people.length < s.count))) return sh.slots.find((s) => s.role === 'opplaering' && s.people.length < s.count);
          if (p.level === 'skiftleder') { const s = sh.slots.find((x) => x.role === 'skiftleder' && x.people.length < x.count); if (s) return s; }
          return sh.slots.find((s) => SL.ROLES[s.role].crew && s.people.length < s.count);
        },
        candidates(sh) {
          const wk = SL.isoWeek(sh.date);
          return this.allocMembers().filter((p) => {
            if (sh.slots.some((s) => s.people.indexOf(p.id) >= 0)) return false;
            const v = SL.avail(this.w, p.id, sh); if (v !== 'vil' && v !== 'kan') return false;
            const sl = this.targetSlot(p, sh); if (!sl) return false;
            return !SL.check(this.w, p, sh, sl).block;
          }).map((p) => {
            let n = 0; this.st.shifts.forEach((x) => { if (SL.isoWeek(x.date) === wk && x.slots.some((s) => s.people.indexOf(p.id) >= 0)) n += 1; });
            return { p: p, v: SL.avail(this.w, p.id, sh), n: n, sl: this.targetSlot(p, sh) };
          }).sort((x, y) => (x.n - y.n) || ((x.v === 'vil' ? 0 : 1) - (y.v === 'vil' ? 0 : 1)) || (x.p.name < y.p.name ? -1 : 1)).slice(0, 8);
        },
        allocAdd(sh, c) { this.openCell = ''; this.commit({ pid: c.p.id, fromShift: null, fromSlot: null }, sh.id, c.sl.key); },
        allocRemove(sh, sl, pid) { this.unassign({ pid: pid, fromShift: sh.id, fromSlot: sl.key }); },

        /* ---------- Framdrift ---------- */
        progressSubs() { const L = this.L; if (L.scope === 'samf') return []; return L.scope === 'all' ? SL.SUBS : [L.scope]; },
        subProgress(sub) {
          const members = this.people.filter((p) => SL.isSk(p) && p.sub === sub);
          let slots = 0;
          this.st.shifts.forEach((sh) => { if (sh.kind === 'drift' && sh.sub === sub && !sh.closed && sh.date.slice(0, 7) === '2026-11') sh.slots.forEach((sl) => { if (sl.role !== 'opplaering') slots += sl.count; }); });
          const regulars = members.filter((p) => p.level !== 'opplaering' && p.contract !== 'pensjonist').length;
          const weekly = Math.max(1, Math.min(4, Math.floor(slots / Math.max(1, regulars))));
          const rows = members.map((p) => {
            let n = 0; this.st.shifts.forEach((sh) => { if (sh.date.slice(0, 7) === '2026-11' && sh.slots.some((s) => s.people.indexOf(p.id) >= 0)) n += 1; });
            const target = p.contract === 'pensjonist' ? 1 : weekly;
            return { p: p, n: n, target: target, ok: n >= target };
          });
          const lacking = rows.filter((r) => !r.ok);
          return { targetText: 'Mål i november: ' + weekly + (weekly === 4 ? ' skift (ett i uka)' : ' skift. Det er ' + slots + ' plasser på ' + regulars + ' faste.'), members: members.length, ok: rows.length - lacking.length, pct: Math.round((rows.length - lacking.length) / Math.max(1, rows.length) * 100), lacking: lacking };
        },
        groupProgress() {
          return SL.SAMF_GROUPS.map((g) => {
            const members = this.people.filter((p) => p.group === g.name);
            let done = 0; let planned = 0;
            members.forEach((p) => { const pl = SL.placementsOf(this.w, p).samf; if (p.done > 0) done += 1; else if (pl > 0) planned += 1; });
            const left = members.length - done - planned;
            return { name: g.name, borg: g.borg, members: members.length, done: done, planned: planned, donePct: done / members.length * 100, planPct: planned / members.length * 100, status: left <= 0 ? 'I mål' : left + (left === 1 ? ' har ikke tatt skift' : ' har ikke tatt skift') };
          });
        }
      };
    });
  });

  function buildQuick(people, state) {
    const answered = (p) => Object.keys(state.rules[p.id] || {}).length >= 3;
    const f = (pred) => people.find((p) => pred(p) && (!SL.isSk(p) || answered(p))) || people.find(pred);
    const list = [
      ['Stjerne, skjenker', f((p) => p.sub === 'Stjerne' && p.level === 'skjenker' && p.contract === 'uke' && p.courses.brann)],
      ['Stjerne, opplæring', f((p) => p.sub === 'Stjerne' && p.level === 'opplaering')],
      ['Kokk', f((p) => p.sub === 'Kjøkken' && p.level === 'kokk' && p.contract === 'uke')],
      ['Halvtimen', f((p) => p.sub === 'Halvtimen' && p.level === 'skjenker')],
      ['Samf. uten barkurs', f((p) => p.group === 'Fest' && !p.courses.bar && p.courses.brann && !p.done)],
      ['Samf. uten kurs', f((p) => !SL.isSk(p) && !p.courses.bar && !p.courses.brann && !p.done)],
      ['BORG', f((p) => p.group === 'BLAK')]
    ];
    return list.filter((x) => x[1]).map((x) => ({ label: x[0], id: x[1].id }));
  }
})();
