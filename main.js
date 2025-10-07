const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const createGridBtn = document.createElement("Button")

container.style.cssText = `
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  height: 800px;
  margin: 40px auto;
  background-color: grey;
  border: 5px solid black;
`;

const gridSize = 16;

function createGrid(size) {
  const squareSize = 800 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.style.cssText = `
      width: ${squareSize}px;
      height: ${squareSize}px;
      background-color: white;
      border: 1px solid black;
      box-sizing: border-box;
    `;
    container.appendChild(square);
  }
}

createGrid(gridSize);
