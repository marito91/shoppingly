import React, { useState, useEffect } from 'react';

// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Shopping.css';
import hostbase from '../vars.js';

// Components
import Product from './Product';
import Bag from './Bag';


export default function Kids(props) {

    const { cartItems, onAdd, onRemove } = props;
    const [shirts, setShirts] = useState([]);
    const [pants, setPants] = useState([]);
    const [shoes, setShoes] = useState([]);

    // Fetches shirts for Kids
    useEffect(() => {
        fetch(`${hostbase}/shop/kids/shirts`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setShirts(res.kidsShirtsCatalogue)
            } else {
                console.log("Could not load products.");
            }
        })
    }, []);

    // Fetches pants for Kids
    useEffect(() => {
        fetch(`${hostbase}/shop/kids/pants`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setPants(res.kidsPantsCatalogue)
            } else {
                console.log("Could not load products.");
            }
        })
    }, []);

    // Fetches shoes for Kids
    useEffect(() => {
        fetch(`${hostbase}/shop/kids/shoes`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setShoes(res.kidsShoesCatalogue)
            } else {
                console.log("Could not load products.");
            }
        })
    }, []);

  return (
      <> 
        <h1 className="main-font section">Kids' Shirts</h1>
        <div className="shopping main-font">
            {shirts.map(product => (
                <Product key={product.id} 
                    product={product} 
                    onAdd={onAdd} 
                    onRemove={onRemove} 
                    cartItems={cartItems} />
            ))}
        </div>
        <h1 className="main-font section-2">Kids' Long Clothes</h1>
        <div className="shopping main-font">
            {pants.map(product => (
                <Product key={product.id} 
                    product={product} 
                    onAdd={onAdd} 
                    onRemove={onRemove} 
                    cartItems={cartItems} />
            ))}
        </div>         
        <h1 className="main-font section-2">Kids' Shoes</h1>
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
