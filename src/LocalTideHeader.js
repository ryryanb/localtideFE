import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import SidebarBlog from './SidebarBlog';
import UserProfile from './UserProfile';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const sections = [
  { title: 'Home', url: '/localtideFE/home' },
  { title: 'News & Blog', url: 'newsandblog' },
  { title: 'Events Calendar', url: '#' },
  { title: 'Explore', url: '/explore' },
  { title: 'Social Hub', url: '#' },
  { title: 'Activities', url: '#' },
  { title: 'User Profiles', url: '/userprofile' },
  { title: 'Reviews & Recommendations', url: '/reviewsandrec' },
  { title: 'Notifications', url: '#' },
  { title: 'Community', url: '#' },
];

export default function Blog() {
  return (  
        <Header title="LOCALTIDE" sections={sections} />      
  );
}