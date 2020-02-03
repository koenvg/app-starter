const mockAuthenticate = jest.fn().mockResolvedValue({});

jest.mock("../../../components/authentication/AuthenticationProvider", () => ({
  useAuthentication: () => ({ authenticate: mockAuthenticate }),
}));

import { LoginForm } from "../LoginForm";
import { render } from "../../../utils/test-utils";
import React from "react";
import { wait, fireEvent, findByText } from "@testing-library/react";

describe("LoginForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const signIn = async (container: HTMLElement) => {
    const email = container.querySelector('input[name="email"]') as Element;
    const password = container.querySelector('input[name="password"]') as Element;
    const submit = container.querySelector('button[type="submit"]') as Element;

    await wait(() => {
      fireEvent.change(email, {
        target: {
          value: "test@test.com",
        },
      });
    });

    await wait(() => {
      fireEvent.change(password, {
        target: {
          value: "somePassword",
        },
      });
    });

    await wait(() => {
      fireEvent.click(submit);
    });
  };

  it("should render the login form", () => {
    const component = render(<LoginForm />);
    expect(component.container).toMatchSnapshot();
  });

  it("should show an error when the user does not fill in username or password", async () => {
    const component = render(<LoginForm />);

    fireEvent.submit(component.getByText("Sign In"));

    await findByText(component.container, "Please enter your password");
    expect(component.container).toMatchSnapshot();
  });

  it("should sign the user in the they enter username and password", async () => {
    const { container } = render(<LoginForm />);
    await signIn(container);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should show a generic error when one occurs during signing in", async () => {
    mockAuthenticate.mockRejectedValueOnce(new Error("Epic failure"));
    const { container } = render(<LoginForm />);
    await signIn(container);
    expect(container.firstChild).toMatchSnapshot();
  });
});
