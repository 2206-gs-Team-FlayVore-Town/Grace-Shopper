import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import {
  removingFromCart,
  changingProductQuantity,
  checkingOut,
} from "../store";

const Cart = (props) => {
  let { user, cart, deleteProduct, changeProductQuantity } = props;

  function combinedCart(cart) {
    let newCart = {};
    newCart.total = 0;
    newCart.totalItems = 0;

    for (let i = 0; i < cart.length; i++) {
      let product = cart[i].products[0];
      let orderProduct;
      let id;
      if (product !== undefined) {
        orderProduct = product.orderproducts;
        id = product.id;
        if (newCart.hasOwnProperty(id)) {
          newCart[id].orderproducts.quantity = orderProduct.quantity;
          newCart[id].orderproducts.totalPrice =
            newCart[id].orderproducts.quantity *
            newCart[id].orderproducts.unitPrice;
        } else {
          newCart[id] = product;
        }
      }
    }

    for (let key in newCart) {
      if (key.length < 5) {
        newCart.total += newCart[key].orderproducts.totalPrice;
        newCart.totalItems += newCart[key].orderproducts.quantity;
      }
    }
    return newCart;
  }
  let newCart;

  if (cart) {
    newCart = combinedCart(cart);
  }

  let mappedObject;

  const handleChange = (product) => {
    let quantity = event.target.value;
    changeProductQuantity(product, quantity, user); //assuming id of product and user being passed down
  };

  if (newCart.total > 0) {
    mappedObject = Object.keys(newCart).map(function (key, index) {
      let product = newCart[key];
      let { orderproducts } = product;
      if (key.length < 5)
        return (
          <div className="column" key={index}>
            <img className="product-image" src={product.imgURL} />
            <h4>Product Name: {product.name}</h4>
            <h4>Price Per Unit: ${orderproducts.unitPrice / 100}</h4>
            <label htmlFor="quantity">Quantity:</label>
            <input
              onChange={() => handleChange(product)}
              type="number"
              id={`quantity${product}`}
              name="quantity"
              min="1"
              max={product.stock}
              defaultValue={orderproducts.quantity}
            />
            <button
              type="button"
              className="Delete-Product"
              onClick={() => deleteProduct(product, user)}
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
        <Link to="/checkout" onClick={() => props.checkout()}>
          Proceed To Checkout
        </Link>
        <div className="row">
          {mappedObject ? mappedObject : "Nothing in Cart"}
        </div>
      </div>
    </ul>
  );
};

const mapState = (state) => {
  return {
    cart: state.cart,
    user: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    checkout: () => dispatch(checkingOut()),
    changeProductQuantity: (product, productQuantity, user) =>
      dispatch(changingProductQuantity(product, productQuantity, user)),
    deleteProduct: (product, user) => dispatch(removingFromCart(product, user)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
