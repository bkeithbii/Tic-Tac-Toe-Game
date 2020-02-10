//Create event listener for each "square" div to respond to click
let squares = document.querySelectorAll(".square");

let color = "purple";

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", changeColor);
  function changeColor() {
    squares[i].style.backgroundColor = color;
    if (color == "purple") {
      color = "yellow";
      squares[i].removeEventListener("click", changeColor);
    } else {
      color = "purple";
      squares[i].removeEventListener("click", changeColor);
    }
  }
}

let clickCounter = 0;

if (clickCounter === 9) {
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "white";
  }
}
