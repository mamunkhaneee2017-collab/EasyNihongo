/*==================================
        LESSON PROGRESS
==================================*/

const progress =
document.querySelector(".progress-fill");

window.addEventListener("load",()=>{

progress.style.width="20%";

});

/*==========================
    SEARCH + CATEGORY FILTER
    (Basic / Dakuten / Handakuten / Yōon —
    see data/kana-rows.js for the index ranges
    these thresholds mirror)
==========================*/

const search =
document.getElementById("searchCharacter");

let currentCategory = "all";

function categoryForIndex(index){
    if(index <= 45) return "base";
    if(index <= 65) return "dakuten";
    if(index <= 70) return "handakuten";
    return "youon";
}

function applyFilters(){

const value = search.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

const matchesSearch = card.innerText.toLowerCase().includes(value);
const matchesCategory = currentCategory === "all" || card.dataset.category === currentCategory;

card.style.display = (matchesSearch && matchesCategory) ? "block" : "none";

});

}

search.addEventListener("keyup", applyFilters);

const categoryTabs = document.getElementById("kanaCategoryTabs");
if(categoryTabs){
    categoryTabs.querySelectorAll(".kana-category-tab").forEach(tab=>{
        tab.addEventListener("click", () => {
            categoryTabs.querySelector(".kana-category-tab.active")?.classList.remove("active");
            tab.classList.add("active");
            currentCategory = tab.dataset.category;
            applyFilters();
        });
    });
}
/*===============================
        RENDER CHARACTERS
   hiraganaData comes from data/hiragana-data.js
   (loaded as a <script> tag before this file).
   This works even when the page is opened
   directly via file://, unlike fetch(), which
   browsers block for local files.
================================*/

(function renderHiragana(){

const grid=document.getElementById("hiraganaGrid");
if(!grid || typeof hiraganaData==="undefined") return;

grid.innerHTML="";

hiraganaData.forEach((item, index)=>{

grid.innerHTML += `

<div class="card" data-category="${categoryForIndex(index)}" data-href="character.html?type=hiragana&char=${encodeURIComponent(item.character)}">

    <button class="favorite" data-index="${index}" title="Favorite">

        <i class="fa-regular fa-star"></i>

    </button>

    <h2>${item.character}</h2>

    <h3>${item.romaji}</h3>

    <button
        class="play-btn"
        data-speak="${item.character}"
        title="Listen">

        <i class="fa-solid fa-volume-high"></i>

    </button>

</div>

`;

});

initializeButtons();
loadFavorites();

})();

function initializeButtons(){

// Whole card is clickable -> the character's detail page (stroke order,
// audio, practice writing). The favorite/play buttons inside it stop
// propagation so clicking them doesn't also navigate.
document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

window.location.href = card.dataset.href;

});

});

const playButtons=
document.querySelectorAll(".play-btn");

const speechSupported = window.EasyNihongoSpeech && window.EasyNihongoSpeech.isSupported();

playButtons.forEach(button=>{

if(!speechSupported){
    button.disabled = true;
    button.title = "Audio not supported in this browser";
    return;
}

button.addEventListener("click",(e)=>{

e.stopPropagation();

window.EasyNihongoSpeech.speak(button.dataset.speak);

});

});

const favorites=

document.querySelectorAll(".favorite");

favorites.forEach(button=>{

button.addEventListener("click",(e)=>{

e.stopPropagation();

const itemIndex = button.dataset.index;

fetch("/api/progress/favorite", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify({ contentType: "hiragana", itemIndex })
})
    .then(async (res) => {
        if (!res.ok) throw new Error("not logged in");
        const data = await res.json();
        button.classList.toggle("active", data.favorited);
    })
    .catch(() => {
        button.classList.toggle("active");
        button.title = "Log in to save favorites across visits";
    });

});

});

}

/*==========================
    LOAD SAVED FAVORITES
    (only marks stars for logged-in users;
    anonymous visitors just get the local-only
    toggle above)
==========================*/

function loadFavorites(){

    fetch("/api/progress/favorites?contentType=hiragana", { credentials: "same-origin" })
        .then((res) => {
            if (!res.ok) throw new Error("not logged in");
            return res.json();
        })
        .then((data) => {
            data.itemIndexes.forEach((index) => {
                const button = document.querySelector(`.favorite[data-index="${index}"]`);
                if (button) button.classList.add("active");
            });
        })
        .catch(() => {});

}