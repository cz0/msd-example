const Hapi = require("@hapi/hapi");
const Lab = require("@hapi/lab");
const sinon = require("sinon");
const { expect } = require("@hapi/code");
const { afterEach, describe, it } = (exports.lab = Lab.script());

const ShipService = require("../../../app/features/ship/ship.service");
const ship = require("../../../app/features/ship");

const sandbox = sinon.createSandbox();

describe("ShipController", () => {
  const server = Hapi.server();
  server.register({
    plugin: ship
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should fetch all ships from the shipyard", async () => {
    sandbox.stub(ShipService, "all").resolves([]);

    const resp = await server.inject({
      url: "/ships",
      method: "GET"
    });

    expect(JSON.parse(resp.payload)).to.equal([]);
    expect(resp.statusCode).to.equal(200);
  });
});
