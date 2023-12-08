import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';

import Footer from './Footer';

import ReviewSubmissionForm from './ReviewSubmissionForm';

const sections = [
  { title: 'Home', url: '#' },
  { title: 'News & Blog', url: '#' },
 // { title: 'Events Calendar', url: '#' },
  { title: 'Explore', url: '#' },
 // { title: 'Social Hub', url: '#' },
 // { title: 'Activities', url: '#' },
 // { title: 'User Profiles', url: '#' },
  { title: 'Reviews & Recommendations', url: '/reviewsandrec' },
 // { title: 'Notifications', url: '#' },
  { title: 'Community', url: '#' },
];


const defaultTheme = createTheme();



export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="LOCALTIDE" sections={sections} />
        <ReviewSubmissionForm />
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}