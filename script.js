const rightPanel = document.getElementById("rightPanel");
const goButton = document.getElementById("goButton");

var rnc = 0;

goButton.addEventListener(
  "click",
  () => {
    makeGrids();
  },
  { once: true }
);

function makeGrids() {
  var rnc = document.getElementById("numInput").value;
  if (rnc > 64) {
    rnc = 64;
  }

  for (var i = 0; i < rnc; i++) {
    var newRow = document.createElement("div");
    newRow.id = "r" + i;
    newRow.className = "gridRow";

    rightPanel.append(newRow);
    for (var j = 0; j < rnc; j++) {
      var newColumn = document.createElement("div");
      newColumn.className = "gridColumn";
      newColumn.id = "c" + j;
      //   newColumn.innerHTML = j;
      newColumn.style.padding = 96 / rnc + "px";
      newColumn.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "white";
      });

      newRow.append(newColumn);
    }
  }
}
