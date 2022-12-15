const validateOperatorSchema = (obj) => {
  const objKeys = Object.keys(obj).sort();
  const schema = Object.keys(operatorSchema).sort();

  const isValid = JSON.stringify(objKeys) === JSON.stringify(schema);

  let missingFileds = [];

  if (!isValid) {
    schema.forEach((field) => {
      if (!objKeys.includes(field)) {
        missingFileds.push(field);
      }
    });
  }

  return { isValid, missingFileds };
};

const operatorSchema = {
  operator: "",
  name: "",
  affiliation: "",
  birthDate: "",
  birthPlace: "",
  height: 0,
  weight: 0,
  released: "",
  armor: 0,
  speed: 0,
  difficulty: "",
  imageUrl: "",
  iconUrl: "",
};

module.exports = validateOperatorSchema;
