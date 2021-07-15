import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as S from "./Logo.style";

const Logo = ({ src, alt, height }) => (
  <div className="container">
    <Link to="/">
      <S.Logo src={src} alt={alt} height={height} />
    </Link>
  </div>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string,
};

Logo.defaultProps = {
  height: "15rem",
};

export default Logo;
