
// Libraries
import React from 'react'


// CSS
import '../../static/css/Main.css';
import '../../static/css/Shop/Shopping.css';

// Components



export default function Cart(props) {

    const { cartItems } = props;

    const itemPrice = cartItems.reduce((accumulator, item) => accumulator + (item.price * item.qty), 0);
    const taxValue = itemPrice * 0.07;
    const shippingValue = itemPrice > 250 ? 0 : 25;
    const total = itemPrice + taxValue + shippingValue;
  
    return (
      <>
        <div className='main-font'>{cartItems.length === 0 && <div>Your cart is empty</div>}</div>     
            {cartItems.map((item) => (
                <div key={item.id} className="bag-row">
                <div className="bag-col-2">{item.name}</div>
                <div className="bag-col-2 bag-price">
                    {item.qty} X ${item.price.toFixed(2)}
                </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                <hr />
                <div className="bag-row">
                    <div className="bag-col-2">
                        Items Price
                    </div>
                    <div className="bag-col-1 bag-price">
                        ${itemPrice.toFixed(2)}
                    </div>
                </div>
                <div className="bag-row">
                    <div className="bag-col-2">
                        Tax:
                    </div>
                    <div className="bag-col-1 bag-price">
                        ${taxValue.toFixed(2)}
                    </div>
                </div>
                <div className="bag-row">
                    <div className="bag-col-2">
                        Shipping:
                    </div>
                    <div className="bag-col-1 bag-price">
                        ${shippingValue.toFixed(2)}
                    </div>
                </div>
                <div className="bag-row">
                    <div className="bag-col-2">
                        <strong>
                            Total:
                        </strong>
                    </div>
                    <div className="bag-col-1 bag-price">
                        <strong>
                            ${total.toFixed(2)}
                        </strong>
                    </div>
                </div>
                <hr />
                </>
            )}
      </>
    )
}
