// Cursor
const cursor = document.querySelector(".custom-cursor");
const cursorCircle = document.querySelector(".custom-cursor-circle");

window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power2.out"
    });
});

window.addEventListener("mousemove", (e) => {
    gsap.to(cursorCircle, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out"
    });
});


// My Button gsap
const cta = document.querySelectorAll(".cta");

cta.forEach((btn) => {
    const btnTexts = btn.querySelectorAll(".btn-caption .btn-text");

    // Button Text
    const tlText = gsap.timeline({ paused: true });
    let mm = gsap.matchMedia();

    btnTexts.forEach(text => {
        const letters = text.querySelectorAll("span");
        mm.add("(min-width: 501px)", () => {
            tlText.to(letters, {
                y: -23,
                duration: 0.3,
                stagger: 0.025,
                ease: "power2.out"
            }, 0);
        });

    mm.add("(max-width: 500px)", () => {
        // Mobile screens
            tlText.to(letters, {
                y: -19,
                duration: 0.3,
                stagger: 0.025,
                ease: "power2.out"
            }, 0);
        });
    });

    // Arrow
    const arrow = btn.querySelectorAll(".btn-arrow");
    const tlArrow = gsap.timeline({ paused: true });
    tlArrow.to(arrow, {
        x: 20,
        y: -20,
        rotate: -45,
        opacity: 1,
        duration: 0.2,
        ease: "power2.in"
    })

    btn.addEventListener("mouseenter", () => {
        tlText.play();
        tlArrow.restart();
    });
    btn.addEventListener("mouseleave", () => {
        tlText.reverse();
        tlArrow.reverse();
    });
});

const ctaTwo = document.querySelectorAll(".side-btn svg");
gsap.to(ctaTwo, {
    rotation: 360,
    transformOrigin: "50% 50%",
    repeat: -1,
    duration: 20,
    ease: "linear"
});

// My Button gsap end


// Animation/
// preloader
const preloader = document.querySelector(".preloader");
const loaderSlides = preloader.querySelectorAll(".loader-slide");
const textPreloader = document.querySelector(".text-preloader p");
const percentage = document.querySelector(".percentage span");

let tl = gsap.timeline({ defaults: { ease: "power2.out" } });

tl.to(loaderSlides, {
    x: 0,
    duration: 1.5,
    delay: 0.5,
    stagger: 0.5
});

let count = { val: 0 };
tl.to(count, {
    val: 100,
    duration: 2,
    ease: "linear",
    onUpdate: () => {
        percentage.textContent = Math.floor(count.val) + "%";
    }
}, "-=2.5");

tl.to([percentage, textPreloader], {
    y: "-100%",
    opacity: 0,
    duration: 0.5,
    ease: "power2.inOut"
});

tl.to(preloader, {
    scaleY: 0,
    transformOrigin: "top",
    ease: "expo.easeInOut",
    duration: 0.5
});
// preLoader end

tl.add(startHeroAnimation);



// Hero
function startHeroAnimation() {
    const header = document.querySelectorAll("header");
    const bgHero = document.querySelectorAll(".bg-hero");
    const heroTitle = document.querySelectorAll(".hero-content h1 span");
    const sideContent = document.querySelector(".side-content");
    const sideBtn = document.querySelector(".side-btn");

    let tlHero = gsap.timeline({ defaults: { ease: "expo.easeInOut" } });

    tlHero.to(cursor, {
        opacity: 1,
        duration: 0.3,
    });
    tlHero.to(cursorCircle, {
        opacity: 1,
        duration: 0.3,
    });
    tlHero.fromTo(heroTitle, {
        y: -150,
        opacity: 0,
        color: "#00a9f2"
    }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        color: "#FFFFFF"
    }, "-=0.3");

    tlHero.fromTo(bgHero, {
        opacity: 0,
        scale: 0,
    }, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        left: "50%",
        top: "50%"
    }, "-=0.5");

    tlHero.fromTo(header, {
        y: -100,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 0.5
    }, "-=0.5");

    tlHero.fromTo(sideContent, {
        y: 100,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 0.5
    }, "-=0.5");

    tlHero.fromTo(sideBtn, {
        y: 100,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 0.5
    }, "-=0.5");
}

// Hero end


// Scrolltrigger

gsap.registerPlugin(ScrollTrigger);

gsap.to(".logo img", {  
  width: "150px",    
  transformOrigin: "center center",
  ease: "power1.out",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "200px top",
    scrub: true
  }
});


gsap.to(".hero", {
  y: "50%",
  scale: 0.8,
  filter: "blur(5px)",
  opacity: 0.2,
  ease: "none",
  scrollTrigger: {
    trigger: ".image-wrap",
    start: "top bottom",   
    end: "bottom top",     
    scrub: true
  }
});

gsap.to(".image-wrap .container img", {
  y: "-20%",
  ease: "none",
  scrollTrigger: {
    trigger: ".image-wrap",
    start: "top bottom",   
    end: "bottom top",     
    scrub: true
  }
});