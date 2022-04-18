import React, { memo } from 'react';

const Loading = memo(() => {
    return (
        <div style={{heigh:"400px"}} className='w-100 d-flex justify-content-center align-iems-center'>
            <div className="spinner-border text-primary" role="status">
             <span className="visually-hidden">Loading...</span>
        </div>
        </div>
    );
});

export default Loading;