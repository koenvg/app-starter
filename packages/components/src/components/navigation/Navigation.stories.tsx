import { Navigation } from "./Navigation";
import { NavigationItemsType } from "./types";
import React from "react";
import { storiesOf } from "@storybook/react";
import { Home, Settings, Pages } from "@material-ui/icons";
import { MemoryRouter } from "react-router";

const navigation: NavigationItemsType = [
  { id: "application", title: "Application", type: "item", url: "/", icon: <Home /> },
  {
    id: "documentation",
    title: "Documentation",
    type: "collapse",
    icon: <Settings />,
    children: [
      { id: "button", title: "Button", url: "/button", type: "item" },
      { id: "form", title: "Form", url: "/form", type: "item" },
    ],
  },
  {
    id: "group",
    title: "Some Group",
    type: "group",
    children: [
      {
        id: "pages",
        title: "Pages",
        type: "collapse",
        icon: <Pages />,
        children: [
          { id: "login", title: "Login", url: "/login", type: "item" },
          { id: "userSettings", title: "User settings", url: "/user-settings", type: "item" },
        ],
      },
    ],
  },
];
storiesOf("Navigation", module)
  .addDecorator(story => (
    <MemoryRouter>
      <div style={{ width: 500, display: "flex", flexDirection: "column" }}>{story()}</div>
    </MemoryRouter>
  ))
  .add("Vertical", () => <Navigation navigation={navigation} />);
