window.addEventListener("DOMContentLoaded", function () {
  const text = document.getElementById("hero-text");
  const bgImg = document.querySelector(".bg img");

  text.classList.add("animate-text");
  bgImg.classList.add("animate-bg");

  setInterval(() => {
    text.classList.remove("animate-text");
    void text.offsetWidth; // force reflow
    text.classList.add("animate-text");

    bgImg.classList.remove("animate-bg");
    void bgImg.offsetWidth; // force reflow
    bgImg.classList.add("animate-bg");
  }, 5000);
});
