/* ==========================================
   HOMEPAGE — HERO PHOTO CAROUSEL
   Admin-managed via the Hero Photos section
   in the admin panel. If no photos have been
   uploaded yet, the static illustration already
   in index.html is left untouched.
========================================== */

(function () {
    const container = document.getElementById("heroImageContainer");
    const fallback = document.getElementById("heroFallbackImage");
    if (!container) return;

    fetch("/api/hero-photos")
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
            const photos = data && Array.isArray(data.photos) ? data.photos : [];
            if (!photos.length) return;

            fallback.classList.remove("active");
            fallback.hidden = true;
            container.classList.add("has-carousel");

            const imgs = photos.map((photo, index) => {
                const img = document.createElement("img");
                img.src = photo.imagePath;
                img.alt = "Easy Nihongo student photo";
                img.className = `hero-photo shape-${photo.shape}${index === 0 ? " active" : ""}`;
                container.appendChild(img);
                return img;
            });

            if (imgs.length < 2) return;

            let current = 0;
            setInterval(() => {
                imgs[current].classList.remove("active");
                current = (current + 1) % imgs.length;
                imgs[current].classList.add("active");
            }, 4000);
        })
        .catch(() => {});
})();
