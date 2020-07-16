import React from "react";
import { BookCard } from "../BookCard";

const BookCardList = ({ books = [] }) => {
  return (
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
          <div className="tab-pane active" id="product-2">
            <div className="row">
              {books.map((book) => (
                <BookCard
                  key={book.node.fields.id}
                  book={book.node.fields.book}
                />
              ))}
              {/* <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
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
         */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCardList;
