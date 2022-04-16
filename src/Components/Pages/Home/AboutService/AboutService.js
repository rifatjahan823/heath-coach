import React from 'react';
import'./AboutService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
const AboutService = () => {
    return (
        <div className='container AboutService-section'>
           <h2>Why people need a Health Coach</h2> 
            <FontAwesomeIcon icon={faLeaf} />
           <div className='row'>
                <div className='col-lg-3 colo-md-6 col-sm-12'>
                    <div className='info-box'>
                    <h3>Nutrition Strategies</h3>
                    <p>Healthy diet for body as well as for mind.</p>
                    </div>
                </div>
                <div className='col-lg-3 colo-md-6 col-sm-12'>
                    <div className='info-box'>
                    <h3>Workout Routines</h3>
                    <p>Taking care of your body is important.</p>
                    </div>
                </div>
                <div className='col-lg-3 colo-md-6 col-sm-12'>
                   <div className='info-box'>
                   <h3>Individual Support</h3>
                   <p>More of a friend than a health coach.</p>
                   </div>
                </div>
                <div className='col-lg-3 colo-md-6 col-sm-12'>
                  <div className='info-box'>
                  <h3>First-Hand Advice</h3>
                  <p>Broad experience is always a bonus.</p>
                  </div>
                </div>
           </div>
        </div>
    );
};

export default AboutService;