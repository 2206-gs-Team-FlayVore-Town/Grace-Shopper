import React from "react";
import { connect } from "react-redux";
import EditCart from "./EditCart";

const Cart = (props) => {
  let { cart } = props;

  function combinedCart(cart) {
    let newCart = {};
    newCart.total = 0;
    newCart.totalItems = 0;

    for (let i = 0; i < cart.length; i++) {
      let id = cart[i].product.id;
      if (newCart.hasOwnProperty(id)) {
        newCart[id].orderProduct.quantity++;
        newCart[id].orderProduct.totalPrice += cart[i].orderProduct.unitPrice;
        newCart.total += cart[i].orderProduct.unitPrice;
        newCart.totalItems++;
      } else {
        newCart[id] = cart[i];
        newCart.total += cart[i].orderProduct.unitPrice;
        newCart.totalItems++;
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
            <h4>{newCart[key].product.name}</h4>
            <h4>${newCart[key].orderProduct.unitPrice / 100}</h4>
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
    <ul>
      <div>
        <h3>
          Cart Subtotal ({newCart.totalItems}{" "}
          {Object.keys(newCart).length === 1 ? "item" : "items"}): $
          {newCart.total / 100}
        </h3>
        <button> Proceed to Checkout</button>
        {mappedObject ? mappedObject : "Nothing in Cart"}
      </div>
    </ul>
  );
};

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapState)(Cart);
