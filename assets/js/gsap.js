// ================================
// Cursor
// ================================
const cursor = document.querySelector(".custom-cursor");
const cursorCircle = document.querySelector(".custom-cursor-circle");

window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.8, ease: "power2.out" });
});
window.addEventListener("mousemove", (e) => {
    gsap.to(cursorCircle, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power2.out" });
});

const links = document.querySelectorAll("a, button, .cta, .project");
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        gsap.to(cursor, { opacity: 0, duration: 0.3, ease: "power2.out" });
        gsap.to(cursorCircle, { scale: 5, backgroundColor: "#FFFFFF", duration: 0.3, ease: "power2.out" });
    });
    link.addEventListener("mouseleave", () => {
        gsap.to(cursor, { opacity: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(cursorCircle, { scale: 1, backgroundColor: "#00a9f2", duration: 0.3, ease: "power2.out" });
    });
});


// ==========================
// Button Hover Effect
// ==========================
const cta = document.querySelectorAll(".cta");
cta.forEach((btn) => {
    const btnTexts = btn.querySelectorAll(".btn-caption .btn-text");
    const tlText = gsap.timeline({ paused: true });
    let mm = gsap.matchMedia();

    btnTexts.forEach(text => {
        const letters = text.querySelectorAll("span");
        mm.add("(min-width: 501px)", () => {
            tlText.to(letters, { y: -21, duration: 0.3, stagger: 0.025, ease: "power2.out" }, 0);
        });
        mm.add("(max-width: 500px)", () => {
            tlText.to(letters, { y: -18, duration: 0.3, stagger: 0.025, ease: "power2.out" }, 0);
        });
    });

    const arrow = btn.querySelectorAll(".btn-arrow");
    const tlArrow = gsap.timeline({ paused: true });
    tlArrow.to(arrow, { x: 30, y: -30, rotate: -45, opacity: 1, duration: 0.2, ease: "power2.in" });

    btn.addEventListener("mouseenter", () => { tlText.play(); tlArrow.restart(); });
    btn.addEventListener("mouseleave", () => { tlText.reverse(); tlArrow.reverse(); });
});

const ctaTwo = document.querySelectorAll(".side-btn svg");
gsap.to(ctaTwo, { rotation: 360, transformOrigin: "50% 50%", repeat: -1, duration: 20, ease: "linear" });


// ==========================
// Popup
// ==========================
const popup = document.getElementById("popup");
const popupForm = document.querySelector(".popup-content");
const closePopupBtn = document.querySelector(".close-popup");
const openBtn = document.querySelectorAll(".open-popup");

gsap.set(popup, { autoAlpha: 0 });
gsap.set(popupForm, { y: 50, autoAlpha: 0, scale: 0.96 });

openBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(popup, { autoAlpha: 1, duration: 0.35, ease: "power3.out" });
        gsap.to(popupForm, { y: 0, autoAlpha: 1, scale: 1, duration: 0.5, ease: "expo.out" });
    });
});

function closePopupAnim() {
    gsap.to(popupForm, {
        y: -40, autoAlpha: 0, scale: 0.97, duration: 0.35, ease: "power3.in",
        onComplete: () => { gsap.set(popupForm, { y: 50, scale: 0.96 }); }
    });
    gsap.to(popup, { autoAlpha: 0, duration: 0.3, ease: "power2.in" });
}
closePopupBtn.addEventListener("click", closePopupAnim);
popup.addEventListener("click", (e) => { if (e.target === popup) closePopupAnim(); });


// ==========================
// Marquee Animation
// ==========================
const rail = document.querySelector(".rail");
rail.innerHTML += rail.innerHTML;

const marquee = gsap.to(".rail", { xPercent: -50, repeat: -1, duration: 15, ease: "linear" });

let scrollTimeout;
window.addEventListener("scroll", () => {
    gsap.to(marquee, { timeScale: 3, duration: 0.3 });
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        gsap.to(marquee, { timeScale: 1, duration: 0.3 });
    }, 300);
});


