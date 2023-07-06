import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Explore from "./Explore";
import Features from "./Features";
import PhotoGallery from "./Photo_Gallery";
import About from "./About";
import Team from "./Team";
import PlacesToVisit from "./Places_To_Visit";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Explore/>
      <Features/>
      <PhotoGallery/>
      <Team/>
      <About/>
      <PlacesToVisit/>
    </div>
  );
}

export default App;
