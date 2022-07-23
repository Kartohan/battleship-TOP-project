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
    this.isSunk();
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
    if (direction === "h") {
      let j = 0;
      for (let i = y; i < ship.length.length + y; i++) {
        let checkCell = this.board.find((item) => item.x === x && item.y === i);
        if (checkCell == undefined) {
          throw new Error("cannot be placed outside the field");
        }
        if (checkCell.marked) {
          throw new Error("cannot be placed near the another ship");
        }
      }
      for (let i = y; i < ship.length.length + y; i++) {
        let cell = this.board.find((item) => item.x === x && item.y === i);
        let index = this.board.findIndex(
          (item) => item.x === x && item.y === i
        );
        cell.ship = ship;
        cell.shipPart = ship.length[j];
        this.board[index] = cell;
        this.makeMarked(x, i);
        j++;
      }
    } else if (direction === "v") {
      let j = 0;
      for (let i = x; i < ship.length.length + x; i++) {
        let checkCell = this.board.find((item) => item.x === i && item.y === y);
        if (checkCell == undefined) {
          throw new Error("cannot be placed outside the field");
        }
        if (checkCell.marked) {
          throw new Error("cannot be placed near the another ship");
        }
      }
      for (let i = x; i < ship.length.length + x; i++) {
        let cell = this.board.find((item) => item.x === i && item.y === y);
        let index = this.board.findIndex(
          (item) => item.x === i && item.y === y
        );
        cell.ship = ship;
        cell.shipPart = ship.length[j];
        this.board[index] = cell;
        this.makeMarked(i, y);
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
    } else {
      let cellIndex = this.board.findIndex(
        (item) => item.x === x && item.y === y
      );
      this.board[cellIndex].attacked = true;
    }
    this.checkGameOver();
  }
  makeMarked(x, y) {
    let markedCoodrsArray = [];
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let coords = {
          x: i,
          y: j,
        };
        markedCoodrsArray.push(coords);
      }
    }

    let cell = this.board.find((item) => item.x === x && item.y === y);
    markedCoodrsArray.forEach((item) => {
      let nextCell = {
        x: cell.x - item.x,
        y: cell.y - item.y,
      };
      let index = this.board.findIndex(
        (item) => item.x === nextCell.x && item.y === nextCell.y
      );
      if (this.board[index]) {
        this.board[index].marked = true;
      }
    });
    return this.board;
  }
}

module.exports = { Ship, Gameboard };
