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
  findWinner();
  endGame();
}

reset.addEventListener("click", resetGame);

//RESET FUNCTION
function resetGame() {
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "white";
    squares[i].innerHTML = "";
    squares[i].addEventListener("click", changeColor);
  }
  clickCounter = 0;
  whoseTurn.innerHTML = "Player 1 Turn";
  color = "purple";
}

//ENDGAME FUNCTION
function endGame() {
  if (clickCounter === 9) {
    whoseTurn.innerHTML = "GAME OVER";
    squares.forEach(square => {
      square.innerHTML = "";
    });
  }
}

//WINNER FUNCTION
let winCombos = [
  [squares[0], squares[1], squares[2]],
  [squares[0], squares[3], squares[6]],
  [squares[1], squares[4], squares[7]],
  [squares[3], squares[4], squares[5]],
  [squares[2], squares[5], squares[8]],
  [squares[6], squares[7], squares[8]],
  [squares[0], squares[4], squares[8]],
  [squares[2], squares[4], squares[6]]
];

function findWinner() {
  let winner = false;
  for (let i = 0; i < winCombos.length; i++) {
    let purpleCounter = 0;
    let yellowCounter = 0;
    for (let j = 0; j < winCombos[0].length; j++) {
      if (winCombos[i][j].style.backgroundColor == "purple") {
        purpleCounter++;
      } else if (winCombos[i][j].style.backgroundColor == "yellow") {
        yellowCounter++;
      }
    }
    if (purpleCounter == 3) {
      alert("Player 1 WINS");
    } else if (yellowCounter == 3) {
      alert("Player 2 WINS");
    } else if (purpleCounter < 3 && yellowCounter < 3 && clickCounter === 9) {
      alert("TIE GAME - NOBODY WINS");
    }
  }
}
