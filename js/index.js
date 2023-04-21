const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
  overlay.classList.remove("active");
});
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrollTop = window.scrollY;

  if (scrollTop > 100) {
    // Change 100 to the desired scroll distance
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
