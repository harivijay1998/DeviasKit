import React, { useState, useRef, useEffect } from 'react';
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
  Badge,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const AppHeader = ({ onSearchToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const [openAvatarModal, setOpenAvatarModal] = useState(false);
  const [notificationCount, setNotificationCount] = useState(5);
  const navigate = useNavigate();

  const handleSearch = () => {
    setIsOpen((prevState) => !prevState);
    if (onSearchToggle) {
      onSearchToggle(!isOpen); 
    }
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 0);
      return () => clearTimeout(timer); 
    }
  }, [isOpen]);

  const handleOpenAvatarModal = () => setOpenAvatarModal(true);
  const handleCloseAvatarModal = () => setOpenAvatarModal(false);

  const handleNavigation = (path) => {
    setOpenAvatarModal(false);
    navigate(path);
  };

  return (
    <AppBar
      position="absolute"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: '1px solid #c3c7cc63',
        width: '81%',
        backgroundColor: 'white',
        height: '65px',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <IconButton onClick={handleSearch} >
            <SearchIcon sx={{height:'30px', fontSize:'50px', left:'-20px', position:'relative' , fontWeight:200}} />
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
                position:'relative',
                left:'-40px'
              }}
            />
          )}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <IconButton color="inherit">
            <PeopleAltOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={notificationCount} color="error" overlap="circular">
              <NotificationsNoneOutlinedIcon />
            </Badge>
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
              top: '29%',
              right: '-10%',
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
              <ListItem button onClick={() => handleNavigation('/settings')}>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button onClick={() => handleNavigation('/')}>
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
