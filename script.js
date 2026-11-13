
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ANIMATED BOOK GENRES

const genres = [
  "Fantasy",
  "Romance",
  "Mystery",
  "Thriller",
  "Science Fiction",
  "Historical Fiction",
  "Horror",
  "Memoir",
  "Adventure",
  "Drama",
  "Young Adult",
  "Literary Fiction"
];

const genreText = document.getElementById("genreText");
let genreIndex = 0;

if (genreText) {
  setInterval(() => {
    genreText.style.opacity = "0";

    setTimeout(() => {
      genreIndex = (genreIndex + 1) % genres.length;
      genreText.textContent = genres[genreIndex];
      genreText.style.opacity = "1";
    }, 250);

  }, 2200);
}

// BLURRY, GLOWING, ANIMATED STARS

const starsContainer = document.getElementById("stars");

if (starsContainer) {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("span");

    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.setProperty(
      "--duration",
      (2 + Math.random() * 5) + "s"
    );

    star.style.setProperty(
      "--delay",
      (Math.random() * 6) + "s"
    );

    star.style.setProperty(
      "--blur",
      (Math.random() * 2 + 0.5) + "px"
    );

    starsContainer.appendChild(star);
  }
}

// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(element => {
    observer.observe(element);
  });

} else {
  revealElements.forEach(element => {
    element.classList.add("visible");
  });
}

// COPYRIGHT YEAR

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
