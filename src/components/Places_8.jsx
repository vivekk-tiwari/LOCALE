import React, { useState } from 'react';
import Places8Component from './Places_8_Component';
import Places6Component from './Places_6_Component';
import "./styles.css";

function Places8() {
  const [mapVisible, setMapVisible] = useState(false);

  const toggleMapVisibility = () => {
    setMapVisible(prevMapVisible => !prevMapVisible);
  };

  return (
    <>
      <div className="places_8_main">
        <div className="places_8_heading">
          BIRD SANCTUARY
        </div>
        <div className="places_8_img">
          <Places8Component />
          <Places8Component />
          <Places8Component />
          <Places8Component />
        </div>
      </div>
      {mapVisible && (
        <div className="mapouter">
          <iframe
            style={{ width: "200%", height: "300px", marginLeft: "55px" }}
            className="gmap_iframe"
            width="100%"
            src="https://www.google.com/maps/embed/v1/place?q=Bird+sanctuary,+5B,+Sector+5,+Chandigarh,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      )}

      <button className='btn' onClick={toggleMapVisibility}> Map</button>

      <div className="places_9_heading_1">
        JAPANESE GARDEN
      </div>
      <div className="places_9_main">
        <Places6Component id1='places_9_img' />
        <Places6Component id1='places_9_img' />
        <Places6Component id1='places_9_img' />
      </div>

      {mapVisible && (
        <div className="mapouter">
          <iframe
            style={{ width: "200%", height: "300px", marginLeft: "55px" }}
            className="gmap_iframe"
            width="100%"
            src="https://www.google.com/maps/embed/v1/place?q=Japanese+Garden,+near+Japanese+Park,+Sector+31+A,+Sector+31,+Chandigarh,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      )}

      <button className="btn" onClick={toggleMapVisibility}> Map</button>
    </>
  );
}

export default Places8;





