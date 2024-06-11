import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaHeart } from "react-icons/fa"; // Import ikon hati

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "pink" }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          <FaHeart className="me-2" /> {/* Tambahkan ikon di sini */}
          Wedding of Lian & Gina
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
