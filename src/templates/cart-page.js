import React from "react";
import Layout from "../components/Layout";
import MiniBookCardList from "../components/MiniBookCardList";

const CartPage = () => {
  return (
    <Layout>
      <div className="shop-area pt-95 pb-100 section-padding-1">
        <div className="container-fluid">
          <div className="row flex-row-reverse">
            <div className="col-lg-9">
              <div className="shop-bottom-area mt-35">
                <MiniBookCardList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
