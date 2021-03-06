import React, { useState, useEffect } from 'react';

// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Shopping.css';
import hostbase from '../vars.js';

// Components
import Product from './Product';
import Bag from '../Shop/Bag';


export default function Women(props) {

    const { cartItems, onAdd, onRemove } = props;
    const [shirts, setShirts] = useState([]);
    const [pants, setPants] = useState([]);
    const [shoes, setShoes] = useState([]);
    const [dresses, setDresses] = useState([]);

    // Fetches shirts for women
    useEffect(() => {
        fetch(`${hostbase}/shop/women/shirts`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setShirts(res.womensShirtsCatalogue)
            } else {
                console.log("Could not load products.");
            }
        })
    }, []);

    // Fetches pants for women
    useEffect(() => {
        fetch(`${hostbase}/shop/women/pants`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setPants(res.womensPantsCatalogue)
            } else {
                console.log("Could not load products.");
            }
        })
    }, []);

    // Fetches Dresses for women
    useEffect(() => {
        fetch(`${hostbase}/shop/women/dresses`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setDresses(res.womensDressesCatalogue)
            } else {
                console.log("Could not load products.");
            }
        })
    }, []);

    // Fetches Shoes for women
    useEffect(() => {
        fetch(`${hostbase}/shop/women/shoes`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setShoes(res.womensShoesCatalogue)
            } else {
                console.log("Could not load products.");
            }
        })
    }, []);


  return (
      <> 
        <h1 className="main-font section">Women's Shirts</h1>
        <div className="shopping main-font">
            {shirts.map(product => (
                <Product key={product.id} 
                    product={product} 
                    onAdd={onAdd} 
                    onRemove={onRemove} 
                    cartItems={cartItems} />
            ))}
        </div>
        <h1 className="main-font section-2">Women's Pants</h1>
        <div className="shopping main-font">
            {pants.map(product => (
                <Product key={product.id} 
                    product={product} 
                    onAdd={onAdd} 
                    onRemove={onRemove} 
                    cartItems={cartItems} />
            ))}
        </div>       
        <h1 className="main-font section-2">Women's Dresses</h1>
        <div className="shopping main-font">
            {dresses.map(product => (
                <Product key={product.id} 
                    product={product} 
                    onAdd={onAdd} 
                    onRemove={onRemove} 
                    cartItems={cartItems} />
            ))}
        </div>      
        <h1 className="main-font section-2">Women's Shoes</h1>
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
