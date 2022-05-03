import React, { useState, useEffect } from 'react';
import { auth } from '../authentication/auth';
import jwtDecode from "jwt-decode";


import Login from './Login';

// CSS
import '../static/css/Main.css';
import '../static/css/Home.css';

export default function Account(props) {

    const { user, handleCredentials, error, login, logout, getData } = props;

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

    return (
        <>
            { auth() ?
                <>
                    <div className='header-background'/> 
                    <h2 className="main-font title" style={{ marginTop: "2rem", marginBottom: "2rem", paddingTop: "2rem" }}><strong>{data[0]}'s Account</strong></h2>
                    <div className="signup-row" style={{ marginTop: "2rem" }} id="btn-row">
                        {/*<button className="signup-btn" onClick={logout}>Log out</button>*/}
                        <a href="" className='login-link' style={{ fontSize: "x-large" }} onClick={logout}>Log out</a>   
                    </div>
                    <div className='row main-font' style={{ marginBottom: "2rem" }}>
                        <div className='account-col1'>
                            <h2 className="main-font title" style={{ marginBottom: "2rem" }}><strong>Account details</strong></h2>
                            <div className='contact-info-shipping'>
                                <strong><p>Basic information</p></strong>
                            </div>
                            <div className='shipping-container'>
                                <div className='shipping-row'>
                                    <div className='shipping-col-1'>
                                        <label>Name :</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <label style={{ display:"inline" }}>{data[0] + " " + data[1]}</label>        
                                    </div>
                                </div>
                                <hr className='division' />
                                <div className='shipping-row'>
                                    <div className='shipping-col-1'>
                                        <label>Email :</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <label style={{ display:"inline" }}>{data[2]}</label>        
                                    </div>
                                </div>
                                <hr className='division' />
                                <div className='shipping-row'>
                                    <div className='shipping-col-1'>
                                        <label>Document :</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <label style={{ display:"inline" }}>{data[6]}</label>        
                                    </div>
                                </div>
                                <hr className='division' />
                                <div className='shipping-row'>
                                    <div className='shipping-col-1'>
                                        <label>Birthdate :</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <label style={{ display:"inline" }}>{data[7]}</label>        
                                    </div>
                                </div>
                                <hr className='division' />
                                <div className='shipping-row'>
                                <div className='shipping-col-1'>
                                        <label>Phone Number :</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <label style={{ display:"inline" }}>{data[8]}</label>        
                                    </div>
                                    <div className='shipping-col-2'>
                                        <a href="" className='login-link'>Change</a>           
                                    </div>
                                </div>
                            </div>
                            <div className='contact-info-shipping'>
                                <strong><p>Addresses and Shipping</p></strong>
                            </div>
                            <div className='shipping-container'>
                                <div className='shipping-row'>
                                    <div className='shipping-col-1'>
                                        <label>Address :</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <label style={{ display:"inline" }}>{data[3]}</label>        
                                    </div>
                                </div>
                                <hr className='division' />
                                <div className='shipping-row'>
                                    <div className='shipping-col-1'>
                                        <label>City :</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <label style={{ display:"inline" }}>{data[4]}</label>        
                                    </div>
                                </div>
                                <hr className='division' />
                                <div className='shipping-row'>
                                    <div className='shipping-col-1'>
                                        <label>Country :</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <label style={{ display:"inline" }}>{data[5]}</label>        
                                    </div>
                                    <div className='shipping-col-2'>
                                        <a href="" className='login-link'>Change</a>           
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='account-col2'>
                            <h2 className="main-font title"><strong>Order history</strong></h2>
                        </div>
                    </div>
                </>
                : <Login 
                    user={user} 
                    handleCredentials={handleCredentials}
                    error={error}
                    login={login}
                    />
            }
        </>
    )
}
