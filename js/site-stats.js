/* ==========================================
   REAL SITE STATS
   Fills every element marked data-stat="key"
   with a real number and counts it up.
   Nested keys work: data-stat="perLevel.n5.lessons".

   1. Immediately: content counts (lessons, kanji,
      grammar, vocabulary, quiz questions...) from
      data/site-stats.js — generated from the actual
      content files, so they show even without the
      server (Live Server, file://, cold start).
      People counts (students, quizzes taken, study
      hours) start at 0 — never a made-up number.
   2. Then GET /api/stats (backend/routes/stats.js)
      updates everything with the live values.
========================================== */

(function () {

    if (!document.querySelector("[data-stat]")) return;

    const API = "/api/stats";
    const shown = new WeakMap(); // element → number currently displayed

    function read(obj, path) {
        return path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
    }

    function countUp(el, target) {
        const from = shown.has(el) ? shown.get(el) : 0;
        shown.set(el, target);
        if (from === target) { el.textContent = target.toLocaleString(); return; }

        const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) { el.textContent = target.toLocaleString(); return; }

        const duration = 900;
        const start = performance.now();
        const step = (now) => {
            if (shown.get(el) !== target) return; // a newer value took over
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(from + (target - from) * eased).toLocaleString();
            if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    function apply(stats) {
        document.querySelectorAll("[data-stat]").forEach((el) => {
            const value = read(stats, el.dataset.stat);
            if (typeof value === "number") countUp(el, value);
        });
    }

    // Step 1 — baked-in real content counts; live people counts default to 0.
    apply(Object.assign(
        { students: 0, quizzesTaken: 0, studyHours: 0, totalVisits: 0 },
        window.SITE_CONTENT_STATS || {}
    ));

    // Step 2 — live values from the server, when reachable.
    fetch(API, { headers: { Accept: "application/json" } })
        .then((res) => (res.ok ? res.json() : null))
        .then((stats) => { if (stats) apply(stats); })
        .catch(() => { /* keep step 1's numbers */ });

})();
