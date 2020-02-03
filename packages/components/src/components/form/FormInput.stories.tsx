import { FormInput } from "./FormInput";
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

export const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time));

const schema = Yup.object().shape({ name: Yup.string().required("Required") });
storiesOf("Form/FormInput", module).add("Simple Form", () => {
  const submitAction = action("onSubmit");
  const handleSubmit = async (...args) => {
    const { setSubmitting } = args[1];
    submitAction(...args);
    await delay(1000);
    setSubmitting(false);
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={{ name: "" }} validationSchema={schema}>
      <Form>
        <Field name="name" placeholder="Name" component={FormInput} />
      </Form>
    </Formik>
  );
});
