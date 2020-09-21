import { Link } from "gatsby";
import React from "react";

const Breadcrumb = ({ back, backText, current }) => {
  return (
    <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
      <div className="container">
        <div className="breadcrumb-content text-center">
          <ul>
            <li>
              <Link to={back}>{backText}</Link>
            </li>
            <li className="active">{current}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
