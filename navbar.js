const burger = document.getElementById("burger");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const dropdownMenu = document.getElementById("dropdown-menu");
const title = document.getElementById("title");

var burgerClicked = false;

burger.addEventListener("click", () => {
    changeNavbarStatus()
})

function changeNavbarStatus() {
    burgerClicked = !burgerClicked;
    if (burgerClicked) {
        dropdownMenu.style.display = 'flex';
        title.style.color = '#F2CC8F';
        line1.style.background = '#F2CC8F';
        line2.style.background = '#F2CC8F';
        line3.style.background = '#F2CC8F';
    }
    else {
        dropdownMenu.style.display = 'none';
        title.style.color = '#3D405B';
        line1.style.background = '#3D405B';
        line2.style.background = '#3D405B';
        line3.style.background = '#3D405B';
    }
}