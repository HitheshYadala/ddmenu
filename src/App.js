import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Row, Col, NavDropdown } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

import Container from "react-bootstrap/Container";
import "./App.css";

const App = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <NavDropdownMenu href="#action/3.1" title="Dropdown 1" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <DropdownSubmenu href="#action/3.7" title="Text to show">
              <NavDropdown.Item href="#action/8.1">Sub 1</NavDropdown.Item>
              <DropdownSubmenu href="#action/3.7" title="Text to show">
                <NavDropdown.Item href="#action/9.1">Sub 2</NavDropdown.Item>
              </DropdownSubmenu>
            </DropdownSubmenu>
          </NavDropdownMenu>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Container>
      <Row>
        <Col>
          <h1>react-bootstrap-submenu CodeSandbox</h1>
          <h2>Resize this window to make submenus visible!</h2>
        </Col>
      </Row>
    </Container>
  </>
);

export default App;
