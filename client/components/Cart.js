import React from 'react'
import {connect} from 'react-redux'
import { Route, Link } from "react-router-dom";
import {removingFromCart, checkingOut } from "../store";

const Cart = (props) => {
  let { user, cart, deleteProduct } = props;

  function combinedCart(cart) {
    let newCart = {};
    console.log("after new cart", newCart)
    newCart.total = 0;
    newCart.totalItems = 0;
    
    for (let i = 0; i < cart.length; i++) {
      let id = cart[i].product.id;
      if (newCart.hasOwnProperty(id)) {
        newCart[id].orderProduct.quantity += cart[i].orderProduct.quantity;
        newCart[id].orderProduct.totalPrice =
          newCart[id].orderProduct.quantity *
          newCart[id].orderProduct.unitPrice;
        newCart.total += cart[i].orderProduct.totalPrice;
        newCart.totalItems += cart[i].orderProduct.quantity;
      } else {
        newCart[id] = cart[i];
        newCart.total += cart[i].orderProduct.totalPrice;
        newCart.totalItems += cart[i].orderProduct.quantity;
      }
      console.log(newCart)
    }
    // console.log(newCart);
    return newCart;
  }

  let newCart = combinedCart(cart);
  let mappedObject;
  
  // const handleChange = () => {
  //   let quantity = document.getElementById(`quantity${props.product}`).value
  //   props.addProduct(props.product, props.user, quantity) //assuming id of product and user being passed down
  // }

  if (newCart.total > 0) {
    mappedObject = Object.keys(newCart).map(function (key, index) {
      if (key.length < 5)
        return (
          <div className="column" key={index}>
            <img
              className="product-image"
              src="https://i.ebayimg.com/images/g/jEsAAOSwjoZfTr8e/s-l500.jpg"
            />
            <h4>Product Name: {newCart[key].product.name}</h4>
            <h4>
              Price Per Unit: ${newCart[key].orderProduct.unitPrice / 100}
            </h4>
              <label htmlFor="quantity">Quantity:</label>
              <input onChange={() => handleChange()} type="number" id="quantity" name="quantity" min="1" max={newCart[key].product.stock} defaultValue={newCart[key].orderProduct.quantity} />
            <button
              type="button"
              className="Delete-Product"
              onClick={() => deleteProduct(newCart[key].product, user)}
            >
              Delete
            </button>
          </div>
        );
    });
  }
  return (
    <ul>
      <div>
        <h3>
          Cart Subtotal ({newCart.totalItems}{" "}
          {Object.keys(newCart).length === 1 ? "item" : "items"}): $
          {newCart.total / 100}
        </h3>
        <button> Proceed to Checkout</button>
        <Link to="/checkout" onClick={() => props.checkout()}>Proceed To Checkout</Link>
        <div className="row">
          {mappedObject ? mappedObject : "Nothing in Cart"}
        </div>
      </div>
    </ul>
  );
};

const mapState = state => {
  return {
    cart: state.cart,
    user: state.user,
  }
}

const mapDispatch = dispatch => {
  return {
    checkout: () => dispatch(checkingOut()),
    deleteProduct: (product,user) => dispatch(removingFromCart(product, user))
  }
}

export default connect(mapState, mapDispatch)(Cart);