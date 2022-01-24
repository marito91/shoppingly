
// Libraries
import React from 'react'
//import Button from 'react-bootstrap/Button'

// CSS
import '../static/css/Main.css';
import '../static/css/Banner.css';


// Media
import casualFall from '../static/img/stock-photos/women/casual-fall.jpg';
import casualBlue from '../static/img/stock-photos/women/casual-blue.jpg';
import blueJeanJacket from '../static/img/stock-photos/women/bluejean-jacket.jpg';
import forest from '../static/img/stock-photos/women/forest.jpg';

export default function Banner() {
    return (
        <>
            <container className="womens-wear">
                <div className="womens-wear-items pic1">
                    <img className="grid-ww-pic" src={forest} alt="" />
                </div>
                <div className="womens-wear-items pic2">
                    <img className="grid-ww-pic" src={casualFall} alt="" />
                </div>
                <div className="womens-wear-items pic3">
                    <img className="grid-ww-pic" src={blueJeanJacket} alt="" />
                </div>
            </container>
            
        </>
    )
}
