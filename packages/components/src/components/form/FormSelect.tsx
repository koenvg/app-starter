import React, { SFC } from "react";
import { FieldProps } from "formik";
import { Select, MenuItem, CircularProgress, FormControl, InputLabel, FormControlProps } from "@material-ui/core";

interface Option {
  value: string;
  label: string;
}

export interface Props extends FieldProps, Omit<FormControlProps, "error" | "name" | "onChange" | "value"> {
  options?: Option[];
  loading: boolean;
}

export const FormSelect: SFC<Props> = ({ field, options, loading, form: { isSubmitting }, placeholder, ...rest }) => {
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, [loading]);

  return (
    <FormControl variant="outlined" fullWidth margin="normal" {...rest}>
      <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
        {loading ? <CircularProgress size={20} /> : placeholder}
      </InputLabel>
      <Select labelWidth={labelWidth} {...field} value={field.value || ""} disabled={loading || isSubmitting}>
        {options?.map(option => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

FormSelect.displayName = "FormSelect";
