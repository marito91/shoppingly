import React, { useState, useEffect } from 'react';

// Libraries
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Shopping.css';


export default function Clothes() {
  return (
      <>
        <div className="shopping">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>           
        </div>
    </>
  )
}
