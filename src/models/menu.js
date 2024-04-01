const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, enum: ["Hot", "Ice", "Frappe"], required: true },
  },
  {
    collection: "menu",
    timestamps: false,
    versionKey: false,
  }
);

module.exports = mongoose.model("Menu", schema);
