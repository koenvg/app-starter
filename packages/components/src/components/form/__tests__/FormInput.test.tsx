import { FormInput } from "../FormInput";
import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

describe("FormInput", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const schema = Yup.object().shape({ name: Yup.string().required("Required") });
  const SimpleForm = ({ disabled = undefined }) => {
    return (
      <Formik onSubmit={jest.fn()} initialValues={{ name: "" }} validationSchema={schema}>
        <Form>
          <Field name="name" placeholder="Name" component={FormInput} disabled={disabled} />
        </Form>
      </Formik>
    );
  };

  it("should render the input container which is rendered by formik", () => {
    const { container } = render(<SimpleForm />);
    expect(container).toMatchSnapshot();
  });

  it("should disable the input field when the prop is provided", () => {
    const { container } = render(<SimpleForm disabled />);
    const name = container.querySelector("input");
    expect(name.disabled).toBeTruthy();
  });

  it("should disable the input field while submitting", async () => {
    const { container } = render(<SimpleForm />);

    const name = container.querySelector("input");
    await wait(() => {
      fireEvent.change(name, {
        target: {
          value: "SomeName",
        },
      });
    });
    await wait(() => fireEvent.submit(container.querySelector("form")));
    expect(name.disabled).toBeTruthy();
  });

  it("should show errors when the field contains errors", async () => {
    const { container, queryByText } = render(<SimpleForm />);

    await wait(() => fireEvent.submit(container.querySelector("form")));
    expect(queryByText("Required")).not.toBeNull();
    expect(container).toMatchSnapshot();
  });
});
