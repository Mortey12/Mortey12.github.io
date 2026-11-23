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
 *   Info, Nights (pick a quiz night from the dropdowns), Night data (every night in one table),
 *   Scores, Teams, and one season tab per semester (e.g. "Autumn 2026").
 *   Your dropdown choices on Nights are kept between refreshes.
 */

const PQ = {
  project: "quiz-samarbeid",
  apiKey: "AIzaSyB9pQJFv0_uhsWlEfMyibc608uxxDAtpkI", // public web key, same as the app uses
  defaults: { penaltyFrom: 6, penaltyPer: 5, seasonMode: "field", bestN: 13, minNights: 8 },
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
  // Never wipe the sheet because the website returned nothing (outage, rules changed, data deleted)
  if (!Object.keys(data.weeks).length) {
    throw new Error("The website returned no quiz nights, so the sheet was left as it was. Check mstene.no/pubquiz.");
  }
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  try { data.archive = archiveNights_(ss, data); }
  catch (e) { data.archive = { error: String(e.message || e) }; }
  const tables = buildTables(data);
  for (const t of tables) if (!t.kind) writeSheet_(ss, t);
  writeNightsView_(ss, tables.filter(t => t.kind === "nightsView")[0]); // reads Night data, so it goes last
  // Put the tabs in a predictable order: Info, newest season, Nights, Night data, Scores, Teams, older seasons
  tables.forEach((t, i) => {
    const sh = ss.getSheetByName(t.name);
    ss.setActiveSheet(sh);
    ss.moveActiveSheet(i + 1);
  });
  ss.setActiveSheet(ss.getSheetByName(tables[0].name));
}

// ---------- Scoresheet archive ----------
// A separate spreadsheet with one tab per quiz night that is only ever added to: a backup that
// survives even if nights are deleted on the website. A night's tab is updated while late scores
// and corrections can still come in (until PQ_ARCHIVE_DAYS after the quiz), then left alone for good.

const PQ_ARCHIVE_DAYS = 2;

function archiveNights_(ss, data) {
  const props = PropertiesService.getScriptProperties();
  let arch = null;
  const id = props.getProperty("archiveId");
  if (id) { try { arch = SpreadsheetApp.openById(id); } catch (e) { arch = null; } } // deleted: make a new one
  if (!arch) {
    arch = SpreadsheetApp.create("Pub quiz – scoresheet archive");
    props.setProperty("archiveId", arch.getId());
    try { // put it in the same folder as this spreadsheet (works in shared drives too)
      DriveApp.getFileById(arch.getId()).moveTo(DriveApp.getFileById(ss.getId()).getParents().next());
    } catch (e) { /* stays in the Drive of whoever ran the script */ }
  }
  const tz = ss.getSpreadsheetTimeZone();
  const cutoff = Utilities.formatDate(new Date(Date.now() - PQ_ARCHIVE_DAYS * 864e5), tz, "yyyy-MM-dd");
  const saved = Utilities.formatDate(new Date(), tz, "dd.MM.yyyy HH:mm");
  const weeks = Object.keys(data.weeks).map(k => data.weeks[k]).filter(w => w.date)
    .sort((a, b) => (a.date < b.date ? -1 : 1)); // oldest first, so the newest tab ends up first
  let written = 0;
  for (const w of weeks) {
    const name = w.date.slice(8, 10) + "." + w.date.slice(5, 7) + "." + w.date.slice(0, 4);
    let sh = arch.getSheetByName(name);
    if (sh && w.date < cutoff) continue; // frozen
    const sheet = scoresheet_(w, data.teams, data.config, saved);
    if (!sheet.rows.length) continue; // nothing scored yet
    if (!sh) { sh = arch.insertSheet(name, 0); }
    sh.clear();
    sh.getRange(1, 1).setValue(sheet.title).setFontWeight("bold").setFontSize(14);
    sh.getRange(2, 1).setValue(sheet.subtitle).setFontColor("#777777");
    sh.getRange(4, 1, 1, sheet.header.length).setValues([sheet.header]).setFontWeight("bold").setBackground("#f3e9dc");
    sh.getRange(5, 1, sheet.rows.length, sheet.header.length).setValues(sheet.rows);
    sh.setFrozenRows(4);
    sh.autoResizeColumns(1, sheet.header.length);
    written++;
  }
  const blank = arch.getSheetByName("Sheet1") || arch.getSheetByName("Ark1"); // the new file's empty first tab
  if (blank && arch.getSheets().length > 1) arch.deleteSheet(blank);
  return { url: arch.getUrl(), written: written };
}

