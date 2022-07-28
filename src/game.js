const Player = require("./player");
const Ship = require("./ship");

class Game {
  constructor() {
    this.playerOne = new Player("Player");
    this.playerAI = new Player("Computer");
  }

  renderPlayer(obj) {
    obj.innerHTML = "";
    this.playerOne.gameboard.board.forEach((item) => {
      let cell = document.createElement("div");
      cell.dataset.x = item.x;
      cell.dataset.y = item.y;
      cell.classList.add("cell");
      obj.append(cell);
      if (item.ship) {
        cell.style.border = "1px solid blue";
        cell.style.backgroundColor = "rgb(153 198 255)";
      }
      if (item.attacked) {
        cell.innerText = "•";
        cell.dataset.attacked = "true";
      }
      if (item.attacked && item.ship) {
        cell.style.backgroundColor = "rgb(255 153 153)";
        cell.style.border = "1px solid red";
        cell.innerText = "";
      }
    });
  }
  renderComputer(obj) {
    obj.innerHTML = "";
    this.playerAI.gameboard.board.forEach((item) => {
      let cell = document.createElement("div");
      cell.dataset.x = item.x;
      cell.dataset.y = item.y;
      cell.classList.add("cell");
      cell.classList.add("computer");
      obj.append(cell);
      if (item.attacked) {
        cell.innerText = "•";
        cell.dataset.attacked = "true";
        cell.style.backgroundColor = "#8080804f";
      }
      if (item.attacked && item.ship) {
        cell.style.backgroundColor = "rgb(255 153 153)";
        cell.innerText = "";
        cell.style.border = "1px solid red";
      }
    });
  }

  renderShips() {
    const port = document.createElement("div");
    port.classList.add("port");
    this.playerOne.ships.forEach((ship) => {
      const shipEl = document.createElement("div");
      shipEl.classList.add("ship-body");
      shipEl.setAttribute("draggable", "true");
      ship.length.forEach((part) => {
        const shipPart = document.createElement("div");
        shipPart.classList.add("ship-part");
        shipEl.append(shipPart);
      });
      port.append(shipEl);
    });
    return port;
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

module.exports = Game;
