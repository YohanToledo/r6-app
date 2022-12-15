const db = require("../../db/db");

const findAll = async (req, res) => {
  const Operators = db.Mongoose.model(
    "operators",
    db.OperatorSchema,
    "operators"
  );

  const ops = await Operators.find({}); //.lean().exec();

  res.json(ops);
};

const create = async (req, res) => {
  const Operators = db.Mongoose.model(
    "operators",
    db.OperatorSchema,
    "operators"
  );

  const ops = await Operators.save(req); //.lean().exec();

  res.json(ops);
};

module.exports = { findAll, create };
