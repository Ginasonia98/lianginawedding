import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'pink' }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'white' }}>Wedding of Lian & Gina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="#about" style={{ color: 'white' }}>About</Nav.Link>
            <Nav.Link href="#contact" style={{ color: 'white' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
