import { login } from "./api";
import React, { SFC } from "react";
import { useLocation, useHistory } from "react-router-dom";

export interface User {
  username: string;
}
interface Authentication {
  isAuthenticated: boolean;
  user?: User;
  authenticate: (username: string, password: string) => Promise<void>;
}

const AuthenticationContext = React.createContext<Authentication>({
  isAuthenticated: false,
  authenticate: () => {
    throw new Error("not implemented");
  },
});

export const AuthenticationProvider: SFC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<User>();
  const { state } = useLocation();
  const history = useHistory();

  const authenticate = React.useCallback<Authentication["authenticate"]>(
    async (username, password) => {
      const user = await login(username, password);
      setUser(user);
      setIsAuthenticated(true);
      if (state.from) {
        history.push(state.from);
      }
    },
    [history, state],
  );

  return (
    <AuthenticationContext.Provider value={{ isAuthenticated, user, authenticate }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => React.useContext(AuthenticationContext);

AuthenticationProvider.displayName = "AuthenticationProvider";
