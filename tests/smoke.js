/* ==========================================
   SMOKE TEST — real browser, real server
   Covers the flow found broken during the site
   audit (unauthenticated profile/settings
   crashing) plus the core student journey:
   register -> login -> mark a word learned ->
   dashboard/chapter progress reflects it ->
   logout -> profile/settings/dashboard redirect
   to login instead of crashing.

   Run against a local dev server by default:
     npm start                     (in one terminal)
     npm run test:smoke            (in another)

   Or against any deployed instance:
     BASE_URL=https://easynihongo.onrender.com npm run test:smoke

   No test framework — plain Node + Playwright,
   consistent with this project's no-build-tooling
   philosophy. Each step either passes or throws;
   a non-zero exit code means something broke.
========================================== */

const { chromium } = require("playwright");

const BASE = process.env.BASE_URL || "http://localhost:3000";
const results = [];

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

async function step(name, fn) {
    try {
        await fn();
        results.push({ name, ok: true });
        console.log(`  ✓ ${name}`);
    } catch (err) {
        results.push({ name, ok: false, error: err.message });
        console.log(`  ✗ ${name} — ${err.message}`);
    }
}

(async () => {
    console.log(`Running smoke tests against ${BASE}\n`);

    const browser = await chromium.launch();
    const page = await browser.newPage();
    const consoleErrors = [];
    page.on("pageerror", (err) => consoleErrors.push(err.message));

    const email = `smoketest_${Date.now()}@example.com`;
    const password = "SmokeTest123!";

    await step("Register a new account", async () => {
        await page.goto(`${BASE}/pages/register.html`, { waitUntil: "load" });
        await page.fill("#fullName", "Smoke Test");
        await page.fill("#email", email);
        await page.fill("#password", password);
        await page.fill("#confirmPassword", password);
        await page.selectOption("#country", { index: 1 });
        await page.check("#terms");

        const dialogPromise = new Promise((resolve) => {
            page.once("dialog", async (dialog) => {
                await dialog.accept();
                resolve(dialog.message());
            });
        });
        await page.click('button[type="submit"]');
        const message = await Promise.race([
            dialogPromise,
            new Promise((_, reject) => setTimeout(() => reject(new Error("timed out waiting for the registration confirmation dialog")), 15000))
        ]);
        assert(message.includes("Successful"), `unexpected dialog message: ${message}`);
        await page.waitForURL(/login\.html/, { timeout: 5000 });
    });

    await step("Log in with the new account", async () => {
        await page.fill("#email", email);
        await page.fill("#password", password);
        await page.click("#loginBtn");
        await page.waitForURL(/dashboard\.html/, { timeout: 15000 });
    });

    await step("Dashboard loads real user data", async () => {
        await page.waitForTimeout(500);
        const heading = await page.$eval("h1", (el) => el.textContent);
        assert(heading.includes("Welcome"), `dashboard heading looked wrong: "${heading}"`);
    });

    await step("Mark a vocabulary word as learned", async () => {
        await page.goto(`${BASE}/pages/chapter.html?level=n5&type=vocabulary&chapter=1`, { waitUntil: "load" });
        await page.waitForTimeout(500);
        const learnBtn = await page.$(".learned-btn");
        assert(learnBtn, "no .learned-btn found on the chapter page");
        await learnBtn.click();
        await page.waitForTimeout(800);
        const isLearned = await page.$(".learned-btn.active");
        assert(isLearned, "learned button did not switch to its learned (active) state after clicking");
    });

    await step("Chapter list reflects the new progress", async () => {
        await page.goto(`${BASE}/pages/chapters.html?level=n5&type=vocabulary`, { waitUntil: "load" });
        await page.waitForTimeout(500);
        const firstCard = await page.$eval(".chapter-card", (el) => el.textContent);
        assert(/[1-9]\d*\/\d+ learned/.test(firstCard), `expected a non-zero learned count, got: "${firstCard.replace(/\s+/g, " ").trim()}"`);
    });

    await step("Logout, then dashboard/profile/settings redirect to login (not crash)", async () => {
        await page.goto(`${BASE}/pages/dashboard.html`, { waitUntil: "load" });
        await page.click("#logoutLink");
        await page.waitForURL(/login\.html/, { timeout: 5000 });

        for (const path of ["/pages/dashboard.html", "/pages/profile.html", "/pages/settings.html"]) {
            consoleErrors.length = 0;
            await page.goto(`${BASE}${path}`, { waitUntil: "load" });
            await page.waitForURL(/login\.html/, { timeout: 5000 });
            assert(consoleErrors.length === 0, `${path} threw instead of redirecting cleanly: ${consoleErrors.join("; ")}`);
        }
    });

    await browser.close();

    const failed = results.filter((r) => !r.ok);
    console.log(`\n${results.length - failed.length}/${results.length} passed`);
    if (failed.length) {
        console.log("\nFailed steps:");
        failed.forEach((r) => console.log(`  - ${r.name}: ${r.error}`));
        process.exit(1);
    }
})().catch((err) => {
    console.error("Smoke test runner crashed:", err);
    process.exit(1);
});
