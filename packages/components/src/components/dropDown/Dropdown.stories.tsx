import { DropDown } from "./DropDown";
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const dropDownItems = [
  { id: "First", label: "First" },
  { id: "Second", label: "Second and some longer label" },
  { id: "Third", label: "Third" },
];
storiesOf("Components/DropDown", module).add("Drop down", () => (
  <div>
    <DropDown onClick={action("onClick")} dropDownItems={dropDownItems}>
      Click here
    </DropDown>
    <DropDown
      onClick={action("onClick")}
      dropDownItems={dropDownItems}
      buttonProps={{ variant: "contained", color: "primary" }}
    >
      Click here
    </DropDown>
  </div>
));
