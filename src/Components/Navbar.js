import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';



const CustomNavbar= ()=> {

  return (
     
    <>
    <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand className='text-start me-5' as={Link} to="/">
          <h2 className="fs-1">
            <span className='textred'>RED</span>
            <span className='text-black'>LINE</span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle className='border border-black' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link text-black fs-5" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="nav-link text-black fs-5" as={Link} to="/gallery">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);
}

export default CustomNavbar