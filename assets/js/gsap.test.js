// Section Scroll Animations
function initSectionAnimations() {
    // About Section
    const tlAbout = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
            end: "center center",
            toggleActions: "play none none reverse"
        }
    });

    tlAbout
        .from(".about-title", {
            y: 100,
            opacity: 0,
            duration: 0.6
        })
        .from(".about-text", {
            y: 50,
            opacity: 0,
            duration: 0.6
        }, "-=0.3")
        .from(".about-image", {
            x: 100,
            opacity: 0,
            duration: 0.6
        }, "-=0.3");

    // Skills Section
    const tlSkills = gsap.timeline({
        scrollTrigger: {
            trigger: ".skills-section",
            start: "top 75%",
            end: "center center",
            toggleActions: "play none none reverse"
        }
    });

    tlSkills
        .from(".skills-title", {
            y: 50,
            opacity: 0,
            duration: 0.5
        })
        .from(".skill-item", {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1
        }, "-=0.2");

    // Projects Section
    const tlProjects = gsap.timeline({
        scrollTrigger: {
            trigger: ".projects-section",
            start: "top 70%",
            end: "center center",
            toggleActions: "play none none reverse"
        }
    });

    tlProjects
        .from(".projects-title", {
            y: 50,
            opacity: 0,
            duration: 0.5
        })
        .from(".project-card", {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2
        }, "-=0.2");

    // Contact Section
    const tlContact = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact-section",
            start: "top 80%",
            end: "center center",
            toggleActions: "play none none reverse"
        }
    });

    tlContact
        .from(".contact-title", {
            y: 50,
            opacity: 0,
            duration: 0.5
        })
        .from(".contact-form", {
            y: 30,
            opacity: 0,
            duration: 0.5
        }, "-=0.2")
        .from(".contact-info", {
            y: 30,
            opacity: 0,
            duration: 0.5
        }, "-=0.3");

    // General reveal animation for any element with .reveal class
    gsap.utils.toArray(".reveal").forEach(elem => {
        gsap.from(elem, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

// Initialize animations
window.addEventListener("load", () => {
    initSectionAnimations();
});