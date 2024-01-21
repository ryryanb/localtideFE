import React from 'react';

const PlaceDetailsComponent = ({ place }) => {
  return (
    <div>
      <div className="navbar">
        <button className="back-button">
          <img className="icon" src="https://fonts.gstatic.com/s/i/googlematerialicons/arrow_back/v11/24px.svg" alt="back" />
          Back
        </button>
      </div>
      <header>
        <h2>{place.name}</h2>
        <div className="info">
          <a href={place.url} target="_blank" rel="noopener noreferrer">
            See on Google Maps
          </a>
        </div>
        {place.type && <div className="info">{place.type}</div>}
      </header>
      <div className="section">
        {place.address && (
          <div className="contact">
            <img src="https://fonts.gstatic.com/s/i/googlematerialicons/place/v10/24px.svg" alt="Address" className="icon" />
            <div className="text">{place.address}</div>
          </div>
        )}
      </div>
      {place.photos && (
        <div className="photos section">
          {place.photos.map((photo, index) => (
            <button
              className="photo"
              style={{ backgroundImage: `url(${photo.urlLarge})` }}
              aria-label={`show photo ${index + 1} in viewer`}
              key={index}
            ></button>
          ))}
        </div>
      )}
      {place.html_attributions && (
        <div className="section">
          {place.html_attributions.map((attribution, index) => (
            <p className="attribution" key={index} dangerouslySetInnerHTML={{ __html: attribution }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaceDetailsComponent;
