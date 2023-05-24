import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Button variant="light">
            <Link to="/">Home</Link>
          </Button>
          <Nav className="me-auto">
            <Button variant="light">
              <Link to="About">About</Link>
            </Button>
            <Button variant="light">
              <Link to="Contacts">Contacts</Link>
            </Button>
            <Button variant="light">
              <Link to="Services">Services</Link>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
