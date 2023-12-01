// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
//import UserRegistration from './UserRegistration';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
//import ActivityPlatform from './ActivityPlatform';
// Import other components for remaining menu options

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
             <Route path="/sign-in" element={<SignIn />} />  
             <Route path="/sign-up" element={<SignUp />} /> 
              <Route path="/dashboard" element={<Dashboard />} /> 
            {/* <Route path="/user-registration" element={<UserRegistration />} />
         
            <Route path="/activity-platform" element={<ActivityPlatform />} />
            Add routes for other menu options */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
