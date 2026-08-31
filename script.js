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



const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});



const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =====================================================
   MODAL DE PROJETOS
===================================================== */

const projectsData = {
    1: {
        eyebrow: "projeto de estágio",
        title: "TgApp",
        description: "Projeto de desenolvimento WEB desenvolvido no estágio supervisionado na Fatec Sorocaba em 2025. O site consiste em uma plataforma onde é possível consultar e gerenciar os projetos realizados na instituição de ensino Fatec Sorocaba",
        techs: ["HTML", "CSS", "JavaScript", "Node", "EJS", "MySQL"],
        github: "https://github.com/saragongora/tgApp",
        live: "https://tg-app-prototipo.vercel.app/index.html",
        images: [
            "img/projeto1-1.png",
            "img/projeto1-2.png",
            "img/projeto1-3.png"
        ]
    },
    2: {
        eyebrow: "projeto pessoal",
        title: "Anbie's World",
        description: "Projeto pessoal criado como presente de aniversário para minha irmã mais nova. O site consiste nos jogos preferidos da minha irmã e temático com suas coisas favoritas.",
        techs: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com/saragongora/anbies-world",
        live: "https://anbies-world.vercel.app/",
        images: [
            "img/projeto2-1.png",
            "img/projeto2-2.png"
        ]
    },
    3: {
        eyebrow: "projeto pessoal",
        title: "Dominate Tour",
        description: "Projeto focado em design e criatividade, com o objetivo de ser uma contagem regressiva para o show da banda Stray Kids que aconteceu no Brasil em 2025.",
        techs: ["HTML", "CSS"],
        github: "https://github.com/saragongora/dominATE_site",
        live: "https://dominate-tour-brasil-git-main-saragongoras-projects.vercel.app/",
        images: [
            "img/projeto3-1.png",
            "img/projeto3-2.png",
            "img/projeto3-3.png"
        ]
    }
};

const modal = document.getElementById("project-modal");
const modalOverlay = document.getElementById("project-modal-overlay");
const modalClose = document.getElementById("project-modal-close");

const modalEyebrow = document.getElementById("modal-eyebrow");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTechs = document.getElementById("modal-techs");
const modalGithub = document.getElementById("modal-github");
const modalLive = document.getElementById("modal-live");

const galleryImage = document.getElementById("gallery-image");
const galleryCounter = document.getElementById("gallery-counter");
const galleryPrev = document.getElementById("gallery-prev");
const galleryNext = document.getElementById("gallery-next");

let currentImages = [];
let currentImageIndex = 0;

function updateGalleryImage() {

    galleryImage.src = currentImages[currentImageIndex];
    galleryImage.alt = `${modalTitle.textContent} — imagem ${currentImageIndex + 1}`;

    galleryCounter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;

    const hasMultiple = currentImages.length > 1;
    galleryPrev.style.display = hasMultiple ? "grid" : "none";
    galleryNext.style.display = hasMultiple ? "grid" : "none";
    galleryCounter.style.display = hasMultiple ? "block" : "none";
}

function openProjectModal(id) {

    const data = projectsData[id];
    if (!data) return;

    modalEyebrow.textContent = data.eyebrow;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;

    modalTechs.innerHTML = "";
    data.techs.forEach(tech => {
        const span = document.createElement("span");
        span.textContent = tech;
        modalTechs.appendChild(span);
    });

    modalGithub.href = data.github;
    modalLive.href = data.live;

    currentImages = data.images;
    currentImageIndex = 0;
    updateGalleryImage();

    modal.classList.add("active");
    document.body.classList.add("modal-open");
}

function closeProjectModal() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}

document.querySelectorAll(".project-trigger").forEach(card => {

    card.addEventListener("click", () => {
        openProjectModal(card.dataset.project);
    });

    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openProjectModal(card.dataset.project);
        }
    });

});

modalOverlay.addEventListener("click", closeProjectModal);
modalClose.addEventListener("click", closeProjectModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
        closeProjectModal();
    }
});

galleryPrev.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    updateGalleryImage();
});

galleryNext.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    updateGalleryImage();
});