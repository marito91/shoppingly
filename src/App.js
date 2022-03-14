// Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";


// Components
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Shop/Checkout';




function App() {  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/men" element={<Shop />} />
          <Route path="/shop/men" element={<Shop />} />
          <Route path="/shop/men" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
