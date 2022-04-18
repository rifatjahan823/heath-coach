import React, { Component, useState } from 'react';
import secess1before1 from '../../../../Image/sucess-story/sucess1-before.png'
import secess1after1 from '../../../../Image/sucess-story/sucess1-after.jpg'
import sucess2before1 from '../../../../Image/sucess-story/sucess2-before.jpg'
import sucess2after1 from '../../../../Image/sucess-story/sucess2-after.jpg'
import croppedfavicon from '../../../../Image/cropped-favicon.png'
import './SucessStory.css'
const SucessStory = () => {
  
    return (
     <div className='sucess-story container pb-5'>
         <div className='divider'></div>
             <h2 className='text-center mt-5'>Success Stories</h2>
           <div className='title-img' >
           <img className='mx-auto d-block' src={croppedfavicon} alt="" />
           </div>
         <div className='row align-items-center g-5'>
            <div className='col-md-6 col-sm-12'>
              <div className='d-flex'>
              <div className='border p-3 mb-5'>
                <img className='img-fluid' src={secess1before1} alt="" />
                </div>
                <div className=' border p-3 mt-5 bg-white'style={{marginLeft:"-10%"}}>
                <img className='img-fluid' src={secess1after1} alt="" />
                </div>
              </div>
              <div className='d-flex mt-3'>
              <div className='border mb-5 p-3'>
                <img className='img-fluid' src={sucess2before1} alt="" />
                </div>
                <div className='border p-3 mt-5 bg-white'style={{marginLeft:"-10%"}}>
                <img className='img-fluid' src={sucess2after1} alt="" />
                </div>
              </div>
            </div>
            <div className='col-md-6 col-sm-12'>
                <h2  style={{color:"#2acd35"}}>Secret Tips </h2>
                <p className='mt-3 mb-4' >When it comes to weight loss, exercise is your best friend. If you haven’t exercised for a long time and are very out of shape, start out by exercising for just 10 minutes a day, and add on over time to build up to 30 minutes to an hour every day. Do both aerobic exercise (like walking, swimming, and cycling) and anaerobic exercise (resistance training, weight lifting) for best results. Aerobic exercise has many benefits: it improves insulin sensitivity, strengthens your heart, gives you more energy, and much more. </p>
                <div className='sucess-btn'>
                <button>More Story</button>
                </div>
            </div>
         </div>
     </div>
    );
};


export default SucessStory;