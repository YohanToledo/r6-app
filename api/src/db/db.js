const mongoose = require("mongoose");
const { operatorSchema } = require("./models/index");

mongoose.connect("mongodb://yohan:root@186.237.58.195:27017/r6-db");

module.exports = { Mongoose: mongoose, OperatorSchema: operatorSchema };
