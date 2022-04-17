import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Header = () => {
  const [user]=useAuthState(auth)
  const signout = () => {
    signOut(auth);
  };
    return (
        <>
       <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
         <Container>
         <Navbar.Brand as={Link} to="/">
           
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link href='/about' >About</Nav.Link>
              <Nav.Link href='/services'>Services</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/checkout"></Nav.Link>
            </Nav>
            <Nav>
            {
               user?
               <Nav.Link ><button onClick={signout}>Sign Out</button></Nav.Link>
             
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