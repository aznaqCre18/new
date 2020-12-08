import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../../elements/Header/Header";
import './Cart.css';

import { TRASH } from './../../configs/icons';
import DummyProd from './../../assets/images/product-image/blue-beans.png';

function Cart() {

  const [checkoutValue, setCheckoutValue] = useState(0);

  const handleCount = (type) => {
    if(type === "plus") {
      setCheckoutValue(checkoutValue + 1);
    } else if(type === "minus") {
      if(checkoutValue === 0) {
        setCheckoutValue(0)
      } else {
        setCheckoutValue(checkoutValue - 1)
      }
    }
  }

  return (
    <div className="cart-container" >
      <Header />
      <div className="wrapper-cart">
        <div className="title">
          <h2>My Cart</h2>
        </div>
        <div className="wrapper-detail">
          <div className="list-order">
            <p className="review-title">Review Your Order</p>
            <div className="wrap-detail-cart" >
              <hr/>
              <div className="order-qty">
                <div className="img-product">
                  <img src={DummyProd} alt="dummy prod"/>
                </div>
                <div className="list-product">
                  <div className="product-name-price">
                    <p>GUETEMALA Beans</p>
                    <p>Rp.300.900</p>
                  </div>
                  <div className="set-qty">
                    <div className="qty">
                      <div onClick={() => handleCount("minus")} className={`btn-count minus ${checkoutValue === 0 ? "disable" : ""}`}>-</div>
                      <div className="value">{checkoutValue}</div>
                      <div onClick={() => handleCount("plus")} className="btn-count plus">+</div>
                    </div>
                    <div className="trash">
                      <img src={TRASH} alt="trash"/>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
            </div>
          </div>
          <div className="wrapper-total">
            <hr/>
            <div className="subtotal">
              <p>Subtotal</p>
              <p>300.900</p>
            </div>
            <div className="total-qty">
              <p>Qty</p>
              <p>2</p>
            </div>
            <hr/>
            <div className="price-total">
              <p>Total</p>
              <p>300.900</p>
            </div>
            <div className="wrapper-btn-checkout">
              <Link to="/ship">
                <button className="btn-checkout">Proceed To Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
