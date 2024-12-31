// app.js

// Select the grid container and reset button
const gridContainer = document.getElementById("grid-container");
const resetButton = document.getElementById("reset");

// Grid dimensions
const rows = 7; // Number of rows
const cols = 7; // Number of columns

// Generate the grid dynamically
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.dataset.row = row;
    box.dataset.col = col;
    gridContainer.appendChild(box);
  }
}

// Add event listener to the grid for box clicks
gridContainer.addEventListener("click", (event) => {
  if (!event.target.classList.contains("box")) return;

  const clickedBox = event.target;

  // Clear previous highlights
  clearGridHighlights();

  // Highlight the clicked box
  clickedBox.classList.add("clicked");

  // Get the row and column of the clicked box
  const clickedRow = parseInt(clickedBox.dataset.row);
  const clickedCol = parseInt(clickedBox.dataset.col);

  // Highlight the diagonals
  highlightDiagonals(clickedRow, clickedCol);
});

// Function to clear all highlights
function clearGridHighlights() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.classList.remove("clicked", "diagonal");
  });
}

// Function to highlight diagonal boxes
function highlightDiagonals(row, col) {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    const boxRow = parseInt(box.dataset.row);
    const boxCol = parseInt(box.dataset.col);

    // Check if the box is diagonal to the clicked box
    if (Math.abs(boxRow - row) === Math.abs(boxCol - col)) {
      box.classList.add("diagonal");
    }
  });
}

// Add event listener to the reset button
resetButton.addEventListener("click", () => {
  clearGridHighlights();
});
