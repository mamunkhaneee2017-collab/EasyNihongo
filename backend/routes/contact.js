const express = require("express");
const rateLimit = require("express-rate-limit");
const db = require("../db");
const { generateInquiryNo } = require("../lib/inquiryNo");
const { notifyNewInquiry } = require("../lib/notify");
const COUNTRIES = require("../../data/countries.js");

const VALID_COUNTRIES = COUNTRIES.map((c) => c.value);

const router = express.Router();

// Same rules as js/pages/contact.js — the browser checks first for a
// friendly UX, this is the real gate.
const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
const KANA_RE = /^[ァ-ヶー]+$/;
const VALID_CATEGORIES = ["Question", "Course", "Account", "Bug", "Feedback", "Business", "Other"];
// 10–15 digits, optional leading + — covers Japan (090…), Bangladesh
// (017…/+880…) and Nepal (98…/+977…) after stripping - ( ) and spaces.
const PHONE_RE = /^\+?\d{10,15}$/;
const MAX_MESSAGE = 2000;

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    skipFailedRequests: true, // rejected (400) attempts don't use up the allowance
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many inquiries from this connection. Please wait a few minutes and try again." }
});

const str = (v) => (typeof v === "string" ? v.trim() : "");

router.post("/", contactLimiter, (req, res) => {
    const b = req.body || {};

    const v = {
        contactType: b.contactType === "corporate" ? "corporate" : "individual",
        company: str(b.company),
        department: str(b.department),
        lastName: str(b.lastName),
        firstName: str(b.firstName),
        lastNameKana: str(b.lastNameKana),
        firstNameKana: str(b.firstNameKana),
        email: str(b.email),
        phone: str(b.phone),
        country: str(b.country),
        postalCode: str(b.postalCode),
        prefecture: str(b.prefecture),
        address: str(b.address),
        category: str(b.category),
        subject: str(b.subject),
        message: typeof b.message === "string" ? b.message.replace(/\s+$/, "") : "",
        agree: b.agree === true,
        website: str(b.website)
    };

    // Honeypot filled in → a bot. Pretend it worked, store nothing.
    if (v.website) {
        return res.status(201).json({ ok: true, inquiryNo: generateInquiryNo(), createdAt: new Date().toISOString() });
    }

    const errors = [];
    if (v.contactType === "corporate" && !v.company) errors.push("Company / organization name is required.");
    if (!v.lastName || !v.firstName) errors.push("Family and given name are required.");
    if (v.lastName.length > 30 || v.firstName.length > 30) errors.push("Names must be 30 characters or fewer.");
    if ((v.lastNameKana || v.firstNameKana) && !(KANA_RE.test(v.lastNameKana) && KANA_RE.test(v.firstNameKana))) {
        errors.push("Furigana must be full-width katakana.");
    }
    if (!EMAIL_RE.test(v.email)) errors.push("Please enter a valid email address.");
    if (v.phone && !PHONE_RE.test(v.phone.replace(/[-\s()]/g, ""))) errors.push("Invalid phone number.");
    if (v.company.length > 100 || v.department.length > 100 || v.address.length > 260 || v.prefecture.length > 40) {
        errors.push("One of the fields is too long.");
    }
    if (!VALID_COUNTRIES.includes(v.country)) errors.push("Please select your country.");
    // Postal code / prefecture are Japan-only fields; ignore them otherwise.
    if (v.country !== "Japan") { v.postalCode = ""; v.prefecture = ""; }
    if (v.postalCode && !/^\d{3}-?\d{4}$/.test(v.postalCode)) errors.push("Invalid postal code.");
    if (!VALID_CATEGORIES.includes(v.category)) errors.push("Invalid inquiry category.");
    if (!v.subject || v.subject.length > 100) errors.push("Subject is required (100 characters max).");
    if (!v.message.trim() || v.message.length > MAX_MESSAGE) errors.push(`Message is required (${MAX_MESSAGE} characters max).`);
    if (!v.agree) errors.push("Consent to the privacy notice is required.");

    if (errors.length) {
        return res.status(400).json({ error: errors[0], errors });
    }

    const now = new Date();
    const inquiryNo = generateInquiryNo(now);
    const corp = v.contactType === "corporate";
    const kana = v.lastNameKana ? `${v.lastNameKana} ${v.firstNameKana}` : null;

    db.prepare(`
        INSERT INTO messages
            (inquiry_no, contact_type, company, department, name, name_kana, email, phone, country,
             postal_code, prefecture, address, category, subject, message)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
        inquiryNo, v.contactType,
        corp ? v.company : null, corp && v.department ? v.department : null,
        `${v.lastName} ${v.firstName}`, kana, v.email, v.phone || null, v.country,
        v.postalCode || null, v.prefecture || null, v.address || null,
        v.category, v.subject, v.message
    );

    notifyNewInquiry({
        inquiryNo, contactType: v.contactType,
        company: corp ? v.company : "", department: corp ? v.department : "",
        name: `${v.lastName} ${v.firstName}`, nameKana: kana, email: v.email, phone: v.phone, country: v.country,
        postalCode: v.postalCode, prefecture: v.prefecture, address: v.address,
        category: v.category, subject: v.subject, message: v.message
    });

    res.status(201).json({ ok: true, inquiryNo, createdAt: now.toISOString() });
});

module.exports = router;
