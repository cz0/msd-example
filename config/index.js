const Confident = require("confidence");

const criteria = {
  env: process.env.NODE_ENV
};

const config = {
  port: 3000,
  host: "localhost",
  debug: {
    $filter: "env",
    develop: {
      request: ["error", "info"]
    }
  }
};

const store = new Confident.Store(config, criteria);

module.exports = {
  get: key => store.get(key, criteria)
};
