import React from "react";
import { Link } from "gatsby";
const Navbar = () => {
  return (
    <header className="header-area sticky-bar header-padding-3 header-res-padding clearfix transparent-bar header-hm-7">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-4 col-2">
            <div className="clickable-menu clickable-mainmenu-active">
              <Link to="/">
                <i className="pe-7s-menu"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-5">
            <div className="logo text-center logo-hm5">
              <Link className="sticky-none" to="/">
                <img alt="" src="assets/img/logo/logo-2.png" />
                خانه
              </Link>
              <Link className="sticky-none" to="/">
                <img alt="" src="assets/img/logo/logo-2.png" />
                کتابها
              </Link>
              <Link className="sticky-block" to="/">
                {/* <img alt="" src="assets/img/logo/logo.png" /> */}
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-4 col-md-4 col-5">
            <div className="header-right-wrap header-right-wrap-white">
              <div className="same-style header-search">
                <Link className="search-active" to="/">
                  <i className="pe-7s-search"></i>
                </Link>
                <div className="search-content">
                  {/* <form action="#">
                                <input type="text" placeholder="Search">
                                <button className="button-search"><i className="pe-7s-search"></i></button>
                            </form> */}
                </div>
              </div>
              <div className="same-style account-satting">
                <Link className="account-satting-active" to="/">
                  <i className="pe-7s-user-female"></i>
                </Link>
                <div className="account-dropdown">
                  <ul>
                    <li>
                      <Link to="login-register.html">Login</Link>
                    </li>
                    <li>
                      <Link to="login-register.html">Register</Link>
                    </li>
                    <li>
                      <Link to="wishlist.html">Wishlist </Link>
                    </li>
                    <li>
                      <Link to="my-account.html">my account</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="same-style header-wishlist">
                <Link to="wishlist.html">
                  <i className="pe-7s-like"></i>
                </Link>
              </div>
              <div className="same-style cart-wrap">
                <button className="icon-cart">
                  <i className="pe-7s-shopbag"></i>
                  <span className="count-style">02</span>
                </button>
                <div className="shopping-cart-content">
                  <ul>
                    <li className="single-shopping-cart">
                      <div className="shopping-cart-img">
                        <Link to="/">
                          <img alt="" src="assets/img/cart/cart-1.png" />
                        </Link>
                      </div>
                      <div className="shopping-cart-title">
                        <h4>
                          <Link to="/">T- Shart &amp; Jeans </Link>
                        </h4>
                        <h6>Qty: 02</h6>
                        <span>$260.00</span>
                      </div>
                      <div className="shopping-cart-delete">
                        <Link to="/">
                          <i className="fa fa-times-circle"></i>
                        </Link>
                      </div>
                    </li>
                    <li className="single-shopping-cart">
                      <div className="shopping-cart-img">
                        <Link to="/">
                          <img alt="" src="assets/img/cart/cart-2.png" />
                        </Link>
                      </div>
                      <div className="shopping-cart-title">
                        <h4>
                          <Link to="/">T- Shart &amp; Jeans </Link>
                        </h4>
                        <h6>Qty: 02</h6>
                        <span>$260.00</span>
                      </div>
                      <div className="shopping-cart-delete">
                        <Link to="/">
                          <i className="fa fa-times-circle"></i>
                        </Link>
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
                    <Link className="default-btn" to="cart-page.html">
                      view cart
                    </Link>
                    <Link className="default-btn" to="checkout.html">
                      checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
