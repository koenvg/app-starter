import { useAuthentication } from "./AuthenticationProvider";
import React, { SFC } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

export type Props = RouteProps;
export const PrivateRoute: SFC<Props> = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuthentication();

  return (
    <Route {...rest}>
      {({ location }) => {
        if (!isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          );
        }
        return children;
      }}
    </Route>
  );
};

PrivateRoute.displayName = "PrivateRoute";
