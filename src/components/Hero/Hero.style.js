import styled from "styled-components";

export const Hero = styled.div`
  margin-bottom: 3rem;

  &.container {
    padding: 0 1rem;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 6rem;
  }
`;

export const LogoContainer = styled.div`
  @media only screen and (min-width: 768px) {
    & > * {
      position: absolute;
      top: 0;
    }
  }
`;

export const Title = styled.h1`
  color: #4fc1ff;
  font-size: 12vw;
  margin: 0 auto;
  margin-top: -2.5rem;
  text-align: center;
  text-shadow: 0 0.015em 0.03em #3b3b3b, 0 0 0.7em #4fc1ff;
  text-transform: uppercase;
  transform: rotate(-10deg);
  width: fit-content;

  @media only screen and (min-width: 768px) {
    font-size: 6rem;
    margin-top: -2rem;
    padding-top: 5rem;
  }

  @media only screen and (min-width: 1000px) {
    padding-top: 0;
  }
`;
