import React from "react";
import netlifyIdentity from "netlify-identity-widget";

const TopLoginSignup = () => {
  const onIconClick = (e) => {
    e.preventDefault();
    netlifyIdentity.open();
  };

  return (
    <div className="same-style account-satting">
      <a className="account-satting-active" href="/" onClick={onIconClick}>
        <i className="pe-7s-user-female"></i>
      </a>
      {/* <div className="account-dropdown">
        <ul>
          <li>
            <a href="login-register.html">Login</a>
          </li>
          <li>
            <a href="login-register.html">Register</a>
          </li>
          <li>
            <a href="wishlist.html">Wishlist </a>
          </li>
          <li>
            <a href="my-account.html">my account</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default TopLoginSignup;
