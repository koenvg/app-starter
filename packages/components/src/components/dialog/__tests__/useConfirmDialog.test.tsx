import { useConfirmDialog, Props } from "../useConfirmDialog";
import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import waitForExpect from "wait-for-expect";

describe("useConfirmDialog", () => {
  const defaultProps: Props = {
    title: "Some title",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const confirmationMock = jest.fn();

  const TestComponent = () => {
    const [confirm] = useConfirmDialog();

    const doConfirm = async () => {
      const result = await confirm(defaultProps);
      confirmationMock(result);
    };
    doConfirm();
    return <></>;
  };

  it("Should render a confirmationDialog", () => {
    render(<TestComponent />);
    expect(document.body).toMatchSnapshot();
  });

  it("should say true when confirming the dialog", async () => {
    render(<TestComponent />);
    fireEvent.click(getByText(document.body, "Ok"));

    await waitForExpect(() => {
      expect(confirmationMock).toHaveBeenCalledWith(true);
    });
  });

  it("should say false when cancelling the dialog", async () => {
    render(<TestComponent />);
    fireEvent.click(getByText(document.body, "Close"));
    await waitForExpect(() => {
      expect(confirmationMock).toHaveBeenCalledWith(false);
    });
  });
});
