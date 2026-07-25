/* ==========================================
   CHARACTER DETAIL PAGE (?type=hiragana&char=あ)
   Stroke-order animation, audio (Web Speech API),
   example words/sentence, practice-writing canvas
   with handwriting-accuracy scoring, favorite sync,
   and per-character learning-progress tracking —
   one consolidated page for both Hiragana and
   Katakana (same pattern as chapter.js's single
   page for vocabulary/grammar/kanji).
========================================== */

(function () {

    const params = new URLSearchParams(window.location.search);
    const type = (params.get("type") || "hiragana").toLowerCase() === "katakana" ? "katakana" : "hiragana";
    const requestedChar = params.get("char") || "";

    const list = type === "hiragana"
        ? (typeof hiraganaData !== "undefined" ? hiraganaData : [])
        : (typeof katakanaData !== "undefined" ? katakanaData : []);

    let index = list.findIndex((x) => x.character === requestedChar);
    if (index === -1) index = 0;
    const item = list[index];

    const strokesData = typeof kanaStrokesData !== "undefined" ? kanaStrokesData : {};
    const detailData = typeof kanaDetailData !== "undefined" ? kanaDetailData : {};

    const backLink = document.getElementById("backToListLink");
    const backLabel = document.getElementById("backToListLabel");
    if (backLink) backLink.href = `${type}.html`;
    if (backLabel) backLabel.textContent = `Back to ${type === "hiragana" ? "Hiragana" : "Katakana"}`;
    document.title = item ? `${item.character} (${item.romaji}) | Easy Nihongo` : "Character | Easy Nihongo";

    if (!item) {
        const mainContent = document.getElementById("main-content");
        if (mainContent) mainContent.innerHTML = `<p class="no-results" style="padding:80px 20px;text-align:center;">Character not found.</p>`;
        return;
    }

    const strokeInfo = strokesData[item.character] || null;
    const detail = detailData[item.character] || null;

    /* ---------------- CHARACTER DISPLAY ---------------- */

    document.getElementById("characterBig").textContent = item.character;
    document.getElementById("characterRomaji").textContent = item.romaji;
    document.getElementById("characterBn").textContent = detail ? detail.nameBn : "";

    const posLabel = document.getElementById("charPositionLabel");
    if (posLabel) posLabel.textContent = `${index + 1} / ${list.length}`;

    const prevBtn = document.getElementById("prevCharBtn");
    const nextBtn = document.getElementById("nextCharBtn");

    function goToIndex(newIndex) {
        if (newIndex < 0 || newIndex >= list.length) return;
        window.location.href = `character.html?type=${type}&char=${encodeURIComponent(list[newIndex].character)}`;
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
        playNormalBtn.addEventListener("click", () => window.EasyNihongoSpeech.speak(item.character));
    }
    if (playSlowBtn && speechSupported) {
        playSlowBtn.addEventListener("click", () => window.EasyNihongoSpeech.speakSlow(item.character));
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
            fetch("/api/progress/favorite", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify({ contentType: type, itemIndex: index })
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

        fetch(`/api/progress/favorites?contentType=${type}`, { credentials: "same-origin" })
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => {
                if (data && data.itemIndexes.includes(index)) favoriteBtn.classList.add("active");
            })
            .catch(() => {});
    }

    /* ---------------- LEARNING PROGRESS BADGE ---------------- */

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

    /* ---------------- STROKE ORDER ANIMATION ---------------- */

    const svg = document.getElementById("strokeSvg");
    const strokeNumberBadge = document.getElementById("strokeNumberBadge");
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

            fetch("/api/progress/practice-attempt", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify({ contentType: type, itemIndex: index, accuracy: result.overall })
            })
                .then((res) => (res.ok ? res.json() : null))
                .then((data) => { if (data) setProgressBadge(data.status); })
                .catch(() => {});
        });
    }

})();
