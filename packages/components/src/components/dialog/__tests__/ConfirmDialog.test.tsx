import { ConfirmDialog, Props } from "../ConfirmDialog";
import React from "react";
import { render, fireEvent, wait, waitForElement } from "@testing-library/react";

describe("ConfirmDialog", () => {
  const defaultProps: Props = {
    onFinish: jest.fn(),
    open: true,
    title: "Some title",
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the dialog", () => {
    render(<ConfirmDialog {...defaultProps} />);
    expect(document.body).toMatchSnapshot();
  });

  it("should say true when confirming the dialog", () => {
    const { getByText } = render(<ConfirmDialog {...defaultProps} />);
    fireEvent.click(getByText("Ok"));
    expect(defaultProps.onFinish).toHaveBeenCalledWith(true);
  });

  it("should say false when cancelling the dialog", () => {
    const { getByText } = render(<ConfirmDialog {...defaultProps} />);
    fireEvent.click(getByText("Close"));
    expect(defaultProps.onFinish).toHaveBeenCalledWith(false);
  });

  it("should show the loading state when the onConfirm prop is passed", async () => {
    const { getByText } = render(<ConfirmDialog {...defaultProps} onConfirm={jest.fn().mockResolvedValue({})} />);
    await wait(() => fireEvent.click(getByText("Ok")));
    expect(document.body).toMatchSnapshot();
  });

  it("should show error if the onConfirm throws", async () => {
    const error = new Error("Epic failure");
    const { getByText, queryByText } = render(
      <ConfirmDialog {...defaultProps} onConfirm={jest.fn().mockRejectedValue(error)} />,
    );
    await wait(() => fireEvent.click(getByText("Ok")));
    await waitForElement(() => queryByText("Ok"));
    expect(queryByText(error.message)).not.toBeNull();
  });
});
