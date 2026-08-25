/* =========================================================
   KAVYA VITHARANA — PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section, .skill-card, .project, .timeline-item, .cert-card, .education-card, .contact"
    );

    revealElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(35px)";
        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* =====================================================
       HERO MOUSE MOVEMENT
       ===================================================== */

    const heroVisual = document.querySelector(".hero-visual");

    if (heroVisual && window.innerWidth > 800) {

        heroVisual.addEventListener("mousemove", (event) => {

            const rect = heroVisual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            heroVisual.style.transform =
                `perspective(800px)
                 rotateY(${x * 8}deg)
                 rotateX(${-y * 8}deg)`;
        });


        heroVisual.addEventListener("mouseleave", () => {

            heroVisual.style.transform =
                "perspective(800px) rotateY(0deg) rotateX(0deg)";
        });

    }


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const navObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                    });

                    const activeLink =
                        document.querySelector(
                            `.nav-links a[href="#${entry.target.id}"]`
                        );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }
                }

            });

        },
        {
            threshold: 0.45
        }
    );

    sections.forEach((section) => {
        navObserver.observe(section);
    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElement =
        document.querySelector("footer span:last-child");

    if (yearElement) {

        yearElement.textContent =
            `© ${new Date().getFullYear()} • DIGITAL PORTFOLIO`;

    }


    /* =====================================================
       MAGNETIC BUTTON EFFECT
       ===================================================== */

    const buttons =
        document.querySelectorAll(".button, .nav-button");

    buttons.forEach((button) => {

        button.addEventListener("mousemove", (event) => {

            if (window.innerWidth <= 800) return;

            const rect = button.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left -
                rect.width / 2;

            const y =
                event.clientY -
                rect.top -
                rect.height / 2;

            button.style.transform =
                `translate(${x * 0.08}px, ${y * 0.08}px)`;

        });


        button.addEventListener("mouseleave", () => {

            button.style.transform =
                "translate(0, 0)";

        });

    });


    /* =====================================================
       PROJECT CARD TILT
       ===================================================== */

    const cards =
        document.querySelectorAll(".skill-card, .cert-card");

    cards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            if (window.innerWidth <= 800) return;

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -5;

            const rotateY =
                ((x / rect.width) - 0.5) * 5;

            card.style.transform =
                `perspective(600px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(600px) rotateX(0) rotateY(0) translateY(0)";

        });

    });


    /* =====================================================
       CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "%cKavya Vitharana — Portfolio",
        "font-size: 18px; font-weight: bold;"
    );

    console.log(
        "Business • Data • Digital"
    );

});
