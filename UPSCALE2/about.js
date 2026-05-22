// about.js

// Background slideshow + hero text animation
window.addEventListener("DOMContentLoaded", () => {
  const bgImg = document.querySelector(".bg img");
  const heroText = document.getElementById("hero-text");

  // Array of background images (use HD versions if available)
  const backgrounds = [
    "images/OFFICER.jpg",
    "images/OFFICE.jpg",
    "images/WORKING LABOR.jpg",
    "images/WORKING LABOR1.jpg"
  ];

  let currentIndex = 0;

  // Initial styles
  bgImg.style.opacity = 0;
  heroText.style.opacity = 0;
  bgImg.style.transition = "opacity 2s ease, transform 8s ease";
  heroText.style.transition = "opacity 1.5s ease";

  // Function to change background + animate text
  function changeSlide() {
    // Fade out
    bgImg.style.opacity = 0;
    heroText.style.opacity = 0;

    setTimeout(() => {
      // Change background image
      currentIndex = (currentIndex + 1) % backgrounds.length;
      bgImg.src = backgrounds[currentIndex];

      // Fade in background and text
      bgImg.style.opacity = 1;
      heroText.style.opacity = 1;

      // Subtle zoom effect for HD feel
      bgImg.style.transform = "scale(1.05)";
      setTimeout(() => {
        bgImg.style.transform = "scale(1)";
      }, 4000);
    }, 1000); // wait for fade out
  }

  // First fade in
  setTimeout(() => {
    bgImg.style.opacity = 1;
    heroText.style.opacity = 1;
  }, 500);

  // Change slide every 5 seconds
  setInterval(changeSlide, 5000);
});

// Animate cards when they appear
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
