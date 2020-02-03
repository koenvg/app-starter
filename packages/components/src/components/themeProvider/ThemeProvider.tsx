import React, { SFC } from "react";
import baseStyled, {
  ThemeProvider as StyledComponentsThemeProvider,
  ThemedStyledInterface,
  css as baseCSS,
  ThemedCssFunction,
} from "styled-components";
import { createMuiTheme, Theme, ThemeProvider as MUIThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: {
      main: "#fff",
    },
  },
});

export const ThemeProvider: SFC = ({ children }) => {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>
    </MUIThemeProvider>
  );
};

ThemeProvider.displayName = "ThemeProvider";

export const styled = baseStyled as ThemedStyledInterface<Theme>;
export const css = baseCSS as ThemedCssFunction<Theme>;
