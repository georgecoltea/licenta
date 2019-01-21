const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.title = "Titlul scolar este necesar";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.company = "Gradul este necesar";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Campul de studiu este necesar";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "Campul De la este necesar";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
