const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Porecla trebuie sa fie intre 2 si 40 caractere";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Porecla este necesara";
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = "Campul status este necesar";
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Campul tehnologii este necesar";
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = "Locatia este necesara";
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "URL-ul nu este valid";
    }
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "URL-ul nu este valid";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "URL-ul nu este valid";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "URL-ul nu este valid";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "URL-ul nu este valid";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "URL-ul nu este valid";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "URL-ul nu este valid";
    }
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
