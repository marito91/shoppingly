
// Libraries
import { React } from 'react'

// Media
import instagram from '../static/img/icons/instagram.svg';
import facebook from '../static/img/icons/facebook.svg';
import youtube from '../static/img/icons/youtube.svg';

// CSS
import '../static/css/Main.css';
import '../static/css/Header.css';
import '../static/css/Footer.css';

export default function Footer(){
  return (
    <> 
        <div className="footer main-font">
            <div className="footer-row" id="footer-sections">
                <div className="footer-column">
                    <h1 className="logoFont logo"><strong style={{ fontSize: "xx-large" }}>Shoppingly</strong></h1>
                </div>
                <div className="footer-column">
                    <h3><strong>Support</strong></h3>
                    <ul className="ul">
                        <li id="footer-link">Return Policy</li>
                        <li id="footer-link">Warranty</li>
                        <li id="footer-link">FAQs</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3><strong>Contact</strong></h3>
                    <ul className="ul">
                        <li id="footer-link">Career</li>
                        <li id="footer-link">Shoppingly Nation</li>
                        <li id="footer-link">Partnerships and collaborations</li>
                    </ul>
                </div>
                <div className="footer-column" id="last-column">
                    <h3><strong><br /></strong></h3>
                    <ul className="ul">
                        <li>Cra. X # 76 - 200</li>
                        <li>080001 Barranquilla, Colombia</li>
                        <li id="footer-link">support@shoppingly.com</li>
                    </ul>
                </div>
            </div>
            <div className="social">
                <img src={facebook} alt="" className="icons"/>
                <img src={instagram} alt="" className="icons"/>
                <img src={youtube} alt="" className="icons"/>
            </div>
            <hr className="section-border" />
            <div className="footer main-font">
                <div className="footer-row">
                    <div className="terms-column">
                        <h3 id="rights"><strong>© Shoppingly, All rights reserved</strong></h3>
                        <div className="terms">
                            <h3 className="conditions"><strong>Terms &amp; Conditions</strong></h3>
                            <h3 className="separator"><strong>&nbsp;|&nbsp;</strong></h3>
                            <h3 className="conditions"><strong>Privacy Policy &amp; Cookies</strong></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

