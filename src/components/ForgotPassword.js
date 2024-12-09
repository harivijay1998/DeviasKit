import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Grid,
  Link,
  Container,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const [error, setError] = useState(null);

  const handleSubmit = (values) => {
    console.log(values);
    setError(null);
  };
  return (
    <Grid container>
      <Grid item xs={6} sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingInline: "150px", paddingBlock: "250px" 
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 , fontWeight:500, left:'10px'}}>
            Reset Password
          </Typography>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  as={TextField}
                  fullWidth
                  label="Email address"
                  name="email"
                  type="email"
                  error={Boolean(errors.email && touched.email)}
                  helperText={errors.email && touched.email && errors.email}
                  sx={{ marginBottom: 2 }}
                />
                <Button type="submit" variant="contained" fullWidth>
                  Send recovery link
                </Button>
                {error && <Alert severity="error">{error}</Alert>}
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
        <Typography variant="p" color="white" sx={{ textAlign: "center" }}>
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

export default ForgotPassword;
