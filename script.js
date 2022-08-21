const container = document.querySelector("container");

function makeGrid(rows, cols) {
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.classList.add('grid-item');
    container.appendChild(cell);
  };
};
makeGrid(16,16);