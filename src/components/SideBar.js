import React, { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/Dashboard";
import PeopleOutlinedIcon from "@mui/icons-material/People";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructions";
import SettingsOutlinedIcon from "@mui/icons-material/Settings";

import DashBoard from "./DashBoard";
import Customers from "./Customers";
import Integrations from "./Integrations";
import Settings from "./Settings";
import Account from "./Account";

const SideBar = ({ isSidebarVisible, setSidebarVisible, setActiveView }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [workspace, setWorkspace] = useState("Devias");

  const isXsDevice = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleChange = (event) => {
    setWorkspace(event.target.value);
  };

  const menuItems = [
    {
      key: "Overview",
      icon: <DashboardOutlinedIcon />,
      component: <DashBoard />,
    },
    {
      key: "Customers",
      icon: <PeopleOutlinedIcon />,
      component: <Customers />,
    },
    {
      key: "Integrations",
      icon: <IntegrationInstructionsOutlinedIcon />,
      component: <Integrations />,
    },
    {
      key: "Settings",
      icon: <SettingsOutlinedIcon />,
      component: <Settings />,
    },
    { key: "Account", icon: <PeopleOutlinedIcon />, component: <Account /> },
    { key: "Error", icon: <PeopleOutlinedIcon /> },
  ];

  const toggleDrawer = () => {
    if (isXsDevice) {
      setSidebarVisible(!isSidebarVisible);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (!isXsDevice) {
        setSidebarVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isXsDevice, setSidebarVisible]);

  return (
    <Drawer
      open={isSidebarVisible}
      onClose={toggleDrawer} 
        variant={isXsDevice ? "temporary" : "persistent"}
      anchor="left"
      PaperProps={{
        sx: {
          width: "250px",
          backgroundColor: "#121621",
          color: "white",
          zIndex: 1300,
          height:{xs :"100vh", sm:"100%"},
          margin:'auto',
          maxWidth:'1530px',
          "@media (max-width:900px) and (min-width:768px)": {
            marginTop: "90px",
          },
          "@media (max-width:520px) and (min-width:320px)":{
            marginBlockStart:"60px",
            
          }
        },
      }}
     >
      <Box
        sx={{
          width: "250px",
          backgroundColor: "#121621",
          color: "white",
          height: "100vh",
          padding: 2,
          position: "fixed",
        }}
      >
        <Box sx={{ marginBottom: 2 }}>
          <Box
            component="img"
            src="images/logo-home.svg"
            alt="logohome"
            sx={{
              height: "33",
              width: "122px",
              paddingBlockStart: "8px",
              paddingBlockEnd: "20px",
              marginInlineStart: "10px",
            }}
          ></Box>

          <FormControl
            variant="outlined"
            sx={{
              width: "210px",
              backgroundColor: "#1E1E2D",
              borderRadius: "10px",
              paddingInline: "10px",
              paddingBlock: "10px",
              height: "30px",
              border: "1px solid #444",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginInlineStart: "10px",
              marginTop: "-5px",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: "#b3b3b3",
                fontSize: "12px",
                marginBottom: "5px",
              }}
            >
              Workspace
            </Typography>
            <Select
              value={workspace}
              onChange={handleChange}
              sx={{
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
                fontSize: "16px",
                fontWeight: "bold",
                paddingLeft: "10px",
                cursor: "pointer",
              }}
              disableUnderline
              variant="standard"
            >
              <MenuItem value="Devias">Devias</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Divider
          sx={{
            backgroundColor: "#2a3040",
            marginBottom: 1,
            marginLeft: "-16px",
            marginBlockStart: 3,
            marginRight: "-16px",
          }}
        />
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                setActiveItem(item.key);
                setActiveView(item.component);
              }}
              sx={{
                backgroundColor:
                  activeItem === item.key ? "#635bff" : "transparent",
                color:
                  activeItem === item.key
                    ? "white"
                    : "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  backgroundColor:
                    activeItem === item.key
                      ? "#635bff"
                      : "rgba(255, 255, 255, 0.1)",
                },
                borderRadius: "8px",
                marginBottom: "15px",
                textAlign: "left",
                height: "40px",
                left: "0px",
                width: "253px",
                marginTop: "-5px",
                cursor: "pointer",
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    activeItem === item.key
                      ? "white"
                      : "rgba(255, 255, 255, 0.7)",
                  marginRight: "-20px",
                  minWidth: "30 px",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.key}
                primaryTypographyProps={{
                  sx: { fontSize: "15px" },
                }}
                sx={{
                  flexGrow: 1,
                  fontSize: "5px",
                  cursor: "pointer",
                }}
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ paddingBlockStart: { sm: "25vh", md: "0" } }}>
          <Divider
            sx={{
              backgroundColor: "#2a3040",
              marginLeft: "-16px",
              marginRight: "-16px",
              marginBlockStart: "-10px",
            }}
          />

          <Typography
            variant="h6"
            sx={{
              fontSize: "15px",
              paddingBlockStart: "15px",
              paddingBlockEnd: "-3px",
              wordSpacing: "2",
            }}
          >
            Need more features ?
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "15px",
              color: "#ccc",
              position: "relative",
              top: "-5px",
            }}
          >
            Check out our Pro solution template
          </Typography>
          <Box
            component="img"
            alt="pro-img"
            src="images/devias-kit-pro.png"
            sx={{
              height: "136px",
              width: "160px",
              paddingBlockStart: "15px",
              paddingInlineStart: "43px",
            }}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideBar;
