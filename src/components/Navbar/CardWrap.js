import React, { useState } from "react";
import { constants, useBasket } from "../../shared";
// import { navigateTo } from "gatsby-link";
import { Link } from "gatsby";
import CardList from "./CardList";

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
        <CardList />
        <div className="shopping-cart-total">
          {/* <h4>
            Shipping : <span>$20.00</span>
          </h4> */}
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
          {/* <a className="default-btn" href="checkout.html">
            checkout
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default CardWrap;
