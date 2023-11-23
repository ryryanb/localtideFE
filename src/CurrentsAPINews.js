import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrentsAPINews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = 'https://api.currentsapi.services/v1/search?' +
          'keywords=Cavite&language=en&' +
          'apiKey=RCT5_w2QXXGGoduY1lOnb1Q-e4LePiqORLx-KhW_09LBEDEo';

        const response = await axios.get(url);

        if (response.data && response.data.news) {
          setNews(response.data.news);
        } else {
          console.error('Invalid response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default CurrentsAPINews;
