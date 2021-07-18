import React from "react";
import PropTypes from "prop-types";
import * as S from "./Button.style";

import { Loading } from "../";

const Button = ({ color, type, text, loading, handleClick, ...props }) => (
  <S.Button color={color} type={type} onClick={handleClick} {...props}>
    {loading ? <Loading margin="0" size="1.3rem" /> : text}
  </S.Button>
);

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  color: "primary",
  type: "button",
  text: undefined,
  loading: false,
  handleClick: undefined,
};

export default Button;
