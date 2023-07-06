import React from 'react';
import Places8Component from './Places_8_Component';
import Places6Component from './Places_6_Component';

function Places8() {
    return (
        <>
        <div className="places_8_main">

            <div className="places_8_heading">
            BIRD SANCTUARY
            </div>

            <div className="places_8_img">
                <Places8Component/>
                <Places8Component/>
                <Places8Component/>
                <Places8Component/>
            </div>
        </div>


        <div className="places_9_heading_1">
            JAPANESE GARDEN
        </div>
        <div className="places_9_main">
            <Places6Component id1='places_9_img'/>
            <Places6Component id1='places_9_img'/>
            <Places6Component id1='places_9_img' />
        </div>
    </>
    );
}

export default Places8;
