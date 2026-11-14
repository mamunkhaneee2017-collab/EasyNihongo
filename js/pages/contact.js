/* ==========================================
   CONTACT — INQUIRY SYSTEM (input → review → done)
   ==========================================
   Submissions go to POST /api/contact, are stored
   in the messages table with a receipt number, and
   show up in the admin panel's Messages inbox
   (status / memo / CSV there).

   Features: individual/corporate switch, katakana
   furigana (hiragana auto-converted), email confirm,
   Japanese postcode → address lookup (zipcloud),
   live validation + error summary, draft autosave
   (sessionStorage, until the tab is closed),
   review screen, honeypot spam trap.
   All text comes from locales/*.js ("contact.*").
========================================== */

const FORM_ENDPOINT = "/api/contact";

document.addEventListener("DOMContentLoaded", function () {

    // Reflects the admin panel's Site Info / social link settings (falls
    // back to the hardcoded markup already on the page if the API isn't
    // reachable, e.g. this page opened via file:// without the server).
    fetch("/api/settings")
        .then((res) => (res.ok ? res.json() : null))
        .then((settings) => {
            if (!settings) return;

            if (settings.contactEmail) {
                const emailEl = document.getElementById("contactEmailDisplay");
                if (emailEl) emailEl.textContent = settings.contactEmail;
            }

            const social = settings.social || {};
            // activateSocialLink() comes from components/footer.js.
            activateSocialLink("contactSocialFacebook", social.facebook);
            activateSocialLink("contactSocialInstagram", social.instagram);
            activateSocialLink("contactSocialYoutube", social.youtube);
            activateSocialLink("contactSocialLinkedin", social.linkedin);
        })
        .catch(() => {});

    const form = document.getElementById("contactForm");
    if (!form) return;

    const MAX_MESSAGE = 2000;
    const DRAFT_KEY = "contactInquiryDraft";

    const PREFECTURES = [
        "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
        "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
        "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
        "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
        "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
        "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
        "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
    ];

    const $ = (id) => document.getElementById(id);
    const inputView = $("inputView");
    const confirmView = $("confirmView");
    const doneView = $("doneView");
    const errorSummary = $("errorSummary");
    const steps = document.querySelectorAll("#inqSteps li");
    const msgCounter = $("msgCounter");
    const zipStatus = $("zipStatus");
    const prefSelect = $("prefecture");
    const sendBtn = $("sendBtn");
    const sendStatus = $("sendStatus");

    PREFECTURES.forEach((p) => prefSelect.add(new Option(p, p)));

    /* ---------- country (required) ---------- */

    const countrySelect = $("country");
    const COUNTRY_LIST = window.COUNTRIES || [];

    // Country name in the visitor's language, falling back to English.
    function countryLabel(value) {
        const c = COUNTRY_LIST.find((x) => x.value === value);
        if (!c) return value;
        const lang = localStorage.getItem("lang") || "en";
        return (c.names && (c.names[lang] || c.names.en)) || c.value;
    }

    function buildCountryOptions() {
        const selected = countrySelect.value;
        countrySelect.querySelectorAll("option:not([value=''])").forEach((o) => o.remove());
        COUNTRY_LIST.forEach((c) => countrySelect.add(new Option(countryLabel(c.value), c.value)));
        countrySelect.value = selected;
    }

    buildCountryOptions();

    /* ---------- i18n ---------- */

    function t(key, vars) {
        const lang = localStorage.getItem("lang") || "en";
        const dict = window[lang.toUpperCase() + "_STRINGS"] || {};
        let s = dict[key] ?? (window.EN_STRINGS || {})[key] ?? key;
        if (vars) Object.keys(vars).forEach((k) => { s = s.split(`{${k}}`).join(vars[k]); });
        return s;
    }

    const CATEGORY_KEYS = {
        Question: "contact.option.question", Course: "contact.option.course",
        Account: "contact.option.account", Bug: "contact.option.bug",
        Feedback: "contact.option.feedback", Business: "contact.option.business",
        Other: "contact.option.other"
    };

    /* ---------- helpers ---------- */

    function escapeHtml(str) {
        return String(str ?? "").replace(/[&<>"']/g, (m) => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        })[m]);
    }

    // Full-width ASCII → half-width (so ０９０ or ｍａｍｕｎ＠… still validate)
    function toHalfWidth(str) {
        return String(str || "")
            .replace(/[！-～]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
            .replace(/　/g, " ");
    }

    function hiraToKata(str) {
        return String(str || "").replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));
    }

    const DASHES = /[‐－―ー−]/g;

    /* ---------- read + normalize ---------- */

    const val = (name) => (form.elements[name]?.value ?? "").trim();

    function getValues() {
        const country = val("country");
        const inJapan = country === "Japan";
        // Postal code / prefecture only count when they're visible (Japan).
        const zipRaw = inJapan ? toHalfWidth(val("zip")).replace(DASHES, "-") : "";
        const zipDigits = zipRaw.replace(/-/g, "");
        return {
            contactType: form.querySelector("input[name='contactType']:checked")?.value || "individual",
            company: val("company"),
            department: val("department"),
            lastName: val("lastName"),
            firstName: val("firstName"),
            lastNameKana: hiraToKata(val("lastNameKana")).replace(/\s/g, ""),
            firstNameKana: hiraToKata(val("firstNameKana")).replace(/\s/g, ""),
            email: toHalfWidth(val("email")).replace(/\s/g, ""),
            emailConfirm: toHalfWidth(val("emailConfirm")).replace(/\s/g, ""),
            phone: toHalfWidth(val("phone")).replace(DASHES, "-").replace(/\s/g, ""),
            zipRaw,
            zip: /^\d{7}$/.test(zipDigits) ? `${zipDigits.slice(0, 3)}-${zipDigits.slice(3)}` : zipRaw,
            country,
            prefecture: inJapan ? val("prefecture") : "",
            address1: val("address1"),
            address2: val("address2"),
            category: val("category"),
            subject: val("subject"),
            message: (form.elements.message.value || "").replace(/\s+$/, "").replace(/^\s*\n/, ""),
            agree: form.elements.agree.checked,
            website: val("website")
        };
    }

    /* ---------- validation ---------- */

    const KANA_RE = /^[ァ-ヶー]+$/;
    const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
    const PHONE_RE = /^\+?\d{10,15}$/;

    const validators = {
        company: (v) => (v.contactType === "corporate" && !v.company ? t("contact.err.company") : ""),
        name: (v) => (!v.lastName || !v.firstName ? t("contact.err.name") : ""),
        kana: (v) => {
            if (!v.lastNameKana && !v.firstNameKana) return "";
            if (!v.lastNameKana || !v.firstNameKana) return t("contact.err.kanaBoth");
            if (!KANA_RE.test(v.lastNameKana) || !KANA_RE.test(v.firstNameKana)) return t("contact.err.kana");
            return "";
        },
        email: (v) => {
            if (!v.email) return t("contact.err.emailRequired");
            if (!EMAIL_RE.test(v.email)) return t("contact.err.email");
            return "";
        },
        emailConfirm: (v) => {
            if (!v.emailConfirm) return t("contact.err.emailConfirmRequired");
            if (v.email.toLowerCase() !== v.emailConfirm.toLowerCase()) return t("contact.err.emailMismatch");
            return "";
        },
        phone: (v) => (v.phone && !PHONE_RE.test(v.phone.replace(/[-()]/g, "")) ? t("contact.err.phone") : ""),
        country: (v) => (!v.country ? t("contact.err.country") : ""),
        zip: (v) => (v.zipRaw && !/^\d{3}-?\d{4}$/.test(v.zipRaw) ? t("contact.err.zip") : ""),
        category: (v) => (!v.category ? t("contact.err.category") : ""),
        subject: (v) => (!v.subject ? t("contact.err.subject") : ""),
        message: (v) => {
            if (!v.message.trim()) return t("contact.err.message");
            if (v.message.length > MAX_MESSAGE) return t("contact.err.messageLong", { max: MAX_MESSAGE.toLocaleString(), n: v.message.length.toLocaleString() });
            return "";
        },
        agree: (v) => (!v.agree ? t("contact.err.agree") : "")
    };

    const LABEL_KEYS = {
        company: "contact.label.company", name: "contact.label.name", kana: "contact.label.kana",
        email: "contact.label.email", emailConfirm: "contact.label.emailConfirm", phone: "contact.label.phone",
        country: "contact.label.country",
        zip: "contact.label.zip", category: "contact.label.category", subject: "contact.label.subject",
        message: "contact.label.message", agree: "contact.agree"
    };

    function fieldsOf(group) {
        return form.querySelectorAll(`[data-group="${group}"]`);
    }

    function validateGroup(group, values = getValues()) {
        const fn = validators[group];
        if (!fn) return "";
        const msg = fn(values);
        const errEl = $(`err-${group}`);
        if (errEl) errEl.textContent = msg;
        fieldsOf(group).forEach((el) => {
            if (!el.matches("input:not([type=radio]), select, textarea")) return;
            el.classList.toggle("invalid", !!msg);
            if (msg) {
                el.setAttribute("aria-invalid", "true");
                if (errEl) el.setAttribute("aria-describedby", errEl.id);
            } else {
                el.removeAttribute("aria-invalid");
            }
        });
        return msg;
    }

    function validateAll() {
        const values = getValues();
        const errors = [];
        Object.keys(validators).forEach((group) => {
            const msg = validateGroup(group, values);
            if (msg) errors.push({ group, msg });
        });
        return { values, errors };
    }

    function showErrorSummary(errors) {
        errorSummary.innerHTML =
            `<strong>${escapeHtml(t("contact.err.summary", { n: errors.length }))}</strong>` +
            `<ul>` +
            errors.map((er) => `<li><a href="#" data-jump="${er.group}">${t(LABEL_KEYS[er.group])}</a>: ${escapeHtml(er.msg)}</li>`).join("") +
            `</ul>`;
        errorSummary.hidden = false;
        errorSummary.focus();
        errorSummary.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    errorSummary.addEventListener("click", (e) => {
        const link = e.target.closest("[data-jump]");
        if (!link) return;
        e.preventDefault();
        const target = form.querySelector(`input[data-group="${link.dataset.jump}"], select[data-group="${link.dataset.jump}"], textarea[data-group="${link.dataset.jump}"]`);
        if (target) { target.focus(); target.scrollIntoView({ behavior: "smooth", block: "center" }); }
    });

    /* ---------- live validation ---------- */

    form.addEventListener("focusout", (e) => {
        const el = e.target;
        const group = el.dataset?.group;
        if (!group) return;

        if (el.hasAttribute("data-kana")) el.value = hiraToKata(el.value).replace(/\s/g, "");
        if (["email", "emailConfirm", "phone", "zip"].includes(el.name)) el.value = toHalfWidth(el.value).trim();

        // Moving family → given name inside the same group: wait until leaving the group.
        if (["name", "kana", "address"].includes(group) && e.relatedTarget?.dataset?.group === group) return;

        validateGroup(group);
        if (group === "email" && form.elements.emailConfirm.value) validateGroup("emailConfirm");
    });

    form.addEventListener("input", (e) => {
        const group = e.target.dataset?.group;
        // A field already showing an error re-checks on every keystroke, so the error clears instantly.
        if (group && e.target.getAttribute("aria-invalid") === "true") validateGroup(group);
        if (e.target.name === "message") updateCounter();
        saveDraft();
    });

    form.addEventListener("change", (e) => {
        if (e.target.name === "contactType") toggleCorporate();
        if (e.target.name === "country") { toggleJapanFields(); validateGroup("country"); }
        if (e.target.name === "agree") validateGroup("agree");
        if (e.target.name === "category") validateGroup("category");
        saveDraft();
    });

    /* ---------- corporate fields ---------- */

    function toggleCorporate() {
        const isCorp = form.querySelector("input[name='contactType']:checked")?.value === "corporate";
        $("companyField").hidden = !isCorp;
        $("departmentField").hidden = !isCorp;
        if (!isCorp) validateGroup("company");
    }

    /* ---------- Japan-only address fields ---------- */

    function toggleJapanFields() {
        const inJapan = countrySelect.value === "Japan";
        $("zipField").hidden = !inJapan;
        $("prefectureField").hidden = !inJapan;
        if (!inJapan) { validateGroup("zip"); setZipStatus(""); }
    }

    /* ---------- character counter ---------- */

    function updateCounter() {
        const len = form.elements.message.value.length;
        msgCounter.textContent = `${len.toLocaleString()} / ${MAX_MESSAGE.toLocaleString()}`;
        msgCounter.classList.toggle("is-over", len > MAX_MESSAGE);
    }

    /* ---------- postcode → address (Japan, zipcloud) ---------- */

    const zipInput = form.elements.zip;
    let lastLookedUp = "";

    zipInput.addEventListener("input", () => {
        const digits = toHalfWidth(zipInput.value).replace(/\D/g, "");
        if (digits.length === 7 && digits !== lastLookedUp) searchAddress(digits);
    });

    $("zipSearchBtn").addEventListener("click", () => {
        const digits = toHalfWidth(zipInput.value).replace(/\D/g, "");
        if (digits.length !== 7) {
            validateGroup("zip");
            zipInput.focus();
            setZipStatus(t("contact.zip.need7"), false);
            return;
        }
        searchAddress(digits);
    });

    function setZipStatus(text, ok) {
        zipStatus.textContent = text;
        zipStatus.className = "inq-zip-status" + (ok === true ? " is-ok" : ok === false ? " is-ng" : "");
    }

    async function searchAddress(digits) {
        lastLookedUp = digits;
        setZipStatus(t("contact.zip.searching"));
        try {
            const res = await jsonp(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${digits}`);
            if (res?.status === 200 && res.results?.length) {
                const r = res.results[0];
                prefSelect.value = r.address1;
                form.elements.address1.value = `${r.address2}${r.address3}`;
                zipInput.value = `${digits.slice(0, 3)}-${digits.slice(3)}`;
                setZipStatus(t("contact.zip.found"), true);
                validateGroup("zip");
                saveDraft();
                const a1 = form.elements.address1;
                a1.focus();
                a1.setSelectionRange(a1.value.length, a1.value.length);
            } else {
                setZipStatus(t("contact.zip.notFound"), false);
            }
        } catch (err) {
            setZipStatus(t("contact.zip.failed"), false);
        }
    }

    // zipcloud only supports JSONP (no CORS), so it's loaded via a <script> tag.
    function jsonp(url, timeout = 8000) {
        return new Promise((resolve, reject) => {
            const cb = `__zipcb_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
            const script = document.createElement("script");
            const timer = setTimeout(() => { cleanup(); reject(new Error("timeout")); }, timeout);
            function cleanup() { clearTimeout(timer); delete window[cb]; script.remove(); }
            window[cb] = (data) => { cleanup(); resolve(data); };
            script.onerror = () => { cleanup(); reject(new Error("network")); };
            script.src = `${url}&callback=${cb}`;
            document.head.appendChild(script);
        });
    }

    /* ---------- draft autosave (this tab only) ---------- */

    function saveDraft() {
        try {
            const data = {};
            [...form.elements].forEach((el) => {
                if (!el.name || el.name === "website") return;
                if (el.type === "radio") { if (el.checked) data[el.name] = el.value; }
                else if (el.type === "checkbox") data[el.name] = el.checked;
                else data[el.name] = el.value;
            });
            sessionStorage.setItem(DRAFT_KEY, JSON.stringify(data));
        } catch (_) { /* storage unavailable — the form still works */ }
    }

    function restoreDraft() {
        let data = null;
        try { data = JSON.parse(sessionStorage.getItem(DRAFT_KEY) || "null"); } catch (_) { data = null; }
        if (!data) return;
        Object.entries(data).forEach(([name, value]) => {
            const el = form.elements[name];
            if (!el) return;
            if (el instanceof RadioNodeList) [...el].forEach((r) => { r.checked = r.value === value; });
            else if (el.type === "checkbox") el.checked = !!value;
            else el.value = value;
        });
    }

    function clearDraft() {
        try { sessionStorage.removeItem(DRAFT_KEY); } catch (_) { /* ignore */ }
    }

    /* ---------- summary rows (review + done screens) ---------- */

    function summaryRows(v) {
        const addr = [
            v.zipRaw ? `〒${v.zip}` : "",
            v.prefecture,
            `${v.address1} ${v.address2}`.trim()
        ].filter(Boolean).join(" ");

        return [
            [t("contact.label.type"), t(v.contactType === "corporate" ? "contact.type.corporate" : "contact.type.individual")],
            ...(v.contactType === "corporate"
                ? [[t("contact.label.company"), v.company], [t("contact.label.department"), v.department]]
                : []),
            [t("contact.label.name"), `${v.lastName} ${v.firstName}`],
            [t("contact.label.kana"), v.lastNameKana ? `${v.lastNameKana} ${v.firstNameKana}` : ""],
            [t("contact.label.email"), v.email],
            [t("contact.label.phone"), v.phone],
            [t("contact.label.country"), countryLabel(v.country)],
            [t("contact.label.address"), addr],
            [t("contact.label.category"), t(CATEGORY_KEYS[v.category] || "contact.option.other")],
            [t("contact.label.subject"), v.subject],
            [t("contact.label.message"), v.message]
        ];
    }

    function renderSummary(listEl, v, extraRows = [], hideEmpty = false) {
        const rows = [...extraRows, ...summaryRows(v)].filter(([, val]) => !hideEmpty || val);
        listEl.innerHTML = rows.map(([k, val]) =>
            `<div><dt>${escapeHtml(k)}</dt><dd>${val ? escapeHtml(val) : `<span class="inq-empty">${escapeHtml(t("contact.notEntered"))}</span>`}</dd></div>`
        ).join("");
    }

    /* ---------- steps ---------- */

    let currentStep = 1;
    let confirmedValues = null;
    let receipt = null;

    function showStep(n) {
        currentStep = n;
        inputView.hidden = n !== 1;
        confirmView.hidden = n !== 2;
        doneView.hidden = n !== 3;
        steps.forEach((li, i) => {
            li.classList.toggle("is-done", i < n - 1);
            li.classList.toggle("is-current", i === n - 1);
            if (i === n - 1) li.setAttribute("aria-current", "step"); else li.removeAttribute("aria-current");
        });
        document.querySelector(".contact-form-wrapper").scrollIntoView({ behavior: "smooth", block: "start" });
        if (n === 2) $("confirmTitle").focus({ preventScroll: true });
        if (n === 3) $("doneTitle").focus({ preventScroll: true });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const { values, errors } = validateAll();
        if (errors.length) { showErrorSummary(errors); return; }

        errorSummary.hidden = true;
        sendStatus.textContent = "";
        confirmedValues = values;
        renderSummary($("confirmList"), values);
        showStep(2);
    });

    $("backBtn").addEventListener("click", () => showStep(1));

    /* ---------- send ---------- */

    function setSending(on) {
        sendBtn.disabled = on;
        sendBtn.querySelector(".btn-text").textContent = t(on ? "contact.sending" : "contact.submitBtn");
    }

    sendBtn.addEventListener("click", async () => {
        if (!confirmedValues || sendBtn.disabled) return;
        const v = confirmedValues;
        setSending(true);
        sendStatus.textContent = "";

        const payload = {
            contactType: v.contactType,
            company: v.company,
            department: v.department,
            lastName: v.lastName,
            firstName: v.firstName,
            lastNameKana: v.lastNameKana,
            firstNameKana: v.firstNameKana,
            email: v.email,
            phone: v.phone,
            country: v.country,
            postalCode: v.zipRaw ? v.zip : "",
            prefecture: v.prefecture,
            address: `${v.address1} ${v.address2}`.trim(),
            category: v.category,
            subject: v.subject,
            message: v.message,
            agree: v.agree,
            website: v.website
        };

        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify(payload)
            });
            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                sendStatus.textContent = res.status === 429 ? t("contact.err.tooMany") : (data.error || t("contact.err.send"));
                return;
            }

            receipt = { no: data.inquiryNo, at: data.createdAt };
            renderDone();
            clearDraft();
            form.reset();
            toggleCorporate();
            toggleJapanFields();
            updateCounter();
            setZipStatus("");
            lastLookedUp = "";
            form.querySelectorAll(".invalid").forEach((el) => { el.classList.remove("invalid"); el.removeAttribute("aria-invalid"); });
            showStep(3);
        } catch (err) {
            sendStatus.textContent = t("contact.err.send");
        } finally {
            setSending(false);
        }
    });

    function renderDone() {
        if (!receipt || !confirmedValues) return;
        $("receiptNo").textContent = receipt.no;
        const at = new Date(receipt.at);
        const lang = localStorage.getItem("lang") || "en";
        const when = isNaN(at) ? "" : at.toLocaleString(lang === "ja" ? "ja-JP" : lang === "bn" ? "bn-BD" : lang === "ne" ? "ne-NP" : "en-US",
            { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
        renderSummary($("doneList"), confirmedValues, [[t("contact.done.receivedAt"), when]], true);
    }

    $("printBtn").addEventListener("click", () => window.print());

    $("newInquiryBtn").addEventListener("click", () => {
        confirmedValues = null;
        receipt = null;
        showStep(1);
    });

    /* ---------- language switch: re-render JS-built text ---------- */

    document.addEventListener("i18n:change", () => {
        buildCountryOptions();
        updateCounter();
        if (currentStep === 2 && confirmedValues) renderSummary($("confirmList"), confirmedValues);
        if (currentStep === 3) renderDone();
        if (!errorSummary.hidden) {
            const { errors } = validateAll();
            if (errors.length) showErrorSummary(errors); else errorSummary.hidden = true;
        } else {
            // Refresh any inline errors already on screen.
            Object.keys(validators).forEach((g) => { if ($(`err-${g}`)?.textContent) validateGroup(g); });
        }
        if (!sendBtn.disabled) setSending(false);
    });

    /* ---------- init ---------- */

    restoreDraft();
    toggleCorporate();
    toggleJapanFields();
    updateCounter();
});
