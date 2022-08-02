import React from "react";
import { useNavigate, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) => {
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
          navigate("/officerLogin")
        );
      }}
    />
  );
};


export default PrivateRoute;
