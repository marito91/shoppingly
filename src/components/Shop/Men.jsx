import React, { useState, useEffect } from 'react';

// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Shopping.css';

import hostbase from '../vars.js';

// Components
import Product from './Product';
import Bag from '../Shop/Bag';


export default function Men(props) {

    const { cartItems, onAdd, onRemove } = props;
    const [shirts, setShirts] = useState([]);
    const [pants, setPants] = useState([]);
    const [shoes, setShoes] = useState([]);

    // Fetches shirts for men
    useEffect(() => {
        fetch(`${hostbase}/shop/men/shirts`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setShirts(res.mensShirtsCatalogue)
            } else {
                console.log("Could not load products.");
            }
        })
    }, []);

    // Fetches pants for men
    useEffect(() => {
        fetch(`${hostbase}/shop/men/pants`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setPants(res.mensPantsCatalogue)
            } else {
                console.log("Could not load products.");
            }
        })
    }, []);

    // Fetches shoes for men
    useEffect(() => {
        fetch(`${hostbase}/shop/men/shoes`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setShoes(res.mensShoesCatalogue)
            } else {
                console.log("Could not load products.");
            }
        })
    }, []);


  return (
      <> 
        <h1 className="main-font section">Men's Shirts</h1>
        <div className="shopping main-font">
            {shirts.map(product => (
                <Product key={product.id} 
                    product={product} 
                    onAdd={onAdd} 
                    onRemove={onRemove} 
                    cartItems={cartItems} />
            ))}
        </div>
        <h1 className="main-font section-2">Men's Pants</h1>
        <div className="shopping main-font">
            {pants.map(product => (
                <Product key={product.id} 
                    product={product} 
                    onAdd={onAdd} 
                    onRemove={onRemove} 
                    cartItems={cartItems} />
            ))}
        </div>
        <h1 className="main-font section-2">Men's Shoes</h1>
        <div className="shopping main-font">
            {shoes.map(product => (
                <Product key={product.id} 
                    product={product} 
                    onAdd={onAdd} 
                    onRemove={onRemove} 
                    cartItems={cartItems} />
            ))}
        </div>
        <Bag onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
    </>
  )
}
