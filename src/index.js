import "./style.css";
const Ship = require("./ship");
const Gameboard = require("./gameboard");
const Player = require("./player");
const Game = require("./game");

let game = new Game();

const body = document.querySelector("body");
const gameBoard = document.createElement("div");
const playboardPlayerOne = document.createElement("div");
const playboardPlayerAI = document.createElement("div");
const controls = document.createElement("div");
const randomButton = document.createElement("button");
const startButton = document.createElement("button");
const restartButton = document.createElement("button");
const message = document.createElement("p");
const header = document.createElement("div");
const headerPlayer = document.createElement("div");
const headerAI = document.createElement("div");
const headerAIText = document.createElement("h2");
const headerPlayerText = document.createElement("h2");
const title = document.createElement("h1");

const port = game.renderShips();
let isGameStarted = false;

randomButton.innerText = "Randomize";
startButton.innerText = "Start Game";
restartButton.innerText = "Restart Game";
message.innerText = "Press randomize!";
message.style.color = "Blue";
headerAIText.innerText = "Computer";
headerPlayerText.innerText = "Player";
title.innerText = "Battleship";

message.classList.add("message");
controls.classList.add("controls");
gameBoard.classList.add("gameboard");
playboardPlayerOne.classList.add("playboard");
playboardPlayerAI.classList.add("playboard");
restartButton.style.display = "none";
header.classList.add("header");
headerAI.classList.add("header-AI");
headerPlayer.classList.add("header-player");
headerAIText.classList.add("header-AI-text");
headerPlayerText.classList.add("header-player-text");
title.classList.add("title");

game.renderPlayer(playboardPlayerOne);
game.renderPlayer(playboardPlayerAI);

randomButton.addEventListener("click", (e) => {
  game.playerOne.putRandomly();
  game.renderPlayer(playboardPlayerOne);
  message.innerText = "Press Start Game!";
});

startButton.addEventListener("click", (e) => {
  let checkShips = [];
  game.playerOne.ships.forEach((ship) => {
    let cellsWithShips = game.playerOne.gameboard.board.filter(
      (item) => item.ship
    );
    let findShip = cellsWithShips.find((item) => item.ship.name === ship.name);
    if (findShip) {
      checkShips.push(true);
    } else {
      checkShips.push(false);
    }
  });
  if (checkShips.every((item) => item === true)) {
    game.playerAI.putRandomly();
    randomButton.style.display = "none";
    startButton.style.display = "none";
    restartButton.style.display = "inline-block";
    message.innerText = "";
    isGameStarted = true;
  } else {
    message.innerText = "Place all ships into the field";
    message.style.color = "blue";
  }
});

restartButton.addEventListener("click", (e) => {
  randomButton.style.display = "inline-block";
  startButton.style.display = "inline-block";
  restartButton.style.display = "none";
  message.innerText = "Press randomize!";
  message.style.color = "blue";
  isGameStarted = false;
  game.playerOne.gameboard.isGameOver = false;
  game.playerAI.gameboard.isGameOver = false;
  game.playerOne.createNewShips();
  game.playerAI.createNewShips();
  game.playerOne.gameboard = new Gameboard(10);
  game.playerAI.gameboard = new Gameboard(10);
  game.renderPlayer(playboardPlayerOne);
  game.renderComputer(playboardPlayerAI);
});