// ==========================
// Preloader Animation
// ==========================
const preloader   = document.getElementById("preloader");
const preLines    = document.querySelectorAll(".pre-line");
const preTop      = document.querySelector(".pre-top");
const preStatus   = document.querySelector(".pre-status");
const preWord     = document.getElementById("preWord");
const preWordSub  = document.getElementById("preWordSub");
const preBottom   = document.querySelector(".pre-bottom");
const preBarFill  = document.getElementById("preBarFill");
const preCount    = document.getElementById("preCount");
const preCurtain  = document.getElementById("preCurtain");

// Force scroll to top on any refresh
window.scrollTo(0, 0);
if (typeof smoother !== "undefined") smoother.scrollTo(0, false);

// Word pairs that cycle during loading — first=main, second=ghost outline
const wordPairs = [
    ["DESIGN",   "DEVELOP"],
    ["CRAFT",    "CREATE"],
    ["BUILD",    "LAUNCH"],
    ["SUBHAN",   "AHMED"],
];

// Pad number to 3 digits e.g. 7 → "007"
function padCount(n) {
    return String(n).padStart(3, "0");
}

// Swap the big center words — uses px so animation is not affected by parent height changes
function swapWords(mainText, subText) {
    // Get actual rendered height of the word for exact pixel movement
    const h = preWord.offsetHeight;
    const tl = gsap.timeline();

    // Slide current words up and out
    tl.to(preWord, {
        y: -(h * 1.2),
        duration: 0.45,
        ease: "power3.in"
    });
    tl.to(preWordSub, {
        y: -(h * 1.2),
        duration: 0.45,
        ease: "power3.in"
    }, "<0.06");

    // Swap text content and reposition below clip boundary
    tl.call(() => {
        preWord.textContent    = mainText;
        preWordSub.textContent = subText;
        gsap.set(preWord,    { y: h * 1.2 });
        gsap.set(preWordSub, { y: h * 1.2 });
    });

    // Slide new words up into view
    tl.to(preWord, {
        y: 0,
        duration: 0.55,
        ease: "power3.out"
    });
    tl.to(preWordSub, {
        y: 0,
        duration: 0.55,
        ease: "power3.out"
    }, "<0.07");
}

// Status text cycling
const statusMessages = ["Loading assets...", "Building layout...", "Almost ready...", "Done."];

// Master preloader timeline
const tlPre = gsap.timeline({
    onComplete: () => {
        smoother.paused(false);
        document.documentElement.style.overflow = "";
        ScrollTrigger.refresh();
        startHeroAnimation();
    }
});

// Step 1 — Grid lines drop down from top
tlPre.to(preLines, {
    scaleY: 1,
    duration: 0.8,
    stagger: 0.08,
    ease: "power2.out",
    delay: 0.1
});

// Step 2 — Top bar and bottom slide in simultaneously
tlPre.to([preTop, preBottom], {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out"
}, "-=0.4");

// Step 3 — First word pair slides up from below using px for precision
tlPre.call(() => {
    const h = preWord.offsetHeight;
    gsap.set(preWord,    { y: h * 1.2 });
    gsap.set(preWordSub, { y: h * 1.2 });
});
tlPre.to(preWord, {
    y: 0,
    duration: 0.7,
    ease: "power3.out"
}, "-=0.2");
tlPre.to(preWordSub, {
    y: 0,
    duration: 0.7,
    ease: "power3.out"
}, "<0.1");

// Step 4 — Progress bar fills while words cycle and counter ticks
let progress = { val: 0 };
let wordIndex = 0;
let statusIndex = 0;

// Schedule word swaps evenly — each pair gets ~1 second of visibility
// At duration 4s: swap at 25%=1s, 50%=2s, 75%=3s, last pair visible from 3s to 4s
const swapPoints = [25, 50, 75];
let swapTriggered = [false, false, false];

tlPre.to(progress, {
    val: 100,
    duration: 4,
    ease: "none",
    onUpdate: () => {
        const v = Math.floor(progress.val);

        // Update bar width and counter
        preBarFill.style.width = v + "%";
        preCount.textContent   = padCount(v);

        // Trigger word swaps at specific progress points
        swapPoints.forEach((point, i) => {
            if (!swapTriggered[i] && v >= point) {
                swapTriggered[i] = true;
                wordIndex = i + 1;
                swapWords(wordPairs[wordIndex][0], wordPairs[wordIndex][1]);

                // Update status text
                statusIndex++;
                if (statusIndex < statusMessages.length) {
                    gsap.to(preStatus, {
                        opacity: 0, duration: 0.15,
                        onComplete: () => {
                            preStatus.textContent = statusMessages[statusIndex];
                            gsap.to(preStatus, { opacity: 1, duration: 0.15 });
                        }
                    });
                }
            }
        });
    }
}, "-=0.1");

