import React, { useRef } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const emailref= useRef('');
    const passwordref= useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
      auth
      );

    const submit = event=>{
        event.preventDefault();
        const email = emailref.current.value;
        const password = passwordref.current.value;
        signInWithEmailAndPassword(email, password)
    }
 
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
      
if(user){
    navigate('/home') ;
    navigate(from, { replace: true });
}
if (sending) {
    return <Loading></Loading>;
  }
  const resetPassword = async ()=>{
    const email = emailref.current.value;
   if(user){
    await sendPasswordResetEmail(email);
    toast('Sent email');
   }
   else{
    toast('user not found');  
   }
  }
    const navigateRegister = event=>{
            navigate('/register')
    }
    return (
        <div className='container w-50 mx-auto'>
        <h2 className='text-center text-primary mt-2'>Please Login</h2>
        <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailref} type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordref} type="password" placeholder="Password" required/>
            </Form.Group>
            {
                error?.message  && <p>{error.message}</p>
            }
            {
                error1?.message  && <p>{error1.message}</p>
            }
            {
            loading && <Loading></Loading>
            
        }
            <Button className='w-50 mx-auto d-block mb-2' variant="primary" type="submit">
                Login
            </Button>
        </Form>
        <p>New to here? <Link to="/register" className="text-danger pe-auto text-decoration-none" onClick={ navigateRegister}>Please Registre</Link></p>

        <p>Forget Password? <Link to="" className="text-danger pe-auto text-decoration-none"   onClick={resetPassword}>Reset Password</Link></p>
        <SocialLogin></SocialLogin>
        <ToastContainer />
    </div>
    );
};

export default Login;