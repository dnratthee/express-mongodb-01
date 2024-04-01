const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    birthYear: { type: Number, required: true },
  },
  {
    collection: "employee",
    timestamps: false,
    versionKey: false,
  }
);

module.exports = mongoose.model("Employee", schema);
