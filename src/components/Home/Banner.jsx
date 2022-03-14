
// Libraries
import React from 'react'
//import Button from 'react-bootstrap/Button'

// CSS
import '../../static/css/Main.css';
import '../../static/css/Home/Banner.css';


// Media
import casualFall from '../../static/img/stock-photos/casual-fall.jpg';
import blueJeanJacket from '../../static/img/stock-photos/bluejean-jacket.jpg';
import forest from '../../static/img/stock-photos/forest.jpg';

export default function Banner() {
    return (
        <>
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
            
        </>
    )
}
