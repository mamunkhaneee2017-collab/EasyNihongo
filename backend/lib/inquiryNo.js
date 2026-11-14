const crypto = require("crypto");

// Receipt number shown to the sender and in the admin inbox,
// e.g. INQ-20261114-7K3Q. Ambiguous characters (0/O, 1/I) are left out
// so it can be read out over the phone.
const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function generateInquiryNo(date = new Date()) {
    const d = isNaN(date) ? new Date() : date;
    const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
    let rand = "";
    crypto.randomBytes(4).forEach((n) => { rand += CHARS[n % CHARS.length]; });
    return `INQ-${ymd}-${rand}`;
}

module.exports = { generateInquiryNo };
