import React from 'react';
import './GetService.css'

const GetService = ({service}) => {
    const {name,picture,description}=service
    return (
        <div className='card-group col-lg-4 col-md-6 col-sm-12'>
            <div className='services-info'>
               <img className='img-fluid mb-3 ' src= {picture} alt="" />
                <h5 >{name}</h5>
                <p>{description}</p>
                <div className='services-btn'>
                <button>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default GetService;