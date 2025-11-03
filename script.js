const translations = {
  es: {
    nombre: "Joshua Brion",
    perfil: "Estudiante IT • Front-End / Desarrollo Web",
    nav_proyectos: "Proyectos",
    nav_habilidades: "Habilidades",
    nav_sobre: "Sobre mí",
    nav_contacto: "Contacto / CV",
    hero_titulo: "Desarrollador Web en formación",
    hero_desc: "Me especializo en HTML, CSS y bases de datos. Busco estancias profesionales para crear soluciones web accesibles y responsivas.",
    hero_detalle: "Estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital.",
    btn_ver_proyectos: "Ver proyectos",
    btn_cv: "Descargar CV",
    proyectos_titulo: "Proyectos principales",
    proyectos_intro: "Mínimo 2 proyectos — descripción, tecnologías y enlace.",
    p1_titulo: "Clon del inicio de Spotify",
    p1_desc: "Replica del inicio de Spotify usando Flexbox y Grid. Responsive. Trabajo académico.",
    p2_titulo: "SIREPLAC SN — BD y CRUD",
    p2_desc: "Sistema con MySQL Workbench para gestión — CRUD y consultas. Proyecto de base de datos.",
    tecnologias: "Tecnologías:",
    btn_demo: "Ver demo",
    btn_codigo: "Código (GitHub)",
    hab_titulo: "Habilidades técnicas",
    hab_front: "Frontend",
    hab_back: "Base de datos / Backend",
    hab_herr: "Herramientas",
    sobre_titulo: "Sobre mí / Formación",
    sobre_desc: "Soy estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital en la Universidad Politécnica de Sinaloa. Me considero responsable y autodidacta.",
    form_titulo: "Formación",
    idiomas_titulo: "Idiomas",
    cert_titulo: "Certificaciones",
    cert_desc: "Agrega aquí imágenes o enlaces a certificaciones.",
    contacto_titulo: "Contacto",
    contacto_desc: "¿Quieres contactarme o ver mi CV? Descárgalo o envíame un correo.",
    btn_email: "Enviar correo",
  },
  en: {
    nombre: "Joshua Brion",
    perfil: "IT Student • Front-End / Web Development",
    nav_proyectos: "Projects",
    nav_habilidades: "Skills",
    nav_sobre: "About me",
    nav_contacto: "Contact / Resume",
    hero_titulo: "Web Developer in training",
    hero_desc: "I specialize in HTML, CSS, and databases. Seeking internships to build accessible and responsive web solutions.",
    hero_detalle: "IT Engineering student focused on software and digital innovation.",
    btn_ver_proyectos: "View projects",
    btn_cv: "Download Resume",
    proyectos_titulo: "Main Projects",
    proyectos_intro: "At least 2 projects — description, technologies, and link.",
    p1_titulo: "Spotify Homepage Clone",
    p1_desc: "Clone of Spotify's homepage using Flexbox and Grid. Fully responsive. Academic project.",
    p2_titulo: "SIREPLAC SN — DB & CRUD",
    p2_desc: "Management system built with MySQL Workbench — CRUD and query operations. Database project.",
    tecnologias: "Technologies:",
    btn_demo: "View demo",
    btn_codigo: "Code (GitHub)",
    hab_titulo: "Technical Skills",
    hab_front: "Frontend",
    hab_back: "Database / Backend",
    hab_herr: "Tools",
    sobre_titulo: "About me / Education",
    sobre_desc: "I am a student of IT Engineering at Universidad Politécnica de Sinaloa. Responsible and self-taught.",
    form_titulo: "Education",
    idiomas_titulo: "Languages",
    cert_titulo: "Certifications",
    cert_desc: "Add here images or links to certifications.",
    contacto_titulo: "Contact",
    contacto_desc: "Want to reach me or see my resume? Download it or send me an email.",
    btn_email: "Send Email",
  }
};

let currentLang = "es";
const toggleBtn = document.getElementById("langToggle");

function setLanguage(lang) {
  const texts = document.querySelectorAll("[data-i18n]");
  texts.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
  toggleBtn.textContent = lang === "es" ? "EN" : "ES";
  document.documentElement.lang = lang;
  currentLang = lang;
}

toggleBtn.addEventListener("click", () => {
  setLanguage(currentLang === "es" ? "en" : "es");
});

// iniciar en español
setLanguage("es");


// ==== MENÚ DESPLEGABLE ====
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("show");
});

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("show");
  });
});

