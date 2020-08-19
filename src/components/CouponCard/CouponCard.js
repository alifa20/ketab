import React, { useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";
// import { netlifyAuth } from "../../shared/netlifyAuth";

const CouponCard = () => {
  const onClick = (e) => {
    e.preventDefault();
    netlifyIdentity.open();
  };

  const user = netlifyIdentity.currentUser();
  const [isLoggedIn, setisLoggedIn] = useState(user !== null);

  useEffect(() => {
    netlifyIdentity.on("login", () => setisLoggedIn(true));
    netlifyIdentity.on("logout", () => setisLoggedIn(false));
  }, []);

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="discount-code-wrapper">
          <div className="title-wrap">
            <h4 className="cart-bottom-title section-bg-gray">
              Use Coupon Code
            </h4>
          </div>
          <div className="discount-code">
            <p>Enter your coupon code if you have one.</p>
            <form>
              <input type="text" required="" name="name" />
              <button className="cart-btn-2" type="submit" onClick={onClick}>
                {!isLoggedIn ? "Login" : "Apply Coupon"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
