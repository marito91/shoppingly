import React from 'react';


// Components
import Men from './Shop/Men'
import Women from './Shop/Women'
import Bag from './Shop/Bag';


export default function Shop(props) {

  const { cartItems, onAdd, onRemove } = props;

  return (
    <>
      <Men onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      <Women onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      <Bag onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
    </>
  )
}
