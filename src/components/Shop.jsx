import { React, useState } from 'react';

// Components
import Header from '../components/Header';
import Men from './Shop/Men'
import Bag from './Shop/Bag';

export default function Shop(props) {

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

  const onRemove = (product) => {
    const productExists = cartItems.find(item => item.id === product.id);
    if (productExists.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id ));
    } else {
      setCartItems(cartItems.map(item => item.id === product.id ? {...productExists, qty: productExists.qty - 1} : item 
        )
      );
    }
  }

  //const { cartItems, onAdd } = props;

  return (
    <>
      <Header onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} countCartItems={cartItems.length} />
      <Men onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      <Bag onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />   
    </>
  )
}
