/* ==========================================
   SHARED CONTENT HELPERS
   Both backend/lib/contentData.js (Node) and
   the frontend chapter pages (browser) call
   flattenLevel() on the SAME raw {chapters:[]}
   data so the flat, global item_index used by
   progress_items (mark-as-learned) can never
   drift between server and client — it's
   computed in exactly one place.
========================================== */

function flattenLevel(levelObj) {
    if (!levelObj || !Array.isArray(levelObj.chapters)) {
        return { chapters: [], items: [] };
    }

    const items = [];
    const chapters = levelObj.chapters.map((chapter) => {
        const startIndex = items.length;
        (chapter.items || []).forEach((item) => items.push(item));
        return {
            id: chapter.id,
            title: chapter.title,
            startIndex,
            endIndex: items.length - 1,
            itemCount: (chapter.items || []).length
        };
    });

    return { chapters, items };
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { flattenLevel };
}
