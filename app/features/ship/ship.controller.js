const getShips = async (request, h) => {
  return h.response([]).code(200);
};

const createShip = async (request, h) => {
  return h.response({}).code(201);
};

module.exports = {
  createShip,
  getShips
};
