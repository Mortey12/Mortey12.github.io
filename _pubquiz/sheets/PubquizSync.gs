/**
 * Pub quiz → Google Sheets sync (one-way, read-only copy).
 *
 * Copies teams, quiz nights and season tables from mstene.no/pubquiz (Firestore project
 * quiz-samarbeid) into this spreadsheet. The data is publicly readable, so no sign-in or
 * keys are needed beyond the public web API key.
 *
 * Setup: Extensions → Apps Script, paste this file, save, run `setup` once and approve.
 * After that the sheet refreshes every hour, and there is a "Pub quiz → Refresh now" menu.
 *
 * Tabs written by this script (they are cleared and rewritten on every refresh,
 * so don't edit them; make your own tabs/pivots that refer to them instead):
 *   Info, Scores, Nights, Teams, and one season tab per semester (e.g. "Autumn 2026").
 */

const PQ = {
  project: "quiz-samarbeid",
  apiKey: "AIzaSyB9pQJFv0_uhsWlEfMyibc608uxxDAtpkI", // public web key, same as the app uses
  defaults: { penaltyFrom: 6, penaltyPer: 5, seasonMode: "placement", bestN: 8 },
  refreshHours: 1
};

// ---------- Menu and trigger ----------

function onOpen() {
  SpreadsheetApp.getUi().createMenu("Pub quiz")
    .addItem("Refresh now", "refresh")
    .addToUi();
}

/** Run once: creates the hourly trigger and does a first refresh. */
function setup() {
  for (const t of ScriptApp.getProjectTriggers()) {
    if (t.getHandlerFunction() === "refresh") ScriptApp.deleteTrigger(t);
  }
  ScriptApp.newTrigger("refresh").timeBased().everyHours(PQ.refreshHours).create();
  refresh();
}

function refresh() {
  const data = {
    teams: fetchCollection_("pubLag"),
    weeks: fetchCollection_("pubVeke"),
    config: Object.assign({}, PQ.defaults, (fetchCollection_("pubConfig").settings) || {})
  };
  const tables = buildTables(data);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  for (const t of tables) writeSheet_(ss, t);
  // Put the tabs in a predictable order: Info, newest season, Nights, Scores, Teams, older seasons
  tables.forEach((t, i) => {
    const sh = ss.getSheetByName(t.name);
    ss.setActiveSheet(sh);
    ss.moveActiveSheet(i + 1);
  });
  ss.setActiveSheet(ss.getSheetByName(tables[0].name));
}

// ---------- Firestore REST ----------

function fetchCollection_(col) {
  const out = {};
  let token = "";
  do {
    const url = "https://firestore.googleapis.com/v1/projects/" + PQ.project +
      "/databases/(default)/documents/" + col + "?pageSize=300&key=" + PQ.apiKey +
      (token ? "&pageToken=" + encodeURIComponent(token) : "");
    const res = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    if (res.getResponseCode() !== 200) {
      throw new Error("Could not read " + col + " (HTTP " + res.getResponseCode() + "). " +
        "Are the Firestore rules for pub* published? " + res.getContentText().slice(0, 200));
    }
    const body = JSON.parse(res.getContentText());
    for (const d of body.documents || []) out[d.name.split("/").pop()] = decodeFields(d.fields || {});
    token = body.nextPageToken || "";
  } while (token);
  return out;
}

function decodeFields(fields) {
  const o = {};
  for (const k in fields) o[k] = decodeValue(fields[k]);
  return o;
}

function decodeValue(v) {
  if ("stringValue" in v) return v.stringValue;
  if ("integerValue" in v) return Number(v.integerValue);
  if ("doubleValue" in v) return Number(v.doubleValue);
  if ("booleanValue" in v) return v.booleanValue;
  if ("nullValue" in v) return null;
  if ("timestampValue" in v) return v.timestampValue;
  if ("mapValue" in v) return decodeFields(v.mapValue.fields || {});
  if ("arrayValue" in v) return (v.arrayValue.values || []).map(decodeValue);
  return null;
}

