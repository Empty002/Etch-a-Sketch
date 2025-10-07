const main = document.createElement("main");
document.body.appendChild(main);

const container = document.createElement("div");
container.classList.add("container");
main.appendChild(container);

let isMouseDown = false;

document.body.style.cssText = `
  background-color: #000000ff;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto";
  height: 100vh;
`;

main.style.cssText = `
  display: flex;
  flex-direction: column;
  algin-items: center;
  flex: 1;
`;

container.onmousedown = (e) => e.preventDefault();

const header = document.createElement("header");
document.body.insertBefore(header, main);
header.textContent = "Etch-a-Sketch";
header.style.cssText = `
  background-color: #4A2545;
  text-align: center;
  font-size: 30px;
  color: #DCCCA3;
  margin-bottom: 20px;
  padding: 20px;
  font-weight: bold;
  font-family: Roboto;
`;

const footer = document.createElement("footer");
document.body.appendChild(footer);
footer.textContent = "Copyright © Youssef Hamdy 2025";
footer.style.cssText = `
  display: flex;
  background-color: #4A2545;
  justify-content: center;
  font-size: 24px;
  color: #DCCCA3;
  margin-top: 20px;
  padding: 20px;
  font-weight: bold;
  font-family: Roboto;
`;

const input = document.createElement("input");
input.type = "number";
input.placeholder = "Enter grid size";
input.min = "1";
input.max = "100";
input.style.cssText = `
  font-size: 16px;
  padding: 9px;
  width: 150px;
  margin: 0 auto;
  border-radius: 10px;
  border: 4px solid #4A2545;
`;

const createGridBtn = document.createElement("button");
createGridBtn.textContent = "Create grid";
createGridBtn.style.cssText = `
  font-size: 19px;
  background-color: #4A2545;
  color: white;
  padding: 10px 100px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 20px auto;
  margin-bottom: 0;
  font-family: Roboto;
`;

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear";
clearBtn.style.cssText = `
  background-color: #4A2545;
  font-family: Roboto;
  font-size: 17px;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 30px;
  width: 200px;
  
`;

clearBtn.addEventListener("click", () => {
  const squares = container.querySelectorAll("div");
  squares.forEach((square) => (square.style.backgroundColor = "white"));
});

const controls = document.createElement("div");
controls.style.cssText = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

controls.appendChild(input);
main.appendChild(clearBtn);
controls.appendChild(createGridBtn);
main.insertBefore(controls, container);

container.style.cssText = `
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  height: 800px;
  margin: 10px auto;
  margin-bottom: 40px;
  background-color: white;
  border: 5px solid #4A2545;
`;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 800 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.style.cssText = `
      width: ${squareSize}px;
      height: ${squareSize}px;
      background-color: white;
      box-sizing: border-box;
    `;

    square.addEventListener("mousedown", () => {
      square.style.background = getRandomColor();
    });

    square.addEventListener("mouseenter", () => {
      if (isMouseDown) {
        square.style.backgroundColor = getRandomColor();
      }
    });

    container.appendChild(square);
  }
}

document.body.addEventListener("mousedown", () => {
  isMouseDown = true;
});

document.body.addEventListener("mouseup", () => {
  isMouseDown = false;
});

createGrid(16);

createGridBtn.addEventListener("click", () => {
  const size = parseInt(input.value, 10);
  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Enter a number between 1 and 100.");
  }
});
