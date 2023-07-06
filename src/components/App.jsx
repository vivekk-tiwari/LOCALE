import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Explore from "./Explore";
import Features from "./Features";
import PhotoGallery from "./Photo_Gallery";
import About from "./About";
import Team from "./Team";
import PlacesToVisit from "./Places_To_Visit";
import DifferentPlaces from "./Different_Places";
import Places6 from "./Places_6";
import Places8 from "./Places_8";

function App() {
  return (
    <div>
      {/* <Navbar/>
      <Home/>
      <Explore/>
      <Features/>
      <PhotoGallery/>
      <Team/>
      <About/> */}
      <PlacesToVisit/>
      <DifferentPlaces/>
      <Places6/>
      <Places8/>
    </div>
  );
}

export default App;
