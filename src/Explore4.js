/* global google */
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo, useEffect } from "react";
import "./App.css";
import "./neighborhood_discovery.css";
import configuration from "./configuration"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './Footer';
import LocalTideHeader from './LocalTideHeader';
import {
  Container,
 
} from '@mui/material';
import processMap from "./processMap";
import Neighborhood from './Neighborhood';

const defaultTheme = createTheme();

const Explore = () => {
 const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });

 let content;
if (isLoaded) {
  content = <Neighborhood />;
  processMap();
} else {
  content = '<h1>Loading...</h1>';
}
  
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

   

    

    // Clean-up function (optional, runs when the component unmounts)
   



  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <LocalTideHeader />
    <>

 
  <div className="neighborhood-discovery">
    <div className="places-panel panel no-scroll">
      <header className="navbar">
        <div className="search-input">
          <input
            className="place-search-input"
            placeholder="Search nearby places"
          />
          <button className="place-search-button">
            <img
              src="https://fonts.gstatic.com/s/i/googlematerialicons/search/v11/24px.svg"
              alt="search"
            />
          </button>
        </div>
      </header>
      <div className="results">
        <ul className="place-results-list" />
      </div>
      <button className="show-more-button sticky">
        <span>Show More</span>
        <img
          className="right"
          src="https://fonts.gstatic.com/s/i/googlematerialicons/expand_more/v11/24px.svg"
          alt="expand"
        />
      </button>
    </div>
    <div className="details-panel panel" />
    <div className="map" />
    <div className="photo-modal">
      <img alt="place photo" />
      <div>
        <button className="back-button">
          <img
            className="icon"
            src="https://fonts.gstatic.com/s/i/googlematerialicons/arrow_back/v11/24px.svg"
            alt="back"
          />
        </button>
        <div className="photo-text">
          <div className="photo-place" />
          <div className="photo-attrs">
            Photo by <span />
          </div>
        </div>
      </div>
    </div>
    <svg
      className="marker-pin"
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={38}
      fill="none"
    >
      <path d="M13 0C5.817 0 0 5.93 0 13.267c0 7.862 5.59 10.81 9.555 17.624C12.09 35.248 11.342 38 13 38c1.723 0 .975-2.817 3.445-7.043C20.085 24.503 26 21.162 26 13.267 26 5.93 20.183 0 13 0Z" />
    </svg>
  </div>
</>

     </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
};

export default Explore