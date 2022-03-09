
// Libraries
import { React, useState } from 'react'
import { Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function Bag({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { cartItems } = props;
  
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
              Hello
              {/*cartItems.length === 0 && <div>Your cart is empty</div>*/}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
}
