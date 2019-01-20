import React from "react";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  return (
    <div className="input-group mb-3">
      <InputLabel htmlFor="input-with-icon-adornment">{placeholder}</InputLabel>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        fullWidth
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <i className={icon} />
          </InputAdornment>
        }
      />
      <InputLabel htmlFor="invalid-feedback">{error}</InputLabel>
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
