import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap
import Card from 'react-bootstrap/Card'

// Components
import Header from './Header'
import Footer from './Footer'

// CSS
import '../static/css/Main.css';
import '../static/css/Home.css';

// Media
import casualFall from '../static/img/stock-photos/casual-fall.jpg';
import blueJeanJacket from '../static/img/stock-photos/bluejean-jacket.jpg';
import forest from '../static/img/stock-photos/forest.jpg';
import mask from '../static/img/stock-photos/safety.jpeg';
import commitment from '../static/img/stock-photos/commitment.jpeg';
import diversity from '../static/img/stock-photos/diversity.jpeg';

// Women
import clothes from '../static/img/stock-photos/clothes.jpeg';
import womenModel from '../static/img/stock-photos/womenClothes.jpeg';

// Men
import display from '../static/img/stock-photos/display.jpg';
import menModel from '../static/img/stock-photos/menModel.jpeg';

// Kids
import kidModel from '../static/img/stock-photos/kids.jpeg';
import kids from '../static/img/stock-photos/kids-clothes.jpeg';

// Offers
import store from '../static/img/stock-photos/store.jpeg';
import discount from '../static/img/stock-photos/discount.jpeg';



export default function Home(props) {

    const { cartItems, onAdd, onRemove } = props;

    const [information, setInformation] = useState({
      firstName : "",
      lastName : "",
      email : "",
      date : "",
      offers: false,
      ideas: false,
      nation: false
    })

    const handleChange = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setInformation({
            ...information, [event.target.name] : value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(information)
        alert("Thank you for subscribing! Welcome to the club!")
    }

  return (
        <>
            <Header onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} countCartItems={cartItems.length} />  
            <section style={{ backgroundColor: "white"}}>
              <div className="discount-section main-font">
                  <h3 className="discount-header header2">Up to </h3>
                  <h1 className="discount-header header1"> <strong> 50% </strong></h1>
                  <h3 className="discount-header header2">discount</h3>
                  <br />
                  <button className="discount-btn" style={{ color: "#56453E" }}><h6 className="header4">Learn more</h6></button>
                  <br />
                  <h5 className="discount-header header3">*Valid only for references for the selected event tag. 
                    Promos are subject to terms and conditions and each store's availability. 
                    Coupons are valid for both online and physical stores.</h5>
              </div>
            </section>
            <div className="womens-wear">
              <div className="womens-wear-items pic1">
                  <img className="grid-ww-pic" src={forest} alt="" />
              </div>
              <div className="womens-wear-items pic2">
                  <img className="grid-ww-pic" src={casualFall} alt="" />
              </div>
              <div className="womens-wear-items pic3">
                  <img className="grid-ww-pic" src={blueJeanJacket} alt="" />
              </div>
            </div>
            <hr className="section-border" />
            <h2 className="main-font title" style={{ marginTop: "5%", marginBottom: "5%" }}>Clothing</h2>
            <div className="row main-font">
                <div className="column">
                  <Card style={{ textAlign: "center", border: "none"  }}>
                    <Card.Img className="sections" src={menModel} 
                            onMouseOver={image => (image.currentTarget.src = display)} 
                            onMouseOut={image => (image.currentTarget.src = menModel)}/>
                    <Card.Body>
                      <Link to="/shop/men" className='sections-links'>Men</Link>
                    </Card.Body>
                  </Card>
                </div>
                <div className="column">
                  <Card style={{ textAlign: "center", border: "none" }}>
                    <Card.Img className="sections" src={womenModel} 
                            onMouseOver={image => (image.currentTarget.src = clothes)} 
                            onMouseOut={image => (image.currentTarget.src = womenModel)}/>
                    <Card.Body>
                    <Link to="/shop/women" className='sections-links'>Women</Link>
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
                    <Link to="/shop/kids" className='sections-links'>Kids</Link>
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
            <hr className="section-border" />
            <h2 className="main-font title" style={{ marginTop: "5%", marginBottom: "5%" }}>More about <strong className="logoFont">Shoppingly</strong></h2>
            <div className="row main-font" id="grid" style={{ marginBottom: "5%" }}>
                <div className="info-sections" style={{ backgroundImage: `url(${mask})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                    <h2 style={{ color: "white" }}>Safety</h2>
                    <p className="info-text">Our team meets all of the safety measures related to Covid-19. All of our products are cleaned constantly with no harm whatsoever on the materials.</p>
                    <button className="info-btn">Explore now</button>
                </div>
                <div className="info-sections" style={{ backgroundImage: `url(${commitment})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                    <h2 style={{ color: "white" }}>Shoppingly Nation</h2>
                    <p className="info-text">In Shoppingly we are fully commited with our planet. That's why 70% of our products are recycled. Every day more people decide to join our cause and help make the earth cleaner and sustainable.</p>
                    <button className="info-btn">Join the club</button>
                </div>
                <div className="info-sections" style={{ backgroundImage: `url(${diversity})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                    <h2 style={{ color: "white" }}>Diversity</h2>
                    <p className="info-text">In Shoppingly we believe that everyone is different and equal at the same time. That's why in our politics we also look forward to improve the conditions of people from all genders and cultures.</p>
                    <button className="info-btn">Discover more</button>
                </div>
            </div>
            <div className="main-font invitation-banner">
                <h1 className="join-header">Join the nation and get <strong>15%</strong> discount on your next purchase. Did we mention that a friend can also get an additional <strong>10%</strong> discount? </h1>
                <br />
                <button className="discount-btn" style={{ color: "#56453E" }}><h6 className="header4">Get now</h6></button>
                <br />
            </div>
            <div className="form-container main-font">
              <h1 style={{ textAlign: "center" }}><strong>Join our crew!</strong></h1>
              <h3 style={{ textAlign: "center" }}>Free exclusive content for you to enjoy by signing up.</h3>
              <form className="signup" onSubmit={handleSubmit}>
                  <div className="signup-row">
                      <div className="signup-column" style={{ maxWidth: "100%"}}>
                          <strong>First Name</strong><br />
                          <input 
                              className="signup-inputs" 
                              id="name-input" 
                              type="text" 
                              name="firstName"
                              placeholder="Your first name"
                              value={information.firstName} 
                              onChange={handleChange} 
                              required/>
                      </div>
                      <div className="signup-column">
                          <strong>Last Name</strong><br />
                          <input 
                              className="signup-inputs" 
                              type="text" 
                              name="lastName" 
                              placeholder="Your last name" 
                              value={information.lastName} 
                              onChange={handleChange} 
                              required/>
                      </div>
                  </div>
                  <div className="signup-row">
                      <strong>Email</strong><br />
                      <input 
                          className="signup-inputs" 
                          type="text" 
                          name="email"
                          placeholder="Email address"  
                          value={information.email} 
                          onChange={handleChange} 
                          required/>
                  </div>
                  <div className="signup-row">
                      <strong>Date of birth</strong><br />
                      <input 
                          className="signup-inputs" 
                          type="date" 
                          name="date"
                          value={information.date} 
                          onChange={handleChange} 
                          required/>
                  </div>
                  <div className="signup-row">
                      <strong>Preferences</strong><br />
                          <input
                              className="checkboxes" 
                              style={{ margin: ".4rem" }} 
                              name="offers" 
                              type="checkbox"
                              onChange={handleChange}
                              checked={information.offers}/>
                          <label className="check-labels">Exclusive offers</label><br />
                          <input 
                              className="checkboxes" 
                              style={{ margin: ".4rem" }} 
                              name="ideas" 
                              type="checkbox"
                              onChange={handleChange}
                              checked={information.ideas}/>
                          <label className="check-labels">Sets ideas</label><br />
                          <input 
                              className="checkboxes" 
                              style={{ margin: ".4rem" }} 
                              name="nation" 
                              type="checkbox"
                              onChange={handleChange}
                              checked={information.nation}/>
                          <label className="check-labels">Shoppingly nation</label>
                    </div>
                    <div className="signup-row" id='signupbtn'>
                        <button className="signup-btn"><h3><strong>Sign Up</strong></h3></button>
                    </div>
                    <div className="signup-row" style={{ display: "flex" }}>
                        <input className="checkboxes" style={{ margin: ".4rem" }} name="policy" type="checkbox" required/>
                        <label className="check-labels">By entering your email address you agree to receive our marketing offers in accordance with our Privacy Policy.*</label><br />
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}
