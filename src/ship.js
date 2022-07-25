class Ship {
  constructor(length, name) {
    this.length = (() => {
      let arr = [];
      for (let i = 1; i <= length; i++) {
        arr.push(i);
      }
      return arr;
    })();
    this.sunk = false;
    this.name = name;
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

module.exports = Ship;
