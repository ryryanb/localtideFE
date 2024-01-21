import React, { useState, useEffect } from 'react';

function UserItineraries({ onCreateItinerarySuccess }) {
  const [userItineraries, setUserItineraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace 'your-backend-url' with the actual URL of your backend API
  const apiUrl = 'http://localhost:3001/api/userItineraries/';

  useEffect(() => {
    const username = 'john_doe'; // Replace with the actual username

    // Fetch user itineraries when the component mounts
    fetch(apiUrl + username)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched itineraries:', data.itineraries);
        setUserItineraries(data.itineraries);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user itineraries:', error);
        setError(error.message || 'Error fetching user itineraries');
        setLoading(false);
      });
  }, [onCreateItinerarySuccess]); // Add the dependency to re-fetch data on callback



  return (
    <section id="my-itineraries">
      <div className="dashboard-item">
        <h2>My Itineraries</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {userItineraries.length === 0 && !loading && !error && <p>No itineraries to display.</p>}
        {userItineraries.length > 0 && (
          <ul>
            {userItineraries.map((itinerary) => (
              <li key={itinerary.id}>
                <h3>{itinerary.title}</h3>
                <p>Destination: {itinerary.destination}</p>
                <p>Duration: {itinerary.duration}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default UserItineraries;
