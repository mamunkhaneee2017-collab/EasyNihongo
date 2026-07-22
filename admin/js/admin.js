/* ==========================================
   ADMIN DASHBOARD — UI logic + mock data
   ==========================================
   Everything here uses placeholder data so the
   full interface can be reviewed and clicked
   through today. When the Spring Boot backend is
   ready, replace each "MOCK DATA" block with a
   fetch() call to the matching API endpoint
   (e.g. GET /api/admin/files, /api/admin/messages,
   /api/admin/visitors, /api/admin/students) and
   keep the render functions as they are.
========================================== */

if (sessionStorage.getItem("adminLoggedIn") !== "true") {
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {

    /* ---------------- VIEW SWITCHING ---------------- */

    const navLinks = document.querySelectorAll(".admin-nav-link, .view-all-link");
    const views = document.querySelectorAll(".admin-view");

    function switchView(viewName) {
        views.forEach((v) => v.classList.remove("active"));
        const target = document.getElementById("view-" + viewName);
        if (target) target.classList.add("active");

        document.querySelectorAll(".admin-nav-link").forEach((link) => {
            link.classList.toggle("active", link.dataset.view === viewName);
        });

        window.scrollTo({ top: 0, behavior: "smooth" });

        // Close mobile sidebar after navigating
        document.getElementById("adminSidebar").classList.remove("open");
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            if (!link.dataset.view) return;
            e.preventDefault();
            switchView(link.dataset.view);
        });
    });

    // Open the correct view based on URL hash on load
    const initialHash = window.location.hash.replace("#", "");
    if (initialHash) switchView(initialHash);

    /* ---------------- SIDEBAR TOGGLE (mobile) ---------------- */

    document.getElementById("sidebarToggle").addEventListener("click", function () {
        document.getElementById("adminSidebar").classList.toggle("open");
    });

    /* ---------------- NOTIFICATIONS DROPDOWN ---------------- */

    const notifBtn = document.getElementById("notifBtn");
    const notifDropdown = document.getElementById("notifDropdown");

    notifBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        notifDropdown.classList.toggle("show");
    });

    document.addEventListener("click", function () {
        notifDropdown.classList.remove("show");
    });

    /* ---------------- DARK MODE ---------------- */

    document.getElementById("adminDarkModeBtn").addEventListener("click", function () {
        document.body.classList.toggle("admin-dark");
    });

    /* ---------------- LOGOUT ---------------- */

    document.getElementById("adminLogoutBtn").addEventListener("click", function () {
        sessionStorage.removeItem("adminLoggedIn");
    });

    /* ==========================================
       MOCK DATA
    ========================================== */

    const MOCK_FILES = [
        { name: "N5_Vocabulary_Chapter1.pdf", level: "N5", category: "Vocabulary", type: "pdf", size: "1.2 MB", date: "Jul 09, 2026", status: "published" },
        { name: "N4_Grammar_Causative.docx", level: "N4", category: "Grammar", type: "doc", size: "480 KB", date: "Jul 08, 2026", status: "published" },
        { name: "N3_Kanji_Slides.pptx", level: "N3", category: "Kanji", type: "ppt", size: "3.4 MB", date: "Jul 07, 2026", status: "draft" },
        { name: "N5_Listening_Lesson1.mp3", level: "N5", category: "Listening", type: "audio", size: "8.1 MB", date: "Jul 06, 2026", status: "published" },
        { name: "N2_Speaking_Practice.mp4", level: "N2", category: "Speaking", type: "video", size: "42 MB", date: "Jul 05, 2026", status: "published" },
        { name: "N1_Reading_Notes.txt", level: "N1", category: "Reading", type: "txt", size: "12 KB", date: "Jul 03, 2026", status: "draft" }
    ];

    const MOCK_MESSAGES = [
        {
            name: "Sara Kim", email: "sara.kim@gmail.com", phone: "080-1111-2222", subject: "Course",
            message: "Hi, I'm having trouble finding the JLPT N3 listening audio files under the Listening section. Could you point me to the right lesson, or send me the file directly? Thanks!",
            date: "Jul 11, 2026 · 10:24 AM", status: "new"
        },
        {
            name: "Ahmed Rahman", email: "ahmed.rahman@gmail.com", phone: "090-2222-3333", subject: "Account",
            message: "I can't download the N4 grammar PDF from my account, it keeps showing a loading spinner forever. I've tried on both Chrome and Safari.",
            date: "Jul 11, 2026 · 08:02 AM", status: "new"
        },
        {
            name: "John Lee", email: "john.lee@gmail.com", phone: "070-3333-4444", subject: "Feedback",
            message: "Just wanted to say the new kanji audio lessons are fantastic. The stroke order animation combined with native audio really helped me. Any plans to add N2 kanji audio soon?",
            date: "Jul 10, 2026 · 06:45 PM", status: "new"
        },
        {
            name: "Mitsuki Tanaka", email: "mitsuki.t@gmail.com", phone: "080-4444-5555", subject: "Question",
            message: "Is there a mobile app version planned, or is the website the only way to access lessons?",
            date: "Jul 09, 2026 · 02:15 PM", status: "replied"
        }
    ];

    const MOCK_VISITORS = [
        { country: "🇧🇩 Bangladesh", city: "Dhaka", page: "/courses.html", device: "Mobile", time: "2 minutes ago" },
        { country: "🇯🇵 Japan", city: "Tokyo", page: "/index.html", device: "Desktop", time: "11 minutes ago" },
        { country: "🇮🇳 India", city: "Mumbai", page: "/contact.html", device: "Mobile", time: "40 minutes ago" },
        { country: "🇧🇩 Bangladesh", city: "Chittagong", page: "/login.html", device: "Desktop", time: "1 hour ago" },
        { country: "🇳🇵 Nepal", city: "Kathmandu", page: "/courses.html", device: "Mobile", time: "2 hours ago" },
        { country: "🇯🇵 Japan", city: "Osaka", page: "/register.html", device: "Tablet", time: "3 hours ago" },
        { country: "🇺🇸 USA", city: "New York", page: "/index.html", device: "Desktop", time: "5 hours ago" }
    ];

    const MOCK_STUDENTS = [
        { name: "Ahmed Rahman", email: "ahmed.rahman@gmail.com", country: "🇧🇩 Bangladesh", level: "N3", joined: "Jun 12, 2026", status: "active" },
        { name: "Sara Kim", email: "sara.kim@gmail.com", country: "🇰🇷 South Korea", level: "N4", joined: "May 30, 2026", status: "active" },
        { name: "John Lee", email: "john.lee@gmail.com", country: "🇺🇸 USA", level: "N5", joined: "May 22, 2026", status: "active" },
        { name: "Mitsuki Tanaka", email: "mitsuki.t@gmail.com", country: "🇯🇵 Japan", level: "N2", joined: "Apr 18, 2026", status: "inactive" },
        { name: "Rafiul Islam", email: "rafiul.islam@gmail.com", country: "🇧🇩 Bangladesh", level: "N1", joined: "Mar 05, 2026", status: "active" }
    ];

    const TYPE_ICON = {
        pdf: { icon: "fa-file-pdf", cls: "icon-pdf" },
        doc: { icon: "fa-file-word", cls: "icon-doc" },
        ppt: { icon: "fa-file-powerpoint", cls: "icon-ppt" },
        txt: { icon: "fa-file-lines", cls: "icon-txt" },
        audio: { icon: "fa-file-audio", cls: "icon-audio" },
        video: { icon: "fa-file-video", cls: "icon-video" }
    };

    /* ---------------- RENDER: FILES TABLE ---------------- */

    function renderFiles(filterType) {
        const tbody = document.getElementById("filesTableBody");
        if (!tbody) return;

        const rows = MOCK_FILES.filter((f) => !filterType || filterType === "all" || f.type === filterType);

        tbody.innerHTML = rows.map((f) => {
            const t = TYPE_ICON[f.type];
            const statusBadge = f.status === "published"
                ? '<span class="badge badge-published">Published</span>'
                : '<span class="badge badge-draft">Draft</span>';

            return `
                <tr>
                    <td>
                        <div class="file-type-cell">
                            <div class="file-type-icon ${t.cls}"><i class="fa-solid ${t.icon}"></i></div>
                            <span>${f.name}</span>
                        </div>
                    </td>
                    <td>${f.level}</td>
                    <td>${f.category}</td>
                    <td>${f.type.toUpperCase()}</td>
                    <td>${f.size}</td>
                    <td>${f.date}</td>
                    <td>${statusBadge}</td>
                    <td>
                        <div class="row-actions">
                            <i class="fa-solid fa-eye" title="Preview"></i>
                            <i class="fa-solid fa-pen" title="Edit"></i>
                            <i class="fa-solid fa-trash" title="Delete"></i>
                        </div>
                    </td>
                </tr>
            `;
        }).join("");
    }

    const filterType = document.getElementById("filterType");
    if (filterType) {
        filterType.addEventListener("change", () => renderFiles(filterType.value));
    }
    renderFiles("all");

    /* ---------------- RENDER: VISITORS TABLE ---------------- */

    function renderVisitors() {
        const tbody = document.getElementById("visitorsTableBody");
        if (!tbody) return;

        tbody.innerHTML = MOCK_VISITORS.map((v) => `
            <tr>
                <td>${v.country}</td>
                <td>${v.city}</td>
                <td>${v.page}</td>
                <td>${v.device}</td>
                <td>${v.time}</td>
            </tr>
        `).join("");
    }
    renderVisitors();

    /* ---------------- RENDER: STUDENTS TABLE ---------------- */

    function renderStudents(filterLevel) {
        const tbody = document.getElementById("studentsTableBody");
        if (!tbody) return;

        const rows = MOCK_STUDENTS.filter((s) => !filterLevel || filterLevel === "all" || s.level === filterLevel);

        tbody.innerHTML = rows.map((s) => {
            const statusBadge = s.status === "active"
                ? '<span class="badge badge-active">Active</span>'
                : '<span class="badge badge-inactive">Inactive</span>';

            return `
                <tr>
                    <td>${s.name}</td>
                    <td>${s.email}</td>
                    <td>${s.country}</td>
                    <td>${s.level}</td>
                    <td>${s.joined}</td>
                    <td>${statusBadge}</td>
                    <td>
                        <div class="row-actions">
                            <i class="fa-solid fa-eye" title="View profile"></i>
                            <i class="fa-solid fa-ban" title="Suspend"></i>
                        </div>
                    </td>
                </tr>
            `;
        }).join("");
    }

    const filterLevel = document.getElementById("filterLevel");
    if (filterLevel) {
        filterLevel.addEventListener("change", () => renderStudents(filterLevel.value));
    }
    renderStudents("all");

    /* ---------------- RENDER: MESSAGES INBOX ---------------- */

    const messagesList = document.getElementById("messagesList");
    const messageDetail = document.getElementById("messageDetail");

    function renderMessagesList() {
        if (!messagesList) return;

        messagesList.innerHTML = MOCK_MESSAGES.map((m, i) => `
            <li class="message-item" data-index="${i}">
                <div class="recent-avatar">${m.name.split(" ").map(w => w[0]).join("")}</div>
                <div class="message-item-info">
                    <div class="message-item-top">
                        <strong>${m.name}</strong>
                        <span>${m.status === "new" ? "🔴" : "✅"}</span>
                    </div>
                    <p>${m.subject}: ${m.message}</p>
                </div>
            </li>
        `).join("");

        messagesList.querySelectorAll(".message-item").forEach((item) => {
            item.addEventListener("click", () => openMessage(parseInt(item.dataset.index, 10)));
        });
    }

    function openMessage(index) {
        const m = MOCK_MESSAGES[index];

        messagesList.querySelectorAll(".message-item").forEach((el) => {
            el.classList.toggle("active", parseInt(el.dataset.index, 10) === index);
        });

        const statusBadge = m.status === "new"
            ? '<span class="badge badge-new">New</span>'
            : '<span class="badge badge-replied">Replied</span>';

        messageDetail.innerHTML = `
            <div class="message-detail-header">
                <div>
                    <h3>${m.name} ${statusBadge}</h3>
                    <div class="message-detail-meta">
                        <span><i class="fa-solid fa-envelope"></i> ${m.email}</span>
                        <span><i class="fa-solid fa-phone"></i> ${m.phone}</span>
                        <span><i class="fa-solid fa-tag"></i> ${m.subject}</span>
                        <span><i class="fa-regular fa-clock"></i> ${m.date}</span>
                    </div>
                </div>
                <a class="btn btn-outline" href="mailto:${m.email}?subject=Re: ${encodeURIComponent(m.subject)}">
                    <i class="fa-solid fa-envelope-open-text"></i> Open in Gmail
                </a>
            </div>
            <div class="message-detail-body">${m.message}</div>
            <div class="reply-box">
                <label style="font-size:13px;font-weight:600;display:block;margin-bottom:8px;">Reply to ${m.name}</label>
                <textarea id="replyText" placeholder="Type your reply here..."></textarea>
                <div class="reply-actions">
                    <button class="btn btn-primary" id="sendReplyBtn"><i class="fa-solid fa-paper-plane"></i> Send Reply</button>
                    <button class="btn btn-outline" id="markRepliedBtn">Mark as Replied</button>
                </div>
            </div>
        `;

        document.getElementById("markRepliedBtn").addEventListener("click", () => {
            m.status = "replied";
            updateUnreadBadge();
            renderMessagesList();
            openMessage(index);
        });

        document.getElementById("sendReplyBtn").addEventListener("click", () => {
            const replyText = document.getElementById("replyText").value.trim();
            if (!replyText) return;
            // In production this posts to something like:
            // POST /api/admin/messages/{id}/reply  { body: replyText }
            m.status = "replied";
            updateUnreadBadge();
            renderMessagesList();
            openMessage(index);
            alert("Reply saved (UI preview). Once the backend is connected this will actually email " + m.name + ".");
        });
    }

    function updateUnreadBadge() {
        const unread = MOCK_MESSAGES.filter((m) => m.status === "new").length;
        const badge = document.getElementById("messagesBadge");
        if (badge) badge.textContent = unread;
    }

    renderMessagesList();
    updateUnreadBadge();

    /* ---------------- FILE UPLOAD ZONE ---------------- */

    const uploadZone = document.getElementById("uploadZone");
    const fileInput = document.getElementById("fileInput");
    const browseBtn = document.getElementById("browseBtn");
    const uploadPreviewList = document.getElementById("uploadPreviewList");

    if (uploadZone) {

        browseBtn.addEventListener("click", () => fileInput.click());
        uploadZone.addEventListener("click", (e) => {
            if (e.target === uploadZone) fileInput.click();
        });

        ["dragenter", "dragover"].forEach((evt) => {
            uploadZone.addEventListener(evt, (e) => {
                e.preventDefault();
                uploadZone.classList.add("dragover");
            });
        });

        ["dragleave", "drop"].forEach((evt) => {
            uploadZone.addEventListener(evt, (e) => {
                e.preventDefault();
                uploadZone.classList.remove("dragover");
            });
        });

        uploadZone.addEventListener("drop", (e) => {
            handleFiles(e.dataTransfer.files);
        });

        fileInput.addEventListener("change", (e) => {
            handleFiles(e.target.files);
        });

        function getFileTypeMeta(filename) {
            const ext = filename.split(".").pop().toLowerCase();
            if (ext === "pdf") return TYPE_ICON.pdf;
            if (["doc", "docx"].includes(ext)) return TYPE_ICON.doc;
            if (["ppt", "pptx"].includes(ext)) return TYPE_ICON.ppt;
            if (ext === "txt") return TYPE_ICON.txt;
            if (["mp3", "wav"].includes(ext)) return TYPE_ICON.audio;
            if (["mp4", "mov"].includes(ext)) return TYPE_ICON.video;
            return TYPE_ICON.txt;
        }

        function formatSize(bytes) {
            if (bytes < 1024) return bytes + " B";
            if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
            return (bytes / (1024 * 1024)).toFixed(1) + " MB";
        }

        function handleFiles(fileList) {
            Array.from(fileList).forEach((file) => {
                const meta = getFileTypeMeta(file.name);
                const row = document.createElement("div");
                row.className = "upload-preview-item";
                row.innerHTML = `
                    <div class="file-type-icon ${meta.cls}"><i class="fa-solid ${meta.icon}"></i></div>
                    <span class="file-name">${file.name}</span>
                    <span class="file-size">${formatSize(file.size)}</span>
                    <i class="fa-solid fa-xmark remove-file"></i>
                `;
                row.querySelector(".remove-file").addEventListener("click", () => row.remove());
                uploadPreviewList.appendChild(row);
            });

            // NOTE: This is a UI preview. To actually store files, upload them to
            // your Spring Boot backend, e.g.:
            // const formData = new FormData();
            // formData.append("file", file);
            // formData.append("level", uploadLevel.value);
            // formData.append("category", uploadCategory.value);
            // fetch("/api/admin/files/upload", { method: "POST", body: formData });
        }
    }

});
