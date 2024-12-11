import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Divider } from '@mui/material';
import AppHeader from './AppHeader';

const Account= () => {
  const [profileData, setProfileData] = useState({
    firstName: 'Sofia',
    lastName: 'Rivers',
    email: 'sofia@devias.io',
    phone: '',
    state: '',
    city: '',
  });

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Profile data:', profileData);
  };

  return (
    <>
    <AppHeader/>
    <Typography variant='h4' color='black' sx={{position:'relative',paddingInlineStart:'20px' , top:'125px', width:'100px', fontWeight:500}}>Account</Typography>
    <Grid container spacing={2} sx={{paddingInlineStart:'30px',paddingBlock:'50px',gap:'50px', position:'relative', marginBlockStart:'100px'}}>
      <Grid item xs={3} sx={{border:'1px solid #c3c7cc63',paddingBlock:'0px',height:'350px',borderRadius:'20px',width:'300px'}}>
        <Box sx={{ display: 'flex', flexDirection:'column',alignItems: 'center', marginBottom: 2 ,paddingBlock:'50px' ,paddingInline:'50px' }}>
          <Avatar alt="Sofia Rivers" src="images/avatar.png" sx={{ width: 80, height: 80, marginRight: 2 }} />
          <div>
            <Typography variant="h5">Sofia Rivers</Typography>
            <Typography variant="body2">Los Angeles, USA</Typography>
            <Typography variant="body2">GMT-7</Typography>
          </div>
        </Box>
        <Divider
                  sx={{
                    backgroundColor: "#c3c7cc63",
                    marginBlockStart: "10px",
                  marginLeft: "-16px",     
    marginRight: "-0px",
                  }}
                />
        <Button variant="contained" component="label" sx={{left:'50px',top:'15px' ,backgroundColor:'transparent', color:"#1565c0", boxShadow:'none'}}>
          Upload picture
          <input type="file" hidden />
        </Button>
        
      </Grid>

      <Grid item xs={8} sx={{border:'1px solid #c3c7cc63', paddingInline:'20px', paddingBlock:'30px',borderRadius:'20px'}}>
        <Typography variant="h6">Profile</Typography>
        <Typography variant="body2" sx={{marginBottom:'10px'}}>The information can be edited</Typography>
        <Divider
                  sx={{
                    backgroundColor: "#c3c7cc63",
                    marginBlockStart: "10px",
                  marginLeft: "-16px",     
    marginRight: "-20px",
                  }}
                />
        <form onSubmit={handleSubmit} >
          <Grid container spacing={2} sx={{marginTop:'20px'}}>
            <Grid item xs={6}>
              <TextField
                label="First name*"
                name="firstName"
                value={profileData.firstName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last name*"
                name="lastName"
                value={profileData.lastName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email address*"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Phone number"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="State"
                name="state"
                value={profileData.state}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="City"
                name="city"
                value={profileData.city}
                onChange={handleChange}
                fullWidth
                sx={{marginBottom:'20px'}}
              />
            </Grid>
          </Grid>
          <Divider
                  sx={{
                    backgroundColor: "#c3c7cc63",
                    marginBlockStart: "10px",
                  marginLeft: "-16px",     
    marginRight: "-16px",
                  }}
                />
          <Button variant="contained" type="submit" sx={{ marginTop: 3 ,left:'660px' }}>
            Save details
          </Button>
          
                
        </form>
      </Grid>
    </Grid>
    </>
  );
};

export default Account;