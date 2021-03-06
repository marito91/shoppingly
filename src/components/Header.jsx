
// Libraries
import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Media
import dress from '../static/img/icons/dress.svg';
import user from '../static/img/icons/user.svg';
import cart from '../static/img/icons/shoppingcart.svg';

// CSS
import '../static/css/Main.css';
import '../static/css/Header.css';


// Components
import Bag from './Shop/Bag';

export default function Header(props) {

const { cartItems, onAdd, onRemove, countCartItems, checkout } = props; 
   
    return (
        <> 
            <Navbar fixed="top" className="border" expand="lg" style={{ backgroundColor: "#E0D7C7" }}>
                <Container>
                    <Navbar.Brand className="logoFont" style={{ fontSize: "2.0em" }}>
                        <img alt="" src={dress} width="32" height="32" style={{ marginTop: "3%" }} className="d-inline-block align-top" />{' '}
                        <Link to="/" style={{ textDecoration:"none", color:"black" }}>Shoppingly</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="main-font" id="basic-navbar-nav">
                        <Nav className="me-auto links" style={{ fontSize: "large" }} >
                            <NavDropdown title="Clothing" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to="/shop/men" className='dropdown-item' role="button">Men</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/shop/women" className='dropdown-item' role="button">Women</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/shop/kids" className='dropdown-item' role="button">Kids</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Accesories</Nav.Link>
                            <Nav.Link href="#">Offers</Nav.Link>
                            <Nav.Link href="#">About Us</Nav.Link>
                        </Nav>
                        {/* This is not working yet as it has not been implemented*/}
                        <Form className="d-flex" style={{ fontSize: "large" }} >
                            <FormControl type="search" placeholder="Something in mind?" className="me-2" aria-label="Search" />
                            <Button variant="outline-success" style={{ marginRight : "0.5rem" }}>Search</Button>
                        </Form>
                        <Link to="/account"><img alt="" src={user} width="30" height="30" className="d-inline-block align-top header-icons user-logo" /></Link>
                        <Navbar.Brand href="#home" className="links" style={{ display: "inline" }}>
                            {['end'].map((placement, idx) => (
                                <Bag key={idx} 
                                    placement={placement} 
                                    onAdd={onAdd} 
                                    onRemove={onRemove} 
                                    cartItems={cartItems}
                                    checkout={checkout}
                                    name={<img alt="" src={cart} width="30" height="30" className="d-inline-block align-top header-icons" />} 
                                />
                            ))}
                        </Navbar.Brand>
                        <Navbar.Brand>
                            { '' }
                            {countCartItems ? (
                                <button className="cart-count">{countCartItems}</button>
                            ) : 
                                ( '' )
                            }
                        </Navbar.Brand>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
