const express = require("express");
const db = require("../db");
const requireAuth = require("../middleware/requireAuth");
const content = require("../lib/contentData");
const activity = require("../lib/activity");
const { flattenLevel } = require("../../data/content-helpers");

const router = express.Router();

const CONTINUE_TYPES = [
    { type: "grammar", data: content.grammarData, label: "Grammar" },
    { type: "kanji", data: content.kanjiData, label: "Kanji" },
    { type: "vocabulary", data: content.vocabularyData, label: "Vocabulary" }
];

// First not-fully-completed chapter for a content type/level, so the
// dashboard's "Continue Learning" card links somewhere real instead of
// showing hardcoded lesson titles that don't reflect this user's progress.
function findContinueChapter(userId, contentType, rawData, level) {
    const flat = flattenLevel(rawData[level]);
    if (!flat.chapters.length) return null;

    const completedRows = db
        .prepare(`SELECT item_index FROM progress_items WHERE user_id = ? AND content_type = ? AND level = ?`)
        .all(userId, contentType, level);
    const completedSet = new Set(completedRows.map((r) => r.item_index));

    for (let i = 0; i < flat.chapters.length; i++) {
        const chapter = flat.chapters[i];
        let allDone = true;
        for (let idx = chapter.startIndex; idx <= chapter.endIndex; idx++) {
            if (!completedSet.has(idx)) { allDone = false; break; }
        }
        if (!allDone) {
            return { type: contentType, level, chapterNumber: i + 1, title: chapter.title };
        }
    }
    return null;
}

