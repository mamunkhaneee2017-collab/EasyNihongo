/*==========================
    Mobile Menu
==========================*/

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});

/*==========================
        DARK MODE
==========================*/

const themeToggle = document.getElementById("darkModeBtn");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

/*==========================
    HEADER SEARCH
    Sends the query to the real site-wide search
    page (search.html) — this box used to have no
    JS wiring at all.
==========================*/

const dashboardSearchInput = document.getElementById("dashboardSearchInput");

if (dashboardSearchInput) {
    dashboardSearchInput.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;
        const query = dashboardSearchInput.value.trim();
        window.location.href = query ? `search.html?q=${encodeURIComponent(query)}` : "search.html";
    });
}

/*==========================
    HIDE HEADER ON SCROLL DOWN,
    SHOW ON SCROLL UP
==========================*/

const dashboardHeader = document.querySelector(".dashboard-header");

if (dashboardHeader) {

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        const currentScrollY = Math.max(0, window.scrollY);

        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            dashboardHeader.classList.add("header-hidden");
        } else {
            dashboardHeader.classList.remove("header-hidden");
        }

        lastScrollY = currentScrollY;
    });

}

/*==========================
    Progress Ring Animation
==========================*/

function animateProgressRing(percent) {
    const progressCircle = document.querySelector(".progress-ring-circle");
    const radius = 75;
    const circumference = 2 * Math.PI * radius;

    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;

    const offset = circumference - (percent / 100) * circumference;

    setTimeout(() => {
        progressCircle.style.transition = "2s";
        progressCircle.style.strokeDashoffset = offset;
    }, 300);
}

/*==========================
    Weekly Chart (built from JSON)
==========================*/

function renderWeeklyChart(activityData, isMonthly) {
    const chart = document.getElementById("weeklyChart");
    chart.innerHTML = "";
    chart.classList.toggle("monthly-view", !!isMonthly);

    const hasAnyActivity = activityData.some((item) => item.percent > 0);
    if (!hasAnyActivity) {
        const empty = document.createElement("p");
        empty.className = "chart-empty-state";
        empty.textContent = "No study activity yet — complete a lesson, practice a character, or take a quiz to see it here.";
        chart.appendChild(empty);
        return;
    }

    activityData.forEach(item => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.title = `${item.date || item.day}: ${item.percent}%`;
        bar.style.height = item.percent + "%";
        bar.innerHTML = `<span>${item.day}</span>`;
        chart.appendChild(bar);
    });
}

/*==========================
    Continue Learning
    (real next-not-completed chapter per type,
    from GET /api/dashboard's continueLearning)
==========================*/

function renderContinueLearning(continueLearning) {
    const list = document.getElementById("continueLearningList");
    if (!list) return;

    if (!continueLearning || !continueLearning.length) {
        list.innerHTML = `<p class="continue-empty-state">You've completed every available chapter — nice work! Check back as new levels are added.</p>`;
        return;
    }

    list.innerHTML = continueLearning
        .map(
            (item) => `
            <div class="lesson-item">
                <div>
                    <h3>${item.label}: ${item.title}</h3>
                    <p>Chapter ${item.chapterNumber} &middot; ${item.level.toUpperCase()}</p>
                </div>
                <a href="chapter.html?level=${item.level}&type=${item.type}&chapter=${item.chapterNumber}">
                    <button type="button">Continue</button>
                </a>
            </div>`
        )
        .join("");
}

/*==========================
    Daily Mission
    (today's real activity — read-only status,
    not manually-clickable fake checkboxes)
==========================*/

function renderDailyMission(dailyMission) {
    if (!dailyMission) return;
    const map = { missionVocab: "vocabulary", missionGrammar: "grammar", missionKana: "kanaPractice", missionQuiz: "quiz" };
    Object.keys(map).forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.checked = !!dailyMission[map[id]];
    });
}

/*==========================
    Study Calendar
    (real current-month grid, real activity
    dates highlighted — was a static hardcoded
    table before)
==========================*/

function renderStudyCalendar(activeDates) {
    const body = document.getElementById("calendarBody");
    const monthLabel = document.getElementById("calendarMonthLabel");
    if (!body) return;

    const activeSet = new Set(activeDates || []);
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const todayStr = now.toISOString().slice(0, 10);

    if (monthLabel) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        monthLabel.textContent = `${monthNames[month]} ${year}`;
    }

    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = "";
    let dayNum = 1 - firstWeekday;

    for (let week = 0; week < 6 && dayNum <= daysInMonth; week++) {
        html += "<tr>";
        for (let weekday = 0; weekday < 7; weekday++, dayNum++) {
            if (dayNum < 1 || dayNum > daysInMonth) {
                html += "<td></td>";
                continue;
            }
            const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
            const classes = [];
            if (dateStr === todayStr) classes.push("active-day");
            if (activeSet.has(dateStr)) classes.push("has-activity");
            html += `<td class="${classes.join(" ")}">${dayNum}</td>`;
        }
        html += "</tr>";
    }

    body.innerHTML = html;
}

/*==========================
    Notifications (built from JSON)
==========================*/

