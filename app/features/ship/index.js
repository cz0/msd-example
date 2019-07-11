const Joi = require("@hapi/joi");

const ShipController = require("./ship.controller");
const ShipSchema = require("./ship.schema");

const MODULE_NAME = "ship";

const plugin = {
  async register(server, options) {
    server.route([
      {
        method: "POST",
        path: "/ships",
        options: {
          handler: ShipController.createShip,
          description: "Add ship to shipyard",
          notes: "Ship object to be added to shipyard",
          tags: ["api", "ships"],
          validate: {
            payload: ShipSchema.shipSchema,
            failAction: (request, h, validationError) => {
              throw validationError;
            }
          },
          response: {
            schema: ShipSchema.shipWithIdSchema
          }
        }
      },
      {
        method: "GET",
        path: "/ships",
        options: {
          handler: ShipController.getShips,
          description: "Fetches list of Ships",
          notes: "Fetches all ships from the shipyard",
          tags: ["api", "ships"],
          response: {
            schema: Joi.array().items(ShipSchema.shipWithIdSchema)
          }
        }
      }
    ]);
  },
  name: MODULE_NAME,
  version: require("../../../package").version
};

module.exports = {
  plugin
};
