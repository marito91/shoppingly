import React, { useState, useEffect } from 'react'

// CSS
import '../static/css/Main.css';
import '../static/css/Home.css';

export default function Signup(props) {

    const { userInfo, handleChange, handleChangeCheckbox, submitNewUser } = props;


    const [countries, setCountries] = useState([]);

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
            <div className='header-background'/> 
            <h2 className="main-font title" style={{ marginTop: "2rem", marginBottom: "2rem", paddingTop: "2rem" }}>Be part of <strong className="logoFont">Shoppingly</strong> and get exclusive deals</h2>
            <form className="signup" onSubmit={submitNewUser}>
                <div className="signup-row">
                    <div className="signup-column" style={{ maxWidth: "100%"}}>
                        <strong>First Name</strong><br />
                        <input 
                            className="signup-inputs" 
                            id="name-input" 
                            type="text" 
                            name="firstName"
                            placeholder="Your first name"
                            value={userInfo.firstName} 
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
                            value={userInfo.lastName} 
                            onChange={handleChange} 
                            required/>
                    </div>
                </div>
                <div className="signup-row">
                    <div className="signup-column" style={{ maxWidth: "100%"}}>
                        <strong>Date of birth</strong><br />
                        <input 
                            className="signup-inputs" 
                            type="date" 
                            name="date"
                            id="name-input"
                            value={userInfo.date}  
                            onChange={handleChange} 
                            required/>
                    </div>
                    <div className="signup-column">
                        <strong>Email</strong><br />
                        <input 
                            className="signup-inputs" 
                            type="text" 
                            name="email"
                            placeholder="Your email address"  
                            value={userInfo.email}  
                            onChange={handleChange} 
                            required/>
                    </div>
                </div>
                <div className="signup-row">
                    <div className="signup-column" style={{ maxWidth: "100%"}}>
                        <strong>Document</strong><br />
                        <input 
                            className="signup-inputs" 
                            type="text" 
                            name="document"
                            placeholder="Your id"
                            id="name-input"  
                            value={userInfo.document} 
                            onChange={handleChange} 
                            required/>
                    </div>
                    <div className="signup-column">
                        <strong>Phone Number</strong><br />
                        <input 
                            className="signup-inputs" 
                            type="text" 
                            name="phone" 
                            placeholder="Phone Number" 
                            value={userInfo.phone} 
                            onChange={handleChange} 
                            required/>
                    </div>
                </div>
                <div className="signup-row">
                    <div className="signup-column" style={{ maxWidth: "100%"}}>
                        <strong>Country/Region</strong><br />
                        <select
                            className="signup-inputs"
                            type="select" 
                            autoComplete="off" 
                            autoFocus required  
                            name="country" 
                            id="name-input"
                            onChange={handleChange}
                            value={userInfo.country}
                            style={{ paddingTop: "1.3rem" }}>
                                <option value="">&nbsp;</option>
                                {countryList.map(country => <option>{country}</option>)}
                        </select>
                    </div>
                    <div className="signup-column">
                        <strong>City</strong><br />
                        <input 
                            className="signup-inputs" 
                            type="text" 
                            name="city" 
                            placeholder="" 
                            value={userInfo.city} 
                            onChange={handleChange} 
                            required/>
                    </div>
                </div>
                <div className="signup-row">
                    <strong>Address</strong><br />
                    <input 
                        className="signup-inputs" 
                        type="text" 
                        name="address"
                        placeholder="Your address"  
                        value={userInfo.address}  
                        onChange={handleChange} 
                        required/>
                </div>
                <div className="signup-row">
                    <strong>Password</strong><br />
                    <input 
                        className="signup-inputs" 
                        type="text" 
                        name="password" 
                        placeholder="Min. 8 characters" 
                        value={userInfo.password} 
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
                            onChange={handleChangeCheckbox}
                            value={userInfo.offers}
                            checked={userInfo.offers}/>
                        <label className="check-labels">Exclusive offers</label><br />
                        <input 
                            className="checkboxes" 
                            style={{ margin: ".4rem" }} 
                            name="ideas" 
                            type="checkbox"
                            onChange={handleChangeCheckbox}
                            value={userInfo.ideas}
                            checked={userInfo.ideas}/>
                        <label className="check-labels">Sets ideas</label><br />
                        <input 
                            className="checkboxes" 
                            style={{ margin: ".4rem" }} 
                            name="nation" 
                            type="checkbox"
                            onChange={handleChangeCheckbox}
                            value={userInfo.nation}
                            checked={userInfo.nation}/>
                        <label className="check-labels">Shoppingly nation</label>
                </div>
                <div className="signup-row" id='btn-row'>
                    <button className="signup-btn"><h3><strong>Sign Up</strong></h3></button>
                </div>
                <div className="signup-row" style={{ display: "flex" }}>
                    <input className="checkboxes" style={{ margin: ".4rem" }} name="policy" type="checkbox" required/>
                    <label className="check-labels">By entering your data you agree with our Privacy Policy.*</label><br />
                </div>
            </form>
        </>
    )
}
