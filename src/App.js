// Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";


// Components
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Shop/Checkout';
import Cart from './components/Shop/Cart';




function App() {  

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} countCartItems={cartItems.length}  />} />
          <Route path="/shop/men/" element={<Shop onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} countCartItems={cartItems.length} />} />
          {/*<Route path="/shop/men" element={<Shop />} />
          <Route path="/shop/men" element={<Shop />} />*/}
          <Route path="/checkout" element={<Checkout onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} countCartItems={cartItems.length} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
