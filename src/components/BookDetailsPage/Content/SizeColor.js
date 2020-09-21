import React from "react";

const SizeColor = () => {
  return (
    <div className="pro-details-size-color">
      <div className="pro-details-color-wrap">
        <span>Color</span>
        <div className="pro-details-color-content">
          <ul>
            <li className="blue"></li>
            <li className="maroon active"></li>
            <li className="gray"></li>
            <li className="green"></li>
            <li className="yellow"></li>
          </ul>
        </div>
      </div>
      <div className="pro-details-size">
        <span>Size</span>
        <div className="pro-details-size-content">
          <ul>
            <li>
              <a href="#">s</a>
            </li>
            <li>
              <a href="#">m</a>
            </li>
            <li>
              <a href="#">l</a>
            </li>
            <li>
              <a href="#">xl</a>
            </li>
            <li>
              <a href="#">xxl</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SizeColor;
