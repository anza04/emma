const imgContainer = document.getElementById("img-container")
const imgArray = ['./img/1.jpg', './img/2.jpg', './img/3.jpg']
const next = document.getElementById("next")
const prev = document.getElementById("prev")
const maxValue = imgArray.length -1;

const map = document.getElementById("map");

var value = 1;

function updateValue(amt)
{
    value += amt;
    if(value > maxValue)
    {
        value = 0;
    }
    else if(value < 0)
    {
        value = maxValue;
    }
}

imgContainer.style.backgroundImage = `url('${imgArray[value]}')`;

next.addEventListener("click", () => {
    updateValue(1);
    imgContainer.style.backgroundImage = `url('${imgArray[value]}')`;
})

prev.addEventListener("click", () => {
    updateValue(-1);
    imgContainer.style.backgroundImage = `url('${imgArray[value]}')`;
})


