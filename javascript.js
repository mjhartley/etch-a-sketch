/**  ETCH-A-SKETCH
Mike Hartley
19/04/2024
Version 1
**/


// variables
const gridContainer = document.querySelector(".gridContainer");
let gridSize = 0;
let sqSize = 0;

// functions 
function drawGrid(gridSize){

    // remove existing grid    
    removeGridDivNodes(gridContainer);

    // calculate square size
    // grid is 960 so each square is 960 / No squares

    sqSize = 960 / gridSize;
    console.log("Square Size:" + sqSize);

    gridSize = gridSize*gridSize;

    for (cells = 0; cells < gridSize; cells++){
    
        gridDiv = document.createElement("div");
        gridDiv.setAttribute('id', cells);
        gridDiv.setAttribute('class', 'gridBox');
        gridDiv.style.height = sqSize+'px';
        gridDiv.style.width = sqSize+'px';
        gridContainer.appendChild(gridDiv);

    } 

    const myDivs = document.querySelectorAll(".gridBox");

    myDivs.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
            e.target.style.background = "white";
        });
    });

}

function removeGridDivNodes(gridContainer){
    console.log("Removing old grid");
    while(gridContainer.firstChild){    
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

const createGridBtn = document.querySelector('#createGridBtn');
createGridBtn.addEventListener('click',()=> {
    gridSize = prompt("Enter the width of the grid. Max 100."); 
   if ((gridSize > 100) || (gridSize < 1)){
        alert("Input is invalid");
    } else {
   
        drawGrid(gridSize);
    }
});