let currentPlayer = "X";
let gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function makeMove(row, col) {
    if (gameBoard[row][col] === "") {
        gameBoard[row][col] = currentPlayer;
        document.getElementsByClassName("cell")[row * 3 + col].innerText = currentPlayer;
        checkWin(row, col);
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWin(row, col) {
    if (
        gameBoard[row][0] === currentPlayer &&
        gameBoard[row][1] === currentPlayer &&
        gameBoard[row][2] === currentPlayer
    ) {
        alert(currentPlayer + " wins!");
        resetBoard();
    } else if (
        gameBoard[0][col] === currentPlayer &&
        gameBoard[1][col] === currentPlayer &&
        gameBoard[2][col] === currentPlayer
    ) {
        alert(currentPlayer + " wins!");
        resetBoard();
    } else if (
        (gameBoard[0][0] === currentPlayer &&
            gameBoard[1][1] === currentPlayer &&
            gameBoard[2][2] === currentPlayer) ||
        (gameBoard[0][2] === currentPlayer &&
            gameBoard[1][1] === currentPlayer &&
            gameBoard[2][0] === currentPlayer)
    ) {
        alert(currentPlayer + " wins!");
        resetBoard();
    }
    else if (
    gameBoard[0].every(cell => cell !== "") &&
    gameBoard[1].every(cell => cell !== "") &&
    gameBoard[2].every(cell => cell !== "")
    ) {
    alert("It's a draw!");
    resetBoard();
    }
    }

function resetBoard() {
currentPlayer = "X";
gameBoard = [
["", "", ""],
["", "", ""],
["", "", ""]
];
const cells = document.getElementsByClassName("cell");
for (let i = 0; i < cells.length; i++) {
cells[i].innerText = "";
}
}