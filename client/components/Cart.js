import React from 'react'
import {connect} from 'react-redux'
import { checkingOut } from '../store'
import { Route, Link } from "react-router-dom";

const Cart = (props) => {
  let { cart } = props;

  function combinedCart(cart) {
    let newCart = {};
    newCart.total = 0;
    newCart.totalItems = 0;

    for (let i = 0; i < cart.length; i++) {
      let id = cart[i].product.id;
      if (newCart.hasOwnProperty(id)) {
        newCart[id].orderProduct.quantity += cart[i].orderProduct.quantity;
        newCart[id].orderProduct.totalPrice = newCart[id].orderProduct.quantity * newCart[id].orderProduct.unitPrice;
        newCart.total += cart[i].orderProduct.totalPrice;
        newCart.totalItems += cart[i].orderProduct.quantity;
      } else {
        newCart[id] = cart[i];
        newCart.total += cart[i].orderProduct.totalPrice;
        newCart.totalItems += cart[i].orderProduct.quantity;
      }
    }
    console.log(newCart);
    return newCart;
  }

  let newCart = combinedCart(cart);
  let mappedObject;

  if (newCart.total > 0) {
    mappedObject = Object.keys(newCart).map(function (key, index) {
      if (key.length < 5)
        return (
          <div className="Edit-Product" key={index}>
            <img
              className="product-image"
              src="https://i.ebayimg.com/images/g/jEsAAOSwjoZfTr8e/s-l500.jpg"
            />
            <h4>Product Name: {newCart[key].product.name}</h4>
            <h4>Price Per Unit: ${newCart[key].orderProduct.unitPrice / 100}</h4>
            <select
              onChange={() =>
                updateCart(props.product, event.target.value, props.user)
              }
            >
              <option>{newCart[key].orderProduct.quantity}</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <button
              type="button"
              className="Delete-Product"
              onClick={() => removeItem(props.product, props.user)}
            >
              Delete
            </button>
          </div>
        );
    });
  }
  return (
    <div>
      <ul>
          {props.cart.map((order, index) => {
              return <li key = {index}>{order.product.name} x{order.orderProduct.quantity}    Total:{order.orderProduct.totalPrice}</li>
          })}
      </ul>
      <Link to="/checkout" onClick={() => props.checkout()}>Proceed To Checkout</Link>
    </div>
  )
}

const mapState = state => {
  return {
    cart: state.cart
  }
}

const mapDispatch = (dispatch) => ({
  checkout: () => dispatch(checkingOut())
});


export default connect(mapState,mapDispatch)(Cart)
