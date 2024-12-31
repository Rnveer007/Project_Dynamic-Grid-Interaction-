let container = document.querySelector("#grid-container");
const resetButton = document.getElementById("reset");


let boxCount = 49;  // Total number of boxes
let gridSize = 7;  // Assuming a 7x7 grid (7 rows and 7 columns)

for (let i = 0; i < boxCount; i++) {
  let row = document.createElement("div");
  row.classList = "box";
  container.append(row);
}

container.addEventListener("click", (event) => {
  let item = document.querySelectorAll(".box");

  // Find the index of the clicked box
  let clickedBoxIndex = [...item].findIndex(n => n === event.target);

  if (clickedBoxIndex !== -1) {
    // Calculate the row and column of the clicked box
    let clickedRow = Math.floor(clickedBoxIndex / gridSize);
    let clickedCol = clickedBoxIndex % gridSize;
    clearGridHighlights()

    // Color the diagonal boxes
    item.forEach((box, index) => {
      let row = Math.floor(index / gridSize);
      console.log(row);
      let col = index % gridSize;

      // Check for diagonal direction (top-left, bottom-right, top-right, bottom-left)
      if (row === clickedRow + (col - clickedCol) || row === clickedRow - (col - clickedCol)) {
        // box.style.backgroundColor = "green";  // Change color to green
        box.classList.add("diagonal");

      }
    });
  }
});


function clearGridHighlights() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.classList.remove("clicked", "diagonal");
  });
}

resetButton.addEventListener("click", () => {
  clearGridHighlights();
});
