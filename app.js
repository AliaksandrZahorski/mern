const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const PORT = config.get("port") || 8080;

const app = express();
(async () => {
  try {
    mongoose.connect(config.get("mongoUri"), {});
  } catch (e) {
    console.log("DB connection error ");
    process.exit(1);
  }
})();

app.listen(PORT, () =>
  console.log("Application started at port " + PORT + "...")
);
