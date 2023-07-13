import React from 'react';
import Places8Component from './Places_8_Component';

function Stores4 (){
    return (
        <div className="stores_4_main">

            <div className="stores_4_heading">
                <p id="stores_4_heading">MY ART</p>
            </div>

            <div className="stores_4_images">
            <Places8Component/>
            <Places8Component/>  
            <Places8Component/>
            </div>
        </div>
    );
}

export default Stores4;
