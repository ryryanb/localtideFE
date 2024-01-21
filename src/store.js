import { createStore } from 'redux';

// Define initial state
const initialState = {
  blogPosts: [],
};

// Define actions
const ADD_BLOG_POST = 'ADD_BLOG_POST';

// Define action creators
const addBlogPost = (post) => ({
  type: ADD_BLOG_POST,
  payload: post,
});

// Define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return {
        ...state,
        blogPosts: [...state.blogPosts, action.payload],
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export { store, addBlogPost };
