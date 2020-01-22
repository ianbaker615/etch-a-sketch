const container = document.getElementById("container");
let gridSize = 16;
makeRows(gridSize, gridSize);
changeColor();

//Define makeRows function
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

function removeDivs() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function changeColor() {
  //Change color of divs
  const divs = document.querySelectorAll(".grid-item");
  divs.forEach(div => {
    div.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = randomColor();
    });
  });
}

//Reset button
const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
  removeDivs();
  gridSize = window.prompt('Please enter x by x grid dimension', 16);
  makeRows(gridSize,gridSize);
  changeColor();
});



