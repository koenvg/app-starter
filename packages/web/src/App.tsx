import { LoginPage } from "./pages/login/LoginPage";
import { AuthenticationProvider } from "./components/authentication/AuthenticationProvider";
import { AppContainer } from "./pages/AppContainer";
import { apolloClient } from "./api/apolloClient";
import React from "react";
import { ThemeProvider } from "components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <BrowserRouter>
          <AuthenticationProvider>
            <ApolloProvider client={apolloClient}>
              <Switch>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route>
                  <AppContainer />
                </Route>
              </Switch>
            </ApolloProvider>
          </AuthenticationProvider>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;