function renderNotifications(notifications) {
    const list = document.getElementById("notificationList");
    list.innerHTML = "";

    notifications.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
    });

    document.getElementById("notificationCount").textContent = notifications.length;
}

/*==========================
    Skill Progress Bars
    (derived from statistics.completed / statistics.total)
==========================*/

function renderSkillBar(elementId, stat) {
    const el = document.getElementById(elementId);
    if (!stat || !stat.total) {
        el.style.width = "0%";
        return;
    }
    const percent = Math.min(100, Math.round((stat.completed / stat.total) * 100));
    el.style.width = percent + "%";
}

/*==========================
    Populate Dashboard from JSON
==========================*/

function populateDashboard(data) {
    const { user, statistics, kana, notifications, weeklyActivity, monthlyActivity, continueLearning, dailyMission, activeDatesThisMonth } = data;

    // Header / sidebar
    document.getElementById("userName").textContent = `Welcome Back, ${user.name} 👋`;
    document.getElementById("sidebarUserName").textContent = user.name;
    document.getElementById("profileName").textContent = user.name;
    document.getElementById("userLevel").textContent = user.jlptLevel;

    if (user.avatar) {
        document.getElementById("sidebarAvatar").src = user.avatar;
        document.getElementById("profileAvatar").src = user.avatar;
    }

    // Study time / XP
    document.getElementById("studyTime").textContent = user.studyTime;
    document.getElementById("totalXP").textContent = `${user.xp.toLocaleString()} XP`;
    document.getElementById("xpText").textContent = `${user.xp} / ${user.targetXP} XP`;
    document.getElementById("xpFill").style.width = `${Math.min(100, (user.xp / user.targetXP) * 100)}%`;

    // XP-based game level (distinct from JLPT level)
    const gameLevel = Math.floor(user.xp / 100);
    document.getElementById("xpLevel").textContent = `Level ${gameLevel}`;

    // Today's goal
    document.getElementById("goalFill").style.width = `${user.todayGoal}%`;
    const goalMinutes = Math.round((user.todayGoal / 100) * 60);
    document.getElementById("goalText").textContent = `${goalMinutes} / 60 Minutes`;

    // Overall progress ring
    document.getElementById("overallProgress").textContent = `${user.overallProgress}%`;
    animateProgressRing(user.overallProgress);

    // Top stat cards
    document.getElementById("cardTodayGoal").textContent = `${user.todayGoal}%`;
    document.getElementById("cardJlptLevel").textContent = user.jlptLevel.split(" ")[0];
    document.getElementById("cardStreak").textContent = `🔥${user.streak} Days`;
    document.getElementById("cardLessons").textContent = statistics.lessons.completed;

    // Skill progress bars
    renderSkillBar("grammarBar", statistics.grammar);
    renderSkillBar("kanjiBar", statistics.kanji);
    renderSkillBar("vocabBar", statistics.vocabulary);
    if (kana) renderSkillBar("kanaBar", { completed: kana.completed, total: kana.total });

    // Hiragana/Katakana progress card
    if (kana) {
        document.getElementById("kanaCompletedStat").textContent = kana.completed;
        document.getElementById("kanaRemainingStat").textContent = Math.max(0, kana.total - kana.completed);
        document.getElementById("kanaAccuracyStat").textContent = `${kana.accuracyPercent}%`;
        document.getElementById("kanaCompletionFill").style.width = `${kana.completionPercent}%`;
        document.getElementById("kanaCompletionText").textContent = `${kana.completionPercent}% complete`;
    }

    // Weekly/Monthly chart toggle + notifications
    renderWeeklyChart(weeklyActivity, false);
    const rangeToggle = document.getElementById("chartRangeToggle");
    if (rangeToggle) {
        rangeToggle.querySelectorAll(".chart-range-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                rangeToggle.querySelector(".chart-range-btn.active")?.classList.remove("active");
                btn.classList.add("active");
                const isMonthly = btn.dataset.range === "monthly";
                renderWeeklyChart(isMonthly ? monthlyActivity : weeklyActivity, isMonthly);
            });
        });
    }
    renderNotifications(notifications);
    renderContinueLearning(continueLearning);
    renderDailyMission(dailyMission);
    renderStudyCalendar(activeDatesThisMonth);
}

/*==========================
    Fallback UI on load failure
==========================*/

function showLoadError() {
    const header = document.getElementById("userName");
    if (header) {
        header.textContent = "Couldn't load dashboard data";
    }
    const sub = header ? header.nextElementSibling : null;
    if (sub) {
        sub.textContent = "Please check your connection and refresh the page.";
    }
}

/*==========================
        LOAD DATA
    js/auth-guard.js (loaded before this file) already
    confirmed the user is logged in and redirects to
    login.html otherwise. Real per-user stats come from
    GET /api/dashboard, backed by the SQLite database.
==========================*/

fetch("/api/dashboard", { credentials: "same-origin" })
    .then((res) => {
        if (!res.ok) throw new Error("Failed to load dashboard data.");
        return res.json();
    })
    .then((data) => populateDashboard(data))
    .catch((error) => {
        console.error("Dashboard load error:", error);
        showLoadError();
    });