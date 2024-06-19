/*

1. I'll definitely need to do some append.child work here to make a grid without adding all of the <div>s manually. I'll have to append across and down if that's
even possible. If not, I'll have to wrap it with flexbox maybe?

2. I'll need to be able to set the grid size via a variable. This could determine the size of the grid. How do I set the number of divs via scripts and css?

3. Assign a reset button

4. Assign user input to change gridSize

5. Create hover to change color of squares to default color

6. Add user input of color
*/

// Initialize variables
const container = document.querySelector("#grid-container");
let gridSize = 10;

createGrid(gridSize);

// Set Grid Size Button Event Listener
const setGridSize = document.querySelector("#set-grid-size");
setGridSize.addEventListener("click", () => {
  resetGrid();
});

// Function called when Set Grid Size is clicked. This will clear the container and rebuild based on user input
function resetGrid() {
  let gridSize = prompt("What grid size would you like? 5-75, please.");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid(gridSize);
}

// Create function to create the grid. Rows and cells will need to be created using the gridSize from the user
function createGrid(gridSize) {
  // Create Rows
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    // Create cells and append to the row
    for (let i = 0; i < gridSize; i++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      row.appendChild(cell);
      // cell.textContent = "Cell!";
    }
    container.appendChild(row);
  }
}
