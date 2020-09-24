import React from "react";

const Rating = ({ data }) => {
  const { frontmatter: book } = data;
  return (
    <div className="pro-details-rating">
      {[...Array(5).keys()].map((item) =>
        +book.rating > item ? (
          <i className="fa fa-star-o yellow"></i>
        ) : (
          <i className="fa fa-star-o"></i>
        )
      )}
    </div>
  );
};

export default Rating;
