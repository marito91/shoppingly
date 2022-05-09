// Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import hostbase from './components/vars';
import { auth } from './authentication/auth';


// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Account from './components/Account';
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

  let loggedUser = [];

  const [cartItems, setCartItems] = useState([]);

  const [error, setError] = useState("");

  const [pay, setPay] = useState(false);

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

  // State for orders. Date, status and tracking number can be set in backend server. 
  const [order, setOrder] = useState({
    email : "",
    date : "",
    firstName : "",
    lastName : "",
    phone : "",
    country : "",
    city : "",
    postalCode : "",
    address : "",
    apt : "",
    message : "",
    content : [],
    offers : false,
    express : false,
    tracking :false,
    status : "",
    guide : "",
    payment : false
  })

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

  const handleOrder = event => {
    event.preventDefault();
    // Orders need to be handled when user is already logged in. Until now, order state is only updated when checkout form is filled.
    if (event.target.name === "number") {
      event.target.value = event.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    } else if (event.target.name === "expiration") {
      event.target.value = formatString(event.target.value)
    }
    const name = event.target.name;
    const value = event.target.value;
    setOrder(order => ({...order, [name]: value, content: cartItems}))   
  }

  // Function to check Regex of Expiry Date
  function formatString(string) {
      return string.replace(
          /[^0-9]/g, '' // To allow only numbers
      ).replace(
          /^([2-9])$/g, '0$1' // To handle 3 > 03
      ).replace(
          /^(1{1})([3-9]{1})$/g, '0$1/$2' // 13 > 01/3
      ).replace(
          /^0{1,}/g, '0' // To handle 00 > 0
      ).replace(
          /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2' // To handle 113 > 11/3
      );
  }

const handleOrderCheckbox = event => {
  const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
  setOrder(order => ({...order, [event.target.name]: value}))
}

  // Checks if the user wants standard or express shipment and assigns true or false depending on what the user chooses.
  const handleMethod = event => {
    const isExpress = event.target.type === "radio" && event.target.value !== "standard" ? true : false
    setOrder(order => ({...order, express : isExpress}))        
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

  // Function for submitting new orders, it is used in the Checkout component.
  const submitOrder = event => {
    event.preventDefault();
    console.log(order)
    if (pay !== true) {
      alert("Please enter valid credentials")
    } else {
        fetch(`${hostbase}/orders/new_order`, {
        headers:{ "content-type" : "application/json" },
        method:"POST",
        body: JSON.stringify({order})
          }).then(res => res.json())
            .then(res => {
                console.log(res.msg)
                alert(res.msg)
        });
        setOrder({
          email : "",
          date : "",
          firstName : "",
          lastName : "",
          phone : "",
          country : "",
          city : "",
          postalCode : "",
          address : "",
          apt : "",
          message : "",
          content : [],
          offers : false,
          express : false,
          tracking :false,
          status : "",
          guide : "",
          payment : false
        })
        
    }
    
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
                setError("Your email or password is incorrect")
            }
        })
  }

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  // This function extracts the information from the localstorage token and decodes it. Variables are arranged in an array which is instantiated in the component that requires it.
  function getData() {
    let data = [];
    try {
        const token = localStorage.getItem("token")
        const payload = jwtDecode(token);
        const firstName = payload.first;
        const lastName = payload.last;
        const email = payload.email;
        const address = payload.address;
        const city = payload.city;
        const country = payload.country;
        const document = payload.document;
        const phone = payload.phone;
        const birthdate = payload.birthdate;
        data = [firstName, lastName, email, address, city, country, document, birthdate, phone];
        return data
    } catch (error) {
        console.log(error);
    }
    return data;
  }





  return (
    <>
      <BrowserRouter>

        <Header onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} countCartItems={cartItems.length} order={order} /> 
        
        <Routes>
          {/* Home route */}
          <Route 
            path="/" 
            element={<Home
              userInfo={userInfo} 
              handleChange={handleChange}
              handleChangeCheckbox={handleChangeCheckbox}
              submitNewsletter={submitNewsletter} />} />

          {/* Login route */}
          <Route 
            path="/login" 
            element={<Login
              user={user} 
              handleCredentials={handleCredentials}
              error={error}
              login={login} />} />

          {/* Signup route */}
          <Route 
            path="/signup" 
            element={<Signup
              userInfo={userInfo} 
              handleChange={handleChange}
              handleChangeCheckbox={handleChangeCheckbox}
              submitNewUser={submitNewUser} />} />

          {/* Account route */}
          <Route 
            path="/account" 
            element={<Account
              user={user} 
              handleCredentials={handleCredentials}
              error={error}
              login={login}
              logout={logout}
              getData={getData} />} />

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
              countCartItems={cartItems.length} />} />

          {/* Shopping route for kids, receives cart items and basic functions so that data can be manipulated */}
          <Route 
            path="/shop/kids" 
            element={<Kids 
              onAdd={onAdd} 
              onRemove={onRemove} 
              cartItems={cartItems} 
              countCartItems={cartItems.length} />} />

          {/* Checkout route, receives cart items so that the products transfer to the final steps */}
          <Route 
            path="/checkout" 
            element={<Checkout 
              cartItems={cartItems} 
              countCartItems={cartItems.length} 
              userInfo={userInfo} 
              order={order}
              handleMethod={handleMethod}
              handleOrder={handleOrder}
              handleOrderCheckbox={handleOrderCheckbox}
              submitOrder={submitOrder}
              getData={getData} />} /> 

          <Route 
            path="/shipping" 
            element={<Shipping 
              cartItems={cartItems} 
              countCartItems={cartItems.length} 
              userInfo={userInfo} 
              handleChange={handleChange}
              order={order} 
              handleMethod={handleMethod}
              submitOrder={submitOrder}
              getData={getData} />} /> 

          <Route 
            path="/payment" 
            element={<Payment 
              cartItems={cartItems} 
              countCartItems={cartItems.length} 
              userInfo={userInfo} 
              order={order} 
              handleOrder={handleOrder}
              submitOrder={submitOrder}
              getData={getData} />} /> 

        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
