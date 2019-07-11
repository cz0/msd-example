const Glue = require("@hapi/glue");

const serverConfig = require("./config/manifest");

const options = { ...serverConfig.options, relativeTo: __dirname };

const startServer = async () => {
  try {
    const server = await Glue.compose(
      serverConfig.manifest,
      options
    );
    await server.start();
    console.log(`Server listening on ${server.info.uri}`);
    console.log(`Server is running in ${process.env.NODE_ENV} mode`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

process.on("unhandledRejection", (reason, p) => {
  console.error("Unhandled Rejection at:", p, "reason:", reason);
  process.exit(1);
});

startServer();
