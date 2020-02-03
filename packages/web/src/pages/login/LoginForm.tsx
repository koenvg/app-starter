import { StyledForm, LoginButton } from "./LoginForm.styled";
import { useAuthentication } from "../../components/authentication/AuthenticationProvider";
import React, { SFC } from "react";
import { useFormik } from "formik";
import { TextField, Typography } from "@material-ui/core";

export const LoginForm: SFC = () => {
  const { authenticate } = useAuthentication();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      general: "",
    },
    validate: ({ email, password }) => {
      const errors: { email?: string; password?: string } = {};
      if (email === "") {
        errors.email = "Please enter your username";
      }
      if (password === "") {
        errors.password = "Please enter your password";
      }

      return errors;
    },
    onSubmit: async ({ email, password }, { setSubmitting, setErrors }) => {
      try {
        await authenticate(email, password);
      } catch (e) {
        setSubmitting(false);
        setErrors({ general: "Your username and/or password do not match" });
      }
    },
  });

  return (
    <StyledForm noValidate onSubmit={formik.handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={formik.handleChange}
        value={formik.values.email}
        disabled={formik.isSubmitting}
        error={!!formik.errors.email}
        helperText={formik.errors.email}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={formik.handleChange}
        value={formik.values.password}
        disabled={formik.isSubmitting}
        error={!!formik.errors.password}
        helperText={formik.errors.password}
      />
      {formik.errors.general && (
        <Typography variant="body2" color="error">
          {formik.errors.general}
        </Typography>
      )}
      <LoginButton type="submit" fullWidth variant="contained" color="primary" loading={formik.isSubmitting}>
        <Typography>Sign In</Typography>
      </LoginButton>
    </StyledForm>
  );
};

LoginForm.displayName = "LoginForm";
