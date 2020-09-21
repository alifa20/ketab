import React from "react";
// import SizeColor from "./SizeColor";

const Content = ({ data }) => {
  return (
    <div className="shop-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="product-details">
              <div className="product-details-img">
                <div className="tab-content jump">
                  <div
                    id="shop-details-1"
                    className="tab-pane large-img-style active"
                  >
                    <img src="assets/img/product-details/large-1.jpg" alt="" />
                    <span className="dec-price">-10%</span>
                    <div className="img-popup-wrap">
                      <a
                        className="img-popup"
                        href="assets/img/product-details/b-large-1.jpg"
                      >
                        <i className="pe-7s-expand1"></i>
                      </a>
                    </div>
                  </div>
                  <div id="shop-details-2" className="tab-pane large-img-style">
                    <img src="assets/img/product-details/large-2.jpg" alt="" />
                    <span className="dec-price">-10%</span>
                    <div className="img-popup-wrap">
                      <a
                        className="img-popup"
                        href="assets/img/product-details/b-large-2.jpg"
                      >
                        <i className="pe-7s-expand1"></i>
                      </a>
                    </div>
                  </div>
                  <div id="shop-details-3" className="tab-pane large-img-style">
                    <img src="assets/img/product-details/large-3.jpg" alt="" />
                    <span className="dec-price">-10%</span>
                    <div className="img-popup-wrap">
                      <a
                        className="img-popup"
                        href="assets/img/product-details/b-large-3.jpg"
                      >
                        <i className="pe-7s-expand1"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="shop-details-tab nav">
                  <a
                    className="shop-details-overly active"
                    href="#shop-details-1"
                    data-toggle="tab"
                  >
                    <img src="assets/img/product-details/small-1.jpg" alt="" />
                  </a>
                  <a
                    className="shop-details-overly"
                    href="#shop-details-2"
                    data-toggle="tab"
                  >
                    <img src="assets/img/product-details/small-2.jpg" alt="" />
                  </a>
                  <a
                    className="shop-details-overly"
                    href="#shop-details-3"
                    data-toggle="tab"
                  >
                    <img src="assets/img/product-details/small-3.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="product-details-content ml-70">
              <h2>{data.frontmatter.title}</h2>
              <div className="product-details-price">
                <span>$18.00 </span>
                <span className="old">$20.00 </span>
              </div>
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
              <div className="pro-details-meta">
                <span>Categories :</span>
                <ul>
                  <li>
                    <a href="#">Minimal,</a>
                  </li>
                  <li>
                    <a href="#">Furniture,</a>
                  </li>
                  <li>
                    <a href="#">Fashion</a>
                  </li>
                </ul>
              </div>
              <div className="pro-details-meta">
                <span>Tag :</span>
                <ul>
                  <li>
                    <a href="#">Fashion, </a>
                  </li>
                  <li>
                    <a href="#">Furniture,</a>
                  </li>
                  <li>
                    <a href="#">Electronic</a>
                  </li>
                </ul>
              </div>
              <div className="pro-details-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
