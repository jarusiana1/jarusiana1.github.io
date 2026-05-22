document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  const heroText = document.getElementById("hero-text");
  const bgImg = document.querySelector(".bg img");

  logo.addEventListener("click", (event) => {
    event.preventDefault(); // prevent navigation

    // Restart hero text animation
    heroText.classList.remove("animate-text");
    void heroText.offsetWidth; // force reflow
    heroText.classList.add("animate-text");

    // Background aesthetic animation
    bgImg.classList.remove("animate-bg");
    void bgImg.offsetWidth; // force reflow
    bgImg.classList.add("animate-bg");
  });
});
