const Hapi = require("@hapi/hapi");
const Lab = require("@hapi/lab");
const { expect } = require("@hapi/code");
const { describe, it } = (exports.lab = Lab.script());

const ship = require("../../../app/features/ship");

describe("ShipController", () => {

  it("should fetch all ships from the shipyard", async () => {
    const server = Hapi.server();
    server.register({
      plugin: ship
    });

    const resp = await server.inject({
      url: "/ships",
      method: "GET"
    });

    expect(JSON.parse(resp.payload)).to.equal([]);
    expect(resp.statusCode).to.equal(200);
  });

});
