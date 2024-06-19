/*

1. I'll definitely need to do some append.child work here to make a grid without adding all of the <div>s manually. I'll have to append across and down if that's
even possible. If not, I'll have to wrap it with flexbox maybe?

2. I'll need to be able to set the grid size via a variable. This could determine the size of the grid. How do I set the number of divs via scripts and css?

*/

// Initialize variables
const container = document.querySelector("#grid-container");
let gridSize = 16;

// Create div, set id to grid-pixel, add textContent to Test
const gridPixel = document.createElement("div");
gridPixel.setAttribute("id", "grid-pixel");
gridPixel.textContent = "Test";
// Add to container
container.appendChild(gridPixel);

// Create function to create the grid
function createGrid(gridSize) {}
