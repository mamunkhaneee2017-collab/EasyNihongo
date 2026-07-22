/*==========================
    Dashboard Data
    (loaded via <script> tag instead of fetch,
    so it works even when opening dashboard.html
    directly by double-click, i.e. file:// protocol)
==========================*/

const dashboardData = {
  "user": {
    "name": "Mamun",
    "avatar": "../assets/images/avatar/avatar.png",
    "jlptLevel": "N3 Student",
    "xp": 1250,
    "targetXP": 1500,
    "studyTime": "68 Hours",
    "overallProgress": 72,
    "streak": 15,
    "todayGoal": 80
  },

  "statistics": {
    "lessons": { "completed": 285, "total": 400 },
    "vocabulary": { "completed": 5200, "total": 6000 },
    "kanji": { "completed": 680, "total": 1200 },
    "grammar": { "completed": 245, "total": 320 }
  },

  "notifications": [
    "🎉 New JLPT N3 Mock Test Available",
    "🔥 You have a 15 day streak!",
    "📚 Complete today's study goal."
  ],

  "weeklyActivity": [
    { "day": "Mon", "percent": 70 },
    { "day": "Tue", "percent": 95 },
    { "day": "Wed", "percent": 60 },
    { "day": "Thu", "percent": 85 },
    { "day": "Fri", "percent": 100 },
    { "day": "Sat", "percent": 45 },
    { "day": "Sun", "percent": 80 }
  ]
};