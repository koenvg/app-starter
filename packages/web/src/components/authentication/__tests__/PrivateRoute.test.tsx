const useAuthenticationMock = jest.fn().mockReturnValue({ isAuthenticated: false });
jest.mock("../AuthenticationProvider", () => ({
  useAuthentication: useAuthenticationMock,
}));
import { PrivateRoute } from "../PrivateRoute";
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Switch } from "react-router-dom";

describe("PrivateRoute", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should redirect to the login page when the user is not authenticated", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Switch>
          <Route path="/login">
            <div>Login Route</div>
          </Route>
          <PrivateRoute path="/" exact>
            <div>Private Route</div>
          </PrivateRoute>
        </Switch>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render the component for the route when the user is authenticated", () => {
    useAuthenticationMock.mockReturnValueOnce({ isAuthenticated: true });
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Switch>
          <PrivateRoute path="/" exact>
            <div>Private Route</div>
          </PrivateRoute>
          <Route path={"/login"} render={() => <div>{"/login"}</div>} />
        </Switch>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
