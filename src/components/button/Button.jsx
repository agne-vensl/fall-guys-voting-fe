import React from "react";
import PropTypes from "prop-types";
import * as S from "./Button.style";

const Button = ({ color, type, text, handleClick, ...props }) => (
  <S.Button color={color} type={type} onClick={handleClick} {...props}>
    {text}
  </S.Button>
);

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "success"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  color: "primary",
  type: "button",
  text: undefined,
  handleClick: undefined,
};

export default Button;
