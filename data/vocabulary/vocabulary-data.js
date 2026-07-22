/* ==========================================
   VOCABULARY LEVEL DATA
   Loaded via <script> tag (not fetch()) so
   vocabulary.html still works over file://.
   N3-N1 are intentionally locked until content
   is added for those levels.
========================================== */

const vocabularyData = [
    { level: "n5", badge: "beginner", badgeLabel: "Beginner", words: "1200 Words", chapters: "50 Chapters", hours: "40 Study Hours", progress: 65, action: "Start Learning", locked: false },
    { level: "n4", badge: "elementary", badgeLabel: "Elementary", words: "1500 Words", chapters: "55 Chapters", hours: "50 Study Hours", progress: 35, action: "Continue", locked: false },
    { level: "n3", locked: true, unlockAfter: "N4" },
    { level: "n2", locked: true, unlockAfter: "N3" },
    { level: "n1", locked: true, unlockAfter: "N2" }
];
