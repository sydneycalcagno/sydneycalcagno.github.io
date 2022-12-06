var character = document.getElementById("character");
var block = document.getElementById("block");
var buttonn = document.getElementById("btnn");
var words1 = document.getElementById("one");
var words2 = document.getElementById("two");
var header = document.querySelector('.pntt');
let lev = document.querySelector('.lvl');
var pAgain = document.getElementById("pa");
var hme = document.getElementById("hm");
var sl = document.getElementById("con");
var stp = document.getElementById("statsP");
var stl = document.getElementById("statsL");

let phrase1 = "Points: ";
let phrase2 = "Bert's Anger Level: ";
let phrase3 = "Begin Level ";
let phrase4 = "Your Score: ";
let phrase5 = "Level: ";


let bool = 0; 

stl.style.display="none";
stp.style.display="none";

document.getElementById("game").style.display = "none";
document.getElementById("pa").style.display = "none";
document.getElementById("hm").style.display = "none";
document.getElementById("con").style.display = "none";


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
    document.getElementById("con").style.display = "none";
    stl.style.display="none";
    stp.style.display="none";
   
    header.style.display ="block";
    lev.style.display ="block";
    header.innerText = phrase1 + points;
    lev.innerText = phrase2 + level;

},);

sl.addEventListener('click', function click(event){
    

    document.getElementById("game").style.display = "inline";
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "none";
    document.getElementById("btnn").style.display = "none";
    document.getElementById("pa").style.display = "none";
    document.getElementById("hm").style.display = "none";
    document.getElementById("con").style.display = "none";
    stl.style.display="none";
    stp.style.display="none";
   
    header.style.display ="block";
    lev.style.display ="block";
    header.innerText = phrase1 + points;
    lev.innerText = phrase2 + level;

},);

pAgain.addEventListener('click', function click(event){
    

    document.getElementById("game").style.display = "inline";
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "none";
    document.getElementById("btnn").style.display = "none";
    document.getElementById("pa").style.display = "none";
    document.getElementById("hm").style.display = "none";
    stl.style.display="none";
    stp.style.display="none";
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
    stl.style.display="none";
    stp.style.display="none";
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
   
    if(e.key == ' ' && !(bleft < 20 && bleft > 0 && ctop >= 130) && sl.style.display == "none"){
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
    else if(points > 70 && points < 85){
        level = 6;
    }
    else if(points > 85 && points < 100){
        level = 7;
    }
    else if(points > 100 && points < 115){
        level = 8;
    }
    else if(points > 115 && points < 130){
        level = 9;
    }
    else if(points > 130){
        level = 10;
    }




    if(level == 1){
        block.style.animationDuration = "5s";
        bool = 0;
        
    }
    else if(level == 2 && bool == 0){
        block.style.animationDuration = "4.5s";
        lev.innerText = phrase2 + level;
        document.getElementById("game").style.display = "none";
        sl.style.display = "block";
        sl.innerText = phrase3 + level;
        bool = 1; 

    }
    else if(level == 3 && bool == 1){
        block.style.animationDuration = "4s";
        lev.innerText = phrase2 + level;
        document.getElementById("game").style.display = "none";
        sl.style.display = "block";
        sl.innerText = phrase3 + level;
        bool = 2; 
    }
    else if(level == 4 && bool == 2){
        block.style.animationDuration = "3.5s";
        lev.innerText = phrase2 + level;
        document.getElementById("game").style.display = "none";
        sl.style.display = "block";
        sl.innerText = phrase3 + level;
        bool = 3; 
    }
    else if(level == 5 && bool == 3){
        block.style.animationDuration = "3s";
        lev.innerText = phrase2 + level;
        document.getElementById("game").style.display = "none";
        sl.style.display = "block";
        sl.innerText = phrase3 + level;
        bool = 3; 
    }
    else if(level == 6 && bool == 4){
        block.style.animationDuration = "2.5s";
        lev.innerText = phrase2 + level;
        document.getElementById("game").style.display = "none";
        sl.style.display = "block";
        sl.innerText = phrase3 + level;
        bool = 4; 
    }
    else if(level == 7 && bool == 5){
        block.style.animationDuration = "2s";
        lev.innerText = phrase2 + level;
        document.getElementById("game").style.display = "none";
        sl.style.display = "block";
        sl.innerText = phrase3 + level;
        bool = 5; 
    }
    else if(level == 8 && bool == 6){
        block.style.animationDuration = "1.5s";
        lev.innerText = phrase2 + level;
        document.getElementById("game").style.display = "none";
        sl.style.display = "block";
        sl.innerText = phrase3 + level;
        bool = 6; 
    }
    else if(level == 9 && bool == 7){
        block.style.animationDuration = "1s";
        lev.innerText = phrase2 + level;
        document.getElementById("game").style.display = "none";
        sl.style.display = "block";
        sl.innerText = phrase3 + level;
        bool = 7; 
    }
    else if(level == 10 && bool == 8){
        block.style.animationDuration = ".5s";
        lev.innerText = phrase2 + level;
        document.getElementById("game").style.display = "none";
        sl.style.display = "block";
        sl.innerText = phrase3 + level;
        bool = 8; 
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
        bool = 0;
        document.getElementById("pa").style.display = "block";
        document.getElementById("hm").style.display = "block";
        stp.innerText = phrase4 + points;
        stl.innerText = phrase5 + level;
        stl.style.display="block";
        stp.style.display="block";

        level = 1; 
        points = 0; 
        document.getElementById("game").style.display = "none";
        
        header.style.display ="none";
        lev.style.display ="none";

       

        
    }
    
   
 
}, 10);

