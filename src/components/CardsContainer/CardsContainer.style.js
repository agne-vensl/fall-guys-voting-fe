import styled from "styled-components";

export const CardsContainer = styled.div`
  & > .container {
    padding: 2rem auto;
  }

  & > * > * {
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 768px) {
    & > .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    & > * > * {
      margin-top: 0;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`;

export const NoResults = styled.div`
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;
