import { Button, Props } from "../Button";
import React from "react";
import { render } from "@testing-library/react";

describe("Button", () => {
  const defaultProps: Props = {};

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the button", () => {
    const component = render(<Button {...defaultProps}>Click me</Button>);
    expect(component.container).toMatchSnapshot();
  });

  it("should render a loading indicator and disable the button when loading is true", () => {
    const component = render(
      <Button {...defaultProps} loading>
        Click me
      </Button>,
    );
    expect(component.container).toMatchSnapshot();
  });
});
