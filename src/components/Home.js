import React, { useState } from "react";
import { Box } from "@mui/material";
import SideBar from "./SideBar";
import Dashboard from "./DashBoard";
import AppHeader from "./AppHeader";

const Home = () => {
  const [activeView, setActiveView] = useState(<Dashboard />);
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden", // Prevent scrolling
      }}
    >
      <AppHeader toggleSidebar={toggleSidebar} />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          overflow: "hidden", // Prevent overflow on child elements
        }}
      >
        <SideBar
          isSidebarVisible={isSidebarVisible}
          setSidebarVisible={setSidebarVisible}
          setActiveView={setActiveView}
        />

        <Box
          sx={{
            flexGrow: 1,
            marginLeft: isSidebarVisible ? "280px" : "0",
            transition: "margin-left 0.3s ease",
            backgroundColor: "#f5f5f5",
            height: "100%",
            overflowX: "hidden", // Prevent x-axis scrolling for this section
          }}
        >
          {activeView}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
