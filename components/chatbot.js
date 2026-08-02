/* ==========================================
   AI CHATBOT WIDGET
   Floating launcher + panel that answers visitor
   questions about the site's courses, grounded in
   the real course data server-side (see
   backend/lib/chatbotContext.js) — talks to
   POST /api/chatbot/message, which streams back
   plain text chunks from Gemini.

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

    mount.innerHTML = `
<button type="button" class="chatbot-launcher" id="chatbotLauncher" aria-label="Open chat assistant" aria-expanded="false">
    <i class="fa-solid fa-comment-dots"></i>
</button>

<div class="chatbot-panel" id="chatbotPanel" hidden role="dialog" aria-label="Easy Nihongo chat assistant">
    <div class="chatbot-header">
        <div class="chatbot-header-title">
            <i class="fa-solid fa-robot"></i>
            <span>Easy Nihongo Assistant</span>
        </div>
        <button type="button" class="chatbot-close" id="chatbotClose" aria-label="Close chat">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>

    <div class="chatbot-messages" id="chatbotMessages"></div>

    <form class="chatbot-input-row" id="chatbotForm">
        <input type="text" id="chatbotInput" placeholder="Ask about our courses..." autocomplete="off" maxlength="1000">
        <button type="submit" aria-label="Send message">
            <i class="fa-solid fa-paper-plane"></i>
        </button>
    </form>
</div>`;

    const launcher = document.getElementById("chatbotLauncher");
    const panel = document.getElementById("chatbotPanel");
    const closeBtn = document.getElementById("chatbotClose");
    const messagesEl = document.getElementById("chatbotMessages");
    const form = document.getElementById("chatbotForm");
    const input = document.getElementById("chatbotInput");

    const GREETING = "こんにちは! I'm the Easy Nihongo assistant. Ask me anything about our JLPT courses — vocabulary, grammar, kanji, quizzes — or about Japanese itself.";

    // In-memory only — resets on page reload, matching how little state a
    // homepage widget needs. role names ("user" / "model") match Gemini's
    // own chat-history convention so the array can be sent straight through.
    let history = [];
    let awaitingReply = false;

    function addBubble(role, text) {
        const bubble = document.createElement("div");
        bubble.className = `chatbot-bubble chatbot-bubble-${role}`;
        bubble.textContent = text;
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

    function openPanel() {
        panel.hidden = false;
        launcher.setAttribute("aria-expanded", "true");
        if (!messagesEl.childElementCount) addBubble("model", GREETING);
        input.focus();
    }

    function closePanel() {
        panel.hidden = true;
        launcher.setAttribute("aria-expanded", "false");
    }

    launcher.addEventListener("click", () => {
        if (panel.hidden) openPanel();
        else closePanel();
    });
    closeBtn.addEventListener("click", closePanel);

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

            const res = await fetch(`${toRoot}api/chatbot/message`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: text, history, lang })
            });

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
                replyEl.textContent = fullText;
                messagesEl.scrollTop = messagesEl.scrollHeight;
            }

            if (!fullText.trim()) throw new Error("Empty response");

            history.push({ role: "user", text });
            history.push({ role: "model", text: fullText });

        } catch (err) {
            typingEl.remove();
            addBubble("model", "Sorry, I'm having trouble replying right now — please try again in a moment.");
        } finally {
            awaitingReply = false;
        }
    });

})();
