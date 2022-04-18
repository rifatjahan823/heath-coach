import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='my-5 container'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                    <h2>Authentication</h2>
                    <p>1.Authentication verifies the user</p>
                    <p>2.Authentication works through passwords, email, and other information</p>
                    <h2>Authorization</h2>
                    <p>1.Authentication set the user resource through which  the user can be access </p>
                    <p>2.Authorization work throws the setting maintained by the organization.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                Firebase Authentication 
                easily provides backend services, through which we can easy-to-use SDKs.It also provides more facilities like a ready-made UI library. Also, it supports so many apps like Google, Facebook,etc.
                If i talk about why using firebase so Its easy to use and provide so many facalities.But we can use othe service like:-Parse,Back4app,Backendless lot of more. 
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                <Accordion.Body>
                <p>1.cloud Firestore.</p>
                <p>2.Cloud Messaging.</p>
                <p>3.Hosting.</p>
                <p>4.Google Analytics.</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
    );
};

export default Blog;