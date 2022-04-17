import React from 'react';
import'./AboutService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf,faAppleAlt,faSocks,faHourglass,faHeart } from '@fortawesome/free-solid-svg-icons'
const AboutService = () => {
    return (
        <div className='container AboutService-section'>
            <div className='divider'></div>
           <h2>Why people need a Health Coach</h2> 
            <FontAwesomeIcon className='mb-5 icon ' icon={faLeaf} />
           <div className='row'>
                <div className='col-lg-3 colo-md-6 col-sm-12'>
                    <div className='info-box'>
                    <FontAwesomeIcon className='icon' icon={faAppleAlt} />
                    <h3>Nutrition Strategies</h3>
                    <p>Healthy diet for body as well as for mind.</p>
                    </div>
                </div>
                <div className='col-lg-3 colo-md-6 col-sm-12'>
                    <div className='info-box'>
                        <FontAwesomeIcon className='icon' icon={faSocks}></FontAwesomeIcon>
                    <h3>Workout Routines</h3>
                    <p>Taking care of your body is important.</p>
                    </div>
                </div>
                <div className='col-lg-3 colo-md-6 col-sm-12'>
                   <div className='info-box'>
                   <FontAwesomeIcon className='icon' icon={faHourglass} />
                   <h3>Individual Support</h3>
                   <p>More of a friend than a health coach.</p>
                   </div>
                </div>
                <div className='col-lg-3 colo-md-6 col-sm-12'>
                  <div className='info-box'>
                  <FontAwesomeIcon className='icon' icon={faHeart } />
                  <h3>First-Hand Advice</h3>
                  <p>Broad experience is always a bonus.</p>
                  </div>
                </div>
           </div>
           <div className='m-5 pb-5'>
         <p>  I am delighted to be able to share with you the techniques I have learnt over the years <br /> that have brought me much happiness and success.</p>
           </div>
           <div className='divider2'></div>
        </div>
    );
};

export default AboutService;