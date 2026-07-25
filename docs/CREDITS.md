# Third-Party Credits

## Stroke-order data — animCJK

The Hiragana/Katakana/Kanji stroke-order animation, ghost-guide tracing, and
handwriting-practice scoring throughout this site are built on stroke data
from the **animCJK** project:

- https://github.com/parsimonhi/animCJK
- Copyright © 2016–2026 FM-SH and animCJK contributors.

animCJK itself is derived in part from:

- **MakeMeAHanzi** — https://github.com/skishore/makemeahanzi
- **Arphic PL KaitiM GB / Big5** fonts, © Arphic Technology Co., Ltd.

### Licenses

- Kana stroke data is licensed under the **GNU Lesser General Public
  License v3** — see [licenses/animcjk-LGPL.txt](../licenses/animcjk-LGPL.txt).
- Kanji stroke data is licensed under the **Arphic Public License** — see
  [licenses/animcjk-arphic-pl.txt](../licenses/animcjk-arphic-pl.txt).

### What was changed

Both licenses require modified copies of the underlying data to stay freely
available, with a note of what changed. The following files in this repo are
derivatives of the animCJK source (not verbatim copies):

- `data/kana-strokes-data.js` — for each of the 208 Hiragana/Katakana
  characters, the animCJK guide-stroke geometry was extracted, self-
  intersecting strokes that animCJK splits into lettered sub-paths (e.g.
  `3a`/`3b`) were merged back into one logical stroke per real pen stroke,
  each stroke's straight-line polyline was re-fit as a smooth Catmull-Rom
  spline through the same points, and every coordinate was rescaled from
  animCJK's native 1024-unit viewBox to this project's 0–100 stroke space.
  The 66 two-character yōon combinations (きゃ, しゅ, …) are not part of
  animCJK's kana set at all — they were newly composed here from two
  animCJK single-kana glyphs (the small kana scaled to ~62% and positioned
  in the bottom-right corner), a step with no animCJK equivalent.
- `data/kanji/strokes/*.json` — the same extraction, stroke-merging,
  smoothing, and 1024→100 rescale, applied per kanji character, one file
  per character named by its Unicode codepoint.

Regenerate both from a fresh animCJK checkout with:

```
npm run generate:kana-strokes
npm run generate:kanji-strokes
```

See `scripts/README.md` for the one-time source checkout these commands
depend on, and `scripts/animcjk-lib.js` for the conversion logic itself.
