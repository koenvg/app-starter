import {
  HeaderBackGround,
  CardedContainer,
  CardedHeader,
  CardedToolbar,
  CardedContentContainer,
  CardPage,
} from "./CardLayoutWithTabs.styled";
import React, { SFC } from "react";
import { NavigationItem, TabNavigation } from "components";
import { Typography, LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export interface Props {
  header: JSX.Element | string;
  tabs: NavigationItem[];
  error?: { message: string };
  loading?: boolean;
}

export const CardLayoutWithTabs: SFC<Props> = ({ tabs, children, loading, error, header }) => {
  return (
    <CardPage>
      <HeaderBackGround />
      <CardedContainer>
        <CardedHeader>
          <LinearProgress />
          <Typography component="h1" variant="h4">
            {header}
          </Typography>
        </CardedHeader>
        <CardedContentContainer>
          <CardedToolbar>{!error && !loading ? <TabNavigation tabs={tabs} /> : null}</CardedToolbar>
          {loading && <LinearProgress />}
          {error ? (
            <Alert variant="filled" severity="error">
              {error.message}
            </Alert>
          ) : (
            !loading && children
          )}
        </CardedContentContainer>
      </CardedContainer>
    </CardPage>
  );
};

CardLayoutWithTabs.displayName = "CardLayoutWithTabs";
