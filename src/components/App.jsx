import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Explore from "./Explore";
import Places from "./Places";
import PhotoGallery from "./Photo_Gallery";
import About from "./About";
import Team from "./Team";
import PlacesToVisit from "./Places_To_Visit";
import DifferentPlaces from "./Different_Places";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Explore/>
      <Places/>
      <PhotoGallery/>
      <Team/>
      <About/>
      <PlacesToVisit/>
      <DifferentPlaces/>
    </div>
  );
}

export default App;
