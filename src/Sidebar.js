// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuOptions = [
    'Sign Up',
    'Sign In',
    'Dashboard',
    'Blog',
    'Activity Platform',
    'Local News',
    'Points of Interest',
    'Events Calendar',
    'Local Dining Guide',
    'Accommodation Guide',
    'Transportation Information',
    'Search',
    'Submit Event',
    'Social Media',
    'Community Forum',
    'About Naic',
    'Weather Forecast',
    'Analytics',
  ];

  return (
    <div className="sidebar">
      <ul>
        {menuOptions.map((menuItem) => (
          <li key={menuItem}>
            <Link to={`/${menuItem.toLowerCase().replace(/\s+/g, '-')}`}>
              {menuItem}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
