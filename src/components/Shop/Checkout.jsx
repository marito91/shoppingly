import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Checkout.css';


// Components
import Cart from './Cart';

export default function Checkout(props) {

    /** Information required
     * First Name
     * Last Name
     * Email
     * Date of birth
     * Terms of service Checkbox
     * Sign Up Button
     */

    const { cartItems, userInfo, handleChange } = props;

    const [countries, setCountries] = useState([]);


    const handleSubmit = event => {
        event.preventDefault();
        console.log(userInfo)
        alert("Thank you for subscribing! Welcome to the club!")
    }

    // Fetches Countries 
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(res => {
            setCountries(res);
        })
    }, []);

    let countryList = countries.map(country => country.name.common);

    countryList.sort();


  return (
      
    <>
        <div style={{ backgroundColor: "#56453E", paddingTop: "4rem" }}/> 
        <div className='row main-font'>
            <div className='checkout-col1'>
                <h1 className='logoFont' style={{ textAlign: "center", fontSize: "4rem" }}><strong>Shoppingly</strong></h1>
                <div className='checkout-steps'>
                    <li style={{ cursor: "pointer" }} onClick={() => window.alert("Go back")}>Cart&nbsp;</li>
                    <li>{'>'}&nbsp;</li>
                    <strong><li>Information&nbsp;</li></strong>
                    <li>{'>'}&nbsp;</li>
                    <li>Shipping&nbsp;</li>
                    <li>{'>'}&nbsp;</li>
                    <li>Payment</li>
                </div>
                <form className="signup form" onSubmit={handleSubmit}>
                    <div className='contact-info'>
                        <strong><p>Contact Information</p></strong>
                        <p className='login-info'>Already have an account?&nbsp;<a href="#" className='login-link'>Log in</a></p>
                    </div>
                    <div className="signup-row">
                        <div style={{ maxWidth: "100%"}}>
                            <div className='floating-label-group'>
                                <input 
                                    type="text" 
                                    autoComplete="off" 
                                    autoFocus required 
                                    className="signup-inputs"
                                    name='email'
                                    value={userInfo.email} 
                                    onChange={handleChange} />
                                <label className="floating-label">Email Address</label>
                                <input
                                    className="checkboxes" 
                                    style={{ margin: ".4rem" }} 
                                    name="tracking" 
                                    type="checkbox"
                                    onChange={handleChange}
                                    checked={userInfo.tracking}/>
                                <label style={{ fontSize: "large", display: "inline" }}>Keep me up to date about my order</label>
                            </div>
                        </div>
                    </div>
                    <div className='contact-info'>
                        <strong><p>Shipping Address</p></strong>
                    </div>
                    <div className="signup-row">
                        <div className='floating-label-group'>
                            <select 
                                type="select" 
                                autoComplete="off" 
                                autoFocus required 
                                className="signup-inputs"
                                name='country'
                                onChange={handleChange}
                                style={{ paddingTop: "1.5rem" }}>
                                    <option value="">&nbsp;</option>
                                    {countryList.map(country => <option>{country.name.common}</option>)}
                            </select>
                            <label className="floating-label">Country/Region</label>
                        </div>
                    </div>
                    <div className="signup-row">
                        <div className='floating-label-group signup-column'>
                            <input 
                                type="text" 
                                autoComplete="off" 
                                autoFocus required
                                className="signup-inputs"
                                name='firstName'
                                id='mid-input'
                                value={userInfo.firstName} 
                                onChange={handleChange} />
                            <label className="floating-label">First Name</label>
                        </div>
                        <div className="floating-label-group signup-column">
                            <input 
                                type="text" 
                                autoComplete="off" 
                                autoFocus required 
                                className="signup-inputs"
                                name='lastName'
                                value={userInfo.lastName} 
                                onChange={handleChange} />
                            <label className="floating-label">Last Name</label>
                        </div>
                    </div>
                    <div className="signup-row">
                        <div className='floating-label-group'>
                            <input 
                                type="text" 
                                autoComplete="off" 
                                autoFocus required 
                                className="signup-inputs"
                                name='address'
                                value={userInfo.address} 
                                onChange={handleChange} />
                            <label className="floating-label">Street and house number</label>
                        </div>
                    </div>
                    <div className="signup-row">
                        <div className='floating-label-group'>
                            <input 
                                type="text" 
                                autoComplete="off" 
                                autoFocus required 
                                className="signup-inputs"
                                name='apt'
                                value={userInfo.apt} 
                                onChange={handleChange} />
                            <label className="floating-label">Apartment, suite, etc.</label>
                        </div>
                    </div>
                    <div className='signup-row'>
                        <div>
                            <div className='floating-label-group signup-column'>
                                <input 
                                    type="text" 
                                    autoComplete="off" 
                                    autoFocus required
                                    className="signup-inputs"
                                    name='city'
                                    id='mid-input'
                                    value={userInfo.city} 
                                    onChange={handleChange} />
                                <label className="floating-label">City</label>
                            </div>
                        </div>
                        <div className="floating-label-group signup-column">
                            <input 
                                type="text" 
                                autoComplete="off" 
                                autoFocus required 
                                className="signup-inputs"
                                name='postalCode'
                                value={userInfo.postalCode} 
                                onChange={handleChange} />
                            <label className="floating-label">Postal Code</label>
                        </div>
                    </div>
                    <div className="signup-row">
                        <div className='floating-label-group'>
                            <input 
                                type="text" 
                                autoComplete="off" 
                                autoFocus required 
                                className="signup-inputs"
                                name='phone'
                                value={userInfo.phone} 
                                onChange={handleChange} />
                            <label className="floating-label">Phone Number</label>
                        </div>
                    </div>
                    <div className="signup-row">
                        <div style={{ maxWidth: "100%"}}>
                            <div className='floating-label-group'>
                                <input
                                    className="checkboxes" 
                                    style={{ margin: ".4rem" }} 
                                    name="offers" 
                                    type="checkbox"
                                    onChange={handleChange}
                                    value={userInfo.offers}
                                    checked={userInfo.offers}/>
                                <label style={{ fontSize: "large", display: "inline" }}>Notify me about news and offers</label><br />
                                <input
                                    className="checkboxes" 
                                    style={{ margin: ".4rem" }} 
                                    name="terms" 
                                    type="checkbox"
                                    onChange={handleChange}
                                    value={userInfo.terms}
                                    checked={userInfo.terms}/>
                                <label style={{ fontSize: "large", display: "inline" }}>I have read and accept the <a href="" className='login-link'>Terms &amp; Conditions</a> and <a href="" className='login-link'>Privacy Policy</a>.</label>
                            </div>
                        </div>
                    </div>
                    <div className="signup-row shipping">
                        <a href="" className='login-link' style={{ fontSize: "medium", display: "inline" }}>{'<'}&nbsp;Return to cart</a>
                        {/*<button className="shipping-btn">Continue to shipping</button>*/}
                        <Link to="/shipping" type='button' className='shipping-btn'>Continue to shipping</Link>
                    </div>
                </form>
            </div>
            <div className='checkout-col2'>
                <h1>Order Summary:</h1>
                <Cart cartItems={cartItems} countCartItems={cartItems.length} />
            </div>
        </div>
    </>
  )
}
