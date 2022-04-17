import React, { useRef, useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmail =(event)=>{
        setEmail(event.target.value)
    };
    const handlePassword =(event)=>{
        setPassword(event.target.value)
    };
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
        signInWithEmailAndPassword(email, password);
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

    return (
        <div className='container w-50 mx-auto'>
        <h2 className='text-center text-primary mt-2'>Please Login</h2>
        <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
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
        <p>New to here? <Link to="/register" className="text-danger pe-auto text-decoration-none">Please Registre</Link></p>
        
        <p>Forget Password? <Link to="" className="text-danger pe-auto text-decoration-none"   onClick={async () => {
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }else{
            toast('plese enter your email'); 
        }
        }}>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
    </div>
    );
};

export default Login;