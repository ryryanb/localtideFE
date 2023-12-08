// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
//import UserRegistration from './UserRegistration';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Blog from './Blog';
import Home from './Home';
import ReviewsAndRec from './ReviewsAndRec';
import Explore from './Explore';
import UserProfile from './UserProfile';
import Portfolio from './Portfolio';
//import ActivityPlatform from './ActivityPlatform';
// Import other components for remaining menu options

const App = () => {

  const urlPrefix = process.env.REACT_APP_URL_PREFIX || '';
  return (
    <Router basename="/localtideFE">
  <div className="app-container">
    <div className="main-content">
      <Routes>
       
              <Route index element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/userprofile" element={<UserProfile />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/newsandblog" element={<Blog />} />
              <Route path="/reviewsandrec" element={<ReviewsAndRec />} />
         
    
      </Routes>
    </div>
  </div>
</Router>

  );
};

export default App;
