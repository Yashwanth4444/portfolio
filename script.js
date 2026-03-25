const phrases = [
  "Exploring Machine Learning",
  "Learning Backend Development",
  "Building Real-World Projects"
];

const typingElement = document.getElementById("typing-text");
const revealElements = document.querySelectorAll(".reveal");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const certificationCards = document.querySelectorAll(".certification-card");
const projectCards = document.querySelectorAll(".project-card");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentPhrase = phrases[phraseIndex];
  const visibleText = currentPhrase.substring(0, charIndex);

  typingElement.textContent = visibleText;

  let speed = isDeleting ? 55 : 105;

  if (!isDeleting && charIndex < currentPhrase.length) {
    charIndex += 1;
  } else if (isDeleting && charIndex > 0) {
    charIndex -= 1;
  } else if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    speed = 1500;
  } else {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 250;
  }

  setTimeout(typeText, speed);
}

function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.18
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function setupMobileNavigation() {
  if (!navToggle || !navLinks) return;

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navLinks.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (!targetSection) return;

      event.preventDefault();
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function setupCardHoverEffects() {
  certificationCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${offsetX}px`);
      card.style.setProperty("--mouse-y", `${offsetY}px`);
    });
  });
}

function setupProjectCardAccess() {
  projectCards.forEach((card) => {
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
    });
  });
}

// Initialize portfolio interactions after the page loads.
window.addEventListener("DOMContentLoaded", () => {
  typeText();
  revealOnScroll();
  setupMobileNavigation();
  setupSmoothScroll();
  setupCardHoverEffects();
  setupProjectCardAccess();
});
