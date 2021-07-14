import React from "react";
import PropTypes from "prop-types";
import * as S from "./Notification.style";

const images = {
  success: "https://fallguys-skins.com/img/skins/s1/full/rare/jacket.png",
  error: "https://fallguys-skins.com/img/skins/s2/full/xgood_witch.png",
};

const Notification = ({ notification, handleDelete }) => {
  if (notification.message) {
    return (
      <S.Notification type={notification.type}>
        <S.NotificationPicture
          src={images[notification.type]}
          alt="fallguys-skins"
        />

        <S.DeleteButton
          onClick={() => {
            handleDelete({});
          }}
        >
          &times;
        </S.DeleteButton>
        {notification.message}
      </S.Notification>
    );
  }

  return <div></div>;
};

Notification.propTypes = {
  notification: PropTypes.shape({
    type: PropTypes.oneOf(Object.keys(images)),
    message: PropTypes.string,
  }),
  handleDelete: PropTypes.func.isRequired,
};

Notification.defaultProps = {
  type: "success",
};

export default Notification;
