import React from "react";

const CouponCard = () => {
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
              <button className="cart-btn-2" type="submit">
                Apply Coupon
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
