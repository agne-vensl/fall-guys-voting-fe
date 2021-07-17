import React from "react";
import PropTypes from "prop-types";
import * as S from "./Card.style";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

import { Button, Loading } from "../";

const Card = ({ data, handleClicks, loadingId }) => (
  <S.Card>
    <S.ImageContainer rarity={data.rarity}>
      <S.Image src={data.image} alt={data.name} />
    </S.ImageContainer>

    <S.DetailsContainer>
      <S.SpaceBetween>
        <S.Rarity>{data.rarity}</S.Rarity>
        <S.Season>{data.season}</S.Season>
      </S.SpaceBetween>

      <S.Name>{data.name}</S.Name>

      {data.id === loadingId ? (
        <Loading margin="0" />
      ) : (
        <div style={{ marginTop: "auto" }}>
          <S.Score>{data.score || 0}</S.Score>
        </div>
      )}

      {!data.voted ? (
        <S.SpaceBetween style={{ marginTop: "1rem" }}>
          <Button
            color="secondary"
            text={<FaThumbsUp />}
            handleClick={() => {
              handleClicks?.add(data.id);
            }}
          />
          <Button
            color="primary"
            text={<FaThumbsDown />}
            handleClick={() => {
              handleClicks?.remove(data.id);
            }}
          />
        </S.SpaceBetween>
      ) : (
        <S.AlreadyVoted>You have already voted for this skin</S.AlreadyVoted>
      )}
    </S.DetailsContainer>
  </S.Card>
);

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    season: PropTypes.string,
    rarity: PropTypes.oneOf([
      "common",
      "uncommon",
      "rare",
      "epic",
      "legendary",
    ]),
    name: PropTypes.string.isRequired,
    score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  handleClicks: PropTypes.shape({
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }).isRequired,
  loadingId: PropTypes.number,
};

Card.defaultProps = {
  data: {
    season: undefined,
    rarity: undefined,
    score: undefined,
    loadingId: -1,
  },
};

export default Card;
