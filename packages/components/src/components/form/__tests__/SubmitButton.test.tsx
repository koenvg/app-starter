import { SubmitButton } from "../SubmitButton";
import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { Formik, Form } from "formik";

describe("SubmitButton", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const submitFn = jest.fn();
  const SimpleForm = () => {
    return (
      <Formik onSubmit={submitFn} initialValues={{ name: "" }}>
        <Form>
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </Formik>
    );
  };

  it("Should render a form with the submitButton", () => {
    const { container } = render(<SimpleForm />);
    expect(container).toMatchSnapshot();
  });

  it("should submit the form when you click the button and show a loading indicator", async () => {
    const { container } = render(<SimpleForm />);
    const button = container.querySelector("button");
    await wait(() => fireEvent.click(button));
    expect(submitFn).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });
});
