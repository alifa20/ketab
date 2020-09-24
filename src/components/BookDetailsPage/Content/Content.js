import React, { useContext } from "react";
import { constants, RootContext, useBasket } from "../../../shared";
import Categories from "./Categories";
import DetailsImage from "./DetailsImage";
import Price from "./Price";
import Rating from "./Rating";

const Content = ({ data }) => {
  const { add, remove } = useBasket(constants.BASKET_KEY, {});
  const { state } = useContext(RootContext);
  const canRemove = state.basket[data.id];

  const onAddClick = (e) => {
    e.preventDefault();
    add(data);
  };

  const onRemoveClick = (e) => {
    e.preventDefault();
    remove(data);
  };

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
              <Price data={data} />
              <div className="pro-details-rating-wrap">
                <Rating data={data} />
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
                  {!canRemove && (
                    <a href="#" onClick={onAddClick}>
                      Add To Cart
                    </a>
                  )}
                  {canRemove && (
                    <a href="#" onClick={onRemoveClick}>
                      Remove
                    </a>
                  )}
                </div>
                <div className="pro-details-wishlist">
                  <a href="#">
                    <i className="fa fa-heart-o"></i>
                  </a>
                </div>
                {/* <div className="pro-details-compare">
                  <a href="#">
                    <i className="pe-7s-shuffle"></i>
                  </a>
                </div> */}
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
