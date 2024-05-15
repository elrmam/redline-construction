import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';



const CustomNavbar= ()=> {

  return (
     
    <>
    <Navbar className='navbar bg-black' expand="lg">
      <Container>
        <Navbar.Brand className='text-start me-5' as={Link} to="/">
        <img
                                src="/logo.png"
                                width="90rem"
                                className="logo border border-black"
                                style={{ maxWidth: '80%', borderRadius: '80%' }}
                                alt="logo"
                            />
        </Navbar.Brand>
        <Navbar.Toggle className='border bg-white border-danger' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link text-white fs-5" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="nav-link text-white fs-5" as={Link} to="/gallery">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);
}

export default CustomNavbar