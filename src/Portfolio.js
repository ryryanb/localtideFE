import React from 'react';
import {
  AppBar,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Portfolio = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">RYAN REY BONDOC</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* To ensure content is below the app bar */}
      <Container>
        {/* Replace this with your content components */}
        <section>
          {/* Hero Section */}
          <section>
            {/* Image and bio content */}
          </section>

          {/* More about section */}
          <section>
            {/* More about content */}
          </section>

          {/* Skills section */}
          <section>
            {/* Skills content */}
          </section>

          {/* Projects section */}
          <section>
            {/* Projects content */}
          </section>

          {/* Contact section */}
          <section>
            {/* Contact form */}
          </section>
        </section>
      </Container>

      {/* Social accounts - Fixed to the right */}
      <div>
        {/* Social icons */}
      </div>

      {/* Scroll to top */}
      <div>
        {/* Scroll to top icon */}
      </div>

      {/* Footer section */}
      <footer>
        <p>&copy; Copyright 2023</p>
        <p>
          <a href="https://www.linkedin.com/in/ryanreybondoc/" target="_blank">Ryan Rey Bondoc</a>
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
