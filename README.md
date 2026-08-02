# EasyNihongo

A web app for learning Japanese — hiragana, katakana, kanji, vocabulary, grammar, and quizzes — built with plain HTML, CSS, and JavaScript on the frontend, backed by a real Node.js + Express + SQLite server.

## Running it

```bash
npm install
npm start
```

Then visit **http://localhost:3000**. The server serves the whole site and the `/api/*` routes from one process — opening pages directly via `file://` still renders the static shell, but login, the dashboard, quiz saving, favorites, and the admin panel all require the server running.

On first start, an admin account is seeded automatically:

- Email: `admin@easynihongo.com`
- Password: `admin123`

(Override with the `ADMIN_SEED_EMAIL` / `ADMIN_SEED_PASSWORD` env vars before the first run.) Admin panel: `/admin/login.html`.

Data lives in `database/easynihongo.sqlite` (created automatically); uploaded files live in `uploads/` — both gitignored.

### AI chatbot (homepage)

The chat widget on the homepage answers visitor questions about the site's courses, grounded in the real course content, plus general Japanese-language questions. It calls Google's Gemini API (free tier), not Claude/OpenAI.

1. Get a free API key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey) (no credit card required).
2. Set it as an environment variable before starting the server: `GEMINI_API_KEY=your-key-here`.
3. Optional: `GEMINI_MODEL` overrides the default (`gemini-2.5-flash`).

Without a key set, the widget still renders but shows a friendly "not configured yet" message instead of crashing.

## Pages

| Page | Description |
|---|---|
| `index.html` | Landing page |
| `pages/courses.html` | Course listing |
| `pages/hiragana.html` / `pages/katakana.html` | Kana lessons |
| `pages/kanji.html` | Kanji lessons |
| `pages/vocabulary.html` | Vocabulary lessons |
| `pages/grammar.html` | Grammar lessons |
| `pages/level-hub.html` | Vocabulary/Grammar/Kanji picker for one JLPT level |
| `pages/chapters.html` | Chapter grid for one level+type |
| `pages/chapter.html` | The actual lesson — words/patterns/kanji for one chapter |
| `pages/vocabulary-topics.html` / `pages/vocabulary-topic.html` | Subject-based vocabulary (Kitchen, IT, Hospital, etc.) |
| `pages/quiz.html` | JLPT practice quizzes |
| `pages/dashboard.html` / `pages/profile.html` / `pages/settings.html` | Logged-in user area |
| `pages/login.html` / `pages/register.html` / `pages/forgot-password.html` | Auth pages |
| `pages/contact.html` | Contact form |
| `404.html` | Not-found page (kept at the site root — required there by static hosts like GitHub Pages) |

An admin panel lives under [`admin/`](admin/).

## Project structure

```
EasyNihongo/
├── package.json                 — npm start runs backend/server.js
├── index.html, 404.html         — must stay at the site root
├── pages/                       — every other page
├── admin/                       — admin panel (real, backed by /api/admin/*)
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
│   ├── auth-guard.js            — redirects to login.html if /api/auth/me isn't authenticated
│   └── pages/                   — one script per page
├── data/                        — per-subject content (vocabulary/, grammar/, kanji/,
│                                   quiz/, courses/, plus hiragana/katakana). Each file is
│                                   loaded as a browser <script> AND required() by the
│                                   backend (backend/lib/contentData.js) — single source
│                                   of truth for "how many items exist per level".
├── locales/                     — en.js / bn.js translation strings
├── assets/                      — icons/, images/, audio/, videos/
├── manifest.json, sw.js         — PWA manifest + offline service worker (root-only)
├── backend/                     — Express app: routes/, middleware/, db/, lib/
├── database/                    — easynihongo.sqlite + session store (gitignored)
├── uploads/                     — admin-uploaded course materials + avatars (gitignored)
└── docs/                        — reserved for project documentation
```

### Why some components are `.js` instead of `.html`

Shared header/footer partials are plain JavaScript that injects markup into a
placeholder `<div>`, rather than static `.html` fetched at runtime. Browsers
block `fetch()` of local files under `file://`, which is how this project is
opened by default (double-click on `index.html`) — a fetch-based include would
silently break that. The JS-injection approach works either way.

## Status

Full-stack: real registration/login (bcrypt + sessions), a real per-user dashboard
(XP, streak, weekly activity, kanji/grammar/vocabulary progress, quiz history), and a
real admin panel (course material uploads that publish to the public Courses page,
contact-form messages, student management, visitor logging, site settings that drive
the navbar/footer).

Known limitations (by design, not oversights):
- No real email sending (forgot-password links, admin message replies) — no SMTP
  configured. Replies are saved but not emailed.
- Visitor analytics has no geo-IP (country/city) — device type and page path only.
- Grammar/Kanji/Quiz content only has real entries for N5/N4; N3–N1 are intentionally
  empty pending content authoring, independent of the backend.

## License

MIT — see [LICENSE](LICENSE). Third-party stroke-order data credits: see [docs/CREDITS.md](docs/CREDITS.md).
