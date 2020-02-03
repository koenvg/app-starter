import { StyledAppBar } from "./Navigation.styled";
import React, { SFC } from "react";
import { Toolbar } from "@material-ui/core";

export const Navigation: SFC = () => {
  return (
    <StyledAppBar position="fixed" variant="elevation" color="secondary">
      <Toolbar variant="dense" disableGutters></Toolbar>
    </StyledAppBar>
  );
};

Navigation.displayName = "Navigation";
