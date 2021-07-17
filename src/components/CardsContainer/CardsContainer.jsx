import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardsContainer.style";

import { Card } from "../";

const CardsContainer = ({ data, title, handleClicks, loadingId }) => (
  <>
    {data && data.length > 0 && <S.Title>{title}</S.Title>}

    <S.CardsContainer>
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
    </S.CardsContainer>
  </>
);

CardsContainer.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
  handleClicks: PropTypes.shape({
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }).isRequired,
  loadingId: PropTypes.number,
};

CardsContainer.defaultProps = {
  title: undefined,
  loadingId: -1,
};

export default CardsContainer;
