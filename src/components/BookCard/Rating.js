import React from "react";

const Rating = ({ rating = 0 }) => {
  return (
    <div className="product-rating">
      {Array.from(Array(5).keys()).map((a) => (
        <i className={`fa fa-star-o ${a < rating && "yellow"}`}></i>
      ))}
    </div>
  );
};

export default Rating;
