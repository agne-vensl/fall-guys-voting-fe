import React from "react";
import PropTypes from "prop-types";
import * as S from "./Button.style";

const Button = ({ color, type, text, ...props }) => (
  <S.Button color={color} type={type} {...props}>
    {text}
  </S.Button>
);

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  text: PropTypes.string,
};

Button.defaultProps = {
  color: "primary",
  type: "button",
  text: undefined,
};

export default Button;
