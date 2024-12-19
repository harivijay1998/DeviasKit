import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import AddIcon from '@mui/icons-material/Add';


const customers = [
  {
    id: 1,
    name: "Alcides Antonio",
    avatarUrl: "images/avatar.png",
    email: "alcides.antonio@devias.io",
    location: "Madrid, Comunidad de Madrid, Spain",
    phone: "908-691-3242",
    signedUp: "Mar 8, 2024",
  },
  {
    id: 2,
    name: "Marcus Finn",
    avatarUrl: "images/avatar.png",
    email: "marcus.finn@devias.io",
    location: "Carson City, Nevada, USA",
    phone: "415-907-2647",
    signedUp: "Mar 8, 2024",
  },
  {
    id: 3,
    name: "Jie Yan",
    avatarUrl: "images/avatar.png",
    email: "jie.yan.song@devias.io",
    location: "North Canton, Ohio, USA",
    phone: "770-635-2682",
    signedUp: "Mar 8, 2024",
  },
  {
    id: 4,
    name: "Nasimiyu Danai",
    avatarUrl: "images/avatar.png",
    email: "nasimiyu.danai@devias.io",
    location: "Salt Lake City, Utah, USA",
    phone: "801-301-7894",
    signedUp: "Mar 8, 2024",
  },
  {
    id: 5,
    name: "Iulia Albu",
    avatarUrl: "images/avatar.png",
    email: "iulia.albu@devias.io",
    location: "Murray, Utah, USA",
    phone: "313-812-8947",
    signedUp: "Mar 8, 2024",
  },
];

const Customers = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase()) ||
      customer.location.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth:300,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={params.row.avatarUrl}
            alt={params.value}
            sx={{ marginRight: 2 }}
          >
            {params.value[0]}
          </Avatar>
          {params.value}
        </Box>
      ),
    },
    { field: "email", headerName: "Email", minWidth:200},
    { field: "location", headerName: "Location",minWidth:200},
    { field: "phone", headerName: "Phone" ,minWidth:200},
    { field: "signedUp", headerName: "Signed Up",minWidth:200},
  ];

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          paddingBlockStart: "60px",
          paddingInline:'20px',
          width:{sm:'92vw',md:'100%', xs:'90vw'}

        }}
       >
        <Typography
          variant="h4"
          sx={{ marginBottom: 3 }}
        >
          Customers
        </Typography>
        <Button
              sx={{marginRight: 2,color:'black', backgroundColor:'white' , marginBlockStart:'-30px'}}
            
              startIcon={<ImportExportIcon />}
            >
              Import
            </Button>
            <Button
              sx={{color:'black', backgroundColor:'white', marginBlockStart:'-30px'}}
              startIcon={<ImportExportIcon />}
            >
              Export
            </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
            paddingBlockStart:'20px'
          }}
        >
          <Box sx={{border:"1px solid  #c3c7cc63", width:'100%', paddingBlock:'20px', paddingInlineStart:'20px', borderRadius:'20px'}}>
          <TextField
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search Customer"
            sx={{ width:{ xs:"70vw" ,md:"40%", sm:'40%'} }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          </Box>
      
            <Button
              variant="contained"
              startIcon={<AddIcon/>}
              sx={{
                backgroundColor: "#635bff",
                color: "white",
                marginRight: 2,
                height:'40px',
                position:'relative',
                top:'-100px',
                borderRadius:'10px',
                "@media (max-width:500px) and (min-width:320px)"
                :{marginRight:0}
              }}
            >Add
            </Button>
            
        
        </Box>
        <Box sx={{ height: 500, backgroundColor: "white", borderRadius:"20px", overflow: "auto",
          "@media (max-width:600px)": {
            height: 500, 
            overflowX: "scroll", 
            overflowY: "scroll",
           }}}>
          <DataGrid
            rows={filteredCustomers}
            columns={columns}
            pageSize={5}
            rowHeight={80}
            rowsPerPageOptions={[5, 10, 25]}
            checkboxSelection
            disableSelectionOnClick
            sx={{borderRadius:'20px'}}
          />
        </Box>
      </Box>
    </>
  );
};

export default Customers;
