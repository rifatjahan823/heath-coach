import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const CheckOut = () => {
    const [user]=useAuthState(auth)
    const[email,setEmail]=useState('');
    const[name,setName]=useState('');
    const[phone,setPhone]=useState('');
    const[address,setAddress]=useState('');

    const handleName =(event)=>{
        setName(event.target.value)
    };
    const handlPhone =(event)=>{
        setPhone(event.target.value)
    };
    const handleAddress =(event)=>{
        setAddress(event.target.value)
    };
    const loginHandle =event=>{
        event.preventDefault();
        const info={email,name,phone,address}
        console.log(info)
    }
    
    return (
        <div className='container w-50 mx-auto pb-5 form-container'>
        <h2 className='text-center  mt-2'>Please Login</h2>
        <Form onSubmit={loginHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={ handleName}type="name" placeholder="Name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="Email" placeholder="Email"value={user?.email}  required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={ handlPhone}type="number" placeholder="Phone Number" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control onChange={ handleAddress} type="text" placeholder="Address" required/>
            </Form.Group>
         
            <Button className='w-50 mx-auto d-block mb-2' variant="success " type="submit">
                Check Out
            </Button>
        </Form>
    </div>
    );
};

export default CheckOut;