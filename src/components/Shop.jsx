import { React, useState } from 'react';

// Components
import Men from './Shop/Men'
import Bag from './Shop/Bag';

export default function Shop() {

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const productExists = cartItems.find(item => item.id === product.id);
    if (productExists) {
      setCartItems(cartItems.map(item => item.id === product.id ? {...productExists, qty: productExists.qty + 1} : item 
        )
      );
    } else {
      setCartItems([...cartItems, {...product, qty : 1}])
    }
  }

  return (
    <>
        <Men />
        <Bag cartItems={cartItems} />   
    </>
  )
}
