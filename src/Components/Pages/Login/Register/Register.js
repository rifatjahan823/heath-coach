import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[confirmPassword,setConfirmPassword]=useState('')
    const[error1,setError1]=useState('');

   const [ createUserWithEmailAndPassword,user,loading,error]=useCreateUserWithEmailAndPassword(auth,{emailVerificationOptions:true});

    const handleEmail =(event)=>{
      setEmail(event.target.value)
  };
  const handlePassword =(event)=>{
      setPassword(event.target.value)
  };
  const handleConfirmPassword =(event)=>{
    setConfirmPassword(event.target.value)
};
const navigate=useNavigate();
  if(loading){
     return<Loading></Loading> 
 }
 if(user){
    navigate("/")
}

  const registar = (event)=>{
      event.preventDefault();
     createUserWithEmailAndPassword(email,password,confirmPassword);
     if(password!==confirmPassword){
        setError1("Please Match Your Password With Confirmpassword");
        return;
    }
    if(password.length<6){
        setError1("Password must be atleast 6 charecter")
    }
  }
    return (
        <div className='container w-50 mx-auto'>
        <h2 className='text-center text-primary mt-2'>Register</h2>
        <Form onSubmit={registar}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ConfirmPassword</Form.Label>
                <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="ConfirmPassword" required/>
            </Form.Group>
            <Button className='w-50 mx-auto d-block mb-2' variant="primary" type="submit">
               Register
            </Button>
        </Form>
        <p>Already have an account? <Link to="/login" className="text-danger pe-auto text-decoration-none">Please Login</Link></p>
        <SocialLogin></SocialLogin>
    </div>
    );
};

export default Register;