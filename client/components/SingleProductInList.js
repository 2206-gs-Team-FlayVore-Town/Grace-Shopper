import React from "react";
import { Link } from "react-router-dom";

import AddToCart from "./AddToCart";

/**
 * COMPONENT
 */
export const SingleProductInList = (props) => {
  const { product } = props;
  return (
    <div className="column">
      <Link to={`/products/${product.id}`}>
        <img
          className="all-product-view-thumbnail"
          src="https://i.ebayimg.com/images/g/jEsAAOSwjoZfTr8e/s-l500.jpg"
        />
        <div style={{ fontSize: 20 }}>{product.name}</div>
        <div className="row">
          <div style={{ fontSize: 12 }}>
            ${(product.price * 0.01).toFixed(2)}
          </div>
          <div style={{ fontSize: 12 }}>
            {(product.rating * 0.1).toFixed(1)}
          </div>
        </div>
      </Link>

      <div style={{ fontSize: 10 }}> {product.specifications} </div>
      <AddToCart product={product.id} />
    </div>
  );
};
