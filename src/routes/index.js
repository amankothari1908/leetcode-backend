const express = require("express");
const v1Router = require("./v1");

const apiRouter = express.Router();

//if any request comes and routes continue with /v1 will be mapped to v1Router
apiRouter.use("/v1", v1Router);

module.exports = apiRouter;
