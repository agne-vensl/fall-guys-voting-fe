import React from "react";
import * as S from "./Header.style";

import { StyledLink } from "../";

const Header = () => (
  <S.Header>
    <div className="container">
      <StyledLink
        to="/login"
        text="Logout"
        onClick={() => {
          localStorage.removeItem("token");
        }}
      />
    </div>
  </S.Header>
);

export default Header;
