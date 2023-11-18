import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsComponent from './NewsComponent';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/news')
      .then(response => setNews(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Naic News</h1>
      <div>
      <ul>
        {news.map(article => (
          <li key={article._id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <p>Author: {article.author}</p>
            <p>Date: {new Date(article.date).toLocaleDateString()}</p>
            <p>Category: {article.category}</p>
          </li>
        ))}
      </ul>
      </div>
      <div>
      <NewsComponent />
    </div>
    </div>
  );
}

export default App;
