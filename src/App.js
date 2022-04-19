// Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import hostbase from './components/vars';


// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import Login from './components/Login';
import Signup from './components/Signup';
import Men from './components/Shop/Men';
import Women from './components/Shop/Women';
import Kids from './components/Shop/Kids';
import Checkout from './components/Shop/Checkout';
import Shipping from './components/Shop/Shipping';
import Payment from './components/Shop/Payment';



function App() {  

  const [cartItems, setCartItems] = useState([]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [userInfo, setUserInfo] = useState({
    firstName : "",
    lastName : "",
    document : "",
    email : "",
    date : "",
    country : "",
    city : "",
    address : "",
    phone : "",
    password : "",
    offers: false,
    ideas: false,
    nation: false
  });

  const handleCredentials = event => {
    const name = event.target.name;
    const value = event.target.value;
    setUser(user => ({...user, [name]: value}))
  }

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInfo(userInfo => ({...userInfo, [name]: value}))
  }

  const handleChangeCheckbox = event => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setUserInfo({
        ...userInfo, [event.target.name] : value
    })
  }

  // Function for submitting new users, it is used in the Signup component.
  const submitNewUser = event => {
    event.preventDefault();
    fetch(`${hostbase}/users/newUsers`, {
      headers:{ "content-type" : "application/json" },
      method:"POST",
      body: JSON.stringify({userInfo})
        }).then(res => res.json())
          .then(res => {
              console.log(res.msg)
              alert(res.msg)
      });
      setUserInfo({
        firstName : "",
        lastName : "",
        document : "",
        email : "",
        date : "",
        country : "",
        city : "",
        address : "",
        phone : "",
        password : "",
        offers: false,
        ideas: false,
        nation: false
      })
  }

  // Function for submitting newsletter users, it is used in the Home component.
  const submitNewsletter = event => {
    event.preventDefault();
    fetch(`${hostbase}/users/newsletter`, {
      headers:{ "content-type" : "application/json" },
      method:"POST",
      body: JSON.stringify({userInfo})
        }).then(res => res.json())
          .then(res => {
              console.log(res.msg)
              alert(res.msg)
      });
    setUserInfo({
      firstName : "",
      lastName : "",
      document : "",
      email : "",
      date : "",
      country : "",
      city : "",
      address : "",
      phone : "",
      password : "",
      offers: false,
      ideas: false,
      nation: false
    })
  }
  
  // Function for adding products to cart. First it checks if the product exists, and if it does it adds 1 to the quantity. If not, then it adds the new product to the list.
  const onAdd = (product) => {
    const productExists = cartItems.find(item => item._id === product._id);
    if (productExists) {
      setCartItems(cartItems.map(item => item._id === product._id ? {...productExists, qty: productExists.qty + 1} : item 
        )
      );
    } else {
      setCartItems([...cartItems, {...product, qty : 1}])
    }
  }

  // Function for removing products from the cart. It checks first if the product exists in the list. If so, it removes it from the list (filter) if there is only one. 
  // If there is more than one, then it subtracts one from the quantity.
  const onRemove = (product) => {
    const productExists = cartItems.find(item => item._id === product._id);
    if (productExists.qty === 1) {
      setCartItems(cartItems.filter((item) => item._id !== product._id ));
    } else {
      setCartItems(cartItems.map(item => item._id === product._id ? {...productExists, qty: productExists.qty - 1} : item 
        )
      );
    }
  }

  // Function for logging in. Checks if the data input from the user is correct in the backend server by fetching.
  const login = event => {
    event.preventDefault();
    fetch(`${hostbase}/users/login`, {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({ user })
    }).then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                {
                    localStorage.setItem("token", res.token);
                    window.location.href = res.url;
                }
            } else {
                alert(res.msg);
            }
        })
  }


  return (
    <>
      <BrowserRouter>

        <Header onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} countCartItems={cartItems.length} /> 
        
        <Routes>
          {/* Home route */}
          <Route 
            path="/" 
            element={<Home
              userInfo={userInfo} 
              handleChange={handleChange}
              handleChangeCheckbox={handleChangeCheckbox}
              submitNewsletter={submitNewsletter} />} />

          {/* Signup route */}
          <Route 
            path="/login" 
            element={<Login
              user={user} 
              handleCredentials={handleCredentials}
              login={login} />} />


          {/* Signup route */}
          <Route 
            path="/signup" 
            element={<Signup
              userInfo={userInfo} 
              handleChange={handleChange}
              handleChangeCheckbox={handleChangeCheckbox}
              submitNewUser={submitNewUser} />} />

          {/* Shopping route for all products, receives cart items and basic functions so that data can be manipulated */}
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
              handleChange={handleChange} />} />

          {/* Shopping route for kids, receives cart items and basic functions so that data can be manipulated */}
          <Route 
            path="/shop/kids" 
            element={<Kids 
              onAdd={onAdd} 
              onRemove={onRemove} 
              cartItems={cartItems} 
              countCartItems={cartItems.length}
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
              handleChange={handleChange} />} /> 

          <Route 
            path="/payment" 
            element={<Payment 
              onAdd={onAdd} 
              onRemove={onRemove} 
              cartItems={cartItems} 
              countCartItems={cartItems.length} 
              userInfo={userInfo} 
              handleChange={handleChange} />} /> 

        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
