import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Explore from "./Explore";
import Places from "./Places";
import PhotoGallery from "./Photo_Gallery";
import About from "./About";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Explore/>
      <Places/>
      <PhotoGallery/>
      <About/>
    </div>
  );
}

export default App;
