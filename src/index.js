// import "./style.css";

class Ship {
  constructor(length) {
    this.length = (() => {
      let arr = [];
      for (let i = 1; i <= length; i++) {
        arr.push(i);
      }
      return arr;
    })();
    this.sunk = false;
  }
  hit(position) {
    let index = this.length.indexOf(position);
    this.length[index] = "x";
  }
  isSunk() {
    this.length.every((item) => item === "x")
      ? (this.sunk = true)
      : (this.sunk = false);
  }
}

class Gameboard {
  constructor(boardSize) {
    this.board = (() => {
      let board = [];
      for (let i = 1; i <= boardSize; i++) {
        for (let j = 1; j <= boardSize; j++) {
          let coords = {
            x: i,
            y: j,
          };
          board.push(coords);
        }
      }
      return board;
    })();
    this.isGameOver = false;
  }
  putShip(x, y, ship, direction) {
    if (direction === "v") {
      let j = 0;
      for (let i = y; i < ship.length.length + y; i++) {
        let cell = this.board.find((item) => item.x === x && item.y === i);
        let index = this.board.findIndex(
          (item) => item.x === x && item.y === i
        );
        cell.ship = ship;
        cell.shipPart = ship.length[j];
        this.board[index] = cell;
        j++;
      }
    } else if (direction === "h") {
      let j = 0;
      for (let i = x; i < ship.length.length + x; i++) {
        let cell = this.board.find((item) => item.x === i && item.y === y);
        let index = this.board.findIndex(
          (item) => item.x === i && item.y === y
        );
        cell.ship = ship;
        cell.shipPart = ship.length[j];
        this.board[index] = cell;
        j++;
      }
    }
  }
  checkGameOver() {
    let cellsWithShips = this.board.filter((item) => item.ship);
    if (cellsWithShips.every((item) => item.ship.sunk)) {
      this.isGameOver = true;
    }
  }
  recieveAttack(x, y) {
    if (this.board.find((item) => item.x === x && item.y === y).ship) {
      let cellIndex = this.board.findIndex(
        (item) => item.x === x && item.y === y
      );
      this.board[cellIndex].attacked = true;
      this.board[cellIndex].ship.hit(this.board[cellIndex].shipPart);
      this.board[cellIndex].ship.isSunk();
    } else {
      let cellIndex = this.board.findIndex(
        (item) => item.x === x && item.y === y
      );
      this.board[cellIndex].attacked = true;
    }
    this.checkGameOver();
  }
}

module.exports = { Ship, Gameboard };
