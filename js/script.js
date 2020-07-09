

let currentPlayer = "X";
// let redP = "red";
// let blueP = "blue";
let gameState = ["", "", "", "", "", "", "", "", ""];
let counter = 0;
// 4console.log(currentPlayer)
const boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector("#reset");
const messageDiv = document.querySelector(".message-div");

console.log(boxes);
console.log(resetButton)
console.log(messageDiv)

resetButton.addEventListener("click", resetGame);

function resetGame() {

    gameState = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    counter = 0;

    boxes.forEach((box) => {
        box.innerHTML = ''
        box.removeEventListener("click", boxEventListener);
        box.addEventListener("click", boxEventListener, { once: true });


    });

    function removeEvents() {
        boxes.forEach((box) => {
            box.removeEventListener("click", boxEventListener);

        });

    }

    function boxEventListener() {
        gameState[this.id] = currentPlayer;
        counter++
        winLogic();
        console.log(gameState);

        this.innerHTML = currentPlayer;

        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }

    }
    
    
    function winLogic() {
        if (gameState[0] === gameState[1] && gameState[1] === gameState[2] && gameState[0] !== "") {
            messageDiv.innerHTML = `${currentPlayer} is the winner!`;
            removeEvents();
        } else if (
            gameState[3] === gameState[4] &&
            gameState[4] === gameState[5] &&
            gameState[3] !== ""
        ) {
            messageDiv.innerHTML = `${currentPlayer} is the winner!`;
            removeEvents();
        } else if (
            gameState[6] === gameState[7] &&
            gameState[7] === gameState[8] &&
            gameState[6] !== ""
        ) {
            messageDiv.innerHTML = `${currentPlayer} is the winner!`;
            removeEvents();
        } else if (
            gameState[0] === gameState[3] &&
            gameState[3] === gameState[6] &&
            gameState[0] !== ""
        ) {
            messageDiv.innerHTML = `${currentPlayer} is the winner!`;
            removeEvents();
        } else if (
            gameState[1] === gameState[4] &&
            gameState[4] === gameState[7] &&
            gameState[1] !== ""
        ) {
            messageDiv.innerHTML = `${currentPlayer} is the winner!`;
            removeEvents();
        } else if (
            gameState[2] === gameState[5] &&
            gameState[5] === gameState[8] &&
            gameState[2] !== ""
        ) {
            messageDiv.innerHTML = `${currentPlayer} is the winner!`;
            removeEvents();
        } else if (
            gameState[0] === gameState[4] &&
            gameState[4] === gameState[8] &&
            gameState[0] !== ""
        ) {
            messageDiv.innerHTML = `${currentPlayer} is the winner!`;
            removeEvents();
        } else if (
            gameState[2] === gameState[4] &&
            gameState[4] === gameState[6] &&
            gameState[2] !== ""
        ) {
            messageDiv.innerHTML = `${currentPlayer} is the winner!`;
            removeEvents();
        } else if (counter === 9) {
            messageDiv.innerHTML = "No winner";
            removeEvents();
        } else {
            messageDiv.innerHTML = "No winner yet";
        }
    }

        
        






// }

// function changeBoxcolorToRed(event) {
//     document.querySelector(gindex).gindex.style.backgroundColor = "red";
   
// }


// function changeBoxcolorToBlue(event) {
//     document.querySelector(gindex).gindex.style.backgroundColor = "blue";

// }

// const winningMessage = () => `Player ${currentPlayer} has won!`;
// const tieMessage = () => `Game ended in a tie`;
// const currentcurrentPlayer = () => `It's ${currentPlayer}'s turn`;

// statusDisplay.innerHTML = currentcurrentPlayer();

// document.querySelector(".gameReset")
// {

   



// const winningOptions = [
    
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7],
// ];














// function handleResultValidation() {
//     let rWin = false;
//     for (let i = 0; i <= 8; i++) {
//         const winOps = winningOptions[i];
//         let a = gameState[winOps[0]];
//         let b = gameState[winOps[1]];
//         let c = gameState[winOps[2]];
//         if (a === "" || b === "" || c === "") {
//             continue;
//         }
//         if (a === b && b === c) {
//             rWin = true;
//             break
//         }

//     }
// }

// if (rWin) {
//     statusDisplay.innerHTML = winningMessage();
//     gameActive = false;
//     return;


// }
// function handleCellClick() {

// }
// function handleRestartGame() {

}
