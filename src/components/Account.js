import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Divider,
} from "@mui/material";

const accountvalidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email address is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .nullable(),
  state: Yup.string().nullable(),
  city: Yup.string().nullable(),
});

const Account = () => {
  const initialValues = {
    firstName: "Sofia",
    lastName: "Rivers",
    email: "sofia@devias.io",
    phone: "",
    state: "",
    city: "",
  };

  const [avatarSrc, setavatarSrc] = useState("images/avatar.png");
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setavatarSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (values) => {
    console.log("Updated Profile Data:", values);
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          position: "relative",
          paddingInlineStart: "20px",
          top: "60px",
          fontWeight: 500,
        }}
      >
        Account
      </Typography>
      <Box
        sx={{
          width: { md: "1230px", sm: "150vw", xs: "87vw" },
          marginTop: "80px",
          display: "flex",
          justifyContent: "space-evenly",
          gap: "15px",
          paddingInlineStart: 2,

          "@media (max-width:900px) and (min-width:768px)": {
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            left: "-28vw",
          },

          "@media (max-width:520px) and (min-width:320px)": {
            flexDirection: "column",
            gap: "20px",
            height: "20vh",
          },
        }}
      >
        <Box
          sx={{
            width: { sm: "90vw", md: 450 },
            backgroundColor: "white",
            borderRadius: "20px",
            border: "1px solid #c3c7cc63",
            padding: "30px",
            textAlign: "center",
            height: "275px",
          }}
        >
          <Avatar
            src={avatarSrc}
            alt="Profile Avatar"
            sx={{ width: "80px", height: "80px", margin: "0 auto 10px" }}
          />
          <Typography variant="h5" fontWeight="500" sx={{ marginTop: "10px" }}>
            Hari Vijay
          </Typography>
          <Typography variant="body2" color="gray">
            Los Angeles USA
          </Typography>
          <Typography variant="body2" color="gray">
            GTM-7
          </Typography>
          <Divider
            sx={{
              backgroundColor: "#c3c7cc63",
              marginBlockStart: "30px",
              marginLeft: "-28px",
              marginRight: "-28px",
              marginTop: "80px",
            }}
          />
          <Button
            sx={{
              top: "20px",
              textTransform: "none",
              fontSize: "14px",
              color: "#635bff",
              paddingBlockStart: "0px",
              position: "relative",
            }}
          >
            Upload picture
            <input
              type="file"
              accept="image/*"
              style={{
                opacity: 0,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
              onChange={handleImageUpload}
            />
          </Button>
        </Box>

        <Box
          sx={{
            width: { sm: "90vw", md: 900 },
            backgroundColor: "white",
            borderRadius: "20px",
            border: "1px solid #c3c7cc63",
            padding: "25px",
          }}
        >
          <Typography variant="h6" fontWeight="500" marginBottom="10px">
            Profile
          </Typography>
          <Typography variant="body2" color="textSecondary" marginBottom="20px">
            The information can be edited
          </Typography>
          <Divider
            sx={{
              backgroundColor: "#c3c7cc63",
              marginBlockStart: "-5px",
              marginLeft: "-16px",
              marginRight: "-16px",
            }}
          />
          <Formik
            initialValues={initialValues}
            validationSchema={accountvalidationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    paddingBlockStart: "20px",
                    paddingBlockEnd: "10px",
                    paddingInline: "25px",

                    "@media (max-width:900px) and (min-width:768px)": {
                      flexDirection: "column",
                    },
                  }}
                >
                  <Field name="firstName">
                    {({ field, meta }) => (
                      <TextField
                        {...field}
                        label="First name"
                        variant="outlined"
                        sx={{ flex: "1 1 48%" }}
                        error={meta.touched && Boolean(meta.error)}
                        helperText={meta.touched && meta.error}
                      />
                    )}
                  </Field>

                  <Field name="lastName">
                    {({ field, meta }) => (
                      <TextField
                        {...field}
                        label="Last name"
                        variant="outlined"
                        error={meta.touched && Boolean(meta.error)}
                        helperText={meta.touched && meta.error}
                        sx={{ flex: "1 1 48%" }}
                      />
                    )}
                  </Field>

                  <Field name="email">
                    {({ field, meta }) => (
                      <TextField
                        {...field}
                        label="Email address"
                        variant="outlined"
                        sx={{ flex: "1 1 48%" }}
                        error={meta.touched && Boolean(meta.error)}
                        helperText={meta.touched && meta.error}
                      />
                    )}
                  </Field>

                  <Field name="phone">
                    {({ field, meta }) => (
                      <TextField
                        {...field}
                        label="Phone number"
                        variant="outlined"
                        sx={{ flex: "1 1 48%" }}
                        error={meta.touched && Boolean(meta.error)}
                        helperText={meta.touched && meta.error}
                      />
                    )}
                  </Field>

                  <Field name="state">
                    {({ field }) => (
                      <TextField
                        {...field}
                        label="State"
                        variant="outlined"
                        sx={{ flex: "1 1 48%" }}
                      />
                    )}
                  </Field>

                  <Field name="city">
                    {({ field }) => (
                      <TextField
                        {...field}
                        label="City"
                        variant="outlined"
                        sx={{ flex: "1 1 48%" }}
                      />
                    )}
                  </Field>
                </Box>
                <Divider
                  sx={{
                    backgroundColor: "#c3c7cc63",
                    marginBlockStart: "30px",
                    marginLeft: "-16px",
                    marginRight: "-16px",
                  }}
                />{" "}
                <Box textAlign="right">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#635bff",
                      color: "white",
                      padding: "8px 20px",
                      textTransform: "none",
                      borderRadius: "10px",
                      top: "15px",
                    }}
                  >
                    Save details
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
};

export default Account;
