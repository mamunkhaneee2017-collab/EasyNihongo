/* ==========================================
   HANDWRITING ACCURACY SCORING
   Pure client-side geometric stroke-matching —
   no ML model. A user-drawn stroke (array of
   {x,y} points captured from pointer events) is
   resampled to N evenly-spaced points and compared
   against the SAME canonical SVG stroke path data
   used by the stroke-order animation
   (data/kana-strokes-data.js), via average
   positional distance after normalizing both into
   the shared 0-100 coordinate space that data uses.

   Exposes window.EasyNihongoHandwriting.scoreCharacter().
========================================== */

(function () {

    const SVG_NS = "http://www.w3.org/2000/svg";
    const SAMPLE_POINTS = 24;

    // Evenly resample an arbitrary polyline (array of {x,y}) to exactly n points.
    function resamplePoints(points, n) {
        if (!points.length) return new Array(n).fill({ x: 0, y: 0 });
        if (points.length === 1) return new Array(n).fill(points[0]);

        const dists = [0];
        for (let i = 1; i < points.length; i++) {
            dists.push(dists[i - 1] + Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y));
        }
        const total = dists[dists.length - 1] || 1;

        const result = [];
        for (let k = 0; k < n; k++) {
            const target = (k / (n - 1)) * total;
            let idx = dists.findIndex((d) => d >= target);
            if (idx <= 0) { result.push(points[0]); continue; }
            const d0 = dists[idx - 1];
            const d1 = dists[idx];
            const t = d1 === d0 ? 0 : (target - d0) / (d1 - d0);
            const p0 = points[idx - 1];
            const p1 = points[idx];
            result.push({ x: p0.x + (p1.x - p0.x) * t, y: p0.y + (p1.y - p0.y) * t });
        }
        return result;
    }

    // Sample an SVG path `d` string into n evenly-spaced points along its
    // length, using a temporary offscreen <path> — getPointAtLength() is a
    // standard browser API, no parsing library needed.
    function samplePathD(d, n) {
        const svg = document.createElementNS(SVG_NS, "svg");
        const path = document.createElementNS(SVG_NS, "path");
        path.setAttribute("d", d);
        svg.appendChild(path);
        svg.style.position = "absolute";
        svg.style.width = "0";
        svg.style.height = "0";
        svg.style.overflow = "hidden";
        document.body.appendChild(svg);

        const length = path.getTotalLength();
        const points = [];
        for (let k = 0; k < n; k++) {
            const pt = path.getPointAtLength((k / (n - 1)) * length);
            points.push({ x: pt.x, y: pt.y });
        }

        document.body.removeChild(svg);
        return points;
    }

    function scoreStrokeShape(userPoints, canonicalPoints) {
        let totalDist = 0;
        for (let i = 0; i < userPoints.length; i++) {
            totalDist += Math.hypot(userPoints[i].x - canonicalPoints[i].x, userPoints[i].y - canonicalPoints[i].y);
        }
        const avgDist = totalDist / userPoints.length;
        // Coordinates are in the 0-100 stroke viewBox space — an average
        // deviation of ~30 units is treated as "essentially unrecognizable",
        // 0 as perfect. Linear falloff in between is simple and predictable.
        const maxTolerable = 30;
        return Math.max(0, Math.round(100 - (avgDist / maxTolerable) * 100));
    }

    /**
     * @param userStrokes  array of strokes, each an array of {x,y} points in
     *                     CANVAS PIXEL coordinates (as captured from pointer events)
     * @param canonicalDs  array of SVG path `d` strings (kanaStrokesData[char].strokes)
     * @param canvasSize   { width, height } of the practice canvas in pixels
     */
    function scoreCharacter(userStrokes, canonicalDs, canvasSize) {
        if (!userStrokes.length || !canonicalDs.length) {
            return { overall: 0, strokeScores: [], strokeCountMatch: false };
        }

        // Map canvas-pixel points into the same 0-100 space the stroke data
        // already uses, so distances are comparable regardless of the
        // practice canvas's actual pixel size.
        const scaleX = 100 / canvasSize.width;
        const scaleY = 100 / canvasSize.height;
        const userNormalized = userStrokes.map((stroke) => stroke.map((p) => ({ x: p.x * scaleX, y: p.y * scaleY })));

        const canonicalSampled = canonicalDs.map((d) => samplePathD(d, SAMPLE_POINTS));

        const pairCount = Math.min(userNormalized.length, canonicalSampled.length);
        const strokeScores = [];
        for (let i = 0; i < pairCount; i++) {
            const userSampled = resamplePoints(userNormalized[i], SAMPLE_POINTS);
            strokeScores.push(scoreStrokeShape(userSampled, canonicalSampled[i]));
        }

        // Extra or missing strokes compared to the canonical count are a
        // real mistake (wrong stroke count) — penalize rather than ignore.
        const countPenalty = Math.abs(userNormalized.length - canonicalDs.length) * 12;
        const rawAvg = strokeScores.length ? strokeScores.reduce((a, b) => a + b, 0) / strokeScores.length : 0;
        const overall = Math.max(0, Math.min(100, Math.round(rawAvg - countPenalty)));

        return {
            overall,
            strokeScores,
            strokeCountMatch: userNormalized.length === canonicalDs.length
        };
    }

    window.EasyNihongoHandwriting = { scoreCharacter };

})();
