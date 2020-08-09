import React from "react";

const CategoriesFilterList = ({ categories }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.node.frontmatter.id}>
          <div className="sidebar-widget-list-left">
            <input type="checkbox" value="" />
            <a href="#">
              {category.node.frontmatter.title}
              {/* <span>4</span> */}
            </a>
            <span className="checkmark"></span>
          </div>
        </li>
      ))}
      {/* <li>
        <div className="sidebar-widget-list-left">
          <input type="checkbox" value="" />
          <a href="#">
            Green <span>4</span>
          </a>
          <span className="checkmark"></span>
        </div>
      </li> */}
    </ul>
  );
};

export default CategoriesFilterList;