// ---------- Writing ----------

function writeSheet_(ss, t) {
  const sh = ss.getSheetByName(t.name) || ss.insertSheet(t.name);
  sh.clearContents();
  const rows = [t.header].concat(t.rows);
  const width = Math.max.apply(null, rows.map(r => r.length));
  const grid = rows.map(r => r.concat(Array(width - r.length).fill("")));
  sh.getRange(1, 1, grid.length, width).setValues(grid);
  sh.getRange(1, 1, 1, width).setFontWeight("bold");
  sh.setFrozenRows(1);
  if (t.name !== "Info") sh.autoResizeColumns(1, width);
}

// ---------- Tables (pure functions, mirror the app's calc.js) ----------

function buildTables(data) {
  const teams = data.teams, cfg = data.config;
  const weeks = Object.keys(data.weeks).map(id => Object.assign({ id: id }, data.weeks[id]))
    .filter(w => w.date)
    .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

  const scores = [], nights = [];
  const results = {}; // weekId -> rows
  for (const w of weeks.slice().reverse()) { // newest night first, best place first within a night
    const rows = weekResults_(w, teams, cfg).slice().sort((a, b) => a.place - b.place || a.name.localeCompare(b.name));
    results[w.id] = rows;
    const rounds = roundsOf_(w.categories || []);
    for (const r of rows) {
      for (const c of w.categories || []) {
        if (r.s[c.id] != null) scores.push([w.date, seasonOf_(w.date), r.name, c.round, c.name, r.s[c.id]]);
      }
      nights.push([w.date, seasonOf_(w.date), w.title || "", r.place, r.name, r.members || "",
        rounds.map(x => x.name + ": " + r.roundSums[x.name]).join(", "),
        r.raw, r.penalty || 0, r.total, r.points, r.complete ? "" : "incomplete"]);
    }
  }

  const played = {};
  for (const w of weeks) for (const r of results[w.id]) {
    const p = (played[r.teamId] = played[r.teamId] || { n: 0, first: w.date, last: w.date });
    p.n++; p.last = w.date;
  }
  const teamRows = Object.keys(teams).map(id => {
    const t = teams[id], p = played[id] || {};
    return [t.name || "", (t.aliases || []).join(", "), p.n || 0, p.first || "", p.last || "", t.viaSignup ? "QR sign-up" : ""];
  }).sort((a, b) => String(a[0]).localeCompare(String(b[0])));

  const seasons = [];
  for (const w of weeks) { const s = seasonOf_(w.date); if (seasons.indexOf(s) < 0) seasons.push(s); }
  seasons.reverse(); // newest first

  const seasonTabs = seasons.map(s => {
    const list = weeks.filter(w => seasonOf_(w.date) === s);
    return {
      name: s,
      header: ["Place", "Team", "Season points", "Nights played", "Wins", "Podiums", "Average place", "Best place"]
        .concat(list.map(w => w.date.slice(8, 10) + "." + w.date.slice(5, 7))),
      rows: seasonTable_(list, results, teams, cfg)
    };
  });

  const scoring = cfg.seasonMode === "raw"
    ? "Season points = total score each night"
    : "Season points = number of teams that night − place + 1";
  const info = {
    name: "Info",
    header: ["Pub quiz data", ""],
    rows: [
      ["Last refreshed", new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC"],
      ["Source", "https://mstene.no/pubquiz"],
      ["Note", "Copied from the app every hour. Don't edit these tabs: changes are overwritten. Enter scores in the app."],
      ["Season scoring", scoring + (Number(cfg.bestN) ? ", best " + cfg.bestN + " nights count" : ", all nights count")],
      ["Player penalty", cfg.penaltyPer + " points per player over " + cfg.penaltyFrom],
      ["Quiz nights", weeks.length],
      ["Teams", Object.keys(teams).length]
    ]
  };

  const tabs = [info];
  if (seasonTabs.length) tabs.push(seasonTabs[0]);
  tabs.push(
    { name: "Nights", header: ["Date", "Semester", "Title", "Place", "Team", "Players", "Rounds", "Raw score", "Deduction", "Total", "Season points", "Note"], rows: nights },
    { name: "Scores", header: ["Date", "Semester", "Team", "Round", "Category", "Points"], rows: scores },
    { name: "Teams", header: ["Team", "Other spellings", "Nights played", "First night", "Last night", "Registered via"], rows: teamRows }
  );
  return tabs.concat(seasonTabs.slice(1));
}

function seasonOf_(date) {
  const y = Number(date.slice(0, 4)), m = Number(date.slice(5, 7));
  return (m <= 6 ? "Spring " : "Autumn ") + y;
}

function roundsOf_(cats) {
  const out = [];
  for (const c of cats) {
    let r = out.filter(x => x.name === c.round)[0];
    if (!r) out.push((r = { name: c.round, cats: [] }));
    r.cats.push(c);
  }
  return out;
}

function weekResults_(week, teams, cfg) {
  const cats = week.categories || [];
  const rounds = roundsOf_(cats);
  const rows = [];
  const entries = week.teams || {};
  for (const teamId in entries) {
    const e = entries[teamId] || {}, s = e.s || {};
    const entered = cats.filter(c => s[c.id] != null).length;
    if (!entered) continue;
    const raw = cats.reduce((t, c) => t + (s[c.id] || 0), 0);
    const pen = Math.max(0, (e.members || 0) - cfg.penaltyFrom) * cfg.penaltyPer + (e.adjust || 0);
    const roundSums = {};
    for (const r of rounds) roundSums[r.name] = r.cats.reduce((t, c) => t + (s[c.id] || 0), 0);
    rows.push({ teamId: teamId, name: (teams[teamId] && teams[teamId].name) || "(deleted team)", members: e.members,
      s: s, roundSums: roundSums, raw: raw, penalty: pen, total: raw - pen, complete: entered === cats.length });
  }
  rows.sort((a, b) => b.total - a.total);
  rows.forEach((r, i) => (r.place = i > 0 && rows[i - 1].total === r.total ? rows[i - 1].place : i + 1));
  rows.forEach(r => (r.points = cfg.seasonMode === "raw" ? r.total : rows.length - r.place + 1));
  return rows;
}

function seasonTable_(list, results, teams, cfg) {
  const by = {};
  list.forEach((w, wi) => {
    for (const r of results[w.id]) {
      const t = (by[r.teamId] = by[r.teamId] || { name: r.name, results: [], perWeek: Array(list.length).fill("") });
      t.results.push(r);
      t.perWeek[wi] = r.points;
    }
  });
  const bestN = Number(cfg.bestN) || 0;
  const rows = Object.keys(by).map(id => {
    const t = by[id];
    const pts = t.results.map(x => x.points).sort((a, b) => b - a);
    const counted = bestN ? pts.slice(0, bestN) : pts;
    const places = t.results.map(x => x.place);
    return {
      name: (teams[id] && teams[id].name) || t.name, perWeek: t.perWeek,
      score: counted.reduce((a, b) => a + b, 0), played: places.length,
      wins: places.filter(p => p === 1).length, podiums: places.filter(p => p <= 3).length,
      avg: places.reduce((a, b) => a + b, 0) / places.length, best: Math.min.apply(null, places)
    };
  });
  rows.sort((a, b) => b.score - a.score || b.wins - a.wins || a.avg - b.avg);
  rows.forEach((r, i) => {
    const p = rows[i - 1];
    r.place = p && p.score === r.score && p.wins === r.wins && p.avg === r.avg ? p.place : i + 1;
  });
  return rows.map(r => [r.place, r.name, r.score, r.played, r.wins, r.podiums, Math.round(r.avg * 10) / 10, r.best].concat(r.perWeek));
}

// Lets the table logic be tested outside Apps Script (ignored inside Google Sheets)
if (typeof module !== "undefined") module.exports = { buildTables, decodeValue, decodeFields };