/** One night's scoresheet: every category, round sums when a round has several categories, totals. */
function scoresheet_(w, teams, cfg, saved) {
  const cats = w.categories || [];
  const multi = roundsOf_(cats).filter(r => r.cats.length > 1);
  const rows = weekResults_(w, teams, cfg).slice().sort((a, b) => a.place - b.place || a.name.localeCompare(b.name));
  const d = new Date(w.date + "T12:00:00");
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return {
    title: "Pub quiz " + days[d.getDay()] + " " + Number(w.date.slice(8, 10)) + " " + MONTHS_[Number(w.date.slice(5, 7)) - 1] + " " + w.date.slice(0, 4),
    subtitle: rows.length + " teams · " + seasonOf_(w.date) + " · saved " + saved + " from mstene.no/pubquiz",
    header: ["Place", "Team", "Players"].concat(cats.map(c => c.name), multi.map(r => r.name + " total"),
      ["Raw score", "Deduction", "Total", "Season points"]),
    rows: rows.map(r => [r.place, r.name, r.members || ""]
      .concat(cats.map(c => (r.s[c.id] != null ? r.s[c.id] : "")), multi.map(x => r.roundSums[x.name]),
        [r.raw, r.penalty || 0, r.total, r.points]))
  };
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

const DATE_FMT = "dd.mm.yyyy";

// Plain-text columns stay text ("November 2026" would otherwise turn into a date); date columns get DATE_FMT
function formatCols_(sh, firstRow, nRows, t) {
  if (nRows < 1) return;
  for (const c of t.textCols || []) sh.getRange(firstRow, c + 1, nRows, 1).setNumberFormat("@");
  for (const c of t.dateCols || []) sh.getRange(firstRow, c + 1, nRows, 1).setNumberFormat(DATE_FMT);
}

function writeSheet_(ss, t) {
  const sh = ss.getSheetByName(t.name) || ss.insertSheet(t.name);
  sh.clear();
  sh.getRange(1, 1, sh.getMaxRows(), sh.getMaxColumns()).clearDataValidations();
  const rows = [t.header].concat(t.rows);
  const width = Math.max.apply(null, rows.map(r => r.length));
  const grid = rows.map(r => r.concat(Array(width - r.length).fill("")));
  formatCols_(sh, 2, t.rows.length, t);
  sh.getRange(1, 1, grid.length, width).setValues(grid);
  sh.getRange(1, 1, 1, width).setFontWeight("bold");
  sh.setFrozenRows(1);
  if (t.name !== "Info") sh.autoResizeColumns(1, width);
}

// Nights: dropdowns at the top (Year, Season, Month, Quiz night) and the chosen night's table below.
// No formulas (they break in sheets set to languages that use ; instead of ,): the script fills the
// dropdowns and the table itself, on every refresh and whenever a dropdown is changed (onEdit).
// Night data columns shown under the dropdowns. Date, Season, Month and Year are left out, since
// they are the same on every row; the line above the table says them once.
const NV = { firstRow: 7, dataCols: 15, show: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13] };

function writeNightsView_(ss, t) {
  const sh = ss.getSheetByName("Nights") || ss.insertSheet("Nights");
  const keep = sh.getRange("A1").getValue() === "Year" ? sh.getRange("B1:B4").getDisplayValues().map(r => r[0]) : ["", "", "", ""];
  sh.clear();
  sh.getRange(1, 1, sh.getMaxRows(), sh.getMaxColumns()).clearDataValidations();
  sh.getRange("A1:A4").setValues([["Year"], ["Season"], ["Month"], ["Quiz night"]]).setFontWeight("bold");
  sh.getRange("B1:B4").setNumberFormat("@").setValues(keep.map(v => [v])).setBackground("#fff7e0").setFontWeight("bold");
  sh.getRange("C1").setValue("Pick a year, season or month to narrow the list of quiz nights, then pick the night.").setFontColor("#777777");
  sh.getRange(6, 1, 1, NV.show.length).setValues([NV.show.map(i => t.header[i])]).setFontWeight("bold");
  sh.setFrozenRows(6);
  renderNights_(ss);
  sh.autoResizeColumns(1, NV.show.length);
  sh.setColumnWidth(2, 150);
  const old = ss.getSheetByName("Lists"); // helper tab from an earlier version of this script
  if (old) ss.deleteSheet(old);
}

/** Runs by itself when someone changes a cell; redraws Nights when one of its dropdowns changed. */
function onEdit(e) {
  const r = e && e.range;
  if (!r || r.getSheet().getName() !== "Nights") return;
  if (r.getRow() <= 4 && r.getColumn() <= 2 && r.getLastColumn() >= 2) renderNights_(e.source);
}

