import React from 'react';
import PlacesComponent from './Places_Component';
import PlacesToVisit from './Places_To_Visit';

function Places(){
    return (
        <div className="places_main">
            <div className="places_main_1">
                <PlacesComponent id_a='place_text_id_1' href="" text="Don't forget to visit here !" id_b='place_img_1' src='./images/img_1.jpeg'/>
                <PlacesComponent id_a='place_text_id_2' href='' text="Uniqueness in Simplicity !" id_b='place_img_2' src='./images/img_1.jpeg'/>
            </div>

            <div className="places_main_2">
                <PlacesComponent id_a='place_text_id_1' href='' text="Have a coffee date !" id_b='place_img_1' src='./images/img_1.jpeg'/>
                <PlacesComponent id_a='place_text_id_2' href='' text="Best stores around the city !" id_b='place_img_2' src='./images/img_1.jpeg'/> 
            </div>
        </div>
    );
}

export default Places;
