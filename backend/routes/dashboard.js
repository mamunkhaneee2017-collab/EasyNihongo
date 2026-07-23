const express = require("express");
const db = require("../db");
const requireAuth = require("../middleware/requireAuth");
const content = require("../lib/contentData");
const activity = require("../lib/activity");

const router = express.Router();

router.get("/", requireAuth, (req, res) => {
    const userId = req.session.user.id;
    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(userId);
    if (!user) return res.status(404).json({ error: "User not found." });

    const level = (user.current_level || user.target_level || "N5").toUpperCase();

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

    // ---- XP / streak / activity ----
    const xp = user.xp;
    const targetXP = (Math.floor(xp / 500) + 1) * 500;
    const streak = activity.computeStreak(userId);
    const weeklyActivity = activity.computeWeeklyActivity(userId, user.daily_goal_minutes);
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
        notifications,
        weeklyActivity
    });
});

module.exports = router;
