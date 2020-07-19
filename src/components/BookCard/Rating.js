import React from "react";

const Rating = ({ rating = 0 }) => {
  return (
    <div className="product-rating">
      {Array.from(Array(5).keys()).map((index) => (
        <i
          key={index}
          className={`fa fa-star-o ${index < rating && "yellow"}`}
        ></i>
      ))}
    </div>
  );
};

export default Rating;
