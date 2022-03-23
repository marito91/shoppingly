// Libraries
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Shopping.css';


export default function Product(props) {

    const { product, onAdd } = props;

    // This is not working 100% right -> It's grabbing a global state size and not the one from each product.
    const [size, setSize] = useState("XS");

    const handleChange = event => {
        setSize(event.target.value);
        console.log(event.target.value)
    };

  return (

    <div className="garments">
        <Card style={{ border: "none" }}>
            <Card.Img variant="top" style={{ borderRadius : "0.5rem"}} className="models" key={product.img1} value={product.img1} src={require('../../static/img/stock-photos/' + product.img1 + '.jpeg')}                         
                onMouseOver={image => (image.currentTarget.src = require('../../static/img/stock-photos/' + product.img2 + '.jpeg'))} 
                onMouseOut={image => (image.currentTarget.src = require('../../static/img/stock-photos/' + product.img1 + '.jpeg'))}/>
            <Card.Body className="garment-body">
                <Card.Title key={product.name} value={product.name}>{product.name}</Card.Title>
                <Card.Text key={product.price} value={product.price}>${product.price}</Card.Text>
                    <select key={product.id} value={size} onChange={handleChange} name="" id="" className="size">
                        {product.sizes.map(size => <option key={size} value={size}>{size}</option>)}
                        </select>
                    {/*<button className="add-btn" onClick={() => addProduct( product.name, product.price, size, product.img1 )}>Add to cart</button>*/}
                    <button className="add-btn" onClick={() => onAdd(product)}>Add to cart</button>
            </Card.Body>
        </Card>
    </div>    
  )
}
