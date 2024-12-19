import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AppHeader from "./AppHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { TextField, Divider } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const IntegrationCard = ({ integration }) => {
  return (
    <Grid item md={4} sm={12}>
      <Card
        sx={{
          
          height: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #c3c7cc63",
          boxShadow:'none',
          borderRadius: "20px",
          height:'270px',
          marginBlockStart:'10px',
          width:{
            sm:"93vw",
            md:370,
            xs:'87vw'
          }
        }}
      >
        <CardMedia
          component="img"
          height="40px"
          sx={{ textAlign: "center", width: "40px", paddingBlockStart: "50px" }}
          image={integration.iconUrl}
          alt={integration.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {integration.name}
          </Typography>
          <Typography variant="p" color="balck" sx={{fontSize:'17px'}}>
            {integration.description}
          </Typography>
        </CardContent>
        <Divider sx={{ width: "100%", marginBlockStart:'10px' }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: 2,
            width: "100%",
            gap:'30px',
            position:'relative',
          top:'-10px',
          height:'53px',
          "@media(max-width:900px)and (min-width:768px)":{
            gap:'60vw'
          }
            
          }}
         >
          <Typography variant="body2" color="text.secondary">
            Updated: {integration.updatedAt}
          </Typography>
         <Box sx={{
          display:'flex',
          alignItems:'center',
          gap:'0px',
          
          
         }}>
          <IconButton >
            <ImportExportIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            {integration.installCount} Installs
          </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

const Integrations = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const integrations = [
    {
      name: "Dropbox",
      description:
        "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud. a personal cloud.",
      iconUrl: "images/logo-dropbox.png",
      updatedAt: "Mar 8, 2024",
      installCount: 594,
    },
    {
      name: "Medium",
      description:
        "Medium is an Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
      iconUrl: "images/logo-medium.png",
      updatedAt: "Mar 8, 2024",
      installCount: 625,
    },
    {
      name: "Slack",
      description:
        "Slack is a cloud-based sDropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
      iconUrl: "images/logo-slack.png",
      updatedAt: "Mar 8, 2024",
      installCount: 857,
    },
    {
      name: "GitHub",
      description:
        "GitHub is a Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
      iconUrl: "images/logo-github.png",
      updatedAt: "Mar 8, 2024",
      installCount: 1200,
    },
    {
      name: "GitHub",
      description:
        "GitHub is aDropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
      iconUrl: "images/logo-github.png",
      updatedAt: "Mar 8, 2024",
      installCount: 1200,
    },
    {
      name: "GitHub",
      description:
        "GitHub is a Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
      iconUrl: "images/logo-github.png",
      updatedAt: "Mar 8, 2024",
      installCount: 1200,
    },
  ];

  const filteredIntegrations = integrations.filter((integration) =>
    integration.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  const displayedIntegrations = filteredIntegrations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    < >
    <Box sx={{marginBlockStart:'20px', height:'150vh', marginInlineStart:'-5px'}}>    
       
      <Typography
        variant="h4"
        color="black"
        sx={{ position: "relative", paddingInlineStart: "20px", top: "35px" }}
      >
        Integrations
      </Typography>
      <Button
       startIcon={<AddIcon/>}
        sx={{
          backgroundColor: "#635bff",
          color: "white",
          position: "relative",
          height:'40px',
          left:{
            md:1130,
            sm:"88vw",
            xs:'75vw'
          },
          top: "0px",
          paddingInline: "10px",
          borderRadius: "10px",
        }}
      >
        
         ADD
      </Button>
      <Button
        sx={{
          backgroundColor: "white",
          color: "black",
          top: "40px",
          right: "70px",
          height:'43px',
          textTransform:'none'
        }}
      >
        <IconButton>
            <ImportExportIcon />
          </IconButton>Import
      </Button>
      <Button
        sx={{
          backgroundColor: "white",
          color: "black",
          top: "40px",
          right: "70px",
          height:'43px',
          textTransform:'none'
        }}
      >
        <IconButton>
            <ImportExportIcon />
          </IconButton>Export
      </Button>

      <Box sx={{ padding: 2, marginBlockStart: "40px" }}>
        <Box sx={{ border: "1px solid #c3c7cc63", borderRadius: "20px" }}>
          <TextField
            placeholder="Search Integrations"
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
            sx={{ marginBlock: 2, marginInlineStart: 2, width: {sm:'500px', md:'500px', xs:"70vw"} }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Box>
        <Grid container spacing={2} sx={{ paddingLeft: "20px" }}>
          {displayedIntegrations.map((integration, index) => (
            <IntegrationCard key={index} integration={integration} />
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Pagination
            count={Math.ceil(filteredIntegrations.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
      </Box>

    </>
  );
};

export default Integrations;
