
// Libraries
import React from 'react'
//import Button from 'react-bootstrap/Button'

// CSS
import '../static/css/Main.css';
import '../static/css/Home.css';


// Media
import casualFall from '../static/img/stock-photos/women/casual-fall.jpg';
import casualBlue from '../static/img/stock-photos/women/casual-blue.jpg';
import blueJeanJacket from '../static/img/stock-photos/women/bluejean-jacket.jpg';
import forest from '../static/img/stock-photos/women/forest.jpg';

export default function Home() {
    return (
        <>
            <section style={{ backgroundColor: "white" }}>
                <div className="discount-section">
                    <h3 className="discount-header header2">Up to </h3>
                    <h1 className="discount-header header1"> <strong> 50% </strong></h1>
                    <h3 className="discount-header header2">discount</h3>
                    <br />
                    <button className="discount-btn" style={{ color: "#56453E" }}><h6 className="header4">Learn more</h6></button>
                    <br />
                    <h5 className="discount-header header3">*Valid only for references for the selected event tag. Promos are subject to each store's availability 
                                                            and are valid for both online and physical stores. Subject to terms and conditions.</h5>
                </div>
            </section>
            <container className="womens-wear">
                <div className="womens-wear-items pic1">
                    <img className="grid-ww-pic" src={forest} alt="" />
                </div>
                <div className="womens-wear-items pic2">
                    <img className="grid-ww-pic" src={casualFall} alt="" />
                    <div className="img-info">
                        <h1 className="img-title" style={{ color: "#E0D7C7" }}>Latest Women's Wear</h1>
                        <button className="img-btn">See more</button>
                    </div>
                </div>
                <div className="womens-wear-items pic3">
                    <img className="grid-ww-pic" src={blueJeanJacket} alt="" />
                </div>
            </container>
            <div className="offers">
                <h1 className="img-title" style={{ color: "#E0D7C7" }}>Latest Women's Wear</h1>
                <button className="img-btn">See more</button>
            </div>
        </>
    )
}
