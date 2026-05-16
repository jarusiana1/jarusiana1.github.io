window.addEventListener("DOMContentLoaded", function () {
  // Animate all card images on load
  const images = document.querySelectorAll(".card img");

  images.forEach(img => {
    img.classList.add("animate");
  });
});
