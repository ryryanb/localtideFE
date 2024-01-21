import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBlogPost } from './store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './Footer';
import LocalTideHeader from './LocalTideHeader';
import Container from '@mui/material/Container';



const defaultTheme = createTheme();
const AddBlog = () => {
  const blogPosts = useSelector((state) => state.blogPosts);
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState('');

  const handleAddPost = () => {
    dispatch(addBlogPost(newPost));
    setNewPost('');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
    <div>
      <div>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      <div>
        {blogPosts.map((post, index) => (
          <div key={index}>{post}</div>
        ))}
      </div>
    </div>
    </Container>
      
    </ThemeProvider>
  );
};

export default AddBlog;
