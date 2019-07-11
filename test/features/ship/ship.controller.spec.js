const Hapi = require("@hapi/hapi");
const Lab = require("@hapi/lab");
const sinon = require("sinon");
const { expect } = require("@hapi/code");
const { afterEach, describe, it } = (exports.lab = Lab.script());

const ShipService = require("../../../app/features/ship/ship.service");
const ship = require("../../../app/features/ship");
const { testShip, testShipWithId } = require("./ship.seed");

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
    sandbox.stub(ShipService, "all").resolves([testShipWithId]);

    const resp = await server.inject({
      url: "/ships",
      method: "GET"
    });

    expect(JSON.parse(resp.payload)).to.equal([testShipWithId]);
    expect(resp.statusCode).to.equal(200);
  });

  it("should add ship to shipyard", async () => {
    sandbox.stub(ShipService, "store").resolves(testShipWithId);

    const resp = await server.inject({
      url: "/ships",
      method: "POST",
      payload: testShip
    });

    expect(ShipService.store.calledWith(testShip)).to.be.true();
    expect(JSON.parse(resp.payload)).to.equal(testShipWithId);
    expect(resp.statusCode).to.equal(201);
  });

  it("should return 400 if required field is missing in request payload", async () => {
    const resp = await server.inject({
      url: "/ships",
      method: "POST",
      payload: {}
    });

    expect(resp.statusCode).to.equal(400);
  });

  it("should return 400 if request payload has extra fields", async () => {
    const resp = await server.inject({
      url: "/ships",
      method: "POST",
      payload: testShipWithId
    });

    expect(resp.statusCode).to.equal(400);
  });
});
