// ================================
// ScrollSmoother Setup
// Replaces Lenis — uses GSAP native smooth scroll
// ================================
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.4,          // smoothness factor (1 = normal, higher = more lag/butter)
    effects: true,        // enables data-speed and data-lag attributes on elements
    normalizeScroll: true // prevents mobile address bar bounce issues
});

// On page reload, always start from top
window.onbeforeunload = () => smoother.scrollTo(0, false);

// Lock scroll during preloader — unlocked in gsap.js after preloader completes
smoother.paused(true);
document.documentElement.style.overflow = "hidden";


// ================================
// Header nav — duplicate spans for hover slide effect
// ================================
const navLinks = document.querySelectorAll("header .menu ul li a");
navLinks.forEach(link => {
    const data = link.getAttribute("data-text");
    link.innerHTML = `<span>${data}</span><span>${data}</span>`;
});


// ================================
// Split Text — wraps each character in a span for GSAP letter animations
// ================================
function splitText(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        const content = el.textContent.trim();
        el.innerHTML = content
            .split("")
            .map(letter => `<span>${letter === " " ? "&nbsp;" : letter}</span>`)
            .join("");
    });
}

splitText(".btn-caption .btn-text");
splitText(".hero-content h1 .letters");


// ================================
// Hero globe rotation
// ================================
let globeDeg = 0;
const globe = document.querySelector(".globe");

function rotateGlobe() {
    globeDeg += 0.4;
    globe.style.transform = `rotate(${globeDeg}deg)`;
    requestAnimationFrame(rotateGlobe);
}
rotateGlobe();


// ================================
// Smooth Anchor Scroll
// Intercepts all href="#id" clicks and uses ScrollSmoother
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
        const href = anchor.getAttribute("href");
        if (href === "#" || href === "") return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        gsap.to(smoother, {
            scrollTop: smoother.offset(target, "top top"),
            duration: 1.2,
            ease: "power3.inOut"
        });
    });
});


// ================================
// Mobile Nav Toggle
// ================================
const hamburger      = document.getElementById("hamburger");
const mobileNav      = document.getElementById("mobileNav");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("open");
    document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
});

mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileNav.classList.remove("open");
        document.body.style.overflow = "";
        // smooth scroll handled by anchor handler above
    });
});


// ================================
// Footer — dynamic year + smooth back to top
// ================================
document.getElementById("footerYear").textContent = new Date().getFullYear();

const footerTopBtn = document.getElementById("footerTopBtn");
footerTopBtn.addEventListener("click", () => {
    gsap.to(smoother, {
        scrollTop: 0,
        duration: 1.5,
        ease: "power3.inOut"
    });
});
