import React, { useState, useRef, useEffect } from 'react';
import {
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Avatar,
  Modal,
  Backdrop,
  Fade,
  List,
  ListItem,
  ListItemText,
  Divider,
  Badge,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsOutlinedIcon from "@mui/icons-material/Settings";
import PeopleOutlinedIcon from "@mui/icons-material/People";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";


const AppHeader = ({ toggleSidebar, onSearchToggle }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(5);
  const navigate = useNavigate();

  const handleSearchToggle = () => {
    setIsSearchOpen((prev) => !prev);
    if (onSearchToggle) {
      onSearchToggle(!isSearchOpen);
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 0);
      return () => clearTimeout(timer);
    }
  }, [isSearchOpen]);

  const openAvatarModal = () => setIsAvatarModalOpen(true);
  const closeAvatarModal = () => setIsAvatarModalOpen(false);

  const handleNavigation = (path) => {
    setIsAvatarModalOpen(false);
    navigate(path);
  };

  return (
    
    <Box
  sx={{
    height: '10vh',
    minHeight: '10vh',
    maxHeight: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #c3c7cc63',
    backgroundColor: 'white',
    width: '100%',
  }}
>

      <IconButton color="inherit" aria-label="menu" onClick={toggleSidebar} >
        <MenuIcon />
      </IconButton>

      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 , left:{md:"250px", sm:'3vw'}, position:"relative"
      }}>
        <IconButton onClick={handleSearchToggle} >
          <SearchIcon sx={{ fontSize:'30px'}} />
        </IconButton>
        {isSearchOpen && (
          <InputBase
            ref={inputRef}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              ml: 1,
              width: '200px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '2px 8px',
            }}
          />
        )}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 , mr:2
      }}>
        <IconButton color="inherit">
          <PeopleAltOutlinedIcon />
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={notificationCount} color="error">
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </IconButton>
        <Avatar
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="User Avatar"
          sx={{ width: 36, height: 36, cursor: 'pointer' }}
          onClick={openAvatarModal}
        />
      </Box>

      <Modal
        open={isAvatarModalOpen}
        onClose={closeAvatarModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isAvatarModalOpen}>
          <Box
            sx={{
              position: 'absolute',
              top: '25%',
              left: '90%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p:0,
              borderRadius: '10px',
              width: '250px',
              cursor:'pointer',
              "@media (max-width:900px) and ( min-width:768px)":{
                top:"18%",
                left:"83%"
              }
            }}
          >
            <List>
              <Box >
              <ListItem sx={{mb:-3}}>
               <ListItemText primary="Sofia Rivers" />
              </ListItem>
              <ListItem>
                <ListItemText  sx={{color:'#aaa', fontSize:'4px'}}>SofiaRivers@example.com</ListItemText>
              </ListItem>
              </Box>
              <Divider sx={{ backgroundColor: "#c3c7cc63",
                      marginBlockStart: "10px",
                      marginLeft: "-0px",
                      marginRight: "-0px",}} />
                <Box >
              <ListItem button onClick={() => handleNavigation('/settings')} sx={{mb:-2, textAlign:'left'}}>
              <IconButton><SettingsOutlinedIcon></SettingsOutlinedIcon></IconButton> <ListItemText primary="Settings" />
              </ListItem>
              <ListItem sx={{mb:-2, textAlign:'left'}}>    <IconButton><PeopleAltOutlinedIcon></PeopleAltOutlinedIcon></IconButton>           <ListItemText>Profile</ListItemText>
              </ListItem>
              <ListItem button onClick={() => handleNavigation('/')} sx={{textAlign:'left'}}>
                <IconButton><LogoutOutlinedIcon></LogoutOutlinedIcon></IconButton>
                <ListItemText primary="Logout"  />
              </ListItem>
              </Box>
            </List>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default AppHeader;
