const statusDisplay = document.querySelector('.game--status');
let gameActive = true;
let currentPlayer = 'X';
let gameState = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
];
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `game ended in a draw !`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);


function handleCellClick() {
    if (gameActive) {
        const cell = this;
        const clickedCellIndex = parseInt(cell.getAttribute('data-cell-index'))
        console.log(clickedCellIndex);

        if (gameState[clickedCellIndex] !== ' ' && !gameActive) {
            return;
        }
        handleCellPlayed(cell, clickedCellIndex);
        handleResultValidation();
    }

}
function handleCellPlayed(cell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    cell.innerHTML = currentPlayer;

}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winningPatterns.length; i++) {
        const [x, y, z] = winningPatterns[i];
        if (gameState[x] === gameState[y] && gameState[y] === gameState[z] && gameState[x] !== ' ') {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage()
        gameActive = false;
        return;
    }
    const roundDraw = !gameState.includes(' ');
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
    handlePlayerChange();
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleRestartGame() {
    gameState = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    gameActive = true;
    currentPlayer = 'X';
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');
}