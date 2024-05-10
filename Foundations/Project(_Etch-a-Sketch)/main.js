console.log("start");
const containerWidth = 960;
let squaresPerSide = 16;
let pen_col = "black";

document.addEventListener("DOMContentLoaded", function() {
    colorPicker();
    createGrid(16);

    document.getElementById('newGridSize').addEventListener('click', function() {
        let validInput = false;
        do{
            squaresPerSide = prompt("Enter the number of squares per side for the new grid:", 16);
            if (squaresPerSide) {
                let val = parseInt(squaresPerSide);
                if (val > 0 && val <= 100){
                    createGrid(val);
                    validInput = true;
                }
            }
        }while(!validInput);
    });
});

function colorPicker() {
    let cols = ["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"];
    const container = document.getElementById('colorPicker');
    const squareSize = containerWidth / squaresPerSide;
    for (let i = 0; i < cols.length; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = cols[i];
        square.addEventListener("click", () => {
            pen_col = cols[i];
        });
        container.appendChild(square);
    }
}

function createGrid() {
    const container = document.getElementById('container');
    const squareSize = containerWidth / squaresPerSide;
    container.innerHTML = '';

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = pen_col;
        });
        container.appendChild(square);
    }
}