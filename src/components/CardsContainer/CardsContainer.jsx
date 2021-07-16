import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardsContainer.style";

import Card from "../Card/Card";

const CardsContainer = ({ data, handleClicks, loadingId }) => (
  <S.CardsContainer>
    <div className="container">
      {data && data.length ? (
        data.map(item => {
          return (
            <Card
              key={item.id}
              data={item}
              handleClicks={handleClicks}
              loadingId={loadingId}
            />
          );
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
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }).isRequired,
  loadingId: PropTypes.number,
};

CardsContainer.defaultProps = {
  loadingId: -1,
};

export default CardsContainer;
