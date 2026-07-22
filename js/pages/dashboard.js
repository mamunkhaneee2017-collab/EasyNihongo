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

function renderWeeklyChart(weeklyActivity) {
    const chart = document.getElementById("weeklyChart");
    chart.innerHTML = "";

    weeklyActivity.forEach(item => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = item.percent + "%";
        bar.innerHTML = `<span>${item.day}</span>`;
        chart.appendChild(bar);
    });
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
    const { user, statistics, notifications, weeklyActivity } = data;

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

    // Weekly chart + notifications
    renderWeeklyChart(weeklyActivity);
    renderNotifications(notifications);
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