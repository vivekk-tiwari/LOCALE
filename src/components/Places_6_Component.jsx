import React from 'react';

function Places6Component(props){
    return (
        <div className="places_6_img">

            <div className="places_6_heading">
            <img src="./images/img_1.jpeg" alt="" id={props.id1} />
            <p id={props.id2}>{props.text}</p>
            </div>

        </div>
    );
}

export default Places6Component;
