/* ==========================================
   COUNTRY LIST
   Shared by the contact form (js/pages/contact.js)
   and the server's validation (backend/routes/
   contact.js). Same countries, same stored values
   as the register page's Country select, so admin
   data lines up across signups and inquiries.

   `value` is what gets stored (English name).
   `names` are written out per site language rather
   than taken from the browser (Intl.DisplayNames),
   whose Nepali/Bangla data is missing on some
   devices.
========================================== */

const COUNTRIES = [
    { value: "Bangladesh", names: { en: "Bangladesh", ja: "バングラデシュ", bn: "বাংলাদেশ", ne: "बंगलादेश" } },
    { value: "Japan", names: { en: "Japan", ja: "日本", bn: "জাপান", ne: "जापान" } },
    { value: "India", names: { en: "India", ja: "インド", bn: "ভারত", ne: "भारत" } },
    { value: "Nepal", names: { en: "Nepal", ja: "ネパール", bn: "নেপাল", ne: "नेपाल" } },
    { value: "Pakistan", names: { en: "Pakistan", ja: "パキスタン", bn: "পাকিস্তান", ne: "पाकिस्तान" } },
    { value: "Sri Lanka", names: { en: "Sri Lanka", ja: "スリランカ", bn: "শ্রীলঙ্কা", ne: "श्रीलङ्का" } },
    { value: "Indonesia", names: { en: "Indonesia", ja: "インドネシア", bn: "ইন্দোনেশিয়া", ne: "इन्डोनेसिया" } },
    { value: "Vietnam", names: { en: "Vietnam", ja: "ベトナム", bn: "ভিয়েতনাম", ne: "भियतनाम" } },
    { value: "Philippines", names: { en: "Philippines", ja: "フィリピン", bn: "ফিলিপাইন", ne: "फिलिपिन्स" } },
    { value: "Myanmar", names: { en: "Myanmar", ja: "ミャンマー", bn: "মিয়ানমার", ne: "म्यानमार" } },
    { value: "Other", names: { en: "Other", ja: "その他", bn: "অন্যান্য", ne: "अन्य" } }
];

if (typeof window !== "undefined") window.COUNTRIES = COUNTRIES;
if (typeof module !== "undefined") module.exports = COUNTRIES;
