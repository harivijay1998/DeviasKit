import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  IconButton,
  InputAdornment,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
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
    <Box sx={{ display: "flex" }}>
      <Box
        item
        xs={12}
        sm={6}
        sx={{
          position: "relative",
          width: "802px",
          height: "100vh",
          margin:'auto',
          maxWidth:'1530px'
        }}
       >
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

        <Box sx={{ paddingInline: "159px", paddingBlockStart: "180px" , position:'relative', top:'10px',
          "@media (max-width:900px) and (min-width: 768px)":{
            paddingBlockStart:'400px', paddingInline:'180px'
          },
          "@media (max-width:500px) and (min-width:320px)":{
              paddingInline:"8vw"
          }
        }}>
          <Typography
            variant="h4"
            color="black"
            sx={{ mb: 1, fontWeight: "500", fontSize:'33px' }}
          >
            Sign in
          </Typography>
          <Typography variant="body1" color="gray"sx={{mb:2, fontSize:'15px'}}>
            Don't have an account?{" "}
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
                  label="Email address"
                  name="email"
                  type="email"
                  error={Boolean(errors.email && touched.email)}
                  helperText={errors.email && touched.email && errors.email}
                  sx={{
                    marginBottom: "35px",
                    height: "50px",
                    width:{md:'450px',sm:'450px',xs:'80vw'},
                    mt: 2,
                  }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"} 
                  error={Boolean(errors.password && touched.password)}
                  helperText={errors.password && touched.password && errors.password}
                  sx={{
                    marginBottom: "55px",
                    height: "50px",
                    width:{md:'450px',sm:'450px',xs:'80vw'},
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Link href="/forgotpassword" sx={{ textDecoration: "none", position:'relative', top:'-5px', fontWeight:'600', fontSize:'15px' }}>
                  Forgot password?
                </Link>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: "10px",
                    height: "40px",
                    width:{md:'450px',sm:'450px',xs:'80vw'},
                    mt: 2,
                    textTransform:'none'
                  }}
                >
                  Sign in
                </Button>
                {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
              </Form>
            )}
          </Formik>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#090e23",
          width: "70%",
          marginInlineStart: "0px",
          
          "@media (max-width:900px) and (min-width:768px)":{
              display:'none'
          },

          "@media (max-width:500px) and (min-width:320px)":{
              display:'none'
          }
        }}
      >
        <Typography
          variant="h5"
          color="white"
          sx={{ textAlign: "center", paddingBlockStart: "50px", fontWeight: "700" }}
        >
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
          sx={{
            width: "600px",
            height: "515px",
            objectFit: "contain",
            paddingInlineStart: "90px",
            paddingBlockStart: "30px",
          }}
        />
      </Box>
    </Box>
  );
};

export default SigninPage;
