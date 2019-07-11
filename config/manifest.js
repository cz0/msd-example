const Config = require(".");

const routes = {
  prefix: "/api/v1"
};

const plugins = [
  {
    plugin: "./app/features/ship",
    routes
  }
];

exports.manifest = {
  server: {
    debug: Config.get("/debug"),
    port: Config.get("/port"),
    host: Config.get("/host")
  },
  register: {
    plugins
  }
};
