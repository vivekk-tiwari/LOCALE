import React from 'react';
import { Link } from 'react-router-dom';

function FeaturesComponent(props){
    return (
        <div className="featuresComponent">
                <div className="features_img">
                    <Link id={props.id_a} to={props.href}>{props.text}</Link>
                    <img id={props.id_b} src={props.src} alt="" />
                </div>
            </div>
    );
}

export default FeaturesComponent;
