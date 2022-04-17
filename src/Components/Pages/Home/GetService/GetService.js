import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetService.css'

const GetService = ({service}) => {
    const {name,picture,description}=service;
    const navigate = useNavigate();
    const checkOut = ()=>{
        navigate('/checkout')
    }
    return (
        <div className='card-group col-lg-4 col-md-6 col-sm-12'>
            <div className='services-info'>
               <img className='img-fluid mb-3 ' src= {picture} alt="" />
                <h5 >{name}</h5>
                <p>{description}</p>
                <div className='services-btn'>
                <button onClick={ checkOut}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default GetService;