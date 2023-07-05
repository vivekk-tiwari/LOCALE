import React from 'react';

function FeaturesComponent(props){
    return (
        <div className="featuresComponent">
                <div className="features_img">
                    <a id={props.id_a} href={props.href}>{props.text}</a>
                    <img id={props.id_b} src={props.src} alt="" />
                </div>
            </div>
    );
}

export default FeaturesComponent;
