import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router";
const jwt = require("jsonwebtoken");

const AnonRoute = ({ component, ...rest }) => {
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const validateToken = () => {
      try {
        const token = localStorage.getItem("token");
        setDecodedToken(
          jwt.verify(token || "", process.env.REACT_APP_JWT_SECRET)
        );
      } catch (err) {
        setDecodedToken(null);
      }
    };

    validateToken();
  }, []);

  return (
    <Route
      {...rest}
      render={() => {
        if (decodedToken !== undefined) {
          return !decodedToken ? component : <Redirect to="/" />;
        }
      }}
    />
  );
};

export default AnonRoute;
