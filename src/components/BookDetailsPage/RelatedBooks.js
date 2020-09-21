import React from "react";
import BookCard from "../BookCard";

const RelatedBooks = ({ relatedBooks = [] }) => {
  if (relatedBooks.length < 1) return null;
  return (
    <div className="related-product-area pb-95">
      <div className="container">
        <div className="section-title text-center mb-50">
          <h2>Related Books</h2>
        </div>
        {relatedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default RelatedBooks;
