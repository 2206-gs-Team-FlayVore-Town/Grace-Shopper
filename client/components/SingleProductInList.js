import React from 'react'

import AddToCart from "./AddToCart";

/**
 * COMPONENT
 */
export const SingleProductInList = props => {
  const { product } = props;
  console.log("@@@", product);

  return (
    <div className="column">
        <img className="all-product-view-thumbnail" src="https://i.ebayimg.com/images/g/jEsAAOSwjoZfTr8e/s-l500.jpg"/>
        <div style={{fontSize: 20}}>Product Title</div>
        <div className="row">
        <div style={{fontSize: 12}}>Price: $X.XX</div>
        <div style={{fontSize: 12}}>Rating: */5</div>
        </div>
        
        <div style={{fontSize: 10}}>Description: words words words words words words words words words words words words words words words </div>
        <AddToCart />
    </div>
  )
}