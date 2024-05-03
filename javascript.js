/**  ETCH-A-SKETCH
Mike Hartley
19/04/2024
Version 1
**/


// variables
const gridContainer = document.querySelector(".gridContainer");
let gridSize = 0;
let sqSize = 0;
// calc padding for .gridBox
//    width: 5%;
//    padding-bottom: 5%;


// functions 

function drawGrid(gridSize){

    // remove existing grid    
    removeGridDivNodes(gridContainer);

    // calculate square size
    // grid is 960 so each square is 960 / No squares

    sqSize = 960 / gridSize;
    console.log("Square Size:" + sqSize);

    for (rows = 0; rows < gridSize; rows++){
        gridDiv = document.createElement("div");
        gridDiv.setAttribute('id', 'r'  + rows);
        gridDiv.setAttribute('class', 'row');
        gridContainer.appendChild(gridDiv);
        console.log("Writing row: " + rows);

    for (columns = 0; columns < gridSize; columns++){
    
        gridDiv = document.createElement("div");
        gridDiv.setAttribute('id', 'c' + columns);
        gridDiv.setAttribute('class', 'gridBox');
        gridDiv.style.height = sqSize+'px';
        gridDiv.style.width = sqSize+'px';
        gridContainer.appendChild(gridDiv);
        console.log("Writing column: " + columns);
        }

    }      

    const myDivs = document.querySelectorAll(".gridBox");

    myDivs.forEach((div) => {

        div.addEventListener('mouseover', function(e) {
            console.log("Adding Event Listeners")
            console.log(e.target);
            console.log(div.id);
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
    drawGrid(gridSize);

});