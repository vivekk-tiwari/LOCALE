import React from 'react';
import Places6Component from './Places_6_Component';

function Places6 (){
    return (
        <>
        <div className="places_6_heading_1">
            SUKHNA LAKE
        </div>
        <div className="places_6">
            <Places6Component id1='places_6_img1'  id2='places_6_text'  text="Sukhna Lake "/>
            <Places6Component id1='places_6_img1'  id2='places_6_text'  text="Sukhna Lake "/>
            <Places6Component id1='places_6_img1'  id2='places_6_text'  text="Sukhna Lake "/>
        </div>

        <div className="places_7_heading_1">
            ROCK GARDEN
        </div>
        <div className="places_7">
        <Places6Component id1='places_6_img1' id2='places_7_text' text="Sukhna Lake "/>
        <Places6Component id1='places_6_img1' id2='places_7_text' text="Sukhna Lake "/>
        </div>
        </>
    );
}

export default Places6;
