import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Cart = (props) => {
  let str;
  if (localStorage.getItem("cart") <= 0) {
    localStorage.setItem("cart", JSON.stringify(props.cart));
  } else {
    str = JSON.parse(localStorage.getItem("cart") || "[]");
  }

  return (
    <ul>
      {str.map((order, index) => {
        return (
          <li key={index}>
            {order.product.name} x{order.orderProduct.quantity} Total:
            {order.orderProduct.totalPrice}
          </li>
        );
      })}
    </ul>
  );
};

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapState)(Cart);
