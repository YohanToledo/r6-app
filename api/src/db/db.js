const mongoose = require("mongoose");
const { operatorSchema } = require("./models/index");
require("dotenv").config();

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/r6-db`
);

module.exports = { Mongoose: mongoose, OperatorSchema: operatorSchema };
