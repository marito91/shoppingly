import React from 'react';

// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Checkout.css';
import hostbase from '../vars.js';

// Media
import amex from '../../static/img/icons/amex.svg';
import mastercard from '../../static/img/icons/mastercard.svg';
import visa from '../../static/img/icons/visa.svg';

// Components
import Cart from './Cart';

export default function Payment(props) {

    const { cartItems, userInfo, handleExpress, handleChange } = props;

  return (
      
    <>
        <div style={{ backgroundColor: "#56453E", paddingTop: "4rem" }}/> 
        <div className='row main-font'>
            <div className='checkout-col1'>
                <h1 className='logoFont' style={{ textAlign: "center", fontSize: "4rem" }}><strong>Shoppingly</strong></h1>
                <div className='checkout-steps'>
                    <li style={{ cursor: "pointer" }} onClick={() => window.alert("Go back")}>Cart&nbsp;</li>
                    <li>{'>'}&nbsp;</li>
                    <li style={{ cursor: "pointer" }} onClick={() => window.alert("Go back")}>Information&nbsp;</li>
                    <li>{'>'}&nbsp;</li>
                    <li>Shipping&nbsp;</li>
                    <li>{'>'}&nbsp;</li>
                    <strong><li>Payment</li></strong>
                </div>
                <div className='shipping-container'>
                    <div className='shipping-row'>
                        <div className='shipping-col-1'>
                            <label>Contact</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <label style={{ display:"inline" }}>{userInfo.email}</label>        
                        </div>
                        <div className='shipping-col-2'>
                            <a href="" className='login-link'>Change</a>           
                        </div>
                    </div>
                    <hr className='division' />
                    <div className='shipping-row'>
                        <div className='shipping-col-1'>
                            <label>Ship to</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <label style={{ display:"inline" }}>{userInfo.address}</label>        
                        </div>
                        <div className='shipping-col-2'>
                            <a href="" className='login-link'>Change</a>           
                        </div>
                    </div>
                    <hr className='division' />
                    <div className='shipping-row'>
                        <div className='shipping-col-1'>
                            <label>Method</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <label style={{ display:"inline" }}>{userInfo.method}</label>        
                        </div>
                        <div className='shipping-col-2'>
                            <a href="" className='login-link'>Change</a>           
                        </div>
                    </div>
                </div>
                <div className='contact-info-shipping'>
                    <strong><p>Payment Method</p></strong><br />
                </div>
                <div className='contact-info-shipping'>
                    <p>All transactions are safe and encrypted</p>
                </div>
                <div className='shipping-container'>
                    <div className='cards'>
                        <p>Credit Card</p>
                        <div style={{ paddingRight: "1rem" }}>
                            <img src={visa} className='card-icons' alt="" />&nbsp;
                            <img src={mastercard} className='card-icons' alt="" />&nbsp;
                            <img src={amex} className='card-icons' alt="" />
                        </div>
                    </div>
                    <form action="">
                        <div className="shipping-row">
                            <input 
                                type="text" 
                                autoComplete="off"
                                placeholder='Card Number' 
                                autoFocus required
                                maxLength={12} 
                                className="card-inputs"
                                name='number'
                                onChange={handleChange} />
                        </div>
                        <div className="shipping-row">
                            <input 
                                type="text" 
                                autoComplete="off"
                                placeholder='Name on card' 
                                autoFocus required 
                                className="card-inputs"
                                name='name'
                                onChange={handleChange} />
                        </div>
                        <div className='shipping-row'>
                            <div className='signup-column'>
                                <input 
                                    type="text" 
                                    autoComplete="off"
                                    placeholder='MM/YY Expiration Date' 
                                    autoFocus required
                                    maxLength={5} 
                                    className="card-inputs"
                                    name='expiration'
                                    id='mid-input' 
                                    onChange={handleChange} />
                            </div>
                            <div className='signup-column'>
                                <input 
                                    type="password" 
                                    autoComplete="off"
                                    placeholder='CVC' 
                                    autoFocus required
                                    maxLength={3} 
                                    className="card-inputs"
                                    name='cvc' 
                                    onChange={handleChange} />
                            </div>
                        </div>
                    </form>
                    
                    
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
                    <a href="" className='login-link' style={{ fontSize: "medium", display: "inline" }}>{'<'}&nbsp;Return to shipping</a>
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
