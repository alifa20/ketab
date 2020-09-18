import React, { useState } from "react";
import Layout from "../components/Layout";
import { getProfile, isAuthenticated, login, logout } from "../utils/auth";
// const Home = ({ user }) => {
//   return <p>Hi, {user.name ? user.name : "friend"}!</p>;
// };
// const Settings = () => <p>Settings</p>;
// const Billing = () => <p>Billing</p>;

const Account = () => {
  const isLoggedIn = isAuthenticated();
  if (!isLoggedIn) {
    login();
    return <p>Redirecting to login...</p>;
  }

  const onLoginForm = (e) => {
    e.preventDefault();
    // netlifyIdentity.open();
    login();
  };

  const onLogoutForm = (e) => {
    e.preventDefault();
    logout();
  };

  const user = getProfile();

  return (
    // <>
    //   <nav>
    //     <Link to="/account/">Home</Link>
    //     <Link to="/account/settings/">Settings</Link>
    //     <Link to="/account/billing/">Billing</Link>
    //     <a
    //       href="#logout"
    //       onClick={(e) => {
    //         logout();
    //         e.preventDefault();
    //       }}
    //     >
    //       Log Out
    //     </a>
    //   </nav>
    //   hey
    // </>

    <Layout>
      <div className="shop-area pt-95 pb-100 section-padding-1">
        <div className="container-fluid">
          <div className="row flex-row-reverse">
            <div className="col-lg-12">
              <div className="shop-bottom-area mt-35">
                <div className="cart-main-area pt-90 pb-100">
                  <div className="container">
                    <div className="discount-code-wrapper">
                      {/* <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          Submit your book list
                        </h4>
                      </div> */}
                      <div className="discount-code">
                        {isLoggedIn && (
                          <p>You are already logged in the system</p>
                        )}
                        <div className="billing-info-wrap">
                          <div className="checkout-account-toggle open-toggle2 mb-30">
                            <button
                              className={`checkout-btn ${
                                isLoggedIn && "loggedIn"
                              }`}
                              type="submit"
                              onClick={isLoggedIn ? onLogoutForm : onLoginForm}
                            >
                              {isLoggedIn && <>Logout</>}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
