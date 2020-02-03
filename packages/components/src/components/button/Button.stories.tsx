import { Button } from "./Button";
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

storiesOf("Components/Button", module)
  .add("Button", () => (
    <Button onClick={action("Click")} variant="contained" color="primary">
      A Button
    </Button>
  ))
  .add("Loading button", () => (
    <Button loading variant="contained" color="primary">
      Loading
    </Button>
  ));
