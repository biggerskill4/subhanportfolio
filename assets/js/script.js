// Create cursor element
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
const speed = 0.1; // Adjust this value for slower or faster movement

// Update target mouse position
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animate cursor movement
function animateCursor() {
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(animateCursor);
}

// Start animation loop
animateCursor();


window.onload = function () {

    gsap.registerPlugin(ScrollTrigger);

    // preloader
    const preloader = document.querySelector('#preloader');
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);

    // Gsap
    // default Slides
    // gsap.from(".leftSlide", {
    //     duration: 1,
    //     opacity: 0,
    //     x: -300,
    //     ease: "power3.out",
    // });

    // gsap.from(".rightSlide", {
    //     duration: 1,
    //     opacity: 0,
    //     x: 300,
    //     ease: "power3.out",
    // });

    // gsap.from(".bottomSlide", {
    //     duration: 1,
    //     opacity: 0,
    //     y: 200,
    //     ease: "power3.out",
    // });

    // gsap.from(".topSlide", {
    //     duration: 1,
    //     opacity: 0,
    //     y: -200,
    //     ease: "power3.out",
    // });
    // End default Slides


    // Custom Slides
    gsap.from("header .delayed", {
        duration: 1,
        opacity: 0,
        y: -200,
        delay: 2,
        ease: "power3.out",
    });

    gsap.from(".hero h1 span", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top 20%",
            end: "bottom 70%",
            toggleActions: "play reverse restart reverse",
        },
        duration: 0.5,
        opacity: 0,
        y: -100,
        color: "#C115B5",
        stagger: 0.1,
        ease: "power3.out",
    });

    gsap.from(".aboutme h2 span", {
        scrollTrigger: {
            trigger: ".aboutme",
            start: "top 35%",
            end: "bottom 0%",
            toggleActions: "play reverse restart reverse",
            // markers: true,
        },
        duration: 0.5,
        opacity: 0,
        y: -100,
        color: "#C115B5",
        stagger: 0.1,
        ease: "power3.out",
    });

    gsap.from(".hero p", {
        duration: 1.5,
        opacity: 0,
        y: 200,
        delay: 1.2,
        ease: "power3.out",
    })

    gsap.from(".hero h3", {
        duration: 1.5,
        opacity: 0,
        y: -200,
        delay: 1.2,
        ease: "power3.out",
    })
};


// Menu Toggle
const menu = document.getElementById("menuToggle");
const bars = menu.querySelectorAll(".bar");
const sideMenuBar = document.querySelector(".menubar")
let isOpen = false;

menu.addEventListener("click", () => {

    const isMobile = window.innerWidth <= 768;
    const yOffset = isMobile ? 8.5 : 10.5;

    if (!isOpen) {
        // Open: Turn into a cross
        gsap.to(bars[0], { rotate: 46, y: yOffset, duration: 0.3 });
        gsap.to(bars[1], { opacity: 0, duration: 0.2 });
        gsap.to(bars[2], { rotate: -46, y: -yOffset, duration: 0.3 });

        sideMenuBar.style.transform = "translateX(0px)";

        gsap.from(".myDetails .row", {
            duration: 0.8,
            opacity: 0,
            x: -300,
            ease: "power3.out",
            delay: 1,
        });

        gsap.from(".quickLinks .row", {
            duration: 0.8,
            opacity: 0,
            x: 300,
            ease: "power3.out",
            delay: 1,
        });

        if (!isOpen) {

        }

    } else {
        // Close: Turn back into bars
        gsap.to(bars[0], { rotate: 0, y: 0, duration: 0.3 });
        gsap.to(bars[1], { opacity: 1, duration: 0.2 });
        gsap.to(bars[2], { rotate: 0, y: 0, duration: 0.3 });

        sideMenuBar.style.transform = "translateX(-100%)";
    }
    isOpen = !isOpen;


});
// End Menu Toggle

// site logo effect
const siteLogo = document.querySelector("header .logo img");
let mainHeading = document.querySelector(".hero h1");
let mainHeadingletters = document.querySelectorAll(".hero h1 span");

siteLogo.addEventListener("mouseenter", () => {
    mainHeadingletters[0].transition = "0.3s";
    mainHeadingletters[0].style.color = "#C115B5";
    mainHeading.style.transition = "0.3s"
    mainHeading.style.transform = "scale(1.1)";
});

siteLogo.addEventListener("mouseleave", () => {
    mainHeadingletters.forEach((myHeading) => {
        myHeading.style.color = "#FFFFFF";
    });
    mainHeading.style.transform = "scale(1)";
});
// End site logo effect


