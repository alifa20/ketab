import React, { useEffect, useState } from "react";
// import netlifyIdentity from "netlify-identity-widget";
import { useBasket, constants } from "../../shared";
// import { netlifyAuth } from "../../shared/netlifyAuth";
import { navigate, Link } from "gatsby";
import { isAuthenticated, getProfile } from "../../utils/auth";

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

const JustSubmittedMessage = () => {
  const onClick = () => {
    navigate("/");
  };
  return (
    <div className="cart-shiping-update-wrapper">
      <div className="cart-shiping-update">
        <p>
          Your book list successfully emailed to us. We will get back to you
          shortly
        </p>
        <Link to="/">Continue Shopping</Link>
      </div>
      {/* <div className="checkout-account-toggle open-toggle2 mb-30">
        <Link to="/">Continue Shopping</Link>
        <button className={`checkout-btn`} type="submit" onClick={onClick}>
          Continue Shopping
        </button>
      </div> */}
    </div>
  );
};

const CouponCard = () => {
  const { items, clear } = useBasket(constants.BASKET_KEY, {});
  const userAddedItems = Object.values(items).filter(Boolean);
  const hasItems = userAddedItems.length > 0;

  // const user = netlifyIdentity.currentUser();
  const user = getProfile();

  // const [isLoggedIn, setisLoggedIn] = useState(user !== null);

  const isLoggedIn = isAuthenticated();

  const [message, setMessage] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const onLoginForm = (e) => {
    e.preventDefault();
    // netlifyIdentity.open();
    navigate("/account");
  };

  const justSubmitted = submitResult && submitResult.length > 0;
  const sendBookList = async (e) => {
    e.preventDefault();

    console.log("user", user);
    try {
      const body = JSON.stringify({
        email: user.email,
        books: userAddedItems,
        // name: user.user_metadata.full_name,
        name: user.name,
        message,
      });
      const text = await fetch("/.netlify/functions/send-book-list-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      }).catch((error) => {
        console.log("This is err", error);
        throw error;
      });
      console.log(text);
      if (text.status === 200) {
        setSubmitResult("Your list successfully sent.");
        clear();
        alert("Your list successfully sent. We will get back to you on email.");
      } else {
        setSubmitResult("Error happened please try later");
      }
    } catch (err) {
      setSubmitResult("Error happened please try later");
      console.error(err);
    }
  };

  // useEffect(() => {
  //   netlifyIdentity.on("login", () => setisLoggedIn(true));
  //   netlifyIdentity.on("logout", () => setisLoggedIn(false));
  // }, []);

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
            {hasItems && !isLoggedIn && (
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

            {!hasItems && !justSubmitted && <EmptyCard />}
            {justSubmitted && <JustSubmittedMessage />}

            {hasItems && isLoggedIn && (
              <form>
                {/* <p>
                  Your books will be emailed to us and we will be in contact
                  about shipping your books.
                </p> */}
                {/* <input placeholder="Email*" name="email" id="email" /> */}
                {/* <input
                  placeholder="Mobile"
                  name="email"
                  id="email"
                  type="number"
                /> */}
                {!justSubmitted && (
                  <textarea
                    placeholder="Additional Notes"
                    className="textarea"
                    name={"message"}
                    id={"message"}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                )}
                <p>
                  {!justSubmitted &&
                    `Your books will be emailed to us and we will be in contact
                  about shipping your books.`}
                </p>
                {!justSubmitted && (
                  <button
                    className="cart-btn-2"
                    type="submit"
                    onClick={sendBookList}
                  >
                    Send my books list
                  </button>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
