import { Link } from "gatsby";
import React, { useContext } from "react";
import { constants, RootContext, useBasket } from "../../shared";
import Rating from "./Rating";

const BookCard = ({ book }) => {
  const { state } = useContext(RootContext);
  const { add, remove } = useBasket(constants.BASKET_KEY, {});

  const onAddClick = (e) => {
    e.preventDefault();
    add(book);
  };

  const onRemoveClick = (e) => {
    e.preventDefault();
    remove(book);
  };

  if (!book) return null;
  const canRemove = state.basket[book.id];
  const { frontmatter: data } = book;

  const image = data.featuredimage?.childImageSharp
    ? data.featuredimage?.childImageSharp.fluid.src
    : "https://picsum.photos/id/365/270/345";

  const rating = data.rating;

  return (
    <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
      <div className="product-wrap mb-25 scroll-zoom">
        <div className="product-img">
          <Link className="button" to={book.fields.slug}>
            <img className="default-img" src={image} alt="" />
            <img className="hover-img" src={image} alt="" />
          </Link>

          {+data.salePercentage > 0 && (
            <span className="pink">{`-${data.salePercentage}%`}</span>
          )}
          <div className="product-action">
            <div className="pro-same-action pro-wishlist">
              <a title="Wishlist" href="/book">
                <i className="pe-7s-like"></i>
              </a>
            </div>
            <div className="pro-same-action pro-cart">
              {!canRemove && (
                <a title="Add To Cart" href="/book-add" onClick={onAddClick}>
                  <i className="pe-7s-cart"></i> Add to cart
                </a>
              )}
              {canRemove && (
                <a title="Add To Cart" href="/book-add" onClick={onRemoveClick}>
                  <i className="pe-7s-cart"></i> Remove
                </a>
              )}
            </div>
            <div className="pro-same-action pro-quickview">
              <a
                title="Quick View"
                href="/book"
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
            <a href="product-details.html">{data.title}</a>
          </h3>
          <Rating rating={rating} />
          <div className="product-price">
            <span>$ 60.00</span>
            {+data.oldPrice > 0 && (
              <span className="old">{`$ ${data.salePercentage}`}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
