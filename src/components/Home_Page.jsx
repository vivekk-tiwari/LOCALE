import React from 'react';
import Navbar from './Navbar';
import Home from "./Home";
import Explore from "./Explore";
import Features from "./Features";
import PhotoGallery from "./Photo_Gallery";
import About from "./About";
import Team from "./Team";

function HomePage() {
    return (
        <>
        <Navbar/>
        <Home/>
        <Explore/>
        <Features/>
        <PhotoGallery/>
        <Team/>
        <About/>
    </>
    );
}

export default HomePage;
