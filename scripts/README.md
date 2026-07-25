# scripts/

One-off data-generation tooling. Not part of the running app — `npm start`
never touches this folder.

## Regenerating stroke-order data

`data/kana-strokes-data.js` and `data/kanji/strokes/*.json` are generated
from the [animCJK](https://github.com/parsimonhi/animCJK) project (see
[../docs/CREDITS.md](../docs/CREDITS.md) for license details). The source
SVGs aren't committed to this repo — clone them once into the gitignored
`vendor/` folder:

```
git clone --depth 1 https://github.com/parsimonhi/animCJK vendor/animcjk
```

Then run either generator (or both) from the repo root:

```
npm run generate:kana-strokes
npm run generate:kanji-strokes
```

- `generate:kana-strokes` rewrites `data/kana-strokes-data.js` for all 208
  Hiragana/Katakana characters currently listed in `data/hiragana-data.js`
  / `data/katakana-data.js`. Review the diff before committing.
- `generate:kanji-strokes` writes one `data/kanji/strokes/{codepoint}.json`
  file per kanji currently listed in `data/kanji/kanji-data.js`. Safe to
  re-run any time new kanji chapters are authored — it picks up whatever's
  in `kanji-data.js` at the time, and animCJK covers ~2,999 jōyō/jinmeiyō
  kanji by Unicode codepoint, well beyond N5–N1's needs.

`vendor/` can be deleted after generating — it's only read at generation
time, never at runtime.

## Files

- `animcjk-lib.js` — shared extraction/rescale/compose helpers, used by
  both generators. See its file comment for how animCJK's SVG structure
  maps to this project's stroke-data format.
- `generate-kana-strokes.js`, `generate-kanji-strokes.js` — the two
  generators described above.
