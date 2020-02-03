import React, { SFC } from "react";
import { Typography } from "@material-ui/core";
import { useFormikContext, getIn } from "formik";

export interface Props {
  field: string;
}

export const FormError: SFC<Props> = ({ field }) => {
  const { errors } = useFormikContext();
  const fieldError = getIn(errors, field);
  if (fieldError) {
    return <Typography color="error">{fieldError}</Typography>;
  }
  return null;
};

FormError.displayName = "FormError";
