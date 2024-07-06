// Get references to the category buttons
const firstCategoryBtn = document.getElementById("category-btn-1");
const secondCategoryBtn = document.getElementById("category-btn-2");
const thirdCategoryBtn = document.getElementById("category-btn-3");

// Initialize the display state for each category
var firstCategoryState = "flex";
var secondCategoryState = "none";
var thirdCategoryState = "none";

// Get references to the items in each category
var firstCategoryItems = document.getElementsByClassName("category-1");
var secondCategoryItems = document.getElementsByClassName("category-2");
var thirdCategoryItems = document.getElementsByClassName("category-3");

// Set the first category as active by default
firstCategoryBtn.classList.add("category-btn-active");
updateCategoryStatus();

// Function to update the display status of each category
function updateCategoryStatus() {
  // Loop through the first category items and set their display state
  for (let i = 0; i < firstCategoryItems.length; i++) {
    firstCategoryItems[i].style.display = firstCategoryState;
  }
  // Loop through the second category items and set their display state
  for (let j = 0; j < secondCategoryItems.length; j++) {
    secondCategoryItems[j].style.display = secondCategoryState;
  }
  // Loop through the third category items and set their display state
  for (let k = 0; k < thirdCategoryItems.length; k++) {
    thirdCategoryItems[k].style.display = thirdCategoryState;
  }
}

// Add an event listener to the first category button
firstCategoryBtn.addEventListener("click", () => {
  // Set the display state of the first category to 'flex' (visible)
  firstCategoryState = "flex";
  // Set the display state of the second and third categories to 'none' (hidden)
  secondCategoryState = "none";
  thirdCategoryState = "none";

  // Add the 'active' class to the first category button
  firstCategoryBtn.classList.add("category-btn-active");
  // Remove the 'active' class from the second and third category buttons
  secondCategoryBtn.classList.remove("category-btn-active");
  thirdCategoryBtn.classList.remove("category-btn-active");

  // Update the display of the categories based on their state
  updateCategoryStatus();
});

// Add an event listener to the second category button
secondCategoryBtn.addEventListener("click", () => {
  // Set the display state of the first and third categories to 'none' (hidden)
  firstCategoryState = "none";
  thirdCategoryState = "none";

  // Set the display state of the second category to 'flex' (visible)
  secondCategoryState = "flex";

  // Remove the 'active' class from the first and third category buttons
  firstCategoryBtn.classList.remove("category-btn-active");
  thirdCategoryBtn.classList.remove("category-btn-active");

  // Add the 'active' class to the second category button
  secondCategoryBtn.classList.add("category-btn-active");

  // Update the display of the categories based on their state
  updateCategoryStatus();
});

// Add an event listener to the third category button
thirdCategoryBtn.addEventListener("click", () => {
  // Set the display state of the first and second categories to 'none' (hidden)
  firstCategoryState = "none";
  secondCategoryState = "none";

  // Set the display state of the third category to 'flex' (visible)
  thirdCategoryState = "flex";

  // Remove the 'active' class from the first and second category buttons
  firstCategoryBtn.classList.remove("category-btn-active");
  secondCategoryBtn.classList.remove("category-btn-active");

  // Add the 'active' class to the third category button
  thirdCategoryBtn.classList.add("category-btn-active");

  // Update the display of the categories based on their state
  updateCategoryStatus();
});
