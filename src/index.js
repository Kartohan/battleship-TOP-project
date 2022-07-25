// import "./style.css";
const Ship = require("./ship");
const Gameboard = require("./gameboard");
const Player = require("./player");

class Game {
  constructor() {
    this.playerOne = new Player("Player");
    this.playerAI = new Player("Computer");
  }
  gameAuto() {
    this.playerOne.putRandomly();
    this.playerAI.putRandomly();
    let gameOver = false;
    let turn = 0;
    do {
      this.playerOne.attackRandomly(this.playerAI);
      this.playerAI.attackRandomly(this.playerOne);
      turn++;
      if (
        this.playerOne.gameboard.isGameOver === true ||
        this.playerAI.gameboard.isGameOver === true
      ) {
        gameOver = true;
      }
    } while (gameOver === false);
  }
}
