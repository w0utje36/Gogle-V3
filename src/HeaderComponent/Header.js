import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../GFX/gogle_logoAsset9.png";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} className="d-inline-block align-top" alt="Gogle" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/products">
              Branches
            </Nav.Link>
            <Nav.Link as={Link} to="/quantum">
              Quantum Computing
            </Nav.Link>
            <NavDropdown title="Our Company" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/founder">
                Meet the Founder
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/board">
                The Board
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/story">
                History
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
