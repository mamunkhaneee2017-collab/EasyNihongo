# EasyNihongo

A static web app for learning Japanese — hiragana, katakana, kanji, vocabulary, grammar, and quizzes — built with plain HTML, CSS, and JavaScript (no build tools required).

## Pages

| Page | Description |
|---|---|
| `index.html` | Landing page |
| `pages/courses.html` | Course listing |
| `pages/hiragana.html` / `pages/katakana.html` | Kana lessons |
| `pages/kanji.html` | Kanji lessons |
| `pages/vocabulary.html` | Vocabulary lessons |
| `pages/grammar.html` | Grammar lessons |
| `pages/lesson.html` | Individual lesson view |
| `pages/quiz.html` | JLPT practice quizzes |
| `pages/dashboard.html` / `pages/profile.html` / `pages/settings.html` | Logged-in user area |
| `pages/login.html` / `pages/register.html` / `pages/forgot-password.html` | Auth pages |
| `pages/contact.html` | Contact form |
| `404.html` | Not-found page (kept at the site root — required there by static hosts like GitHub Pages) |

An admin panel lives under [`admin/`](admin/).

## Project structure

```
EasyNihongo/
├── index.html, 404.html        — must stay at the site root
├── pages/                       — every other page
├── admin/                       — admin panel (self-contained)
├── components/                  — shared header/footer, injected via JS (not fetch —
│                                   see note below) so pages still work opened via file://
├── css/
│   ├── variables.css            — design tokens (colors, spacing, shadows)
│   ├── reset.css, base.css      — global reset + shared typography/buttons
│   ├── navbar.css, footer.css, dark.css
│   └── pages/                   — one stylesheet per page
├── js/
│   ├── utils.js                 — shared dark mode, mobile menu, counters, reveal, ripple
│   ├── i18n.js                  — translation engine
│   └── pages/                   — one script per page
├── data/                        — per-subject data files (vocabulary/, grammar/, kanji/,
│                                   quiz/, courses/, plus hiragana/katakana/dashboard data)
├── locales/                     — en.js / bn.js translation strings
├── assets/                      — icons/, images/, audio/, videos/
├── manifest.json, sw.js         — PWA manifest + offline service worker (root-only)
├── backend/, database/          — reserved for future server-side work (currently empty)
└── docs/                        — reserved for project documentation
```

### Why some components are `.js` instead of `.html`

Shared header/footer partials are plain JavaScript that injects markup into a
placeholder `<div>`, rather than static `.html` fetched at runtime. Browsers
block `fetch()` of local files under `file://`, which is how this project is
opened by default (double-click on `index.html`) — a fetch-based include would
silently break that. The JS-injection approach works either way.

## Status

Front-end pages are built out; `backend/` and `database/` are placeholders for future server-side work.

## License

MIT — see [LICENSE](LICENSE).
