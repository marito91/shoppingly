import React, { useState, useEffect } from 'react';


// Components
import Men from './Shop/Men'
import Women from './Shop/Women'
import Bag from './Shop/Bag';
import hostbase from './vars.js';


export default function Shop(props) {

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
            alert("Could not load info.");
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
            alert("Could not load info.");
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
            alert("Could not load info.");
        }
      })
  }, []);

  return (
    <>
      <Men onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      <Women onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      <Bag onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
    </>
  )
}
