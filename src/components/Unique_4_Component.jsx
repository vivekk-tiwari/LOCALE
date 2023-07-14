import React from 'react';

function Unique4Component (props)  {
    return (
        <div className="unique_4_main">
            <img src="./images/img_1.jpeg" alt="" id="unique_4_img1" />
            <p id={props.id2}>{props.text}</p>
        </div>
    );
}

export default Unique4Component;