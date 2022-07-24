const { Ship, Gameboard } = require("./index");

describe("Ship:", () => {
  test("should be instance of Ship ", () => {
    let boat = new Ship(1);
    expect(boat).toBeInstanceOf(Ship);
  });
  test("should have length", () => {
    let shipLength = 4;
    let boat = new Ship(shipLength);
    expect(boat.length).toBeDefined();
    expect(boat.length.length).toBe(shipLength);
  });
  test("should have methods: hit(), isSunk()", () => {
    let boat = new Ship(2);
    expect(boat).toMatchObject({
      hit: expect.any(Function),
      isSunk: expect.any(Function),
    });
  });
  test("hit() should be marked in the ship object", () => {
    let boat = new Ship(5);
    boat.hit(1);
    expect(boat.length).toContain("x");
  });
  test("should sunk if all positions are hit", () => {
    let boat = new Ship(2);
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
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
    ]);
  });
  test("should may be able to put the ship vertically", () => {
    let playboard = new Gameboard(3);
    let ship = new Ship(2);
    playboard.putShip(1, 1, ship, "v");
    expect(playboard.board).toEqual([
      { x: 1, y: 1, ship: ship, shipPart: 1, marked: true },
      { x: 1, y: 2, marked: true },
      { x: 1, y: 3 },
      { x: 2, y: 1, ship: ship, shipPart: 2, marked: true },
      { x: 2, y: 2, marked: true },
      { x: 2, y: 3 },
      { x: 3, y: 1, marked: true },
      { x: 3, y: 2, marked: true },
      { x: 3, y: 3 },
    ]);
  });
  test("should may be able to put the ship horizintally", () => {
    let playboard = new Gameboard(3);
    let ship = new Ship(2);
    playboard.putShip(1, 1, ship, "h");
    expect(playboard.board).toEqual([
      { x: 1, y: 1, ship: ship, shipPart: 1, marked: true },
      { x: 1, y: 2, ship: ship, shipPart: 2, marked: true },
      { x: 1, y: 3, marked: true },
      { x: 2, y: 1, marked: true },
      { x: 2, y: 2, marked: true },
      { x: 2, y: 3, marked: true },
      { x: 3, y: 1 },
      { x: 3, y: 2 },
      { x: 3, y: 3 },
    ]);
  });
  test("should cannot put ship in the marked place", () => {
    let playboard = new Gameboard(3);
    let smallShip = new Ship(1);
    let bigShip = new Ship(2);
    playboard.putShip(1, 1, smallShip, "v");
    expect(() => playboard.putShip(2, 2, bigShip, "h")).toThrow(
      "cannot be placed near the another ship"
    );
  });
  test("should cannot put ship outside the playfield", () => {
    let playboard = new Gameboard(3);
    let bigShip = new Ship(2);
    expect(() => playboard.putShip(3, 3, bigShip, "h")).toThrow(
      "cannot be placed outside the field"
    );
  });
  test("should be able to recieve miss attack", () => {
    let playboard = new Gameboard(2);
    playboard.recieveAttack(1, 2);
    expect(playboard.board[1]).toEqual({
      x: 1,
      y: 2,
      attacked: true,
    });
  });
  test("should be able to recieve hit attack", () => {
    let playboard = new Gameboard(2);
    let ship = new Ship(1);
    playboard.putShip(1, 1, ship, "v");
    playboard.recieveAttack(1, 1, ship);
    expect(playboard.board[0]).toEqual({
      x: 1,
      y: 1,
      ship: ship,
      shipPart: 1,
      attacked: true,
      marked: true,
    });
    expect(ship.length).toEqual(["x"]);
    expect(ship.sunk).toBe(true);
  });
  test("should cannot recieve attack in the same place", () => {
    let playboard = new Gameboard(2);
    playboard.recieveAttack(1, 2);
    expect(() => playboard.recieveAttack(1, 2)).toThrow(
      "cannot attack in the same cell"
    );
  });
  test("should finish the game after all ships are sunk", () => {
    let playboard = new Gameboard(3);
    let smallShip = new Ship(1);
    let bigShip = new Ship(2);
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
