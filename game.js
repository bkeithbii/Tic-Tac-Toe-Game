//Create event listener for each "square" div to respond to click
let squares = document.querySelectorAll(".square");
let clickCounter = 0;
let color = "purple";
let whoseTurn = document.querySelector(".turn");
let reset = document.querySelector(".resetbutt");

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", changeColor);
}

//TURN FUNCTION
function changeColor(e) {
  e.target.style.backgroundColor = color;
  clickCounter += 1;
  if (color == "purple") {
    e.target.innerHTML = "O";
    whoseTurn.innerHTML = "Player 2 Turn";
    color = "yellow";
    e.target.removeEventListener("click", changeColor);
  } else if ((color = "purple")) {
    e.target.innerHTML = "X";
    whoseTurn.innerHTML = "Player 1 Turn";
    e.target.removeEventListener("click", changeColor);
  }
  endGame();
}

reset.addEventListener("click", resetGame);

//RESET FUNCTION
function resetGame() {
  if (clickCounter === 9) {
    for (i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = "white";
      squares[i].addEventListener("click", changeColor);
    }
    clickCounter = 0;
    whoseTurn.innerHTML = "Player 1 Turn";
    color = "purple";
  }
}

//ENDGAME FUNCTION
function endGame() {
  if (clickCounter === 9) {
    whoseTurn.innerHTML = "GAME OVER";
    // for (let i = 0; i < squares.length; i++) {
    //   squares.innerHTML = "";
    // }
    squares.forEach(square => {
      square.innerHTML = "";
    });
  }
}
