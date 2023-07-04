import React from 'react';
import TeamComponent from './Team_Component';

function Team(){
    return (
        <>
    
        <div className="team_main">

            <div className="team_heading">
                <p id="team_heading_text">OUR &nbsp;TEAM</p>
                <div className="line"></div>
            </div>
            <div className="team_main_2">
                <TeamComponent name="Vivek Tiwari"  src="./images/img_1.jpeg"/>
                <TeamComponent name="Mayank Uppal"  src="./images/img_1.jpeg"/>
                <TeamComponent name="Samit Madhesiya"  src="./images/img_1.jpeg"/>
            </div>
        </div>
        </>
    );
}

export default Team;
