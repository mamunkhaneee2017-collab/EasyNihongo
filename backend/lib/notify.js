/* ==========================================
   NEW-INQUIRY EMAIL BACKUP
   On Render's free plan the SQLite file is wiped
   whenever the server sleeps (15 min idle),
   restarts or redeploys — so each contact-form
   inquiry is ALSO emailed to the site owner,
   where it is kept permanently.

   Uses Resend's HTTPS API (free: 100 emails/day)
   because Render free instances block outbound
   SMTP ports. Configure two env vars:
     RESEND_API_KEY  — from resend.com → API Keys
     NOTIFY_EMAIL    — where to send (with the
                       default onboarding@resend.dev
                       sender this must be the email
                       you signed up to Resend with)
   Optional: NOTIFY_FROM (a sender on a domain you
   verified in Resend).
   Without the env vars this is a silent no-op.
========================================== */

const RESEND_URL = "https://api.resend.com/emails";

function isEmailBackupConfigured() {
    return Boolean(process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL);
}

function escapeHtml(str) {
    return String(str ?? "").replace(/[&<>"']/g, (m) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[m]);
}

// Fire-and-forget: never delays or fails the visitor's submission.
function notifyNewInquiry(inq) {
    if (!isEmailBackupConfigured()) return;

    const rows = [
        ["Receipt no.", inq.inquiryNo],
        ["Received", new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC"],
        ["Type", inq.contactType === "corporate" ? "Organization" : "Individual"],
        ["Company / Dept.", [inq.company, inq.department].filter(Boolean).join(" / ")],
        ["Name", inq.nameKana ? `${inq.name} (${inq.nameKana})` : inq.name],
        ["Email", inq.email],
        ["Phone", inq.phone],
        ["Country", inq.country],
        ["Address", [inq.postalCode ? `〒${inq.postalCode}` : "", inq.prefecture, inq.address].filter(Boolean).join(" ")],
        ["Topic", inq.category],
        ["Subject", inq.subject]
    ].filter(([, v]) => v);

    const html = `
        <div style="font-family:Arial,sans-serif;font-size:14px;color:#1e293b">
            <h2 style="margin:0 0 12px">New inquiry from the Easy Japanese contact page</h2>
            <table style="border-collapse:collapse">
                ${rows.map(([k, v]) => `<tr><td style="padding:4px 14px 4px 0;color:#64748b;vertical-align:top">${escapeHtml(k)}</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`).join("")}
            </table>
            <div style="margin-top:16px;padding:14px;background:#f1f5f9;border-radius:8px;white-space:pre-wrap">${escapeHtml(inq.message)}</div>
            <p style="color:#64748b;font-size:12px;margin-top:16px">Reply to this email to answer ${escapeHtml(inq.name)} directly.</p>
        </div>`;

    const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\n${inq.message}`;

    fetch(RESEND_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            from: process.env.NOTIFY_FROM || "Easy Japanese <onboarding@resend.dev>",
            to: [process.env.NOTIFY_EMAIL],
            reply_to: inq.email,
            subject: `[Easy Japanese] ${inq.subject} (${inq.inquiryNo})`,
            html,
            text
        }),
        signal: AbortSignal.timeout(10000)
    })
        .then(async (res) => {
            if (!res.ok) console.error("Inquiry email backup failed:", res.status, await res.text().catch(() => ""));
        })
        .catch((err) => console.error("Inquiry email backup failed:", err.message));
}

module.exports = { notifyNewInquiry, isEmailBackupConfigured };
