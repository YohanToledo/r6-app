const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const operatorSchema = new mongoose.Schema(
  {
    _id: Schema.ObjectId,
    operator: String,
    name: String,
    affiliation: String,
    birthDate: String,
    birthPlace: String,
    height: Number,
    weight: Number,
    released: String,
    armor: Number,
    speed: Number,
    difficulty: String,
    imageUrl: String,
    iconUrl: String,
  },
  {
    collection: "operators",
    versionKey: false,
  }
);

module.exports = { operatorSchema };
