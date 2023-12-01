// Install required packages
// npm install react-leaflet leaflet axios

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

const MapComponent = () => {
  const [pois, setPOIs] = useState([]);

  useEffect(() => {
    // Fetch POIs from your backend API
    const fetchData = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL;

        const response = await axios.get(`${backendUrl}/api/pois`);

        setPOIs(response.data);
      } catch (error) {
        console.error('Error fetching POIs:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MapContainer center={[14.2920189, 120.712076]} zoom={13} style={{ height: '500px', width: '100%' }}>
     
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {pois.map((poi) => (
        <Marker key={poi.id} position={[poi.lat, poi.lng]}>
          <Popup>{poi.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
