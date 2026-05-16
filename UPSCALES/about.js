window.addEventListener("DOMContentLoaded", function () {
  const heroText = document.getElementById("hero-text");
  const heroImage = document.querySelector(".bg img");

  // Hero animation
  heroText.classList.add("animate");
  heroImage.classList.add("animate");

  setInterval(() => {
    heroText.classList.remove("animate");
    heroImage.classList.remove("animate");

    void heroText.offsetWidth;
    void heroImage.offsetWidth;

    heroText.classList.add("animate");
    heroImage.classList.add("animate");
  }, 6000);

  // Image overlay logic
  const overlay = document.createElement("div");
  overlay.classList.add("image-overlay");
  overlay.innerHTML = `
    <span class="close-btn">Close</span>
    <img src="" alt="Enlarged Image" />
    <p class="img-desc"></p>
  `;
  document.body.appendChild(overlay);

  const overlayImg = overlay.querySelector("img");
  const overlayDesc = overlay.querySelector(".img-desc");
  const closeBtn = overlay.querySelector(".close-btn");

  // Attach click event to all images
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
      overlayImg.src = img.src;
      overlayDesc.textContent = img.alt || "No description available";
      overlay.style.display = "flex";
    });
  });

  // Close overlay
  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  // Close overlay when clicking outside image
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });
});
