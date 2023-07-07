import React from 'react';
import FeaturesComponent from './Features_Component';

function Features(){
    return (
        <div className="features_main">
            <div className="features_main_1">
                <FeaturesComponent id_a='feature_text_id_1' href="/placestovisit" text="Don't forget to visit here !" id_b='feature_img_1' src='./images/img_1.jpeg'/>
                <FeaturesComponent id_a='feature_text_id_2' href='' text="Uniqueness in Simplicity !" id_b='feature_img_2' src='./images/img_1.jpeg'/>
            </div>

            <div className="features_main_2">
                <FeaturesComponent id_a='feature_text_id_1' href='' text="Have a coffee date !" id_b='feature_img_1' src='./images/img_1.jpeg'/>
                <FeaturesComponent id_a='feature_text_id_2' href='' text="Best stores around the city !" id_b='feature_img_2' src='./images/img_1.jpeg'/> 
            </div>
        </div>
    );
}

export default Features;
