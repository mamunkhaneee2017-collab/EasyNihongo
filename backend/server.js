const path = require("path");
const express = require("express");
const session = require("express-session");
const multer = require("multer");
const FileStore = require("session-file-store")(session);
const { UPLOADS_DIR, SESSIONS_DIR } = require("./config/paths");

const { seedAdmin, seedDefaultAd } = require("./db/seed");
seedAdmin();
seedDefaultAd();

const logVisit = require("./middleware/logVisit");
const authRoutes = require("./routes/auth");
const oauthRoutes = require("./routes/oauth");
const usersRoutes = require("./routes/users");
const dashboardRoutes = require("./routes/dashboard");
const progressRoutes = require("./routes/progress");
const quizRoutes = require("./routes/quiz");
const contactRoutes = require("./routes/contact");
const materialsRoutes = require("./routes/materials");
const settingsRoutes = require("./routes/settings");
const adminMaterialsRoutes = require("./routes/admin/materials");
const adminMessagesRoutes = require("./routes/admin/messages");
const adminStudentsRoutes = require("./routes/admin/students");
const adminVisitorsRoutes = require("./routes/admin/visitors");
const adminSettingsRoutes = require("./routes/admin/settings");
const adminOverviewRoutes = require("./routes/admin/overview");
const advertisementsRoutes = require("./routes/advertisements");
const adminAdvertisementsRoutes = require("./routes/admin/advertisements");
const heroPhotosRoutes = require("./routes/heroPhotos");
const adminHeroPhotosRoutes = require("./routes/admin/heroPhotos");

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT_DIR = path.join(__dirname, "..");

app.set("trust proxy", 1);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        store: new FileStore({ path: SESSIONS_DIR, logFn: () => {} }),
        secret: process.env.SESSION_SECRET || "easynihongo-dev-secret-change-me",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        }
    })
);

app.use(logVisit);

app.use("/uploads", express.static(UPLOADS_DIR));

app.use("/api/auth", authRoutes);
app.use("/api/auth", oauthRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/materials", materialsRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/admin/materials", adminMaterialsRoutes);
app.use("/api/admin/messages", adminMessagesRoutes);
app.use("/api/admin/students", adminStudentsRoutes);
app.use("/api/admin/visitors", adminVisitorsRoutes);
app.use("/api/admin/settings", adminSettingsRoutes);
app.use("/api/admin/overview", adminOverviewRoutes);
app.use("/api/advertisements", advertisementsRoutes);
app.use("/api/admin/advertisements", adminAdvertisementsRoutes);
app.use("/api/hero-photos", heroPhotosRoutes);
app.use("/api/admin/hero-photos", adminHeroPhotosRoutes);

app.use(express.static(ROOT_DIR));

app.use((req, res) => {
    res.status(404).sendFile(path.join(ROOT_DIR, "404.html"));
});

// Any error thrown/passed by a route (including multer upload errors) lands
// here — always answer JSON so fetch()'s res.json() on the client never
// chokes trying to parse Express's default HTML error page.
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        const message =
            err.code === "LIMIT_FILE_SIZE"
                ? "File is too large."
                : err.code === "LIMIT_FILE_COUNT" || err.code === "LIMIT_UNEXPECTED_FILE"
                ? "Too many files at once."
                : err.message;
        return res.status(400).json({ error: message });
    }
    if (err) {
        console.error(err);
        return res.status(400).json({ error: err.message || "Something went wrong." });
    }
    next();
});

app.listen(PORT, () => {
    console.log(`EasyNihongo server running at http://localhost:${PORT}`);
});
