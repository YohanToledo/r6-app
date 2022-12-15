const express = require("express");
const app = express();

//Rotas
const operatorsController = require("./components/operators/operators.controller");
app.use("/api/v1", operatorsController);
module.exports = app;
