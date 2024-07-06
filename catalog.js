const firstCategoryBtn = document.getElementById("category-btn-1");
const secondCategoryBtn = document.getElementById("category-btn-2");
const thirdCategoryBtn = document.getElementById("category-btn-3");

var firstCategoryState = 'flex';
var secondCategoryState = 'none';
var thirdCategoryState = 'none';

var firstCategoryItems = document.getElementsByClassName("category-1");
var secondCategoryItems = document.getElementsByClassName("category-2");
var thirdCategoryItems = document.getElementsByClassName("category-3");

firstCategoryBtn.classList.add("category-btn-active");
updateCategoryStatus();

function updateCategoryStatus()
{
    for (let i = 0; i < firstCategoryItems.length; i++) {
        firstCategoryItems[i].style.display =firstCategoryState;
    }
    for (let j = 0; j < secondCategoryItems.length; j++) {
        secondCategoryItems[j].style.display =secondCategoryState;
    }
    for (let k = 0; k < thirdCategoryItems.length;k++) {
        thirdCategoryItems[k].style.display =thirdCategoryState;
    }
}

firstCategoryBtn.addEventListener("click", ()=>{
    firstCategoryState = 'flex';
    secondCategoryState = 'none';
    thirdCategoryState = 'none';
    firstCategoryBtn.classList.add("category-btn-active");
    secondCategoryBtn.classList.remove("category-btn-active");
    thirdCategoryBtn.classList.remove("category-btn-active");
    updateCategoryStatus();
})

secondCategoryBtn.addEventListener("click", ()=>{
    firstCategoryState = 'none';
    secondCategoryState = 'flex';
    thirdCategoryState = 'none';
    firstCategoryBtn.classList.remove("category-btn-active");
    secondCategoryBtn.classList.add("category-btn-active");
    thirdCategoryBtn.classList.remove("category-btn-active");
    updateCategoryStatus();
})
thirdCategoryBtn.addEventListener("click", ()=>{
    firstCategoryState = 'none';
    secondCategoryState = 'none';
    thirdCategoryState = 'flex';
    firstCategoryBtn.classList.remove("category-btn-active");
    secondCategoryBtn.classList.remove("category-btn-active");
    thirdCategoryBtn.classList.add("category-btn-active");
    updateCategoryStatus();
})
  