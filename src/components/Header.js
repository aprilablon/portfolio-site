import React from 'react';
import { Link } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
// import { Navbar, NavItem, NavbarBrand, Nav } from 'react-bootstrap';
// import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
// import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
// import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="col-xs-12 col-sm-4 small-center brand-text">
            <Link to="/" className="link" id="home">April Ablon</Link>
            <div>
              <p id="title">Full Stack Software Engineer</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-5 col-sm-offset-3 small-center" id="nav">
            <Link to="/" className="nav-link link">Projects</Link>
            <Link to="/about" className="nav-link link">About</Link>
            <Link to="/contact" className="nav-link link">Contact</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

/* <Navbar inverse collapseOnSelect>
  <NavbarHeader>
    <NavbarBrand>
      <LinkContainer to="/">
        <a>April Ablon</a>
      </LinkContainer>
    </NavbarBrand>
    <NavbarToggle />
  </NavbarHeader>
  <NavbarCollapse>
    <Nav pullRight>
      <LinkContainer to="/">
        <NavItem eventKey={1}>Projects</NavItem>
      </LinkContainer>
      <LinkContainer to="/about">
        <NavItem eventKey={2}>About</NavItem>
      </LinkContainer>
      <LinkContainer to="/contact">
        <NavItem eventKey={2}>Contact</NavItem>
      </LinkContainer>
    </Nav>
  </NavbarCollapse>
</Navbar> */
