/* ==========================================
   ADMIN DASHBOARD — UI logic + real data
   ==========================================
   Every view below is backed by the real
   Express + SQLite API under /api/admin/* —
   no mock arrays remain in this file.
========================================== */

const authCheckPromise = fetch("/api/auth/me", { credentials: "same-origin" })
    .then(async (res) => {
        if (!res.ok) throw new Error("Not logged in");
        const data = await res.json();
        if (data.user.role !== "admin") throw new Error("Not an admin");
        return data.user;
    })
    .catch(() => {
        window.location.href = "login.html";
        return null;
    });

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

    document.getElementById("adminLogoutBtn").addEventListener("click", function (e) {
        e.preventDefault();
        fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" })
            .finally(() => { window.location.href = "login.html"; });
    });

    /* ---------------- CURRENT ADMIN IDENTITY ---------------- */

    authCheckPromise.then((user) => {
        if (!user) return;
        document.getElementById("adminTopbarName").textContent = user.fullName;
        document.getElementById("adminAvatarInitials").textContent = user.fullName
            .split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    });

    /* ==========================================
       HELPERS
    ========================================== */

    const TYPE_ICON = {
        pdf: { icon: "fa-file-pdf", cls: "icon-pdf" },
        doc: { icon: "fa-file-word", cls: "icon-doc" },
        ppt: { icon: "fa-file-powerpoint", cls: "icon-ppt" },
        txt: { icon: "fa-file-lines", cls: "icon-txt" },
        audio: { icon: "fa-file-audio", cls: "icon-audio" },
        video: { icon: "fa-file-video", cls: "icon-video" }
    };

    function mimeToType(mime) {
        if (mime === "application/pdf") return "pdf";
        if (mime === "application/msword" || mime.includes("wordprocessingml")) return "doc";
        if (mime === "application/vnd.ms-powerpoint" || mime.includes("presentationml")) return "ppt";
        if (mime === "text/plain") return "txt";
        if (mime.startsWith("audio/")) return "audio";
        if (mime.startsWith("video/")) return "video";
        return "txt";
    }

    function formatSize(bytes) {
        if (bytes < 1024) return bytes + " B";
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
        return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    }

    function formatDate(sqliteDateTime) {
        const d = new Date(sqliteDateTime.replace(" ", "T") + "Z");
        return d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
    }

    function timeAgo(sqliteDateTime) {
        const d = new Date(sqliteDateTime.replace(" ", "T") + "Z");
        const minutes = Math.max(0, Math.round((Date.now() - d.getTime()) / 60000));
        if (minutes < 1) return "Just now";
        if (minutes < 60) return `${minutes}m ago`;
        const hours = Math.round(minutes / 60);
        if (hours < 24) return `${hours}h ago`;
        return `${Math.round(hours / 24)}d ago`;
    }

    /* ==========================================
       DASHBOARD OVERVIEW
    ========================================== */

    function loadOverview() {
        fetch("/api/admin/overview", { credentials: "same-origin" })
            .then((res) => res.json())
            .then((data) => {
                document.getElementById("statStudents").textContent = data.studentCount.toLocaleString();
                document.getElementById("statMaterials").textContent = data.materialCount.toLocaleString();
                document.getElementById("statUnread").textContent = data.unreadMessages.toLocaleString();
                document.getElementById("statVisitorsToday").textContent = data.visitorsToday.toLocaleString();
                document.getElementById("messagesBadge").textContent = data.unreadMessages;

                const chart = document.getElementById("visitorChart");
                if (chart && data.weeklyVisits) {
                    chart.innerHTML = data.weeklyVisits.map((d) => `
                        <div class="bar-col"><div class="bar" style="--h:${d.percent}%"></div><span>${d.day}</span></div>
                    `).join("");
                }
            });
    }

    function loadRecentOverviewLists() {
        fetch("/api/admin/messages", { credentials: "same-origin" })
            .then((res) => res.json())
            .then((data) => {
                const list = document.getElementById("recentMessagesList");
                const recent = data.messages.slice(0, 3);
                list.innerHTML = recent.length
                    ? recent.map((m) => `
                        <li>
                            <div class="recent-avatar">${m.name.split(" ").map(w => w[0]).join("").slice(0, 2)}</div>
                            <div class="recent-info">
                                <strong>${m.name}</strong>
                                <p>${m.subject}: ${m.message.slice(0, 60)}${m.message.length > 60 ? "…" : ""}</p>
                            </div>
                            <span class="recent-time">${timeAgo(m.created_at)}</span>
                        </li>
                    `).join("")
                    : `<li class="empty-state">No messages yet.</li>`;
            });

        fetch("/api/admin/visitors", { credentials: "same-origin" })
            .then((res) => res.json())
            .then((data) => {
                const list = document.getElementById("recentVisitorsList");
                const recent = data.visitors.slice(0, 3);
                list.innerHTML = recent.length
                    ? recent.map((v) => `
                        <li>
                            <div class="recent-avatar"><i class="fa-solid fa-${v.device === "Mobile" ? "mobile-screen" : v.device === "Tablet" ? "tablet-screen-button" : "desktop"}"></i></div>
                            <div class="recent-info">
                                <strong>${v.path}</strong>
                                <p>${v.device}</p>
                            </div>
                            <span class="recent-time">${v.time}</span>
                        </li>
                    `).join("")
                    : `<li class="empty-state">No visits recorded yet.</li>`;
            });
    }

    /* ==========================================
       COURSES & FILES (materials)
    ========================================== */

    const filesTableBody = document.getElementById("filesTableBody");
    const filterType = document.getElementById("filterType");
    let allMaterials = [];

    function renderFiles() {
        if (!filesTableBody) return;

        const activeFilter = filterType ? filterType.value : "all";
        const rows = allMaterials.filter((f) => {
            const type = mimeToType(f.mime_type);
            return activeFilter === "all" || type === activeFilter;
        });

        filesTableBody.innerHTML = rows.map((f) => {
            const type = mimeToType(f.mime_type);
            const t = TYPE_ICON[type];
            const statusBadge = f.status === "published"
                ? '<span class="badge badge-published">Published</span>'
                : '<span class="badge badge-draft">Draft</span>';

            return `
                <tr>
                    <td>
                        <div class="file-type-cell">
                            <div class="file-type-icon ${t.cls}"><i class="fa-solid ${t.icon}"></i></div>
                            <span>${f.original_name}</span>
                        </div>
                    </td>
                    <td>${f.level}</td>
                    <td>${f.category}</td>
                    <td>${type.toUpperCase()}</td>
                    <td>${formatSize(f.size_bytes)}</td>
                    <td>${formatDate(f.created_at)}</td>
                    <td>${statusBadge}</td>
                    <td>
                        <div class="row-actions">
                            <i class="fa-solid fa-eye" title="Preview" data-action="preview" data-id="${f.id}"></i>
                            <i class="fa-solid ${f.status === "published" ? "fa-box-archive" : "fa-arrow-up-from-bracket"}"
                               title="${f.status === "published" ? "Unpublish" : "Publish"}"
                               data-action="toggle-status" data-id="${f.id}" data-status="${f.status}"></i>
                            <i class="fa-solid fa-trash" title="Delete" data-action="delete" data-id="${f.id}"></i>
                        </div>
                    </td>
                </tr>
            `;
        }).join("") || `<tr><td colspan="8" class="empty-state">No course materials yet — upload one above.</td></tr>`;
    }

    function loadMaterials() {
        fetch("/api/admin/materials", { credentials: "same-origin" })
            .then((res) => res.json())
            .then((data) => {
                allMaterials = data.materials;
                renderFiles();
            });
    }

    if (filterType) filterType.addEventListener("change", renderFiles);

    if (filesTableBody) {
        filesTableBody.addEventListener("click", (e) => {
            const target = e.target.closest("[data-action]");
            if (!target) return;

            const id = target.dataset.id;

            if (target.dataset.action === "preview") {
                window.open(`/api/materials/${id}/download`, "_blank");
            }

            if (target.dataset.action === "toggle-status") {
                const newStatus = target.dataset.status === "published" ? "draft" : "published";
                fetch(`/api/admin/materials/${id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    credentials: "same-origin",
                    body: JSON.stringify({ status: newStatus })
                }).then(() => { loadMaterials(); loadOverview(); });
            }

            if (target.dataset.action === "delete") {
                if (!confirm("Delete this file? This cannot be undone.")) return;
                fetch(`/api/admin/materials/${id}`, { method: "DELETE", credentials: "same-origin" })
                    .then(() => { loadMaterials(); loadOverview(); });
            }
        });
    }

    /* ---------------- UPLOAD ZONE ---------------- */

    const uploadZone = document.getElementById("uploadZone");
    const fileInput = document.getElementById("fileInput");
    const browseBtn = document.getElementById("browseBtn");
    const uploadPreviewList = document.getElementById("uploadPreviewList");
    const uploadSubmitBtn = document.getElementById("uploadSubmitBtn");
    const uploadStatus = document.getElementById("uploadStatus");
    const uploadLevel = document.getElementById("uploadLevel");
    const uploadCategory = document.getElementById("uploadCategory");

    let selectedFiles = [];

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
            fileInput.value = "";
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

        function updateUploadSubmitState() {
            uploadSubmitBtn.disabled = selectedFiles.length === 0;
        }

        function handleFiles(fileList) {
            Array.from(fileList).forEach((file) => {
                selectedFiles.push(file);

                const meta = getFileTypeMeta(file.name);
                const row = document.createElement("div");
                row.className = "upload-preview-item";
                row.innerHTML = `
                    <div class="file-type-icon ${meta.cls}"><i class="fa-solid ${meta.icon}"></i></div>
                    <span class="file-name">${file.name}</span>
                    <span class="file-size">${formatSize(file.size)}</span>
                    <i class="fa-solid fa-xmark remove-file"></i>
                `;
                row.querySelector(".remove-file").addEventListener("click", () => {
                    selectedFiles = selectedFiles.filter((f) => f !== file);
                    row.remove();
                    updateUploadSubmitState();
                });
                uploadPreviewList.appendChild(row);
            });

            updateUploadSubmitState();
        }

        uploadSubmitBtn.addEventListener("click", () => {
            if (!selectedFiles.length) return;

            const formData = new FormData();
            selectedFiles.forEach((file) => formData.append("files", file));
            formData.append("level", uploadLevel.value);
            formData.append("category", uploadCategory.value);

            uploadSubmitBtn.disabled = true;
            uploadStatus.textContent = "Uploading…";
            uploadStatus.className = "upload-status";

            fetch("/api/admin/materials", {
                method: "POST",
                credentials: "same-origin",
                body: formData
            })
                .then(async (res) => {
                    const data = await res.json();
                    if (!res.ok) throw new Error(data.error || "Upload failed.");

                    uploadStatus.textContent = `${data.materials.length} file(s) uploaded as drafts. Publish them from the table below.`;
                    uploadStatus.className = "upload-status success";
                    uploadPreviewList.innerHTML = "";
                    selectedFiles = [];
                    updateUploadSubmitState();
                    loadMaterials();
                    loadOverview();
                })
                .catch((err) => {
                    uploadStatus.textContent = err.message;
                    uploadStatus.className = "upload-status error";
                    uploadSubmitBtn.disabled = false;
                });
        });
    }

    /* ==========================================
       ADVERTISEMENTS
    ========================================== */

    const adTypeInput = document.getElementById("adTypeInput");
    const adContentGroup = document.getElementById("adContentGroup");
    const adMediaGroup = document.getElementById("adMediaGroup");
    const adLinkGroup = document.getElementById("adLinkGroup");
    const adCurrentMediaNote = document.getElementById("adCurrentMediaNote");
    const adsTableBody = document.getElementById("adsTableBody");
    let allAds = [];
    let editingAdId = null;

    function updateAdFormFields() {
        const isBanner = adTypeInput.value === "banner";
        adContentGroup.hidden = isBanner;
        adMediaGroup.hidden = !isBanner;
        adLinkGroup.hidden = !isBanner;
    }

    if (adTypeInput) {
        adTypeInput.addEventListener("change", updateAdFormFields);
        updateAdFormFields();
    }

    function adStatusInfo(ad) {
        const today = new Date().toISOString().slice(0, 10);
        if (!ad.isActive) return { label: "Off", cls: "badge-inactive" };
        if (ad.startDate && ad.startDate > today) return { label: "Scheduled", cls: "badge-scheduled" };
        if (ad.endDate && ad.endDate < today) return { label: "Expired", cls: "badge-expired" };
        return { label: "Live", cls: "badge-active" };
    }

    function renderAdPreview(ad) {
        if (ad.type === "text") {
            return `<div class="ad-preview-cell"><i class="fa-solid fa-quote-right"></i></div>`;
        }
        if (!ad.mediaPath) return `<div class="ad-preview-cell"><i class="fa-solid fa-image"></i></div>`;
        const tag =
            ad.mediaType === "video"
                ? `<video src="${ad.mediaPath}" muted></video>`
                : `<img src="${ad.mediaPath}" alt="">`;
        return `<div class="ad-preview-cell">${tag}</div>`;
    }

    function renderAds() {
        if (!adsTableBody) return;

        adsTableBody.innerHTML =
            allAds
                .map((ad) => {
                    const status = adStatusInfo(ad);
                    return `
                <tr>
                    <td>${ad.title}</td>
                    <td>${ad.type === "text" ? "Text Scroll" : "Banner"}</td>
                    <td>${renderAdPreview(ad)}</td>
                    <td><input type="date" class="inline-table-input" data-id="${ad.id}" data-field="startDate" value="${ad.startDate || ""}"></td>
                    <td><input type="date" class="inline-table-input" data-id="${ad.id}" data-field="endDate" value="${ad.endDate || ""}"></td>
                    <td><input type="number" class="inline-table-input" data-id="${ad.id}" data-field="priority" value="${ad.priority}" min="0" step="1"></td>
                    <td><span class="badge ${status.cls}">${status.label}</span></td>
                    <td>
                        <label class="switch">
                            <input type="checkbox" class="ad-active-toggle" data-id="${ad.id}" ${ad.isActive ? "checked" : ""}>
                            <span class="slider"></span>
                        </label>
                    </td>
                    <td>
                        <div class="row-actions">
                            <i class="fa-solid fa-pen" title="Edit" data-action="edit-ad" data-id="${ad.id}"></i>
                            <i class="fa-solid fa-trash" title="Delete" data-action="delete-ad" data-id="${ad.id}"></i>
                        </div>
                    </td>
                </tr>
            `;
                })
                .join("") || `<tr><td colspan="9" class="empty-state">No advertisements yet — create one above.</td></tr>`;
    }

    function loadAdvertisements() {
        fetch("/api/admin/advertisements", { credentials: "same-origin" })
            .then((res) => res.json())
            .then((data) => {
                allAds = data.advertisements;
                renderAds();
            });
    }

    function patchAd(id, formData) {
        return fetch(`/api/admin/advertisements/${id}`, {
            method: "PATCH",
            credentials: "same-origin",
            body: formData
        });
    }

    if (adsTableBody) {
        adsTableBody.addEventListener("change", (e) => {
            const target = e.target;
            const id = target.dataset.id;
            if (!id) return;

            if (target.classList.contains("ad-active-toggle")) {
                const fd = new FormData();
                fd.append("isActive", target.checked ? "true" : "false");
                patchAd(id, fd).then(loadAdvertisements);
                return;
            }

            if (target.dataset.field) {
                const fd = new FormData();
                fd.append(target.dataset.field, target.value);
                patchAd(id, fd).then(loadAdvertisements);
            }
        });

        adsTableBody.addEventListener("click", (e) => {
            const target = e.target.closest("[data-action]");
            if (!target) return;

            if (target.dataset.action === "delete-ad") {
                if (!confirm("Delete this advertisement? This cannot be undone.")) return;
                fetch(`/api/admin/advertisements/${target.dataset.id}`, { method: "DELETE", credentials: "same-origin" })
                    .then(loadAdvertisements);
            }

            if (target.dataset.action === "edit-ad") {
                const ad = allAds.find((a) => String(a.id) === target.dataset.id);
                if (ad) enterAdEditMode(ad);
            }
        });
    }

    const adCreateBtn = document.getElementById("adCreateBtn");
    const adCancelEditBtn = document.getElementById("adCancelEditBtn");

    function exitAdEditMode() {
        editingAdId = null;
        adTypeInput.disabled = false;
        adCancelEditBtn.hidden = true;
        adCurrentMediaNote.hidden = true;
        adCreateBtn.textContent = "Create Advertisement";

        document.getElementById("adTitleInput").value = "";
        document.getElementById("adContentInput").value = "";
        document.getElementById("adMediaInput").value = "";
        document.getElementById("adLinkInput").value = "";
        document.getElementById("adStartInput").value = "";
        document.getElementById("adEndInput").value = "";
        document.getElementById("adPriorityInput").value = "0";
        adTypeInput.value = "text";
        updateAdFormFields();
    }

    function enterAdEditMode(ad) {
        editingAdId = ad.id;

        adTypeInput.value = ad.type;
        adTypeInput.disabled = true;
        updateAdFormFields();

        document.getElementById("adTitleInput").value = ad.title;
        document.getElementById("adContentInput").value = ad.content || "";
        document.getElementById("adLinkInput").value = ad.linkUrl || "";
        document.getElementById("adStartInput").value = ad.startDate || "";
        document.getElementById("adEndInput").value = ad.endDate || "";
        document.getElementById("adPriorityInput").value = ad.priority;
        document.getElementById("adMediaInput").value = "";

        if (ad.type === "banner") {
            adCurrentMediaNote.textContent = ad.mediaPath
                ? `Current file: ${ad.mediaPath.split("/").pop()} — choose a new file only if you want to replace it.`
                : "No file uploaded yet.";
            adCurrentMediaNote.hidden = false;
        } else {
            adCurrentMediaNote.hidden = true;
        }

        adCreateBtn.textContent = "Save Changes";
        adCancelEditBtn.hidden = false;

        document.getElementById("adCreateStatus").textContent = "";
        document.getElementById("adTitleInput").scrollIntoView({ behavior: "smooth", block: "center" });
    }

    if (adCancelEditBtn) {
        adCancelEditBtn.addEventListener("click", exitAdEditMode);
    }

    if (adCreateBtn) {
        adCreateBtn.addEventListener("click", () => {
            const status = document.getElementById("adCreateStatus");
            const type = adTypeInput.value;
            const title = document.getElementById("adTitleInput").value.trim();

            if (!title) {
                status.textContent = "Title is required.";
                status.className = "upload-status error";
                return;
            }

            const fd = new FormData();
            if (!editingAdId) fd.append("type", type);
            fd.append("title", title);
            fd.append("startDate", document.getElementById("adStartInput").value);
            fd.append("endDate", document.getElementById("adEndInput").value);
            fd.append("priority", document.getElementById("adPriorityInput").value || "0");

            if (type === "text") {
                fd.append("content", document.getElementById("adContentInput").value.trim());
            } else {
                const file = document.getElementById("adMediaInput").files[0];
                if (file) fd.append("media", file);
                fd.append("linkUrl", document.getElementById("adLinkInput").value.trim());
            }

            adCreateBtn.disabled = true;
            status.textContent = editingAdId ? "Saving…" : "Creating…";
            status.className = "upload-status";

            const request = editingAdId
                ? fetch(`/api/admin/advertisements/${editingAdId}`, { method: "PATCH", credentials: "same-origin", body: fd })
                : fetch("/api/admin/advertisements", { method: "POST", credentials: "same-origin", body: fd });

            request
                .then(async (res) => {
                    const data = await res.json();
                    if (!res.ok) throw new Error(data.error || "Could not save advertisement.");

                    const message = editingAdId ? "Advertisement updated." : "Advertisement created.";
                    exitAdEditMode();
                    status.textContent = message;
                    status.className = "upload-status success";

                    loadAdvertisements();
                })
                .catch((err) => {
                    status.textContent = err.message;
                    status.className = "upload-status error";
                })
                .finally(() => {
                    adCreateBtn.disabled = false;
                });
        });
    }

    /* ==========================================
       MESSAGES INBOX
    ========================================== */

    const messagesList = document.getElementById("messagesList");
    const messageDetail = document.getElementById("messageDetail");
    let allMessages = [];

    function renderMessagesList() {
        if (!messagesList) return;

        messagesList.innerHTML = allMessages.map((m) => `
            <li class="message-item" data-id="${m.id}">
                <div class="recent-avatar">${m.name.split(" ").map(w => w[0]).join("").slice(0, 2)}</div>
                <div class="message-item-info">
                    <div class="message-item-top">
                        <strong>${m.name}</strong>
                        <span>${m.status === "new" ? "🔴" : "✅"}</span>
                    </div>
                    <p>${m.subject}: ${m.message}</p>
                </div>
            </li>
        `).join("") || `<li class="empty-state">No messages yet.</li>`;

        messagesList.querySelectorAll(".message-item").forEach((item) => {
            item.addEventListener("click", () => openMessage(parseInt(item.dataset.id, 10)));
        });
    }

    function openMessage(id) {
        const m = allMessages.find((msg) => msg.id === id);
        if (!m) return;

        messagesList.querySelectorAll(".message-item").forEach((el) => {
            el.classList.toggle("active", parseInt(el.dataset.id, 10) === id);
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
                        <span><i class="fa-solid fa-phone"></i> ${m.phone || "—"}</span>
                        <span><i class="fa-solid fa-tag"></i> ${m.subject}</span>
                        <span><i class="fa-regular fa-clock"></i> ${formatDate(m.created_at)}</span>
                    </div>
                </div>
                <a class="btn btn-outline" href="mailto:${m.email}?subject=Re: ${encodeURIComponent(m.subject)}">
                    <i class="fa-solid fa-envelope-open-text"></i> Open in Gmail
                </a>
            </div>
            <div class="message-detail-body">${m.message}</div>
            <div class="reply-box">
                <label style="font-size:13px;font-weight:600;display:block;margin-bottom:8px;">Reply to ${m.name}</label>
                <textarea id="replyText" placeholder="Type your reply here...">${m.reply_text || ""}</textarea>
                <div class="reply-actions">
                    <button class="btn btn-primary" id="sendReplyBtn"><i class="fa-solid fa-paper-plane"></i> Send Reply</button>
                    <button class="btn btn-outline" id="markRepliedBtn">Mark as Replied</button>
                </div>
            </div>
        `;

        document.getElementById("markRepliedBtn").addEventListener("click", () => {
            fetch(`/api/admin/messages/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify({ markReplied: true })
            })
                .then((res) => res.json())
                .then((data) => {
                    Object.assign(m, data.message);
                    loadOverview();
                    renderMessagesList();
                    openMessage(id);
                });
        });

        document.getElementById("sendReplyBtn").addEventListener("click", () => {
            const replyText = document.getElementById("replyText").value.trim();
            if (!replyText) return;

            fetch(`/api/admin/messages/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify({ replyText })
            })
                .then((res) => res.json())
                .then((data) => {
                    Object.assign(m, data.message);
                    loadOverview();
                    renderMessagesList();
                    openMessage(id);
                    alert(
                        "Reply saved. Note: no SMTP email service is configured yet, so " +
                        m.name + " will not automatically receive this by email — use \"Open in Gmail\" to send it yourself for now."
                    );
                });
        });
    }

    function loadMessages() {
        fetch("/api/admin/messages", { credentials: "same-origin" })
            .then((res) => res.json())
            .then((data) => {
                allMessages = data.messages;
                renderMessagesList();
            });
    }

    /* ==========================================
       STUDENTS
    ========================================== */

    const studentsTableBody = document.getElementById("studentsTableBody");
    const filterLevel = document.getElementById("filterLevel");
    let allStudents = [];

    function renderStudents() {
        if (!studentsTableBody) return;

        const activeFilter = filterLevel ? filterLevel.value : "all";
        const rows = allStudents.filter((s) => activeFilter === "all" || s.level === activeFilter);

        studentsTableBody.innerHTML = rows.map((s) => {
            const statusBadge = s.status === "active"
                ? '<span class="badge badge-active">Active</span>'
                : '<span class="badge badge-inactive">Inactive</span>';

            return `
                <tr>
                    <td>${s.name}</td>
                    <td>${s.email}</td>
                    <td>${s.country || "—"}</td>
                    <td>${s.level}</td>
                    <td>${formatDate(s.joined)}</td>
                    <td>${statusBadge}</td>
                    <td>
                        <div class="row-actions">
                            <i class="fa-solid ${s.status === "active" ? "fa-ban" : "fa-check"}"
                               title="${s.status === "active" ? "Suspend" : "Reactivate"}"
                               data-action="toggle-status" data-id="${s.id}" data-status="${s.status}"></i>
                        </div>
                    </td>
                </tr>
            `;
        }).join("") || `<tr><td colspan="7" class="empty-state">No students registered yet.</td></tr>`;
    }

    function loadStudents() {
        fetch("/api/admin/students", { credentials: "same-origin" })
            .then((res) => res.json())
            .then((data) => {
                allStudents = data.students;
                renderStudents();
            });
    }

    if (filterLevel) filterLevel.addEventListener("change", renderStudents);

    if (studentsTableBody) {
        studentsTableBody.addEventListener("click", (e) => {
            const target = e.target.closest("[data-action='toggle-status']");
            if (!target) return;

            const isActive = target.dataset.status !== "active";
            fetch(`/api/admin/students/${target.dataset.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify({ isActive })
            }).then(() => loadStudents());
        });
    }

    /* ==========================================
       VISITORS
    ========================================== */

    function loadVisitors() {
        fetch("/api/admin/visitors", { credentials: "same-origin" })
            .then((res) => res.json())
            .then((data) => {
                const tbody = document.getElementById("visitorsTableBody");
                if (tbody) {
                    tbody.innerHTML = data.visitors.map((v) => `
                        <tr>
                            <td>${v.path}</td>
                            <td>${v.device}</td>
                            <td>${v.time}</td>
                        </tr>
                    `).join("") || `<tr><td colspan="3" class="empty-state">No visits recorded yet.</td></tr>`;
                }

                const totalEl = document.getElementById("statTotalVisits");
                if (totalEl) totalEl.textContent = data.summary.totalCount.toLocaleString();
                const todayEl = document.getElementById("statVisitsToday");
                if (todayEl) todayEl.textContent = data.summary.todayCount.toLocaleString();
                const weekEl = document.getElementById("statVisitsWeek");
                if (weekEl) weekEl.textContent = data.summary.weekCount.toLocaleString();

                const deviceEntries = data.deviceBreakdown || [];
                const total = deviceEntries.reduce((sum, d) => sum + d.count, 0) || 1;

                const topDeviceEl = document.getElementById("statTopDevice");
                if (topDeviceEl) topDeviceEl.textContent = deviceEntries.length ? deviceEntries[0].device : "—";

                const breakdown = document.getElementById("deviceBreakdown");
                if (breakdown) {
                    breakdown.innerHTML = deviceEntries.length
                        ? deviceEntries.map((d) => {
                            const pct = Math.round((d.count / total) * 100);
                            return `<div class="country-row"><span>${d.device}</span><div class="country-bar"><div style="width:${pct}%"></div></div><b>${pct}%</b></div>`;
                        }).join("")
                        : `<p class="empty-state">No visits recorded yet.</p>`;
                }
            });
    }

    /* ==========================================
       SETTINGS
    ========================================== */

    function loadSettings() {
        fetch("/api/admin/settings", { credentials: "same-origin" })
            .then((res) => res.json())
            .then((data) => {
                const s = data.settings;
                document.getElementById("siteNameInput").value = s.site_name || "";
                document.getElementById("contactEmailInput").value = s.contact_email || "";
                document.getElementById("supportPhoneInput").value = s.support_phone || "";
                document.getElementById("maintenanceToggle").checked = !!s.maintenance_mode;
                document.getElementById("notifyToggle").checked = !!s.notify_admin_on_message;
            });

        authCheckPromise.then((user) => {
            if (user) document.getElementById("adminNameInput").value = user.fullName;
        });
    }

    const saveSiteInfoBtn = document.getElementById("saveSiteInfoBtn");
    if (saveSiteInfoBtn) {
        saveSiteInfoBtn.addEventListener("click", () => {
            const status = document.getElementById("siteSettingsStatus");
            saveSiteInfoBtn.disabled = true;

            fetch("/api/admin/settings", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify({
                    siteName: document.getElementById("siteNameInput").value.trim(),
                    contactEmail: document.getElementById("contactEmailInput").value.trim(),
                    supportPhone: document.getElementById("supportPhoneInput").value.trim(),
                    maintenanceMode: document.getElementById("maintenanceToggle").checked
                })
            })
                .then(async (res) => {
                    if (!res.ok) throw new Error((await res.json()).error || "Could not save.");
                    status.textContent = "Site information saved.";
                    status.className = "settings-save-status success";
                })
                .catch((err) => {
                    status.textContent = err.message;
                    status.className = "settings-save-status error";
                })
                .finally(() => { saveSiteInfoBtn.disabled = false; });
        });
    }

    const updateAccountBtn = document.getElementById("updateAccountBtn");
    if (updateAccountBtn) {
        updateAccountBtn.addEventListener("click", () => {
            const status = document.getElementById("accountSettingsStatus");
            const currentPassword = document.getElementById("adminCurrentPasswordInput").value;
            const newPassword = document.getElementById("adminNewPasswordInput").value;

            updateAccountBtn.disabled = true;

            Promise.all([
                fetch("/api/admin/settings/me", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    credentials: "same-origin",
                    body: JSON.stringify({
                        fullName: document.getElementById("adminNameInput").value.trim(),
                        currentPassword: currentPassword || undefined,
                        newPassword: newPassword || undefined
                    })
                }),
                fetch("/api/admin/settings", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    credentials: "same-origin",
                    body: JSON.stringify({
                        notifyAdminOnMessage: document.getElementById("notifyToggle").checked
                    })
                })
            ])
                .then(async ([accountRes]) => {
                    const accountData = await accountRes.json();
                    if (!accountRes.ok) throw new Error(accountData.error || "Could not update account.");

                    document.getElementById("adminTopbarName").textContent = accountData.fullName;
                    document.getElementById("adminCurrentPasswordInput").value = "";
                    document.getElementById("adminNewPasswordInput").value = "";
                    status.textContent = "Account updated.";
                    status.className = "settings-save-status success";
                })
                .catch((err) => {
                    status.textContent = err.message;
                    status.className = "settings-save-status error";
                })
                .finally(() => { updateAccountBtn.disabled = false; });
        });
    }

    /* ==========================================
       INITIAL LOAD
    ========================================== */

    loadOverview();
    loadRecentOverviewLists();
    loadAdvertisements();
    loadMaterials();
    loadMessages();
    loadStudents();
    loadVisitors();
    loadSettings();

});
