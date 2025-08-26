// about.js

alert("Scroll Down to See Content 😊");

document.addEventListener("scroll", () => {
  document.querySelectorAll('.fade-in').forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      element.style.animationPlayState = 'running';
    }
  });
});
