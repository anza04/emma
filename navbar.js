// Get references to the HTML elements we'll be interacting with
const burger = document.getElementById("burger");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const dropdownMenu = document.getElementById("dropdown-menu");
const title = document.getElementById("title");

// Initialize a variable to track whether the burger menu is clicked
var burgerClicked = false;

// Add an event listener to the burger icon to toggle the navbar status
burger.addEventListener("click", () => {
  changeNavbarStatus();
});

// Function to change the navbar status (open or close)
function changeNavbarStatus() {
  // Toggle the burgerClicked state
  burgerClicked = !burgerClicked;

  // If the burger menu is clicked (open)
  if (burgerClicked) {
    dropdownMenu.style.display = "flex"; // Show the dropdown menu
    title.style.color = "#F2CC8F"; // Change the title color
    line1.style.background = "#F2CC8F"; // Change the color of the burger lines
    line2.style.background = "#F2CC8F";
    line3.style.background = "#F2CC8F";
    // If the burger menu is not clicked (closed)
  } else {
    dropdownMenu.style.display = "none"; // Hide the dropdown menu
    title.style.color = "#3D405B"; // Reset the title color
    line1.style.background = "#3D405B"; // Reset the color of the burger lines
    line2.style.background = "#3D405B";
    line3.style.background = "#3D405B";
  }
}
