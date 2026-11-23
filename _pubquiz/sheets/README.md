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
| Nights | One row per team per night: place, players, round scores, deduction, total, season points |
| Scores | One row per team, category and night. Best for pivot tables and filters |
| Teams | All teams, other spellings, nights played |
| Older semesters | One season tab each |

Make your own tabs (charts, pivot tables) that refer to these. Don't edit the generated tabs themselves.

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
