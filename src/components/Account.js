import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Divider } from "@mui/material";
import AppHeader from "./AppHeader";

const Account = () => {
  const [profileData, setProfileData] = useState({
    firstName: "Sofia",
    lastName: "Rivers",
    email: "sofia@devias.io",
    phone: "",
    state: "",
    city: "",
  });

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Profile data:", profileData);
  };

  return (
    <>
      <AppHeader />
      <Typography
        variant="h4"
        color="black"
        sx={{
          position: "relative",
          paddingInlineStart: "20px",
          top: "130px",
          width: "100px",
          fontWeight: 500,
        }}
      >
        Account
      </Typography>
      <Box
        sx={{
          width: "1230px",
          marginTop: "150px",
          display: "flex",
          justifyContent: "space-evenly",
          gap: "15px",
          paddingInlineStart:'5px'
        }}
      >
        <Box
          sx={{
            width: "390px",
            backgroundColor: "white",
            borderRadius: "20px",
            border: '1px solid #c3c7cc63',
            paddingBlockStart: "30px",
            textAlign: "center",
            paddingBlockEnd: 0,
            height: "275px",
          }}
        >
          <Avatar
            src="images/avatar.png"
            alt="Profile Avatar"
            sx={{
              width: "80px",
              height: "80px",
              margin: "0 auto 10px",
            }}
          />
          <Box
            sx={{
              paddingBlockStart: "20px",
            }}
          >
            <Typography variant="h5" fontWeight="500" sx={{ mb: 1 , marginTop:'-15px'}}>
              Sofia Rivers
            </Typography>
            <Typography variant="body2" color="gray " sx={{ mb: 1 }}>
              Los Angeles USA
            </Typography>
            <Typography variant="body2" color="gray" sx={{ mb: 1 }}>
              GTM-7
            </Typography>
          </Box>
          <Divider
            sx={{
              backgroundColor: "#c3c7cc63",
              marginBlockStart: "30px",
              marginLeft: "-px",
              marginRight: "-px",
            }}
          />
          <Button
            sx={{
              marginTop: "15px",
              textTransform: "none",
              fontSize: "14px",
              color: "#635bff",
              paddingBlockStart: "0px",
            }}
          >
            Upload picture
          </Button>
        </Box>

        <Box
          sx={{
            width: "750px",
            backgroundColor: "white",
            borderRadius: "20px",
            border: '1px solid #c3c7cc63',
            paddingBlockStart: "20px",
            paddingBlockEnd: "10px",
            paddingInline: "25px",
          }}
        >
          <Typography variant="h6" fontWeight="500" marginBottom="0px">
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

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              paddingBlockStart:'20px'
            }}
          >
            <TextField
              label="First name"
              variant="outlined"
              fullWidth
              required
              sx={{ flex: "1 1 48%" }}
            />
            <TextField
              label="Last name"
              variant="outlined"
              fullWidth
              required
              sx={{ flex: "1 1 48%" }}
            />
            <TextField
              label="Email address"
              variant="outlined"
              fullWidth
              required
              sx={{ flex: "1 1 48%" }}
            />
            <TextField
              label="Phone number"
              variant="outlined"
              fullWidth
              sx={{ flex: "1 1 48%" }}
            />
            <TextField
              label="State"
              variant="outlined"
              fullWidth
              sx={{ flex: "1 1 48%" }}
            />
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              sx={{ flex: "1 1 48%" }}
            />
          </Box>
          <Divider
            sx={{
              backgroundColor: "#c3c7cc63",
              marginBlockStart: "30px",
              marginLeft: "-16px",
              marginRight: "-16px",
            }}
          />
          <Box
            sx={{
              textAlign: "right",
              marginTop: "10px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#635bff",
                color: "white",
                padding: "8px 20px",
                textTransform: "none",
                borderRadius: "10px",
              }}
            >
              Save details
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Account;
