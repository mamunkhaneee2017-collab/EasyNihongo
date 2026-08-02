/* ==========================================
   COURSE LEVEL DATA
   Loaded via <script> tag (not fetch()) so
   courses.html still works over file://.
   N3-N1 are intentionally locked until content
   is added for those levels.

   `progress` here is just the pre-login/pre-fetch
   default (0 — nobody has "60% done" before we know
   who's asking). js/pages/courses.js overwrites it
   with the real value from /api/dashboard for a
   logged-in visitor once that request resolves.
========================================== */

const coursesData = [
    { level: "n5", badge: "beginner", badgeLabel: "Beginner", description: "Start learning basic Japanese.", lessons: 120, hours: 40, progress: 0, action: "Start", locked: false },
    { level: "n4", badge: "elementary", badgeLabel: "Elementary", description: "Build your grammar and vocabulary.", lessons: 150, hours: 55, progress: 0, action: "Start", locked: false },
    { level: "n3", locked: true, unlockAfter: "N4" },
    { level: "n2", locked: true, unlockAfter: "N3" },
    { level: "n1", locked: true, unlockAfter: "N2" }
];

if (typeof module !== "undefined" && module.exports) { module.exports = coursesData; }
