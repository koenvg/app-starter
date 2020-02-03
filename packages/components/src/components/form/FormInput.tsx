import React, { SFC } from "react";
import { TextFieldProps, TextField } from "@material-ui/core";
import { FieldProps, getIn } from "formik";

export type Props = FieldProps & Omit<TextFieldProps, "error" | "name" | "onChange" | "value">;

const fieldToTextField = ({ field, form, disabled, ...props }: Props): TextFieldProps => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form;

  const fieldError = getIn(errors, name);
  const showError = getIn(touched, name) && !!fieldError;

  return {
    variant: "outlined",
    fullWidth: true,
    label: props.placeholder,
    margin: "normal",
    ...field,
    ...props,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: disabled != undefined ? disabled : isSubmitting,
  };
};

export const FormInput: SFC<Props> = ({ children, ...props }) => {
  return <TextField {...fieldToTextField(props)}>{children}</TextField>;
};

FormInput.displayName = "FormInput";
