import React, { useState } from "react";
import axios from "axios";

import Form from "../../components/Form/Form";
import Button from "../../components/button/Button";
import StyledLink from "../../components/StyledLink/StyledLink";
import Notification from "../../components/Notification/Notification";

const Register = () => {
  const [formData] = useState({ name: "", email: "", password: "" });
  const [notification, setNotification] = useState({});

  const register = e => {
    e.preventDefault();

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
      });
  };

  return (
    <>
      <Form
        handleSubmit={register}
        name="register"
        imageProps={{
          src:
            "https://fallguys.com/_next/image?url=%2Fimages%2Fseason4%2Fpopstar-dlc%2Ffresh-hip.png&w=1920&q=75",
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
            required
            onChange={e => (formData.password = e.target.value)}
          />
        </div>

        <Button type="submit" text="Register" />
      </Form>
    </>
  );
};

export default Register;
