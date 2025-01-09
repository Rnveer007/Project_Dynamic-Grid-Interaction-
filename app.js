let container = document.querySelector("#grid-container");
const resetButton = document.getElementById("reset");


let boxCount = 49;
let gridSize = 7;  // Assuming a 7x7 grid (7 rows and 7 columns)

for (let i = 0; i < boxCount; i++) {
  let row = document.createElement("div");
  row.classList = "box";
  container.append(row);
}

container.addEventListener("click", (event) => {

  let item = document.querySelectorAll(".box")
  let clickedBoxIndex = [...item].findIndex((n) => n === event.target);
  if (clickedBoxIndex !== -1) {
    let clickedRow = Math.floor(clickedBoxIndex / gridSize);
    let clickedCol = clickedBoxIndex % gridSize;

    clearGridHighlights()

    let clickedBox = item[clickedBoxIndex];
    clickedBox.classList.add("clicked");


    item.forEach((currentBox, index) => {
      let currentBoxRow = Math.floor(index / gridSize);
      let currenBoxCol = index % gridSize;


      if (currentBoxRow - currenBoxCol === clickedRow - clickedCol || currentBoxRow + currenBoxCol === clickedRow + clickedCol) {
        if (index !== clickedBoxIndex) {
          currentBox.classList.add("diagonal");
        }
      }

    })
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
