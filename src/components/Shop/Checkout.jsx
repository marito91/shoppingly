import React, { useState } from 'react';

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

    const { cartItems, onAdd, onRemove, countCartItems } = props;

    const [information, setInformation] = useState({
        firstName : "",
        lastName : "",
        email : "",
        date : "",
        offers: false,
        ideas: false,
        nation: false
    })

    const handleChange = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setInformation({
            ...information, [event.target.name] : value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(information)
        alert("Thank you for subscribing! Welcome to the club!")
    }

  return (
      
    <>
        <div className='row'>
            <div className='checkout-col'>
                <div className="form-container main-font">
                    <h1 style={{ textAlign: "center" }}><strong>Join our crew!</strong></h1>
                    <h3 style={{ textAlign: "center" }}>Free exclusive content for you to enjoy by signing up.</h3>
                    <form className="signup" onSubmit={handleSubmit}>
                        <div className="signup-row">
                            <div className="signup-column" style={{ maxWidth: "100%"}}>
                                <strong>First Name</strong><br />
                                <input 
                                    className="signup-inputs" 
                                    id="name-input" 
                                    type="text" 
                                    name="firstName"
                                    placeholder="Your first name"
                                    value={information.firstName} 
                                    onChange={handleChange} 
                                    required/>
                            </div>
                            <div className="signup-column">
                                <strong>Last Name</strong><br />
                                <input 
                                    className="signup-inputs" 
                                    type="text" 
                                    name="lastName" 
                                    placeholder="Your last name" 
                                    value={information.lastName} 
                                    onChange={handleChange} 
                                    required/>
                            </div>
                        </div>
                        <div className="signup-row">
                            <strong>Email</strong><br />
                            <input 
                                className="signup-inputs" 
                                type="text" 
                                name="email"
                                placeholder="Email address"  
                                value={information.email} 
                                onChange={handleChange} 
                                required/>
                        </div>
                        <div className="signup-row">
                            <strong>Date of birth</strong><br />
                            <input 
                                className="signup-inputs" 
                                type="date" 
                                name="date"
                                value={information.date} 
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
                                    checked={information.offers}/>
                                <label className="check-labels">Exclusive offers</label><br />
                                <input 
                                    className="checkboxes" 
                                    style={{ margin: ".4rem" }} 
                                    name="ideas" 
                                    type="checkbox"
                                    onChange={handleChange}
                                    checked={information.ideas}/>
                                <label className="check-labels">Sets ideas</label><br />
                                <input 
                                    className="checkboxes" 
                                    style={{ margin: ".4rem" }} 
                                    name="nation" 
                                    type="checkbox"
                                    onChange={handleChange}
                                    checked={information.nation}/>
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
            <div className='checkout-col'>
                <h1>Hello</h1>
                <Cart cartItems={cartItems} countCartItems={cartItems.length} />
            </div>
        </div>
    </>
  )
}
