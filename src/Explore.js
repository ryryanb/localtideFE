// Explore.js

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Explore = () => {
  const [map, setMap] = useState(null);

  const handleMapLoad = (map) => {
    setMap(map);
  };

  const apiKey = process.env.REACT_APP_MAPS_API_KEY;

  useEffect(() => {
    if (map) {
      // Now you can safely access map.getDiv() or other methods
      console.log(map.getDiv());
    }
  }, [map]);

  return (
    <LoadScript googleMapsApiKey="{apiKey}">
      <GoogleMap
        onLoad={handleMapLoad}
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={{ lat: 37.7749, lng: -122.4194 }}
        zoom={14}
      >
        <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Explore;


