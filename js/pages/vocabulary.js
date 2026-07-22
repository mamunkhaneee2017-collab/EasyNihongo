/* ==========================================
            VOCABULARY PAGE
========================================== */

/* ===============================
        RENDER LEVEL CARDS
   vocabularyData comes from data/vocabulary-data.js
   (loaded as a <script> tag before this file).
================================ */

(function renderVocabularyGrid(){

    const grid = document.getElementById("vocabularyGrid");
    if(!grid || typeof vocabularyData === "undefined") return;

    grid.innerHTML = vocabularyData.map(level => {

        if(level.locked){
            return `
<div class="vocabulary-card locked ${level.level}">
    <i class="fa-solid fa-lock"></i>
    <h2>JLPT ${level.level.toUpperCase()}</h2>
    <p>Complete ${level.unlockAfter} to Unlock</p>
</div>`;
        }

        return `
<div class="vocabulary-card ${level.level}">
    <h2>JLPT ${level.level.toUpperCase()}</h2>
    <span class="badge ${level.badge}">${level.badgeLabel}</span>
    <p>${level.words}</p>
    <p>${level.chapters}</p>
    <p>${level.hours}</p>
    <div class="progress">
        <div class="progress-fill" style="width:${level.progress}%"></div>
    </div>
    <a href="lesson.html">
        <button>${level.action}</button>
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