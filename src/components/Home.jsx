import React from 'react';
import { useState } from 'react';
// Components
import Banner from './Home/Banner'
import Promo from './Home/Promo'
import Sections from './Home/Sections'
import Information from './Home/Information'
import Signup from './Home/Signup'
import Header from './Header'
import Footer from './Footer'

export default function Home(props) {

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
    
  return (
        <>
            <Header onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} countCartItems={cartItems.length}  />
            <Promo />
            <Banner />
            <Sections />
            <Information />
            <Signup />
            <Footer />
        </>
    )
}
