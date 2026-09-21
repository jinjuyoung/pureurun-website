// =====================================
// HEADER SCROLL
// =====================================

const header = document.getElementById("header");

function updateHeader() {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeader);

updateHeader();


// =====================================
// MOBILE MENU
// =====================================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

  menuButton.addEventListener("click", () => {

    const isOpen =
      mobileMenu.classList.toggle("open");

    menuButton.classList.toggle(
      "active",
      isOpen
    );

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    document.body.classList.toggle(
      "menu-open",
      isOpen
    );

  });


  const mobileMenuLinks =
    mobileMenu.querySelectorAll("a");

  mobileMenuLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("open");

      menuButton.classList.remove("active");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.classList.remove(
        "menu-open"
      );

    });

  });

}


// =====================================
// SCROLL REVEAL
// =====================================

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          revealObserver.unobserve(
            entry.target
          );

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


// =====================================
// PROJECT TOGGLE
// =====================================

const projectToggle =
  document.getElementById("projectToggle");

const projectContent =
  document.getElementById("projectContent");


if (projectToggle && projectContent) {

  const projectToggleLabel =
    projectToggle.querySelector(
      ".project-toggle-label"
    );


  projectToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        projectContent.classList.toggle(
          "open"
        );


      projectToggle.classList.toggle(
        "active",
        isOpen
      );


      projectToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      projectContent.setAttribute(
        "aria-hidden",
        String(!isOpen)
      );


      if (projectToggleLabel) {

        projectToggleLabel.textContent =
          isOpen
            ? "작업사례 접기"
            : "작업사례 보기";

      }

    }
  );

}


// =====================================
// CONSULTATION
// =====================================

const KAKAO_URL =
  "https://pf.kakao.com/_WjxfaX";

const QUOTE_URL =
  "https://pureurun-quote.onrender.com/?shop=pururun";


// =====================================
// KAKAO LINKS
// =====================================

const kakaoLinks =
  document.querySelectorAll(".kakao-link");

kakaoLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    window.open(
      KAKAO_URL,
      "_blank",
      "noopener,noreferrer"
    );

  });

});


// =====================================
// QUOTE LINKS
// =====================================

const quoteLinks =
  document.querySelectorAll(".quote-link");

quoteLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    window.location.href = QUOTE_URL;

  });

});