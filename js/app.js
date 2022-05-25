//SELECTORS
const colors =["green","red","rgba(133,122,200)","#f15025"];
const myButton = document.getElementById('btn'); 
const color = document.querySelector(".color");

//EVENT LISTENERS
myButton.addEventListener('click', changeColor);

//FUNCTIONS
function changeColor(){
    //get any random number between 0-3 
    const randomNumber = getRandom();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

function getRandom(){
    return Math.floor(Math.random()*colors.length);
}
