import { StyledPage, StyledPageHeader, StyledContainer } from "./SimpleLayout.styled";
import React, { SFC } from "react";
import { Typography, LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

interface Props {
  header: JSX.Element | string;
  loading?: boolean;
  error?: { message: string };
}

export const SimpleLayout: SFC<Props> = ({ children, header, loading, error }) => {
  return (
    <StyledPage>
      <StyledPageHeader>
        <Typography component="h1" variant="h4" display="inline" align="center">
          {header}
        </Typography>
      </StyledPageHeader>
      {loading ? (
        <LinearProgress />
      ) : (
        <StyledContainer>
          {error ? (
            <Alert variant="filled" severity="error">
              {error.message}
            </Alert>
          ) : (
            children
          )}
        </StyledContainer>
      )}
    </StyledPage>
  );
};

SimpleLayout.displayName = "SimpleLayout";
