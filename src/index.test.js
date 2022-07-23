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
  test("should have a hit() func", () => {
    let boat = new Ship(5);
    boat.hit(1);
    expect(boat.length).toContain("x");
  });
  test("should sunk if all positions is hit", () => {
    let boat = new Ship(2);
    boat.hit(1);
    boat.hit(2);
    boat.isSunk();
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
      { x: 1, y: 1, ship: ship, shipPart: 1 },
      { x: 1, y: 2, ship: ship, shipPart: 2 },
      { x: 1, y: 3 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 1 },
      { x: 3, y: 2 },
      { x: 3, y: 3 },
    ]);
  });
  test("should may be able to put the ship horizintally", () => {
    let playboard = new Gameboard(3);
    let ship = new Ship(2);
    playboard.putShip(1, 1, ship, "h");
    expect(playboard.board).toEqual([
      { x: 1, y: 1, ship: ship, shipPart: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 3 },
      { x: 2, y: 1, ship: ship, shipPart: 2 },
      { x: 2, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 1 },
      { x: 3, y: 2 },
      { x: 3, y: 3 },
    ]);
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
    });
    expect(ship.length).toEqual(["x"]);
    expect(ship.sunk).toBe(true);
  });
  test("should finish the game after all ships are sunk", () => {
    let playboard = new Gameboard(3);
    let smallShip = new Ship(1);
    let bigShip = new Ship(2);
    playboard.putShip(1, 1, smallShip, "v");
    playboard.putShip(3, 2, bigShip, "v");
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
