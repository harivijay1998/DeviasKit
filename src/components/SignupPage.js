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
      <Grid item xs={6} sx={{ position: "relative" }}>
        <Box
          component="img"
          alt="logo"
          src="images/logo--dark.svg"
          sx={{
            position: "absolute",
            top: "25px",
            left: "18px",
            height: "33px",
          }}
        ></Box>

        <Box sx={{ paddingInline: "150px", paddingBlock: "100px" }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Sign up
          </Typography>
          <Typography variant="body1">
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
            {({ errors, touched }) => (
              <Form>
                <Field
                  as={TextField}
                  fullWidth
                  label="First name"
                  name="firstName"
                  error={Boolean(errors.firstName) && touched.firstName}
                  helperText={errors.firstName && touched.firstName}
                  sx={{
                    marginBottom: "25px",
                    marginTop: "25px",
                    height: "50px",
                    width: "450px",
                    borderRadius: "20px",
                  }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  label="Last name"
                  name="lastName"
                  error={Boolean(errors.lastName) && touched.lastName}
                  helperText={errors.lastName && touched.lastName}
                  sx={{
                    marginBottom: "25px",
                    height: "50px",
                    width: "450px",
                    borderRadius: "20px",
                  }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  label="Email address"
                  name="email"
                  type="email"
                  error={Boolean(errors.email) && touched.email}
                  helperText={errors.email && touched.email}
                  sx={{
                    marginBottom: "25px",
                    height: "50px",
                    width: "450px",
                    borderRadius: "20px",
                  }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  error={Boolean(errors.password) && touched.password}
                  helperText={errors.password && touched.password}
                  sx={{
                    marginBottom: "25px",
                    height: "50px",
                    width: "450px",
                    borderRadius: "20px",
                  }}
                />
                <FormControlLabel
                  control={<Field as={Checkbox} name="termsAndConditions" />}
                  label="I have read the terms and conditions"
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    marginBottom: "15px",
                    height: "40px",
                    width: "450px",
                    borderRadius: "10px",
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
        }}
      >
        <Typography variant="h5" color="white" sx={{ textAlign: "center" }}>
          Welcome to{" "}
          <Typography variant="span" color="green">
            Devias Kit
          </Typography>
        </Typography>
        <Typography variant="body2" color="white" sx={{ textAlign: "center" }}>
          A professional template with ready-to-use MUI components.
        </Typography>
        <Box
          component="img"
          alt="kitimg"
          src="images/auth-widgets.png"
          sx={{ width: "600px", height: "515px", objectFit: "contain" }}
        />
      </Grid>
    </Grid>
  );
};

export default SignupPage;