router.get("/", requireAuth, (req, res) => {
    const userId = req.session.user.id;
    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(userId);
    if (!user) return res.status(404).json({ error: "User not found." });

    // Falls back to N5 if the stored value isn't an actual content level —
    // e.g. accounts registered before the "Beginner" dropdown option was
    // fixed to submit "N5" instead of the literal word "Beginner".
    const VALID_LEVELS = ["N5", "N4", "N3", "N2", "N1"];
    const storedLevel = (user.current_level || user.target_level || "N5").toUpperCase();
    const level = VALID_LEVELS.includes(storedLevel) ? storedLevel : "N5";

    // ---- Per-category completed/total ----
    const kanjiCompleted = db
        .prepare(`SELECT COUNT(*) as c FROM progress_items WHERE user_id = ? AND content_type = 'kanji'`)
        .get(userId).c;
    const kanjiTotal = content.totalItemCount("kanji");

    const grammarCompleted = db
        .prepare(`SELECT COUNT(*) as c FROM progress_items WHERE user_id = ? AND content_type = 'grammar'`)
        .get(userId).c;
    const grammarTotal = content.totalItemCount("grammar");

    const vocabCompleted = db
        .prepare(`SELECT COUNT(*) as c FROM progress_items WHERE user_id = ? AND content_type = 'vocabulary'`)
        .get(userId).c;
    const vocabTotal = content.totalItemCount("vocabulary");

    const quizAttemptCount = db
        .prepare(`SELECT COUNT(*) as c FROM quiz_attempts WHERE user_id = ?`)
        .get(userId).c;
    const quizLevelsTotal = content.quizLevelsWithContent().length;

    const lessonsCompleted = kanjiCompleted + grammarCompleted + vocabCompleted + quizAttemptCount;
    const lessonsTotal = kanjiTotal + grammarTotal + vocabTotal + quizLevelsTotal;

    // ---- Hiragana / Katakana learning progress ----
    // "Completed" here means status is completed or mastered — matches the
    // Not Started -> Learning -> Practicing -> Completed -> Mastered scale
    // shown on each character's detail page (character_progress table).
    function kanaStats(contentType) {
        const row = db
            .prepare(
                `SELECT COUNT(*) as completed, AVG(best_accuracy) as avgAccuracy
                 FROM character_progress
                 WHERE user_id = ? AND content_type = ? AND status IN ('completed', 'mastered')`
            )
            .get(userId, contentType);
        return { completed: row.completed || 0, total: content.hiraganaData.length, avgAccuracy: row.avgAccuracy };
    }

    const hiraganaStats = kanaStats("hiragana");
    const katakanaStats = kanaStats("katakana");
    const kanaAccuracyRow = db
        .prepare(
            `SELECT AVG(best_accuracy) as avgAccuracy FROM character_progress
             WHERE user_id = ? AND content_type IN ('hiragana', 'katakana') AND practice_count > 0`
        )
        .get(userId);
    const kanaAccuracy = kanaAccuracyRow.avgAccuracy ? Math.round(kanaAccuracyRow.avgAccuracy) : 0;

    const kanaTotal = hiraganaStats.total + katakanaStats.total;
    const kanaCompleted = hiraganaStats.completed + katakanaStats.completed;
    const kanaCompletionPercent = kanaTotal ? Math.round((kanaCompleted / kanaTotal) * 100) : 0;

    // ---- XP / streak / activity ----
    const xp = user.xp;
    const targetXP = (Math.floor(xp / 500) + 1) * 500;
    const streak = activity.computeStreak(userId);
    const weeklyActivity = activity.computeWeeklyActivity(userId, user.daily_goal_minutes);
    const monthlyActivity = activity.computeMonthlyActivity(userId, user.daily_goal_minutes);
    const todayGoalPercent = Math.min(
        100,
        Math.round((activity.todaysMinutes(userId) / Math.max(1, user.daily_goal_minutes)) * 100)
    );
    const studyHours = Math.round(activity.totalMinutes(userId) / 60);

    const overallCategories = [
        { completed: kanjiCompleted, total: kanjiTotal },
        { completed: grammarCompleted, total: grammarTotal },
        { completed: vocabCompleted, total: vocabTotal }
    ].filter((c) => c.total > 0);
    const overallProgress = overallCategories.length
        ? Math.round(
              overallCategories.reduce((sum, c) => sum + c.completed / c.total, 0) / overallCategories.length * 100
          )
        : 0;

    // ---- Continue Learning (real next-chapter-per-type, not fixed titles) ----
    const levelKey = level.toLowerCase();
    const continueLearning = CONTINUE_TYPES.map((t) => {
        const next = findContinueChapter(userId, t.type, t.data, levelKey);
        return next ? { ...next, label: t.label } : null;
    }).filter(Boolean);

    // ---- Daily Mission (today's real activity, not manually-clickable fake checkboxes) ----
    const dailyMission = {
        vocabulary: !!db.prepare(`SELECT 1 FROM progress_items WHERE user_id = ? AND content_type = 'vocabulary' AND date(completed_at) = date('now') LIMIT 1`).get(userId),
        grammar: !!db.prepare(`SELECT 1 FROM progress_items WHERE user_id = ? AND content_type = 'grammar' AND date(completed_at) = date('now') LIMIT 1`).get(userId),
        kanaPractice: !!db.prepare(`SELECT 1 FROM character_progress WHERE user_id = ? AND date(last_practiced_at) = date('now') LIMIT 1`).get(userId),
        quiz: !!db.prepare(`SELECT 1 FROM quiz_attempts WHERE user_id = ? AND date(taken_at) = date('now') LIMIT 1`).get(userId)
    };

    // ---- Study Calendar (real dates with activity, current calendar month) ----
    const activeDatesThisMonth = db
        .prepare(`SELECT DISTINCT activity_date FROM activity_log WHERE user_id = ? AND activity_date >= date('now', 'start of month')`)
        .all(userId)
        .map((r) => r.activity_date);

    // ---- Notifications (derived from real state, not invented strings) ----
    const notifications = [];
    if (streak > 0) notifications.push(`🔥 You have a ${streak} day streak!`);
    if (todayGoalPercent < 100) notifications.push("📚 Complete today's study goal.");
    if (quizAttemptCount > 0) notifications.push(`🎉 You've completed ${quizAttemptCount} quiz attempt${quizAttemptCount === 1 ? "" : "s"}.`);
    if (!notifications.length) notifications.push("👋 Welcome! Start a lesson or quiz to see your progress here.");

    res.json({
        user: {
            name: user.full_name,
            avatar: user.avatar_path || "../assets/images/avatar/avatar.png",
            jlptLevel: `${level} Student`,
            xp,
            targetXP,
            studyTime: `${studyHours} Hours`,
            overallProgress,
            streak,
            todayGoal: todayGoalPercent
        },
        statistics: {
            lessons: { completed: lessonsCompleted, total: lessonsTotal },
            vocabulary: { completed: vocabCompleted, total: vocabTotal },
            kanji: { completed: kanjiCompleted, total: kanjiTotal },
            grammar: { completed: grammarCompleted, total: grammarTotal }
        },
        kana: {
            hiragana: { completed: hiraganaStats.completed, total: hiraganaStats.total },
            katakana: { completed: katakanaStats.completed, total: katakanaStats.total },
            completed: kanaCompleted,
            total: kanaTotal,
            completionPercent: kanaCompletionPercent,
            accuracyPercent: kanaAccuracy
        },
        notifications,
        weeklyActivity,
        monthlyActivity,
        continueLearning,
        dailyMission,
        activeDatesThisMonth
    });
});

module.exports = router;