function renderNights_(ss) {
  const sh = ss.getSheetByName("Nights"), data = ss.getSheetByName("Night data");
  if (!sh || !data) return;
  const n = data.getLastRow() - 1;
  const vals = n > 0 ? data.getRange(2, 1, n, NV.dataCols).getValues() : [];
  const disp = n > 0 ? data.getRange(2, 1, n, NV.dataCols).getDisplayValues() : [];
  // One entry per quiz night, newest first (Night data is sorted that way)
  const nights = [];
  for (const d of disp) {
    if (!nights.length || nights[nights.length - 1].date !== d[0]) nights.push({ date: d[0], season: d[11], month: d[12], year: String(d[14]) });
  }
  const uniq = a => a.filter((x, i) => a.indexOf(x) === i);
  const pick = sh.getRange("B1:B4").getDisplayValues().map(r => String(r[0]).trim());
  const choose = (v, list) => (list.indexOf(v) >= 0 ? v : "All");

  const years = ["All"].concat(uniq(nights.map(x => x.year)));
  const year = choose(pick[0], years);
  const inYear = nights.filter(x => year === "All" || x.year === year);
  const seasons = ["All"].concat(uniq(inYear.map(x => x.season)));
  const season = choose(pick[1], seasons);
  const inSeason = inYear.filter(x => season === "All" || x.season === season);
  const months = ["All"].concat(uniq(inSeason.map(x => x.month)));
  const month = choose(pick[2], months);
  const dates = inSeason.filter(x => month === "All" || x.month === month).map(x => x.date);
  const date = dates.indexOf(pick[3]) >= 0 ? pick[3] : dates[0] || "";

  const box = sh.getRange("B1:B4");
  box.clearDataValidations();
  box.setNumberFormat("@").setValues([[year], [season], [month], [date]]);
  const dv = list => SpreadsheetApp.newDataValidation().requireValueInList(list.length ? list : ["-"], true).setAllowInvalid(false).build();
  sh.getRange("B1").setDataValidation(dv(years));
  sh.getRange("B2").setDataValidation(dv(seasons));
  sh.getRange("B3").setDataValidation(dv(months));
  sh.getRange("B4").setDataValidation(dv(dates));
  sh.getRange("C4").setValue(!date ? "No quiz nights match the filters above."
    : pick[3] && pick[3] !== date ? "→ " + pick[3] + " isn't in the filters above, so showing " + date + "." : "")
    .setFontColor("#aa3333");

  const last = sh.getLastRow();
  if (last >= NV.firstRow) sh.getRange(NV.firstRow, 1, last - NV.firstRow + 1, sh.getMaxColumns()).clearContent();
  // Reset formats too, so nothing left from an earlier layout (e.g. a date column) turns places into dates
  sh.getRange(NV.firstRow, 1, sh.getMaxRows() - NV.firstRow + 1, sh.getMaxColumns()).clearFormat();
  const rows = vals.filter((v, i) => disp[i][0] === date).map(v => NV.show.map(i => v[i]));
  const night = nights.filter(x => x.date === date)[0];
  sh.getRange("A5").setValue(night ? night.date + "  ·  " + night.season + "  ·  " + night.month + "  ·  " + rows.length + " teams" : "").setFontWeight("bold");
  if (rows.length) {
    sh.getRange(NV.firstRow, 1, rows.length, NV.show.length).setValues(rows);
  }
}

// ---------- Tables (pure functions, mirror the app's calc.js) ----------

