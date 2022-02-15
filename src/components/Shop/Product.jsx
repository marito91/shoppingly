import React, { useState, useEffect } from 'react';

// Libraries
import Card from 'react-bootstrap/Card';

// Media
import menModel from '../../static/img/stock-photos/men/menModel.jpeg';

export default function Product({products}) {

    const [quantity, setQuantity] = useState(0);

/*
    const submitUpdate = (value, text) => {
        updateTask(edit.id, value, text)
        setEdit({
            id: null,
            value:'',
            text: ''
        })

        console.log(edit)
    }

*/

  return (
        <Card style={{ border: "none" }}>
            <Card.Body>  
                <Card.Text>
                    <img src={menModel} style={{width:"128px", float:"left", display: "inline", marginRight: "2%"}}/>
                    <Card.Title>Product</Card.Title>
                    <button onClick={() => setQuantity(quantity - 1)} style={{display:"inline", float:"left"}}>-</button>
                    <p style={{display:"inline", float:"left"}}>{quantity}</p>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </Card.Text>
            </Card.Body>
        </Card>
  )
}
