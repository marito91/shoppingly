import React from 'react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import hostbase from './vars.js';

// Bootstrap
import Card from 'react-bootstrap/Card'

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



export default function Home() {

    const [crew, setCrew] = useState({
      firstName : "",
      lastName : "",
      email : "",
      date : "",
      offers: false,
      ideas: false,
      nation: false
    })

    const nameRef = useRef();
    const lastRef = useRef();
    const mailRef = useRef();
    const dateRef = useRef();
    const offersRef = useRef();
    const ideasRef = useRef();
    const nationRef = useRef();

    const handleChange = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setCrew({
            ...crew, [event.target.name] : value
        })
        
    }

    const handleSubmit = event => {
        event.preventDefault();
        setCrew({
          ...crew,
          firstName : nameRef.current.value,
          lastName : lastRef.current.value,
          email : mailRef.current.value,
          date : dateRef.current.value
        })
        alert("Thank you for subscribing! Welcome to the club!")

        fetch(`${hostbase}/users/newsletter`, {
          headers:{ "content-type" : "application/json" },
          method:"POST",
          body: JSON.stringify({crew})
            }).then(res => res.json())
              .then(res => {
                  console.log(res.msg)
          })
        }


  return (
        <>
          <div className='header-background'/> 
            <section className='main-font'>
              <div className="discount-section">
                <h1 className="discount-header" >Up to <strong>50%</strong> discount</h1>
                  <button className="discount-btn" style={{ color: "#56453E" }}>Learn more</button>
                  <br />
                  <h3 className="discount-header2">*Valid only for references for the selected event tag. 
                    Promos are subject to terms and conditions and each store's availability. 
                    Coupons are valid for both online and physical stores.</h3>
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
            <div className="row main-font sections-row">
                <div className="column">
                  <Card style={{ textAlign: "center", border: "none"  }}>
                    <Link to="/shop/men" className='sections-links'>
                      <Card.Img className="sections" src={menModel}
                            onMouseOver={image => (image.currentTarget.src = display)} 
                            onMouseOut={image => (image.currentTarget.src = menModel)}/>
                    </Link>
                    <Card.Body>
                      <Link to="/shop/men" className='sections-links'>Men</Link>
                    </Card.Body>
                  </Card>
                </div>
                <div className="column">
                  <Card style={{ textAlign: "center", border: "none" }}>
                    <Link to="/shop/women" className='sections-links'>
                      <Card.Img className="sections" src={womenModel} 
                            onMouseOver={image => (image.currentTarget.src = clothes)} 
                            onMouseOut={image => (image.currentTarget.src = womenModel)}/>
                    </Link>
                    <Card.Body>
                    <Link to="/shop/women" className='sections-links'>Women</Link>
                    </Card.Body>
                  </Card>
                </div>
            </div>
            <div className="row main-font sections-row">
                <div className="column">
                  <Card style={{ textAlign: "center", border: "none" }}>
                    <Link to="/shop/kids" className='sections-links'>
                      <Card.Img className="sections" src={kidModel} 
                            onMouseOver={image => (image.currentTarget.src = kids)} 
                            onMouseOut={image => (image.currentTarget.src = kidModel)}/>
                    </Link>
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
            <div className="row main-font sections-row" id="grid" style={{ marginBottom: "5%" }}>
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
                <button className="discount-btn" style={{ color: "#56453E" }}>Get now</button>
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
                              value={crew.firstName}
                              ref={nameRef} 
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
                              value={crew.lastName}
                              ref={lastRef}  
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
                          value={crew.email}
                          ref={mailRef}  
                          onChange={handleChange} 
                          required/>
                  </div>
                  <div className="signup-row">
                      <strong>Date of birth</strong><br />
                      <input 
                          className="signup-inputs" 
                          type="date" 
                          name="date"
                          value={crew.date} 
                          ref={dateRef} 
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
                              ref={offersRef} 
                              onChange={handleChange}
                              checked={crew.offers}/>
                          <label className="check-labels">Exclusive offers</label><br />
                          <input 
                              className="checkboxes" 
                              style={{ margin: ".4rem" }} 
                              name="ideas" 
                              type="checkbox"
                              ref={ideasRef} 
                              onChange={handleChange}
                              checked={crew.ideas}/>
                          <label className="check-labels">Sets ideas</label><br />
                          <input 
                              className="checkboxes" 
                              style={{ margin: ".4rem" }} 
                              name="nation" 
                              type="checkbox"
                              ref={nationRef} 
                              onChange={handleChange}
                              checked={crew.nation}/>
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
        </>
    )
}
