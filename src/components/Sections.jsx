import React, { useState, useEffect } from 'react';

// Libraries
import Card from 'react-bootstrap/Card'

// CSS
import '../static/css/Sections.css'


// Media women
import redShirt from '../static/img/stock-photos/women/red-shirt-jacket.jpg';
import casualBlue from '../static/img/stock-photos/women/casual-blue.jpg';
import aquamarine from '../static/img/stock-photos/women/aquamarine.jpg';
import formal from '../static/img/stock-photos/women/formal-women.jpg';
import clothes from '../static/img/stock-photos/women/clothes.jpeg';
import womenModel from '../static/img/stock-photos/women/womenClothes.jpeg';

// Media men
import ocreJacket from '../static/img/stock-photos/men/ocre-jacket.jpg';
import sportShirt from '../static/img/stock-photos/men/sport-shirt.jpg';
import whitePants from '../static/img/stock-photos/men/white-pants.jpg';
import brownShirt from '../static/img/stock-photos/men/brown-shirt.jpg';
import earthJacket from '../static/img/stock-photos/men/earth-jacket.jpg';
import earthJeans from '../static/img/stock-photos/men/earth-jeans.jpg';
import earthShirt from '../static/img/stock-photos/men/earth-tshirt.jpg';
import hoodie from '../static/img/stock-photos/men/hoodie.jpg';
import jeans from '../static/img/stock-photos/men/jeans.jpg';
import leather from '../static/img/stock-photos/men/leather.jpg';
import stripped from '../static/img/stock-photos/men/stripped-shirt.jpg';
import whiteShirt from '../static/img/stock-photos/men/white-shirt.jpg';
import display from '../static/img/stock-photos/men/display.jpg';
import menModel from '../static/img/stock-photos/men/menModel.jpeg';

export default function Sections() {

    
  return (
      <>
        <div className="row">
            <div className="column">
              <Card style={{ textAlign: "center", border: "none"  }}>
                <Card.Img className="sections" src={menModel} 
                        onMouseOver={image => (image.currentTarget.src = display)} 
                        onMouseOut={image => (image.currentTarget.src = menModel)}/>
                <Card.Body>
                  <Card.Link href="#">Men</Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div className="column">
              <Card style={{ textAlign: "center", border: "none" }}>
                <Card.Img className="sections" src={womenModel} 
                        onMouseOver={image => (image.currentTarget.src = clothes)} 
                        onMouseOut={image => (image.currentTarget.src = womenModel)}/>
                <Card.Body>
                  <Card.Link href="#">Women</Card.Link>
                </Card.Body>
              </Card>
            </div>
        </div>
        <div className="row">
            <div className="column">3rd Column</div>
            <div className="column">4th Column</div>
        </div>
      </>
  )
}
