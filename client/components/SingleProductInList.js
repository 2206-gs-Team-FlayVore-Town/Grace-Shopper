import React from 'react'

import AddToCart from "./AddToCart";

/**
 * COMPONENT
 */
export const SingleProductInList = props => {
  const { product } = props;
  return (
    <div className="column">
        <img className="all-product-view-thumbnail" src="https://i.ebayimg.com/images/g/jEsAAOSwjoZfTr8e/s-l500.jpg"/>
        <div style={{fontSize: 20}}>{product.name}</div>
        <div className="row">
        <div style={{fontSize: 12}}>${(product.price * .01).toFixed(2)}</div>
        <div style={{fontSize: 12}}>{(product.rating * .1).toFixed(1)}</div>
        </div>
        
        <div style={{fontSize: 10}}> {product.specifications} </div>
        <AddToCart product={product.id}/>
    </div>
  )
}