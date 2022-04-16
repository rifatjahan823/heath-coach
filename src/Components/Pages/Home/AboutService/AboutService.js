import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
const AboutService = () => {
    return (
        <div className='container'>
           <h2>Why people need a Health Coach</h2> 
            <FontAwesomeIcon icon={faLeaf} />
           <div className='row'>
                <div className='col-lg-3 colo-md-6 col-sm-12'>
                    <h2>Nutrition Strategies</h2>
                </div>
                <div className='col-lg-3 colo-md-6 col-sm-12'>
                    <h2>Workout Routines</h2>
                </div>
                <div className='col-lg-3 colo-md-6 col-sm-12'>
                    <h2>Individual Support</h2>
                </div>
                <div className='col-lg-3 colo-md-6 col-sm-12'>
                    <h2>First-Hand Advice</h2>
                </div>
           </div>
        </div>
    );
};

export default AboutService;