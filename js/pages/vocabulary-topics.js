/* ==========================================
   VOCABULARY TOPICS GRID
   Browse-only, no progress tracking (v1 scope).
   vocabularyTopicsData comes from
   data/vocabulary/vocabulary-topics-data.js.
========================================== */

(function () {

    const grid = document.getElementById("topicsGrid");
    if (!grid || typeof vocabularyTopicsData === "undefined") return;

    grid.innerHTML = vocabularyTopicsData
        .map(
            (topic) => `
        <a href="vocabulary-topic.html?topic=${topic.id}" class="topic-card">
            <i class="${topic.icon}"></i>
            <h3>${topic.title}</h3>
            <p>${topic.items.length} words</p>
        </a>`
        )
        .join("");

})();
