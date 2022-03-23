// Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";


// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import Men from './components/Shop/Men';
import Women from './components/Shop/Women';
import Kids from './components/Shop/Kids';
import Checkout from './components/Shop/Checkout';
import Shipping from './components/Shop/Shipping';
import Payment from './components/Shop/Payment';



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
    express: false,
    method: ""
  })

  /*
  const itemPrice = cartItems.reduce((accumulator, item) => accumulator + (item.price * item.qty), 0);
  const taxValue = itemPrice * 0.07;
  const shippingValue = itemPrice > 250 ? 0 : 25;
  const total = itemPrice + taxValue + shippingValue;
  */


  // This is not practical but it is a temporary solution. It should also be removed from the component
  const handleStandard = event => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setUserInfo({
        ...userInfo, [event.target.name] : value, express : false, method : "Standard shipping: 6 to 9 business days"
    })
  }

  // This is not practical but it is a temporary solution. It should also be removed from the component
  const handleExpress = event => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setUserInfo({
        ...userInfo, [event.target.name] : value, standard : false, method : "Express shipping: 3 business days"
    })/*
    setCartItems({
        ...cartItems, [event.target.name] : value, shippingValue : shippingValue + 20
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
        <Header onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} countCartItems={cartItems.length} /> 
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
            path="/shop" 
            element={<Shop 
              onAdd={onAdd} 
              onRemove={onRemove} 
              cartItems={cartItems} 
              countCartItems={cartItems.length} />} />

          {/* Shopping route for men, receives cart items and basic functions so that data can be manipulated */}
          <Route 
            path="/shop/men" 
            element={<Men 
              onAdd={onAdd} 
              onRemove={onRemove} 
              cartItems={cartItems} 
              countCartItems={cartItems.length} />} />

          {/* Shopping route for women, receives cart items and basic functions so that data can be manipulated */}
          <Route 
            path="/shop/women" 
            element={<Women 
              onAdd={onAdd} 
              onRemove={onRemove} 
              cartItems={cartItems} 
              countCartItems={cartItems.length}
              userInfo={userInfo} 
              handleChange={handleChange} />} />

          {/* Shopping route for women, receives cart items and basic functions so that data can be manipulated */}
          <Route 
            path="/shop/kids" 
            element={<Kids 
              onAdd={onAdd} 
              onRemove={onRemove} 
              cartItems={cartItems} 
              countCartItems={cartItems.length}
              userInfo={userInfo} 
              handleChange={handleChange} />} />

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

          <Route 
            path="/payment" 
            element={<Payment 
              onAdd={onAdd} 
              onRemove={onRemove} 
              cartItems={cartItems} 
              countCartItems={cartItems.length} 
              userInfo={userInfo} 
              handleChange={handleChange}
              handleExpress={handleExpress}
              handleStandard={handleStandard} />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
