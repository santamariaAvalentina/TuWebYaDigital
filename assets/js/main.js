/* Interacciones pequeñas y accesibles de TuWebYa */
(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // IMPORTANTE: reemplazá el número de ejemplo en assets/js/config.js.
  const configScript = document.querySelector('script[data-whatsapp-config]');
  const whatsappNumber = configScript?.dataset.number || "";
  const defaultMessage = "Hola TuWebYa, quiero consultar por una página web.";

  if (whatsappNumber) {
    document.querySelectorAll("[data-whatsapp]").forEach((link) => {
      const service = link.dataset.service;
      const message = service
        ? `Hola TuWebYa, quiero consultar por ${service}.`
        : defaultMessage;
      link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  }
  
})();
