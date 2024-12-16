import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Checkbox,
  Button,
  TextField,
  Divider,
  Typography,
  Box,
  InputAdornment,
  Avatar
 
} from "@mui/material";
import AppHeader from "./AppHeader";
import SearchIcon from '@mui/icons-material/Search'
import IconButton from "@mui/material/IconButton"
import ImportExportIcon from "@mui/icons-material/ImportExport"

const customers = [
  {
    id: 1,
    name: "Alcides Antonio",
    avatarUrl:'images/avatar.png',
    email: "alcides.antonio@devias.io",
    location: "Madrid, Comunidad de Madrid, Spain",
    phone: "908-691-3242",
    signedUp: "Mar 8, 2024",
  },
  {
    id: 2,
    name: "Marcus Finn",
    avatarUrl:'images/avatar.png',
    email: "marcus.finn@devias.io",
    location: "Carson City, Nevada, USA",
    phone: "415-907-2647",
    signedUp: "Mar 8, 2024",
  },
  {
    id: 3,
    name: "Jie Yan",
    avatarUrl:'images/avatar.png',
    email: "jie.yan.song@devias.io",
    location: "North Canton, Ohio, USA",
    phone: "770-635-2682",
    signedUp: "Mar 8, 2024",
  },
  {
    id: 4,
    name: "Nasimiyu Danai",
    avatarUrl:'images/avatar.png',
    email: "nasimiyu.danai@devias.io",
    location: "Salt Lake City, Utah, USA",
    phone: "801-301-7894",
    signedUp: "Mar 8, 2024",
  },
  {
    id: 5,
    name: "Iulia Albu",
    avatarUrl:'images/avatar.png',
    email: "iulia.albu@devias.io",
    location: "Murray, Utah, USA",
    phone: "313-812-8947",
    signedUp: "Mar 8, 2024",
  },
];

const Customers = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase()) ||
      customer.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Box sx={
      {
        height:'130vh',
        marginLeft:'-10px',
        marginBlockStart:'0px'
      }
     }>
      <Typography variant='h4' color='black' sx={{position:'relative', paddingInlineStart:'30px' , top:'80px', left:'0px'}}>Customers</Typography>
      <Button sx={{backgroundColor:'#635bff', color:'white' , position:'relative' , left:{
            md:1150,
            sm:"88vw"
          } , top:'50px' , paddingInline:'20px', borderRadius:'10px', paddingBlock:'8px'}}>+ Add</Button>
      <Button sx={{backgroundColor:'white' , color:'black', top:'90px', right:'60px', height:'43px', textTransform:'none'}}><IconButton>
            <ImportExportIcon />
          </IconButton>Import</Button>
      <Button sx={{backgroundColor:'white' , color:'black' , top:'90px', right:'50px', height:'43px', textTransform:'none'}}><IconButton>
            <ImportExportIcon />
          </IconButton>Export</Button>
     <Box sx={{ padding: 2  , position:'relative', marginBlockStart:'110px' , left:'10px', width:'1180px'}}>
      <Box sx={{ border: "1px solid #c3c7cc63", borderRadius:'20px'}}>    
          <TextField
        
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search Customer"
        sx={{ marginBlock: 2, marginInlineStart:2, width:'500px',}}
        InputProps={{
          startAdornment:(
            <InputAdornment position="start"><SearchIcon/></InputAdornment>
          )
        }}
      /></Box>

      <TableContainer component={Paper} sx={{borderRadius:'20px', top:'20px', position:'relative' ,width:{sm:"95vw", md:"80vw"}}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{height:'46px', paddingBlock:0}}>
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < filteredCustomers.length}
                  checked={filteredCustomers.length > 0 && selected.length === filteredCustomers.length}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelected(filteredCustomers.map((customer) => customer.id));
                    } else {
                      setSelected([]);
                    }
                  }}
                />
              </TableCell>
              <TableCell >Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Signed Up</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <Checkbox
                      checked={selected.includes(customer.id)}
                      onChange={(event) => {
                        const newSelected = event.target.checked
                          ? [...selected, customer.id]
                          : selected.filter((id) => id !== customer.id);
                        setSelected(newSelected);
                      }}
                    />
                  </TableCell>
                  <TableCell>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={customer.avatarUrl}
              alt={customer.name}
              sx={{ marginRight: "10px" }}
            >
              {customer.name[0]}
            </Avatar>
            {customer.name}
          </Box>
          </TableCell>
                  
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.location}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.signedUp}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredCustomers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        
      />
      </TableContainer>

     
    </Box>
    </Box>
    </>
  );
};

export default Customers;
