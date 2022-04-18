import React, { useEffect } from 'react';
import google from '../../../../Image/social/google-icon-logo.png'
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error ) {
        errorElement=
          <div>
            <p>Error: {error?.message}</p>
          </div>
      }
      useEffect(()=>{
        if(user ){
          navigate ('/')
        }
       },[user])
       
      if (loading ) {
        return <Loading></Loading>;
      }
    
   
    return (
        <div className='mb-5'>
            <div className='d-flex align-items-center'>
                <div style={{height:"1px"}} className='bg-primary w-50'></div>
                <p className='mx-2 mt-2'>or</p>
                <div style={{height:"1px"}} className='bg-primary w-50'></div>
            </div>
            <div>
                { errorElement}
                <button onClick={() => signInWithGoogle()} className=' d-flex align-items-center justify-content-center mx-auto d-block btn btn-primary w-50 m-3'>
                    <img style={{width:"30px"}} className="me-2" src={google} alt="" />
                    <span>Sign in with google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;