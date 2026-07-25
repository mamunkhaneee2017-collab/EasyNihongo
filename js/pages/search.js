/* ==========================================
   SITE-WIDE SEARCH (?q=...)
   Builds one in-memory index across every
   content type (loaded as <script> tags, same
   file://-safe convention as every other page)
   and filters it client-side. This is the single
   real search on the site — every other page's
   search box only filters cards already on that
   page; this one reaches everything.
========================================== */

(function () {

    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get("q") || "";

    const input = document.getElementById("siteSearchInput");
    const resultsContainer = document.getElementById("searchResults");
    const resultsSummary = document.getElementById("searchResultsSummary");

    if (input) input.value = initialQuery;

    /* ---------------- BUILD INDEX ---------------- */

    function chapterNumberFor(flat, itemIndex) {
        const chapterIndex = flat.chapters.findIndex((c) => itemIndex >= c.startIndex && itemIndex <= c.endIndex);
        return chapterIndex === -1 ? 1 : chapterIndex + 1;
    }

    function indexLevelContent(rawData, type, label, hrefType, jpKey, readingFn) {
        const entries = [];
        if (typeof rawData === "undefined" || typeof flattenLevel === "undefined") return entries;

        Object.keys(rawData).forEach((level) => {
            const flat = flattenLevel(rawData[level]);
            flat.items.forEach((item, i) => {
                const chapterNum = chapterNumberFor(flat, i);
                entries.push({
                    type,
                    label,
                    jp: item[jpKey],
                    reading: readingFn ? readingFn(item) : item.reading || "",
                    meaningEn: item.meanings ? item.meanings.en : item.meaning || "",
                    meaningBn: item.meanings ? item.meanings.bn : "",
                    href: `chapter.html?level=${level}&type=${hrefType}&chapter=${chapterNum}`
                });
            });
        });
        return entries;
    }

    function buildIndex() {
        let index = [];

        [
            ["hiragana", "Hiragana", typeof hiraganaData !== "undefined" ? hiraganaData : []],
            ["katakana", "Katakana", typeof katakanaData !== "undefined" ? katakanaData : []]
        ].forEach(([type, label, list]) => {
            list.forEach((item) => {
                index.push({
                    type,
                    label,
                    jp: item.character,
                    reading: item.romaji,
                    meaningEn: `${item.word} — ${item.meaning}`,
                    meaningBn: "",
                    // Not shown, but matched: lets a search for the example
                    // word's own romaji ("asa") find あ/あさ, not just a
                    // search for the character's own romaji ("a").
                    searchExtra: `${item.word} ${item.reading || ""}`,
                    href: `character.html?type=${type}&char=${encodeURIComponent(item.character)}`
                });
            });
        });

        index = index.concat(
            indexLevelContent(typeof vocabularyData !== "undefined" ? vocabularyData : undefined, "vocabulary", "Vocabulary", "vocabulary", "word")
        );

        if (typeof vocabularyTopicsData !== "undefined") {
            vocabularyTopicsData.forEach((topic) => {
                topic.items.forEach((item) => {
                    index.push({
                        type: "vocabulary-topic",
                        label: "Vocabulary (Topic)",
                        jp: item.word,
                        reading: item.reading || "",
                        meaningEn: item.meanings ? item.meanings.en : "",
                        meaningBn: item.meanings ? item.meanings.bn : "",
                        href: `vocabulary-topic.html?topic=${topic.id}`
                    });
                });
            });
        }

        index = index.concat(
            indexLevelContent(typeof grammarData !== "undefined" ? grammarData : undefined, "grammar", "Grammar", "grammar", "pattern")
        );

        index = index.concat(
            indexLevelContent(
                typeof kanjiData !== "undefined" ? kanjiData : undefined,
                "kanji",
                "Kanji",
                "kanji",
                "char",
                (item) => [item.on, item.kun].filter(Boolean).join(", ")
            )
        );

        if (typeof coursesData !== "undefined") {
            coursesData.forEach((c) => {
                if (c.locked) return;
                index.push({
                    type: "course",
                    label: "Course",
                    jp: `JLPT ${c.level.toUpperCase()}`,
                    reading: "",
                    meaningEn: c.description || "",
                    meaningBn: "",
                    href: `level-hub.html?level=${c.level}`
                });
            });
        }

        return index;
    }

    const searchIndex = buildIndex();

    /* ---------------- FILTER + RENDER ---------------- */

    function matches(entry, query) {
        const haystack = [entry.jp, entry.reading, entry.meaningEn, entry.meaningBn, entry.searchExtra]
            .join(" ")
            .toLowerCase();
        return haystack.includes(query);
    }

    const TYPE_ORDER = ["hiragana", "katakana", "vocabulary", "vocabulary-topic", "grammar", "kanji", "course"];
    const TYPE_ICON = {
        hiragana: "fa-a",
        katakana: "fa-a",
        vocabulary: "fa-language",
        "vocabulary-topic": "fa-layer-group",
        grammar: "fa-pen",
        kanji: "fa-torii-gate",
        course: "fa-book"
    };

    function render(query) {
        const trimmed = query.trim().toLowerCase();

        if (!trimmed) {
            resultsContainer.innerHTML = `<p class="no-results">Type a word, reading, or meaning to search Vocabulary, Grammar, Kanji, Hiragana, Katakana, and Courses.</p>`;
            if (resultsSummary) resultsSummary.textContent = "";
            return;
        }

        const found = searchIndex.filter((entry) => matches(entry, trimmed)).slice(0, 200);

        if (resultsSummary) {
            resultsSummary.textContent = `${found.length} result${found.length === 1 ? "" : "s"} for "${query}"`;
        }

        if (!found.length) {
            resultsContainer.innerHTML = `<p class="no-results">No results found. Try a different word, reading, or meaning.</p>`;
            return;
        }

        const groups = {};
        found.forEach((entry) => {
            groups[entry.type] = groups[entry.type] || [];
            groups[entry.type].push(entry);
        });

        resultsContainer.innerHTML = TYPE_ORDER
            .filter((type) => groups[type] && groups[type].length)
            .map((type) => {
                const items = groups[type];
                const cardsHtml = items
                    .map(
                        (entry) => `
                        <a class="search-result-card" href="${entry.href}">
                            <div class="search-result-jp">${entry.jp}</div>
                            ${entry.reading ? `<div class="search-result-reading">${entry.reading}</div>` : ""}
                            <div class="search-result-meaning">${entry.meaningEn}</div>
                        </a>`
                    )
                    .join("");
                return `
                    <div class="search-result-group">
                        <h2 class="search-result-group-title"><i class="fa-solid ${TYPE_ICON[type] || "fa-magnifying-glass"}"></i> ${items[0].label} <span class="search-result-count">${items.length}</span></h2>
                        <div class="search-result-grid">${cardsHtml}</div>
                    </div>`;
            })
            .join("");
    }

    if (input) {
        let debounceTimer;
        input.addEventListener("input", () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const newUrl = `${window.location.pathname}?q=${encodeURIComponent(input.value)}`;
                window.history.replaceState({}, "", newUrl);
                render(input.value);
            }, 150);
        });
    }

    render(initialQuery);

})();
