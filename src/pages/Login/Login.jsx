import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import logo from "../../assets/logo-desktop.png";
import picture from "../../assets/login-page-picture.png";

import Logo from "../../components/Logo/Logo";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import StyledLink from "../../components/StyledLink/StyledLink";
import Notification from "../../components/Notification/Notification";

const Login = () => {
  const [formData] = useState({ email: "", password: "" });
  const [notification, setNotification] = useState({});
  const [buttonLoading, setButtonLoading] = useState(false);

  const history = useHistory();

  const login = e => {
    e.preventDefault();

    setButtonLoading(true);

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      })
      .then(data => {
        localStorage.setItem("token", data.data.token);
        history.push("/");
      })
      .catch(err => {
        setButtonLoading(false);

        if (err.response) {
          return setNotification({
            type: "error",
            message: err.response.data.error,
          });
        }
        return setNotification({
          type: "error",
          message: "Cannot connect to server. Please try again later",
        });
      })
      .finally(() => {
        e.target.elements.password.value = "";
      });
  };

  return (
    <>
      <Logo src={logo} alt="fall-guys-logo" />

      <Form
        handleSubmit={login}
        name="login"
        imageProps={{
          src: picture,
          alt: "fall-guys-future",
        }}
      >
        <div className="links-container">
          <div className="align-center">
            <StyledLink to="/login" text="Login" />
            <StyledLink to="/register" text="Register" />
          </div>
        </div>

        <Notification
          notification={notification}
          handleDelete={setNotification}
        />

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="email@email.com"
            minLength="3"
            required
            onChange={e => (formData.email = e.target.value)}
          />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            minLength="8"
            required
            onChange={e => (formData.password = e.target.value)}
          />
        </div>

        <Button type="submit" text="Login" loading={buttonLoading} />
      </Form>
    </>
  );
};

export default Login;
