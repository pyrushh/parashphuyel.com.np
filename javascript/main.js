// Placeholder
function changeTitle(title) {
  document.title = title;
}

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("name");
  const text = textElement.textContent;
  const typingSpeed = 300; // Adjust typing speed (in milliseconds)

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
  const customMessage = "Blogs page has not been implemented yet";
  window.alert(customMessage);
}
