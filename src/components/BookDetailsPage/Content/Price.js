import React from "react";

const Price = ({ data }) => {
  const { frontmatter: book } = data;
  if (!book.newPrice) return <div className="product-details-price"></div>;
  const hasOld = +book.oldPrice > 0;

  return (
    <div className="product-details-price">
      {hasOld && (
        <>
          <span>{`$${+book.newPrice}`}</span>
          <span className="old">{`$${+book.oldPrice}`}</span>
        </>
      )}
      {!hasOld && <span className="unchanged">{`$${+book.newPrice}`}</span>}
    </div>
  );
};

export default Price;
