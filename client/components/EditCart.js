import React from "react";
import { connect } from "react-redux";
import { changingProductQuantity, removingFromCart } from "../store";

const EditCart = (props) => {
  // console.log(props)
  let { cart, removeItem, updateCart, user } = props;

  return (
    <div> 
      <h3>
        Cart Subtotal ({items(cart)} {items(cart) === 1 ? "item" : "items"}): $
        {subtotal(cart)} {(combinedQuantityCart(cart))}
      </h3>
      <button> Proceed to Checkout</button>
      {cart.map((item, index) => {
        return (
          <div className="Edit-Product" key={index} value={item}>
            <img className="product-image" src={item.imgURL} />
            <h4>{item.name}</h4>
            <h4>{item.unitPrice}</h4>
            <select onChange={() => updateCart(props.product, event.target.value, props.user)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <button type="button" className="Delete-Product" onClick={() => removeItem(props.product, props.user)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    removeItem: (item, user) => dispatch(removingFromCart(item, user)),
    updateCart: (item, itemQuantity, user) =>
      dispatch(changingProductQuantity(item, itemQuantity, user)),
  };
};

export default connect(mapState, mapDispatch)(EditCart);
