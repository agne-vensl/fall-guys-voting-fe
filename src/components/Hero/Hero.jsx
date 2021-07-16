import React from "react";
import PropTypes from "prop-types";
import * as S from "./Hero.style";

import Logo from "../Logo/Logo";

const Hero = ({ title }) => {
  return (
    <S.Hero>
        <S.LogoContainer className="container">
          <Logo
            src="https://fallguys.com/_next/image?url=%2Fimages%2Fseason4%2Flogo-desktop.png&w=1024&q=75"
            alt="fall-guys-logo"
            height="10rem"
          />
        </S.LogoContainer>

        <S.Title>{title}</S.Title>
    </S.Hero>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
};

Hero.defaultProps = {
  title: undefined,
};

export default Hero;
