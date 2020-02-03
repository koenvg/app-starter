import { NestedList, Props } from "../NestedList";
import React from "react";
import { render, fireEvent, waitForElementToBeRemoved } from "@testing-library/react";
import { ListItemText, ListItem } from "@material-ui/core";

describe("NestedList", () => {
  const defaultProps: Props = {
    header: <ListItemText>Header</ListItemText>,
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("render the nested list closed by default", () => {
    const { container } = render(
      <NestedList {...defaultProps}>
        <ListItem>
          <ListItemText>Nested</ListItemText>
        </ListItem>
      </NestedList>,
    );
    expect(container).toMatchSnapshot();
  });

  it("should open and close the nested list when clicking the header item", async () => {
    const { container, queryByText, getByText } = render(
      <NestedList {...defaultProps}>
        <ListItem>
          <ListItemText>Nested</ListItemText>
        </ListItem>
      </NestedList>,
    );

    fireEvent.click(getByText("Header"));

    expect(container).toMatchSnapshot();
    fireEvent.click(getByText("Header"));

    await waitForElementToBeRemoved(() => queryByText("Nested"));
  });
});
