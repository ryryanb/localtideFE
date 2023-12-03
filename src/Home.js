import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Sidebar/menu */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        {/* Content of your sidebar goes here */}
      </Drawer>

      {/* Top menu on small screens */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            LOGO
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <Sidebar />

      {/* !PAGE CONTENT! */}
      <div style={{ marginLeft: '250px' }}>
        {/* Push down content on small screens */}
        <div style={{ marginTop: '83px' }}></div>

        {/* Top header */}
        <header style={{ padding: '24px 48px' }}>
          <Typography variant="h1" className="w3-jumbo w3-hide-small">
            New arrivals
          </Typography>
          <Typography variant="h1" className="w3-hide-large w3-hide-medium">
            New arrivals
          </Typography>
          <Typography variant="h1" className="w3-hide-small">
            COLLECTION 2016
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: '16px' }}
          >
            SHOP NOW
          </Button>
        </header>

        {/* Image header */}
        <div style={{ position: 'relative' }}>
          <img
            src="/w3images/jeans.jpg"
            alt="Jeans"
            style={{ width: '100%' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '24px',
              left: '48px',
              color: 'white',
            }}
          >
            <Typography variant="h1" className="w3-jumbo w3-hide-small">
              New arrivals
            </Typography>
            <Typography variant="h1" className="w3-hide-large w3-hide-medium">
              New arrivals
            </Typography>
            <Typography variant="h1" className="w3-hide-small">
              COLLECTION 2016
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleModalOpen}
              style={{ marginTop: '16px' }}
            >
              SHOP NOW
            </Button>
          </div>
        </div>

        {/* Modal */}
        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Paper style={{ padding: '32px' }}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleModalClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h2" id="modal-modal-title">
              Product Details
            </Typography>
            <Typography variant="body1" id="modal-modal-description">
              {/* Product details go here */}
            </Typography>
          </Paper>
        </Modal>

        {/* Product grid */}
        <div className="w3-row w3-grayscale">
          {/* Products go here */}
        </div>

        {/* Subscribe section */}
        <div
          style={{
            backgroundColor: '#000',
            padding: '32px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" style={{ color: '#fff' }}>
            Subscribe
          </Typography>
          <p style={{ color: '#fff' }}>
            To get special offers and VIP treatment:
          </p>
          <TextField
            variant="outlined"
            placeholder="Enter e-mail"
            style={{ width: '100%', marginBottom: '16px' }}
          />
          <Button variant="contained" color="secondary">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
