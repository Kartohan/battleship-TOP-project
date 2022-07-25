const Ship = require("./ship");
const Gameboard = require("./gameboard");

class Player {
  constructor(name) {
    this.name = name;
    this.ships = [
      new Ship(4, "Battleship"),
      new Ship(3, "Cruiser_one"),
      new Ship(3, "Cruiser_two"),
      new Ship(2, "Submarine_one"),
      new Ship(2, "Submarine_two"),
      new Ship(2, "Submarine_three"),
      new Ship(1, "Patrol_one"),
      new Ship(1, "Patrol_two"),
      new Ship(1, "Patrol_three"),
      new Ship(1, "Patrol_four"),
    ];
    this.turn = false;
    this.gameboard = new Gameboard(10);
  }
  putRandomly() {
    this.gameboard = new Gameboard(10);
    this.ships.forEach((ship) => {
      let directions = ["v", "h"];
      let randomIndex = () => {
        return Math.round(Math.random());
      };
      let index = randomIndex();
      let cells = [];
      this.gameboard.board.forEach((item) => {
        if (directions[index] === "v") {
          let add = true;
          for (let i = item.x; i < ship.length.length + item.x; i++) {
            let checkCell = this.gameboard.board.find(
              (cell) => cell.x === i && cell.y === item.y
            );
            if (checkCell == undefined || checkCell.marked) {
              add = false;
            }
          }
          if (add) {
            cells.push(item);
          }
        } else if (directions[index] === "h") {
          let add = true;
          for (let i = item.y; i < ship.length.length + item.y; i++) {
            let checkCell = this.gameboard.board.find(
              (cell) => cell.x === item.x && cell.y === i
            );
            if (checkCell == undefined || checkCell.marked) {
              add = false;
            }
          }
          if (add) {
            cells.push(item);
          }
        }
      });
      let randomCell = cells[Math.floor(Math.random() * cells.length)];
      this.gameboard.putShip(
        randomCell.x,
        randomCell.y,
        ship,
        directions[index]
      );
    });
  }
  attackRandomly(enemy) {
    let cells = enemy.gameboard.board.filter(
      (item) => item.attacked == undefined || !item.attacked
    );
    let randomCell = cells[Math.floor(Math.random() * cells.length)];
    enemy.gameboard.recieveAttack(randomCell.x, randomCell.y);
  }
  attackEnemy(enemy, x, y) {
    enemy.gameboard.recieveAttack(x, y);
  }
  createNewShips() {
    let newShips = [];
    for (let i = 0; i < this.ships.length; i++) {
      newShips.push(new Ship(this.ships[i].length.length, this.ships[i].name));
    }
    this.ships = newShips;
  }
}

module.exports = Player;
