import React from 'react';
import PlacesToVisitComponent from './Places_To_Visit_Component';

function PlacesToVisit(){
    return (
        <>
        <div className="places_to_visit_main">
            <div className="places_to_visit_heading">
                <p id="places_to_visit_text">PLACES TO VISIT</p> 
                <PlacesToVisitComponent id='img_3' src="./images/img_1.jpeg"/>
            </div>
            <div className="places_to_visit_component_2">
                <PlacesToVisitComponent id='img_4' src="./images/img_1.jpeg"/>
            </div>
                
            <div className="places_to_visit_component_3">
                <PlacesToVisitComponent id='img_5' src="./images/img_1.jpeg"/>
            </div>
        </div>


        <div className="main_2">
            <div className="main_2_heading">
                <img id='main_2_img' src="./images/img_1.jpeg" alt="" />
                <p id="main_2_text">Here the radiance of nature and heart are within our reach</p>
                <p id="main_2_text_2">The city of Chandigarh is planned to human scale,It puts us in touch with the infinte cosmos and nature</p>
                <p id="main_2_text3">-Le Corbusier</p>
            </div>

            <div className="main_2_image">
                <img src="./images/img_1.jpeg" alt="" id="main_2_img_1" />
            </div>
        </div>

        <div className="main_3">
            <div className="main_3_heading">
                <p id="main_3_text">EXHIBITS</p>
                <p id="main_3_text_2">Solo Shows</p>
                <ul>
                    <li id="li">Splash of Ambiguity, Grayerville Fine Art Gallery,2024</li>
                    <li id="li">Unknown Corners of Still Life, Eximus Studios,2024</li>
                    <li id="li">Paint it True,Trempleway Art Conference, 2023</li>
                </ul>

                <p id="main_3_text_3">Group Shows</p>
                <ul>
                    <li id="li">Art Maven Picks, Trempleway Art Conference,2023</li>
                    <li id="li">Trempleway Artists' Forum,Grayerville Fine Art Gallery, 2022</li>
                </ul>
            </div>

            <div className="main_3_image">
                <img src="./images/img_1.jpeg" alt="" id="main_3_img_1" />
            </div>
        </div>
    </>
    );
}

export default PlacesToVisit;
