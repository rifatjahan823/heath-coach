import React, { useState } from 'react';
import {Carousel } from 'react-bootstrap';
import slider1bg from '../../../../Image/slide-1-bg.png';
import slider2 from '../../../../Image/slider-2.jpg';
import  './Banner.css';

const Banner = () => {
  const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
     <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        <img 
          className="d-block w-100"
          src={ slider1bg}
          alt="First slide"
        />
        <Carousel.Caption>
        <div>
               <div className='mb-lg-5 pb-lg-3'>
               <h1>hi i'm rifat jahan </h1>
               <p>your new personal coach for better life!</p>
               <button>About me</button>
               </div>
               <div className='mb-lg-5 pb-lg-5 mb-md-5 pb-md-5 mb-sm-5'>

               </div>
           </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
            <div>
               <div className='mb-lg-5 pb-lg-3'>
               <h1>hi i'm rifat jahan </h1>
               <p>your new personal coach for better life!</p>
               <button>About me</button>
               </div>
               <div className='mb-lg-5 pb-lg-5 mb-md-5 pb-md-5 mb-sm-5'>

               </div>
           </div>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     </div>
    );
    
};

export default Banner;