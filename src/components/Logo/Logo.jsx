import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as S from "./Logo.style";

const Logo = ({ src, alt }) => (
  <div className="container">
    <Link to="/">
      <S.Logo src={src} alt={alt} />
    </Link>
  </div>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Logo;
