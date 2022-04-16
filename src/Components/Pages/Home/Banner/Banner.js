import React, { useState } from 'react';
import {Carousel } from 'react-bootstrap';
import slider1bg from '../../../../Image/slide-1-bg.jpg';
import slider1img from '../../../../Image/slide-1-img.png'
import slider2 from '../../../../Image/slider-2.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img style={{position:"relative"}}
          className="d-block w-100"
          src={ slider1bg}
          alt="First slide"
        />
        <Carousel.Caption>
       <div>
           <div className='d-flex me-5'>
           <img style={{width:"100%",position:"absolute",bottom:"-250%",right:"45%"}}  src={slider1img} alt="" />
           </div>
           <div style={{position:"absolute",top:"-900%",right:"20%"}} >
               <h1>hi i'm rifat jahan </h1>
               <p>your new personal coach for better life!</p>
               <button>About me</button>
           </div>
       </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
            <div style={{position:"absolute",top:"-800%",right:"40%"}} >
               <h1>hi i'm rifat jahan </h1>
               <p>your new personal coach for better life!</p>
               <button>About me</button>
           </div>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;