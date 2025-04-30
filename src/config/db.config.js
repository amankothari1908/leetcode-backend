const mongoose = require("mongoose");
const { NODE_ENV, ATLAS_DB_URL } = require("./server.config");

async function connectToDB() {
  try {
    if (NODE_ENV == "dev") {
      await mongoose.connect(ATLAS_DB_URL);
    }
  } catch (error) {
    console.log("unable to connect to the DB Server");
    console.log(error);
  }
}

module.exports = { connectToDB };
