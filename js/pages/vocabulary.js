/* ==========================================
            VOCABULARY PAGE
========================================== */

/* ===============================
        RENDER LEVEL CARDS
   vocabularyData comes from
   data/vocabulary/vocabulary-data.js (now
   { chapters: [...] } per level) — flattened
   via data/content-helpers.js's flattenLevel(),
   the same normalizer the backend uses, so
   chapter/word counts here always match what's
   actually reachable in chapters.html.
================================ */

(function renderVocabularyGrid(){

    const grid = document.getElementById("vocabularyGrid");
    if(!grid || typeof vocabularyData === "undefined") return;

    const LEVELS = ["n5", "n4", "n3", "n2", "n1"];

    grid.innerHTML = LEVELS.map((level, levelIndex) => {

        const flat = flattenLevel(vocabularyData[level]);

        if(!flat.chapters.length){
            const prevLevel = LEVELS[levelIndex - 1];
            return `
<div class="vocabulary-card locked ${level}">
    <i class="fa-solid fa-lock"></i>
    <h2>JLPT ${level.toUpperCase()}</h2>
    <p>${prevLevel ? `Complete ${prevLevel.toUpperCase()} to Unlock` : "Coming soon"}</p>
</div>`;
        }

        return `
<div class="vocabulary-card ${level}">
    <h2>JLPT ${level.toUpperCase()}</h2>
    <p>${flat.items.length} Words</p>
    <p>${flat.chapters.length} Chapters</p>
    <a href="chapters.html?level=${level}&type=vocabulary">
        <button>Start Learning</button>
    </a>
</div>`;

    }).join("");

})();

/* ===============================
        SEARCH
================================ */

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".vocabulary-card");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

cards.forEach(card=>{

const text = card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

/* ===============================
        FILTER
================================ */

const filterBtns=document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelector(".filter-btn.active")
.classList.remove("active");

btn.classList.add("active");

const filter=btn.dataset.filter;

cards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

return;

}

if(card.classList.contains(filter)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});

/* Dark mode -> js/utils.js (single shared implementation) */

/* ===============================
        CARD ANIMATION
================================ */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".vocabulary-card").forEach(card=>{

observer.observe(card);

});
