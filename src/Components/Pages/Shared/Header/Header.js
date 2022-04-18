import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import logo from '../../../../Image/logo.png';
import './Header.css'

const Header = () => {
  const [user]=useAuthState(auth)
  const signout = () => {
    signOut(auth);
  };
    return (
        <>
       <Navbar collapseOnSelect expand="lg" sticky="top" className='bg'>
         <Container>
         <Navbar.Brand as={Link} to="/" style={{width:"50%"}}>
        <img style={{width:"50%",marginTop:"-20px"}} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"style={{marginRight:"4%"}} />
           <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/service">Service</Nav.Link>
              <Nav.Link as={Link} to='/about' >About</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/checkout"></Nav.Link>
            </Nav>
            <Nav>
            {
               user?
               <Nav.Link onClick={signout} as={Link} to="/" >Login</Nav.Link>
             
              : 
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </Nav>
           </Navbar.Collapse>
         </Container>
       </Navbar>
       </>
    );
};

export default Header;