function buildTables(data) {
  const teams = data.teams, cfg = data.config;
  const weeks = Object.keys(data.weeks).map(id => Object.assign({ id: id }, data.weeks[id]))
    .filter(w => w.date)
    .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

  const scores = [], nights = [];
  const results = {}; // weekId -> rows
  for (const w of weeks) results[w.id] = weekResults_(w, teams, cfg).slice().sort((a, b) => a.place - b.place || a.name.localeCompare(b.name));
  // Month points: the team's running total for that month, up to and including the night
  const monthRun = {}, monthPts = {};
  for (const w of weeks) for (const r of results[w.id]) {
    const k = monthOf_(w.date) + "|" + r.teamId;
    monthRun[k] = Math.round(((monthRun[k] || 0) + r.points) * 10) / 10;
    monthPts[w.id + "|" + r.teamId] = monthRun[k];
  }
  for (const w of weeks.slice().reverse()) { // newest night first, best place first within a night
    const rounds = roundsOf_(w.categories || []);
    const rs = (r, i) => (rounds[i] ? r.roundSums[rounds[i].name] : "");
    for (const r of results[w.id]) {
      for (const c of w.categories || []) {
        if (r.s[c.id] != null) scores.push([w.date, seasonOf_(w.date), r.name, c.round, c.name, r.s[c.id]]);
      }
      nights.push([w.date, r.place, r.name, r.members || "", rs(r, 0), rs(r, 1), rs(r, 2),
        r.raw, r.penalty || 0, r.total, r.points, seasonOf_(w.date), monthOf_(w.date),
        monthPts[w.id + "|" + r.teamId], Number(w.date.slice(0, 4))]);
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
      header: ["Place", "Team", "Season points", "Nights played", "Qualified", "Wins", "Podiums", "Average place", "Best place"]
        .concat(list.map(w => w.date.slice(8, 10) + "." + w.date.slice(5, 7))),
      rows: seasonTable_(list, results, teams, cfg)
    };
  });

  const scoring = cfg.seasonMode === "raw" ? "Season points = total score each night"
    : cfg.seasonMode === "placement" ? "Season points = number of teams that night − place + 1"
    : "Season points = 100 × (teams that night − place + 1) ÷ teams that night (winner 100)";
  const info = {
    name: "Info",
    header: ["Pub quiz data", ""],
    rows: [
      ["Last refreshed", new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC"],
      ["Source", "https://mstene.no/pubquiz"],
      ["Note", "Copied from the app every hour. Don't edit these tabs: changes are overwritten. Enter scores in the app."],
      ["Season scoring", scoring + (Number(cfg.bestN) ? ", best " + cfg.bestN + " nights count" : ", all nights count")],
      ["To win the season", Number(cfg.minNights) ? "play at least " + cfg.minNights + " nights" : "no minimum"],
      ["Player penalty", cfg.penaltyPer + " points per player over " + cfg.penaltyFrom],
      ["Scoresheet archive", !data.archive ? "" : data.archive.url
        ? data.archive.url + "  (one tab per night, never deleted; a night is locked " + PQ_ARCHIVE_DAYS + " days after the quiz)"
        : "Couldn't save: " + data.archive.error],
      ["Quiz nights", weeks.length],
      ["Teams", Object.keys(teams).length]
    ]
  };

  const tabs = [info];
  if (seasonTabs.length) tabs.push(seasonTabs[0]);
  const nightHeader = ["Date", "Place", "Team", "Players", "Round 1", "Round 2", "Picture round", "Raw score",
    "Deduction", "Total", "Season points", "Season", "Month", "Month points", "Year"];
  const newestFirst = weeks.slice().reverse();
  const years = [];
  for (const w of newestFirst) { const y = Number(w.date.slice(0, 4)); if (years.indexOf(y) < 0) years.push(y); }
  tabs.push(
    { name: "Nights", kind: "nightsView", header: nightHeader, dataRows: nights.length, nights: weeks.length,
      years: years, newest: newestFirst.length ? newestFirst[0].date : "", textCols: [11, 12], dateCols: [0] },
    { name: "Night data", header: nightHeader, rows: nights, textCols: [11, 12], dateCols: [0] },
    { name: "Scores", header: ["Date", "Semester", "Team", "Round", "Category", "Points"], rows: scores, dateCols: [0] },
    { name: "Teams", header: ["Team", "Other spellings", "Nights played", "First night", "Last night", "Registered via"], rows: teamRows }
  );
  return tabs.concat(seasonTabs.slice(1));
}

const MONTHS_ = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function monthOf_(date) { return MONTHS_[Number(date.slice(5, 7)) - 1] + " " + date.slice(0, 4); }

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
  const n = rows.length;
  rows.forEach(r => (r.points = cfg.seasonMode === "raw" ? r.total
    : cfg.seasonMode === "placement" ? n - r.place + 1
    : Math.round((1000 * (n - r.place + 1)) / n) / 10)); // share of the field: winner 100
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
      score: Math.round(counted.reduce((a, b) => a + b, 0) * 10) / 10, played: places.length,
      wins: places.filter(p => p === 1).length, podiums: places.filter(p => p <= 3).length,
      avg: places.reduce((a, b) => a + b, 0) / places.length, best: Math.min.apply(null, places)
    };
  });
  rows.sort((a, b) => b.score - a.score || b.wins - a.wins || a.avg - b.avg);
  rows.forEach((r, i) => {
    const p = rows[i - 1];
    r.place = p && p.score === r.score && p.wins === r.wins && p.avg === r.avg ? p.place : i + 1;
  });
  const min = Number(cfg.minNights) || 0;
  return rows.map(r => [r.place, r.name, r.score, r.played, r.played >= min ? "yes" : "no (" + (min - r.played) + " more)",
    r.wins, r.podiums, Math.round(r.avg * 10) / 10, r.best].concat(r.perWeek));
}

// Lets the table logic be tested outside Apps Script (ignored inside Google Sheets)
if (typeof module !== "undefined") module.exports = { buildTables, decodeValue, decodeFields };
