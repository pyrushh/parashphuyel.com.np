const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-150%";
}
const varName = "Parash";
const replace = document.getElementById("span");

function dk() {
  replace.innerText = varName;
  console.log("replace");
}

document.addEventListener("DOMContentLoaded", function () {
  dk();
});

const header = document.getElementById("head");
window.onload = function () {
  header.innerText = varName;
  document.title = varName + " | Home";
};
