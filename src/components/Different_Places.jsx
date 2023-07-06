import React from 'react';
import DifferentPlacesComponent from './Different_Places_Component';

function DifferentPlaces() {
    return (
        <>
        <div className="different_places_heading">
            Let's get to what's famous!
        </div>
        <div className="different_places_main">
            <DifferentPlacesComponent text="01" text1="SUKHNA LAKE" text2="Utterly serene and peaceful, this lake compliments the greenery in the city and serves as the great spot for relaxation and recreation."/>
            <DifferentPlacesComponent text="02" text1="ROCK GARDEN" text2="As you stroll through the Rock Garden, enjoying the awe inspiring creation, you may find yourself face to face with the unassuming, down to earth artist Nek Chand himself, in flesh and blood, working at or supervising his 'kingdom'."/>
            <DifferentPlacesComponent text="03" text1="ROSE GARDEN" text2="Rose Garden is a blooming exhibit that showcases around 825 varieties of flowers and 32,500 varieties of trees and medicinal shrubs."/>
        </div>

        <div className="place_5_heading">
            SPRINGTIME &nbsp;BLOOM
        </div>
        <div className="place_5">
            <img id='place_5_img1' src="./images/img_1.jpeg" alt="" />
            <img id='place_5_img2' src="./images/img_1.jpeg" alt="" />
        </div>
        </>
    );
}

export default DifferentPlaces;
