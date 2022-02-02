
// Libraries
import { React, useState } from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas'

// Media
import dress from '../static/img/dress.svg';
import user from '../static/img/user.svg';
import cart from '../static/img/cart.svg';

// CSS
import '../static/css/Main.css';
import '../static/css/Header.css';

export default function Footer(){
  return (
    <> 
    <Navbar className="border" expand="lg" style={{ backgroundColor: "#E0D7C7" }}>
        <Container>
            <Navbar.Brand href="#home" className="logoFont">
                <img alt="" src={dress} width="30" height="30" className="d-inline-block align-top" />{' '}
                Shoppingly
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto links">
                    <NavDropdown title="Men" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Shirts</NavDropdown.Item>
                        <NavDropdown.Item href="#">Pants</NavDropdown.Item>
                        <NavDropdown.Item href="#">Underwear</NavDropdown.Item>
                        <NavDropdown.Item href="#">Shoes</NavDropdown.Item>
                        <NavDropdown.Item href="#">Beachwear</NavDropdown.Item>
                        <NavDropdown.Item href="#">Sportswear</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Women" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Shirts</NavDropdown.Item>
                        <NavDropdown.Item href="#">Pants</NavDropdown.Item>
                        <NavDropdown.Item href="#">Underwear</NavDropdown.Item>
                        <NavDropdown.Item href="#">Shoes</NavDropdown.Item>
                        <NavDropdown.Item href="#">Beachwear</NavDropdown.Item>
                        <NavDropdown.Item href="#">Sportswear</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Kids" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Shirts</NavDropdown.Item>
                        <NavDropdown.Item href="#">Pants</NavDropdown.Item>
                        <NavDropdown.Item href="#">Underwear</NavDropdown.Item>
                        <NavDropdown.Item href="#">Shoes</NavDropdown.Item>
                        <NavDropdown.Item href="#">Beachwear</NavDropdown.Item>
                        <NavDropdown.Item href="#">Sportswear</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">Offers</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</>
  );
}

