// about.js

window.addEventListener("DOMContentLoaded", () => {
  const bgImg = document.querySelector(".bg img");
  const heroText = document.getElementById("hero-text");

  const backgrounds = [
    "images/OFFICER.jpg",
    "images/OFFICE.jpg",
    "images/WORKING LABOR.jpg",
    "images/WORKING LABOR1.jpg"
  ];

  let currentIndex = 0;

  bgImg.style.opacity = 0;
  heroText.style.opacity = 0;
  bgImg.style.transition = "opacity 2s ease, transform 8s ease";
  heroText.style.transition = "opacity 1.5s ease";

  function changeSlide() {
    bgImg.style.opacity = 0;
    heroText.style.opacity = 0;

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % backgrounds.length;
      bgImg.src = backgrounds[currentIndex];

      bgImg.style.opacity = 1;
      heroText.style.opacity = 1;

      bgImg.style.transform = "scale(1.05)";
      setTimeout(() => {
        bgImg.style.transform = "scale(1)";
      }, 4000);
    }, 1000); // 
  }

  setTimeout(() => {
    bgImg.style.opacity = 1;
    heroText.style.opacity = 1;
  }, 500);

  setInterval(changeSlide, 5000);
});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => {
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.8s ease";
  observer.observe(card);
});
