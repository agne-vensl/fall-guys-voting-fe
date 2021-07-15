import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router";
const jwt = require("jsonwebtoken");

const PrivateRoute = ({ component, ...rest }) => {
  const [decodedToken, setDecodedToken] = useState(undefined);

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
          return decodedToken ? component : <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
