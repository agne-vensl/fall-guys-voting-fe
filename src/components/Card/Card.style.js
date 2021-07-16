import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #00000078;
  border-radius: 1.25em;
  box-shadow: rgb(0 0 0 / 22%) 0 0.625em 0.625em -0.5em;
  padding: 1rem;
  width: 14.5rem;
  transition: transform 0.2s ease-in-out;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-in-out;
  }
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  background-color: #923cb5;
  background: radial-gradient(#9e41c0, #2f0a3d 90%);
  border: 0.25em solid #fff;
  border-radius: 1.25em;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 12.5em;
  width: 12.5em;
  margin: 0 auto;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  padding: 0.75rem;
`;

export const DetailsContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Rarity = styled.span`
  color: red;
  font-size: 0.7rem;
  text-shadow: 0 0 0.2rem red;
  text-transform: uppercase;
`;

export const Season = styled.span`
  color: #fff;
  font-size: 0.7rem;
  text-shadow: 0 0 0.2rem #fff;
  text-transform: uppercase;
`;

export const Name = styled.h3`
  color: #fff;
  text-align: center;
  text-shadow: 0 0 0.5rem #fff;
  text-transform: uppercase;
`;

export const Score = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  text-shadow: 0 0 0.15rem #fff;
`;

export const AlreadyVoted = styled.div`
  color: #fff;
  height: 3.1rem;
  line-height: 1.5rem;
  margin-top: 1rem;
  text-align: center;
`;
