const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.passwordC = !isEmpty(data.passwordC) ? data.passwordC : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Numele trebuie sa fie intre 2 si 30 caractere";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Numele este necesar";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email-ul este necesar";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email-ul nu este valid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Campul parola este necesar";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Parola trebuie sa fie intre 6 si 30 caractere";
  }

  if (Validator.isEmpty(data.passwordC)) {
    errors.passwordC = "Este necesar sa confirmi parola";
  }

  if (!Validator.equals(data.password, data.passwordC)) {
    errors.passwordC = "Parolele trebuie sa fie identice";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
