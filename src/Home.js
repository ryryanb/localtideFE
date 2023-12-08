import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './Footer';
import LocalTideHeader from './LocalTideHeader';

const defaultTheme = createTheme();

const homeContainerStyle = {
  paddingTop: '64px', // Adjust as needed
  paddingBottom: '64px', // Adjust as needed
};

const featurePaperStyle = {
  padding: '16px',
  textAlign: 'center',
};

const Home = () => {
  const features = [
    {
      title: 'Local News & Events',
      description: 'Stay updated with local news and events happening in your area.',
    },
    {
      title: 'Customizable Activities',
      description: 'Create and join activities based on your preferences and interests.',
    },
    {
      title: 'Explore Points of Interest',
      description: 'Discover local businesses, attractions, and more.',
    },
  ];

  const customTypographyStyle = {
    textAlign: 'center',
    fontFamily: 'Montserrat, Roboto, Lato, Poppins, sans-serif',
    color: 'blue',
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginTop: '2%',
    // Add more styles as needed
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <LocalTideHeader />

      <Typography variant="h1" style={customTypographyStyle}>
        Welcome to Localtide
      </Typography>
     <Typography variant="body1" paragraph style={{ marginTop: '2%', marginBottom: '3%', textAlign: 'center' }}>
  Localtide is your go-to platform for exploring and engaging in local
  activities. <br/>
  Discover the best of your community with these key features:
</Typography>


      <Grid container spacing={3} >
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper elevation={3} style={featurePaperStyle}>
              <Typography variant="h5" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2">{feature.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

<div style={{ display: 'flex', justifyContent: 'center', margin: '3%' }}>
  <Button
    variant="contained"
    color="primary"
    size="large"
    component="a"
    href="/explore"
  >
    Explore Now
  </Button>
</div>

    </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
};

export default Home;
