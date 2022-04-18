import React from 'react';
import useService from '../../useHooks/useService';
import GetService from '../Home/GetService/GetService';

const Service = () => {
    const [services,setServices]=useService([]);
    
    return (
        <div className='services'>
        <h2 className='text-center'>Services</h2>
        <div className='container'>
            <div className='row g-4 mt-3'>
                {
                  services.map(service=><GetService
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

export default Service;