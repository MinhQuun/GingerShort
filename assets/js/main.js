// Nạp header và footer bằng fetch, đảm bảo xử lý đúng đường dẫn tương đối.
const loadComponent = async (selector, filePath) => {
  const target = document.querySelector(selector);
  if (!target) {
    return null;
  }

  const baseUrl = new URL(".", window.location.href);
  const componentUrl = new URL(filePath, baseUrl).toString();

  try {
    const response = await fetch(componentUrl, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    target.innerHTML = await response.text();
    return target;
  } catch (error) {
    console.warn("Không thể tải " + filePath, error);
    return null;
  }
};

const initNav = () => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");
  if (!toggle || !menu) {
    return;
  }

  const closeMenu = () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target && event.target.matches("a")) {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) {
      closeMenu();
    }
  });
};

// Hiệu ứng reveal khi cuộn bằng IntersectionObserver.
const initScrollReveal = () => {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, current) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          current.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  items.forEach((item) => observer.observe(item));
};

const init = async () => {
  await Promise.all([
    loadComponent("header", "components/header.html"),
    loadComponent("footer", "components/footer.html"),
  ]);

  initNav();
  initScrollReveal();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
