/* ==========================================
   SHARED SPEECH HELPER (Web Speech API)
   Every audio-pronunciation feature on the site
   (hiragana/katakana list + detail pages,
   vocabulary/kanji example words) plays Japanese
   speech through the browser's built-in TTS
   instead of mp3 files — there is no audio
   backend/asset pipeline in this project.

   Load this AFTER components/header.js /
   js/utils.js, before any page script that calls
   window.EasyNihongoSpeech.
========================================== */

(function () {

    const synth = window.speechSynthesis || null;
    let japaneseVoice = null;

    function pickJapaneseVoice() {
        if (!synth) return null;
        const voices = synth.getVoices();
        return (
            voices.find((v) => v.lang === "ja-JP") ||
            voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("ja")) ||
            null
        );
    }

    function refreshVoice() {
        japaneseVoice = pickJapaneseVoice();
    }

    if (synth) {
        refreshVoice();
        // Most browsers load the voice list asynchronously — the first
        // pickJapaneseVoice() call above often returns nothing until this
        // event fires, sometimes seconds after the page loads.
        if (typeof synth.addEventListener === "function") {
            synth.addEventListener("voiceschanged", refreshVoice);
        }
    }

    // rate: 1 = normal speed, ~0.6 = slow speed (used by speakSlow).
    function speak(text, options) {
        options = options || {};
        if (!synth || !text) return false;

        synth.cancel(); // stop whatever's already playing so repeat clicks don't queue up

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "ja-JP";
        if (japaneseVoice) utterance.voice = japaneseVoice;
        utterance.rate = options.rate || 1;
        utterance.pitch = 1;

        synth.speak(utterance);
        return true;
    }

    function speakSlow(text) {
        return speak(text, { rate: 0.55 });
    }

    function stop() {
        if (synth) synth.cancel();
    }

    window.EasyNihongoSpeech = {
        speak,
        speakSlow,
        stop,
        isSupported: () => !!synth,
        hasJapaneseVoice: () => !!japaneseVoice
    };

})();
