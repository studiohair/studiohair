document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileMenu");

  if (!hamburger || !mobileNav) return;

  const mobileLinks = mobileNav.querySelectorAll(".mobile-overlay__itens");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active"); // ✅ bate com o CSS
    hamburger.classList.toggle("active"); // ✅ anima o ícone hambúrguer
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
  { id: "Cabelo", label: "Cabelo" },
  { id: "ManicurePedicure", label: "Manicure & Pedicure" },
  { id: "EmbelezamentoFacial", label: "Embelezamento Facial" },
  { id: "EsteticaFacialFuncional", label: "Estética Facial Funcional" },
];

function showTab(activeId) {
  tabs.forEach(({ id }) => {
    const section = document.getElementById(id);
    const btn = document.querySelector(`[data-tab="${id}"]`);

    if (section) section.classList.toggle("active", id === activeId);
    if (btn) btn.classList.toggle("active", id === activeId);
  });
}

function initTabs() {
  // Esconde todas as seções no início
  tabs.forEach(({ id }) => {
    const section = document.getElementById(id);
    if (section) section.classList.remove("active");
  });

  // Abre a primeira aba por padrão
  showTab(tabs[0].id);
}

function initTabs() {
  tabs.forEach(({ id }) => {
    const section = document.getElementById(id);
    if (section) section.classList.remove("active");
  });

  // Lê o hash da URL (ex: #ManicurePedicure) ou abre o primeiro por padrão
  const hash = window.location.hash.replace("#", "");
  const tabExists = tabs.some(({ id }) => id === hash);

  const tabToOpen = tabExists ? hash : tabs[0].id;
  showTab(tabToOpen);

  // Rola até a seção se veio de outra página
  if (tabExists) {
    const section = document.getElementById("manicure");
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100); // pequeno delay para garantir que a página carregou
    }
  }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", initTabs);
