import React, { useState } from "react";
import axios from "axios";

import logo from "../../assets/logo-desktop.png";
import picture from "../../assets/register-page-picture.png";

import {
  Logo,
  Form,
  Button,
  StyledLink,
  Notification,
} from "../../components/";

const Register = () => {
  const [formData] = useState({ name: "", email: "", password: "" });
  const [notification, setNotification] = useState({});
  const [buttonLoading, setButtonLoading] = useState(false);

  const register = e => {
    e.preventDefault();

    setButtonLoading(true);

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/register`, {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      })
      .then(data => {
        setNotification({ type: "success", message: data.data.message });
      })
      .catch(err => {
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
        setButtonLoading(false);
      });
  };

  return (
    <>
      <Logo src={logo} alt="fall-guys-logo" />

      <Form
        handleSubmit={register}
        name="register"
        imageProps={{
          src: picture,
          alt: "fall-guys-popstar",
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
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John"
            minLength="1"
            required
            onChange={e => (formData.name = e.target.value)}
          />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
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

        <Button type="submit" text="Register" loading={buttonLoading} />
      </Form>
    </>
  );
};

export default Register;
