import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../Css/NavigationBar.css'; // Import the NavigationBar.css file

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="custom-navbar">
      <LinkContainer to="/">
        <Navbar.Brand>
          {/* Add your logo image here */}
          <img src="/houseLogo.png" alt="Logo" className="logo" /> 
          
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/properties">
            <Nav.Link >Properties</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/dashboard">
            <Nav.Link  className="special-animation">User Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/logout">
            <Nav.Link  className="special-animation">Logout</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link  className="special-animation">Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup" className='lastnav'>
            <Nav.Link  className="special">Sign Up</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
