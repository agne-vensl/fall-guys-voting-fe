import styled from "styled-components";

export const CardsContainer = styled.div`
  padding: 2rem auto;

  & > * {
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & > * {
      margin-top: 0;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
`;

export const NoResults = styled.div`
  color: #fff;
  font-weight: 700;
  padding: 2rem 0;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  color: #fc86cd;
  line-height: 2rem;
  margin-bottom: 3rem;
  margin-top: 0;
  text-align: center;
  text-shadow: 0 0 0.5rem #fc86cd;
  text-transform: uppercase;
`;
