// CurrentsAPINews.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrentsAPINews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL;

      // Use the backendUrl variable to make API requests
        const response = await axios.get(`${backendUrl}/api/currents`);

        // Set the news data in the state
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
   
      {news.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p>Author: {article.author}</p>
          {article.image && <img className="thumbnail-image" src={article.image} alt={article.title} />}
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CurrentsAPINews;
