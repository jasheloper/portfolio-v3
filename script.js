const links = document.querySelectorAll(".site-nav-link");

const sections = document.querySelectorAll(
  "#home, #career, #toolkit, #work, #contact"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    links.forEach((link) => {
      const active = link.getAttribute("href") === `#${entry.target.id}`;

      link.classList.toggle("active", active);

      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  });
}, {
  rootMargin: "-20% 0px -65% 0px"
});

sections.forEach((section) => observer.observe(section));