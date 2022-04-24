import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../static/css/Main.css';
import '../static/css/Home.css';

export default function Login(props) {

    const { user, handleCredentials, login, error } = props;


    return (
        <>
            <div className='header-background'/> 
            <h2 className="main-font title" style={{ marginTop: "2rem", marginBottom: "2rem", paddingTop: "2rem" }}><strong>Login</strong></h2>
            <form className="signup" style={{ marginLeft: "6rem", marginRight: "6rem"}} onSubmit={login}>
                <h6>{error}</h6>
                <div className="signup-row">
                    <strong>Email</strong><br />
                    <input 
                        className="signup-inputs" 
                        type="text" 
                        name="email"
                        placeholder=""  
                        value={user.email}  
                        onChange={handleCredentials} 
                        required/>
                </div>
                <div className="signup-row">
                    <strong>Password</strong><br />
                    <input 
                        className="signup-inputs" 
                        type="password" 
                        name="password" 
                        placeholder="" 
                        value={user.password} 
                        onChange={handleCredentials} 
                        required/>
                </div>
                <div className="signup-row" style={{ textAlign: "center" }}>
                    <a href="" className='forget'>Forgot your password?</a>
                </div>
                <div className="signup-row" id="btn-row">
                    <button className="signup-btn"><h3><strong>Sign In</strong></h3></button>
                </div>
                <div className="signup-row" style={{ textAlign: "center" }}>
                    <Link to="/signup" className='forget'>Create an account</Link>
                </div>
            </form>
        </>
    )
}
