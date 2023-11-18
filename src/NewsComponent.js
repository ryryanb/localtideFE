// NewsComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsComponent = () => {
  const [news, setNews] = useState([]);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = '4382e20fe23241128d950fb403527ff8';
        const query = 'Cavite';
        const encodedQuery = encodeURIComponent(query);
        const response = await axios.get(`https://newsapi.org//v2/everything?q=${encodedQuery}&apiKey=${apiKey}`);
        // Set the news data in the state
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Top Headlines</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <strong>{article.title}</strong>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
