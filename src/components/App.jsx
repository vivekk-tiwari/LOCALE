import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Explore from "./Explore";
import Places from "./Places";
import PhotoGallery from "./Photo_Gallery";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Explore/>
      <Places/>
      <PhotoGallery/>
    </div>
  );
}

export default App;
