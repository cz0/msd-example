const Config = require(".");

const plugins = [];

exports.manifest = {
  server: {
    router: {
      stripTrailingSlash: true,
      isCaseSensitive: false
    },
    routes: {
      security: {
        hsts: false,
        xss: true,
        noOpen: true,
        noSniff: true,
        xframe: false
      },
      cors: {
        origin: ["*"],
        credentials: true
      },
      jsonp: "callback",
      auth: false // remove this to enable authentication or set your authentication profile ie. auth: 'jwt'
    },
    debug: Config.get("/debug"),
    port: Config.get("/port"),
    host: Config.get("/host")
  },
  register: {
    plugins
  }
};
