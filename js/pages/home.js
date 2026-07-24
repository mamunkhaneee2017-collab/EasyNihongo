/* ==========================================
   HOMEPAGE — HERO PHOTO CAROUSEL
   Slides right -> left through whichever photo
   set applies: admin-managed photos (Hero Photos
   section in the admin panel) if any are active,
   otherwise the static photos already in
   index.html.
========================================== */

(function () {
    const container = document.getElementById("heroImageContainer");
    if (!container) return;

    const SLIDE_INTERVAL_MS = 4000;
    const SLIDE_TRANSITION_MS = 900;

    function startSlider(slides) {
        if (slides.length < 2) return;

        let current = slides.findIndex((img) => img.classList.contains("active"));
        if (current === -1) current = 0;

        setInterval(() => {
            const next = (current + 1) % slides.length;
            const leaving = slides[current];
            const entering = slides[next];

            leaving.classList.remove("active");
            leaving.classList.add("leaving");
            entering.classList.add("active");

            // Once the leaving photo has finished sliding off to the left,
            // snap it (no transition) back to its off-right waiting spot
            // so it's ready to slide in again on a later lap.
            setTimeout(() => {
                leaving.style.transition = "none";
                leaving.classList.remove("leaving");
                void leaving.offsetWidth;
                leaving.style.transition = "";
            }, SLIDE_TRANSITION_MS);

            current = next;
        }, SLIDE_INTERVAL_MS);
    }

    const staticSlides = Array.from(container.querySelectorAll(".hero-photo"));

    fetch("/api/hero-photos")
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
            const photos = data && Array.isArray(data.photos) ? data.photos : [];
            if (!photos.length) {
                startSlider(staticSlides);
                return;
            }

            staticSlides.forEach((img) => {
                img.classList.remove("active");
                img.hidden = true;
            });

            const adminSlides = photos.map((photo, index) => {
                const img = document.createElement("img");
                img.src = photo.imagePath;
                img.alt = "Easy Nihongo student photo";
                img.className = `hero-photo shape-${photo.shape}${index === 0 ? " active" : ""}`;
                container.appendChild(img);
                return img;
            });

            startSlider(adminSlides);
        })
        .catch(() => {
            startSlider(staticSlides);
        });
})();
