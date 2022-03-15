import React, { useState, useEffect } from 'react';

// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Checkout.css';
import hostbase from '../vars.js';

// Components
import Bag from './Bag';
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

    const { cartItems } = props;

    const [countries, setCountries] = useState([]);

    const [info, setInfo] = useState({
        firstName : "",
        lastName : "",
        email : "",
        country : "",
        date : "",
        offers: false,
        ideas: false,
        nation: false
    })

    const handleChange = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setInfo({
            ...info, [event.target.name] : value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(info)
        alert("Thank you for subscribing! Welcome to the club!")
    }

    // Fetches Countries 
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setCountries(res)
                //console.log(res.mensShirtsCatalogue)
            } else {
                setCountries(res)
                //alert("Could not load info.");
            }
        })
    }, []);

    //https://restcountries.com/v3.1/all

  return (
      
    <>
        <div className='row'>
            <div className='checkout-col1'>
                <div className="form-container main-font">
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
                    <form className="" onSubmit={handleSubmit}>
                        <div className='contact-info'>
                            <strong><p>Contact Information</p></strong><p>Already have an account?&nbsp;<a href="" className='login-link'>Log in</a></p>
                        </div>
                        <div className="signup-row">
                            <div style={{ maxWidth: "100%"}}>
                                <div className='floating-label-group'>
                                    <input 
                                        type="text" 
                                        autocomplete="off" 
                                        autofocus required 
                                        className="signup-inputs"
                                        name='email'
                                        value={info.email} 
                                        onChange={handleChange} />
                                    <label className="floating-label">Email Address</label>
                                    <input
                                        className="checkboxes" 
                                        style={{ margin: ".4rem" }} 
                                        name="offers" 
                                        type="checkbox"
                                        onChange={handleChange}
                                        checked={info.offers}/>
                                    <label style={{ fontSize: "large" }}>Keep me up to date about my order</label>
                                </div>
                                <div className='contact-info'>
                                    <strong><p>Shipping Address</p></strong>
                                </div>
                                <div className='floating-label-group'>
                                    <select 
                                        type="select" 
                                        autocomplete="off" 
                                        autofocus required 
                                        className="signup-inputs"
                                        name='country'
                                        onChange={handleChange}
                                        style={{ paddingTop: "1.5rem" }}>
                                            {countries.map(country => <option>{country.name.common}</option>)}
                                    </select>
                                    <label className="floating-label">Country/Region</label>
                                </div>
                                <div className='floating-label-group signup-column'>
                                    <input 
                                        type="text" 
                                        autocomplete="off" 
                                        autofocus required 
                                        className="signup-inputs"
                                        name='firstName'
                                        id='name-input'
                                        value={info.firstName} 
                                        onChange={handleChange} />
                                    <label className="floating-label">First Name (optional)</label>
                                </div>
                            </div>
                            <div className="floating-label-group signup-column">
                                <input 
                                    type="text" 
                                    autocomplete="off" 
                                    autofocus required 
                                    className="signup-inputs"
                                    name='lastName'
                                    value={info.lastName} 
                                    onChange={handleChange} />
                                <label className="floating-label">Last Name</label>
                            </div>
                        </div>
                        <div className="signup-row">
                            <strong>Email</strong><br />
                            <input 
                                className="signup-inputs" 
                                type="text" 
                                name="email"
                                placeholder="Email address"  
                                value={info.email} 
                                onChange={handleChange} 
                                required/>
                        </div>
                        <div className="signup-row">
                            <strong>Date of birth</strong><br />
                            <input 
                                className="signup-inputs" 
                                type="date" 
                                name="date"
                                value={info.date} 
                                onChange={handleChange} 
                                required/>
                        </div>
                        <div className="signup-row">
                            <strong>Preferences</strong><br />
                                <input
                                    className="checkboxes" 
                                    style={{ margin: ".4rem" }} 
                                    name="offers" 
                                    type="checkbox"
                                    onChange={handleChange}
                                    checked={info.offers}/>
                                <label className="check-labels">Exclusive offers</label><br />
                                <input 
                                    className="checkboxes" 
                                    style={{ margin: ".4rem" }} 
                                    name="ideas" 
                                    type="checkbox"
                                    onChange={handleChange}
                                    checked={info.ideas}/>
                                <label className="check-labels">Sets ideas</label><br />
                                <input 
                                    className="checkboxes" 
                                    style={{ margin: ".4rem" }} 
                                    name="nation" 
                                    type="checkbox"
                                    onChange={handleChange}
                                    checked={info.nation}/>
                                <label className="check-labels">Shoppingly nation</label>
                        </div>
                        <div className="signup-row">
                            <button className="signup-btn"><h3><strong>Sign Up</strong></h3></button>
                        </div>
                        <div className="signup-row" style={{ display: "flex" }}>
                            <input className="checkboxes" style={{ margin: ".4rem" }} name="policy" type="checkbox" required/>
                            <label className="check-labels">By entering your email address you agree to receive our marketing offers in accordance with our Privacy Policy.*</label><br />
                        </div>
                    </form>
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
