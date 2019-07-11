const Glue = require("@hapi/glue");
const logger = require("pino")();

const serverConfig = require("./config/manifest");

const options = { ...serverConfig.options, relativeTo: __dirname };

const startServer = async () => {
  try {
    const server = await Glue.compose(
      serverConfig.manifest,
      options
    );
    await server.start();
    logger.info(`Server listening on ${server.info.uri}`);
    logger.info(`Server is running in ${process.env.NODE_ENV} mode`);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

process.on("unhandledRejection", (reason, p) => {
  logger.error("Unhandled Rejection at:", p, "reason:", reason);
  process.exit(1);
});

startServer();
