import React, { useState } from "react";
import { constants, useBasket } from "../../shared";
// import { navigateTo } from "gatsby-link";
import { Link } from "gatsby";

const CardWrap = () => {
  const { items } = useBasket(constants.BASKET_KEY, {});
  const userAddedItems = Object.values(items).filter(Boolean);
  const [showCartDropDown, setShowCartDropDown] = useState(false);
  const iconClicked = () => {
    setShowCartDropDown(!showCartDropDown);
  };

  // const navigate = () => {
  //   navigateTo("/cart");
  // };

  return (
    <div className="same-style cart-wrap">
      {/* <Link className="icon-cart" to="/cart">
        <i className="pe-7s-shopbag"></i>
        {userAddedItems && userAddedItems.length > 0 && (
          <span className="count-style">{userAddedItems.length}</span>
        )}
      </Link> */}
      <button className="icon-cart" onClick={iconClicked}>
        <i className="pe-7s-shopbag"></i>
        {userAddedItems && userAddedItems.length > 0 && (
          <span className="count-style">{userAddedItems.length}</span>
        )}
      </button>
      <div
        className={`shopping-cart-content ${
          showCartDropDown && "cart-visible"
        }`}
      >
        <ul>
          <li className="single-shopping-cart">
            <div className="shopping-cart-img">
              <a href="/cart">
                <img alt="" src="assets/img/cart/cart-1.png" />
              </a>
            </div>
            <div className="shopping-cart-title">
              <h4>
                <a href="#">T- Shart & Jeans </a>
              </h4>
              <h6>Qty: 02</h6>
              <span>$260.00</span>
            </div>
            <div className="shopping-cart-delete">
              <a href="#">
                <i className="fa fa-times-circle"></i>
              </a>
            </div>
          </li>
          <li className="single-shopping-cart">
            <div className="shopping-cart-img">
              <a href="#">
                <img alt="" src="assets/img/cart/cart-2.png" />
              </a>
            </div>
            <div className="shopping-cart-title">
              <h4>
                <a href="#">T- Shart & Jeans </a>
              </h4>
              <h6>Qty: 02</h6>
              <span>$260.00</span>
            </div>
            <div className="shopping-cart-delete">
              <a href="#">
                <i className="fa fa-times-circle"></i>
              </a>
            </div>
          </li>
        </ul>
        <div className="shopping-cart-total">
          <h4>
            Shipping : <span>$20.00</span>
          </h4>
          <h4>
            Total : <span className="shop-total">$260.00</span>
          </h4>
        </div>
        <div className="shopping-cart-btn btn-hover text-center">
          <Link className="default-btn" to="/cart">
            view cart
          </Link>
          {/* <a className="default-btn" href="/cart">
            view cart
          </a> */}
          <a className="default-btn" href="checkout.html">
            checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardWrap;
