import React, { SFC } from "react";
import { FieldProps, getIn } from "formik";
import { KeyboardDatePicker, KeyboardDatePickerProps } from "@material-ui/pickers";
import "@date-io/date-fns";

export type Props = FieldProps & Omit<KeyboardDatePickerProps, "error" | "name" | "onChange" | "value">;

const fieldToDatePicker = ({ field, form, disabled, ...props }: Props): KeyboardDatePickerProps => {
  const { name } = field;
  const { touched, errors, isSubmitting, setFieldValue } = form;

  const fieldError = getIn(errors, name);
  const showError = getIn(touched, name) && !!fieldError;

  return {
    inputVariant: "outlined",
    fullWidth: true,
    label: props.placeholder,
    margin: "normal",
    ...field,
    ...props,
    onChange: date => setFieldValue(name, date, true),
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: disabled !== undefined ? disabled : isSubmitting,
  };
};

export const FormDateInput: SFC<Props> = ({ ...props }) => {
  return <KeyboardDatePicker {...fieldToDatePicker(props)} />;
};

FormDateInput.displayName = "FormDateInput";