// Hold the last pair (SUBHAN / AHMED) visible for 0.6s before exiting
tlPre.to({}, { duration: 0.6 });

// Step 5 — Content exit: words slide out upward using px
tlPre.call(() => {
    const h = preWord.offsetHeight;
    gsap.to(preWord,    { y: -(h * 1.2), duration: 0.5, ease: "power3.in" });
    gsap.to(preWordSub, { y: -(h * 1.2), duration: 0.5, ease: "power3.in", delay: 0.06 });
}, null, "+=0.15");

// Fade out top bar, bottom bar, and grid lines together
tlPre.to([preTop, preBottom, preLines], {
    opacity: 0,
    duration: 0.35,
    ease: "power2.in"
}, "<");

// Step 6 — Blue curtain flashes up from bottom (brand color wipe)
tlPre.to(preCurtain, {
    y: "0%",
    duration: 0.45,
    ease: "expo.in"
}, "-=0.1");

// Step 7 — Curtain exits upward revealing the hero
tlPre.to(preCurtain, {
    y: "-100%",
    duration: 0.6,
    ease: "expo.out",
    onComplete: () => {
        preloader.style.display = "none";
    }
});


// ==========================
// Hero Animation
// ==========================
function startHeroAnimation() {
    const header      = document.querySelectorAll("header");
    const bgHero      = document.querySelectorAll(".bg-hero");
    const heroTitle   = document.querySelectorAll(".hero-content h1 .letters span");
    const sideContent = document.querySelector(".side-content");
    const sideBtn     = document.querySelector(".side-btn");

    // Set all hero elements to their "from" state before animating
    // This prevents a visible flash on mid-page refresh
    gsap.set(heroTitle,   { y: -150, opacity: 0, color: "#00a9f2" });
    gsap.set(bgHero,      { opacity: 0, scale: 0 });
    gsap.set(header,      { y: -100, opacity: 0 });
    gsap.set(sideContent, { y: 100, opacity: 0 });
    gsap.set(sideBtn,     { y: 100, opacity: 0 });

    let tlHero = gsap.timeline({ defaults: { ease: "expo.out" } });

    tlHero.to(cursor,       { opacity: 1, duration: 0.3 });
    tlHero.to(cursorCircle, { opacity: 1, duration: 0.3 }, "<");

    tlHero.to(heroTitle,   { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, color: "#FFFFFF" }, "-=0.1");
    tlHero.to(bgHero,      { opacity: 1, scale: 1, duration: 0.6 }, "-=0.8");
    tlHero.to(header,      { y: 0, opacity: 1, duration: 0.5 }, "-=0.8");
    tlHero.to(sideContent, { y: 0, opacity: 1, duration: 0.5 }, "-=0.6");
    tlHero.to(sideBtn,     { y: 0, opacity: 1, duration: 0.5 }, "-=0.4");
}


