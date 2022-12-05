var character = document.getElementById("character");
var block = document.getElementById("block");
var buttonn = document.getElementById("btnn");

window.addEventListener('load', buttonn);
document.getElementById("game").style.display = "none";


var points = 0; 


const bn = document.getElementById('btnn');
bn.addEventListener('click', function click(event){
    

    document.getElementById("game").style.display = "inline";
    document.getElementById("btnn").style.display = "none";

});

// character = {x: 5, y: 5, width: 50, height: 50};
// block = {x: 5, y: 5, width: 50, height: 50};


document.body.onkeyup = function(e){
    if(e.key == ' '){
        if(character.classList != "animate"){
            character.classList.add("animate");
        }
        
        setTimeout(function(){
            character.classList.remove("animate");
        }, 500);
    }
} 

// if (character.x < block.x + block.width && character.x + character.width > block.x && character.y < block.y + block.height && character.y + character.height > block.y){

//     console.log("Hello world!");
// }
// else{

// }
// function pointpoint(){
//     while(gameOver == 0){
//         if(bleft == 1){
//             points++;
//         }
//     }
// }



var dead = setInterval(function(){
   
    let gameOver = 0;
    var ctop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); 
    var bleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var bright = parseInt(window.getComputedStyle(block).getPropertyValue("right"));
   
    if(bleft < 20 && bleft > 0 && ctop >= 130){
        gameOver = 1; 
        alert("you lose");
        document.getElementById("game").style.display = "none";
    }
    
   

    
 
}, 10);


   