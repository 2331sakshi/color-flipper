const hex = [ 0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
//SELECTORS
const myButton = document.getElementById('btn'); 
const color = document.querySelector(".color");

//EVENT LISTENERS
myButton.addEventListener('click', changeColor);

//FUNCTIONS
function changeColor(){
    let hexcolor ='#';
    for(let i = 0;i<6;i++){
        hexcolor += hex[Math.floor(Math.random()*hex.length)];
    }
    document.body.style.backgroundColor = hexcolor;
    color.textContent = hexcolor;
}