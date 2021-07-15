import styled from "styled-components";

export const Logo = styled.img`
  height: 10rem;
  transform: rotate(-10deg);

  @media only screen and (min-width: 768px) {
    height: ${props => props.height};
    margin-bottom: -10rem;
    position: relative;
    z-index: 1;
  }
`;
