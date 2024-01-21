import React from 'react';

const PlaceResultsComponent = ({ places }) => {
  return (
    <ul className="place-results">
      {places.map((place) => (
        <li key={place.placeId} className="place-result">
          <div className="text">
            <button className="name">{place.name}</button>
            <div className="info">{place.type}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PlaceResultsComponent;
