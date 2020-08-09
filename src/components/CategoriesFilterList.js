import React from "react";

const CategoriesFilterList = ({ categories }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.node.id}>
          <div className="sidebar-widget-list-left">
            <input type="checkbox" value="" />
            <a href="#">{category.node.frontmatter.title}</a>
            <span className="checkmark"></span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesFilterList;
