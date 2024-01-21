import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './Footer';
import LocalTideHeader from './LocalTideHeader';
import {
  Container,
 
} from '@mui/material';

const defaultTheme = createTheme();

const NeighborhoodDiscoveryMap = () => {

  const mapSrc = "https://storage.googleapis.com/maps-solutions-lz52p3d8fy/neighborhood-discovery/rwyy/neighborhood-discovery.html";

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <LocalTideHeader />

    <iframe
      src={mapSrc}
      width="1000px"
      height="575px"
      style={{ border: 0 }}
      loading="lazy"
      title="Neighborhood Discovery Map"
    ></iframe>
        </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
};

export default NeighborhoodDiscoveryMap;
