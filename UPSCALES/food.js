document.addEventListener("DOMContentLoaded", () => {
  // Optional: close modal with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && window.location.hash) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  });
});
