import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { input as inputTheme, font as fontTheme } from "../utils/theme";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";

const StyledInputLabel = withStyles({
  root: {
    width: "100%",
    fontFamily: "Montserrat",
    fontWeight: "500",
    color: inputTheme.dark,
    "&.Mui-focused": {
      color: props =>
        props.disabled || props.err ? inputTheme.dark : inputTheme.primary
    },
    "&.Mui-disabled": {
      color: inputTheme.dark
    }
  }
})(InputLabel);

const StyledInputBase = withStyles({
  root: {
    width: "100%",
    marginTop: "8px",
    fontFamily: "Metropolis-Regular"
  },
  input: {
    borderRadius: "20px",
    border: props =>
      `solid 2px ${props.disabled ? inputTheme.dark : props.color}`,
    fontSize: fontTheme.normal,
    padding: "15px",
    "&:disabled": {
      boxShadow: "none",
      backgroundColor: inputTheme.disabledBackground,
      borderColor: inputTheme.disabledBorder,
      color: inputTheme.disabledText,
      fontFamily: "Metropolis-Bold"
    },
    "&:hover": {
      boxShadow: props =>
        `0 2px 0 0 ${
          props.disabled ? inputTheme.disabledBackground : props.color
        }`
    },
    "&:focus": {
      boxShadow: props =>
        `0 0 0 2px ${
          props.disabled ? inputTheme.disabledBackground : props.color
        }`,
      borderColor: props => props.color
    }
  }
})(InputBase);

const StyledErrorLabel = withStyles({
  root: {
    width: "100%",
    fontFamily: "Montserrat",
    fontWeight: "500",
    color: inputTheme.error,
    marginTop: "8px",
    fontSize: fontTheme.small,
    opacity: props => (props.error ? 1 : 0)
  }
})(InputLabel);

const InputField = ({
  label,
  value,
  placeholder,
  error,
  errorMsg,
  onChange,
  type = "text",
  blurHandler = () => {},
  min = "0",
  max = null,
  disabled
}) => {
  const [focus, setFocus] = useState(false);
  const handleChange = e => {
    setFocus(true);
    onChange(e.target.value);
  };
  // const showRupee = () => {
  //   if (rupeeIcon)
  //     return <span style={{ color: "#CCD5E0", position: "relative", display: "flex", top: "-46px", left: "20%" }} >₹</span>;
  // }
  return (
    <div>
      <StyledInputLabel disabled={disabled} focused={focus} err={error}>
        {label}
      </StyledInputLabel>
      <StyledInputBase
        onBlur={() => {
          setFocus(false);
          blurHandler();
        }}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        focused={focus}
        type={type}
        inputProps={{ min: min, max: max }}
        // color={error ? inputTheme.error : inputTheme.primary}
        color={error ? "#fc5c65" : "#02bbd4"}
      />
      {/* {showRupee()} */}
      <StyledErrorLabel error={error}>
        <i className="fas fa-exclamation-circle" /> {errorMsg}
      </StyledErrorLabel>
    </div>
  );
};

InputField.protoTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.boolean,
  errorMsg: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

InputField.defaultProps = {
  error: false,
  disabled: false,
  errorMsg: "error"
};

export default InputField;
