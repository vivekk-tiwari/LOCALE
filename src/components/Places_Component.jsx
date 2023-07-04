import React from 'react';

function PlacesComponent(props){
    return (
        <div className="placesComponent">
                <div className="places_img">
                    <a id={props.id_a} href={props.href}>{props.text}</a>
                    <img id={props.id_b} src={props.src} alt="" />
                </div>
            </div>
    );
}

export default PlacesComponent;
