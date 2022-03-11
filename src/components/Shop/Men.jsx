import React, { useState, useEffect } from 'react';

// Libraries
//import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Shopping.css';
import hostbase from '../vars.js';

// Components
import Product from '../Shop/Product';


export default function Men(props) {

    const { cartItems, product, onAdd, onRemove } = props;
    const [shirts, setShirts] = useState([]);
    const [pants, setPants] = useState([]);

    // Fetches shirts for men
    useEffect(() => {
        fetch(`${hostbase}/shop/men/shirts`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setShirts(res.mensShirtsCatalogue)
                //console.log(res.mensShirtsCatalogue)
            } else {
                alert("Could not load info.");
            }
        })
    }, []);

    // Fetches Pants for men
    useEffect(() => {
        fetch(`${hostbase}/shop/men/pants`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setPants(res.mensPantsCatalogue)
            } else {
                alert("Could not load info.");
            }
        })
    }, []);


  return (
      <> 
        <h1 className="main-font section">Men's Shirts</h1>
        <div className="shopping main-font">
            {shirts.map(product => (
                <Product key={product.id} product={product} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
            ))}
        </div>
        <h1 className="main-font section">Men's Pants</h1>
        <div className="shopping main-font">
            {/*pants.map(product => (
                <Product key={product.id} product={product} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
            ))*/}
        </div>

    </>
  )
}
