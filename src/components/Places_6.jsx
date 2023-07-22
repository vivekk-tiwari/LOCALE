import React, { useState } from 'react';
import Places6Component from './Places_6_Component';



function Places6() {
  const [mapVisible, setMapVisible] = useState(true);

  const toggleMapVisibility = () => {
    setMapVisible(!mapVisible);
  };

  return (
    <>
      <div className="places_6_heading_1">
        SUKHNA LAKE
      </div>

      <div className="places_6">
        <Places6Component id1='places_6_img1' id2='places_6_text' text="Sukhna Lake " />
        <Places6Component id1='places_6_img1' id2='places_6_text' text="Sukhna Lake " />
        <Places6Component id1='places_6_img1' id2='places_6_text' text="Sukhna Lake " />
      </div>

      {mapVisible && (
        <div className="mapouter">
          <iframe
            style={{ width: "200%", height: "300px", marginLeft: "55px" }}
            className="gmap_iframe"
            width="100%"
            
            src="https://www.google.com/maps/embed/v1/place?q=Sukhna+Lake+Chandigarh,+Sector+1,+Chandigarh,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      )}

      <button className='btn' onClick={toggleMapVisibility}>map</button>

      <div className="places_7_heading_1">
        ROCK GARDEN
      </div>
      <div className="places_7">
        <Places6Component id1='places_6_img1' id2='places_7_text' text="Sukhna Lake " />
        <Places6Component id1='places_6_img1' id2='places_7_text' text="Sukhna Lake " />
      </div>
      
      {mapVisible && (
        <div className="mapouter">
          <iframe
            style={{ width: "200%", height: "300px", marginLeft: "55px" }}
            className="gmap_iframe"
            width="100%"
            
            src="https://www.google.com/maps/embed/v1/place?q=ROCK+GARDEN&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      )}

      <button className='btn' onClick={toggleMapVisibility}>map</button>
    </>
  );
}

export default Places6;
