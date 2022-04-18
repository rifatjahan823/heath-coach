import React from 'react';
import './Services.css'
import useService from '../../../useHooks/useService';
import GetService from '../GetService/GetService';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    const [services,setServices]=useService([]);
    const navigate = useNavigate();
    const buynow =()=>{
        navigate('/service')
    }
    return (
        <div className='services'>
            <h2 className='text-center'>Services</h2>
            <div className='container'>
                <div className='row g-4 mt-3'>
                    {
                      services.slice(0,3).map(service=><GetService
                        service={service}
                        key={service.id}
                      >
                      </GetService>)  
                    }
                </div>
                <div className='service-btn'>
                    <button onClick={buynow }>More Service  <FontAwesomeIcon  icon={faAnglesRight}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Services;