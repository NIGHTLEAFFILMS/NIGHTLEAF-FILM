
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// LIVE BOOK GENRE TYPING EFFECT
const genres = [
  "Romance",
  "Fantasy",
  "Mystery",
  "Thriller",
  "Horror",
  "Science Fiction",
  "Young Adult",
  "Historical Fiction",
  "Adventure",
  "Christian Fiction",
  "Literary Fiction",
  "Nonfiction",
  "Poetry",
  "Drama"
];

const genreWord = document.getElementById("genreWord");
let genreIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeGenre() {
  const currentGenre = genres[genreIndex];

  if (!deleting) {
    genreWord.textContent = currentGenre.slice(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex === currentGenre.length) {
      deleting = true;
      setTimeout(typeGenre, 1400);
      return;
    }
  } else {
    genreWord.textContent = currentGenre.slice(0, letterIndex - 1);
    letterIndex--;

    if (letterIndex === 0) {
      deleting = false;
      genreIndex = (genreIndex + 1) % genres.length;
    }
  }

  setTimeout(typeGenre, deleting ? 45 : 105);
}

if (genreWord) typeGenre();

// CURRENT YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// CONTACT FORM
// This opens the visitor's email app.
// Replace this address with your actual business email.
const BUSINESS_EMAIL = "YOUR-EMAIL@example.com";

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const book = formData.get("book");
  const service = formData.get("service");
  const message = formData.get("message");

  const subject = encodeURIComponent(`NIGHTLEAF FILM enquiry — ${book || "New project"}`);

  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nBook title: ${book}\nService: ${service}\n\nProject details:\n${message}`
  );

  formMessage.textContent = "Opening your email application...";

  window.location.href =
    `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});

// SIMPLE SCROLL REVEALS
const revealElements = document.querySelectorAll(
  ".service-card, .video-card, .price-card, .promise-points > div, .about-copy, .intro-copy"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(element => {
    element.classList.add("reveal-on-scroll");
    observer.observe(element);
  });
}
