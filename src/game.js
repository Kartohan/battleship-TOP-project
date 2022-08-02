const Player = require("./player");
const Ship = require("./ship");

class Game {
  constructor() {
    this.playerOne = new Player("Player");
    this.playerAI = new Player("Computer");
  }

  renderPlayer(obj) {
    obj.innerHTML = "";
    let cellId = 1;
    this.playerOne.gameboard.board.forEach((item) => {
      let cell = document.createElement("div");
      cell.dataset.id = cellId;
      cell.dataset.x = item.x;
      cell.dataset.y = item.y;
      cell.classList.add("cell");
      obj.append(cell);
      cellId++;
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
    // const cells = document.querySelectorAll(".cell");
    // cells.forEach((cell) => {
    //   cell.addEventListener("dragover", (e) => {
    //     const dragging = document.querySelector(".dragging");
    //     const shipNow = this.playerOne.ships.find(
    //       (item) => item.name === dragging.dataset.name
    //     );
    //     // console.log(shipNow);
    //     let check = this.playerOne.gameboard.checkPutShip(
    //       Number(e.target.dataset.x),
    //       Number(e.target.dataset.y),
    //       shipNow,
    //       "h"
    //     );
    //     if (check === "OK") {
    //       dragging.dataset.x = e.target.dataset.x;
    //       dragging.dataset.y = e.target.dataset.y;
    //     }
    //     if (check === "Cannot place there") {
    //       dragging.dataset.x = 1000;
    //       dragging.dataset.y = 1000;
    //     }
    //   });
    // });
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
    for (let i = 1; i <= 4; i++) {
      const portLine = document.createElement("div");
      portLine.classList.add("port-line");
      let length = 5 - i;
      let ships = this.playerOne.ships.filter(
        (item) => item.length.length === length
      );
      ships.forEach((ship) => {
        const shipEl = document.createElement("div");
        shipEl.classList.add("ship-body");
        shipEl.dataset.direction = "h";
        shipEl.setAttribute("draggable", "true");
        shipEl.dataset.name = ship.name;
        ship.length.forEach((part) => {
          const shipPart = document.createElement("div");
          shipPart.classList.add("ship-part");
          shipPart.classList.add("h");
          shipEl.append(shipPart);
        });
        portLine.append(shipEl);
      });
      port.append(portLine);
    }
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
