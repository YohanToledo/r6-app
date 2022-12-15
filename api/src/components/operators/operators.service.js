const db = require("../../db/db");
const {
  errorRes,
  successRes,
  errData,
} = require("../../common/responses/index");
const validateSchema = require("../../common/helpers/validate-schema");

const findAll = async (req, res) => {
  const Operators = db.Mongoose.model(
    "operators",
    db.OperatorSchema,
    "operators"
  );

  const ops = await Operators.find({}).lean().exec();

  res.json(ops);
};

const create = async (req, res) => {
  const Operators = db.Mongoose.model(
    "operators",
    db.OperatorSchema,
    "operators"
  );

  const { isValid, missingFileds } = validateSchema(req.body);
  console.log(isValid);

  if (isValid) {
    const op = new Operators({
      _id: new db.Mongoose.Types.ObjectId(),
      ...req.body,
    });

    try {
      const result = await op.save();
      successRes(res, result, 201);
    } catch (error) {
      errorRes(res, error, "error to create operator");
    }
  } else {
    errData(res, `Invalid data! Missing fields: \n${missingFileds}`);
  }
};

const update = async (req, res) => {
  const Operators = db.Mongoose.model(
    "operators",
    db.OperatorSchema,
    "operators"
  );

  const filter = { _id: req.params.id };
  const data = { ...req.body };

  try {
    const result = await Operators.findOneAndUpdate(filter, data);
    successRes(res, result, 200);
  } catch (error) {
    errorRes(res, error, "error to update operator");
  }
};
module.exports = { findAll, create, update };
