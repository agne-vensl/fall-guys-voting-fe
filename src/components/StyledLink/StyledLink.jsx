import React from "react";
import PropTypes from "prop-types";
import * as S from "./StyledLink.style";

const StyledLink = ({ to, text, ...props }) => (
  <S.StyledLink to={to} activeClassName="active" {...props}>
    {text}
  </S.StyledLink>
);

StyledLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

StyledLink.defaultProps = {
  to: "/",
  text: undefined,
};

export default StyledLink;
