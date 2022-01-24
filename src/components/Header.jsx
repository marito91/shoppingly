
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

export default function Header() {

    function ShoppingCart({ name, ...props }) {
        const [show, setShow] = useState(false);
        const [items, setItems] = useState([]);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Nav.Link onClick={handleShow}>
              {name}
            </Nav.Link>
            <Offcanvas show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Your cart is empty.
              </Offcanvas.Body>
            </Offcanvas>
          </>
        );
    }
   
    return (
        <> 
            <Navbar fixed="top" className="border" expand="lg" style={{ backgroundColor: "#E0D7C7" }}>
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
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Something in mind?" className="me-2" aria-label="Search" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav.Link href="#">
                            <img alt="" src={user} width="30" height="30" className="d-inline-block align-top header-icons" />
                        </Nav.Link>
                        <Navbar.Brand href="#home" className="links">
                            {['end'].map((placement, idx) => (
                                <ShoppingCart key={idx} placement={placement} name={<img alt="" src={cart} width="30" height="30" className="d-inline-block align-top header-icons" />} />
                            ))}
                        </Navbar.Brand>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
