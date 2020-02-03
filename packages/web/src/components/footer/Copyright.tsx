import React, { SFC } from "react";
import { Typography, Link } from "@material-ui/core";

export const Copyright: SFC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://example.com/">
        Company name
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

Copyright.displayName = "Copyright";
