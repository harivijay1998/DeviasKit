import React, { useState } from "react";
import { Box } from "@mui/material";
import SideBar from "./SideBar";
import Dashboard from "./DashBoard";

const Home = () => {
  const [activeView, setActiveView] = useState(<Dashboard/>);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          flexGrow: 1,
          marginInlineStart:'285px',
          overflowY: "auto",
          backgroundColor: "#f5f5f5",
        }}
      >
        {activeView} 
      </Box>

      <SideBar setActiveView={setActiveView} />
    </Box>
  );
};

export default Home;
