// Get the image container element
const imgContainer = document.getElementById("img-container");

// Array to store image paths
const imgArray = [
  "./img/slideshow/1.jpg",
  "./img/slideshow/2.jpg",
  "./img/slideshow/3.jpg",
];

// Get the next and previous button elements
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// Calculate the maximum index for the image array
const maxValue = imgArray.length - 1;

// Get the map element (not used in this code)
const map = document.getElementById("map");

// Current index of the image being displayed
var value = 1;

// Function to update the current image index
function updateValue(amt) {
  value += amt;
  if (value > maxValue) {
    value = 0; // Reset to the first image if we go past the end
  } else if (value < 0) {
    value = maxValue; // Go to the last image if we go before the beginning
  }
}

// Set the initial background image
imgContainer.style.backgroundImage = `url('${imgArray[value]}')`;

// Event listener for the next button
next.addEventListener("click", () => {
  updateValue(1); // Increment the image index
  imgContainer.style.backgroundImage = `url('${imgArray[value]}')`; // Update the background image
});

// Event listener for the previous button
prev.addEventListener("click", () => {
  updateValue(-1); // Decrement the image index
  imgContainer.style.backgroundImage = `url('${imgArray[value]}')`; // Update the background image
});
