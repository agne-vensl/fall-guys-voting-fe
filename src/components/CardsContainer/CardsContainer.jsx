import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardsContainer.style";

import Card from "../Card/Card";

const CardsContainer = ({ data, handleClicks }) => (
  <S.CardsContainer>
    <div className="container">
      {data && data.length ? (
        data.map(item => {
          return <Card key={item.id} data={item} handleClicks={handleClicks} />;
        })
      ) : (
        <S.NoResults>No results</S.NoResults>
      )}
    </div>
  </S.CardsContainer>
);

CardsContainer.propTypes = {
  data: PropTypes.array.isRequired,
  handleClicks: PropTypes.shape({
    add: PropTypes.func,
    remove: PropTypes.func,
  }),
};

export default CardsContainer;
