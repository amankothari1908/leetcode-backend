const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("../src/config/server.config");
const apiRouter = require("./routes");
const BaseError = require("./errors/base.error");
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// just to check wether service is working or not
app.get("/ping", (req, res) => {
  return res.json({ message: "Leetcode problem service is live" });
});

//if any request comes and routes start with /api will be mapped to apiRouter
app.use("/api", apiRouter);

// last middleware if any error comes
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Started at PORT: ${PORT}`);
});
