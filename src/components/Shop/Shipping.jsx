import React, { useState, useEffect } from 'react';

// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Checkout.css';
import hostbase from '../vars.js';

// Components
import Cart from './Cart';

export default function Shipping(props) {

    const { cartItems, userInfo, handleChange, handleStandard, handleExpress } = props;

    const handleSubmit = event => {
        event.preventDefault();
        console.log(userInfo)
        alert("Thank you for subscribing! Welcome to the club!")
    }

  return (
      
    <>
        <div className='row main-font'>
            <div className='checkout-col1'>
                <h1 className='logoFont' style={{ textAlign: "center", fontSize: "4rem" }}><strong>Shoppingly</strong></h1>
                <div className='checkout-steps'>
                    <li style={{ cursor: "pointer" }} onClick={() => window.alert("Go back")}>Cart&nbsp;</li>
                    <li>{'>'}&nbsp;</li>
                    <li style={{ cursor: "pointer" }} onClick={() => window.alert("Go back")}>Information&nbsp;</li>
                    <li>{'>'}&nbsp;</li>
                    <strong><li>Shipping&nbsp;</li></strong>
                    <li>{'>'}&nbsp;</li>
                    <li>Payment</li>
                </div>
                <div className='shipping-container'>
                    <div className='shipping-row'>
                        <div className='shipping-col-1'>
                            <label>Contact</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <label style={{ display:"inline" }}>magv181091@gmail.com{userInfo.email}</label>        
                        </div>
                        <div className='shipping-col-2'>
                            <a href="" className='login-link'>Change</a>           
                        </div>
                    </div>
                    <hr className='division' />
                    <div className='shipping-row'>
                        <div className='shipping-col-1'>
                            <label>Ship to</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <label style={{ display:"inline" }}>Address{userInfo.address}</label>        
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
                                name="standard" 
                                type="checkbox"
                                value={userInfo.standard}
                                onChange={handleStandard}
                                checked={userInfo.standard}/>
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
                                type="checkbox"
                                value={userInfo.express}                                
                                onChange={handleExpress}
                                checked={userInfo.express}/>
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
                </div>
            </div>
            <div className='checkout-col2'>
                <h1>Order Summary:</h1>
                <Cart cartItems={cartItems} countCartItems={cartItems.length} />
            </div>
        </div>
    </>
  )
}
