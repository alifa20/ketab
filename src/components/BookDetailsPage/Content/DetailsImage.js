import React from "react";

const DetailsImage = ({ data }) => {
  const { frontmatter: book } = data;

  const image = book.featuredimage?.childImageSharp
    ? book.featuredimage?.childImageSharp.fluid.src
    : "https://picsum.photos/id/365/270/345";

  return (
    <div className="product-details-img">
      <div className="tab-content jump">
        <div id="shop-details-1" className="tab-pane large-img-style active">
          <img src={image} alt="" />
          {/* <span className="dec-price">-10%</span>
          <div className="img-popup-wrap">
            <a
              className="img-popup"
              href="assets/img/product-details/b-large-1.jpg"
            >
              <i className="pe-7s-expand1"></i>
            </a>
          </div> */}
        </div>
        {/* <div id="shop-details-2" className="tab-pane large-img-style">
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
        </div> */}
      </div>
      {/* <div className="shop-details-tab nav">
        <a
          className="shop-details-overly active"
          href="#shop-details-1"
          data-toggle="tab"
        >
          <img src="assets/img/product-details/small-2.jpg" alt="" />
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
    */}
    </div>
  );
};

export default DetailsImage;
