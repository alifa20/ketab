import React, { useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";
// import { netlifyAuth } from "../../shared/netlifyAuth";

const CouponCard = () => {
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
            {/* </div> */}
            {/* <div className="discount-code"> */}
            {/* <div className="title-wrap">
              <h4 className="cart-bottom-title section-bg-gray">
                Submit your book list
              </h4>
            </div> */}
            {/* <p>Notes</p> */}
            {isLoggedIn && (
              <form>
                {/* <input type="text" required="" name="name" /> */}
                <textarea
                  placeholder="Additional Notes"
                  className="textarea"
                  name={"message"}
                  id={"message"}
                />
                {/* <input type="text" required="" name="name" /> */}
                <button
                  className="cart-btn-2"
                  type="submit"
                  onClick={onLoginForm}
                >
                  {/* {!isLoggedIn ? "Login" : "Send books request"} */}
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
