/* ==========================================
            KANJI PAGE
   Dark mode, mobile menu, language switcher,
   scroll reveal, ripple, counters, back-to-top
   -> js/utils.js
   This file only handles what's unique to
   the kanji page.
========================================== */



// ==========================================
// RENDER LEVEL CARDS
// kanjiData comes from data/kanji/kanji-data.js
// (now { chapters: [...] } per level) — flattened
// via data/content-helpers.js's flattenLevel(),
// the same normalizer the backend uses. Each
// card links into chapters.html for that level.
// ==========================================

(function renderKanjiGrid(){

    const grid = document.getElementById("kanjiGrid");
    if(!grid || typeof kanjiData === "undefined") return;

    const LEVELS = ["n5", "n4", "n3", "n2", "n1"];

    grid.innerHTML = LEVELS.map((level, levelIndex) => {

        const flat = flattenLevel(kanjiData[level]);

        if(!flat.chapters.length){
            const prevLevel = LEVELS[levelIndex - 1];
            return `
    <div class="level-hub-card locked ${level}">
        <i class="fa-solid fa-lock"></i>
        <h3>JLPT ${level.toUpperCase()}</h3>
        <p>${prevLevel ? `Complete ${prevLevel.toUpperCase()} to Unlock` : "Coming soon"}</p>
    </div>`;
        }

        return `
    <a href="chapters.html?level=${level}&type=kanji" class="level-hub-card ${level}">
        <i class="fa-solid fa-torii-gate"></i>
        <h3>JLPT ${level.toUpperCase()}</h3>
        <p>${flat.chapters.length} chapters &middot; ${flat.items.length} kanji</p>
    </a>`;

    }).join("");

})();


// ==========================================
// SEARCH (filters the level cards by text)
// ==========================================

const searchInput = document.getElementById("kanjiSearch");
const searchCount = document.getElementById("searchCount");

if(searchInput){

    let debounceTimer;

    searchInput.addEventListener("keyup", () => {

        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {

            const searchValue = searchInput.value.toLowerCase().trim();
            const cards = document.querySelectorAll("#kanjiGrid .level-hub-card");
            let matches = 0;

            cards.forEach(card => {
                const text = card.innerText.toLowerCase();
                if(!searchValue || text.includes(searchValue)){
                    card.style.display = "";
                    matches++;
                } else {
                    card.style.display = "none";
                }
            });

            if(searchCount){
                searchCount.textContent = searchValue ? `${matches} found` : "";
            }

        }, 200);

    });

}
