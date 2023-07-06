import React from 'react';

function DifferentPlacesComponent(props) {
    return (
        <div className="place_4">
            <p id="place_4_text1">{props.text}</p>
            <img src="./images/img_1.jpeg" alt="" id="place_4_img" />

            <div className="place_4_heading">
            <p id="place_4_text2">{props.text1}</p>
            <p id="place_4_text3">{props.text2}</p>
            </div>
        </div>
    );
}

export default DifferentPlacesComponent;
