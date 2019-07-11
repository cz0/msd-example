const { transaction } = require("objection");

const Ship = require("../../models/Ship");

const all = async () => Ship.query();

const store = async ship =>
  transaction(Ship.knex(), trx => Ship.query(trx).insert(ship));

module.exports = {
  all,
  store
};
