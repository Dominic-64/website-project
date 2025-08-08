gsap.from(".hero-text", {
  y: -50,
  opacity: 0,
  duration: 1.2,
  ease: "bounce.out"
});

gsap.from(".hero-image", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  delay: 0.3,
  ease: "bounce.out"
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


