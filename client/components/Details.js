import React from "react";
import { Link } from "react-router-dom";

export default function Details(props) {
  //   if (props) {
  //     var { name, price, title, rating, description, colors, id } = props.product;
  //   }

  return (
    <div className="container">
      <div className="inner-container">
        <div className="item-left">
          {/* placeholder image */}
          <img src="https://cdn.shopify.com/s/files/1/0266/7400/4031/products/iotr-brassdragon3_1024x1024.jpg?v=1657639445" />
        </div>
        <div className="item-right">
          <div className="header">
            <p>Brand Name</p>
            <h1>Product Title</h1>
            <h3>Product Price</h3>
            <p>Description</p>
          </div>
          <div className="rating">4.5/5 Rating goes here</div>

          <div className="choices">
            Pick a Color
            <div className="select">
              <select id="color">
                {/* {colors.map((color) => (
                  <option key={id} className={color} value={color}>
                    {color}
                  </option>
                ))} */}
                <option className="red" value="red">
                  Red
                </option>
              </select>
            </div>
          </div>
          <div className="button-container">
            <button className="choice-button">Add to Cart</button>
            <button className="wishlist">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}
