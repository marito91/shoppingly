import React from 'react';

// CSS
import '../static/css/Main.css';
import '../static/css/Promo.css';



export default function Promo() {
  return (
    <>
        <section style={{ backgroundColor: "white"}}>
            <div className="discount-section main-font">
                <h3 className="discount-header header2">Up to </h3>
                <h1 className="discount-header header1"> <strong> 50% </strong></h1>
                <h3 className="discount-header header2">discount</h3>
                <br />
                <button className="discount-btn" style={{ color: "#56453E" }}><h6 className="header4">Learn more</h6></button>
                <br />
                <h5 className="discount-header header3">*Valid only for references for the selected event tag. Promos are subject to terms and conditions and each store's availability. 
                                                        Coupons are valid for both online and physical stores.</h5>
            </div>
        </section>
    </>
  )
}
