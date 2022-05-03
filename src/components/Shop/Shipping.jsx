import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from "jwt-decode";

// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Checkout.css';


// Components
import Cart from './Cart';

export default function Shipping(props) {

    const { cartItems, userInfo, getData, order, handleMethod, handleOrder } = props;

    const data = getData();
    /** Data array order:
     * First name = 0
     * Last name = 1
     * Email = 2
     * Address = 3
     * City = 4
     * Country = 5
     * Document = 6
     * Birthdate = 7
     * Phone = 8
     */

    let contact, shipTo = "";
    
    if (data[0] !== undefined) {
        contact = data[0] + " " + data[1];
        shipTo = data[3] + ", " + data[4] + ", " + data[5];
    } else {
        contact = order.firstName + " " + order.lastName;
        shipTo = order.address + ", " + order.city + ", " + order.country;
    }

  return (
      
    <>
        <div style={{ backgroundColor: "#56453E", paddingTop: "4rem" }}/> 
        <div className='row main-font'>
            <div className='checkout-col1'>
                <h1 className='logoFont' style={{ textAlign: "center", fontSize: "4rem" }}><strong>Shoppingly</strong></h1>
                <div className='checkout-steps'>
                    <li>Cart&nbsp;</li>
                    <li>{'>'}&nbsp;</li>
                    <li>Information&nbsp;</li>
                    <li>{'>'}&nbsp;</li>
                    <strong><li>Shipping&nbsp;</li></strong>
                    <li>{'>'}&nbsp;</li>
                    <li>Payment</li>
                </div>
                <form onSubmit={handleOrder}>
                    <div className='shipping-container'>
                        <div className='shipping-row'>
                            <div className='shipping-col-1'>
                                <label>Contact</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <label style={{ display:"inline" }}>{contact}</label>        
                            </div>
                            <div className='shipping-col-2'>
                                <a href="" className='login-link'>Change</a>           
                            </div>
                        </div>
                        <hr className='division' />
                        <div className='shipping-row'>
                            <div className='shipping-col-1'>
                                <label>Ship to</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <label style={{ display:"inline" }}>{shipTo}</label>        
                            </div>
                            <div className='shipping-col-2'>
                                <a href="" className='login-link'>Change</a>           
                            </div>
                        </div>
                    </div>
                    <div className='contact-info-shipping'>
                        <strong><p>Shipping Method</p></strong>
                    </div>
                    <div className='shipping-container'>
                        <div className='shipping-row'>
                            <div className='shipping-col-1'>
                                <input
                                    className="checkboxes" 
                                    style={{ margin: ".4rem" }}
                                    required 
                                    name="express" 
                                    type="radio"
                                    onChange={handleMethod}
                                    value={"standard"} />
                                <label style={{ fontSize: "large", display: "inline" }}>Standard shipping: 6 to 9 business days</label>        
                            </div>
                            <div className='shipping-col-2'>
                                <strong>Free</strong>          
                            </div>
                        </div>
                        <hr className='division' />
                        <div className='shipping-row'>
                            <div className='shipping-col-1'>
                                <input
                                    className="checkboxes" 
                                    style={{ margin: ".4rem" }} 
                                    name="express" 
                                    type="radio"
                                    onChange={handleMethod}
                                    value={"express"} />
                                <label style={{ fontSize: "large", display: "inline" }}>Express shipping: 3 business days</label>        
                            </div>
                            <div className='shipping-col-2'>
                                <strong>$20.00</strong>          
                            </div>
                        </div>
                    </div>
                    <div className="signup-row shipping">
                        <a href="" className='login-link' style={{ fontSize: "medium", display: "inline" }}>{'<'}&nbsp;Return to cart</a>
                        <button className="shipping-btn">Continue to payment</button>
                        {/*<Link to="/payment" type='button' className='shipping-btn'>Continue to payment</Link>*/}
                    </div>
                </form>
            </div>
            <div className='checkout-col2'>
                <h1>Order Summary:</h1>
                <Cart cartItems={cartItems} order={order} countCartItems={cartItems.length} />
            </div>
        </div>
    </>
  )
}
