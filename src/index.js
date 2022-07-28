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
const randomButton = document.createElement("button");
const startButton = document.createElement("button");
const restartButton = document.createElement("button");
const message = document.createElement("p");
let isGameStarted = false;

randomButton.innerText = "Randomize";
startButton.innerText = "Start Game";
restartButton.innerText = "Restart Game";
message.innerText = "Place ships!";
message.style.color = "Blue";

gameBoard.classList.add("gameboard");
playboardPlayerOne.classList.add("playboard");
playboardPlayerAI.classList.add("playboard");
restartButton.style.display = "none";

game.renderPlayer(playboardPlayerOne);

randomButton.addEventListener("click", (e) => {
  game.playerOne.putRandomly();
  game.renderPlayer(playboardPlayerOne);
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
  message.innerText = "Place ships!";
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

gameBoard.append(playboardPlayerOne, playboardPlayerAI);
body.append(
  gameBoard,
  game.renderShips(),
  randomButton,
  startButton,
  restartButton,
  message
);
