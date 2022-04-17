import React from 'react';
import infoblockbg from '../../../../Image/info-block-bg-.jpg' 
const Info = () => {
    return (
        <div className='info'style={{backgroundImage: `url(${infoblockbg})`, backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed',
        padding:"120px 0", 
        backgroundPosition:"center",
       }}>
         <div className='container '>
         <div className='text-white w-50'>
         <h2>3 months with a Health Coach</h2>
          <p>Start working on your body today, and with our individual fitness program, already in 90 days you will see a totally different girl in the mirror!</p>
          <button>More Information</button>
         </div>
         </div>
        </div>
    );
};

export default Info;