const Ship = require("./ship");

class Gameboard {
  constructor(boardSize) {
    this.board = (() => {
      let board = [];
      for (let i = 1; i <= boardSize; i++) {
        for (let j = 1; j <= boardSize; j++) {
          let coords = {
            x: i,
            y: j,
            marked: [],
          };
          board.push(coords);
        }
      }
      return board;
    })();
    this.size = boardSize;
    this.isGameOver = false;
  }

  checkPutShip(x, y, ship, direction) {
    let checks = [];
    if (direction === "h") {
      for (let i = y; i < ship.length.length + y; i++) {
        let checkCell = this.board.find((item) => item.x === x && item.y === i);
        if (checkCell == undefined) {
          checks.push(false);
        } else if (checkCell.marked.includes(true)) {
          checks.push(false);
        } else {
          checks.push(true);
        }
      }
    } else if (direction === "v") {
      for (let i = x; i < ship.length.length + x; i++) {
        let checkCell = this.board.find((item) => item.x === i && item.y === y);
        if (checkCell == undefined) {
          checks.push(false);
        } else if (checkCell.marked.includes(true)) {
          checks.push(false);
        } else {
          checks.push(true);
        }
      }
    }
    if (checks.find((item) => item === false) === false) {
      return "Cannot place there";
    } else if (checks.every((item) => item === true)) {
      return "OK";
    }
  }

  removeShip(x, y) {
    let cell = this.board.find((item) => item.x === x && item.y === y);
    if (cell.ship == undefined) {
      return "There is no ship";
    }
    let shipCells = this.board.filter((item) => {
      if (item.ship == undefined) {
        return;
      } else {
        return item.ship.name === cell.ship.name;
      }
    });
    shipCells.forEach((part) => {
      let index = this.board.findIndex((i) => i.x === part.x && i.y === part.y);
      this.board[index].ship = null;
      this.board[index].shipPart = null;
      this.makeMarked(part.x, part.y, "remove");
    });
  }

  putShip(x, y, ship, direction) {
    if (direction === "h") {
      let j = 0;
      let check = this.checkPutShip(x, y, ship, direction);
      if (check === "OK") {
        for (let i = y; i < ship.length.length + y; i++) {
          let cell = this.board.find((item) => item.x === x && item.y === i);
          let index = this.board.findIndex(
            (item) => item.x === x && item.y === i
          );
          cell.ship = ship;
          cell.shipPart = ship.length[j];
          this.board[index] = cell;
          this.makeMarked(x, i, "marked");
          j++;
        }
      } else {
        return check;
      }
    } else if (direction === "v") {
      let j = 0;
      let check = this.checkPutShip(x, y, ship, direction);
      if (check === "OK") {
        for (let i = x; i < ship.length.length + x; i++) {
          let cell = this.board.find((item) => item.x === i && item.y === y);
          let index = this.board.findIndex(
            (item) => item.x === i && item.y === y
          );
          cell.ship = ship;
          cell.shipPart = ship.length[j];
          this.board[index] = cell;
          this.makeMarked(i, y, "marked");
          j++;
        }
      } else {
        return check;
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
    let cellIndex = this.board.findIndex(
      (item) => item.x === x && item.y === y
    );
    if (this.board[cellIndex].attacked) {
      throw new Error("Cannot attack in the already attacked cell");
    }
    if (this.board.find((item) => item.x === x && item.y === y).ship) {
      this.board[cellIndex].attacked = true;
      this.board[cellIndex].ship.hit(this.board[cellIndex].shipPart);
      this.makeMarked(x, y, "attacked");
      if (this.board.find((item) => item.x === x && item.y === y).ship.sunk) {
        // for (
        //   let i = 0;
        //   i <=
        //   this.board.find((item) => item.x === x && item.y === y).ship.length
        //     .length;
        //   i++
        // ) {
        //   let shipName = this.board[cellIndex].ship.name;
        //   let cell = this.board.find(item => item.ship)
        //   this.makeMarked(cell.x, cell.y, "sunk");
        // }
        let shipName = this.board[cellIndex].ship.name;
        let sunkShipCells = this.board.filter(
          (item) => item.shipPart && item.ship.name === shipName
        );
        for (let i = 0; i < sunkShipCells.length; i++) {
          this.makeMarked(sunkShipCells[i].x, sunkShipCells[i].y, "sunk");
        }
      }
    } else {
      this.board[cellIndex].attacked = true;
    }
    this.checkGameOver();
  }
  makeMarked(x, y, mark) {
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
    let markedCoordsArrayWitoutZeros = [];
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 || j === 0) {
          continue;
        }
        let coords = {
          x: i,
          y: j,
        };
        markedCoordsArrayWitoutZeros.push(coords);
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
      if (this.board[index] && mark === "marked") {
        this.board[index].marked.push(true);
      } else if (this.board[index] && mark === "sunk") {
        this.board[index].attacked = true;
      } else if (this.board[index] && mark === "remove") {
        this.board[index].marked.pop();
      }
    });
    markedCoordsArrayWitoutZeros.forEach((item) => {
      let nextCell = {
        x: cell.x - item.x,
        y: cell.y - item.y,
      };
      let index = this.board.findIndex(
        (item) => item.x === nextCell.x && item.y === nextCell.y
      );
      if (this.board[index] && mark === "attacked") {
        this.board[index].attacked = true;
      }
    });
    return this.board;
  }
}

module.exports = Gameboard;
