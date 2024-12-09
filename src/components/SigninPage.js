import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Grid,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain 8 characters, one uppercase, one lowercase, one number, and one special character"
    ),
});

const SigninPage = () => {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedData = localStorage.getItem("signupData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleSubmit = (values) => {
    if (formData) {
      if (formData.email === values.email && formData.password === values.password) {
        setError(null);
        navigate("/home"); 
      } else {
        setError("Invalid email or password");
      }
    } else {
      setError("No registered user found. Please sign up first.");
    }
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

        <Box sx={{ paddingInline: "150px", paddingBlock: "180px" }}>
          <Typography variant="h4" color="black" sx={{ mb: 1, fontWeight: "400" }}>
            Sign in
          </Typography>
          <Typography variant="body1" color="gray">
            Don't Have an Account?{" "}
            <Link href="/signup" sx={{ textDecoration: "none" }}>
              SignUp
            </Link>
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignInSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  as={TextField}
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  error={Boolean(errors.email && touched.email)}
                  helperText={errors.email && touched.email && errors.email}
                  sx={{
                    marginBottom: "15px",
                    height: "50px",
                    width: "450px",
                    mt: 2,
                  }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  error={Boolean(errors.password && touched.password)}
                  helperText={errors.password && touched.password && errors.password}
                  sx={{
                    marginBottom: "15px",
                    height: "50px",
                    width: "450px",
                  }}
                />
                <Link href="/forgotpassword" sx={{ textDecoration: "none" }}>
                  Forgot Password?
                </Link>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: "10px",
                    height: "40px",
                    width: "450px",
                    mt: 2,
                  }}
                >
                  Sign in
                </Button>
                {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
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

export default SigninPage;
