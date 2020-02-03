import { PageNotFound } from "./error/PageNotFound";
import { StyledAppContainer } from "./AppContainer.styled";
import { Navigation } from "../components/navigation/Navigation";
import { PrivateRoute } from "../components/authentication/PrivateRoute";
import { Sidebar } from "../components/navigation/Sidebar";
import { SimpleLayout } from "../components/layouts/SimpleLayout";
import { Switch, Route } from "react-router-dom";
import React, { SFC } from "react";

export const AppContainer: SFC = () => {
  return (
    <StyledAppContainer>
      <Navigation />
      <Sidebar />
      <Switch>
        <Route path="/">
          <SimpleLayout header={"Home Page"}>Some content</SimpleLayout>
        </Route>
        <PrivateRoute path="/private">This is a private page</PrivateRoute>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </StyledAppContainer>
  );
};

AppContainer.displayName = "AppContainer";
