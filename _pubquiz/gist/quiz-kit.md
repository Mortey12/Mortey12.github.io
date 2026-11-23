# Quiz på Kvarteret: design kit

A small, framework-free style kit for quiz apps at Kvarteret: the score app (mstene.no/pubquiz), projector slides, sign-up pages and anything else for the quiz.

**The idea:** it follows [Samfunnet i Bergen's design system](https://www.samfunnetibergen.no/nb/design) (warm off-white, near-black text, DM Sans and DM Mono, pill buttons, 2px outlines, hard offset shadows). The quiz's **own colour is the mint from the old "Quiz på Kvarteret" banner**. Mint takes the place Samfunnet's red has elsewhere, and red is kept for errors.

Files in this gist:
- `quiz-kit.css`: tokens, base elements, components, light and dark mode
- `pubquiz-overview.md`: how the score app is built


## Setup

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="quiz-kit.css" />
<meta name="theme-color" content="#cfe2d6" />
```

Light and dark mode follow the system. To force one, use `<html data-theme="light">` or `<html data-theme="dark">`.

## Colours

| Token | Light | Use |
|---|---|---|
| `--brand` | `#cfe2d6` | **The quiz mint.** Header band, projector background |
| `--brand-strong` / `--primary` / `--shadow` | `#9cc4ad` | Primary buttons, hard shadows, progress bars |
| `--accent` | `#1d6b45` | Links, focus ring, small labels (readable on white) |
| `--accent-soft` | `#e4f0e9` | Hover, highlighted rows, tags |
| `--bg` | `#faf7f2` | Page (Samfunnet off-white) |
| `--panel` | `#ffffff` | Cards and panels |
| `--ink` / `--edge` | `#241d1b` | Text and outlines (Samfunnet near-black) |
| `--muted` | `#5f5754` | Secondary text |
| `--line` | `#e6e1da` | Soft rules inside panels, input borders |
| `--bad` | `#c42b2b` | Errors and delete actions only |
| `--gold` | `#a87400` | 1st place |

Dark mode is a deep green version: `--bg #121a16`, `--panel #1a241f`, mint outlines.

## Type

- **DM Sans** for everything. Headings are **bold uppercase** (`h1` 800, `h2` 800 with letter spacing), echoing the banner.
- **DM Mono** for small uppercase labels: table headers, tags, section labels (`.qk-label`).
- Numbers in tables: `.num` (right-aligned, tabular figures).

## Components

```html
<!-- Header band with the speech-bubble mark -->
<header class="qk-header"><div class="bar">
  <a class="qk-brand" href="#/">
    <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 4h22v17h-9l-2 4-2-4H5z" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/><path d="M13 10a3 3 0 1 1 4.3 2.7c-.9.5-1.3 1.1-1.3 2.1" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><circle cx="16" cy="18" r="1.4" fill="currentColor"/></svg>
    <span>Quiz på Kvarteret</span>
  </a>
  <nav class="qk-nav"><a class="on" href="#/">Weeks</a><a href="#/season">Season</a></nav>
</div></header>

<main class="wrap">
  <h1>Weekly results</h1>
  <section class="panel">              <!-- card: white, 2px outline, 4px mint shadow -->
    <span class="qk-label">01 · Round 1</span>
    <h2>Scores</h2>
    <div class="row">
      <button class="primary">Save</button>   <!-- mint pill -->
      <button>Cancel</button>                 <!-- outline pill -->
      <button class="ghost">More</button>
      <button class="danger small">Delete</button>
      <span class="tag">Score keeper</span>
    </div>
  </section>
  <p class="qk-note">Sign-up is open until 06:00 tomorrow.</p>
  <div class="panel flush scroll"><table>…</table></div>
</main>
```

Layout helpers: `.wrap` (centred, max 1100px, 16px side gutter), `.row` (flex row that wraps), `.spacer`, `.grid2` (responsive columns), `.small`, `.muted`, `.ok`, `.err`.

## Projector slides

Mint background with black capitals, which is exactly the banner look. Cards get a 4px outline and a 10px hard black shadow, and the top 3 get gold, silver and bronze. See `.qk-slide` in the CSS. The score app draws slides on a fixed 1600 × 900 stage that is scaled to fit the screen.

## Rules of thumb

1. **Mint is ours, red is Samfunnet's.** Don't use red for anything but errors and deleting.
2. **Outline + hard shadow** on anything you can click or that groups content. No soft blurry shadows.
3. **Pills** for buttons and tags. 8px corners for inputs, 14px for panels.
4. **Uppercase bold** for headings, sentence case for everything else.
5. **Focus is always visible:** 3px ring in `--accent`.
6. Don't use DAK's penguins or other Kvarteret artwork without asking. The speech-bubble mark above is free to use.
