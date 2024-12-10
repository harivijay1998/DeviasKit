import React, { useState } from "react";
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
  InputLabel,
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

const SideBar = ({ setActiveView }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [workspace, setWorkspace] = useState("Devias");

  const handleChange = (event) => {
    setWorkspace(event.target.value);
  };

  const menuItems = [
    { key: "Overview", icon: <DashboardOutlinedIcon />, component: <DashBoard /> },
    { key: "Customers", icon: <PeopleOutlinedIcon />, component: <Customers /> },
    {
      key: "Integrations",
      icon: <IntegrationInstructionsOutlinedIcon />,
      component: <Integrations />,
    },
    { key: "Settings", icon: <SettingsOutlinedIcon />, component: <Settings /> },
    { key: "Account", icon: <PeopleOutlinedIcon />, component: <Account /> },
    { key: "Error", icon: <PeopleOutlinedIcon /> },

  ];

  return (
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
        sx={{height:'33',
            width:'122px',
            paddingBlockStart:'8px',
            paddingBlockEnd:'20px',
            marginInlineStart:'10px'
        }}
        ></Box>

<FormControl
      variant="outlined"
      sx={{
        minWidth: 220,
        backgroundColor: "#1a1a1a", 
        borderRadius: 1,
        color: "white",
        marginInlineStart:'10px'
      }}
    >
      <InputLabel sx={{ color: "gray" }}>Workspace</InputLabel>
      <Select
        value={workspace}
        onChange={handleChange}
        label="Workspace"
        sx={{
          color: "white",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
        }}
      >
        <MenuItem value="Devias">Devias</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>
    </FormControl>
      </Box>
      <Divider sx={{ backgroundColor: "gray", marginBottom: 1,marginLeft: "-16px",     
    marginRight: "-16px",}} />
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
              marginBottom: '13px' ,
              textAlign:'left',
              height:'36px',
              left:'0px'
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  activeItem === item.key
                    ? "white"
                    : "rgba(255, 255, 255, 0.7)",
                    marginRight: "5px", 
      minWidth: "30px", 
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.key}
            sx={{
              flexGrow: 1, // This will make the text take up the remaining space
            }} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{backgroundColor:'#aaa',marginLeft: "-16px",     
    marginRight: "-16px", }}/>

      <Typography variant="h6" sx={{fontSize:'15px', paddingBlockStart:'15px '}}>Need more features ?</Typography>
      <Typography variant="p" sx={{fontSize:'12px', color:'#ccc'}}>Check out our Pro solution template</Typography>
        <Box 
          component="img"
          alt="pro-img"
          src="images/devias-kit-pro.png"
          sx={{
            height:'136px',
            width:'160px',
            paddingBlockStart:'20px',
            paddingInlineStart:'20px'
          }}/>
          
    </Box>
  );
};

export default SideBar;
