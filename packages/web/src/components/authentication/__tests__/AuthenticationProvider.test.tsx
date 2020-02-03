import { AuthenticationProvider, useAuthentication } from "../AuthenticationProvider";
import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistoryBuildOptions } from "history";

describe("AuthenticationProvider", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const LoginButton = () => {
    const { authenticate, user, isAuthenticated } = useAuthentication();

    return (
      <>
        <div>User: {JSON.stringify(user)}</div>
        <div>isAuthenticated: {new String(isAuthenticated)}</div>
        <button onClick={() => authenticate("username", "password")} />
      </>
    );
  };

  it("Should log the user in and navigate to the page in the state", async () => {
    const history = createMemoryHistory(({
      initialEntries: [{ pathname: "/login", state: { from: "/" } }],
    } as unknown) as MemoryHistoryBuildOptions);
    const component = render(
      <Router history={history}>
        <AuthenticationProvider>
          <LoginButton />
        </AuthenticationProvider>
      </Router>,
    );
    expect(component.container).toMatchSnapshot();

    await wait(() => {
      fireEvent.click(component.container.querySelector("button") as Element);
    });

    expect(history.location.pathname).toBe("/");

    expect(component.container).toMatchSnapshot();
  });
});
