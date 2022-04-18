import React from 'react';
import'./AboutService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf,faAppleAlt,faSocks,faHourglass,faHeart,faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import croppedfavicon from'../../../../Image/cropped-favicon.png'
const AboutService = () => {
    return (
        <div className='container AboutService-section'>
           <h2 className='mb-5'>Why people need a Health Coach</h2> 
           <img src={croppedfavicon} alt="" />
           <div className='row'>
         {/* ---first info-box ---*/}
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='info-box'>
                    <FontAwesomeIcon className='icon' icon={faAppleAlt} />
                    <h3>Nutrition Strategies</h3>
                    <FontAwesomeIcon className='icon2' icon={faEllipsisH}></FontAwesomeIcon>
                    <div className='overlay'>
                    <p>Healthy diet for body as well as for mind.</p>
                    </div>
                    </div>
                </div>
            {/* ---second info-box---- */}
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='info-box'>
                        <FontAwesomeIcon className='icon' icon={faSocks}></FontAwesomeIcon>
                    <h3>Workout Routines</h3>
                    <FontAwesomeIcon className='icon2' icon={faEllipsisH}></FontAwesomeIcon>
                    <div className='overlay'>
                    <p>Taking care of your body is important.</p>
                    </div>
                    </div>
                </div>
             {/*---- third info-box---- */}
                <div className='col-lg-3 col-md-6 col-sm-12'>
                   <div className='info-box'>
                   <FontAwesomeIcon className='icon' icon={faHourglass} />
                   <h3>Individual Support</h3>
                   <FontAwesomeIcon className='icon2' icon={faEllipsisH}></FontAwesomeIcon>
                   <div className='overlay'>
                   <p>More of a friend than a health coach.</p>
                   </div>
                   </div>
                </div>
            {/* ---fourth info-box---- */}
                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <div className='info-box'>
                  <FontAwesomeIcon  className='icon' icon={faHeart } />
                  <h3>First-Hand Advice</h3>
                  <FontAwesomeIcon className='icon2' icon={faEllipsisH}></FontAwesomeIcon>
                 <div className='overlay'>
                 <p>Broad experience is always a bonus.</p>
                 </div>
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