/* ==========================================
   AI CHATBOT WIDGET
   Inline chat card, embedded in the homepage's
   normal section flow (between the hero and
   features sections) rather than floating fixed
   over the page. Answers visitor questions about
   the site's courses, grounded in the real course
   data server-side (see backend/lib/chatbotContext.js)
   — talks to POST /api/chatbot/message, which
   streams back plain text chunks from Gemini.

   Usage:
     <div id="chatbot-widget"></div>
     <script src="components/chatbot.js"></script>       (from the site root)
     <script src="../components/chatbot.js"></script>     (from pages/*.html)
========================================== */

(function () {

    const inPagesFolder = window.location.pathname.includes("/pages/");
    const toRoot = inPagesFolder ? "../" : "";

    const mount = document.getElementById("chatbot-widget");
    if (!mount) return;

    // Widget's own fixed texts, per site language (navbar switcher).
    const UI_TEXT = {
        en: {
            greeting: "こんにちは! I'm the Easy Japanese assistant. Ask me anything about our JLPT courses — vocabulary, grammar, kanji, quizzes — or about Japanese itself.",
            placeholder: "Ask about our courses...",
            error: "Sorry, I'm having trouble replying right now — please try again in a moment."
        },
        bn: {
            greeting: "こんにちは! আমি Easy Japanese সহকারী। আমাদের JLPT কোর্স — শব্দভান্ডার, ব্যাকরণ, কানজি, কুইজ — বা জাপানি ভাষা নিয়ে যেকোনো প্রশ্ন করুন।",
            placeholder: "আমাদের কোর্স সম্পর্কে জিজ্ঞাসা করুন...",
            error: "দুঃখিত, এই মুহূর্তে উত্তর দিতে সমস্যা হচ্ছে — একটু পরে আবার চেষ্টা করুন।"
        },
        ja: {
            greeting: "こんにちは！Easy Japanese アシスタントです。JLPTコース（単語・文法・漢字・クイズ）や日本語について、何でも聞いてください。",
            placeholder: "コースについて質問する...",
            error: "申し訳ありません、ただいま応答できません。少し時間をおいて再度お試しください。"
        },
        ne: {
            greeting: "こんにちは! म Easy Japanese सहायक हुँ। हाम्रा JLPT कोर्स — शब्दावली, व्याकरण, कान्जी, क्विज — वा जापानी भाषाबारे जे पनि सोध्नुहोस्।",
            placeholder: "हाम्रा कोर्सबारे सोध्नुहोस्...",
            error: "माफ गर्नुहोस्, अहिले जवाफ दिन समस्या भइरहेको छ — केही बेरपछि फेरि प्रयास गर्नुहोस्।"
        }
    };
    const t = () => UI_TEXT[localStorage.getItem("lang")] || UI_TEXT.en;

    // The server already switches models after 12s of silence; this is the
    // last-resort cap so a dead connection never leaves the dots spinning.
    const REPLY_START_TIMEOUT_MS = 35000;

    mount.innerHTML = `
<div class="chatbot-panel" role="region" aria-label="Easy Japanese chat assistant">
    <div class="chatbot-header">
        <div class="chatbot-header-title">
            <i class="fa-solid fa-robot"></i>
            <span>Easy Japanese Assistant</span>
        </div>
    </div>

    <div class="chatbot-messages" id="chatbotMessages"></div>

    <form class="chatbot-input-row" id="chatbotForm">
        <input type="text" id="chatbotInput" placeholder="${t().placeholder}" autocomplete="off" maxlength="1000">
        <button type="submit" aria-label="Send message">
            <i class="fa-solid fa-paper-plane"></i>
        </button>
    </form>
</div>`;

    const messagesEl = document.getElementById("chatbotMessages");
    const form = document.getElementById("chatbotForm");
    const input = document.getElementById("chatbotInput");


    // In-memory only — resets on page reload, matching how little state a
    // homepage widget needs. role names ("user" / "model") match Gemini's
    // own chat-history convention so the array can be sent straight through.
    let history = [];
    let awaitingReply = false;

    // Gemini replies use light markdown (**bold**, *italic*, `code`) —
    // render it instead of showing the raw asterisks/backticks. Escaping
    // runs first so the text can never inject markup of its own.
    function escapeHtml(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function renderMarkdown(text) {
        let html = escapeHtml(text);
        html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
        html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
        html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
        return html;
    }

    function addBubble(role, text) {
        const bubble = document.createElement("div");
        bubble.className = `chatbot-bubble chatbot-bubble-${role}`;
        bubble.innerHTML = renderMarkdown(text);
        messagesEl.appendChild(bubble);
        messagesEl.scrollTop = messagesEl.scrollHeight;
        return bubble;
    }

    function addTypingIndicator() {
        const el = document.createElement("div");
        el.className = "chatbot-bubble chatbot-bubble-model chatbot-typing";
        el.innerHTML = "<span></span><span></span><span></span>";
        messagesEl.appendChild(el);
        messagesEl.scrollTop = messagesEl.scrollHeight;
        return el;
    }

    addBubble("model", t().greeting);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (awaitingReply) return;

        const text = input.value.trim();
        if (!text) return;

        addBubble("user", text);
        input.value = "";
        awaitingReply = true;

        const typingEl = addTypingIndicator();

        try {
            const lang = localStorage.getItem("lang") || "en";

            const abort = new AbortController();
            const startTimer = setTimeout(() => abort.abort(), REPLY_START_TIMEOUT_MS);
            let res;
            try {
                res = await fetch(`${toRoot}api/chatbot/message`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: text, history, lang }),
                    signal: abort.signal
                });
            } finally {
                clearTimeout(startTimer);
            }

            if (!res.ok || !res.body) {
                const data = await res.json().catch(() => null);
                throw new Error(data?.error || "Request failed");
            }

            typingEl.remove();
            const replyEl = addBubble("model", "");

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let fullText = "";

            for (;;) {
                const { done, value } = await reader.read();
                if (done) break;
                fullText += decoder.decode(value, { stream: true });
                replyEl.innerHTML = renderMarkdown(fullText);
                messagesEl.scrollTop = messagesEl.scrollHeight;
            }

            if (!fullText.trim()) throw new Error("Empty response");

            history.push({ role: "user", text });
            history.push({ role: "model", text: fullText });

        } catch (err) {
            typingEl.remove();
            addBubble("model", t().error);
        } finally {
            awaitingReply = false;
        }
    });

})();
