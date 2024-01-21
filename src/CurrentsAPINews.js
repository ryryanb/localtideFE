import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './Footer';
import LocalTideHeader from './LocalTideHeader';
import Container from '@mui/material/Container';



const defaultTheme = createTheme();

const CurrentsAPINews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = process.env.REACT_APP_CURRENTS_NEWS_API_KEY;
        const keywords = process.env.REACT_APP_CURRENTS_NEWS_KEYWORDS;
        const url = 'https://api.currentsapi.services/v1/search?' +
          'keywords=' + keywords + '&language=en&apiKey=' + apiKey;
        
        //const encodedUrl = encodeURIComponent(url);
        const response = await axios.get(url);

        if (response.data && response.data.news) {
          setNews(response.data.news);
        } else {
          console.error('Invalid response format:', response.data);
        }
      } catch (error) {
        console.error('   Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
     <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <LocalTideHeader />

      <h1>Latest News</h1>
      {news && news.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p>Author: {article.author}</p>
          {article.image && <img src={article.image} alt={article.title} />}
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
          <hr />
        </div>
      ))}
    </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
};

export default CurrentsAPINews;