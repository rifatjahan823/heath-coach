import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
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
            </Nav>
            <Nav>
            {
             /*  user?
             <button onClick={signout}>Sign Out</button>
              : */
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