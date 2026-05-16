window.addEventListener("DOMContentLoaded", function () {
  const text = document.getElementById("hero-text");

  // Trigger animation on page load
  text.classList.add("animate-text");

  // OPTIONAL: repeat animation every 5 seconds
  setInterval(() => {
    text.classList.remove("animate-text");
    void text.offsetWidth; // force reflow
    text.classList.add("animate-text");
  }, 5000);
});
