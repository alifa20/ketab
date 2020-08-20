import React from "react";
import Layout from "../components/Layout";
import MiniBookCardList from "../components/MiniBookCardList";
import CouponCard from "../components/CouponCard/CouponCard";

const CartPage = () => {
  return (
    <Layout>
      <div className="shop-area pt-95 pb-100 section-padding-1">
        <div className="container-fluid">
          <div className="row flex-row-reverse">
            <div className="col-lg-12">
              <div className="shop-bottom-area mt-35">
                <div className="cart-main-area pt-90 pb-100">
                  <div className="container">
                    <h3 className="cart-page-title">Your cart items</h3>
                    <CouponCard />
                    <MiniBookCardList />
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

export default CartPage;
