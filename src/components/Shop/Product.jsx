// Libraries
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas'

// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Shopping.css';
import hostbase from '../vars.js';

// Media
import menModel from '../../static/img/stock-photos/men/menModel.jpeg';

export default function Product(props) {

    const [quantity, setQuantity] = useState(0);

    const { product } = props;

    const [shirts, setShirts] = useState([]);
    const [newProduct, setNewProduct] = useState({
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

    function addProduct(productName, productPrice, productSize, thumbnail) {
        const newCart = [{ name: productName, price: productPrice, chosenSize: productSize, img: thumbnail }, ...cart]
        setCart(newCart)
        console.log(cart)
    }


  return (

    <div className="garments">
        <Card style={{ border: "none" }}>
            <Card.Img variant="top" className="models" key={product.img1} value={product.img1} src={require('../../static/img/stock-photos/men/' + product.img1 + '.jpeg')}                         
                onMouseOver={image => (image.currentTarget.src = require('../../static/img/stock-photos/men/' + product.img2 + '.jpeg'))} 
                onMouseOut={image => (image.currentTarget.src = require('../../static/img/stock-photos/men/' + product.img1 + '.jpeg'))}/>
            <Card.Body className="garment-body">
                <Card.Title key={product.name} value={product.name}>{product.name}</Card.Title>
                <Card.Text key={product.price} value={product.price}>${product.price}</Card.Text>
                    <select key={product.id} value={product.id} onChange={handleChange} name="" id="" className="size">
                        <option key={product.stock.xs.size} value={product.stock.xs.size}>{product.stock.xs.size}</option>
                        <option key={product.stock.s.size} value={product.stock.s.size}>{product.stock.s.size}</option>
                        <option key={product.stock.m.size} value={product.stock.m.size}>{product.stock.m.size}</option>
                        <option key={product.stock.l.size} value={product.stock.l.size}>{product.stock.l.size}</option>
                        <option key={product.stock.xl.size} value={product.stock.xl.size}>{product.stock.xl.size}</option>
                    </select>
                    <button className="add-btn" onClick={() => addProduct( product.name, product.price, size, product.img1 )}>Add to cart</button>
            </Card.Body>
        </Card>
    </div>    
  )
}
