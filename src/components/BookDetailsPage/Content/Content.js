import React from "react";
import Categories from "./Categories";
import Social from "./Social";
import DetailsImage from "./DetailsImage";
// import SizeColor from "./SizeColor";
import Tag from "./Tag";
import Price from "./Price";
const Content = ({ data }) => {
  return (
    <div className="shop-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="product-details">
              <DetailsImage />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="product-details-content ml-70">
              <h2>{data.frontmatter.title}</h2>
              <Price />
              <div className="pro-details-rating-wrap">
                <div className="pro-details-rating">
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o yellow"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                {/* <span>
                  <a href="#">3 Reviews</a>
                </span> */}
              </div>

              <p>{data.frontmatter.description}</p>
              <div className="pro-details-list">
                <ul>
                  <li>- 0.5 mm Dail</li>
                  <li>- Inspired vector icons</li>
                  <li>- Very modern style </li>
                </ul>
              </div>
              {/* <SizeColor /> */}
              <div className="pro-details-quality">
                <div className="cart-plus-minus">
                  <div className="dec qtybutton">-</div>
                  <input
                    className="cart-plus-minus-box"
                    type="text"
                    name="qtybutton"
                    value="2"
                  />
                  <div className="inc qtybutton">+</div>
                </div>
                <div className="pro-details-cart btn-hover">
                  <a href="#">Add To Cart</a>
                </div>
                <div className="pro-details-wishlist">
                  <a href="#">
                    <i className="fa fa-heart-o"></i>
                  </a>
                </div>
                <div className="pro-details-compare">
                  <a href="#">
                    <i className="pe-7s-shuffle"></i>
                  </a>
                </div>
              </div>
              <Categories />
              {/* <Tag /> */}
              {/* <Social /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
