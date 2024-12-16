import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Link,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  termsAndConditions: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const SignupPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = (values) => {
    console.log(values);
    localStorage.setItem("signupData", JSON.stringify(values)); // Store data in localStorage
    setError(null);
    navigate("/"); 
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={{ position: "relative" }}>
        <Box
          component="img"
          alt="logo"
          src="images/logo--dark.svg"
          sx={{
            position: "absolute",
            top: "25px",
            left: "23px",
            height: "32px",
          }}
        ></Box>

        <Box sx={{ paddingInline: "175px", paddingBlockStart: "370px", top:'0px', position:'relative' }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Sign up
          </Typography>
          <Typography variant="body1" sx={{ color :'gray', fontSize:'15px'}}>
            Already have an account?{" "}
            <Link href="/" sx={{ textDecoration: "none" }}>
              Sign in
            </Link>
          </Typography>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              termsAndConditions: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values }) => (
              <Form>
                <Field name="firstName">
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="First name"
                      error={Boolean(meta.error && meta.touched)}
                      helperText={meta.error && meta.touched ? meta.error : ""}
                      sx={{
                        marginBottom: "35px",
                        marginTop: "25px",
                        height: "50px",
                        width: "450px",
                        borderRadius: "20px",
                      }}
                    />
                  )}
                </Field>
                <Field name="lastName">
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Last name"
                      error={Boolean(meta.error && meta.touched)}
                      helperText={meta.error && meta.touched ? meta.error : ""}
                      sx={{
                        marginBottom: "35px",
                        height: "50px",
                        width: "450px",
                        borderRadius: "20px",
                      }}
                    />
                  )}
                </Field>
                <Field name="email">
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Email address"
                      type="email"
                      error={Boolean(meta.error && meta.touched)}
                      helperText={meta.error && meta.touched ? meta.error : ""}
                      sx={{
                        marginBottom: "35px",
                        height: "50px",
                        width: "450px",
                        borderRadius: "20px",
                      }}
                    />
                  )}
                </Field>
                <Field name="password">
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Password"
                      type="password"
                      error={Boolean(meta.error && meta.touched)}
                      helperText={meta.error && meta.touched ? meta.error : ""}
                      sx={{
                        marginBottom: "35px",
                        height: "50px",
                        width: "450px",
                        borderRadius: "20px",
                      }}
                    />
                  )}
                </Field>
                <FormControlLabel
                  control={<Field as={Checkbox} name="termsAndConditions" />}
                  label="I have read the terms and conditions"
                  sx={{ mt: "-5px" }}
                />
                {errors.termsAndConditions && touched.termsAndConditions && (
                  <Typography color="error" variant="body2">
                    {errors.termsAndConditions}
                  </Typography>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={!values.termsAndConditions} 
                  sx={{
                    marginBottom: "15px",
                    height: "40px",
                    width: "450px",
                    borderRadius: "10px",
                    mt: 1.5,
                    textTransform: 'none',
                  }}
                >
                  Sign up
                </Button>
                {error && <Typography color="error">{error}</Typography>}
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          backgroundColor: "#090e23",
          paddingInline: "100px",
          paddingBlock: "50px",
          width: "802px",
          height: "700px",
          "@media (max-width:900px) and (min-width:768px)": {
            display: 'none',
          },
        }}
      >
        <Typography variant="h5" color="white" sx={{ textAlign: "center", fontSize: '25px', fontWeight: '500', marginBlockStart: '-5px' }}>
          Welcome to{" "}
          <Typography variant="span" color="green">
            Devias Kit
          </Typography>
        </Typography>
        <Typography
          variant="body2"
          color="white"
          sx={{
            textAlign: "center",
            fontSize: "17px",
            paddingBlockStart: "5px",
          }}
        >
          A professional template that comes with ready-to-use MUI components.
        </Typography>
        <Box
          component="img"
          alt="kitimg"
          src="images/auth-widgets.png"
          sx={{ width: "600px", height: "515px", objectFit: "contain", paddingBlockStart: '25px', position: 'relative', left: '-12px' }}
        />
      </Grid>
    </Grid>
  );
};

export default SignupPage;
