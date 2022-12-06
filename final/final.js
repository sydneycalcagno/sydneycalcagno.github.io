var character = document.getElementById("character");
var block = document.getElementById("block");
var buttonn = document.getElementById("btnn");
var words1 = document.getElementById("one");
var words2 = document.getElementById("two");
var header = document.querySelector('.pntt');
let lev = document.querySelector('.lvl');
var pAgain = document.getElementById("pa");
var hme = document.getElementById("hm");


let phrase1 = "Points: ";
let phrase2 = "Bert's Anger Level: ";

document.getElementById("game").style.display = "none";
document.getElementById("pa").style.display = "none";
document.getElementById("hm").style.display = "none";


var points = 0; 
var level = 1;


const bn = document.getElementById('btnn');
bn.addEventListener('click', function click(event){
    

    document.getElementById("game").style.display = "inline";
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "none";
    document.getElementById("btnn").style.display = "none";
    document.getElementById("pa").style.display = "none";
    document.getElementById("hm").style.display = "none";
    header.style.display ="block";
    lev.style.display ="block";
    header.innerText = phrase1 + points;
    lev.innerText = phrase2 + level;
});

pAgain.addEventListener('click', function click(event){
    

    document.getElementById("game").style.display = "inline";
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "none";
    document.getElementById("btnn").style.display = "none";
    document.getElementById("pa").style.display = "none";
    document.getElementById("hm").style.display = "none";
    header.style.display ="block";
    lev.style.display ="block";
    header.innerText = phrase1 + points;
    lev.innerText = phrase2 + level;
});

hm.addEventListener('click', function click(event){
    document.getElementById("btnn").style.display = "inline";
    document.getElementById("one").style.display = "block";
    document.getElementById("two").style.display = "block";
    document.getElementById("pa").style.display = "none";
    document.getElementById("hm").style.display = "none";
});

document.body.onkeyup = function(e){
    if(e.key == ' '){
        if(character.classList != "animate"){
            character.classList.add("animate");
        }
        
        setTimeout(function(){
            character.classList.remove("animate");
        }, 500);


    }
    let gameOver = 0;
    var ctop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); 
    var bleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var bright = parseInt(window.getComputedStyle(block).getPropertyValue("right"));
   
    if(e.key == ' ' && !(bleft < 20 && bleft > 0 && ctop >= 130)){
        points ++; 
    }
    if(points < 10){
        level = 1;
    }
    else if(points > 10 && points < 25){
        level = 2;
    }
    else if(points > 25 && points < 40){
        level = 3;
    }
    else if(points > 40 && points < 55){
        level = 4;
    }
    else if(points > 55 && points < 70){
        level = 5;
    }

    header.innerText = phrase1 + points;
    lev.innerText = phrase2 + level;

} 




var dead = setInterval(function(){
   
    let gameOver = 0;
    var ctop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); 
    var bleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var bright = parseInt(window.getComputedStyle(block).getPropertyValue("right"));
   
    if(bleft < 20 && bleft > 0 && ctop >= 130){
        gameOver = 1; 
        document.getElementById("pa").style.display = "block";
        document.getElementById("hm").style.display = "block";


        points = 0; 
        document.getElementById("game").style.display = "none";
        
        header.style.display ="none";
        lev.style.display ="none";
        
    }
    
   
 
}, 10);


// document.getElementById("btnn").style.display = "inline";
// document.getElementById("one").style.display = "block";
// document.getElementById("two").style.display = "block";