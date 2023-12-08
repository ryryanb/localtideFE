import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  makeStyles,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  featurePaper: {
    padding: theme.spacing(4),
    textAlign: 'center',
  },
}));

const Homepage = () => {
  const classes = useStyles();

  const features = [
    {
      title: 'Local News & Events',
      description:
        'Stay updated with local news and events happening in your area.',
    },
    {
      title: 'Customizable Activities',
      description:
        'Create and join activities based on your preferences and interests.',
    },
    {
      title: 'Explore Points of Interest',
      description: 'Discover local businesses, attractions, and more.',
    },
  ];

  return (
    <Container className={classes.homeContainer}>
      <Typography variant="h3" gutterBottom>
        Welcome to Localtide
      </Typography>
      <Typography variant="body1" paragraph>
        Localtide is your go-to platform for exploring and engaging in local
        activities. Discover the best of your community with these key features:
      </Typography>

      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper elevation={3} className={classes.featurePaper}>
              <Typography variant="h5" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2">{feature.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Button variant="contained" color="primary" size="large" href="#explore">
        Explore Now
      </Button>
    </Container>
  );
};

export default Homepage;
