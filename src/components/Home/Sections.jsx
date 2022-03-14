import React from 'react';

// Libraries
import Card from 'react-bootstrap/Card'

// CSS
import '../../static/css/Main.css';
import '../../static/css/Home/Sections.css';


// Media women
import clothes from '../../static/img/stock-photos/clothes.jpeg';
import womenModel from '../../static/img/stock-photos/womenClothes.jpeg';

// Media men
import display from '../../static/img/stock-photos/display.jpg';
import menModel from '../../static/img/stock-photos/menModel.jpeg';

// Media kids
import kidModel from '../../static/img/stock-photos/kids.jpeg';
import kids from '../../static/img/stock-photos/kids-clothes.jpeg';

// Media offers
import store from '../../static/img/stock-photos/store.jpeg';
import discount from '../../static/img/stock-photos/discount.jpeg';

export default function Sections() {

    
  return (
      <>
      <hr className="section-border" />
      <h2 className="main-font title" style={{ marginTop: "5%", marginBottom: "5%" }}>Clothing</h2>
        <div className="row main-font">
            <div className="column">
              <Card style={{ textAlign: "center", border: "none"  }}>
                <Card.Img className="sections" src={menModel} 
                        onMouseOver={image => (image.currentTarget.src = display)} 
                        onMouseOut={image => (image.currentTarget.src = menModel)}/>
                <Card.Body>
                  <p style={{ cursor: "pointer" }}>Men</p>
                </Card.Body>
              </Card>
            </div>
            <div className="column">
              <Card style={{ textAlign: "center", border: "none" }}>
                <Card.Img className="sections" src={womenModel} 
                        onMouseOver={image => (image.currentTarget.src = clothes)} 
                        onMouseOut={image => (image.currentTarget.src = womenModel)}/>
                <Card.Body>
                  <p style={{ cursor: "pointer" }}>Women</p>
                </Card.Body>
              </Card>
            </div>
        </div>
        <div className="row main-font">
            <div className="column">
              <Card style={{ textAlign: "center", border: "none" }}>
                <Card.Img className="sections" src={kidModel} 
                        onMouseOver={image => (image.currentTarget.src = kids)} 
                        onMouseOut={image => (image.currentTarget.src = kidModel)}/>
                <Card.Body>
                  <p style={{ cursor: "pointer" }}>Kids</p>
                </Card.Body>
              </Card>
            </div>
            <div className="column">
              <Card style={{ textAlign: "center", border: "none" }}>
                <Card.Img className="sections" src={store} 
                        onMouseOver={image => (image.currentTarget.src = discount)} 
                        onMouseOut={image => (image.currentTarget.src = store)}/>
                <Card.Body>
                  <p style={{ cursor: "pointer" }}>Offers</p>
                </Card.Body>
              </Card>
            </div>
        </div>
      </>
  )
}
