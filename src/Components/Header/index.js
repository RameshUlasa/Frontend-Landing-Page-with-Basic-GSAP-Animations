import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { gsap } from "gsap";
import "./index.css";

const Header = () => {
  useEffect(() => {
    gsap.to(".logo", {
      duration: 3,
      rotation: 360,
      ease: "elastic",
    });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary custom-navbar "
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <a href="#" className="logo">
            <img
              src="https://geeksinvention.com/assets/v2/content/geeks-logo-white.svg"
              alt="logo"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="nav-mar active">HOME</Nav.Link>
            <Nav.Link className="nav-mar">WORKS</Nav.Link>
            <Nav.Link className="nav-mar">TECHNOLOGIES</Nav.Link>
            <Nav.Link className="nav-mar">SERVICES</Nav.Link>
            <Nav.Link className="nav-mar">COMPANY</Nav.Link>
            <Nav.Link className="nav-mar">CONTACTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
