window.addEventListener("load", () => {
  const card = document.getElementById("businessCard");
  card.style.opacity = "1";
  card.style.transform = "translateY(0)";
});

const logoBox = document.getElementById("logoBox");
logoBox.addEventListener("click", () => {
  logoBox.style.transform = "scale(1.2)";
  setTimeout(() => {
    logoBox.style.transform = "scale(1)";
  }, 300);
});
