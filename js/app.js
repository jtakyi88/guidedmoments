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

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Magnetic Button Effect (Jony Ive style)
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            // Calculate distance from center
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(btn, {
                x: x * 0.2, // 20% magnetic pull
                y: y * 0.2,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    // FAQ Accordion Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other open items (single-open accordion)
            faqItems.forEach(other => {
                if (other !== item && other.classList.contains('active')) {
                    other.classList.remove('active');
                    other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
            });
            // Toggle current
            item.classList.toggle('active');
            const isExpanded = item.classList.contains('active');
            question.setAttribute('aria-expanded', isExpanded);
        });
    });
});
