// const button = document.querySelector('.button');
// const output = document.querySelector('.output');
// let phone_content = document.querySelector('.phone');

// button.addEventListener('click', updateOutput);

// function updateOutput() {
//     output.textContent = phone_content.value;
//     alert(phone_content.value); 
// }

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

function check(){
    console.log('hi');
}

function submit(){
    alert(output.textContent);
}

function reset(){
   outputInt = 0; 
   output.textContent = outputInt;
}

function plusRunner(){
    plus(outputInt);
}

function plus(){
    if(outputInt < 9999999999){
        outputInt += 1;
        output.textContent = outputInt;
    }
    
}

function minus(){
    if(outputInt > 0){
        outputInt -= 1;
        output.textContent = outputInt;
    }
    
}

function random(){
    outputInt = randomNum(0, 9999999999);
    output.textContent = outputInt;
}

function randomNum(min, max){
    const num = Math.floor(Math.random) * (max - min + 1) + min;
    return num;
}

function update(){
    outputSlide.textContent = slider.value;
}


var slider = document.getElementById("myRange");
var sliderSubmit = document.querySelector(".slider").addEventListener('click', update);
var outputSlide = document.getElementById("demo");
outputSlide.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  outputSlide.innerHTML = this.value;
}

const minusButton = document.querySelector('.minusbutton').addEventListener('click', minus);
const addButton = document.querySelector('.addbutton').addEventListener('click', plusRunner);
const submitButton = document.querySelector('.submitbutton').addEventListener('click', submit);
const resetButton = document.querySelector('.resetbutton').addEventListener('click', reset);
const randomButton = document.querySelector('.randombutton').addEventListener('click', random);