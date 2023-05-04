const hamburger = document.querySelector(".hamburger"); //selects the hamburger
const menu = document.querySelector(".menu"); //menu selector. see css for info about menu

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); //activates the .active class for the hamburger
  menu.classList.toggle("active"); //activates the .active class for the menu
});

//found out if single thing fucks up js fails. please dont shit on my code

window.addEventListener("scroll", function () {
  //scroll to chaeng color. idk hwo any of this work but it does
  const header = document.querySelector("header");
  const scrollTop = window.scrollY;

  if (scrollTop > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
