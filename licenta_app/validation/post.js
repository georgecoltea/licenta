const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (Validator.isEmpty(data.text)) {
    errors.text = "Campul de text este necesar";
  }

  if (!Validator.isLength(data.text, { min: 10, max: 1000 })) {
    errors.text = "Postarea trebuie sa fie intre 10 si 1000 caractere";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
