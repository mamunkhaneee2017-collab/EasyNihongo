/* ==========================================
            KANJI PAGE
   Dark mode, mobile menu, language switcher,
   scroll reveal, ripple, counters, back-to-top
   -> js/utils.js
   This file only handles what's unique to
   the kanji page.
========================================== */



// ==========================================
// RENDER KANJI GRID
// kanjiData comes from data/kanji-data.js
// (loaded as a <script> tag before this file).
// ==========================================

(function renderKanjiGrid(){

    const grid = document.getElementById("kanjiGrid");
    if(!grid || typeof kanjiData === "undefined") return;

    const LEVELS = ["n5", "n4", "n3", "n2", "n1"];
    let html = "";

    LEVELS.forEach((level, levelIndex) => {

        const entries = kanjiData[level] || [];

        if(entries.length){

            entries.forEach((k, i) => {
                html += `
    <div class="kanji-card ${level} reveal" data-anim="scale" data-delay="${i * 40}">
        <div class="kanji-top">
            <span class="kanji-char">${k.char}</span>
            <span class="badge badge-${level}">${level.toUpperCase()}</span>
        </div>
        <div class="kanji-readings">
            <span><strong>On:</strong> ${k.on}</span>
            <span><strong>Kun:</strong> ${k.kun}</span>
        </div>
        <p class="kanji-meaning">${k.meaning}</p>
        <div class="kanji-info"><i class="fa-solid fa-pen-nib"></i> ${k.strokes} strokes</div>
    </div>`;
            });

        } else {

            const prevLevel = LEVELS[levelIndex - 1];
            html += `
    <div class="kanji-card locked ${level} reveal" data-anim="fade-up" data-delay="${levelIndex * 80}">
        <i class="fa-solid fa-lock lock"></i>
        <h2>JLPT ${level.toUpperCase()}</h2>
        <p>${prevLevel ? `Complete ${prevLevel.toUpperCase()} to Unlock` : "Coming soon"}</p>
    </div>`;

        }

    });

    grid.insertAdjacentHTML("afterbegin", html);

})();


// ==========================================
// FILTER
// ==========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const kanjiCards = document.querySelectorAll(".kanji-card");
const noResults = document.getElementById("noResults");

function updateNoResults(){

    if(!noResults) return;

    const visible = Array.from(kanjiCards).some(card => card.style.display !== "none");
    noResults.classList.toggle("show", !visible);

}

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        kanjiCards.forEach(card => {

            if(filter === "all" || card.classList.contains(filter)){
                card.style.display = "flex";
            }
            else{
                card.style.display = "none";
            }

        });

        updateNoResults();

    });

});


// ==========================================
// SEARCH (matches the Kanji character or its meaning)
// ==========================================

const searchInput = document.getElementById("kanjiSearch");
const searchCount = document.getElementById("searchCount");

if(searchInput){

    let debounceTimer;

    searchInput.addEventListener("keyup", () => {

        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {

            const searchValue = searchInput.value.toLowerCase().trim();
            let matches = 0;

            if(searchValue && filterButtons.length){
                filterButtons.forEach(btn => btn.classList.remove("active"));
                document.querySelector('.filter-btn[data-filter="all"]')?.classList.add("active");
            }

            kanjiCards.forEach(card => {

                const char = card.querySelector(".kanji-char")?.textContent.toLowerCase() || "";
                const meaning = card.querySelector(".kanji-meaning")?.textContent.toLowerCase() || "";

                if(char.includes(searchValue) || meaning.includes(searchValue)){
                    card.style.display = "flex";
                    matches++;
                }
                else{
                    card.style.display = "none";
                }

            });

            if(searchCount){
                searchCount.textContent = searchValue ? `${matches} found` : "";
            }

            updateNoResults();

        }, 200);

    });

}
