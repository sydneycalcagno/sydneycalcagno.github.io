
const obj = document.getElementById("ntext").innerHTML = Math.floor(Math.random() * 10);

// for(var xpostion = 0; x < window.innerWidth; x++){

//     for(var ypostion = 0; y < window.outerWidth; y++){

//     }

// }

const container = document.getElementById("ntext");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);