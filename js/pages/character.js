/* ==========================================
   CHARACTER DETAIL PAGE (?type=hiragana&char=あ,
   or ?type=kanji&level=n5&char=一)
   Stroke-order animation, audio (Web Speech API),
   example words/sentence, practice-writing canvas
   with handwriting-accuracy scoring, favorite sync,
   and per-character learning-progress tracking —
   one consolidated page for Hiragana, Katakana AND
   Kanji (same pattern as chapter.js's single page
   for vocabulary/grammar/kanji).

   Kana stroke data is inlined via <script> (only
   208 characters total — data/kana-strokes-data.js)
   and resolved synchronously. Kanji stroke data is
   one JSON file per character, fetched on demand via
   js/kanji-strokes.js since there can be thousands —
   so stroke-dependent setup (animation, ghost guide,
   practice canvas) runs inside initStrokeFeatures(),
   called either immediately (kana) or after an
   awaited fetch (kanji), while everything else on the
   page (display, audio, favorite) doesn't need to wait.
========================================== */

(async function () {

    const params = new URLSearchParams(window.location.search);
    const typeParam = (params.get("type") || "hiragana").toLowerCase();
    const type = ["hiragana", "katakana", "kanji"].includes(typeParam) ? typeParam : "hiragana";
    const level = (params.get("level") || "n5").toLowerCase();
    const chapterParam = params.get("chapter");
    const requestedChar = params.get("char") || "";

    // Kana items key their character under `.character`, kanji items under
    // `.char` — one accessor so the rest of the file doesn't need to branch
    // on `type` for every field lookup.
    function charOf(x) { return x.character || x.char; }

    let list;
    if (type === "kanji") {
        const levelData = typeof kanjiData !== "undefined" ? kanjiData[level] : null;
        list = typeof flattenLevel === "function" ? flattenLevel(levelData).items : [];
    } else {
        list = type === "hiragana"
            ? (typeof hiraganaData !== "undefined" ? hiraganaData : [])
            : (typeof katakanaData !== "undefined" ? katakanaData : []);
    }

    let index = list.findIndex((x) => charOf(x) === requestedChar);
    if (index === -1) index = 0;
    const item = list[index];

    const strokesData = typeof kanaStrokesData !== "undefined" ? kanaStrokesData : {};
    const detailData = typeof kanaDetailData !== "undefined" ? kanaDetailData : {};

    const backLink = document.getElementById("backToListLink");
    const backLabel = document.getElementById("backToListLabel");
    if (backLink) {
        backLink.href = type === "kanji"
            ? (chapterParam
                ? `chapter.html?level=${level}&type=kanji&chapter=${chapterParam}`
                : `chapters.html?level=${level}&type=kanji`)
            : `${type}.html`;
    }
    if (backLabel) {
        backLabel.textContent = type === "kanji" ? "Back to Kanji" : `Back to ${type === "hiragana" ? "Hiragana" : "Katakana"}`;
    }
    document.title = item
        ? (type === "kanji" ? `${charOf(item)} | Easy Nihongo` : `${item.character} (${item.romaji}) | Easy Nihongo`)
        : "Character | Easy Nihongo";

    if (!item) {
        const mainContent = document.getElementById("main-content");
        if (mainContent) mainContent.innerHTML = `<p class="no-results" style="padding:80px 20px;text-align:center;">Character not found.</p>`;
        return;
    }

    // Kanji items already carry examples/exampleSentence directly (same
    // shape as data/kana-detail-data.js entries) — no separate detail
    // lookup needed for them.
    const detail = type === "kanji" ? item : (detailData[charOf(item)] || null);

    /* ---------------- CHARACTER DISPLAY ---------------- */

    document.getElementById("characterBig").textContent = charOf(item);

    const romajiEl = document.getElementById("characterRomaji");
    if (romajiEl) {
        if (type === "kanji") {
            const readingParts = [];
            if (item.on) readingParts.push(`On: ${item.on}`);
            if (item.kun) readingParts.push(`Kun: ${item.kun}`);
            romajiEl.textContent = readingParts.join(" ・ ");
            romajiEl.classList.add("readings");
        } else {
            romajiEl.textContent = item.romaji;
        }
    }
    document.getElementById("characterBn").textContent =
        type === "kanji" ? ((item.meanings && item.meanings.bn) || "") : (detail ? detail.nameBn : "");

    const posLabel = document.getElementById("charPositionLabel");
    if (posLabel) posLabel.textContent = `${index + 1} / ${list.length}`;

    const prevBtn = document.getElementById("prevCharBtn");
    const nextBtn = document.getElementById("nextCharBtn");

    function goToIndex(newIndex) {
        if (newIndex < 0 || newIndex >= list.length) return;
        const target = encodeURIComponent(charOf(list[newIndex]));
        const qs = type === "kanji"
            ? `type=kanji&level=${level}&char=${target}${chapterParam ? `&chapter=${chapterParam}` : ""}`
            : `type=${type}&char=${target}`;
        window.location.href = `character.html?${qs}`;
    }

    if (prevBtn) {
        prevBtn.disabled = index === 0;
        prevBtn.addEventListener("click", () => goToIndex(index - 1));
    }
    if (nextBtn) {
        nextBtn.disabled = index === list.length - 1;
        nextBtn.addEventListener("click", () => goToIndex(index + 1));
    }

    /* ---------------- AUDIO (Web Speech API) ---------------- */

    const speechSupported = window.EasyNihongoSpeech && window.EasyNihongoSpeech.isSupported();
    const playNormalBtn = document.getElementById("playNormalBtn");
    const playSlowBtn = document.getElementById("playSlowBtn");

    [playNormalBtn, playSlowBtn].forEach((btn) => {
        if (!btn) return;
        if (!speechSupported) {
            btn.disabled = true;
            btn.title = "Audio not supported in this browser";
        }
    });

    if (playNormalBtn && speechSupported) {
        playNormalBtn.addEventListener("click", () => window.EasyNihongoSpeech.speak(charOf(item)));
    }
    if (playSlowBtn && speechSupported) {
        playSlowBtn.addEventListener("click", () => window.EasyNihongoSpeech.speakSlow(charOf(item)));
    }

    function wireAudioBtn(btn, text) {
        if (!btn) return;
        if (!speechSupported) { btn.disabled = true; btn.title = "Audio not supported in this browser"; return; }
        btn.addEventListener("click", () => window.EasyNihongoSpeech.speak(text));
    }

    /* ---------------- FAVORITE (STAR) ---------------- */

    const favoriteBtn = document.getElementById("favoriteBtn");
    if (favoriteBtn) {
        favoriteBtn.addEventListener("click", () => {
            const body = { contentType: type, itemIndex: index };
            if (type === "kanji") body.level = level;

            fetch("/api/progress/favorite", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify(body)
            })
                .then(async (res) => {
                    if (!res.ok) throw new Error("not logged in");
                    const data = await res.json();
                    favoriteBtn.classList.toggle("active", data.favorited);
                })
                .catch(() => {
                    alert("Log in to save your favorite characters.");
                });
        });

        const favoritesQuery = type === "kanji" ? `contentType=kanji&level=${level}` : `contentType=${type}`;
        fetch(`/api/progress/favorites?${favoritesQuery}`, { credentials: "same-origin" })
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => {
                if (data && data.itemIndexes.includes(index)) favoriteBtn.classList.add("active");
            })
            .catch(() => {});
    }

    /* ---------------- LEARNING PROGRESS BADGE (hiragana/katakana only) ----------------
       character_progress has no `level` column and is CHECK-constrained to
       hiragana/katakana — kanji item_index repeats per level, so it can't
       safely reuse this table. Kanji instead marks itself learned via the
       existing /api/progress/complete endpoint on a good practice score —
       see the PRACTICE WRITING section below. */

    const STATUS_LABELS = {
        "not-started": "Not Started",
        learning: "Learning",
        practicing: "Practicing",
        completed: "Completed",
        mastered: "Mastered"
    };

    const progressBadge = document.getElementById("progressBadge");

    function setProgressBadge(status) {
        if (!progressBadge) return;
        progressBadge.textContent = STATUS_LABELS[status] || STATUS_LABELS["not-started"];
        progressBadge.className = "char-progress-badge" + (status !== "not-started" ? ` status-${status}` : "");
    }

    let kanjiAlreadyCompleted = false;

    if (type === "kanji") {
        if (progressBadge) progressBadge.hidden = true;

        fetch(`/api/progress/completed?contentType=kanji&level=${level}`, { credentials: "same-origin" })
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => {
                if (data && data.itemIndexes.includes(index)) kanjiAlreadyCompleted = true;
            })
            .catch(() => {});
    } else {
        setProgressBadge("not-started");

        fetch(`/api/progress/character-status?contentType=${type}`, { credentials: "same-origin" })
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => {
                if (!data) return;
                const mine = data.statuses.find((s) => s.itemIndex === index);
                if (mine) {
                    setProgressBadge(mine.status);
                } else {
                    // First time viewing this character while logged in — mark it "learning".
                    fetch("/api/progress/character-status", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        credentials: "same-origin",
                        body: JSON.stringify({ contentType: type, itemIndex: index, status: "learning" })
                    })
                        .then((res) => (res.ok ? res.json() : null))
                        .then((res) => { if (res) setProgressBadge(res.status); })
                        .catch(() => {});
                }
            })
            .catch(() => {});
    }

    /* ---------------- STROKE ORDER ANIMATION + EXAMPLES + PRACTICE ---------------- */

    const svg = document.getElementById("strokeSvg");
    const strokeNumberBadge = document.getElementById("strokeNumberBadge");

    let strokeInfo;
    if (type === "kanji") {
        if (strokeNumberBadge) strokeNumberBadge.textContent = "…";
        strokeInfo = await window.EasyNihongoKanjiStrokes.fetchStrokes(charOf(item));
    } else {
        strokeInfo = strokesData[charOf(item)] || null;
    }

    initStrokeFeatures(strokeInfo);

    function initStrokeFeatures(strokeInfo) {

        const playBtn = document.getElementById("strokePlayBtn");
        const pauseBtn = document.getElementById("strokePauseBtn");
        const replayBtn = document.getElementById("strokeReplayBtn");
        const prevStepBtn = document.getElementById("strokePrevStepBtn");
        const nextStepBtn = document.getElementById("strokeNextStepBtn");
        const speedSelect = document.getElementById("strokeSpeedSelect");
        const autoPlayToggle = document.getElementById("autoPlayToggle");

        const strokeDs = strokeInfo ? strokeInfo.strokes : [];
        const pathEls = [];
        const BASE_DURATION_MS = 650;

        const strokeState = { revealed: 0, playing: false, pausedOffset: null };

        function startPointOf(d) {
            const match = /M\s*([\-\d.]+)[ ,]+([\-\d.]+)/.exec(d);
            return match ? { x: parseFloat(match[1]), y: parseFloat(match[2]) } : { x: 10, y: 10 };
        }

        function buildStrokeSvg() {
            strokeDs.forEach((d, i) => {
                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("d", d);
                path.setAttribute("class", "stroke-path");
                svg.appendChild(path);
                pathEls.push(path);

                const length = path.getTotalLength();
                path.style.strokeDasharray = String(length);
                path.style.strokeDashoffset = String(length);

                const start = startPointOf(d);
                const marker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                marker.setAttribute("cx", start.x);
                marker.setAttribute("cy", start.y);
                marker.setAttribute("r", "4.5");
                marker.setAttribute("class", "stroke-number-marker");
                svg.appendChild(marker);

                const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.setAttribute("x", start.x);
                text.setAttribute("y", start.y);
                text.setAttribute("class", "stroke-number-text");
                text.textContent = String(i + 1);
                svg.appendChild(text);
            });
            updateStrokeBadge();
        }

        function updateStrokeBadge() {
            if (strokeNumberBadge) strokeNumberBadge.textContent = `${Math.min(strokeState.revealed, pathEls.length)} / ${pathEls.length}`;
        }

        function currentSpeed() {
            return parseFloat(speedSelect && speedSelect.value ? speedSelect.value : "1") || 1;
        }

        function showInstantUpTo(revealed) {
            pathEls.forEach((el, i) => {
                const length = el.getTotalLength();
                el.style.transition = "none";
                el.style.strokeDasharray = String(length);
                el.style.strokeDashoffset = i < revealed ? "0" : String(length);
            });
            strokeState.revealed = Math.max(0, Math.min(revealed, pathEls.length));
            updateStrokeBadge();
        }

        function setControlsPlaying(playing) {
            strokeState.playing = playing;
            if (playBtn) playBtn.hidden = playing;
            if (pauseBtn) pauseBtn.hidden = !playing;
        }

        function animateStrokeAt(i, onDone) {
            const path = pathEls[i];
            if (!path) { onDone(); return; }
            const length = path.getTotalLength();
            const duration = BASE_DURATION_MS / currentSpeed();
            path.style.transition = `stroke-dashoffset ${duration}ms linear`;
            requestAnimationFrame(() => { path.style.strokeDashoffset = "0"; });
            clearTimeout(path._doneTimer);
            path._doneTimer = setTimeout(() => {
                strokeState.revealed = i + 1;
                updateStrokeBadge();
                onDone();
            }, duration);
        }

        function playSequence() {
            if (!pathEls.length || strokeState.revealed >= pathEls.length) {
                setControlsPlaying(false);
                return;
            }
            setControlsPlaying(true);
            const step = (i) => {
                if (!strokeState.playing) return;
                if (i >= pathEls.length) { setControlsPlaying(false); return; }
                animateStrokeAt(i, () => step(i + 1));
            };
            step(strokeState.revealed);
        }

        function pauseSequence() {
            setControlsPlaying(false);
            const path = pathEls[strokeState.revealed];
            if (path) {
                const computed = getComputedStyle(path).strokeDashoffset;
                clearTimeout(path._doneTimer);
                path.style.transition = "none";
                path.style.strokeDashoffset = computed;
            }
        }

        function replaySequence() {
            showInstantUpTo(0);
            playSequence();
        }

        if (playBtn) playBtn.addEventListener("click", playSequence);
        if (pauseBtn) pauseBtn.addEventListener("click", pauseSequence);
        if (replayBtn) replayBtn.addEventListener("click", replaySequence);
        if (prevStepBtn) prevStepBtn.addEventListener("click", () => { pauseSequence(); showInstantUpTo(strokeState.revealed - 1); });
        if (nextStepBtn) nextStepBtn.addEventListener("click", () => { pauseSequence(); showInstantUpTo(strokeState.revealed + 1); });

        if (autoPlayToggle) {
            autoPlayToggle.checked = localStorage.getItem("kanaAutoPlay") === "1";
            autoPlayToggle.addEventListener("change", () => {
                localStorage.setItem("kanaAutoPlay", autoPlayToggle.checked ? "1" : "0");
            });
        }

        if (strokeDs.length && svg) {
            buildStrokeSvg();
            if (autoPlayToggle && autoPlayToggle.checked) {
                playSequence();
            }
        } else if (strokeNumberBadge) {
            strokeNumberBadge.textContent = "0 / 0";
            if (playBtn) playBtn.disabled = true;
        }

        /* ---------------- EXAMPLE WORDS + SENTENCE ---------------- */

        const exampleGrid = document.getElementById("exampleWordsGrid");
        const examples = detail && Array.isArray(detail.examples) ? detail.examples : [];

        if (exampleGrid) {
            if (examples.length) {
                exampleGrid.innerHTML = examples
                    .map(
                        (ex, i) => `
                        <div class="example-word-card">
                            <div class="example-word-jp">${ex.word}</div>
                            ${ex.reading ? `<div class="example-word-reading">${ex.reading}</div>` : ""}
                            <div class="example-word-meaning-en">${ex.meanings.en}</div>
                            <div class="example-word-meaning-bn">${ex.meanings.bn}</div>
                            <button class="audio-btn" id="exampleAudioBtn${i}" title="Listen"><i class="fa-solid fa-volume-high"></i></button>
                        </div>`
                    )
                    .join("");
                examples.forEach((ex, i) => wireAudioBtn(document.getElementById(`exampleAudioBtn${i}`), ex.word));
            } else {
                exampleGrid.innerHTML = `<p class="no-results">No example words yet.</p>`;
            }
        }

        const sentenceCard = document.getElementById("exampleSentenceCard");
        if (detail && detail.exampleSentence && sentenceCard) {
            document.getElementById("exampleSentenceJp").textContent = detail.exampleSentence.jp;
            document.getElementById("exampleSentenceReading").textContent = detail.exampleSentence.reading || "";
            document.getElementById("exampleSentenceTranslation").textContent =
                `${detail.exampleSentence.meanings.en} — ${detail.exampleSentence.meanings.bn}`;
            wireAudioBtn(document.getElementById("exampleSentenceAudioBtn"), detail.exampleSentence.jp);
            sentenceCard.hidden = false;
        }

        /* ---------------- PRACTICE WRITING + HANDWRITING CHECK ---------------- */

        const ghostCanvas = document.getElementById("ghostCanvas");
        const practiceCanvas = document.getElementById("practiceCanvas");
        const compareCanvas = document.getElementById("compareCanvas");
        const clearBtn = document.getElementById("clearBtn");
        const resetBtn = document.getElementById("resetBtn");
        const checkBtn = document.getElementById("checkBtn");
        const resultBox = document.getElementById("practiceResult");
        const practiceLegend = document.getElementById("practiceLegend");

        let userStrokes = [];
        let currentStroke = null;
        let drawing = false;

        if (ghostCanvas && strokeDs.length) {
            const gctx = ghostCanvas.getContext("2d");
            const scaleX = ghostCanvas.width / 100;
            const scaleY = ghostCanvas.height / 100;
            gctx.lineWidth = 10;
            gctx.lineCap = "round";
            gctx.lineJoin = "round";
            gctx.strokeStyle = "#111827";
            strokeDs.forEach((d) => {
                const path2d = new Path2D(d);
                gctx.save();
                gctx.setTransform(scaleX, 0, 0, scaleY, 0, 0);
                gctx.lineWidth = 10 / scaleX;
                gctx.stroke(path2d);
                gctx.restore();
            });
        }

        function clearPracticeCanvas() {
            if (!practiceCanvas) return;
            const ctx = practiceCanvas.getContext("2d");
            ctx.clearRect(0, 0, practiceCanvas.width, practiceCanvas.height);
            if (compareCanvas) compareCanvas.getContext("2d").clearRect(0, 0, compareCanvas.width, compareCanvas.height);
            userStrokes = [];
            currentStroke = null;
            if (resultBox) resultBox.hidden = true;
            if (practiceLegend) practiceLegend.hidden = true;
        }

        // Draws the canonical stroke paths (same data as the ghost guide and
        // the stroke-order animation — one source of truth) in green on top of
        // the user's red drawing, so "compare" means an actual visual overlay,
        // not just a percentage number.
        function drawCorrectOverlay() {
            if (!compareCanvas || !strokeDs.length) return;
            const ctx = compareCanvas.getContext("2d");
            ctx.clearRect(0, 0, compareCanvas.width, compareCanvas.height);
            const scaleX = compareCanvas.width / 100;
            const scaleY = compareCanvas.height / 100;
            ctx.save();
            ctx.setTransform(scaleX, 0, 0, scaleY, 0, 0);
            ctx.lineWidth = 3 / scaleX;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.strokeStyle = "#10b981";
            strokeDs.forEach((d) => ctx.stroke(new Path2D(d)));
            ctx.restore();
        }

        function canvasPointFromEvent(e) {
            const rect = practiceCanvas.getBoundingClientRect();
            const scaleX = practiceCanvas.width / rect.width;
            const scaleY = practiceCanvas.height / rect.height;
            return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
        }

        if (practiceCanvas) {
            const ctx = practiceCanvas.getContext("2d");
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.strokeStyle = "#ef4444";

            practiceCanvas.addEventListener("pointerdown", (e) => {
                drawing = true;
                try { practiceCanvas.setPointerCapture(e.pointerId); } catch (err) { /* some browsers reject capture for synthetic/edge-case pointers — drawing still works without it */ }
                const p = canvasPointFromEvent(e);
                currentStroke = [p];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
            });

            practiceCanvas.addEventListener("pointermove", (e) => {
                if (!drawing || !currentStroke) return;
                const p = canvasPointFromEvent(e);
                currentStroke.push(p);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            });

            function endStroke() {
                if (!drawing) return;
                drawing = false;
                if (currentStroke && currentStroke.length > 1) userStrokes.push(currentStroke);
                currentStroke = null;
            }

            practiceCanvas.addEventListener("pointerup", endStroke);
            practiceCanvas.addEventListener("pointercancel", endStroke);
            practiceCanvas.addEventListener("pointerleave", endStroke);
        }

        if (clearBtn) clearBtn.addEventListener("click", clearPracticeCanvas);
        if (resetBtn) resetBtn.addEventListener("click", clearPracticeCanvas);

        if (checkBtn) {
            checkBtn.addEventListener("click", () => {
                if (!window.EasyNihongoHandwriting || !strokeDs.length) return;

                if (!userStrokes.length) {
                    if (resultBox) {
                        resultBox.hidden = false;
                        resultBox.innerHTML = `<p class="accuracy-label">Draw the character first, then check.</p>`;
                    }
                    return;
                }

                const result = window.EasyNihongoHandwriting.scoreCharacter(
                    userStrokes,
                    strokeDs,
                    { width: practiceCanvas.width, height: practiceCanvas.height }
                );

                drawCorrectOverlay();
                if (practiceLegend) practiceLegend.hidden = false;

                if (resultBox) {
                    resultBox.hidden = false;
                    resultBox.innerHTML = `
                        <div class="accuracy-score">${result.overall}%</div>
                        <p class="accuracy-label">${result.strokeCountMatch ? "Stroke count matches!" : `Expected ${strokeDs.length} strokes, you drew ${userStrokes.length}.`}</p>
                        <div class="stroke-score-list">
                            ${result.strokeScores.map((s, i) => `<span class="stroke-score-chip">#${i + 1}: ${s}%</span>`).join("")}
                        </div>`;
                }

                if (type === "kanji") {
                    if (result.overall >= 80 && !kanjiAlreadyCompleted) {
                        fetch("/api/progress/complete", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            credentials: "same-origin",
                            body: JSON.stringify({ contentType: "kanji", level, itemIndex: index })
                        })
                            .then((res) => (res.ok ? res.json() : null))
                            .then((data) => { if (data && data.completed) kanjiAlreadyCompleted = true; })
                            .catch(() => {});
                    }
                } else {
                    fetch("/api/progress/practice-attempt", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        credentials: "same-origin",
                        body: JSON.stringify({ contentType: type, itemIndex: index, accuracy: result.overall })
                    })
                        .then((res) => (res.ok ? res.json() : null))
                        .then((data) => { if (data) setProgressBadge(data.status); })
                        .catch(() => {});
                }
            });
        }

    }

})();
