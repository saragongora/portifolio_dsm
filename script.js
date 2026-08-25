/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =====================================================
   FECHAR MENU AO CLICAR
===================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   ANIMAÇÃO DE ENTRADA
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   ANIMAÇÃO DOS CARDS
===================================================== */

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .experience-card"
);

cards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.08}s`;

});


/* =====================================================
   HEADER AO ROLAR
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 8px 30px rgba(116, 74, 91, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =====================================================
   ANO AUTOMÁTICO
===================================================== */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* =====================================================
   EFEITO SUAVE NO HERO
===================================================== */

const heroVisual = document.querySelector(".hero-visual");

if (heroVisual) {

    document.addEventListener("mousemove", (event) => {

        const x =
            (window.innerWidth / 2 - event.clientX) / 80;

        const y =
            (window.innerHeight / 2 - event.clientY) / 80;

        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


/* =====================================================
   LINK ATIVO DO MENU
===================================================== */

const sections = document.querySelectorAll("section[id]");
const menuItems = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    menuItems.forEach(item => {

        item.classList.remove("active");

        if (
            item.getAttribute("href") ===
            `#${currentSection}`
        ) {

            item.classList.add("active");

        }

    });

});