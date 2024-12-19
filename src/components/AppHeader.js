import React, { useState, useRef, useEffect } from 'react';
import {
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Badge,
  Popper,
  ClickAwayListener,
  Grow,
  Paper,
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
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(5);
  const avatarRef = useRef(null); 
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

  const handleAvatarMenuToggle = () => {
    setIsAvatarMenuOpen((prev) => !prev);
  };

  const handleNavigation = (path) => {
    setIsAvatarMenuOpen(false);
    navigate(path);
  };

  const handleClickAway = () => {
    setIsAvatarMenuOpen(false);
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
      <IconButton color="inherit" aria-label="menu" onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>

      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, left: { md: "250px", sm: '3vw' }, position: "relative" }}>
        <IconButton onClick={handleSearchToggle}>
          <SearchIcon sx={{ fontSize: '30px' }} />
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

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mr: 2 }}>
        <IconButton color="inherit">
          <PeopleAltOutlinedIcon />
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={notificationCount} color="error">
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </IconButton>
        <Avatar
          ref={avatarRef} // Reference to the Avatar component
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="User Avatar"
          sx={{ width: 36, height: 36, cursor: 'pointer' }}
          onClick={handleAvatarMenuToggle}
        />
      </Box>

      <Popper open={isAvatarMenuOpen} anchorEl={avatarRef.current} transition disablePortal sx={{cursor:'pointer'}}>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} timeout={350}>
            <Paper sx={{ width: 250, boxShadow: 3, borderRadius: '10px' }}>
              <ClickAwayListener onClickAway={handleClickAway}>
                <List>
                  <Box>
                    <ListItem sx={{ mb: -3, cursor:'pointer' }}>
                      <ListItemText primary="Sofia Rivers" />
                    </ListItem>
                    <ListItem>
                      <ListItemText sx={{ color: '#aaa', fontSize: '4px', cursor:'pointer' }}>SofiaRivers@example.com</ListItemText>
                    </ListItem>
                  </Box>
                  <Divider sx={{
                    backgroundColor: "#c3c7cc63",
                    marginBlockStart: "10px",
                    marginLeft: "-0px",
                    marginRight: "-0px",
                  }} />
                  <Box>
                    <ListItem button onClick={() => handleNavigation('/settings')} sx={{ mb: -2, textAlign: 'left' , cursor:'pointer'}}>
                      <IconButton><SettingsOutlinedIcon /></IconButton>
                      <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem sx={{ mb: -2, textAlign: 'left', cursor:'pointer' }}>
                      <IconButton><PeopleAltOutlinedIcon /></IconButton>
                      <ListItemText>Profile</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => handleNavigation('/')} sx={{ textAlign: 'left', cursor:'pointer' }}>
                      <IconButton><LogoutOutlinedIcon /></IconButton>
                      <ListItemText primary="Logout" />
                    </ListItem>
                  </Box>
                </List>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default AppHeader;
