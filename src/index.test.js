const Ship = require("./ship");
const Gameboard = require("./gameboard");
const Player = require("./player");

describe("Ship:", () => {
  test("should be instance of Ship ", () => {
    let boat = new Ship(1, "Small");
    expect(boat).toBeInstanceOf(Ship);
  });
  test("should have length", () => {
    let shipLength = 4;
    let boat = new Ship(shipLength);
    expect(boat.length).toBeDefined();
    expect(boat.length.length).toBe(shipLength);
  });
  test("should have methods: hit(), isSunk()", () => {
    let boat = new Ship(2, "Big");
    expect(boat).toMatchObject({
      hit: expect.any(Function),
      isSunk: expect.any(Function),
    });
  });
  test("hit() should be marked in the ship object", () => {
    let boat = new Ship(5, "Big");
    boat.hit(1);
    expect(boat.length).toContain("x");
  });
  test("should sunk if all positions are hit", () => {
    let boat = new Ship(2, "Big");
    boat.hit(1);
    boat.hit(2);
    expect(boat.sunk).toBe(true);
  });
});

describe("Gameboard:", () => {
  test("should be instance of Gameboard", () => {
    let playboard = new Gameboard(10);
    expect(playboard).toBeInstanceOf(Gameboard);
  });
  test("should create a board (2x2)", () => {
    let playboard = new Gameboard(2);
    expect(playboard.board).toEqual([
      { x: 1, y: 1, marked: [] },
      { x: 1, y: 2, marked: [] },
      { x: 2, y: 1, marked: [] },
      { x: 2, y: 2, marked: [] },
    ]);
  });
  test("should may be able to put the ship vertically", () => {
    let playboard = new Gameboard(3);
    let ship = new Ship(2, "Big");
    playboard.putShip(1, 1, ship, "v");
    expect(playboard.board).toEqual([
      { x: 1, y: 1, ship: ship, shipPart: 1, marked: [true, true] },
      { x: 1, y: 2, marked: [true, true] },
      { x: 1, y: 3, marked: [] },
      { x: 2, y: 1, ship: ship, shipPart: 2, marked: [true, true] },
      { x: 2, y: 2, marked: [true, true] },
      { x: 2, y: 3, marked: [] },
      { x: 3, y: 1, marked: [true] },
      { x: 3, y: 2, marked: [true] },
      { x: 3, y: 3, marked: [] },
    ]);
  });
  test("should may be able to put the ship horizintally", () => {
    let playboard = new Gameboard(3);
    let ship = new Ship(2, "Big");
    playboard.putShip(1, 1, ship, "h");
    expect(playboard.board).toEqual([
      { x: 1, y: 1, ship: ship, shipPart: 1, marked: [true, true] },
      { x: 1, y: 2, ship: ship, shipPart: 2, marked: [true, true] },
      { x: 1, y: 3, marked: [true] },
      { x: 2, y: 1, marked: [true, true] },
      { x: 2, y: 2, marked: [true, true] },
      { x: 2, y: 3, marked: [true] },
      { x: 3, y: 1, marked: [] },
      { x: 3, y: 2, marked: [] },
      { x: 3, y: 3, marked: [] },
    ]);
  });
  test("should cannot put ship in the marked place", () => {
    let playboard = new Gameboard(3);
    let smallShip = new Ship(1, "Small");
    let bigShip = new Ship(2, "Big");
    playboard.putShip(1, 1, smallShip, "v");
    expect(playboard.putShip(2, 2, bigShip, "h")).toEqual("Cannot place there");
  });
  test("should cannot put ship outside the playfield", () => {
    let playboard = new Gameboard(3);
    let bigShip = new Ship(2, "Big");
    expect(playboard.putShip(3, 3, bigShip, "h")).toEqual("Cannot place there");
  });
  test("should be able to recieve miss attack", () => {
    let playboard = new Gameboard(2);
    playboard.recieveAttack(1, 2);
    expect(playboard.board[1]).toEqual({
      x: 1,
      y: 2,
      attacked: true,
      marked: [],
    });
  });
  test("should be able to recieve hit attack", () => {
    let playboard = new Gameboard(2);
    let ship = new Ship(1, "Small");
    playboard.putShip(1, 1, ship, "v");
    playboard.recieveAttack(1, 1, ship);
    expect(playboard.board[0]).toEqual({
      x: 1,
      y: 1,
      ship: ship,
      shipPart: 1,
      attacked: true,
      marked: [true],
    });
    expect(ship.length).toEqual(["x"]);
    expect(ship.sunk).toBe(true);
  });
  test("should cannot recieve attack in the same place", () => {
    let playboard = new Gameboard(2);
    playboard.recieveAttack(1, 2);
    expect(() => playboard.recieveAttack(1, 2)).toThrow(
      "Cannot attack in the already attacked cell"
    );
  });
  test("should mark 'attacked' around the ship when it sunk", () => {
    let playboard = new Gameboard(2);
    let ship = new Ship(1, "Small");
    playboard.putShip(1, 1, ship, "v");
    playboard.recieveAttack(1, 1);
    expect(() => playboard.recieveAttack(1, 2)).toThrow(
      "Cannot attack in the already attacked cell"
    );
    expect(() => playboard.recieveAttack(2, 2)).toThrow(
      "Cannot attack in the already attacked cell"
    );
    expect(() => playboard.recieveAttack(2, 1)).toThrow(
      "Cannot attack in the already attacked cell"
    );
  });
  test('should mark "attacked" in the diagonal cell', () => {
    let playboard = new Gameboard(2);
    let ship = new Ship(2, "Big");
    playboard.putShip(1, 1, ship, "v");
    playboard.recieveAttack(1, 1);
    expect(() => playboard.recieveAttack(2, 2)).toThrow(
      "Cannot attack in the already attacked cell"
    );
    expect();
  });

  test("should finish the game after all ships are sunk", () => {
    let playboard = new Gameboard(3);
    let smallShip = new Ship(1, "Small");
    let bigShip = new Ship(2, "Big");
    playboard.putShip(1, 1, smallShip, "v");
    playboard.putShip(3, 2, bigShip, "h");
    playboard.recieveAttack(1, 1);
    playboard.recieveAttack(3, 2);
    playboard.recieveAttack(3, 3);
    expect(playboard.board[0].attacked).toBe(true);
    expect(playboard.board[7].attacked).toBe(true);
    expect(playboard.board[8].attacked).toBe(true);
    expect(smallShip.sunk).toBe(true);
    expect(bigShip.sunk).toBe(true);
    expect(playboard.isGameOver).toBe(true);
  });
});

describe("Player:", () => {
  test("should be instance of Player", () => {
    expect(new Player()).toBeInstanceOf(Player);
  });
  test("should have a name", () => {
    let playerOne = new Player("name");
    expect(playerOne.name).toEqual("name");
  });
  test("should have a ships array", () => {
    let playerOne = new Player("player");
    expect(playerOne.ships).toBeInstanceOf(Array);
  });
  test("should have a turn", () => {
    let playerOne = new Player("player");
    expect(playerOne.turn).toBe(false);
  });
  test("should have a gameboard", () => {
    let playerOne = new Player("player");
    expect(playerOne.gameboard).toBeInstanceOf(Gameboard);
  });
  test("can attack enemy gameboard", () => {
    let playerOne = new Player("player one");
    let playerTwo = new Player("player two");
    playerOne.putRandomly();
    playerTwo.putRandomly();
    playerOne.attackEnemy(playerTwo, 1, 1);
    expect(playerTwo.gameboard.board[0].attacked).toBe(true);
  });
});
