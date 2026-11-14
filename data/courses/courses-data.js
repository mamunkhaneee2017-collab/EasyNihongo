/* ==========================================
   COURSE LEVEL DATA
   Loaded via <script> tag (not fetch()) so
   courses.html still works over file://.

   `progress` here is just the pre-login/pre-fetch
   default (0 — nobody has "60% done" before we know
   who's asking). js/pages/courses.js overwrites it
   with the real value from /api/dashboard for a
   logged-in visitor once that request resolves.

   The lesson count on each card is the real number of
   kanji + grammar + vocabulary chapters for that level,
   filled in live by js/site-stats.js from /api/stats.
   `hours` is a study-time estimate scaled off each
   level's actual item count, not a marketing number.
========================================== */

const coursesData = [
    { level: "n5", badge: "beginner", badgeLabel: "Beginner", description: "Start learning basic Japanese.", hours: 40, progress: 0, action: "Start", locked: false },
    { level: "n4", badge: "elementary", badgeLabel: "Elementary", description: "Build your grammar and vocabulary.", hours: 55, progress: 0, action: "Start", locked: false },
    { level: "n3", badge: "intermediate", badgeLabel: "Intermediate", description: "Expand into intermediate vocabulary, grammar, and kanji.", hours: 20, progress: 0, action: "Start", locked: false },
    { level: "n2", badge: "upper-intermediate", badgeLabel: "Upper-Intermediate", description: "Build toward advanced fluency with vocabulary, grammar, and kanji.", hours: 30, progress: 0, action: "Start", locked: false },
    { level: "n1", badge: "advanced", badgeLabel: "Advanced", description: "Master native-level vocabulary, grammar, and kanji.", hours: 44, progress: 0, action: "Start", locked: false }
];

if (typeof module !== "undefined" && module.exports) { module.exports = coursesData; }
