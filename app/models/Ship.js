const Model = require(".");

class Ship extends Model {
  static get tableName() {
    return "ships";
  }
}

module.exports = Ship;
