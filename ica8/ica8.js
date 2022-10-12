let body = document.querySelector('body');
body.getElementById("body").addEventListener('click', giveAlert());

function giveAlert(){
    alert('this is an alert');
}

let hov = document.querySelector('hov');
hov.addEventListener('hover', color);

function color(){

}

var color = ["#eca1a6","#b5e7a0", "#92a8d1", "#ffef96"];
var i = 0;
document.querySelector("button").addEventListener("click", col())

function col(){
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]
}