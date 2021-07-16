import React from "react";
import PropTypes from "prop-types";
import * as S from "./Notification.style";

import successImg from "../../assets/notification-success.png";
import errorImg from "../../assets/notification-success.png";

const images = {
  success: successImg,
  error: errorImg,
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
