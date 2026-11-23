# Pub quiz → Google Sheets

`PubquizSync.gs` copies everything from mstene.no/pubquiz into a Google Sheet every hour. The copy goes one way only: scores are still entered in the app, and any edits made in the Sheet are overwritten.

## Setup (once, about 5 minutes)

1. Publish the Firestore rules first. Until then the script gets "HTTP 403".
2. In the Samfunnet i Bergen Google Drive, create a new Google Sheet (e.g. "Pub quiz results").
3. Open **Extensions → Apps Script**, delete the empty `myFunction`, paste in all of `PubquizSync.gs`, and save.
4. Choose **setup** in the function dropdown at the top and click **Run**.
   - Google asks for permission: pick your workspace account, then Advanced → Go to (project) → Allow.
   - It asks for two things: to edit *this* spreadsheet and to connect to external services (Firestore). It gets no access to your other files.
5. Go back to the Sheet and reload it. The tabs appear, along with a **Pub quiz → Refresh now** menu.

From then on it refreshes every hour, even when nobody has the Sheet open. The script runs as the person who did step 4.

## Tabs

| Tab | Content |
|---|---|
| Info | Last refresh time and the scoring rules in use |
| Autumn 2026 (newest semester) | Season table, plus season points per night |
| Nights | Pick a year, season and month, then a quiz night from the dropdowns at the top; shows that night (date, season, month and number of teams on one line) and a table: place, team, players, Round 1, Round 2, Picture round, raw score, deduction, total, season points, month points (running total for the month). Your picks are kept between refreshes. |
| Night data | Every night in one table (with Date, Season, Month and Year on every row), for pivot tables and your own formulas |
| Scores | One row per team, category and night. Best for pivot tables and filters |
| Teams | All teams, other spellings, nights played |
| Older semesters | One season tab each |

Make your own tabs (charts, pivot tables) that refer to these. Don't edit the generated tabs themselves.

## Scoresheet archive (backup)

The script also keeps a second spreadsheet, **"Pub quiz – scoresheet archive"**, in the same folder as this one. The link is on the Info tab. It has one tab per quiz night: place, team, players, every category, raw score, deduction, total and season points.

- **Only ever added to.** If a night is deleted on the website, or the website is down, its tab stays in the archive.
- **Locked after 2 days.** The script can't tell when a quiz is "over", so it goes by the calendar. A night's tab is rewritten on each hourly refresh until 2 days after the quiz date, so late scores and corrections still get in. After that the script never touches it again. To change how long, edit `PQ_ARCHIVE_DAYS` at the top of the script.
- **No wiping.** If the website returns no quiz nights at all, the refresh stops and leaves the main sheet as it was.
- **Sign-in.** The first refresh with this version asks you to approve access again. It needs to create the archive file and move it next to this sheet.

## Who can see the Sheet

The script doesn't need the Sheet to be shared. It reads the app's data, which is already public, and writes into the Sheet as its owner. So:

- Keep **General access** set to **Restricted**, or to "Samfunnet i Bergen" if everyone in the workspace should see it. Never set it to "Anyone with the link".
- Add the people who should see it with **Share**, as **Viewer**. Give **Editor** only to people who should change the script or add tabs.
- Better: put the Sheet in a **shared drive** for the quiz group. Then it doesn't depend on one person's account if someone leaves.

If the person who ran `setup` leaves, someone else opens Apps Script and runs `setup` again. That moves the hourly refresh to their account.

## Troubleshooting

- **HTTP 403**: the Firestore rules for `pub*` aren't published.
- **"Authorization required" / the script is blocked**: the workspace admin may have blocked Apps Script or external requests. Ask them to allow it for this script.
- Stop refreshing: Apps Script → Triggers (clock icon) → delete the `refresh` trigger.
