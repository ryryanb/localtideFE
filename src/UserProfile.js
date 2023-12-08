import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Avatar,
} from '@mui/material';
import LocalTideHeader from './LocalTideHeader';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './Footer';



const UserProfile = () => {
  const [formData, setFormData] = useState({
    username: '',
    bio: '',
    interests: '',
  });

  const defaultTheme = createTheme();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the user profile data
    console.log('User Profile Data:', formData);
  };

  return (
   



    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
      <LocalTideHeader />
      <Typography variant="h5" align="center" gutterBottom>
        User Profile
      </Typography>
      <Grid container justifyContent="center">
        <Avatar
          style={{ width: '80px', height: '80px', margin: 'auto' }}
          alt="User Avatar"
          src="/path-to-avatar-image.jpg"
        />
      </Grid>
      <form style={{ marginTop: '2em' }} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="bio"
          label="Bio"
          name="bio"
          multiline
          rows={4}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="interests"
          label="Interests"
          name="interests"
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: '1em' }}
        >
          Save Profile
        </Button>
      </form>
    </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
};

export default UserProfile;
