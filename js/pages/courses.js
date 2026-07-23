/* ==========================================
            COURSES PAGE
   Dark mode, mobile menu, language switcher,
   counters, back-to-top, scroll reveal and
   button ripple -> js/utils.js
   This file only handles what's unique to
   the courses page.
========================================== */


// ==========================================
// RENDER COURSE GRID
// coursesData comes from data/courses-data.js
// (loaded as a <script> tag before this file).
// ==========================================

(function renderCoursesGrid(){

    const grid = document.getElementById("coursesGrid");
    if(!grid || typeof coursesData === "undefined") return;

    let html = "";

    coursesData.forEach((c, i) => {

        if(c.locked){
            html += `
    <div class="course-card locked ${c.level} reveal" data-anim="fade-up" data-delay="${i * 80}">
        <i class="fa-solid fa-lock lock"></i>
        <h2>JLPT ${c.level.toUpperCase()}</h2>
        <p>Complete ${c.unlockAfter} to Unlock</p>
    </div>`;
            return;
        }

        html += `
    <div class="course-card ${c.level} reveal" data-anim="fade-up" data-delay="${i * 80}">
        <div class="course-top">
            <h2>JLPT ${c.level.toUpperCase()}</h2>
            <span class="badge ${c.badge}">${c.badgeLabel}</span>
        </div>

        <p>${c.description}</p>

        <div class="info">
            <span><i class="fa-solid fa-book"></i> ${c.lessons} Lessons</span>
            <span><i class="fa-regular fa-clock"></i> ${c.hours} Hours</span>
        </div>

        <div class="progress">
            <div class="progress-fill progress-${c.level}" data-progress="${c.progress}"></div>
        </div>
        <span class="progress-label"><span class="counter" data-target="${c.progress}">0</span>% complete</span>

        <a href="level-hub.html?level=${c.level}" class="card-btn">
            <button class="btn-ripple">${c.action}</button>
        </a>
    </div>`;

    });

    grid.insertAdjacentHTML("afterbegin", html);

})();


// ==========================================
// PROGRESS BAR ANIMATION (fills on scroll into view)
// Note: number counters (.counter / data-target)
// are already animated by main.js
// ==========================================

(function initProgressBars(){

    const bars = document.querySelectorAll(".progress-fill, .continue-bar-fill");
    if(!bars.length) return;

    const fill = (el) => {

        const value = el.dataset.progress || "0";
        requestAnimationFrame(() => {
            el.style.width = `${value}%`;
        });

    };

    if(!("IntersectionObserver" in window)){

        bars.forEach(fill);
        return;

    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                fill(entry.target);
                observer.unobserve(entry.target);

            }

        });

    }, { threshold: 0.3 });

    bars.forEach(el => observer.observe(el));

})();


// ==========================================
// COURSE FILTER
// ==========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const courseCards = document.querySelectorAll(".course-card");
const noResults = document.getElementById("noResults");

function updateNoResults(){

    if(!noResults) return;

    const visible = Array.from(courseCards).some(card => card.style.display !== "none");
    noResults.classList.toggle("show", !visible);

}

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        courseCards.forEach(card => {

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
// COURSE SEARCH
// ==========================================

const searchInput = document.getElementById("courseSearch");
const searchCount = document.getElementById("searchCount");

if(searchInput){

    let debounceTimer;

    searchInput.addEventListener("keyup", () => {

        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {

            const searchValue = searchInput.value.toLowerCase().trim();
            let matches = 0;

            // Reset filter buttons to "all" context while searching
            if(searchValue && filterButtons.length){
                filterButtons.forEach(btn => btn.classList.remove("active"));
                document.querySelector('.filter-btn[data-filter="all"]')?.classList.add("active");
            }

            courseCards.forEach(card => {

                const courseName = card.querySelector("h2")?.textContent.toLowerCase() || "";

                if(courseName.includes(searchValue)){
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


// ==========================================
// COURSE MATERIALS
// Published from the admin panel's Courses &
// Files view (GET /api/materials — public,
// published files only).
// ==========================================

(function loadCourseMaterials(){

    const grid = document.getElementById("materialsGrid");
    if(!grid) return;

    const TYPE_ICON = {
        pdf: "fa-file-pdf",
        doc: "fa-file-word",
        ppt: "fa-file-powerpoint",
        txt: "fa-file-lines",
        audio: "fa-file-audio",
        video: "fa-file-video"
    };

    function mimeToType(mime){
        if(mime === "application/pdf") return "pdf";
        if(mime === "application/msword" || mime.includes("wordprocessingml")) return "doc";
        if(mime === "application/vnd.ms-powerpoint" || mime.includes("presentationml")) return "ppt";
        if(mime === "text/plain") return "txt";
        if(mime.startsWith("audio/")) return "audio";
        if(mime.startsWith("video/")) return "video";
        return "txt";
    }

    function formatSize(bytes){
        if(bytes < 1024) return bytes + " B";
        if(bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
        return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    }

    fetch("/api/materials")
        .then(res => res.json())
        .then(data => {

            if(!data.materials.length) return;

            grid.innerHTML = data.materials.map(m => {
                const type = mimeToType(m.mime_type);
                const icon = TYPE_ICON[type] || "fa-file";

                return `
    <a class="material-card" href="/api/materials/${m.id}/download" download>
        <div class="material-icon"><i class="fa-solid ${icon}"></i></div>
        <div class="material-info">
            <h3>${m.original_name}</h3>
            <p>JLPT ${m.level} &middot; ${m.category} &middot; ${formatSize(m.size_bytes)}</p>
        </div>
        <i class="fa-solid fa-download material-download"></i>
    </a>`;

            }).join("");

        })
        .catch(() => {});

})();
