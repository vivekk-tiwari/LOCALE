import React from 'react';

function DifferentPlacesComponent(props) {
    return (
        <div className="main_4">
            <p id="main_4_text1">{props.text}</p>
            <img src="./images/img_1.jpeg" alt="" id="main_4_img" />

            <div className="main_4_heading">
            <p id="main_4_text2">{props.text1}</p>
            <p id="main_4_text3">{props.text2}</p>
            </div>
        </div>
    );
}

export default DifferentPlacesComponent;
