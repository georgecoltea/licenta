const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email-ul nu este valid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email-ul este necesar";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Parola este necesara";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Parola trebuie sa fie intre 6 si 30 caractere";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
