/* ==========================================
   LEVEL HUB PAGE (?level=n5)
   Shows Vocabulary/Grammar/Kanji/Topics cards
   for one JLPT level, each linking into the
   chapter grid (chapters.html) for that
   level+type. Chapter/word counts are computed
   live from the same data files + flattenLevel()
   the backend uses, so they're never out of
   sync with what's actually authored.
========================================== */

(function () {

    const params = new URLSearchParams(window.location.search);
    const level = (params.get("level") || "n5").toLowerCase();

    const levelBadge = document.getElementById("levelBadge");
    const levelTitle = document.getElementById("levelTitle");
    if (levelBadge) levelBadge.textContent = level.toUpperCase();
    if (levelTitle) levelTitle.textContent = `JLPT ${level.toUpperCase()}`;

    const TYPES = [
        { key: "vocabulary", label: "Vocabulary", icon: "fa-solid fa-book", data: typeof vocabularyData !== "undefined" ? vocabularyData : null },
        { key: "grammar", label: "Grammar", icon: "fa-solid fa-pen", data: typeof grammarData !== "undefined" ? grammarData : null },
        { key: "kanji", label: "Kanji", icon: "fa-solid fa-torii-gate", data: typeof kanjiData !== "undefined" ? kanjiData : null }
    ];

    const grid = document.getElementById("levelHubGrid");
    if (!grid) return;

    const cardsHtml = TYPES.map((type) => {
        const flat = type.data && type.data[level] ? flattenLevel(type.data[level]) : { chapters: [], items: [] };
        const chapterCount = flat.chapters.length;
        const itemCount = flat.items.length;

        if (chapterCount === 0) {
            return `
                <div class="level-hub-card locked">
                    <i class="${type.icon}"></i>
                    <h3>${type.label}</h3>
                    <p>Coming soon</p>
                </div>`;
        }

        return `
            <a href="chapters.html?level=${level}&type=${type.key}" class="level-hub-card">
                <i class="${type.icon}"></i>
                <h3>${type.label}</h3>
                <p>${chapterCount} chapters &middot; ${itemCount} items</p>
            </a>`;
    }).join("");

    const topicsCardHtml = `
        <a href="vocabulary-topics.html" class="level-hub-card">
            <i class="fa-solid fa-layer-group"></i>
            <h3>Browse by Topic</h3>
            <p>Everyday, Kitchen, IT, Hospital &amp; more</p>
        </a>`;

    // Hiragana/Katakana are the kana alphabet itself, not per-level content
    // (same 46 characters regardless of JLPT level) — shown only on the N5
    // hub, alongside Vocabulary/Grammar/Kanji/Topics, since that's where a
    // beginner actually needs them.
    const kanaCardsHtml = level === "n5" ? `
        <a href="hiragana.html" class="level-hub-card">
            <span class="level-hub-kana-char">あ</span>
            <span class="level-hub-kana-native">ひらがな</span>
            <h3>Hiragana</h3>
            <p>46 characters &middot; stroke order &amp; practice</p>
        </a>
        <a href="katakana.html" class="level-hub-card">
            <span class="level-hub-kana-char">ア</span>
            <span class="level-hub-kana-native">カタカナ</span>
            <h3>Katakana</h3>
            <p>46 characters &middot; stroke order &amp; practice</p>
        </a>` : "";

    grid.innerHTML = cardsHtml + kanaCardsHtml + topicsCardHtml;

})();
