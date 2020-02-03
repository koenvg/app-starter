import { DataTable } from "../DataTable";
import React from "react";
import { render } from "@testing-library/react";

describe("DataTable", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const defaultProps = {
    title: "Unit test",
    columns: [
      { title: "ID", field: "id" },
      { title: "Label", field: "label" },
    ],
    data: [
      { id: "First", label: "First" },
      { id: "Second", label: "Second and some longer label" },
      { id: "Third", label: "Third" },
    ],
  };

  it("should render a data table without pagination by default", () => {
    const component = render(<DataTable {...defaultProps} />);
    expect(component.container).toMatchSnapshot();
  });
});
