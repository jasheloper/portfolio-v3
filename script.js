
const links = document.querySelectorAll(".site-nav-link");
const sections = document.querySelectorAll(
  "#home, #career, #toolkit, #work, #contact"
);

function updateActiveNav() {
  const atBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2;

  let activeId = "home";

  if (atBottom) {
    activeId = "contact";
  } else {
    const detectionLine = window.innerHeight * 0.35;

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= detectionLine) {
        activeId = section.id;
      }
    });
  }

  links.forEach((link) => {
    const active = link.getAttribute("href") === `#${activeId}`;

    link.classList.toggle("active", active);

    if (active) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("resize", updateActiveNav);
updateActiveNav();
