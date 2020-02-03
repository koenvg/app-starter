import { DropDown, Props } from "../DropDown";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

describe("DropDown", () => {
  const defaultProps: Props = {
    dropDownItems: [{ id: "First", label: "First" }],
    onClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the drop down", () => {
    const { container } = render(<DropDown {...defaultProps}>Click Me</DropDown>);
    expect(container).toMatchSnapshot();
  });

  it("should open and close the dropdown when you click the button", () => {
    const { container, queryByText } = render(<DropDown {...defaultProps}>Click Me</DropDown>);

    fireEvent.click(container.querySelector("button"));

    expect(container).toMatchSnapshot();

    fireEvent.click(container.querySelector("button"));

    expect(queryByText("First")).toBeNull();

    expect(container).toMatchSnapshot();
  });

  it("should close the dropdown and call onClick when you select an item from the dropdown", () => {
    const { container, queryByText } = render(<DropDown {...defaultProps}>Click Me</DropDown>);

    fireEvent.click(container.querySelector("button"));

    fireEvent.click(queryByText("First"));

    expect(queryByText("First")).toBeNull();
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    expect(defaultProps.onClick).toHaveBeenCalledWith({ id: "First", label: "First" });
  });

  it("should close the drop down when you click away", () => {
    const { container, queryByText } = render(<DropDown {...defaultProps}>Click Me</DropDown>);

    fireEvent.click(container.querySelector("button"));

    expect(queryByText("First")).not.toBeNull();

    fireEvent.click(container);

    expect(queryByText("First")).toBeNull();
  });
});
