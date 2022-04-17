import React from 'react';
import './Services.css'
import useService from '../../../useHooks/useService';
import GetService from '../GetService/GetService';

const Services = () => {
    const [services,setServices]=useService([]);
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
            </div>
        </div>
    );
};

export default Services;