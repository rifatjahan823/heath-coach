import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetService.css'

const GetService = ({service}) => {
    const {name,picture,description,id,price}=service;
    const navigate = useNavigate()
    const checkOutDetails =id=>{
        navigate(`/dynamicCheckout/${id}`)
    }
    return (
        <div className='card-group col-lg-4 col-md-6 col-sm-12'>
            <div className='services-info'>
               <img className='img-fluid mb-3 ' src= {picture} alt="" />
                <h5 >{name}</h5>
              <p className='pt-2'>{description}</p>
              <h6 className='price'>${price}<small>/Month</small></h6>
                <div className='services-btn'>
                <button  onClick={()=>checkOutDetails(id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default GetService;