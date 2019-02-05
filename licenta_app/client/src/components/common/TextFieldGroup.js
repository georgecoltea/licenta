import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <TextField
        type={type}
        id={name}
        label={error}
        style={{ margin: 8 }}
        placeholder={placeholder}
        name={name}
        value={value}
        fullWidth
        margin="normal"
        onChange={onChange}
        disabled={disabled}
        InputLabelProps={{
          shrink: true
        }}
        helperText={info}
      />
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
