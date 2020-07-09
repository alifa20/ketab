import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <>
    <div className="slider-area">
      <div className="slider-active-2 owl-carousel nav-style-3">
        <div
          className="slider-height-5 d-flex align-items-center bg-img"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="slider-content-6 slider-animated-1 text-center">
                  <h1 className="animated">Welcome to Flone</h1>
                  <p className="animated">30% off Summer Vacation</p>
                  <div className="slider-btn-5 btn-hover">
                    <a className="animated" href="shop.html">
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-height-5 d-flex align-items-center bg-img"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="slider-content-6 slider-animated-1 text-center">
                  <h1 className="animated">Welcome to Flone</h1>
                  <p className="animated">30% off Summer Vacation</p>
                  <div className="slider-btn-5 btn-hover">
                    <a className="animated" href="shop.html">
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="welcome-area pt-95 pb-90">
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Flone</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commo consequat irure{" "}
          </p>
        </div>
      </div>
    </div>
    <div className="product-area pb-70">
      <div className="container">
        <div className="product-tab-list nav pb-55 text-center">
          <a href="#product-1" data-toggle="tab">
            <h4>New Arrivals </h4>
          </a>
          <a className="active" href="#product-2" data-toggle="tab">
            <h4>Best Sellers </h4>
          </a>
          <a href="#product-3" data-toggle="tab">
            <h4>Sale Items</h4>
          </a>
        </div>
        <div className="tab-content jump">
          <div className="tab-pane" id="product-1">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-8.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-6.jpg"
                        alt=""
                      />
                    </a>
                    <span className="pink">-10%</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                      <span className="old">$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-7.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-4-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="purple">New</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-6.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-6-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="pink">-10%</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                      <span className="old">$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-5.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-5-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="purple">New</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-4.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-4-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="pink">-10%</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                      <span className="old">$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-3.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-3-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="purple">New</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-2.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-2-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="pink">-10%</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                      <span className="old">$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-1-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="purple">New</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane active" id="product-2">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-1-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="pink">-10%</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                      <span className="old">$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-2.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-2-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="purple">New</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-3.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-3-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="pink">-10%</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                      <span className="old">$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-4.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-4-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="purple">New</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-5.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-5-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="pink">-10%</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                      <span className="old">$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-6.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-6-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="purple">New</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-7.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-4-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="pink">-10%</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                      <span className="old">$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-8.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-6.jpg"
                        alt=""
                      />
                    </a>
                    <span className="purple">New</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="product-3">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-6.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-6-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="pink">-10%</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                      <span className="old">$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-5.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-5-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="purple">New</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-4.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-4-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="pink">-10%</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                      <span className="old">$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-3.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-3-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="purple">New</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-2.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-2-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="pink">-10%</span>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                      <span className="old">$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-1-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="purple">New</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-8.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-6.jpg"
                        alt=""
                      />
                    </a>
                    <span className="pink">-10%</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                      <span className="old">$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                <div className="product-wrap mb-25 scroll-zoom">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="assets/img/product/pro-7.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/img/product/pro-4-1.jpg"
                        alt=""
                      />
                    </a>
                    <span className="purple">New</span>
                    <div className="product-action">
                      <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#">
                          <i className="pe-7s-like"></i>
                        </a>
                      </div>
                      <div className="pro-same-action pro-cart">
                        <a title="Add To Cart" href="#">
                          <i className="pe-7s-cart"></i> Add to cart
                        </a>
                      </div>
                      <div className="pro-same-action pro-quickview">
                        <a
                          title="Quick View"
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <i className="pe-7s-look"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content text-center">
                    <h3>
                      <a href="product-details.html">T- Shirt And Jeans</a>
                    </h3>
                    <div className="product-rating">
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o yellow"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="product-price">
                      <span>$ 60.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="subscribe-area-3 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 ml-auto mr-auto">
            <div className="subscribe-style-3 text-center">
              <h2>Subscribe </h2>
              <p>Subscribe to our newsletter to receive news on update</p>
              <div id="mc_embed_signup" className="subscribe-form-3 mt-35">
                <form
                  id="mc-embedded-subscribe-form"
                  className="validate"
                  noValidate=""
                  target="_blank"
                  name="mc-embedded-subscribe-form"
                  method="post"
                  action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                >
                  <div id="mc_embed_signup_scroll" className="mc-form">
                    <input
                      className="email"
                      type="email"
                      required=""
                      placeholder="Youe Email Addres"
                      name="EMAIL"
                      value=""
                      // defaultValue=""
                      onChange={() => {}}
                    />
                    <div className="mc-news" aria-hidden="true">
                      <input
                        type="text"
                        value=""
                        tabIndex="-1"
                        name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                        onChange={() => {}}
                      />
                    </div>
                    <div className="clear-3">
                      <input
                        id="mc-embedded-subscribe"
                        className="button"
                        type="submit"
                        name="subscribe"
                        value="Subscribe"
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="instagram-area">
      <div className="instagram-active owl-carousel">
        <div className="single-instagram">
          <a href="#">
            <img src="assets/img/instagram/instagram-1.jpg" alt="" />
          </a>
        </div>
        <div className="single-instagram">
          <a href="#">
            <img src="assets/img/instagram/instagram-2.jpg" alt="" />
          </a>
        </div>
        <div className="single-instagram">
          <a href="#">
            <img src="assets/img/instagram/instagram-3.jpg" alt="" />
          </a>
        </div>
        <div className="single-instagram">
          <a href="#">
            <img src="assets/img/instagram/instagram-4.jpg" alt="" />
          </a>
        </div>
        <div className="single-instagram">
          <a href="#">
            <img src="assets/img/instagram/instagram-5.jpg" alt="" />
          </a>
        </div>
        <div className="single-instagram">
          <a href="#">
            <img src="assets/img/instagram/instagram-2.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
