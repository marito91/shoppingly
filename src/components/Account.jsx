import React, { useState, useEffect } from 'react';
import { auth } from '../authentication/auth';
import hostbase from './vars.js';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


import Login from './Login';

// CSS
import '../static/css/Main.css';
import '../static/css/Home.css';

export default function Account(props) {

    const { user, handleCredentials, error, login, logout, getData } = props;

    const data = getData();

    const [listado, setListado] = useState([]);

    useEffect(()=>{
        fetch(`${hostbase}/orders/recent_orders/${data[2]}`,{
            method:"GET"
        }).then(res => res.json()) // Se guardan los datos en la variables, en este caso, convertidos a json
        .then(res => { // Se capturan los datos 
            if (res.status === "ok"){
                setListado(res.orders);
            }              
        })
    }, []);

    


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
                                        <label style={{ display:"inline" }}>{" " + data[0] + " " + data[1]}</label>        
                                    </div>
                                </div>
                                <hr className='division' />
                                <div className='shipping-row'>
                                    <div className='shipping-col-1'>
                                        <label>Email :</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <label style={{ display:"inline" }}>{" " + data[2]}</label>        
                                    </div>
                                </div>
                                <hr className='division' />
                                <div className='shipping-row'>
                                    <div className='shipping-col-1'>
                                        <label>Document :</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <label style={{ display:"inline" }}>{" " + data[6]}</label>        
                                    </div>
                                </div>
                                <hr className='division' />
                                <div className='shipping-row'>
                                    <div className='shipping-col-1'>
                                        <label>Birthdate :</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <label style={{ display:"inline" }}>{" " + data[7]}</label>        
                                    </div>
                                </div>
                                <hr className='division' />
                                <div className='shipping-row'>
                                <div className='shipping-col-1'>
                                        <label>Phone Number :</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <label style={{ display:"inline" }}>{" " + data[8]}</label>        
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
                                        <label style={{ display:"inline" }}>{" " + data[3]}</label>        
                                    </div>
                                </div>
                                <hr className='division' />
                                <div className='shipping-row'>
                                    <div className='shipping-col-1'>
                                        <label>City :</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <label style={{ display:"inline" }}>{" " + data[4]}</label>        
                                    </div>
                                </div>
                                <hr className='division' />
                                <div className='shipping-row'>
                                    <div className='shipping-col-1'>
                                        <label>Country :</label><label id='spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <label style={{ display:"inline" }}>{" " + data[5]}</label>        
                                    </div>
                                    <div className='shipping-col-2'>
                                        <a href="" className='login-link'>Change</a>           
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='account-col2'>
                            <h2 className="main-font title"><strong>Order history</strong></h2>
                            <div className="order-history" style={{ display: 'flex', rowGap: "0.5rem", columnGap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                                {listado.map(({ _id, name, email, address, date, express, guide, products, status }) => 
                                    <Card key={_id} style={{ width: '18rem' }}>
                                        {/*<Card.Img variant="top" src={web} />*/}
                                        <Card.Body>
                                            <Card.Title>{guide}</Card.Title>
                                            <Card.Text>
                                                <p style={{ fontSize: 'medium' }}>Shipped to: {address}</p>
                                                <p style={{ fontSize: 'medium' }}>Date created: {date}</p>
                                                <p style={{ fontSize: 'medium' }}>Current status: {status}</p>
                                            </Card.Text>
                                            <Button variant='outline-dark' className='order-btn'>See more</Button>
                                        </Card.Body>
                                    </Card>)}
                            </div>
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
