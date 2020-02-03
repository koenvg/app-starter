import React, { SFC } from "react";
import { Button as MUIButton, ButtonProps, CircularProgress } from "@material-ui/core";

export interface Props extends ButtonProps {
  loading?: boolean;
}

export const Button: SFC<Props> = ({ children, loading, ...rest }) => {
  return (
    <MUIButton {...rest} disabled={loading || rest.disabled} disableRipple>
      {loading && <CircularProgress size={25} />}
      {!loading && children}
    </MUIButton>
  );
};

Button.displayName = "Button";
