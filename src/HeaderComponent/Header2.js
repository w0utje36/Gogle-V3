import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

import Employee_Icon from "../GFX/employee.svg";
import Escudero from "../GFX/Escudero.JPG";
export default class Header2 extends Component {
  state = { activeIndex: 0 };

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <img
          src={Employee_Icon}
          className="d-inline-block align-top"
          alt="Gogle"
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Employee Home
            </Nav.Link>
            <Nav.Link
              title="CodeOfConduct"
              as={Link}
              to="/3a(3kJe28nkhdh703hkh3mpl0ye"
            >
              Code of Conduct
            </Nav.Link>
            <Nav.Link tile="" as={Link} to="/jnD3ejLpEnmZW9789Hnl83lDmHQE">
              Nice Reads
            </Nav.Link>
            <Nav.Link as={Link} to="/JSn6yFsTxCRne2uOYCtt">
              Project Odin
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to="/fdsHD8H3jDeqN082"
              style={{ float: "left" }}
            >
              <div>
                <Image src={Escudero} avatar />
                <span>David Escudaro</span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
