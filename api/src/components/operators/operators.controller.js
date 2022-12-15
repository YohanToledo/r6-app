const express = require("express");
const service = require("./operators.service");

const controller = express.Router();

controller.get("/operators", async function (req, res) {
  service.findAll(req, res);
});

controller.post("/operators", async function (req, res) {
  service.create(req, res);
});

module.exports = controller;
