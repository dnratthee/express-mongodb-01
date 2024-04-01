const mongoose = require("mongoose");

const MONGO_URI = process.env["MONGO_URI"] || "mongodb://localhost:27017/test";

function connect() {
  try {
    mongoose.connect(MONGO_URI);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  const db = mongoose.connection;

  db.on("error", (err) => {
    console.error("MongoDB connection error:" + err);
    process.exit(1);
  });

  db.once("open", () => {
    console.log("MongoDB connection established successfully");
  });
}

module.exports = connect;
