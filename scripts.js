// Initialize variables
const container = document.querySelector("#grid-container");
const setGridSize = document.querySelector("#set-grid-size");
const resetBtn = document.querySelector("#reset-button");
const colorPicker = document.querySelector("#color-picker");
let currentColor = "#FFC0CB";
let gridSize = 16;

createGrid(gridSize);

// Set Grid Size Button Event Listener
setGridSize.addEventListener("click", () => {
  resetGrid();
});

// Event Listener for color changing
colorPicker.addEventListener("input", (event) => {
  currentColor = event.target.value;
});

// Set Reset Button Event Listener
resetBtn.addEventListener("click", () => {
  location.reload();
});

// Function called when Set Grid Size is clicked. This will clear the container and rebuild based on user input
function resetGrid() {
  let gridSizeInput = prompt("What grid size would you like? (5-75)");

  // If user clicks Cancel or inputs null, exit without doing anything
  if (gridSizeInput === null) {
    return;
  }

  let gridSize = parseInt(gridSizeInput);

  // Check if gridSize is not a number or is outside the range 5-75
  if (isNaN(gridSize) || gridSize < 5 || gridSize > 75) {
    alert("Please enter a valid integer between 5 and 75.");
    resetGrid(); // Prompt again recursively
  } else {
    createGrid(gridSize); // Create grid with valid gridSize
  }
}

// Function to remove all child nodes, resetting the grid to default size
function removeChildNodes() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// Create function to create the grid. Rows and cells will need to be created using the gridSize from the user
function createGrid(gridSize) {
  // Removes Child Nodes before starting the grid creation
  removeChildNodes();

  // Sets cell size to fit within the container
  const cellSize = 720 / gridSize;
  // Create Rows
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    // Create cells and append to the row
    for (let i = 0; i < gridSize; i++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
      row.appendChild(cell);

      // Add hover effect
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = currentColor;
      });
    }
    container.appendChild(row);
  }
}
