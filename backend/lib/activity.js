const db = require("../db");

function todayStr() {
    return new Date().toISOString().slice(0, 10);
}

function dateStr(daysAgo) {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    return d.toISOString().slice(0, 10);
}

function logActivity(userId, minutes) {
    db.prepare(`INSERT INTO activity_log (user_id, activity_date, minutes) VALUES (?, ?, ?)`).run(
        userId,
        todayStr(),
        minutes
    );
}

function addXp(userId, amount) {
    db.prepare(`UPDATE users SET xp = xp + ? WHERE id = ?`).run(amount, userId);
}

function computeStreak(userId) {
    const rows = db
        .prepare(
            `SELECT DISTINCT activity_date FROM activity_log WHERE user_id = ? ORDER BY activity_date DESC`
        )
        .all(userId);
    const activeDates = new Set(rows.map((r) => r.activity_date));

    let streak = 0;
    for (let i = 0; ; i++) {
        const day = dateStr(i);
        if (activeDates.has(day)) {
            streak++;
        } else if (i === 0) {
            // today has no activity yet — that's fine, keep checking from yesterday
            continue;
        } else {
            break;
        }
    }
    return streak;
}

function computeActivityForRange(userId, days, dailyGoalMinutes) {
    const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const rows = db
        .prepare(
            `SELECT activity_date, SUM(minutes) as minutes FROM activity_log
             WHERE user_id = ? AND activity_date >= ? GROUP BY activity_date`
        )
        .all(userId, dateStr(days - 1));

    const minutesByDate = {};
    rows.forEach((r) => { minutesByDate[r.activity_date] = r.minutes; });

    const result = [];
    for (let i = days - 1; i >= 0; i--) {
        const day = dateStr(i);
        const minutes = minutesByDate[day] || 0;
        const percent = Math.min(100, Math.round((minutes / Math.max(1, dailyGoalMinutes)) * 100));
        result.push({ day: dayLabels[new Date(day).getUTCDay()], date: day, percent });
    }
    return result;
}

function computeWeeklyActivity(userId, dailyGoalMinutes) {
    return computeActivityForRange(userId, 7, dailyGoalMinutes);
}

function computeMonthlyActivity(userId, dailyGoalMinutes) {
    return computeActivityForRange(userId, 30, dailyGoalMinutes);
}

function todaysMinutes(userId) {
    const row = db
        .prepare(`SELECT SUM(minutes) as minutes FROM activity_log WHERE user_id = ? AND activity_date = ?`)
        .get(userId, todayStr());
    return (row && row.minutes) || 0;
}

function totalMinutes(userId) {
    const row = db.prepare(`SELECT SUM(minutes) as minutes FROM activity_log WHERE user_id = ?`).get(userId);
    return (row && row.minutes) || 0;
}

module.exports = {
    todayStr,
    logActivity,
    addXp,
    computeStreak,
    computeWeeklyActivity,
    computeMonthlyActivity,
    todaysMinutes,
    totalMinutes
};
