import React, { useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";
import { useBasket, constants } from "../../shared";
// import { netlifyAuth } from "../../shared/netlifyAuth";
import { navigate } from "gatsby";

const EmptyCard = () => {
  const onClick = () => {
    navigate("/");
  };
  return (
    <div className="billing-info-wrap">
      <p>
        Your cart is empty please pick your books and check this page again.
      </p>
      <div className="checkout-account-toggle open-toggle2 mb-30">
        <button className={`checkout-btn`} type="submit" onClick={onClick}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

const CouponCard = () => {
  const { items } = useBasket(constants.BASKET_KEY, {});
  const userAddedItems = Object.values(items).filter(Boolean);
  const hasItems = userAddedItems.length > 0;

  const onLoginForm = (e) => {
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
              Submit your book list
            </h4>
          </div>
          <div className="discount-code">
            {hasItems && (
              <>
                <p>You need to login/signup before submiting your book list.</p>

                <div className="billing-info-wrap">
                  <div className="checkout-account-toggle open-toggle2 mb-30">
                    <button
                      className={`checkout-btn ${isLoggedIn && "loggedIn"}`}
                      type="submit"
                      onClick={onLoginForm}
                    >
                      Login / Signup
                    </button>
                  </div>
                </div>
              </>
            )}

            {!hasItems && <EmptyCard />}

            {hasItems && isLoggedIn && (
              <form>
                <textarea
                  placeholder="Additional Notes"
                  className="textarea"
                  name={"message"}
                  id={"message"}
                />
                <button
                  className="cart-btn-2"
                  type="submit"
                  onClick={onLoginForm}
                >
                  Send books request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
