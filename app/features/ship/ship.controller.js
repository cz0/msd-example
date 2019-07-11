const ShipService = require("./ship.service");

const getShips = async (request, h) => {
  const ships = await ShipService.all();
  console.log(`Got ${ships.length} ships.`);

  const result = ships.map(({ id, name, speed }) => ({
    id,
    name,
    speed
  }));

  return h.response(result).code(200);
};

const createShip = async (request, h) => {
  const ship = await ShipService.store(request.payload);
  console.log(`Ship ID ${ship.id} stored to db.`);

  return h.response(ship).code(201);
};

module.exports = {
  createShip,
  getShips
};
