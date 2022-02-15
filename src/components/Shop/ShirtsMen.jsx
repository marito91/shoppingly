import React, { useState, useEffect } from 'react';

// Libraries
import Card from 'react-bootstrap/Card';


// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Shopping.css';
import hostbase from '../vars.js';


export default function ShirtsMen() {

    const [catalogue, setCatalogue] = useState([]);
    const [product, setProduct] = useState({
        name : "",
        price : 0,
        size : "",
        img : ""
    });

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        fetch(`${hostbase}/shop/men/shirts`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setCatalogue(res.mensShirtsCatalogue)
                //console.log(res.mensShirtsCatalogue)
            } else {
                alert("Could not load info.");
            }
        })
    }, []);

    function handleClickOpen(event, item) {
        event.preventDefault();
        setProduct([item]);
      }
    



  return (
      <>
        <h1 className="main-font section">Men's Shirts</h1>
        <div className="shopping main-font">
            {
                catalogue.map( c =>
                    <div className="garments">
                    <Card style={{ border: "none" }}>
                        <Card.Img variant="top" className="models" key={c.img1} value={c.img1} src={require('../../static/img/stock-photos/men/' + c.img1 + '.jpeg')}                         
                            onMouseOver={image => (image.currentTarget.src = require('../../static/img/stock-photos/men/' + c.img2 + '.jpeg'))} 
                            onMouseOut={image => (image.currentTarget.src = require('../../static/img/stock-photos/men/' + c.img1 + '.jpeg'))}/>
                        <Card.Body>
                            <Card.Title key={c.name} value={c.name}>{c.name}</Card.Title>
                            <Card.Text key={c.price} value={c.price}>${c.price}</Card.Text>
                                <select name="" id="" className="size">
                                    <option value={c.size}>XS</option>
                                    <option value={c.size}>S</option>
                                    <option value={c.size}>M</option>
                                    <option value={c.size}>L</option>
                                    <option value={c.size}>XL</option>
                                </select>
                                <button className="add-btn" onClick={console.log(`You added ${c.name} to the cart. It costs ${c.price} dollars`)}>Add to cart</button>
                        </Card.Body>
                    </Card>
                    </div>    
                    )
            }
        </div>
    </>
  )
}
