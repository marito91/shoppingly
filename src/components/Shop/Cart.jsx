import React, { useState, useEffect } from 'react'

// Components
import Product from './Shop/Product';

export default function Cart() {

    const [productList, setProductList] = useState([]);

    const addProduct = product => {
        const newCart = [product, ...productList];

        setProductList(newCart);
    }

  return (
    <Product />
  )
}
