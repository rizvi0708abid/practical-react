import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../auth";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("ProtectedRoutes ...auth ", auth);
        if (auth.isAutehnticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoutes;
