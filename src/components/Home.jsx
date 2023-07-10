import React from 'react';
import Search from './Search';

function Home(){
    return (
        <div className="home_main">
            <div className="home_heading">
                <p id='home_title'>Welcome To The City Beautiful</p>
                <p id='home_title1'>Chandigarh</p>
                <Search id='home_search'/>
            </div>

            <div className="home_image">
                <img id='home_img' src="./images/img.svg" alt="" />
            </div>

            
        </div>
    );
}

export default Home;
