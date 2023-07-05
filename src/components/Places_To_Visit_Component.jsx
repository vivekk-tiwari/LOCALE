import React from 'react';

function PlacesToVisitComponent(props){
    return (
        <div className="places_to_visit_img">
            <img id={props.id} src={props.src} alt="" />
        </div>
    );
}

export default PlacesToVisitComponent;
