import React from "react";
import PropTypes from "prop-types";
import * as S from "./Form.style";

const Form = ({ handleSubmit, children, imageProps, ...props }) => (
  <S.FormContainer>
    {imageProps && <S.FormImage src={imageProps.src} alt={imageProps.alt} />}

    <S.Form onSubmit={handleSubmit} {...props}>
      {children}
    </S.Form>
  </S.FormContainer>
);

Form.propTypes = {
  handleSubmit: PropTypes.func,
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

Form.defaultProps = {
  handleSubmit: undefined,
};

export default Form;
