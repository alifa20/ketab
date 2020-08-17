import React, { useContext } from "react";
import { constants, RootContext, useBasket } from "../../shared";
import Rating from "./Rating";

const BookCard = ({ book }) => {
  // const [items, setItems] = useBasket([], constants.BASKET_KEY);
  // console.log("itemssss", items);
  const { state } = useContext(RootContext);
  const { add, remove } = useBasket(constants.BASKET_KEY, {});

  const onAddClick = (e) => {
    e.preventDefault();
    add(book);
    // setItems([...items, { id: book.id, title: book.title }]);
    // const currentItemsRaw = window.localStorage.getItem(constants.BASKET_KEY);
    // const currentItems = currentItemsRaw ? JSON.parse(currentItemsRaw) : [];

    // console.log("book.id", book.id);
    // window.localStorage.setItem(
    //   constants.BASKET_KEY,
    //   JSON.stringify([...currentItems, { id: book.id, title: book.title }])
    // );
  };

  const onRemoveClick = (e) => {
    e.preventDefault();
    remove(book);
    // setItems([...items, { id: book.id, title: book.title }]);
    // const currentItemsRaw = window.localStorage.getItem(constants.BASKET_KEY);
    // const currentItems = currentItemsRaw ? JSON.parse(currentItemsRaw) : [];

    // console.log("book.id", book.id);
    // window.localStorage.setItem(
    //   constants.BASKET_KEY,
    //   JSON.stringify([...currentItems, { id: book.id, title: book.title }])
    // );
  };

  if (!book) return null;
  // const canRemove = book.id in state.basket ;
  const canRemove = state.basket[book.id];
  const { frontmatter: data } = book;
  const image = data.featuredimage?.childImageSharp
    ? data.featuredimage?.childImageSharp.fluid.src
    : "https://picsum.photos/id/365/270/345";

  const rating = 0;

  return (
    <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
      <div className="product-wrap mb-25 scroll-zoom">
        <div className="product-img">
          <a href="product-details.html">
            <img className="default-img" src={image} alt="" />
            <img className="hover-img" src={image} alt="" />
          </a>
          <span className="pink">-10%</span>
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
            <span className="old">$ 60.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
