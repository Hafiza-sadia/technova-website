// ✅ Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // offset for navbar height
        behavior: "smooth"
      });
    }
  });
});

// ✅ Toggle mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Change hamburger to "X"
  if (navLinks.classList.contains("active")) {
    menuToggle.innerHTML = "&times;"; // × symbol
  } else {
    menuToggle.innerHTML = "&#9776;"; // ☰ symbol
  }
});

// ✅ Close menu when link clicked
const links = document.querySelectorAll(".nav-links a");
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.innerHTML = "&#9776;";
  });
});
