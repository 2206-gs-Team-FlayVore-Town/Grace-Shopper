import React from "react";
import { Link } from "react-router-dom";

export default function Details(props) {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="item-left">Item Picture</div>
        <div className="item-right">
          <div className="header">
            <p>Brand Name</p>
            <h1>Product Title</h1>
            <h3>Product Price</h3>
          </div>
          <div className="rating">
            4.5/5 Rating goes here
            <Link>
              <p>Description</p>
            </Link>
          </div>
          <div className="choices">
            Pick a Color
            <div className="select">
              <select id="color">
                <option className="red" value="red">
                  Red
                </option>
                <option className="blue" value="blue">
                  Blue
                </option>
                <option className="green" value="green">
                  Green
                </option>
              </select>
            </div>
          </div>
          <div className="others">Others</div>
        </div>
      </div>
    </div>
  );
}
