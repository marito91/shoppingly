// Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";


// Components
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Shop/Checkout';
import Shipping from './components/Shop/Shipping';
import Cart from './components/Shop/Cart';




function App() {  

  const [cartItems, setCartItems] = useState([]);

  const [userInfo, setUserInfo] = useState({
    firstName : "",
    lastName : "",
    email : "",
    phone: "",
    country : "",
    city : "",
    address : "",
    apt : "",
    postalCode : "",
    tracking: false,
    offers: false,
    terms: false,
    standard: false,
    express: false
  })

  // This is not practical but it is a temporary solution. It should also be removed from the component
  const handleStandard = event => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setUserInfo({
        ...userInfo, [event.target.name] : value, express : false
    })
  }
  // This is not practical but it is a temporary solution. It should also be removed from the component
  const handleExpress = event => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setUserInfo({
        ...userInfo, [event.target.name] : value, standard : false
    })/*
    setCartItems({
      ...cartItems, shippingValue : shippingValue + 20
    })*/
  }

  const handleChange = event => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setUserInfo({
        ...userInfo, [event.target.name] : value
    })
  }
  
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
      <BrowserRouter>
        <Routes>

          {/* Home route, receives cart items so that the Header offcanvas works */}
          <Route 
            path="/" 
            element={<Home 
              onAdd={onAdd} 
              onRemove={onRemove} 
              cartItems={cartItems} 
              countCartItems={cartItems.length} />} />

          {/* Shopping route for men, receives cart items and basic functions so that data can be manipulated */}
          <Route 
            path="/shop/men/" 
            element={<Shop 
              onAdd={onAdd} 
              onRemove={onRemove} 
              cartItems={cartItems} 
              countCartItems={cartItems.length} />} />

          {/*<Route path="/shop/women" element={<Shop />} />
          <Route path="/shop/kids" element={<Shop />} />*/}

          {/* Checkout route, receives cart items so that the products transfer to the final steps */}
          <Route 
            path="/checkout" 
            element={<Checkout 
              onAdd={onAdd} 
              onRemove={onRemove} 
              cartItems={cartItems} 
              countCartItems={cartItems.length} 
              userInfo={userInfo} 
              handleChange={handleChange} />} />
          <Route 
            path="/shipping" 
            element={<Shipping 
              onAdd={onAdd} 
              onRemove={onRemove} 
              cartItems={cartItems} 
              countCartItems={cartItems.length} 
              userInfo={userInfo} 
              handleChange={handleChange}
              handleExpress={handleExpress}
              handleStandard={handleStandard} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
