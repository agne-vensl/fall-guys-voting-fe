import styled from "styled-components";

const colors = {
  primary: "#fc86cd",
  secondary: "#eee",
};

export const Button = styled.button`
  /* background-color: ${props =>
    props.color === "primary" ? "blue" : "grey"};
  border: 0;
  color: #fff;
  cursor: pointer;
  padding: 0.8rem 2rem; */
  /* position: relative; */
  /* font-family: "Montserrat", Arial, sans-serif; */
  /* font-size: calc(20px + 5vw); */
  background-color: transparent;
  border: 2px solid ${props => colors[props.color]};
  border-radius: 5px;
  cursor: pointer;
  /* font-weight: 700; */
  color: ${props => colors[props.color]};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  /* #1da9cc */
  text-shadow: 0 0 0.7em ${props => colors[props.color]};
  box-shadow: 0 0 0.7em ${props => colors[props.color]};
  /* user-select: none; */
  /* white-space: nowrap; */
  filter: blur(0.007em);
  padding: 0.8rem 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-shadow: 0 0 0.5em ${props => colors[props.color]};
    box-shadow: 0 0 0.5em ${props => colors[props.color]};
  }

  &:active {
    filter: brightness(85%);
  }
`;
