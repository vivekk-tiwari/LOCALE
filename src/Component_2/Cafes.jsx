import React from 'react';
import Cafes2 from './Cafes_2';
import Cafes3 from './Cafes_3';

function Cafes() {
    return (
        <>
        <div className="cafes_main">
            <div className="cafes_main1">
                
                <div className="cafes_images">
                <img src="./images/img_1.jpeg" alt="" id="cafes_img" />
                <img src="./images/img_1.jpeg" alt="" id="cafes_img3" />
                </div>
                <p id="cafes_text1">Or just sit around</p>
                <p id="cafes_text2">Through endless conversations and stories
                .Spend some quality time with your loved ones.</p>
            </div>

            <div className="cafes_main2">
                <p id="cafes_text3">HAVE SOME COFFEE!</p>
                <img src="./images/img_1.jpeg" alt="" id="cafes_img2" />
            </div>
        </div>

        <Cafes2/>
        <Cafes3/>
        </>
    );
}

export default Cafes;