// ==========================
// Section Animations
// ==========================
function initSectionAnimations() {

    // Parallax scroll image
    gsap.to("img.scrollImg", {
        y: "-20%",
        ease: "none",
        scrollTrigger: {
            trigger: ".image-wrap",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // ================================
    // About Section Animations
    // ================================
    gsap.from(".about-heading", {
        y: 60, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".about", start: "top 80%" }
    });

    gsap.from(".about-actions", {
        y: 30, opacity: 0, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: ".about-actions", start: "top 88%" }
    });

    gsap.from(".about-desc", {
        y: 40, opacity: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".about-right", start: "top 85%" }
    });

    gsap.from(".about-stack span", {
        y: 20, opacity: 0, duration: 0.4, stagger: 0.05, ease: "power2.out",
        scrollTrigger: { trigger: ".about-stack", start: "top 90%" }
    });

    // Counter Section
    const counters = document.querySelectorAll(".counter");
    gsap.from(".counter-section", {
        scrollTrigger: {
            trigger: ".counter-section",
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
        duration: 1.5,
        opacity: 0,
        scale: 1.2,
        ease: "power2.out"
    });

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let countObj = { val: 0 };
        gsap.to(countObj, {
            val: target,
            duration: 3,
            ease: "power1.out",
            scrollTrigger: {
                trigger: counter,
                start: "top 95%",
                toggleActions: "play none none reverse",
            },
            onUpdate: () => {
                counter.innerHTML =
                    Math.floor(countObj.val) +
                    (counter.querySelector("span") ? "<span>+</span>" : "");
            }
        });
    });


    // ================================
    // Projects — Stacked Card Reveal
    // ================================
    const prjCards = document.querySelectorAll(".prj-card");

    // Header animate in
    gsap.from(".prj-header-left h2", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".project-section",
            start: "top 85%",
        }
    });
    gsap.from(".prj-header-right", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".project-section",
            start: "top 85%",
        }
    });

    // Each card slides up on scroll
    prjCards.forEach((card, i) => {
        gsap.from(card, {
            y: 60,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
            },
            delay: i * 0.05
        });
    });

    // ================================
    // Services Section Animations
    // ================================
    gsap.from(".svc-label", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".services-section",
            start: "top 85%",
        }
    });

    gsap.from(".svc-heading", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".services-section",
            start: "top 85%",
        }
    });

    gsap.from(".svc-header-top .cta", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".services-section",
            start: "top 85%",
        }
    });

    // Cards stagger in
    gsap.from(".svc-card", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".svc-grid",
            start: "top 85%",
        }
    });

    // ================================
    // Contact Section Animations
    // ================================
    gsap.from(".contact-tag", {
        y: 30, opacity: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-section", start: "top 85%" }
    });

    gsap.from(".ch-line", {
        y: 100, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-heading", start: "top 90%" }
    });

    gsap.from(".contact-desc", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-body", start: "top 85%" }
    });

    gsap.from(".contact-detail-item", {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-details", start: "top 88%" }
    });

    gsap.from(".contact-availability", {
        y: 20, opacity: 0, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".contact-availability", start: "top 92%" }
    });

    gsap.from(".contact-form-wrap", {
        y: 60, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-form-wrap", start: "top 85%" }
    });

    // ================================
    // Footer Animations
    // ================================
    gsap.from(".footer-top", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".site-footer", start: "top 90%" }
    });

    gsap.from(".footer-watermark", {
        opacity: 0, duration: 1.2, ease: "power2.out",
        scrollTrigger: { trigger: ".footer-watermark", start: "top 95%" }
    });

    gsap.from(".footer-bottom", {
        y: 20, opacity: 0, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ".footer-bottom", start: "top 98%" }
    });
}

// Initialize on load
window.addEventListener("load", () => {
    initSectionAnimations();
    initMagnetic();
    ScrollTrigger.refresh();
});


// ================================
// Magnetic Effect
// Applied on: CTA buttons, side-btn, footer social icons
// On mousemove — element pulls toward cursor slightly
// On mouseleave — elastic bounce back to original position
// ================================
function initMagnetic() {
    const magnets = document.querySelectorAll(".side-btn, .footer-socials a");

    magnets.forEach(el => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const cx   = rect.left + rect.width  / 2;
            const cy   = rect.top  + rect.height / 2;
            const dx   = (e.clientX - cx) * 0.4;
            const dy   = (e.clientY - cy) * 0.4;
            gsap.to(el, {
                x: dx,
                y: dy,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        el.addEventListener("mouseleave", () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.4)"
            });
        });
    });

    // Softer magnetic on CTA buttons — just a nudge
    document.querySelectorAll(".cta").forEach(el => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const cx   = rect.left + rect.width  / 2;
            const cy   = rect.top  + rect.height / 2;
            const dx   = (e.clientX - cx) * 0.18;
            const dy   = (e.clientY - cy) * 0.18;
            gsap.to(el, {
                x: dx,
                y: dy,
                duration: 0.4,
                ease: "power2.out"
            });
        });

        el.addEventListener("mouseleave", () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.5)"
            });
        });
    });
}
