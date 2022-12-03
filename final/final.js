var character = document.getElementById("character");
var block = document.getElementById("block");


var points = 0; 
let gameOver = 0;



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
   
    
    var ctop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); 
    var bleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var bright = parseInt(window.getComputedStyle(block).getPropertyValue("right"));
   
    if(bleft < 20 && bleft > 0 && ctop >= 130){
        gameOver = 1; 
        alert("you lose");
    }
    // if(bright == 20){
    //     points++;
    //     alert("YES");
    // }

    
 
}, 10);


   