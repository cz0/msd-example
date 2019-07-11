const logger = require("pino")();

const ShipService = require("./ship.service");

const getShips = async (request, h) => {
  const ships = await ShipService.all();
  logger.info(`Got ${ships.length} ships.`);

  const result = ships.map(({ id, name, speed }) => ({
    id,
    name,
    speed
  }));

  return h.response(result).code(200);
};

const createShip = async (request, h) => {
  const ship = await ShipService.store(request.payload);
  logger.info(`Ship ID ${ship.id} stored to db.`);

  return h.response(ship).code(201);
};

module.exports = {
  createShip,
  getShips
};
