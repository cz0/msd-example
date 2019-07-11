const Path = require("path");
const Config = require("./config");

const connection = {
  host: Config.get("/database/host"),
  port: Config.get("/database/port"),
  database: Config.get("/database/name"),
  user: Config.get("/database/username"),
  password: Config.get("/database/password")
};

const pool = {
  min: 2,
  max: 8
};

module.exports = {
  local: {
    client: Config.get("/database/client"),
    connection,
    pool,
    debug: true,
    seeds: {},
    migrations: {
      directory: Path.resolve("migrations", "develop"),
      tableName: "knex_migrations_local"
    }
  },

  test: {
    client: Config.get("/database/client"),
    connection,
    pool,
    debug: true,
    seeds: {},
    migrations: {
      directory: Path.resolve("migrations", "develop"),
      tableName: "knex_migrations_test"
    }
  },

  develop: {
    client: Config.get("/database/client"),
    connection,
    pool,
    migrations: {
      directory: Path.resolve("migrations", "develop"),
      tableName: "knex_migrations_dev"
    }
  }
};
