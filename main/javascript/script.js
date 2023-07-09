const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNavigation);

function toggleNavigation() {
  const isActive = navToggler.classList.contains("active");
  const nav = document.querySelector(".nav");
  const isOpen = nav.classList.contains("open");

  if (isActive) {
    navToggler.classList.remove("active");
  } else {
    navToggler.classList.add("active");
  }

  if (isOpen) {
    nav.classList.remove("open");
    nav.removeAttribute("style");
  } else {
    nav.classList.add("open");
    nav.style.maxHeight = nav.scrollHeight + "px";
  }
}

//scroll
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });

  event.preventDefault(); // Prevent default anchor behavior
}
