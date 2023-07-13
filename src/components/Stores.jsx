import React from 'react';
import Stores2 from './Stores_2';
import Cafes4 from '../Component_2/Cafes_4';
import Stores3 from './Stores_3';
import Stores4 from './Stores_4';

function Stores() {
    return (
<>

        <div className="stores_1_main">
            <div className="stores_main1">
            <p id="stores_1_text1">Popular</p>
            <img src="./images/img_1.jpeg" alt="" id="stores_1_img" />
            </div>

            <div className="stores_heading">
            <p id="stores_1_text2">SHOPPING STORES</p>        
            <p id="stores_1_text3">Around Chandigarh</p>
        </div>
        </div>

        <Stores2/>
        <Cafes4/>
        <Stores3/>
        <Stores2/>
        <Stores4/>
</>   
    );
}

export default Stores;