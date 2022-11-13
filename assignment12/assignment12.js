

let mesg = document.querySelector("h2");
mesg.innerText = "Find And Click on a Random Smiley Face to Generate Your Phone Number";

const container = document.getElementById("ntext");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  const symbol = ["ʕ•ᴥ•ʔ", "ಠ_ಠ", "=^_^=", ">_<", "(*_*)", "(*^_^*)", ":)", ";D", "(ᵔᴥᵔ)","(¬‿¬)", "♥‿♥", "◉_◉", "(•◡•)", "⚆_⚆", "ʘ‿ʘ"];
  
  
  for (c = 0; c < (rows * cols); c++) {
    const myS = document.createElement("div");
    myS.innerText = symbol[Math.floor(Math.random() * symbol.length)]
    container.appendChild(myS).className = "grid-item";
    myS.addEventListener('click', real);
  };

};


makeRows(16, 16);

let header = document.querySelector("h1");
let phrase = "Your Phone Number Is: ";


function real(){
  
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  let num3 = Math.floor(Math.random() * 10);
  let num4 = Math.floor(Math.random() * 10);
  let num5 = Math.floor(Math.random() * 10);
  let num6 = Math.floor(Math.random() * 10);
  let num7 = Math.floor(Math.random() * 10);
  let num8 = Math.floor(Math.random() * 10);
  let num9 = Math.floor(Math.random() * 10);
  let num10 = Math.floor(Math.random() * 10);

  let fthree = [num1, num2, num3];
  let mid = [num4, num5, num6, num7];
  let end = [num8, num9, num10];

  let divd = "-";

  let anum = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
  header.innerText = phrase + fthree.join('') + divd + mid.join('') + divd + end.join('');
}


function gottem(){
  const symbol = ["( ͡° ͜ʖ ͡°)", "ʕ•ᴥ•ʔ", "ಠ_ಠ", "=^_^=", ">_<", "(*_*)", "(*^_^*)", ":)", ";)","(ಥ﹏ಥ)", "(ᵔᴥᵔ)","(¬‿¬)" ,"(☞ﾟ∀ﾟ)☞" ];
  let myS = symbol[Math.floor(Math.random() * symbol.length)]
  alert(myS);
}