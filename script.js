let currentPlayer = "X";
let gameActive = true;

function makeMove(cell) {
  if (cell.textContent !== "" || !gameActive) return;

  cell.textContent = currentPlayer;

  if (checkWinner()) {
    document.getElementById("status").textContent = `Player ${currentPlayer} wins! 🎉`;
    gameActive = false;
    return;
  }

  if (isDraw()) {
    document.getElementById("status").textContent = "It's a draw! 🤝";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById("status").textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
  const cells = document.querySelectorAll(".cell");
  const winningCombinations = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // columns
    [0,4,8],[2,4,6]          // diagonals
  ];

  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    );
  });
}

function isDraw() {
  return [...document.querySelectorAll(".cell")].every(cell => cell.textContent !== "");
}

function resetGame() {
  document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
  currentPlayer = "X";
  gameActive = true;
  document.getElementById("status").textContent = `Player X's turn`;
}
