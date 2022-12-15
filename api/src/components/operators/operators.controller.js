const express = require("express");
const service = require("./operators.service");

const controller = express.Router();

controller.get("", async function (req, res) {
  service.findAll(req, res);
});

controller.post("", async function (req, res) {
  service.create(req, res);
});

controller.put("/:id", async function (req, res) {
  service.update(req, res);
});

module.exports = controller;
