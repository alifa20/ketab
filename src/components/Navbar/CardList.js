import React from "react";
import { useBasket, constants } from "../../shared";

const LineItem = ({ item }) => {
  const { remove } = useBasket(constants.BASKET_KEY, {});
  const { frontmatter: data } = item;
  const image = data.featuredimage?.childImageSharp
    ? data.featuredimage?.childImageSharp.fluid.src
    : "https://picsum.photos/id/365/270/345";

  const onDelete = () => {
    remove(item);
  };

  return (
    <li className="single-shopping-cart">
      <div className="shopping-cart-img">
        <a href="/cart">
          <img alt="" src={image} width={82} height={67} />
        </a>
      </div>
      <div className="shopping-cart-title">
        <h4>
          <a href="#">{data.title}</a>
        </h4>
        <h6>Qty: 02</h6>
        <span>$260.00</span>
      </div>
      <div className="shopping-cart-delete">
        <a onClick={onDelete}>
          <i className="fa fa-times-circle"></i>
        </a>
      </div>
    </li>
  );
};
const CardList = () => {
  const { items } = useBasket(constants.BASKET_KEY, {});
  const userAddedItems = Object.values(items).filter(Boolean);

  return (
    <ul>
      {userAddedItems.map(({ item }) => (
        <LineItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CardList;
