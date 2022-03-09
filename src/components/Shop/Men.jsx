import React, { useState, useEffect, useRef } from 'react';

// Libraries
import Card from 'react-bootstrap/Card';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas'

// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Shopping.css';
import hostbase from '../vars.js';

// Components
import Product from '../Shop/Product';


export default function Men() {

    const [shirts, setShirts] = useState([]);
    const [product, setProduct] = useState({
        name : "",
        price : 0,
        chosenSize : "",
        img : ""
    });
    const [cart, setCart] = useState([]);


    // This is not working 100% right -> It's grabbing a global state size and not the one from each garment.
    const [size, setSize] = useState("XS");

    const handleChange = event => {
        setSize(event.target.value);
        console.log(event.target.value)
    };


    useEffect(() => {
        fetch(`${hostbase}/shop/men/shirts`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setShirts(res.mensShirtsCatalogue)
                //console.log(res.mensShirtsCatalogue)
            } else {
                alert("Could not load info.");
            }
        })
    }, []);

    function addProduct(productName, productPrice, productSize, thumbnail) {
        const newCart = [{ name: productName, price: productPrice, chosenSize: productSize, img: thumbnail }, ...cart]
        setCart(newCart)
        console.log(cart)
    }

  return (
      <> 
        <h1 className="main-font section">Men's Shirts</h1>
        <div className="shopping main-font">
            {shirts.map(product => (
                <Product key={product.id} product={product}/>
            ))}
        </div>

      {/*
        <h1 className="main-font section">Men's Shirts</h1>
        <div className="shopping main-font">
            {
                shirts.map( c =>
                    <div className="garments">
                        <Card style={{ border: "none" }}>
                            <Card.Img variant="top" className="models" key={c.img1} value={c.img1} src={require('../../static/img/stock-photos/men/' + c.img1 + '.jpeg')}                         
                                onMouseOver={image => (image.currentTarget.src = require('../../static/img/stock-photos/men/' + c.img2 + '.jpeg'))} 
                                onMouseOut={image => (image.currentTarget.src = require('../../static/img/stock-photos/men/' + c.img1 + '.jpeg'))}/>
                            <Card.Body className="garment-body">
                                <Card.Title key={c.name} value={c.name}>{c.name}</Card.Title>
                                <Card.Text key={c.price} value={c.price}>${c.price}</Card.Text>
                                    <select key={c.id} value={c.id} onChange={handleChange} name="" id="" className="size">
                                        <option key={c.stock.xs.size} value={c.stock.xs.size}>{c.stock.xs.size}</option>
                                        <option key={c.stock.s.size} value={c.stock.s.size}>{c.stock.s.size}</option>
                                        <option key={c.stock.m.size} value={c.stock.m.size}>{c.stock.m.size}</option>
                                        <option key={c.stock.l.size} value={c.stock.l.size}>{c.stock.l.size}</option>
                                        <option key={c.stock.xl.size} value={c.stock.xl.size}>{c.stock.xl.size}</option>
                                    </select>
                                    <button className="add-btn" onClick={() => addProduct( c.name, c.price, size, c.img1 )}>Add to cart</button>
                            </Card.Body>
                        </Card>
                    </div>    
                    )
            }
        </div>
        <button className="add-btn" onClick={() => console.log(cart)}>Print</button>
        */}
    </>
  )
}
