import React, { useState, useRef } from 'react';
import {
  AppBar,
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
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';

const AppHeader = ({ onSearchToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const [openAvatarModal, setOpenAvatarModal] = useState(false);

  const handleSearch = () => {
    setIsOpen((prevState) => {
      if (!prevState) {
        setTimeout(() => inputRef.current?.focus(), 0); // Delay focus to ensure input is rendered
      }
      return !prevState;
    });
    onSearchToggle(isOpen);
  };

  const handleOpenAvatarModal = () => setOpenAvatarModal(true);
  const handleCloseAvatarModal = () => setOpenAvatarModal(false);

  return (
    <AppBar
      position="absolute"
      color="transparent"
      
      elevation={0}
      sx={{ borderBottom: '1px solid #c3c7cc63',width:'81%', backgroundColor:'white', height:'65px' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
          {isOpen && (
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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <PeopleIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <Avatar
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="User Avatar"
            sx={{ width: 36, height: 36, cursor: 'pointer' }}
            onClick={handleOpenAvatarModal}
          />
        </Box>
      </Toolbar>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openAvatarModal}
        onClose={handleCloseAvatarModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openAvatarModal}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              border: '1px solid #ccc',
              p: 4,
              position: 'absolute',
              top: '30%',
              right: '10%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '20px',
            }}
          >
            <List>
              <ListItem>
                <ListItemText primary="Sofia Rivers" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="SofiaRivers@example.com" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>
        </Fade>
      </Modal>
    </AppBar>
  );
};

export default AppHeader;
