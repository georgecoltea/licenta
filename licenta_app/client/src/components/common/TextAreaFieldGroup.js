import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange
}) => {
  return (
    <div className="form-group">
      <TextField
        id="outlined-multiline-flexible"
        label={error}
        multiline
        rowsMax="4"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        margin="normal"
        helperText={info}
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;
