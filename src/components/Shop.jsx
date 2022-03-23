import { React, useState } from 'react';


// Components
import Header from '../components/Header';
import Men from './Shop/Men'
import Women from './Shop/Women'
import Bag from './Shop/Bag';
import Footer from '../components/Footer';


export default function Shop(props) {

  const { cartItems, onAdd, onRemove } = props;

  return (
    <>
      <Header onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} countCartItems={cartItems.length} />
      <Men onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      <Women onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      <Bag onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      <Footer />
    </>
  )
}
