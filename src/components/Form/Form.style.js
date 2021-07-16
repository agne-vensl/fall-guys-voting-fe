import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #00000078;
  border-radius: 1.25em;
  box-shadow: rgb(0 0 0 / 22%) 0 0.625em 0.625em -0.5em;
  margin: 0.2rem;
  margin-top: -6rem;
  padding: 5rem 1rem;

  @media only screen and (min-width: 768px) {
    padding: 5rem 7rem;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
  }
`;

export const Form = styled.form`
  .input-field {
    margin-bottom: 2.5rem;
  }

  label {
    color: #eee;
    display: block;
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  input {
    background-color: #742c8e;
    border: 0;
    border-radius: 0.3125em;
    box-shadow: rgb(0 0 0 / 22%) 0.3125em 0.625em 0.625em -0.5em;
    color: #eee;

    outline: 0;
    padding: 0.8rem;
    width: 100%;

    ::placeholder {
      color: #2f0a3d;
    }
  }
`;

export const FormImage = styled.img`
  display: none;

  @media only screen and (min-width: 768px) {
    display: initial;
    height: 20rem;
    position: absolute;
    right: -25%;
    top: 65%;
  }
`;
