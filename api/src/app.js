const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const operatorsController = require("./components/operators/operators.controller");

app.use(bodyParser.json());

//Rotas
app.use("/api/v1/operators", operatorsController);

module.exports = app;
