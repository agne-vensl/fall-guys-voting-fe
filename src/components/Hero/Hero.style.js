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

export const Title = styled.h1`
  color: #4fc1ff;
  font-size: 12vw;
  margin: 0 auto;
  margin-top: -2.5rem;
  position: relative;
  text-align: center;
  text-shadow: 0 0.015em 0.03em #3b3b3b, 0 0 0.7em #4fc1ff;
  text-transform: uppercase;
  transform: rotate(-10deg);
  width: fit-content;
  z-index: 2;

  @media only screen and (min-width: 768px) {
    font-size: 6rem;
    margin-top: -4rem;
  }
`;
