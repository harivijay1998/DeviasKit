import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router";

const Settings = () => {

  const navigate = useNavigate()
  const [emailNotifications, setEmailNotifications] = useState({
    productUpdates: true,
    securityUpdates: false,
  });
  const [phoneNotifications, setPhoneNotifications] = useState({
    email: true,
    securityUpdates: false,
  });
  const [signupData, setSignupData] = useState({});
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Load signup data from localStorage on component mount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("signupData")) || {};
    setSignupData(data);
  }, []);

  const handleEmailChange = (event) => {
    setEmailNotifications({
      ...emailNotifications,
      [event.target.name]: event.target.checked,
    });
  };

  const handlePhoneChange = (event) => {
    setPhoneNotifications({
      ...phoneNotifications,
      [event.target.name]: event.target.checked,
    });
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    if (name === "newPassword") setNewPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleSaveChanges = () => {
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }
    if (!newPassword) {
      setPasswordError("Password cannot be empty.");
      return;
    }

    const updatedSignupData = { ...signupData, password: newPassword };
    localStorage.setItem("signupData", JSON.stringify(updatedSignupData));
    setSignupData(updatedSignupData);
    setPasswordError("");
    alert("Password updated successfully!");
    navigate("/")
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          position: "relative",
          top: "60px",
          left: "-10px",
          paddingInlineStart: "30px",
          fontWeight: 500,
        }}
      >
        Settings
      </Typography>
      <Box sx={{ padding: 1, marginBlockStart: "60px", marginInlineStart: "10px" }}>
        <Box
          sx={{
            mt: 2,
            border: "1px solid #c3c7cc63",
            paddingBlock: "30px",
            borderRadius: "20px",
            width: {
              sm: "92vw",
              md: 1205,
            },
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid #c3c7cc63",
              paddingInlineStart: "25px",
              paddingBlockEnd: "10px",
              paddingBlockStart: "0px",
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "20px" }}>
              Notifications
            </Typography>
            <Typography variant="body2" color="gray" sx={{ position: "relative", top: "-5px" }}>
              Manage the notifications
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "40px", paddingBlock: "20px" }}>
            <Box sx={{ mt: 0, paddingInlineStart: "25px", paddingBlockStart: "-20px" }}>
              <Typography variant="h6">Email</Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={emailNotifications.productUpdates}
                      onChange={handleEmailChange}
                      name="productUpdates"
                    />
                  }
                  label="Product updates"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={emailNotifications.securityUpdates}
                      onChange={handleEmailChange}
                      name="securityUpdates"
                    />
                  }
                  label="Security updates"
                />
              </Box>
            </Box>

            <Box sx={{ mt: 1, paddingInlineStart: "190px" }}>
              <Typography variant="h6">Phone</Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={phoneNotifications.email}
                      onChange={handlePhoneChange}
                      name="email"
                    />
                  }
                  label="Email"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={phoneNotifications.securityUpdates}
                      onChange={handlePhoneChange}
                      name="securityUpdates"
                    />
                  }
                  label="Security updates"
                />
              </Box>
            </Box>
          </Box>
          <Divider sx={{ backgroundColor: "#c3c7cc63", marginBlockStart: "10px" }} />
          <Button
            color="primary"
            variant="contained"
            sx={{
              position: "relative",
              top: "15px",
              left: { md: 1060, sm: 600 },
              borderRadius: "10px",
              textTransform: "none",
            }}
          >
            Save changes
          </Button>
        </Box>

        <Box
          sx={{
            mt: 2,
            border: "1px solid #c3c7cc63",
            borderRadius: "20px",
            paddingBlockEnd: "10px",
            width: {
              sm: "92vw",
              md: 1205,
            },
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid #c3c7cc63",
              paddingBlockEnd: "10px",
              paddingBlockStart: "25px",
              paddingInlineStart: "20px",
            }}
          >
            <Typography variant="h6">Password</Typography>
            <Typography variant="p" color="#aaa" sx={{ position: "relative", top: "-5px" }}>
              Update Password
            </Typography>
          </Box>
          <Box sx={{ paddingInlineStart: "20px", paddingBlock: "15px" }}>
            <TextField
              label="New Password"
              type="password"
              value={newPassword}
              onChange={handlePasswordChange}
              name="newPassword"
              sx={{ mt: 2, width: "70%", borderRadius: "20px" }}
              required
            />
            <TextField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={handlePasswordChange}
              name="confirmPassword"
              sx={{ mt: 2, width: "70%" }}
              required
            />
            {passwordError && (
              <Typography color="error" sx={{ mt: 1 }}>
                {passwordError}
              </Typography>
            )}
          </Box>
          <Divider sx={{ backgroundColor: "#c3c7cc63", marginBlockStart: "20px" }} />
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              textTransform: "none",
              top: "0px",
              left: { md: 1105, sm: 650 },
              borderRadius: "10px",
            }}
            onClick={handleSaveChanges }
          >
            Update
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Settings;
