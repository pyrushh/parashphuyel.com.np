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
