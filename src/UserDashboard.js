// src/components/UserDashboard.js

import React, { useState } from 'react';
import UserItineraries from './UserItineraries';

const UserDashboard = () => {
  const totalItineraries = 15;
  const totalSavedItineraries = 5;
  const totalTripsPlanned = 10;

  // State for the new itinerary form
  const [newItinerary, setNewItinerary] = useState({
    title: '',
    destination: '',
    duration: '',
    username:'john_doe',
  });

   // Define the onCreateItinerarySuccess callback function
  const onCreateItinerarySuccess = () => {
    // Logic to handle success, if needed
    console.log('Itinerary created successfully!');
  };

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItinerary((prevItinerary) => ({
      ...prevItinerary,
      [name]: value,
    }));
  };

  // Handle form submission (send data to the backend)
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Replace 'http://example.com/api/itineraries' with your actual backend API endpoint
      const response = await fetch('http://localhost:3001/api/itineraries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItinerary),
      });

      if (response.ok) {
        console.log('New itinerary created successfully!');
        onCreateItinerarySuccess();

        // Reset the form after a successful submission
        setNewItinerary({
          title: '',
          destination: '',
          duration: '',
          username:'john_doe',
        });
      } else {
        console.error('Failed to create itinerary. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <div>
      <header>
        <h1>User Dashboard</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#dashboard-overview">Dashboard Overview</a></li>
          <li><a href="#my-itineraries">My Itineraries</a></li>
          <li><a href="#saved-itineraries">Saved Itineraries</a></li>
          <li><a href="#create-itinerary">Create New Itinerary</a></li>
          <li><a href="#account-settings">Account Settings</a></li>
          <li><a href="#logout">Logout</a></li>
        </ul>
      </nav>

      <main>
        <section id="dashboard-overview">
          <div className="dashboard-item">
            <h2>Dashboard Overview</h2>
            <div>
              <p>Total Itineraries Created: {totalItineraries}</p>
              <p>Total Saved Itineraries: {totalSavedItineraries}</p>
              <p>Total Trips Planned: {totalTripsPlanned}</p>
            </div>
          </div>
        </section>

        <section id="my-itineraries">
          <div className="dashboard-item">
            <h2>My Itineraries</h2>
            <UserItineraries onCreateItinerarySuccess={onCreateItinerarySuccess} />
          </div>
        </section>

        <section id="saved-itineraries">
          <div className="dashboard-item">
            <h2>Saved Itineraries</h2>
            {/* Display a list of saved itineraries */}
          </div>
        </section>

         <section id="create-itinerary">
          <div className="dashboard-item">
            <h2>Create New Itinerary</h2>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newItinerary.title}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="destination">Destination:</label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={newItinerary.destination}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="duration">Duration:</label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={newItinerary.duration}
                onChange={handleInputChange}
                required
              />

              <button type="submit">Create Itinerary</button>
            </form>
          </div>
        </section>

        <section id="account-settings">
          <div className="dashboard-item">
            <h2>Account Settings</h2>
            {/* Form to update user's account settings */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;
