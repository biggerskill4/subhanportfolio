// Scrolltrigger
gsap.registerPlugin(ScrollTrigger);

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


// All links Cursor Hover Effect
const links = document.querySelectorAll("a, button, .cta");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
        });
        gsap.to(cursorCircle, {
            scale: 5,
            backgroundColor: "#FFFFFF",
            duration: 0.3,
            ease: "power2.out"
        });
    });

    link.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
        });
        gsap.to(cursorCircle, {
            scale: 1,
            backgroundColor: "#00a9f2",
            duration: 0.3,
            ease: "power2.out"
        });
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
                y: -22,
                duration: 0.3,
                stagger: 0.025,
                ease: "power2.out"
            }, 0);
        });

        mm.add("(max-width: 500px)", () => {
            // Mobile screens
            tlText.to(letters, {
                y: -18,
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
        x: 30,
        y: -30,
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

// scroll
  const rail = document.querySelector(".rail");
  rail.innerHTML += rail.innerHTML; // duplicate for loop

  // Normal marquee
  const marquee = gsap.to(".rail", {
    xPercent: -50,
    repeat: -1,
    duration: 15,
    ease: "linear"
  });

  let scrollTimeout;

  // Jab user scroll kare
  window.addEventListener("scroll", () => {
    gsap.to(marquee, { timeScale: 3, duration: 0.3 }); // tez ho jae

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      gsap.to(marquee, { timeScale: 1, duration: 1 }); // normal speed wapas
    }, 200); // 200ms ke andar scroll ruk jaye to reset
  });


// Animation/
// preloader
const preloader = document.querySelector(".preloader");
const loaderSlides = preloader.querySelectorAll(".loader-slide");
const textPreloader = document.querySelector(".text-preloader p");
const percentage = document.querySelector(".percentage span");

let tlPreloader = gsap.timeline({ defaults: { ease: "power2.out" } });

tlPreloader.to(loaderSlides, {
    x: 0,
    duration: 1.5,
    delay: 0.5,
    stagger: 0.5
});

let count = { val: 0 };
tlPreloader.to(count, {
    val: 100,
    duration: 2,
    ease: "linear",
    onUpdate: () => {
        percentage.textContent = Math.floor(count.val) + "%";
    }
}, "-=2.5");

tlPreloader.to([percentage, textPreloader], {
    y: "-100%",
    opacity: 0,
    duration: 0.5,
    ease: "power2.inOut"
});

tlPreloader.to(preloader, {
    scaleY: 0,
    transformOrigin: "top",
    ease: "expo.easeInOut",
    duration: 0.5
});
// preLoader end

tlPreloader.add(startHeroAnimation);



// Hero
function startHeroAnimation() {
    const header = document.querySelectorAll("header");
    const bgHero = document.querySelectorAll(".bg-hero");
    const heroTitle = document.querySelectorAll(".hero-content h1 .letters span");
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
    }, "-0.3");

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
    }, "-=1");

    tlHero.fromTo(header, {
        y: -100,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 0.5
    }, "-=1");

    tlHero.fromTo(sideContent, {
        y: 100,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 0.5
    }, "-=1");

    tlHero.fromTo(sideBtn, {
        y: 100,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 0.5
    }, "-=1");
}

// Hero end


// Section Scroll Animations
function initSectionAnimations() {


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


    // About Section
    const tlAbout = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: "top 85%",
            end: "center center",
            toggleActions: "play none none reverse",
        }
    });

    tlAbout
        .from(".about h3", {
            y: 100,
            opacity: 0,
            duration: 0.6
        })
        .from(".about p", {
            y: 100,
            opacity: 0,
            duration: 1
        }, "-=0.6")
        .from(".about .btn", {
            y: 60,
            opacity: 0,
            duration: 1
        }, "-=0.6");

    // Counter Section
    const counters = document.querySelectorAll(".counter");

    gsap.from(".counter-section", {
        scrollTrigger: {
            trigger: ".counter-section",
            start: "top 90%",
            end: "bottom top",
            toggleActions: "play none none reverse",
        },
        duration: 1,
        opacity: 0,
        y: 50
    })

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
                end: "bottom top",
                toggleActions: "play none none reverse",
            },
            onUpdate: () => {
                counter.innerHTML =
                    Math.floor(countObj.val) +
                    (counter.querySelector("span") ? "<span>+</span>" : "");
            }
        });
    });

};

// Initialize animations
window.addEventListener("load", () => {
    initSectionAnimations();
    ScrollTrigger.refresh();
});
