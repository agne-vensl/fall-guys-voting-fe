import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: #fff;
  letter-spacing: 0.02em;
  padding: 0.5rem;
  text-decoration: none;
  text-shadow: 0 0 0.2rem #fff;
  text-transform: uppercase;

  &:hover {
    border-bottom: 2px solid #fff;
  }

  &.active:hover {
    border-bottom: 2px solid #00d4f9;
  }

  &.active {
    color: #00d4f9;
    font-weight: 700;
    text-shadow: 0 0 1rem #00d4f9;
  }

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;
