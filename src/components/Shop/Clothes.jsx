import React, { useState, useEffect } from 'react';

// Libraries
import Card from 'react-bootstrap/Card';

// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Shopping.css';
import hostbase from '../vars.js';

// Media
import mask from '../../static/img/stock-photos/safety.jpeg';


export default function Clothes() {

    const [catalogue, setCatalogue] = useState([]);

    useEffect(() => {
        fetch(`${hostbase}/shop/men/shirts`)
        .then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                setCatalogue(res.mensShirtsCatalogue)
                console.log(res.mensShirtsCatalogue)
                //alert(res.msg);
            } else {
                alert("Could not load info.");
            }
        })
    }, []);

  return (
      <>
        <h1 className="main-font section">Men's Shirts</h1>
        <div className="shopping main-font">
            {
                catalogue.map( c =>
                    <div className="garments">
                    <Card style={{ border: "none" }}>
                        <Card.Img variant="top" src={mask} />
                        <Card.Body>
                            <Card.Title key={c.name} value={c}>{c.name}</Card.Title>
                            <Card.Text key={c.price} value={c}>$ {c.price}</Card.Text>
                            <select name="" id="" className="size">
                                <option value="">XS</option>
                                <option value="">S</option>
                                <option value="">M</option>
                                <option value="">L</option>
                                <option value="">XL</option>
                            </select>
                            <button className="add-btn">Add to cart</button>
                        </Card.Body>
                    </Card>
                    </div>    
                    )
            }
        </div>
    </>
  )
}
