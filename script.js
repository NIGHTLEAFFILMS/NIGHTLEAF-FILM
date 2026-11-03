
// =====================================
// NIGHTLEAF FILM — WEBSITE INTERACTIONS
// =====================================


// 1. MOBILE NAVIGATION

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


// 2. LIVE BOOK GENRE TYPING EFFECT

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
  "Drama",
  "Memoir",
  "Crime Fiction"
];

const genreWord = document.getElementById("genreWord");

let genreIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeGenre() {
  const currentGenre = genres[genreIndex];

  if (!deleting) {

    genreWord.textContent =
      currentGenre.slice(0, letterIndex + 1);

    letterIndex++;

    if (letterIndex === currentGenre.length) {
      deleting = true;
      setTimeout(typeGenre, 1400);
      return;
    }

  } else {

    genreWord.textContent =
      currentGenre.slice(0, letterIndex - 1);

    letterIndex--;

    if (letterIndex === 0) {
      deleting = false;
      genreIndex = (genreIndex + 1) % genres.length;
    }
  }

  setTimeout(typeGenre, deleting ? 45 : 105);
}

if (genreWord) {
  typeGenre();
}


// 3. CINEMATIC FLOATING STARS

const starfield = document.querySelector(".starfield");

if (starfield) {

  const starCount = 65;

  for (let i = 0; i < starCount; i++) {

    const star = document.createElement("span");

    star.className = "star";

    const size = Math.random() * 4 + 1;

    star.style.setProperty(
      "--star-x",
      `${Math.random() * 100}%`
    );

    star.style.setProperty(
      "--star-y",
      `${Math.random() * 100}%`
    );

    star.style.setProperty(
      "--star-size",
      `${size}px`
    );

    star.style.setProperty(
      "--star-blur",
      `${Math.random() * 2.5}px`
    );

    star.style.setProperty(
      "--star-speed",
      `${3 + Math.random() * 6}s`
    );

    star.style.setProperty(
      "--star-delay",
      `${Math.random() * 8}s`
    );

    starfield.appendChild(star);
  }
}


// 4. CURRENT COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// 5. SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
  ".service-card, .video-card, .price-card, " +
  ".promise-points > div, .about-copy, .intro-copy, " +
  ".testimonial-card"
);

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }
      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(element => {
    element.classList.add("reveal-on-scroll");
    observer.observe(element);
  });

} else {

  revealElements.forEach(element => {
    element.classList.add("visible");
  });

}


// 6. CONTACT FORM

const BUSINESS_EMAIL = "info.nightleaffilm@gmail.com";

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

  const subject = encodeURIComponent(
    `NIGHTLEAF FILM Enquiry — ${book || "New Project"}`
  );

  const body = encodeURIComponent(
    `NEW NIGHTLEAF FILM ENQUIRY

Name: ${name}

Email: ${email}

Book Title: ${book}

Requested Service: ${service}

Project Details:
${message}

Sent through the NIGHTLEAF FILM website.`
  );

  formMessage.textContent =
    "Opening your email application...";

  window.location.href =
    `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;

});


// 7. VIDEO ERROR HANDLING

document.querySelectorAll(".video-frame video").forEach(video => {

  video.addEventListener("error", () => {

    console.warn(
      "Portfolio video could not be loaded. Check the video file path."
    );

  });

});


// =====================================
// END OF NIGHTLEAF FILM SCRIPT
// =====================================
