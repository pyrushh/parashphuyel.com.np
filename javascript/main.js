//title change on clicking links......idk javascript shit
function changeTitle(title) {
  document.title = title;
}
//Typing animations (copy this if you want lol)
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("name");
  const text = textElement.textContent;
  const typingSpeed = 250; // Adjust typing speed (in milliseconds)

  let charIndex = 0;

  function typeText() {
    if (charIndex < text.length) {
      textElement.textContent = text.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    }
  }

  // Call the typing animation when the DOM is loaded
  typeText();
});
//for when i click the home link(the image in header) it has to scroll to the top without like reloading
function scrollToHome(event) {
  event.preventDefault(); // Prevent default link behavior

  // Scroll to the home section of your page
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function changeTitleAndScroll(event, title) {
  event.preventDefault(); // Prevent default link behavior
  changeTitle(title);
  scrollToHome(event);
}
// alerts when clicked the blogs link
function showAlert() {
  const customMessage = "Blogs page not been implemented yet.";
  window.alert(customMessage);
}
