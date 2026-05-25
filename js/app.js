document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileMenu");
  if (!hamburger || !mobileNav) return;

  const mobileLinks = mobileNav.querySelectorAll(".mobile-overlay__itens");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      hamburger.classList.remove("active");
    }),
  );
});

// ===================== SISTEMA DE ABAS =====================
const tabs = [
  { id: "Cabelo",                    label: "Cabelo" },
  { id: "ManicurePedicure",          label: "Manicure & Pedicure" },
  { id: "CuidadoFacial",             label: "Cuidado Facial" },
  { id: "EsteticaFacialFuncional",   label: "Estética Facial Funcional" },
];

function showTab(activeId) {
  tabs.forEach(({ id }) => {
    const section = document.getElementById(id);
    const btn = document.querySelector(`[data-tab="${id}"]`);
    if (section) section.classList.toggle("active", id === activeId);
    if (btn)     btn.classList.toggle("active",     id === activeId);
  });
}

function initTabs() {
  // Esconde todas as seções
  tabs.forEach(({ id }) => {
    const section = document.getElementById(id);
    if (section) section.classList.remove("active");
  });

  // Lê o hash da URL ou abre a primeira aba
  const hash = window.location.hash.replace("#", "");
  const tabExists = tabs.some(({ id }) => id === hash);
  const tabToOpen = tabExists ? hash : tabs[0].id;

  showTab(tabToOpen);

  // ✅ Scroll dinâmico usando o ID correto da aba
  if (tabExists) {
    const section = document.getElementById(tabToOpen);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }
}

document.addEventListener("DOMContentLoaded", initTabs);
