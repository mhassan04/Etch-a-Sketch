const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttons-container");

let currentColor = 'black';


// ** RESIZE GRID BUTTON ** //

const button = document.createElement("button");
button.textContent = "Change Grid Size";
button.classList.add("buttons")
button.addEventListener("click", function(){
    try {
        let selectGridSize = prompt("Enter the preferred grid size? (max: 100)");
        selectGridSize = Number(selectGridSize);
        if((!Number.isInteger(selectGridSize)) || selectGridSize < 1 || selectGridSize > 100){
            alert("Please enter a number between 1 and 100");
            return;
        } 
        clearGrid();  
        grids(selectGridSize);
    } catch (error){
        console.error("An error occurred: ", error);
        alert("An unexpected error occurred. Please try again.");
    }
});
buttonsContainer.appendChild(button);

// ** BLACK GRID COLOR BUTTON ** //

const blackColorButton = document.createElement("button");
blackColorButton.textContent = "Black";
blackColorButton.classList.add("buttons");
blackColorButton.addEventListener("click", function(){
    currentColor = 'black';
});
buttonsContainer.appendChild(blackColorButton);

// ** RGB GRID COLOR BUTTON ** //

const rainbowButton = document.createElement("button");
rainbowButton.textContent = "RGB";
rainbowButton.classList.add("buttons");
rainbowButton.addEventListener("click", function(){
    currentColor = 'rainbow';
})
buttonsContainer.appendChild(rainbowButton);

// ** ERASE GRID BUTTON ** //

const eraserButton = document.createElement("button");
eraserButton.textContent = "Eraser";
eraserButton.classList.add("buttons");
eraserButton.addEventListener("click", function(){
    currentColor = 'white';
})
buttonsContainer.appendChild(eraserButton);

// ** RESET GRID BUTTON ** //

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.classList.add("buttons")
resetButton.addEventListener("click", function(){
    clearGrid();
    grids(16);
})
buttonsContainer.appendChild(resetButton);

document.body.appendChild(buttonsContainer);

const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);


function grids(n){
    const containerSize = 640; 
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;
    const gridSquareSize = containerSize / n;

    for (let i = 0; i < (n * n); i++){ 
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.style.width = `${gridSquareSize}px`;
        gridSquare.style.height = `${gridSquareSize}px`;
        gridSquare.addEventListener("mouseover", function(){
            if(currentColor == 'black'){
                gridSquare.style.backgroundColor = 'black';
            }
            else if(currentColor == 'rainbow'){
                gridSquare.style.backgroundColor = getRandomColor();
            }
            else if(currentColor == 'white'){
                gridSquare.style.backgroundColor = 'white';
            }
        })
        container.appendChild(gridSquare);
    }
}

function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}

grids(16);


