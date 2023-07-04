import React from 'react';

function TeamComponent (props) {
    return (
        <div className="team_component_main">
            <div className="team_component">
                <img id='team_component_img' src={props.src} alt="" />
                <p id="team_component_text">{props.name}</p>
            </div>
        </div>
    );
}

export default TeamComponent;
