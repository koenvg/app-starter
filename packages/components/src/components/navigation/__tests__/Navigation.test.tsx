import { Navigation, Props } from "../Navigation";
import { ThemeProvider } from "../../themeProvider";
import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import { Home, Settings, Pages } from "@material-ui/icons";
import { MemoryRouter, Router } from "react-router";
import { createMemoryHistory } from "history";

describe("Navigation", () => {
  const defaultProps: Props = {
    navigation: [
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
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the navigation list", () => {
    const { container } = render(
      <ThemeProvider>
        <MemoryRouter>
          <Navigation {...defaultProps} />
        </MemoryRouter>
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it("should navigate to the correct item when clicking a navigation item", async () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <ThemeProvider>
        <Router history={history}>
          <Navigation {...defaultProps} />
        </Router>
      </ThemeProvider>,
    );

    await wait(() => fireEvent.click(getByText("Documentation")));
    await wait(() => fireEvent.click(getByText("Button")));

    expect(history.location.pathname).toBe("/button");
  });

  it("should open the collapsed list by default if a path underneath is active", () => {
    const { container } = render(
      <ThemeProvider>
        <MemoryRouter initialEntries={["/button"]}>
          <Navigation {...defaultProps} />
        </MemoryRouter>
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