playboardPlayerAI.addEventListener("click", (e) => {
  if (e.target.className === "playboard") {
    message.innerText = "Choose cell correctly";
    message.style.color = "red";
    return;
  }
  if (isGameStarted === false) {
    return;
  }
  if (game.playerOne.gameboard.isGameOver === true) {
    message.innerText = "Computer Wins!";
    message.style.color = "red";
    return;
  } else if (game.playerAI.gameboard.isGameOver === true) {
    message.innerText = "Player Wins!";
    message.style.color = "green";
    return;
  }
  try {
    game.playerOne.attackEnemy(
      game.playerAI,
      Number(e.target.dataset.x),
      Number(e.target.dataset.y)
    );
    game.playerAI.attackRandomly(game.playerOne);
    message.innerText = "";
  } catch (e) {
    message.innerText = e;
    message.style.color = "red";
  }
  game.renderPlayer(playboardPlayerOne);
  game.renderComputer(playboardPlayerAI);
  if (game.playerOne.gameboard.isGameOver === true) {
    message.innerText = "Computer Wins!";
    message.style.color = "red";
    return;
  } else if (game.playerAI.gameboard.isGameOver === true) {
    message.innerText = "Player Wins!";
    message.style.color = "green";
    return;
  }
});

headerPlayer.append(headerPlayerText);
headerAI.append(headerAIText);
header.append(headerPlayer, headerAI);
controls.append(randomButton, startButton, restartButton);
gameBoard.append(playboardPlayerOne, playboardPlayerAI);
body.append(title, header, gameBoard, controls, message);

// gameBoard.addEventListener("dragstart", (e) => {
//   if (e.target.draggable) {
//     if (e.target.dataset.x && e.target.dataset.y) {
//       game.playerOne.gameboard.removeShip(
//         Number(e.target.dataset.x),
//         Number(e.target.dataset.y)
//       );
//     }
//     e.target.classList.add("dragging");
//   }
// });
// gameBoard.addEventListener("dragend", (e) => {
//   if (e.target.draggable) {
//     game.playerOne.gameboard.putShip(
//       Number(e.target.dataset.x),
//       Number(e.target.dataset.y),
//       game.playerOne.ships.find((item) => item.name === e.target.dataset.name),
//       e.target.dataset.direction
//     );
//     e.target.style.position = "absolute";
//     e.target.classList.remove("dragging");
//   }
// });

// playboardPlayerOne.addEventListener("dragover", (e) => {
//   if (e.target.className === "cell") {
//     const cell = document.querySelector(`[data-id="${e.target.dataset.id}"]`);
//     const dragging = document.querySelector(".dragging");
//     dragging.dataset.x = e.target.dataset.x;
//     dragging.dataset.y = e.target.dataset.y;
//     let check = game.playerOne.gameboard.checkPutShip(
//       Number(e.target.dataset.x),
//       Number(e.target.dataset.y),
//       game.playerOne.ships.find((item) => item.name === dragging.dataset.name),
//       dragging.dataset.direction
//     );
//     if (check === "OK") {
//       cell.appendChild(dragging);
//     }
//   }
// });

// playboardPlayerOne.addEventListener("click", (e) => {
//   if (e.target.classList[0] === "ship-part") {
//     console.log(e);
//     if (e.target.offsetParent.dataset.direction === "h") {
//       game.playerOne.gameboard.removeShip(
//         Number(e.target.offsetParent.dataset.x),
//         Number(e.target.offsetParent.dataset.y)
//       );
//       let putShip = game.playerOne.gameboard.putShip(
//         Number(e.target.offsetParent.dataset.x),
//         Number(e.target.offsetParent.dataset.x),
//         game.playerOne.ships.find(
//           (item) => item.name === e.target.offsetParent.dataset.name
//         ),
//         "v"
//       );
//       putShip
//         ? "Cannot place there"
//         : game.playerOne.gameboard.putShip(
//             Number(e.target.offsetParent.dataset.x),
//             Number(e.target.offsetParent.dataset.x),
//             game.playerOne.ships.find(
//               (item) => item.name === e.target.offsetParent.dataset.name
//             ),
//             "h"
//           );
//       e.target.offsetParent.classList.add("vertical");
//       e.target.offsetParent.dataset.direction = "v";
//       e.target.offsetParent.childNodes.forEach((node) => {
//         node.classList.remove("h");
//         node.classList.add("v");
//       });
//     }
//   }
// });
