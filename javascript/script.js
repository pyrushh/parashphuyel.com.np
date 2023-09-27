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
window.onload = function () {
  document.title = "Parash | Home";
};

// Function to change the page title based on the section in view
function changeTitleOnScroll() {
  var homeSection = document.getElementById("home");
  var aboutSection = document.getElementById("about");
  var contactSection = document.getElementById("contact");

  var scrollTop = window.scrollY;

  if (
    scrollTop >= homeSection.offsetTop &&
    scrollTop < aboutSection.offsetTop
  ) {
    document.title = "Parash | Home";
  } else if (
    scrollTop >= aboutSection.offsetTop &&
    scrollTop < contactSection.offsetTop
  ) {
    document.title = "Parash | About";
  } else if (scrollTop >= contactSection.offsetTop) {
    document.title = "Parash | Contact";
  } else {
    // If none of the sections are in view, use the default title
    document.title = "Parash | Home";
  }
}

// Add a scroll event listener to invoke the title change function
window.addEventListener("scroll", changeTitleOnScroll);

// Run the function once to set the initial title based on the page load position
changeTitleOnScroll();
