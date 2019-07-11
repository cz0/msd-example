const { Model } = require("objection");
const Knex = require("knex");
const config = require("../../knexfile")[process.env.NODE_ENV || "local"];

const knex = new Knex(config);

Model.knex(knex);

module.exports = Model;
