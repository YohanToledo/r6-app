const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

//Rotas
const operatorsController = require("./components/controller/operators.controller");
app.use("/api/v1", operatorsController);
module.exports = app;
