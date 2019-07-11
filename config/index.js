const Confident = require("confidence");

require("dotenv").config();

const criteria = {
  env: process.env.NODE_ENV
};

const dbConfig = {
  client: process.env.DB_CLIENT,
  name: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD
};

const config = {
  port: 3000,
  host: "localhost",
  database: {
    $filter: "env",
    local: dbConfig,
    test: dbConfig,
    develop: dbConfig
  },
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
