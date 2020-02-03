import { Button } from "../button";
import React, { SFC } from "react";
import { useFormikContext } from "formik";

export const SubmitButton: SFC = ({ children }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  return (
    <Button type="submit" color="primary" variant="contained" onClick={handleSubmit as any} loading={isSubmitting}>
      {children}
    </Button>
  );
};

SubmitButton.displayName = "SubmitButton";
