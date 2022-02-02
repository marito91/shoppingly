import React from 'react';

// Libraries
import Card from 'react-bootstrap/Card'

// CSS
import '../static/css/Main.css';
import '../static/css/Information.css';

// Media
import mask from '../static/img/stock-photos/safety.jpeg';
import commitment from '../static/img/stock-photos/commitment.jpeg';
import diversity from '../static/img/stock-photos/diversity.jpeg';

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
                <p className="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur ad, saepe aperiam illum, perspiciatis fuga culpa molestias numquam consequatur at blanditiis iste qui dolorem dolorum debitis eaque pariatur modi?</p>
                <button className="info-btn">Discover more</button>
            </div>
        </div>
      </>

  )
}
