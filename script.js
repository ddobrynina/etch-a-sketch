const container = document.querySelector("#container");
function makeGrid(nrows, ncols) {
  for (let i = 0; i < nrows; i++) {
    let row = document.createElement("div");
    row.classList.add('row');
    container.appendChild(row);
    for (let j=0; j < ncols; j++)
    {
      let col = document.createElement("div");
      col.classList.add('col');
      row.appendChild(col);
    }
  };
};

makeGrid(rows, cols);

const selectBtn = document.querySelector("#select");
selectBtn.addEventListener("click", changeGridSize);


container.addEventListener("mouseover", highlight, true);
container.addEventListener("mouseout", normalColor, true);
container.addEventListener("click", changeColor, true);

function changeGridSize()
{
  let newValue = document.querySelector("input").value;
  newValue = parseInt(newValue);
    if(newValue > 1 && 101 > newValue)
    {
      console.log(newValue);
        while(container.firstChild)
        {
          container.removeChild(container.firstChild);
        }
        makeGrid(newValue, newValue);
    }
}

function highlight(e)
{
  if (e.srcElement.style.backgroundColor != "black")
  {
    e.srcElement.style.backgroundColor = "blue";
  }
}

function normalColor(e)
{
  if (e.srcElement.style.backgroundColor != "black")
  {
    e.srcElement.style.backgroundColor = "white";
  }
}

function changeColor(e)
{
  e.srcElement.style.backgroundColor = "black";
}

