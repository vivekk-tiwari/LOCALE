import React from 'react';
import DifferentPlacesComponent from './Different_Places_Component';

function DifferentPlaces() {
    return (
        <>
        <div className="different_places_heading">
            Let's get to what's famous
        </div>
        <div className="different_places_main">
            <DifferentPlacesComponent text="01" text1="SUKHNA LAKE" text2="A quick painting of one of my favourite lakes"/>
            <DifferentPlacesComponent text="02" text1="ROCK GARDEN" text2="Painting based on a scene in a book"/>
            <DifferentPlacesComponent text="03" text1="ROSE GARDEN" text2="Painting based on a scene in a book"/>
        </div>

        <div className="main_5_heading">
            SPRINGTIME &nbsp;BLOOM
        </div>
        <div className="main_5">
            <img id='main_5_img1' src="./images/img_1.jpeg" alt="" />
            <img id='main_5_img2' src="./images/img_1.jpeg" alt="" />
        </div>
        </>
    );
}

export default DifferentPlaces;
