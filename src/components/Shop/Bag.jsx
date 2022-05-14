
// Libraries
import { React, useState } from 'react'
import { Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from 'react-router-dom';

// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Shopping.css';



export default function Bag(props) {


    const { cartItems, onAdd, onRemove, name, checkout } = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const itemPrice = cartItems.reduce((accumulator, item) => accumulator + (item.price * item.qty), 0);
    const taxValue = itemPrice * 0.07;
    const shippingValue = itemPrice > 250 ? 0 : 25;
    const total = itemPrice + taxValue + shippingValue;

    
    

    function confirm() {
        window.confirm("Do you want to check out?");
        checkout();
        handleClose();
    }
  
    return (
      <>
        <Nav.Link onClick={handleShow}>
          {name}
        </Nav.Link>
        <Offcanvas className="main-font" show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <div>{cartItems.length === 0 && <div>Your cart is empty</div>}</div>     
              {cartItems.map((item) => (
                  <div key={item._id} className="bag-row">
                    <div className="bag-col-2">{item.name}</div>
                    <div>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                        <button onClick={() => onAdd(item)} className="add">+</button>
                    </div>
                    <div className="bag-col-2 bag-price">
                        {item.qty} X ${item.price.toFixed(2)}
                    </div>
                  </div>
              ))}
              {cartItems.length !== 0 && (
                  <>
                    <hr />
                    <div className="bag-row">
                        <div className="bag-col-2">
                            Items Price
                        </div>
                        <div className="bag-col-1 bag-price">
                            ${itemPrice.toFixed(2)}
                        </div>
                    </div>
                    <div className="bag-row">
                        <div className="bag-col-2">
                            Tax:
                        </div>
                        <div className="bag-col-1 bag-price">
                            ${taxValue.toFixed(2)}
                        </div>
                    </div>
                    <div className="bag-row">
                        <div className="bag-col-2">
                            Shipping:
                        </div>
                        <div className="bag-col-1 bag-price">
                            ${shippingValue.toFixed(2)}
                        </div>
                    </div>
                    <div className="bag-row">
                        <div className="bag-col-2">
                            <strong>
                                Total:
                            </strong>
                        </div>
                        <div className="bag-col-1 bag-price">
                            <strong>
                                ${total.toFixed(2)}
                            </strong>
                        </div>
                    </div>
                    <hr />
                    <div className="bag-row">
                        <Link to="/checkout" className='checkout' onClick={confirm}>Checkout</Link>
                    </div>
                  </>
              )}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
}
