/*
  Guided Moments - Interaction Design
  Using GSAP for premium, buttery-smooth Jony Ive style micro-animations.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hero Animations
    const heroTl = gsap.timeline();
    heroTl.fromTo('.hero-title', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
    )
    .fromTo('.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
    )
    .fromTo('.hero .btn-primary',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.6"
    );

    // Scroll Animations for sections
    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    
    fadeElements.forEach((el) => {
        gsap.fromTo(el,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%", // trigger when element is 85% down viewport
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Subtle parallax on the abstract philosophy shape
    gsap.to('.abstract-shape', {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: '.philosophy',
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});
