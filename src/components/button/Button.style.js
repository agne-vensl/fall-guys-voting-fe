import styled from "styled-components";

const colors = {
  primary: "#fc86cd",
  secondary: "#eee",
  success: "#4fc1ff",
  danger: "#a72020",
};

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid ${props => colors[props.color]};
  border-radius: 5px;
  box-shadow: 0 0 0.7em ${props => colors[props.color]};
  cursor: pointer;
  color: ${props => colors[props.color]};
  filter: blur(0.007em);
  letter-spacing: 0.02em;
  padding: 0.8rem 2rem;
  text-transform: uppercase;
  text-shadow: 0 0 0.7em ${props => colors[props.color]};
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 0.5em ${props => colors[props.color]};
    text-shadow: 0 0 0.5em ${props => colors[props.color]};
  }

  &:active {
    filter: brightness(85%);
  }
`;
