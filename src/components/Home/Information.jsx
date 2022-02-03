import React from 'react';


// CSS
import '../../static/css/Main.css';
import '../../static/css/Information.css';

// Media
import mask from '../../static/img/stock-photos/safety.jpeg';
import commitment from '../../static/img/stock-photos/commitment.jpeg';
import diversity from '../../static/img/stock-photos/diversity.jpeg';

export default function Information() {

  return (
      <>
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
      </>

  )
}
